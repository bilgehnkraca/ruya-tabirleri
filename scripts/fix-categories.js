/**
 * fix-categories.js
 * İngilizce ve bozuk kategori isimlerini Türkçe karşılıklarıyla değiştirir.
 * Tüm JSON dosyalarını (batch + alt klasör) tarar.
 */
const fs = require('fs');
const path = require('path');

const CATEGORY_MAP = {
  'items': 'nesneler',
  'animals': 'hayvanlar',
  'places': 'mekanlar',
  'nature': 'doga',
  'people': 'insanlar',
  'food': 'yiyecek',
  'body': 'beden',
  'actions': 'eylemler',
  'travel': 'yolculuk',
  'spiritual': 'soyut-kavramlar',
  'vucut': 'beden',
  'doğa': 'doga',
  'esyalar': 'nesneler',
  'is-hayati': 'eylemler',
  'olaylar': 'genel',
};

const symbolsDir = path.join(__dirname, '..', 'content', 'symbols');
let totalFixed = 0;
let totalFiles = 0;

function fixFile(filePath) {
  let raw;
  try {
    raw = fs.readFileSync(filePath, 'utf-8').trim();
    if (!raw || raw === '{}' || raw === '[]') return;
  } catch (e) {
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.warn(`Parse hata: ${filePath}`);
    return;
  }

  let changed = false;

  if (Array.isArray(data)) {
    data.forEach(item => {
      if (item && item.category && CATEGORY_MAP[item.category]) {
        item.category = CATEGORY_MAP[item.category];
        changed = true;
        totalFixed++;
      }
    });
  } else if (data && typeof data === 'object') {
    if (data.category && CATEGORY_MAP[data.category]) {
      data.category = CATEGORY_MAP[data.category];
      changed = true;
      totalFixed++;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    totalFiles++;
  }
}

// 1. Ana dizindeki JSON dosyaları
const mainFiles = fs.readdirSync(symbolsDir)
  .filter(f => f.endsWith('.json') && !['slug-index.json','symbols-light.json','searchable-symbols.json'].includes(f));

for (const file of mainFiles) {
  fixFile(path.join(symbolsDir, file));
}

// 2. Alt klasörler (animals, items, nature, places)
const subDirs = ['animals', 'items', 'nature', 'places'];
for (const sub of subDirs) {
  const subPath = path.join(symbolsDir, sub);
  if (!fs.existsSync(subPath)) continue;
  const subFiles = fs.readdirSync(subPath).filter(f => f.endsWith('.json'));
  for (const file of subFiles) {
    fixFile(path.join(subPath, file));
  }
}

console.log(`✅ Tamamlandı!`);
console.log(`   Düzeltilen sembol sayısı: ${totalFixed}`);
console.log(`   Değiştirilen dosya sayısı: ${totalFiles}`);
