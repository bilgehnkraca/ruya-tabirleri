import { getSymbolBySlug, getAllSymbols } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) return { title: 'Bulunamadı' };

  return {
    title: symbol.title,
    description: symbol.shortDescription,
    alternates: { canonical: `/ruyada-${symbol.slug}-gormek` }
  };
}

export async function generateStaticParams() {
  const symbols = getAllSymbols();
  return symbols.map((symbol) => ({ slug: symbol.slug }));
}

export default function SymbolPage({ params }: Props) {
  const symbol = getSymbolBySlug(params.slug);
  if (!symbol) notFound();

  const allSymbols = getAllSymbols();
  const relatedSymbols = symbol.relatedSymbols
    .map(slug => allSymbols.find(s => s.slug === slug))
    .filter(Boolean) as typeof allSymbols;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: symbol.content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://ruyatabirleri.com' },
      { '@type': 'ListItem', position: 2, name: 'Kategoriler', item: 'https://ruyatabirleri.com/kategoriler' },
      { '@type': 'ListItem', position: 3, name: symbol.title, item: `https://ruyatabirleri.com/ruyada-${symbol.slug}-gormek` }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: symbol.title,
    description: symbol.shortDescription,
    author: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü'
    }
  };

  return (
    <article className="max-w-4xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
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

      <AdSlot type="adsense" slotId="CONTENT_TOP_SLOT_ID" className="mb-10" />

      <div className="prose prose-invert prose-night max-w-none">
        <h2 className="text-2xl font-serif font-bold text-mystic-100 mt-8 mb-4 border-b border-night-700 pb-2">Peki bu rüyanın asıl şifresi nedir?</h2>
        <p className="text-night-200 leading-relaxed mb-8">{symbol.content.generalMeaning}</p>

        <AdSlot type="yandex" yandexId="R-A-19625893-1" className="my-10" />

        <h2 className="text-2xl font-serif font-bold text-mystic-100 mt-10 mb-6 border-b border-night-700 pb-2">Rüyadaki detaylar tabiri tamamen değiştirir...</h2>
        <div className="space-y-8">
          {symbol.content.variations.map((variation, index) => (
            <div key={index} className="bg-night-800/30 rounded-xl p-6 border border-night-800">
              <h3 className="text-xl font-semibold text-mystic-300 mt-0 mb-3">{variation.title}</h3>
              <p className="text-night-200 m-0">{variation.content}</p>
            </div>
          ))}
        </div>

        <AdSlot type="adsense" slotId="CONTENT_MIDDLE_1" className="my-10" />

        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-mystic-100 mb-4 border-b border-night-700 pb-2">Kadim Kaynaklara Göre...</h2>
            <p className="text-night-200 leading-relaxed bg-night-800/20 p-5 rounded-xl border-l-4 border-mystic-500">
              {symbol.content.religiousMeaning}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-mystic-100 mb-4 border-b border-night-700 pb-2">Bilinçaltınız Aslında Ne Diyor?</h2>
            <p className="text-night-200 leading-relaxed bg-night-800/20 p-5 rounded-xl border-l-4 border-accent-500">
              {symbol.content.psychologicalMeaning}
            </p>
          </div>
        </div>

        <AdSlot type="yandex" yandexId="R-A-XXXXXX-2" className="my-10" />

        <h2 className="text-2xl font-serif font-bold text-mystic-100 mt-12 mb-6 border-b border-night-700 pb-2">Merak Edilen Diğer Detaylar</h2>
        <div className="space-y-6">
          {symbol.content.faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-night-100 mb-2">{faq.question}</h3>
              <p className="text-night-300 m-0">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

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
