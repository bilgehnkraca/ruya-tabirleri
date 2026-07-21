import { getSymbolsByCategory, getAllCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass } from 'lucide-react';

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = getAllCategories();
  if (!categories.includes(params.category)) return { title: 'Kategori Bulunamadı' };

  const categoryName = params.category.replace('-', ' ');
  return {
    title: `${categoryName} Kategorisindeki Rüya Tabirleri`,
    description: `${categoryName} ile ilgili tüm rüya sembolleri ve detaylı yorumları.`,
    alternates: {
      canonical: `/kategoriler/${params.category}`,
    }
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: Props) {
  const symbols = getSymbolsByCategory(params.category);
  if (symbols.length === 0) notFound();
  const categoryName = params.category.replace('-', ' ');

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
        url: `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek`,
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
        <div className="w-16 h-16 rounded-full bg-mystic-900/50 flex items-center justify-center mb-6">
          <Compass className="text-mystic-400 w-8 h-8" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-white mb-4 capitalize">{categoryName} Sembolleri</h1>
        <p className="text-night-300">Bu kategoride toplam {symbols.length} adet rüya tabiri bulunmaktadır.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {symbols.map(symbol => (
          <Link key={symbol.slug} href={`/ruyada-${symbol.slug}-gormek`} className="symbol-card group flex flex-col h-full">
            <h3 className="text-xl font-semibold text-mystic-100 mb-3 group-hover:text-mystic-400 transition-colors">{symbol.title}</h3>
            <p className="text-night-300 text-sm flex-grow line-clamp-3">{symbol.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
