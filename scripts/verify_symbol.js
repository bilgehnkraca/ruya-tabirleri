const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
  console.error("Lütfen bir dosya yolu belirtin. Kullanım: node verify_symbol.js <dosya_yolu>");
  process.exit(1);
}

try {
  const content = fs.readFileSync(filePath, 'utf-8');
  const symbol = JSON.parse(content);
  
  let totalWords = 0;
  
  const countWords = (text) => {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  };

  // Check required fields
  const required = ['title', 'slug', 'category', 'shortDescription', 'content'];
  for (const req of required) {
    if (!symbol[req]) {
      console.error(`HATA: '${req}' alanı eksik!`);
      process.exit(1);
    }
  }

  const c = symbol.content;
  if (!c.introduction || !c.generalMeaning || !c.religiousMeaning || !c.psychologicalMeaning || !Array.isArray(c.variations) || !Array.isArray(c.faqs)) {
    console.error(`HATA: İçerik (content) yapısı eksik veya hatalı! (introduction, generalMeaning, religiousMeaning, psychologicalMeaning, variations, faqs zorunludur)`);
    process.exit(1);
  }

  // Count words
  totalWords += countWords(c.introduction);
  totalWords += countWords(c.generalMeaning);
  totalWords += countWords(c.religiousMeaning);
  totalWords += countWords(c.psychologicalMeaning);
  
  for (const v of c.variations) {
    totalWords += countWords(v.title);
    totalWords += countWords(v.content);
  }
  
  for (const f of c.faqs) {
    totalWords += countWords(f.question);
    totalWords += countWords(f.answer);
  }

  console.log(`[BAŞARILI] Sembol: ${symbol.title}`);
  console.log(`Toplam Kelime Sayısı: ${totalWords}`);

  if (totalWords < 1000) {
    console.error(`[HATA - ANAYASA İHLALİ] Kelime sayısı 1000'den az (${totalWords}). Lütfen içeriği genişletin.`);
    process.exit(1);
  } else {
    console.log(`[ONAYLANDI] Sembol Anayasa kurallarına uygun (1000+ kelime).`);
  }

} catch (e) {
  console.error("Dosya okunurken veya doğrulanırken hata oluştu:", e.message);
  process.exit(1);
}
