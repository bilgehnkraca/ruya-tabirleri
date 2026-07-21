import { getAllSymbols, getAllCategories } from '@/lib/data';
import DetayliAramaClient from '@/components/DetayliAramaClient';
import Link from 'next/link';
import { Book, Compass, Moon, Sparkles } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

export default function Home() {
  const symbols = getAllSymbols();
  const categories = getAllCategories();
  
  const popularSymbols = symbols.slice(0, 12);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rüya Tabirleri',
    url: 'https://ruyatabirleri.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ruyatabirleri.com/ara?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rüya Tabirleri',
    url: 'https://ruyatabirleri.com',
    description: "Türkiye'nin kapsamlı rüya tabirleri sözlüğü"
  };

  return (
    <div className="flex flex-col gap-16 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <section className="text-center pt-12 pb-8 px-4 flex flex-col items-center justify-center min-h-[50vh] relative">
        <div className="absolute inset-0 bg-mystic-900/20 rounded-3xl blur-3xl -z-10" />
        <Moon className="text-mystic-400 w-16 h-16 mb-6 opacity-80" />
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-white">
          Rüyalarınızın <span className="text-transparent bg-clip-text bg-gradient-to-r from-mystic-400 to-accent-500">Gizli Dili</span>
        </h1>
        <p className="text-lg md:text-xl text-night-300 max-w-2xl mb-12">
          Türkiye&apos;nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü. Bilinçaltınızın size anlattıklarını keşfedin.
        </p>
        
        <DetayliAramaClient symbols={symbols} />
      </section>

      <AdSlot type="adsense" slotId="HOMEPAGE_SLOT_ID" />

      <section>
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-mystic-500" />
          <h2 className="text-2xl font-serif font-bold text-white">En Çok Aranan Semboller</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularSymbols.map(symbol => (
            <Link 
              key={symbol.slug} 
              href={`/ruyada-${symbol.slug}-gormek`}
              className="symbol-card group flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-mystic-100 mb-3 group-hover:text-mystic-400 transition-colors">
                {symbol.title}
              </h3>
              <p className="text-night-300 text-sm flex-grow line-clamp-3">
                {symbol.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <Compass className="text-mystic-500" />
          <h2 className="text-2xl font-serif font-bold text-white">Kategorilere Göre Keşfedin</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link 
              key={category} 
              href={`/kategoriler/${category}`}
              className="bg-night-800 border border-night-700 rounded-xl p-6 text-center hover:bg-mystic-900/50 hover:border-mystic-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-night-700 mx-auto flex items-center justify-center mb-4 group-hover:bg-mystic-800 transition-colors">
                <Book className="text-mystic-300" />
              </div>
              <h3 className="capitalize font-medium text-night-100">{category.replace('-', ' ')}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
