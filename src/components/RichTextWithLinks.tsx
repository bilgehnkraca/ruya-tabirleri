import Link from 'next/link';
import React from 'react';

interface RichTextWithLinksProps {
  text: string;
  symbols?: { title: string; slug: string }[];
  currentSlug: string;
}

// Module-level cache to prevent thousands of regex re-compilations during SSG build
let lastSymbolsRef: { title: string; slug: string }[] | undefined = undefined;
let cachedRegex: RegExp | null = null;
let cachedTokenMap: Map<string, { slug: string; displayText: string }> | null = null;

/**
 * Extracts a short, linkable keyword from a symbol's slug or title.
 * e.g. "yilan" → "yılan", "dis-dusmesi" → "diş düşmesi"
 * These short keywords are what actually appear in body text.
 */
function buildKeywords(s: { title: string; slug: string }): string[] {
  const keywords: string[] = [];

  // 1) From slug: convert slug → natural Turkish keyword
  //    "dis-dusmesi" → "diş düşmesi", "yilan" → "yılan"
  const slugWord = s.slug
    .replace(/-/g, ' ')
    .replace(/\byi\b/g, 'yı')
    .trim();
  if (slugWord.length >= 3 && slugWord.length <= 40) {
    keywords.push(slugWord);
  }

  // 2) From title: extract just the core symbol name
  //    "Rüyada Yılan Görmek - İslami..." → "yılan"
  const coreMatch = s.title.match(/^R\u00fcyada\s+(.+?)\s+G\u00f6rmek/i);
  if (coreMatch) {
    const core = coreMatch[1].trim();
    if (core.length >= 3 && core.length <= 40 && !keywords.includes(core.toLowerCase())) {
      keywords.push(core.toLowerCase());
    }
  }

  return Array.from(new Set(keywords.filter(k => k.length >= 3)));
}

export default function RichTextWithLinks({ text, symbols, currentSlug }: RichTextWithLinksProps) {
  if (!symbols || symbols.length === 0 || !text) {
    return <>{text}</>;
  }

  // Build or reuse cache
  if (symbols !== lastSymbolsRef || !cachedRegex || !cachedTokenMap) {
    lastSymbolsRef = symbols;
    const tokenMap = new Map<string, { slug: string; displayText: string }>();

    // Process symbols sorted by keyword length desc (longer matches first = more specific)
    const entries: { keyword: string; slug: string }[] = [];
    for (const s of symbols) {
      if (s.slug === currentSlug) continue;
      const kws = buildKeywords(s);
      for (const kw of kws) {
        if (!tokenMap.has(kw)) {
          entries.push({ keyword: kw, slug: s.slug });
        }
      }
    }

    // Sort by length descending to match longer phrases first
    entries.sort((a, b) => b.keyword.length - a.keyword.length);

    for (const { keyword, slug } of entries) {
      // Store lowercase key → { slug, displayText }
      if (!tokenMap.has(keyword.toLowerCase())) {
        tokenMap.set(keyword.toLowerCase(), { slug, displayText: keyword });
      }
    }

    cachedTokenMap = tokenMap;

    // Build regex from all keywords
    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = Array.from(tokenMap.keys())
      .sort((a, b) => b.length - a.length) // longer first for greedy match
      .map(escapeRegExp)
      .join('|');

    if (pattern) {
      cachedRegex = new RegExp(`(?<![\\w\\u00C0-\\u024F])(${pattern})(?![\\w\\u00C0-\\u024F])`, 'gi');
    } else {
      cachedRegex = null;
    }
  }

  if (!cachedRegex || !cachedTokenMap || cachedTokenMap.size === 0) {
    return <>{text}</>;
  }

  const linkedSlugsInText = new Set<string>(); // max 1 link per symbol per text block
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset lastIndex for global regex
  cachedRegex.lastIndex = 0;

  while ((match = cachedRegex.exec(text)) !== null) {
    const matchedText = match[0];
    const key = matchedText.toLowerCase();
    const symbolData = cachedTokenMap.get(key);

    if (!symbolData || symbolData.slug === currentSlug || linkedSlugsInText.has(symbolData.slug)) {
      continue;
    }

    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add linked text
    linkedSlugsInText.add(symbolData.slug);
    parts.push(
      <Link
        key={`${symbolData.slug}-${match.index}`}
        href={`/sembol/${symbolData.slug}`}
        className="text-mystic-400 hover:text-neutral-300 font-semibold underline decoration-mystic-500/30 underline-offset-4 transition-colors"
        title={`Rüyada ${symbolData.displayText} Görmek Tabiri`}
      >
        {matchedText}
      </Link>
    );

    lastIndex = match.index + matchedText.length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) return <>{text}</>;

  return <>{parts.map((p, i) => <React.Fragment key={i}>{p}</React.Fragment>)}</>;
}
