/**
 * titleSanitizer.ts
 * 
 * Veritabanındaki "Rüyada ... Görmek - İslami, Diyanet..." şeklindeki 
 * kalitesiz ve hatalı başlıkları, kullanıcı dostu ve SEO uyumlu hale getirir.
 */

const NOUN_EXCEPTIONS = [
  'ekmek', 'yemek', 'çakmak', 'tokmak', 'ırmak', 
  'parmak', 'kaymak', 'ahmak', 'hamak', 'yumak'
];

export function sanitizeTitle(rawTitle: string | undefined): string {
  if (!rawTitle) return '';

  // 1. Gereksiz yapay zeka suffix'ini temizle
  let clean = rawTitle.replace(/\s*[-–—]\s*İslami.*$/i, '').trim();

  // 2. Başında "Rüyada" yoksa ekle (Standartlaştırma)
  if (!/^Rüyada\s+/i.test(clean)) {
    clean = 'Rüyada ' + clean;
  }

  // 3. "Görmek" ile bitiyorsa ve öncesindeki kelime bir fiil mastarıysa (mak/mek)
  // "Görmek" kelimesini sil (Örn: "ağlamak görmek" -> "ağlamak")
  if (clean.toLowerCase().endsWith(' görmek')) {
    const words = clean.split(' ');
    if (words.length >= 3) { // ["Rüyada", "...", "Görmek"]
      const secondToLast = words[words.length - 2].toLowerCase();
      
      if ((secondToLast.endsWith('mak') || secondToLast.endsWith('mek'))) {
        // İsim istisnaları hariç ("ekmek görmek" doğru bir kullanımdır)
        if (!NOUN_EXCEPTIONS.includes(secondToLast)) {
          // Sondaki " Görmek" kelimesini uçur
          clean = clean.replace(/\s+[Gg]örmek$/i, '');
        }
      }
    }
  }

  // 4. Sadece ilk harfi büyük, kalanı orijinal kalsın
  clean = clean.charAt(0).toUpperCase() + clean.slice(1);

  return clean;
}

/**
 * H1, Meta Title gibi yerlerde salt sembol adını (Core) kullanmak için.
 * Örn: "Rüyada Altın Görmek" -> "Altın"
 */
export function getCoreSymbolName(rawTitle: string | undefined): string {
  const clean = sanitizeTitle(rawTitle);
  return clean
    .replace(/^Rüyada\s+/i, '')
    .replace(/\s+[Gg]örmek$/i, '')
    .replace(/\s+[Aa]lmak$/i, '')
    .replace(/\s+[Ee]tmek$/i, '')
    .replace(/\s+[Oo]lmak$/i, '')
    .trim();
}
