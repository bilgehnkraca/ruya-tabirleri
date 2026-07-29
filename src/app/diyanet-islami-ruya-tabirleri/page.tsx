import { Metadata } from 'next';
import { getAllSymbols } from '@/lib/data';
import IslamicGuideContent from '@/components/IslamicGuideContent';

const FAQ_ITEMS = [
  {
    question: "İslami ve Diyanet rüya tabirleri kesin olarak gerçekleşir mi?",
    answer: "Hayır, İslam inancına göre peygamberlerin rüyaları hariç hiçbir rüya kesin bir vahiy veya değişmez kader hükmü taşımaz. İslami rüya tabirleri, İbn-i Şirin, İmam Nablusi ve İmam Cafer-i Sadık gibi büyük alimlerin Kur'an sembolizmine, hadislere ve kadim tecrübelere dayanarak yaptıkları yorumlardır. Diyanet İşleri Başkanlığı da rüyaların mutlak gelecek habercisi olarak görülmemesi, sadece kişinin manevi dünyasına bir işaret veya uyarı olarak değerlendirilmesi gerektiğini vurgular."
  },
  {
    question: "Kötü, korkutucu veya şeytani bir rüya gördüğümüzde İslam'a göre ne yapmalıyız?",
    answer: "Peygamber Efendimiz (s.a.v.) hadis-i şeriflerinde şöyle buyurmuştur: 'Sizden biriniz hoşuna gitmeyen kötü bir rüya görürse sol tarafına üç defa hafifçe tükürsün (üflesin), şeytanın şerrinden üç defa Allah'a sığınsın (Euzübesmele çeksin) ve yattığı tarafından diğer tarafına dönsün. Ayrıca bu rüyayı hiç kimseye anlatmasın.' Kötü rüya anlatılmadığı ve hayra yorulduğu sürece sahibine zarar vermez. Ayrıca rüyanın ardından bir miktar sadaka vermek belaları def eder."
  },
  {
    question: "Ramazan ayında veya kandil gecelerinde görülen rüyaların özel bir anlamı var mıdır?",
    answer: "Evet, İslam alimlerine göre Ramazan ayında şeytanların zincire vurulması, rahmet kapılarının açılması ve müminlerin oruçla nefislerini tezkiye etmeleri sebebiyle bu ayda görülen rüyaların 'Rahmani (Rüya-yı Sadıka)' olma ihtimali çok yüksektir. Özellikle Kadir Gecesi, Berat Kandili, Miraç Kandili ve Cuma geceleri sabaha karşı (seher vaktinde) görülen rüyalar manevi müjdeler, ihsanlar ve ilahi uyarılar açısından son derece kıymetlidir."
  },
  {
    question: "Gündüz uykusunda (Kaylule) veya öğleden sonra görülen rüyaların tabiri çıkar mı?",
    answer: "İmam Nablusi ve İbn Şirin'e göre en doğru ve hızlı gerçekleşen rüyalar, sabaha karşı (seher vakti ile sabah namazı arasında) görülen rüyalardır. Gündüz öğle vaktinde yapılan sünnet uyku (Kaylule) esnasında görülen rüyalar da zihin dinlenmiş olduğu için salih rüya sayılır. Ancak akşam üstü, güneş batarken veya aşırı yorgunluk/tokluk üzerine görülen rüyalar genelde 'Adgas-ı Ahlam' (bilinçaltı karmaşası) kabul edilir."
  },
  {
    question: "Rüyayı kimlere anlatmalı, kimlerden sakınmalıyız?",
    answer: "Rüyalar mahremdir ve bir sır gibi korunmalıdır. Hadis-i şerifte 'Rüya, uçan bir kuşun ayağına bağlıdır; yorumlanmadığı sürece düşmez, yorumlandığı an gerçekleşir' buyrulmuştur. Bu sebeple güzel bir rüya görüldüğünde sadece dinini bilen, akıllı, rüya tabirinden anlayan, sizi seven ve haset etmeyen salih kimselere veya ilim ehli üstatlara anlatılmalıdır. Haset eden veya rüyayı hemen kötüye yoran cahil kişilerden kesinlikle sakınılmalıdır."
  }
];

export const metadata: Metadata = {
  title: 'İslami & Diyanet Rüya Tabirleri Kılavuzu | Rüya Tabirleri Sözlüğü',
  description: 'İbn-i Şirin, İmam Nablusi, İmam Cafer-i Sadık ve Diyanet ekolü ışığında Kur\'an ve Sünnet temelli rüya tabirleri. Rüyaların dini ve tasavvufi anlamı, Ramazan rüyaları ve rüya adabı.',
  alternates: {
    canonical: '/diyanet-islami-ruya-tabirleri',
  },
  openGraph: {
    title: 'İslami & Diyanet Rüya Tabirleri Kılavuzu | Rüya Tabirleri Sözlüğü',
    description: 'İbn-i Şirin, İmam Nablusi ve Diyanet ekolü ışığında İslami rüya yorumları külliyatı.',
    url: 'https://www.ruyasozlugunuz.com/diyanet-islami-ruya-tabirleri',
    type: 'article',
    siteName: 'Rüya Tabirleri Sözlüğü',
    images: [
      {
        url: 'https://www.ruyasozlugunuz.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'İslami ve Diyanet Rüya Tabirleri Kılavuzu',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'İslami & Diyanet Rüya Tabirleri Kılavuzu',
    description: 'İslami rüya tabirleri rehberi ve dini rüya sözlüğü.',
    images: ['https://www.ruyasozlugunuz.com/og-image.jpg'],
  }
};

export default function IslamicGuidePage() {
  const allSymbols = getAllSymbols();
  
  // Sort symbols alphabetically and prepare light versions for the grid/search
  const lightSymbols = allSymbols
    .sort((a, b) => a.title.localeCompare(b.title, 'tr'))
    .map(sym => ({
      title: sym.title,
      slug: sym.slug,
      category: sym.category,
      snippet: sym.content.religiousMeaning || sym.shortDescription
    }));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: 'https://www.ruyasozlugunuz.com' },
      { '@type': 'ListItem', position: 2, name: 'İslami Tabirler Kılavuzu', item: 'https://www.ruyasozlugunuz.com/diyanet-islami-ruya-tabirleri' }
    ]
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'İslami & Diyanet Rüya Tabirleri Kılavuzu',
    description: 'İbn-i Şirin, İmam Nablusi, İmam Cafer-i Sadık ve Diyanet ekolü ışığında Kur\'an ve Sünnet temelli rüya tabirleri külliyatı.',
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
        url: 'https://www.ruyasozlugunuz.com/icon.svg'
      }
    },
    datePublished: '2026-07-25T00:00:00+03:00',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.ruyasozlugunuz.com/diyanet-islami-ruya-tabirleri'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'İslami & Diyanet Rüya Sözlüğü Dizini',
    description: 'Kur\'an ve sünnet ışığında yorumlanmış rüya sembolleri dizini.',
    url: 'https://www.ruyasozlugunuz.com/diyanet-islami-ruya-tabirleri',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: lightSymbols.slice(0, 50).map((symbol, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.ruyasozlugunuz.com/sembol/${symbol.slug}`,
        name: symbol.title
      }))
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <IslamicGuideContent symbols={lightSymbols} />
    </div>
  );
}
