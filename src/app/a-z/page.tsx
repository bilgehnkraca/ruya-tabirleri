import { getAllSymbols } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A-Z Rüya Tabirleri Sözlüğü',
  description: 'Tüm rüya tabirlerini alfabetik olarak inceleyebileceğiniz A-Z rüya sözlüğü.',
};

export default function AZIndexPage() {
  const symbols = getAllSymbols();
  const sortedSymbols = [...symbols].sort((a, b) => a.title.localeCompare(b.title, 'tr'));
  const groupedSymbols: Record<string, typeof symbols> = {};
  
  sortedSymbols.forEach(symbol => {
    const firstLetter = symbol.title.replace('Rüyada ', '').charAt(0).toUpperCase();
    if (!groupedSymbols[firstLetter]) groupedSymbols[firstLetter] = [];
    groupedSymbols[firstLetter].push(symbol);
  });

  const alphabet = Object.keys(groupedSymbols).sort((a, b) => a.localeCompare(b, 'tr'));

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-night-200">A-Z İndeks</span>
      </nav>

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-white mb-4">A-Z Rüya İndeksi</h1>
        <p className="text-night-300">Sözlüğümüzde yer alan tüm rüya sembollerini alfabetik olarak aşağıda bulabilirsiniz.</p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {alphabet.map(letter => (
          <a key={letter} href={`#letter-${letter}`} className="w-10 h-10 rounded-lg bg-night-800 border border-night-700 flex items-center justify-center text-mystic-300 hover:bg-mystic-900 hover:text-white transition-colors">
            {letter}
          </a>
        ))}
      </div>

      <div className="space-y-12">
        {alphabet.map(letter => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
            <h2 className="text-3xl font-serif font-bold text-mystic-500 mb-6 border-b border-night-700 pb-2">{letter}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupedSymbols[letter].map(symbol => (
                <Link key={symbol.slug} href={`/ruyada-${symbol.slug}-gormek`} className="block p-4 rounded-xl bg-night-800/30 hover:bg-night-700 transition-colors border border-transparent hover:border-mystic-500/30">
                  <div className="font-medium text-night-100">{symbol.title}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
