import Link from 'next/link';
import React from 'react';

interface RichTextWithLinksProps {
  text: string;
  symbols?: { title: string; slug: string }[];
  currentSlug: string;
}

// Module-level cache for compiled regex and lookup map to prevent 6,000+ regex re-compilations during SSG build
let lastSymbolsRef: { title: string; slug: string }[] | undefined = undefined;
let cachedRegex: RegExp | null = null;
let cachedSymbolMap: Map<string, { title: string; slug: string }> | null = null;

export default function RichTextWithLinks({ text, symbols, currentSlug }: RichTextWithLinksProps) {
  if (!symbols || symbols.length === 0 || !text) {
    return <>{text}</>;
  }

  // Check if we need to build or rebuild the cache
  if (symbols !== lastSymbolsRef || !cachedRegex || !cachedSymbolMap) {
    lastSymbolsRef = symbols;
    const map = new Map<string, { title: string; slug: string }>();
    const validSymbols = symbols.slice().sort((a, b) => b.title.length - a.title.length);
    
    for (const s of validSymbols) {
      map.set(s.title.toLocaleLowerCase('tr-TR'), s);
    }
    cachedSymbolMap = map;

    const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const words = validSymbols.map(s => escapeRegExp(s.title)).join('|');
    cachedRegex = new RegExp(`(?<=^|[\\s.,!?;:'"()])(${words})(?=[\\s.,!?;:'"()]|$)`, 'gi');
  }

  if (!cachedRegex || !cachedSymbolMap || cachedSymbolMap.size === 0) {
    return <>{text}</>;
  }

  const parts = text.split(cachedRegex);

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLocaleLowerCase('tr-TR');
        const matchedSymbol = cachedSymbolMap?.get(lowerPart);
        
        if (matchedSymbol && matchedSymbol.slug !== currentSlug) {
          return (
            <Link 
              key={i} 
              href={`/ruyada-${matchedSymbol.slug}-gormek`} 
              className="text-mystic-400 hover:text-mystic-300 font-semibold underline decoration-mystic-500/30 underline-offset-4 transition-colors"
              title={`Rüyada ${matchedSymbol.title} Görmek Tabiri`}
            >
              {part}
            </Link>
          );
        }
        
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
}
