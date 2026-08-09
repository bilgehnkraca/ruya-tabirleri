import { getSymbolsByCategory, getAllCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { sanitizeTitle } from '@/lib/titleSanitizer';

interface Props {
  params: { category: string };
  searchParams: { page?: string };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const categories = getAllCategories();
  if (!categories.includes(params.category)) return { title: 'Kategori Bulunamadı' };

  const categoryName = params.category.replace('-', ' ');
  const pageStr = searchParams?.page;
  const page = pageStr ? parseInt(pageStr, 10) : 1;
  const pageSuffix = page > 1 ? ` - Sayfa ${page}` : '';
  const pageParam = page > 1 ? `?page=${page}` : '';
  
  const url = `https://www.ruyasozlugunuz.com/kategoriler/${params.category}${pageParam}`;
  const title = `${categoryName} Kategorisindeki Rüya Tabirleri${pageSuffix} | Rüya Tabirleri Sözlüğü`;
  const description = `${categoryName} ile ilgili tüm rüya sembolleri ve detaylı yorumları.${pageSuffix}`;

  return {
    title: `${categoryName} Kategorisindeki Rüya Tabirleri${pageSuffix}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Rüya Tabirleri Sözlüğü',
      images: [
        {
          url: 'https://www.ruyasozlugunuz.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.ruyasozlugunuz.com/og-image.jpg'],
    }
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params, searchParams }: Props) {
  const allSymbols = getSymbolsByCategory(params.category);
  if (allSymbols.length === 0) notFound();
  const categoryName = params.category.replace('-', ' ');

  const page = Number(searchParams.page) || 1;
  const ITEMS_PER_PAGE = 200;
  const totalPages = Math.ceil(allSymbols.length / ITEMS_PER_PAGE);
  
  if (page < 1 || page > totalPages) {
    notFound();
  }

  const symbols = allSymbols.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://www.ruyasozlugunuz.com' },
      { '@type': 'ListItem', position: 2, name: 'Kategoriler', item: 'https://www.ruyasozlugunuz.com/kategoriler' },
      { '@type': 'ListItem', position: 3, name: categoryName, item: `https://www.ruyasozlugunuz.com/kategoriler/${params.category}` }
    ]
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} Kategorisindeki Rüya Tabirleri`,
    description: `${categoryName} ile ilgili tüm rüya sembolleri ve detaylı yorumları.`,
    url: `https://www.ruyasozlugunuz.com/kategoriler/${params.category}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: symbols.map((symbol, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.ruyasozlugunuz.com/sembol/${symbol.slug}`,
        name: symbol.title
      }))
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-night-200 capitalize">{categoryName}</span>
      </nav>

      <header className="mb-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]/50 flex items-center justify-center mb-6">
          <Compass className="text-mystic-400 w-8 h-8" />
        </div>
        <h1 className="text-4xl tracking-tight font-bold text-white mb-4 capitalize">{categoryName} Sembolleri</h1>
        <p className="text-night-300">Bu kategoride toplam {symbols.length} adet rüya tabiri bulunmaktadır.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {symbols.map(symbol => (
          <Link key={symbol.slug} href={`/sembol/${symbol.slug}`} className="symbol-card group flex flex-col h-full">
            <h3 className="tracking-tight text-xl font-semibold text-white mb-3 group-hover:text-mystic-400 transition-colors">{sanitizeTitle(symbol.title)}</h3>
            <p className="text-night-300 text-sm flex-grow line-clamp-3">{symbol.shortDescription}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 border-t border-night-700 pt-8">
          {page > 1 ? (
            <Link href={`/kategoriler/${params.category}?page=${page - 1}`} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-lg text-neutral-300 transition-colors">
              <ChevronLeft className="w-5 h-5" /> Önceki
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 bg-night-900 text-night-500 rounded-lg cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" /> Önceki
            </span>
          )}
          
          <span className="text-night-300 font-medium">
            Sayfa {page} / {totalPages}
          </span>

          {page < totalPages ? (
            <Link href={`/kategoriler/${params.category}?page=${page + 1}`} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-lg text-neutral-300 transition-colors">
              Sonraki <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 bg-night-900 text-night-500 rounded-lg cursor-not-allowed">
              Sonraki <ChevronRight className="w-5 h-5" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
