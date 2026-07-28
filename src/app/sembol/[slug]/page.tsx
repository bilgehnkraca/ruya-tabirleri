import { getSymbolBySlug, getAllSymbols, getCachedSymbolsLight } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import SymbolContentTabs from '@/components/SymbolContentTabs';
import DreamCommentSection from '@/components/DreamCommentSection';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) return { title: 'Bulunamadı' };

  const url = `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek`;
  const illustratedSlugs = ['yilan', 'altin', 'bebek', 'su'];
  const imageUrl = illustratedSlugs.includes(symbol.slug)
    ? `https://www.ruyasozlugunuz.com/images/symbols/${symbol.slug}.png`
    : 'https://www.ruyasozlugunuz.com/og-image.jpg';

  const metaDescription = symbol.shortDescription && symbol.shortDescription.length > 30
    ? symbol.shortDescription
    : `Rüyada ${symbol.title.replace(/^Rüyada\s+/i,'').replace(/\s*[-–—].*$/,'')} görmek ne anlama gelir? İslami, Diyanet ve psikolojik yorum.`;

  return {
    title: symbol.title,
    description: metaDescription,
    alternates: { canonical: `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek` },
    openGraph: {
      title: `${symbol.title} | Rüya Tabirleri Sözlüğü`,
      description: metaDescription,
      url,
      type: 'article',
      siteName: 'Rüya Tabirleri Sözlüğü',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: symbol.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${symbol.title} | Rüya Tabirleri Sözlüğü`,
      description: metaDescription,
      images: [imageUrl],
    }
  };
}

export async function generateStaticParams() {
  const symbols = getAllSymbols();
  return symbols.map((symbol) => ({ slug: symbol.slug }));
}

export default function SymbolPage({ params }: Props) {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) notFound();

  const relatedSymbols = (symbol.relatedSymbols || [])
    .map(slug => getSymbolBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getSymbolBySlug>>[];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (symbol.content?.faqs || []).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://www.ruyasozlugunuz.com' },
      { '@type': 'ListItem', position: 2, name: 'Kategoriler', item: 'https://www.ruyasozlugunuz.com/kategoriler' },
      { '@type': 'ListItem', position: 3, name: symbol.title, item: `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek` }
    ]
  };

  // Clean symbol name for schema use
  const cleanSymbolName = symbol.title
    .replace(/^Rüyada\s+/i, '')
    .replace(/\s*[-–—]\s*İslami.*$/i, '')
    .replace(/\s+Görmek.*$/i, '')
    .trim();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: symbol.title,
    description: symbol.shortDescription,
    image: 'https://www.ruyasozlugunuz.com/og-image.jpg',
    datePublished: '2024-01-01T08:00:00+03:00',
    dateModified: new Date().toISOString(),
    inLanguage: 'tr',
    author: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü',
      url: 'https://www.ruyasozlugunuz.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ruyasozlugunuz.com/icon-512.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek`,
      relatedLink: 'https://www.turkiyehesaplama.com',
      significantLink: 'https://www.turkiyehesaplama.com'
    },
    about: {
      '@type': 'DefinedTerm',
      name: cleanSymbolName,
      description: symbol.shortDescription
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['article header h1', 'article header p', '.answer-first-box']
    },
    mentions: [
      {
        '@type': 'WebSite',
        name: 'Türkiye Hesaplama Platformu',
        url: 'https://www.turkiyehesaplama.com'
      }
    ]
  };

  // GEO: DefinedTerm schema — AI motorlarının "X ne demek?" sorgularında siteyi kaynak göstermesi
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: `Rüyada ${cleanSymbolName} Görmek`,
    description: symbol.shortDescription,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Rüya Tabirleri Sözlüğü',
      url: 'https://www.ruyasozlugunuz.com'
    },
    url: `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek`,
    inLanguage: 'tr'
  };

  return (
    <article className="max-w-4xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />

      <nav className="text-sm text-night-400 mb-8 flex flex-wrap items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <Link href={`/kategoriler/${symbol.category}`} className="hover:text-mystic-400 transition-colors capitalize">
          {symbol.category.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-night-200">{symbol.title}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{symbol.title}</h1>
        <p className="text-xl text-night-300 leading-relaxed">{symbol.content.introduction}</p>
      </header>

      {['yilan', 'altin', 'bebek', 'su'].includes(symbol.slug) && (
        <div className="mb-10 relative rounded-3xl overflow-hidden border-2 border-mystic-500/30 shadow-2xl shadow-mystic-900/40 group">
          <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-transparent to-transparent z-10 opacity-60" />
          <img 
            src={`/images/symbols/${symbol.slug}.png`} 
            alt={`Rüyada ${symbol.title} Görmek - Mistik ve Bilinçaltı İllüstrasyonu`}
            className="w-full h-auto max-h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
            <span className="bg-night-900/90 text-mystic-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-mystic-500/40 backdrop-blur-md">
              🎨 Yapay Zeka Mistik Sembol Tasviri
            </span>
            <span className="text-xs text-night-400 hidden sm:inline bg-night-950/80 px-2.5 py-1 rounded-lg">Özel Koleksiyon</span>
          </div>
        </div>
      )}

      <AdSlot type="adsense" slotId="CONTENT_TOP_SLOT_ID" className="mb-10" />

      <div className="prose prose-invert prose-night max-w-none">
        <SymbolContentTabs 
          symbol={symbol} 
          allSymbolsLight={getCachedSymbolsLight()}
        />

        <AdSlot type="yandex" yandexId="" className="my-10" />

        <h2 className="text-2xl font-serif font-bold text-mystic-100 mt-12 mb-6 border-b border-night-700 pb-2">Merak Edilen Diğer Detaylar</h2>
        <div className="space-y-6">
          {(symbol.content?.faqs || []).map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-night-100 mb-2">{faq.question}</h3>
              <p className="text-night-300 m-0">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <DreamCommentSection symbolSlug={symbol.slug} symbolTitle={symbol.title} />

      {relatedSymbols.length > 0 && (
        <section className="mt-16 pt-10 border-t border-night-800">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Bunlar da ilginizi çekebilir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedSymbols.map(rs => (
              <Link key={rs.slug} href={`/ruyada-${rs.slug}-gormek`} className="bg-night-800/50 border border-night-700 p-4 rounded-xl hover:bg-night-700 hover:border-mystic-500/50 transition-all">
                <div className="font-semibold text-mystic-100 mb-1">{rs.title}</div>
                <div className="text-sm text-night-400 truncate">{rs.shortDescription}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
