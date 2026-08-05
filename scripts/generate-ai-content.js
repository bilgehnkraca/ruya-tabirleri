const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const BATCH_SIZE = 5;
const PENDING_FILE = path.join(__dirname, '../content/pending-symbols.txt');
const SYMBOLS_DIR = path.join(__dirname, '../content/symbols');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function run() {
  console.log('--- 🤖 Otonom Yazar (Gemini AI) Başlıyor ---');

  if (!process.env.GEMINI_API_KEY) {
    console.error('[HATA] GEMINI_API_KEY bulunamadı!');
    process.exit(1);
  }

  if (!fs.existsSync(PENDING_FILE)) {
    console.log('[BİLGİ] Bekleyen rüya (pending-symbols.txt) bulunamadı. Yapılacak iş yok.');
    return;
  }

  const lines = fs.readFileSync(PENDING_FILE, 'utf8').split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  if (lines.length === 0) {
    console.log('[BİLGİ] Havuzda bekleyen rüya kelimesi kalmadı.');
    return;
  }

  const toProcess = lines.slice(0, BATCH_SIZE);
  const remaining = lines.slice(BATCH_SIZE);

  console.log(`[BİLGİ] Seçilen Kelimeler: ${toProcess.join(', ')}`);

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const generatedSymbols = [];

  for (const keyword of toProcess) {
    console.log(`\n✍️ Üretiliyor: "${keyword}"...`);
    
    const prompt = `
Sen 22 yıllık tecrübeli bir rüya tabiri uzmanı (İbn-i Sirin, İmam Nablusi, Diyanet kaynaklarına hakim) ve aynı zamanda derinlik psikolojisi (Carl Jung, Sigmund Freud) uzmanısın.
Görev: "${keyword}" konusu için aşağıdaki JSON şemasına birebir uyumlu, muazzam derinlikte bir rüya tabiri makalesi yazmak.

KURALLAR (KESİNLİKLE UYULACAK):
1. Toplam metin uzunluğu KESİNLİKLE en az 850 kelime olmalıdır! Her başlığın altını uzun, doyurucu ve derin paragraflarla doldur.
2. Fluff (boş laf kalabalığı, kelime doldurma, tekrar) YASAKTIR. Sadece derin analizler, sembolik manalar ve ansiklopedik bilgiler verilecek.
3. Çıktı sadece ve sadece geçerli bir JSON objesi olmalıdır. Asla Markdown (\`\`\`json) kullanma.

JSON ŞEMASI:
{
  "slug": "string",
  "title": "Rüyada {Sembol} Görmek - İslami, Diyanet ve Psikolojik Tabiri",
  "category": "genel|hayvanlar|nesneler|doga|mekanlar",
  "shortDescription": "150-160 karakterlik özet.",
  "content": {
    "introduction": "Konuya çok detaylı ve felsefi bir giriş paragrafı (min 150 kelime).",
    "generalMeaning": "Gündelik hayata yansımaları, genel tabiri (min 200 kelime).",
    "variations": [
      {
        "title": "Rüyada (Varyasyon 1) Görmek",
        "content": "Bu varyasyonun tabiri."
      },
      {
        "title": "Rüyada (Varyasyon 2) Görmek",
        "content": "Bu varyasyonun tabiri."
      }
    ],
    "religiousMeaning": "İslami, Diyanet, İbn-i Sirin yorumları (min 200 kelime).",
    "psychologicalMeaning": "Carl Jung, Freud analizleri, bilinçaltı yansıması (min 200 kelime).",
    "faqs": [
      {
        "question": "Sıkça sorulan soru 1?",
        "answer": "Cevabı"
      },
      {
        "question": "Sıkça sorulan soru 2?",
        "answer": "Cevabı"
      }
    ]
  },
  "relatedSymbols": []
}
`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      });

      const rawJson = response.text;
      const parsed = JSON.parse(rawJson);
      
      parsed.slug = slugify(keyword);
      const today = new Date().toISOString();
      parsed.datePublished = today;
      parsed.dateModified = today;

      generatedSymbols.push(parsed);
      console.log(`✅ Başarılı: ${parsed.title}`);

    } catch (e) {
      console.error(`❌ Hata (${keyword}):`, e.message);
    }
  }

  if (generatedSymbols.length > 0) {
    const dateStr = new Date().toISOString().split('T')[0];
    const fileName = `generated-ai-batch-${dateStr}-${Math.floor(Math.random()*1000)}.json`;
    const filePath = path.join(SYMBOLS_DIR, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(generatedSymbols, null, 2));
    console.log(`\n[BİLGİ] Üretilen ${generatedSymbols.length} sembol ${fileName} olarak kaydedildi.`);

    fs.writeFileSync(PENDING_FILE, remaining.join('\n'));
    console.log(`[BİLGİ] Bekleyenler güncellendi. Kalan rüya sayısı: ${remaining.length}`);
    
    if (process.env.GITHUB_STEP_SUMMARY) {
      let summary = `### 🤖 Gemini AI İçerik Üretimi Başarılı\n`;
      summary += `- **Üretilen Makale Sayısı:** ${generatedSymbols.length}\n`;
      summary += `- **Kalan Bekleyen Konu Sayısı:** ${remaining.length}\n\n`;
      summary += `**Üretilen Başlıklar:**\n`;
      generatedSymbols.forEach(s => summary += `- ${s.title}\n`);
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
    }
  } else {
    console.log('\n[UYARI] Hiçbir sembol üretilemedi!');
    process.exit(1);
  }
}

run().catch(console.error);
