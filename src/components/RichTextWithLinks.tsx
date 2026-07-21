import Link from 'next/link';
import React from 'react';

interface RichTextWithLinksProps {
  text: string;
  symbols?: { title: string; slug: string }[];
  currentSlug: string;
}

export default function RichTextWithLinks({ text, symbols, currentSlug }: RichTextWithLinksProps) {
  if (!symbols || symbols.length === 0 || !text) {
    return <>{text}</>;
  }

  // Filter out the current symbol and sort by length (longest first) to prevent partial matching issues
  const validSymbols = symbols
    .filter(s => s.slug !== currentSlug)
    .sort((a, b) => b.title.length - a.title.length);

  if (validSymbols.length === 0) {
    return <>{text}</>;
  }

  // Escape special characters just in case, though titles are mostly plain text
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  const words = validSymbols.map(s => escapeRegExp(s.title)).join('|');
  
  // Use lookaround to match only whole words bounded by space, punctuation, or string start/end.
  // Using \b doesn't work well with Turkish characters (ç, ğ, ı, vb) in JS RegExp.
  const regex = new RegExp(`(?<=^|[\\s.,!?;:'"()])(${words})(?=[\\s.,!?;:'"()]|$)`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLocaleLowerCase('tr-TR');
        const matchedSymbol = validSymbols.find(s => s.title.toLocaleLowerCase('tr-TR') === lowerPart);
        
        if (matchedSymbol) {
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
