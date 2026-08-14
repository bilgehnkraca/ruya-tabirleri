#!/usr/bin/env node
/**
 * update-valid-slugs.js
 * ─────────────────────────────────────────────────────────────
 * Bu script, slug-index.json dosyasındaki güncel slug listesini
 * okuyarak src/lib/valid-slugs.ts dosyasını otomatik olarak günceller.
 *
 * KULLANIM:
 *   node scripts/update-valid-slugs.js
 *
 * NE ZAMAN ÇALIŞTIRILMALI:
 *   - Yeni rüya tabiri(leri) içerik dosyalarına eklendikten sonra
 *   - generate-slug-index.js çalıştırıldıktan hemen sonra
 *   - GitHub'a push yapmadan önce (opsiyonel ama önerilir)
 * ─────────────────────────────────────────────────────────────
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'content', 'symbols', 'slug-index.json');
const OUTPUT_PATH = path.join(ROOT, 'src', 'lib', 'valid-slugs.ts');

// ── 1. slug-index.json'ı oku ──────────────────────────────────
if (!fs.existsSync(INDEX_PATH)) {
  console.error('❌ HATA: slug-index.json bulunamadı!');
  console.error('   Önce şunu çalıştırın: node scripts/generate-slug-index.js');
  process.exit(1);
}

const slugIndex = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf-8'));
const slugs = Object.keys(slugIndex).sort();

if (slugs.length === 0) {
  console.error('❌ HATA: slug-index.json boş! Lütfen kontrol edin.');
  process.exit(1);
}

// ── 2. Mevcut dosyadaki slug sayısını karşılaştır ──────────────
let prevCount = 0;
if (fs.existsSync(OUTPUT_PATH)) {
  const prevContent = fs.readFileSync(OUTPUT_PATH, 'utf-8');
  const match = prevContent.match(/\/\/ Total: (\d+) slugs/);
  if (match) prevCount = parseInt(match[1], 10);
}

const newCount = slugs.length;
const diff = newCount - prevCount;

// ── 3. valid-slugs.ts dosyasını oluştur ───────────────────────
const timestamp = new Date().toISOString();
const fileContent = `// Bu dosya OTOMATIK oluşturulmuştur. Manuel olarak düzenlemeyin!
// Güncellemek için: node scripts/update-valid-slugs.js
// Son güncelleme: ${timestamp}
// Total: ${newCount} slugs

export const validSlugs = new Set<string>(${JSON.stringify(slugs, null, 2)});
`;

fs.writeFileSync(OUTPUT_PATH, fileContent, 'utf-8');

// ── 4. Özet rapor ─────────────────────────────────────────────
console.log('');
console.log('✅ valid-slugs.ts başarıyla güncellendi!');
console.log('');
console.log(`   📁 Dosya     : src/lib/valid-slugs.ts`);
console.log(`   🔢 Toplam    : ${newCount.toLocaleString('tr-TR')} sembol`);
if (prevCount > 0) {
  const sign = diff >= 0 ? '+' : '';
  console.log(`   📈 Değişim   : ${sign}${diff} sembol (önceki: ${prevCount.toLocaleString('tr-TR')})`);
}
console.log('');
console.log('💡 Artık yeni slug\'lar Middleware tarafından geçerli olarak tanınacak.');
console.log('   Değişikliği yayına almayı unutmayın: git add . && git commit && git push');
console.log('');
