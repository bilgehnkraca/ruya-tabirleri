/**
 * contentSanitizer.ts
 * 
 * Yapay zeka tarafından üretilen ve tüm sayfalarda tekrar eden (Duplicate Content)
 * boilerplate metinleri dinamik olarak temizler.
 * Bu işlem, Google'ın sitenizi kopya/spam içerik olarak işaretlemesini engeller
 * ve GEO/AEO (AI Overviews) için Information Gain (Bilgi Kazanımı) skorunu artırır.
 */

export function sanitizeBoilerplate(text: string | undefined): string {
  if (!text) return '';

  let sanitized = text;

  const patterns = [
    // İslami Yorum Boilerplate'i
    /Kadim İslami rüya tabiri kaynaklarına\s*\(özellikle İmam Nablusi,\s*İbn-i Sirin,\s*İmam Cafer-i Sadık ve Seyyid Süleyman ekollerine\)\s*göre,?\s*/gi,
    
    // Psikolojik Yorum Boilerplate'i
    /Analitik psikoloji perspektifinden\s*\(özellikle Carl Gustav Jung ve Sigmund Freud'un derinlik psikolojisi kuramları ışığında\)\s*,?\s*/gi
  ];

  for (const pattern of patterns) {
    sanitized = sanitized.replace(pattern, '');
  }

  // Kalan metnin başındaki gereksiz boşlukları temizle ve ilk harfi büyük yap
  sanitized = sanitized.trim();
  if (sanitized.length > 0) {
    sanitized = sanitized.charAt(0).toUpperCase() + sanitized.slice(1);
  }

  return sanitized;
}
