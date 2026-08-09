import { getAllSymbols } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookA } from 'lucide-react';

export const metadata: Metadata = {
  title: 'A-Z Rüya Tabirleri Sözlüğü',
  description: 'Tüm rüya tabirlerini alfabetik olarak inceleyebileceğiniz A-Z rüya sözlüğü.',
  alternates: {
    canonical: 'https://www.ruyasozlugunuz.com/a-z',
  },
  openGraph: {
    title: 'A-Z Rüya Tabirleri Sözlüğü',
    description: 'Tüm rüya tabirlerini alfabetik olarak inceleyebileceğiniz A-Z rüya sözlüğü.',
    url: 'https://www.ruyasozlugunuz.com/a-z',
  },
};

export default function AZIndexPage() {
  const symbols = getAllSymbols();
  const letters = new Set<string>();
  
  symbols.forEach(symbol => {
    const titleWithoutPrefix = symbol.title.replace(/^Rüyada\s+/i, '').trim();
    if (titleWithoutPrefix) {
      const firstLetter = titleWithoutPrefix.charAt(0).toUpperCase();
      // Yalnızca standart harfleri al
      if (firstLetter.match(/[A-ZÇĞİÖŞÜ]/i)) {
        letters.add(firstLetter);
      }
    }
  });

  const alphabet = Array.from(letters).sort((a, b) => a.localeCompare(b, 'tr'));

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-night-200">A-Z İndeks</span>
      </nav>

      <header className="mb-12 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]/50 flex items-center justify-center mb-6">
          <BookA className="text-mystic-400 w-8 h-8" />
        </div>
        <h1 className="text-4xl tracking-tight font-bold text-white mb-4">A-Z Rüya İndeksi</h1>
        <p className="text-night-300">Aramak istediğiniz rüyanın baş harfini seçerek sembollere ulaşabilirsiniz.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {alphabet.map(letter => {
          const letterSymbols = symbols.filter(s => {
            const titleWithoutPrefix = s.title.replace(/^Rüyada\s+/i, '').trim();
            return titleWithoutPrefix.charAt(0).toUpperCase() === letter;
          }).slice(0, 5);

          return (
            <div key={letter} className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.05]">
                <h2 className="text-3xl font-bold text-white">{letter}</h2>
                <Link 
                  href={`/a-z/${encodeURIComponent(letter.toLowerCase())}`} 
                  className="text-sm text-mystic-400 hover:text-mystic-300 transition-colors"
                >
                  Tümünü Gör &rarr;
                </Link>
              </div>
              <ul className="space-y-3">
                {letterSymbols.map(sym => (
                  <li key={sym.slug}>
                    <Link 
                      href={`/sembol/${sym.slug}`} 
                      className="text-neutral-300 hover:text-white transition-colors line-clamp-1"
                      title={sym.title}
                    >
                      {sym.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
