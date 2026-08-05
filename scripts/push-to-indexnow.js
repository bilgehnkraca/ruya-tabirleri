const fs = require('fs');
const path = require('path');

const stateFilePath = path.join(__dirname, 'indexing-state.json');
const symbolsFilePath = path.join(__dirname, '../content/symbols/searchable-symbols.json');

const BATCH_SIZE = 10000;
const SITE_URL = 'https://www.ruyasozlugunuz.com';
const INDEXNOW_KEY = '3b9b4a1c5d8e4f2a9c7b6d5e4f3a2b1c';

async function run() {
  console.log('--- IndexNow (Bing/Yandex) Push Script ---');

  if (!fs.existsSync(symbolsFilePath)) {
    console.error('HATA: searchable-symbols.json bulunamadı. Lütfen önce indeksleri oluşturun.');
    process.exit(1);
  }

  const symbols = JSON.parse(fs.readFileSync(symbolsFilePath, 'utf8'));
  let state = { lastPushedIndexNow: 0, lastPushedDateIndexNow: null };
  
  if (fs.existsSync(stateFilePath)) {
    const fullState = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
    state.lastPushedIndexNow = fullState.lastPushedIndexNow || 0;
    state.lastPushedDateIndexNow = fullState.lastPushedDateIndexNow || null;
  }

  const today = new Date().toISOString().split('T')[0];

  if (state.lastPushedIndexNow >= symbols.length) {
    console.log('TÜM SEMBOLLER BAŞARIYLA INDEXNOW\'A BİLDİRİLDİ! İŞLEM BİTTİ.');
    if (process.env.GITHUB_STEP_SUMMARY) {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### ⚡ IndexNow: Tüm semboller başarıyla gönderilmiş.\n`);
    }
    process.exit(0);
  }

  const startIndex = state.lastPushedIndexNow;
  const endIndex = Math.min(startIndex + BATCH_SIZE, symbols.length);
  const symbolsToPush = symbols.slice(startIndex, endIndex);

  console.log(`Toplam Sembol: ${symbols.length}`);
  console.log(`Kaldığımız İndex: ${startIndex}`);
  console.log(`Gönderilecek URL Sayısı: ${symbolsToPush.length}\n`);

  const urlList = symbolsToPush.map(sym => `${SITE_URL}/sembol/${sym.slug}`);

  const payload = {
    host: "www.ruyasozlugunuz.com",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urlList
  };

  let successCount = 0;
  let failCount = 0;
  let errorMsg = '';

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`[BAŞARILI] ${urlList.length} URL başarıyla gönderildi (HTTP ${response.status})`);
      successCount = urlList.length;
    } else {
      const errText = await response.text();
      console.error(`[HATA] IndexNow API hatası: ${response.status} - ${errText}`);
      failCount = urlList.length;
      errorMsg = `${response.status} - ${errText}`;
    }
  } catch (error) {
    console.error(`[HATA] İstek gönderilirken hata oluştu: ${error.message}`);
    failCount = urlList.length;
    errorMsg = error.message;
  }

  // State'i Güncelle (Tam dosyayı okuyup sadece kendi alanımızı değiştiriyoruz)
  if (fs.existsSync(stateFilePath)) {
    const fullState = JSON.parse(fs.readFileSync(stateFilePath, 'utf8'));
    fullState.lastPushedIndexNow = startIndex + successCount;
    fullState.lastPushedDateIndexNow = today;
    fs.writeFileSync(stateFilePath, JSON.stringify(fullState, null, 2));
  }

  console.log('\n--- İŞLEM ÖZETİ ---');
  console.log(`Başarılı: ${successCount}`);
  console.log(`Hatalı: ${failCount}`);

  if (process.env.GITHUB_STEP_SUMMARY) {
    let summaryContent = `
### ⚡ IndexNow (Bing/Yandex) İşlem Özeti
- **Başarılı:** ${successCount} URL
- **Hatalı:** ${failCount} URL
- **Kalan Sembol Sayısı:** ${symbols.length - (startIndex + successCount)}
`;
    if (failCount > 0) {
      summaryContent += `\n**Hata Detayı:** ${errorMsg}\n`;
    }
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summaryContent);
  }
}

run().catch(error => {
  console.error('Kritik bir hata oluştu:', error);
  process.exit(1);
});
