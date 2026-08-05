const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Dosya yolları
const keyFilePath = path.join(__dirname, '../service-account.json');
const stateFilePath = path.join(__dirname, 'indexing-state.json');
const symbolsFilePath = path.join(__dirname, '../content/symbols/searchable-symbols.json');

const BATCH_SIZE = 200; // Google'ın günlük limiti
const SITE_URL = 'https://www.ruyasozlugunuz.com';

async function run() {
  console.log('--- Google Indexing API Push Script ---');

  // 1. JSON Key Kontrolü
  if (!fs.existsSync(keyFilePath)) {
    console.error('HATA: service-account.json dosyası bulunamadı!');
    console.error('Lütfen GCP üzerinden indirdiğiniz JSON dosyasını ana dizine ekleyin.');
    process.exit(1);
  }

  // 2. Sembolleri ve State'i oku
  const symbols = JSON.parse(fs.readFileSync(symbolsFilePath, 'utf8'));
  let state = { lastPushedIndex: 0, lastPushedDate: null };
  
  if (fs.existsSync(stateFilePath)) {
    state = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
  }

  const today = new Date().toISOString().split('T')[0];

  // (İsteğe bağlı) Aynı gün içinde limiti aşmamak için koruma
  // if (state.lastPushedDate === today) {
  //   console.log('Bugünlük limitinize (200) ulaştınız. Lütfen yarın tekrar deneyin.');
  //   process.exit(0);
  // }

  if (state.lastPushedIndex >= symbols.length) {
    console.log('TÜM SEMBOLLER BAŞARIYLA GOOGLE\'A GÖNDERİLDİ! İŞLEM BİTTİ.');
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### 🚀 Google Indexing API: Tüm semboller başarıyla gönderilmiş. Yeni eklenecek içerik bulunmuyor.\n`);
    }
    process.exit(0);
  }

  const startIndex = state.lastPushedIndex;
  const endIndex = Math.min(startIndex + BATCH_SIZE, symbols.length);
  const symbolsToPush = symbols.slice(startIndex, endIndex);

  console.log(`Toplam Sembol: ${symbols.length}`);
  console.log(`Kaldığımız İndex: ${startIndex}`);
  console.log(`Bugün Gönderilecek: ${symbolsToPush.length} adet URL\n`);

  // 3. Google API Auth
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({
    version: 'v3',
    auth: auth,
  });

  let successCount = 0;
  let failCount = 0;
  let summaryLines = [];

  // 4. URL'leri Pushla
  for (let i = 0; i < symbolsToPush.length; i++) {
    const symbol = symbolsToPush[i];
    const url = `${SITE_URL}/sembol/${symbol.slug}`;
    
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      
      console.log(`[BAŞARILI] (${startIndex + i + 1}/${symbols.length}) - ${url}`);
      summaryLines.push(`- ✅ ${url}`);
      successCount++;
    } catch (error) {
      console.error(`[HATA] (${startIndex + i + 1}/${symbols.length}) - ${url} : ${error.message}`);
      summaryLines.push(`- ❌ ${url} (Hata: ${error.message})`);
      failCount++;
    }

    // Google API rate limit'e takılmamak için araya küçük bir bekleme (throttle) ekliyoruz
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // 5. State'i Güncelle
  state.lastPushedIndex = endIndex;
  state.lastPushedDate = today;
  fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2));

  console.log('\n--- İŞLEM ÖZETİ ---');
  console.log(`Başarılı: ${successCount}`);
  console.log(`Hatalı: ${failCount}`);
  console.log(`Yeni Kalınan İndex: ${endIndex}`);
  console.log(`Bir sonraki çalışma için "npm run index:push" yazabilirsiniz.`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    const summaryContent = `
### 🚀 Google Indexing İşlem Özeti
- **Başarılı:** ${successCount}
- **Hatalı:** ${failCount}
- **Kalan Sembol Sayısı:** ${symbols.length - endIndex}

<details>
<summary>Gönderilen ${summaryLines.length} URL'yi gör</summary>

${summaryLines.join('\n')}

</details>
`;
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summaryContent);
  }
}

run().catch(console.error);
