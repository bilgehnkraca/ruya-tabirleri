import { getAllSymbols, getAllCategories } from '@/lib/data';
import DetayliAramaClient from '@/components/DetayliAramaClient';
import Link from 'next/link';
import { Book, Compass, Moon, Sparkles, Star } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import { checkIsIslamicSpecialDay } from '@/lib/islamicDates';

export default function Home() {
  const symbols = getAllSymbols();
  const categories = getAllCategories();

  
  const popularSymbols = symbols.slice(0, 12);
  const specialDay = checkIsIslamicSpecialDay();
  
  // Dummy religious slugs for demonstration
  const religiousSlugs = ['su', 'kabe', 'namaz', 'oruc', 'yilan'];
  const religiousSymbols = symbols.filter(s => religiousSlugs.includes(s.slug)).slice(0, 3);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rüya Tabirleri Sözlüğü',
    alternateName: 'Rüya Sözlüğü',
    url: 'https://www.ruyasozlugunuz.com',
    description: "Türkiye'nin en kapsamlı rüya tabirleri sözlüğü. 2000+ rüya sembolünü İslami, psikolojik ve genel yorumlarla sunan yapay zeka destekli platform.",
    inLanguage: 'tr',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.ruyasozlugunuz.com/?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rüya Tabirleri Sözlüğü',
    alternateName: 'Rüya Sözlüğü',
    url: 'https://www.ruyasozlugunuz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ruyasozlugunuz.com/icon-512.png',
      width: 512,
      height: 512
    },
    description: "Türkiye'nin en kapsamlı rüya tabirleri sözlüğü. İbn-i Sirin, İmam Nablusi, Carl Jung ve Freud kaynaklarına dayanan 2000+ özgün rüya tabiri.",
    foundingDate: '2024',
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye'
    },
    knowsAbout: [
      'Rüya tabiri',
      'İslami rüya yorumu',
      'Diyanet rüya tabirleri',
      'İbn-i Sirin rüya tabiri',
      'İmam Nablusi rüya tabiri',
      'Carl Jung rüya analizi',
      'Sigmund Freud rüya yorumu',
      'Bilinçaltı sembolizm',
      'Arketipler ve kollektif bilinçdışı',
      'Rüya psikolojisi'
    ],
    sameAs: [
      'https://www.turkiyehesaplama.com'
    ]
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Rüya Tabirleri Sözlüğü — Ana Sayfa',
    description: `${symbols.length} rüya sembolünü İslami, psikolojik ve genel yorumlarla sunan Türkiye'nin en kapsamlı rüya tabiri koleksiyonu.`,
    url: 'https://www.ruyasozlugunuz.com',
    inLanguage: 'tr',
    numberOfItems: symbols.length,
    provider: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü',
      url: 'https://www.ruyasozlugunuz.com'
    },
    about: [
      { '@type': 'Thing', name: 'Rüya Tabiri' },
      { '@type': 'Thing', name: 'İslami Rüya Yorumu' },
      { '@type': 'Thing', name: 'Psikolojik Rüya Analizi' }
    ],
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: symbols.length,
      itemListElement: popularSymbols.slice(0, 8).map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://www.ruyasozlugunuz.com/ruyada-${s.slug}-gormek`,
        name: s.title
      }))
    }
  };

  return (
    <div className="flex flex-col gap-16 pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }} />
      
      <section className="text-center pt-12 pb-8 px-4 flex flex-col items-center justify-center min-h-[50vh] relative">
        <div className={`absolute inset-0 rounded-3xl blur-3xl -z-10 ${specialDay.theme === 'ramadan' ? 'bg-amber-900/20' : 'bg-mystic-900/20'}`} />
        
        {specialDay.theme === 'ramadan' ? (
          <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6 flex items-center gap-2">
              🌙 {specialDay.eventName}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight text-white">
              {specialDay.eventName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Rüya Rehberi</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-100/70 max-w-2xl mb-12">
              {specialDay.message}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-night-900/40 border border-white/5 text-night-300 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium mb-8 shadow-sm backdrop-blur-md">
              <Book className="w-4 h-4 text-mystic-400 opacity-80" /> Türkiye&apos;nin En Kapsamlı Rüya Tabirleri Sözlüğü
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-tight text-white leading-tight">
              Rüyalarınızın <span className="text-mystic-200 font-medium italic">Gerçek Anlamını</span> Keşfedin
            </h1>
            <p className="text-lg md:text-xl text-night-300 max-w-2xl mb-12 leading-relaxed font-light">
              Binlerce rüya sembolünün <strong>İslami, Diyanet ve Psikolojik</strong> tefsirlerini bir arada sunan güvenilir rehberiniz. Sembolleri tek tek aratabilir veya rüyanızın tamamını yazarak detaylı analize ulaşabilirsiniz.
            </p>
          </div>
        )}
        
        <DetayliAramaClient />
      </section>

      <AdSlot type="adsense" slotId="HOMEPAGE_SLOT_ID" />

      {specialDay.isSpecial && religiousSymbols.length > 0 && (
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex items-center gap-3 mb-8">
            <Star className="text-amber-500" />
            <h2 className="text-2xl font-serif font-bold text-white">Maneviyatı Yüksek Rüyalar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {religiousSymbols.map(symbol => (
              <Link 
                key={symbol.slug} 
                href={`/ruyada-${symbol.slug}-gormek`}
                className="bg-gradient-to-br from-amber-900/20 to-night-800 border border-amber-900/30 rounded-2xl p-6 group hover:border-amber-500/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-amber-100 mb-3 group-hover:text-amber-400 transition-colors">
                  {symbol.title}
                </h3>
                <p className="text-night-300 text-sm line-clamp-3">
                  {symbol.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

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
