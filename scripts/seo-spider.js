const fs = require('fs');
const path = require('path');

const symbolsDir = path.join(__dirname, '../content/symbols');
const searchableSymbolsPath = path.join(symbolsDir, 'searchable-symbols.json');

async function run() {
  console.log('--- 🕷️ SEO Örümceği Başlıyor ---');

  const lightFilePath = path.join(symbolsDir, 'symbols-light.json');
  if (!fs.existsSync(lightFilePath)) {
    console.error('[HATA] symbols-light.json bulunamadı!');
    process.exit(1);
  }

  // 1. Load all known symbols EXACTLY as the app does via getCachedSymbolsLight()
  const rawLight = JSON.parse(fs.readFileSync(lightFilePath, 'utf8'));
  const allSymbols = rawLight
    .filter((s) => s.title && s.title.length >= 3)
    .map((s) => ({ title: s.title, slug: s.slug }))
    .sort((a, b) => b.title.length - a.title.length);

  console.log(`[BİLGİ] Uygulama mantığıyla (symbols-light) toplam ${allSymbols.length} rüya sembolü iç linkleme havuzuna yüklendi.`);

  const tokenMap = new Map();
  const allSlugs = new Set(rawLight.map(s => s.slug)); // Track ALL original slugs for orphan detection

  function buildKeywords(s) {
    const keywords = [];
    const slugWord = s.slug
      .replace(/-/g, ' ')
      .replace(/\byi\b/g, 'yı')
      .trim();
    if (slugWord.length >= 3 && slugWord.length <= 40) {
      keywords.push(slugWord);
    }
    const coreMatch = s.title.match(/^R\u00fcyada\s+(.+?)\s+G\u00f6rmek/i);
    if (coreMatch) {
      const core = coreMatch[1].trim();
      if (core.length >= 3 && core.length <= 40 && !keywords.includes(core.toLowerCase())) {
        keywords.push(core.toLowerCase());
      }
    }
    return Array.from(new Set(keywords.filter(k => k.length >= 3)));
  }

  console.log('[BİLGİ] Çapraz linkleme haritası oluşturuluyor...');
  const entries = [];
  for (const s of allSymbols) {
    const kws = buildKeywords(s);
    for (const kw of kws) {
      if (!tokenMap.has(kw.toLowerCase())) {
        entries.push({ keyword: kw.toLowerCase(), slug: s.slug });
      }
    }
  }

  // Sort by length desc
  entries.sort((a, b) => b.keyword.length - a.keyword.length);
  for (const { keyword, slug } of entries) {
    if (!tokenMap.has(keyword)) {
      tokenMap.set(keyword, slug);
    }
  }

  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = Array.from(tokenMap.keys())
    .map(escapeRegExp)
    .join('|');
  const cachedRegex = new RegExp(`(?<![\\w\\u00C0-\\u024F])(${pattern})(?![\\w\\u00C0-\\u024F])`, 'gi');

  console.log(`[BİLGİ] ${tokenMap.size} anahtar kelime için Regex oluşturuldu.`);

  // 2. Scan all content to find references
  const referencedSlugs = new Set();

  function getAllJsonFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        getAllJsonFiles(filePath, fileList);
      } else if (filePath.endsWith('.json') && !filePath.includes('searchable-symbols.json') && !filePath.includes('slug-index.json') && !filePath.includes('symbols-light.json')) {
        fileList.push(filePath);
      }
    }
    return fileList;
  }

  const jsonFilesPaths = getAllJsonFiles(symbolsDir);

  console.log(`[BİLGİ] ${jsonFilesPaths.length} içerik dosyası taranıyor...`);
  
  let processedCount = 0;
  for (const filePath of jsonFilesPaths) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const items = Array.isArray(data) ? data : [data];
      
      for (const item of items) {
        if (!item.content) continue;
        
        let fullText = [
          item.content.introduction || '',
          item.content.generalMeaning || '',
          item.content.religiousMeaning || '',
          item.content.psychologicalMeaning || '',
        ].join(' ');

        if (item.content.variations) {
          fullText += ' ' + item.content.variations.map(v => v.content).join(' ');
        }
        if (item.content.faqs) {
          fullText += ' ' + item.content.faqs.map(f => f.answer).join(' ');
        }

        let match;
        cachedRegex.lastIndex = 0;
        while ((match = cachedRegex.exec(fullText)) !== null) {
          const matchedKeyword = match[0].toLowerCase();
          const targetSlug = tokenMap.get(matchedKeyword);
          // A symbol cannot cross-link to itself
          if (targetSlug && targetSlug !== item.slug) {
            referencedSlugs.add(targetSlug);
          }
        }
        
        // Include relatedSymbols (Bunlar da ilginizi çekebilir)
        if (item.relatedSymbols && Array.isArray(item.relatedSymbols)) {
          for (const targetSlug of item.relatedSymbols) {
            if (targetSlug !== item.slug) {
              referencedSlugs.add(targetSlug);
            }
          }
        }
        
        processedCount++;
      }
    } catch (e) {
      console.error(`[HATA] ${file} okunamadı:`, e.message);
    }
  }

  console.log(`[BİLGİ] ${processedCount} sembol tarandı.`);

  // 3. Find Orphans
  const orphanSlugs = [];
  for (const slug of allSlugs) {
    if (!referencedSlugs.has(slug)) {
      orphanSlugs.push(slug);
    }
  }

  console.log('\n--- 📊 SONUÇLAR ---');
  console.log(`Toplam Sembol: ${allSlugs.size}`);
  console.log(`İç Link Alanlar: ${referencedSlugs.size}`);
  console.log(`YALNIZ SAYFALAR (Orphan): ${orphanSlugs.length}`);

  if (orphanSlugs.length > 0) {
    console.log(`\nÖrnek Yalnız Sayfalar (İlk 20):`);
    console.log(orphanSlugs.slice(0, 20).map(s => `- ${s}`).join('\n'));
  } else {
    console.log('\nHarika! Sistemde hiç yalnız sayfa (Orphan Page) yok!');
  }

  // Write summary to GitHub Actions if available
  if (process.env.GITHUB_STEP_SUMMARY) {
    let summary = `### 🕷️ SEO Örümceği Raporu\n`;
    summary += `- **Toplam Sembol:** ${allSlugs.size}\n`;
    summary += `- **İç Link Alan:** ${referencedSlugs.size}\n`;
    summary += `- **Yalnız Sayfalar (Orphan):** ${orphanSlugs.length}\n`;
    
    if (orphanSlugs.length > 0) {
      summary += `\n**⚠️ Yalnız Sayfalara Örnekler (İlk 50)**\n`;
      summary += orphanSlugs.slice(0, 50).map(s => `- \`/sembol/${s}\``).join('\n');
    }
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  }
}

run().catch(console.error);
