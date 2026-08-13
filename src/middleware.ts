import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validSlugs } from './lib/valid-slugs';

// Basit kategori listesi (kategoriler/[category] rotasını korumak için)
const VALID_CATEGORIES = new Set([
  'dini-ve-islami-semboller',
  'hayvanlar-alemi',
  'doga-ve-olaylar',
  'insan-ve-aile',
  'nesneler-ve-esya',
  'eylem-ve-durumlar',
  'yiyecek-ve-icecek',
  'mekanlar-ve-yapilar',
  'olum-ve-ruhani-haller',
  'renkler-ve-sayilar',
  'meslekler-ve-fig-rler',
  'giyim-ve-kusam',
  'hastalik-ve-sifa',
  'soyut-kavramlar'
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sadece /sembol/ rotasını koru
  if (pathname.startsWith('/sembol/')) {
    const slug = pathname.replace('/sembol/', '');
    // Eğer slug geçerli değilse, Next.js'e hiç ulaşmadan 404 dön! (ISR Cache zehirlenmesini önler)
    if (!validSlugs.has(slug)) {
      return new NextResponse('Sayfa bulunamadı', { status: 404 });
    }
  }

  // Kategori koruması
  if (pathname.startsWith('/kategoriler/')) {
    const category = pathname.replace('/kategoriler/', '');
    if (category && !VALID_CATEGORIES.has(category)) {
      return new NextResponse('Kategori bulunamadı', { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/sembol/:path*', '/kategoriler/:path*'],
};
