import { getAllCategories } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tüm Rüya Tabiri Kategorileri | Rüya Tabirleri Sözlüğü',
  description: 'Dini, İslami, Psikolojik ve Genel rüya tabirleri kategorilerimizi inceleyin ve aradığınız rüya sembollerini kolayca bulun.',
  alternates: {
    canonical: '/kategoriler',
  },
  openGraph: {
    title: 'Tüm Rüya Tabiri Kategorileri | Rüya Tabirleri Sözlüğü',
    description: 'Dini, İslami, Psikolojik ve Genel rüya tabirleri kategorilerini keşfedin.',
    url: 'https://www.ruyasozlugunuz.com/kategoriler',
    type: 'website',
  }
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://www.ruyasozlugunuz.com' },
      { '@type': 'ListItem', position: 2, name: 'Kategoriler', item: 'https://www.ruyasozlugunuz.com/kategoriler' }
    ]
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Rüya Tabirleri Kategorileri',
    description: 'Tüm rüya tabiri kategorileri.',
    url: 'https://www.ruyasozlugunuz.com/kategoriler',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categories.map((cat, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.ruyasozlugunuz.com/kategoriler/${cat}`,
        name: cat.replace('-', ' ')
      }))
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <nav className="text-sm text-neutral-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-neutral-200">Kategoriler</span>
      </nav>

      <header className="mb-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center mb-6">
          <Compass className="text-mystic-400 w-8 h-8" />
        </div>
        <h1 className="text-4xl tracking-tight font-bold text-white mb-4">Tüm Kategoriler</h1>
        <p className="text-neutral-400">Aradığınız rüya tabirlerini konularına göre ayrılmış kategorilerimizde keşfedin.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat} href={`/kategoriler/${cat}`} className="symbol-card group flex flex-col items-center justify-center py-10 text-center">
            <h3 className="tracking-tight text-xl font-semibold text-white mb-2 group-hover:text-mystic-400 transition-colors capitalize">
              {cat.replace('-', ' ')}
            </h3>
            <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">İncele &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
