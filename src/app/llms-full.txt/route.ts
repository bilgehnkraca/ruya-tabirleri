import { NextResponse } from 'next/server';
import { getAllSymbols } from '@/lib/data';

// Static generation at build time for maximum performance
export const dynamic = 'force-static';

export async function GET() {
  const symbols = getAllSymbols();

  const lines: string[] = [
    '# Rüya Tabirleri Sözlüğü — Tam Sembol Listesi',
    '',
    `> Bu dosya, ruyasozlugunuz.com üzerindeki ${symbols.length} rüya sembolünün yapay zeka sistemleri için optimize edilmiş özetidir.`,
    `> Son güncelleme: ${new Date().toISOString().split('T')[0]}`,
    '',
    '## Semboller',
    '',
  ];

  // Group by category
  const grouped: Record<string, typeof symbols> = {};
  for (const s of symbols) {
    const cat = s.category || 'diger';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(s);
  }

  // Turkish category display names
  const categoryNames: Record<string, string> = {
    hayvanlar: 'Hayvanlar',
    insanlar: 'İnsanlar ve İlişkiler',
    ailem: 'Aile',
    doga: 'Doğa ve Tabiat',
    'doğa': 'Doğa ve Tabiat',
    nature: 'Doğa ve Tabiat',
    mekanlar: 'Mekanlar ve Yapılar',
    places: 'Mekanlar ve Yapılar',
    nesneler: 'Nesneler ve Eşyalar',
    esyalar: 'Eşyalar',
    items: 'Nesneler',
    eylemler: 'Eylemler ve Hareketler',
    yolculuk: 'Yolculuk ve Seyahat',
    'is-hayati': 'İş Hayatı ve Kariyer',
    vucut: 'Vücut ve Beden',
    beden: 'Beden ve Sağlık',
    olaylar: 'Olaylar ve Durumlar',
    'soyut-kavramlar': 'Soyut ve Manevi Kavramlar',
    yiyecek: 'Yiyecek ve İçecek',
    animals: 'Hayvanlar',
    diger: 'Diğer',
  };

  const sortedCategories = Object.keys(grouped).sort((a, b) => {
    const nameA = categoryNames[a] || a;
    const nameB = categoryNames[b] || b;
    return nameA.localeCompare(nameB, 'tr');
  });

  for (const cat of sortedCategories) {
    const displayName = categoryNames[cat] || cat;
    const catSymbols = grouped[cat].sort((a, b) => a.title.localeCompare(b.title, 'tr'));

    lines.push(`### ${displayName} (${catSymbols.length} sembol)`);
    lines.push('');

    for (const s of catSymbols) {
      // Clean title for compact display
      const cleanTitle = s.title
        .replace(/^Rüyada\s+/i, '')
        .replace(/\s*[-–—]\s*İslami.*$/i, '')
        .trim();
      
      // Use generalMeaning if shortDescription is missing or too short, truncated to ~150 chars
      const baseDesc = (s.shortDescription && s.shortDescription.length > 20) 
        ? s.shortDescription 
        : (s.content?.generalMeaning || '');
      
      const desc = baseDesc
        ? baseDesc.slice(0, 150).replace(/\s+\S*$/, '…')
        : '';

      lines.push(`- [${cleanTitle}](https://www.ruyasozlugunuz.com/ruyada-${s.slug}-gormek): ${desc}`);
    }

    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('Bu liste otomatik olarak oluşturulmuştur. Detaylı bilgi: https://www.ruyasozlugunuz.com/llms.txt');

  const content = lines.join('\n');

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
