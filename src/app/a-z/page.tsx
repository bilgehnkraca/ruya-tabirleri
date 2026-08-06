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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
        {alphabet.map(letter => (
          <Link 
            key={letter} 
            href={`/a-z/${encodeURIComponent(letter.toLowerCase())}`} 
            className="h-16 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]/50 border border-night-700 flex items-center justify-center text-2xl tracking-tight text-neutral-300 hover:bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/10 hover:text-white hover:scale-105 transition-all shadow-lg"
          >
            {letter}
          </Link>
        ))}
      </div>
    </div>
  );
}
