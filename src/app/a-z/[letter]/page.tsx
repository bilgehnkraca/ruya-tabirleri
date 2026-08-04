import { getAllSymbols } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookA } from 'lucide-react';
import { sanitizeTitle } from '@/lib/titleSanitizer';

interface Props {
  params: { letter: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedLetter = decodeURIComponent(params.letter).toUpperCase();
  const url = `https://www.ruyasozlugunuz.com/a-z/${encodeURIComponent(params.letter)}`;
  const title = `${decodedLetter} Harfi ile Başlayan Rüya Tabirleri | A-Z Rüya İndeksi`;
  const description = `${decodedLetter} harfi ile başlayan tüm rüya sembollerini ve detaylı tabirlerini bu sayfada bulabilirsiniz.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/a-z/${encodeURIComponent(params.letter)}`,
    },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export async function generateStaticParams() {
  const symbols = getAllSymbols();
  const letters = new Set<string>();
  
  symbols.forEach(symbol => {
    const titleWithoutPrefix = symbol.title.replace(/^Rüyada\s+/i, '').trim();
    if (titleWithoutPrefix) {
      const firstLetter = titleWithoutPrefix.charAt(0).toLowerCase();
      if (firstLetter.match(/[a-zçğıöşü]/i)) {
        letters.add(firstLetter);
      }
    }
  });

  return Array.from(letters).map(letter => ({
    letter: letter
  }));
}

export default function AZLetterPage({ params }: Props) {
  const decodedLetter = decodeURIComponent(params.letter).toUpperCase();
  const allSymbols = getAllSymbols();
  
  const letterSymbols = allSymbols.filter(symbol => {
    const titleWithoutPrefix = symbol.title.replace(/^Rüyada\s+/i, '').trim();
    return titleWithoutPrefix.charAt(0).toUpperCase() === decodedLetter;
  }).sort((a, b) => a.title.localeCompare(b.title, 'tr'));

  if (letterSymbols.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <Link href="/a-z" className="hover:text-mystic-400 transition-colors">A-Z İndeks</Link>
        <span>/</span>
        <span className="text-night-200">{decodedLetter} Harfi</span>
      </nav>

      <header className="mb-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-mystic-900/50 flex items-center justify-center mb-6">
          <BookA className="text-mystic-400 w-8 h-8" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-white mb-4">{decodedLetter} Harfi İle Başlayan Rüyalar</h1>
        <p className="text-night-300">Bu harfte toplam {letterSymbols.length} adet rüya tabiri bulunmaktadır.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {letterSymbols.map(symbol => (
          <Link key={symbol.slug} href={`/sembol/${symbol.slug}`} className="block p-4 rounded-xl bg-night-800/30 hover:bg-night-700 transition-colors border border-transparent hover:border-mystic-500/30 shadow-sm">
            <div className="font-medium text-night-100 line-clamp-2">{sanitizeTitle(symbol.title)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
