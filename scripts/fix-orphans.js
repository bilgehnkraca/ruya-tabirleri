const fs = require('fs');
const path = require('path');

const symbolsDir = path.join(__dirname, '../content/symbols');
const searchableSymbolsPath = path.join(symbolsDir, 'searchable-symbols.json');

async function run() {
  console.log('--- 🛠️ Yalnız Sayfa (Orphan) Düzeltici Başlıyor ---');

  if (!fs.existsSync(searchableSymbolsPath)) {
    console.error('[HATA] searchable-symbols.json bulunamadı!');
    process.exit(1);
  }

  const allSymbols = JSON.parse(fs.readFileSync(searchableSymbolsPath, 'utf8'));
  console.log(`[BİLGİ] Toplam ${allSymbols.length} rüya sembolü yüklendi.`);

  // Stopwords to ignore in matching
  const stopwords = new Set(['gormek', 'ruyada', 'almak', 'etmek', 'olmak', 've', 'ile', 'icmek', 'yemek', 'yapmak', 'gitmek', 'gelmek', 'vermek', 'gormesi', 'goren', 'icin']);

  // Build an index of words -> array of slugs
  const wordIndex = new Map();
  const categoryIndex = new Map();

  for (const s of allSymbols) {
    // Add to category index
    if (!categoryIndex.has(s.category)) {
      categoryIndex.set(s.category, []);
    }
    categoryIndex.get(s.category).push(s.slug);

    // Add to word index
    const words = s.slug.split('-').filter(w => w.length > 2 && !stopwords.has(w));
    for (const w of words) {
      if (!wordIndex.has(w)) {
        wordIndex.set(w, []);
      }
      wordIndex.get(w).push(s.slug);
    }
  }

  console.log(`[BİLGİ] Kelime indeksi oluşturuldu. (Toplam ${wordIndex.size} farklı kelime kökü)`);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Iterate over files recursively
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

  let updatedFilesCount = 0;
  let totalSymbolsProcessed = 0;
  let orphansFixed = 0;

  for (const filePath of jsonFilesPaths) {
    let modified = false;

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const isArray = Array.isArray(data);
      const items = isArray ? data : [data];
      
      for (const item of items) {
        totalSymbolsProcessed++;
        
        // If it already has 5 related symbols, skip
        if (item.relatedSymbols && item.relatedSymbols.length >= 5) {
          continue;
        }

        const relatedSet = new Set(item.relatedSymbols || []);
        const words = item.slug.split('-').filter(w => w.length > 2 && !stopwords.has(w));
        
        // 1. Find related symbols by word match
        let potentialMatches = [];
        for (const w of words) {
          const matches = wordIndex.get(w);
          if (matches) {
            potentialMatches.push(...matches);
          }
        }

        // Shuffle and add unique ones until we hit 5
        shuffle(potentialMatches);
        for (const p of potentialMatches) {
          if (p !== item.slug && !relatedSet.has(p)) {
            relatedSet.add(p);
          }
          if (relatedSet.size >= 5) break;
        }

        // 2. If still less than 5, pick random from same category
        if (relatedSet.size < 5) {
          const categoryMatches = categoryIndex.get(item.category) || [];
          shuffle(categoryMatches);
          for (const p of categoryMatches) {
            if (p !== item.slug && !relatedSet.has(p)) {
              relatedSet.add(p);
            }
            if (relatedSet.size >= 5) break;
          }
        }

        // 3. Fallback to any random symbol if STILL less than 5 (rare)
        if (relatedSet.size < 5) {
          const anyMatches = [...allSymbols.map(s => s.slug)];
          shuffle(anyMatches);
          for (const p of anyMatches) {
            if (p !== item.slug && !relatedSet.has(p)) {
              relatedSet.add(p);
            }
            if (relatedSet.size >= 5) break;
          }
        }

        // Apply changes
        item.relatedSymbols = Array.from(relatedSet).slice(0, 5);
        modified = true;
        orphansFixed++;
      }

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        updatedFilesCount++;
      }
    } catch (e) {
      console.error(`[HATA] ${file} okunamadı/yazılamadı:`, e.message);
    }
  }

  console.log('\n--- 📊 DÜZELTME SONUÇLARI ---');
  console.log(`Taranan Toplam Sembol: ${totalSymbolsProcessed}`);
  console.log(`Link Eklenen (Kurtarılan) Sembol: ${orphansFixed}`);
  console.log(`Güncellenen JSON Dosyası: ${updatedFilesCount}`);
}

run().catch(console.error);
