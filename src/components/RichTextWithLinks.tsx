import Link from 'next/link';
import React, { useMemo } from 'react';

interface RichTextWithLinksProps {
  text: string;
  symbols?: { title: string; slug: string }[];
  currentSlug: string;
}

// Global cache to prevent thousands of regex compilations during SSG build.
let globalSymbolsRef: { title: string; slug: string }[] | undefined = undefined;
let globalPattern: string | null = null;
let globalTokenMap: Map<string, { slug: string; displayText: string }> | null = null;

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
  // Build or reuse global cache FIRST so useMemo has access to globalPattern
  if (symbols && symbols.length > 0 && (symbols !== globalSymbolsRef || !globalPattern || !globalTokenMap)) {
    globalSymbolsRef = symbols;
    const tokenMap = new Map<string, { slug: string; displayText: string }>();

    const entries: { keyword: string; slug: string }[] = [];
    for (const s of symbols) {
      const kws = buildKeywords(s);
      for (const kw of kws) {
        if (!tokenMap.has(kw)) {
          entries.push({ keyword: kw, slug: s.slug });
        }
      }
    }

    entries.sort((a, b) => b.keyword.length - a.keyword.length);

    for (const { keyword, slug } of entries) {
      if (!tokenMap.has(keyword.toLowerCase())) {
        tokenMap.set(keyword.toLowerCase(), { slug, displayText: keyword });
      }
    }

    globalTokenMap = tokenMap;

    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    globalPattern = Array.from(tokenMap.keys())
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join('|');
  }

  // To prevent the concurrent SSG race condition on regex.lastIndex, we create a fresh RegExp instance per component.
  // Creating a new RegExp from a cached string is very fast.
  const regex = useMemo(() => {
    if (!globalPattern) return null;
    return new RegExp(`(?<![\\w\\u00C0-\\u024F])(${globalPattern})(?![\\w\\u00C0-\\u024F])`, 'gi');
  }, [symbols]); // depends on symbols so if symbols change, globalPattern changed, we re-create regex.

  if (!symbols || symbols.length === 0 || !text || !regex || !globalPattern || !globalTokenMap || globalTokenMap.size === 0) {
    return <>{text}</>;
  }

  const tokenMap = globalTokenMap;

  const linkedSlugsInText = new Set<string>(); // max 1 link per symbol per text block
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  // Reset lastIndex for global regex
  regex.lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchedText = match[0];
    const key = matchedText.toLowerCase();
    const symbolData = tokenMap.get(key);

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
