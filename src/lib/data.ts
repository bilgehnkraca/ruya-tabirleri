import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import { DreamSymbol } from './types';

const symbolsBaseDir = path.join(process.cwd(), 'content', 'symbols');

// In-memory cache to prevent re-reading and re-parsing 65+ JSON files thousands of times during SSG build
let cachedSymbols: DreamSymbol[] | null = null;

export function getAllSymbols(): DreamSymbol[] {
  if (cachedSymbols) {
    return cachedSymbols;
  }

  if (!fs.existsSync(symbolsBaseDir)) {
    return [];
  }
  
  const symbols: DreamSymbol[] = [];
  
  // 1. Root dizindeki .json dosyalarını taranması (örn: symbols-2.json, symbols-3.json, long-tail vs.)
  const rootFiles = fs.readdirSync(symbolsBaseDir, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory() && dirent.name.endsWith('.json'))
    .map(dirent => path.join(symbolsBaseDir, dirent.name));

  // 2. Kategori alt klasörlerindeki .json dosyalarının taranması
  const subDirs = fs.readdirSync(symbolsBaseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(symbolsBaseDir, dirent.name));

  const allJsonFiles = [...rootFiles];
  for (const dir of subDirs) {
    const files = fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(dir, f));
    allJsonFiles.push(...files);
  }

  for (const filePath of allJsonFiles) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed)) {
        symbols.push(...(parsed as DreamSymbol[]));
      } else if (parsed && typeof parsed === 'object' && parsed.slug) {
        symbols.push(parsed as DreamSymbol);
      }
    } catch (e) {
      console.error(`Error parsing JSON for file ${filePath}`, e);
    }
  }
  
  const uniqueSymbolsMap = new Map<string, DreamSymbol>();
  for (const sym of symbols) {
    if (sym && sym.slug && !uniqueSymbolsMap.has(sym.slug)) {
      uniqueSymbolsMap.set(sym.slug, sym);
    }
  }
  
  cachedSymbols = Array.from(uniqueSymbolsMap.values());
  return cachedSymbols;
}

export const getSymbolBySlug = cache((slug: string): DreamSymbol | undefined => {
  const symbols = getAllSymbols();
  return symbols.find((s) => s.slug === slug);
});

export function getSymbolsByCategory(category: string): DreamSymbol[] {
  const symbols = getAllSymbols();
  return symbols.filter((s) => s.category === category);
}

export function getAllCategories(): string[] {
  const symbols = getAllSymbols();
  const categories = new Set(symbols.map(s => s.category));
  return Array.from(categories);
}

let cachedSymbolsLight: { title: string; slug: string }[] | null = null;

export function getCachedSymbolsLight(): { title: string; slug: string }[] {
  if (cachedSymbolsLight) {
    return cachedSymbolsLight;
  }
  const symbols = getAllSymbols();
  // Only link to concise symbols (length <= 35 chars) to prevent regex explosion and avoid linking whole long-tail sentences
  cachedSymbolsLight = symbols
    .map((s) => ({ title: s.title, slug: s.slug }))
    .filter((s) => s.title.length >= 3 && s.title.length <= 35)
    .sort((a, b) => b.title.length - a.title.length);
  return cachedSymbolsLight;
}

let cachedSearchableSymbols: DreamSymbol[] | null = null;

export function getSearchableSymbols(): DreamSymbol[] {
  if (cachedSearchableSymbols) {
    return cachedSearchableSymbols;
  }
  const symbols = getAllSymbols();
  // Strip out heavy paragraphs (introduction, faqs, relatedSymbols) and truncate body texts to what DetayliAramaClient actually uses (AI synthesis & search snippets)
  // This reduces the serialized JSON payload size from 22.17 MB down to ~4 MB, totally preventing Vercel's 19.07 MB ISR page size limit error!
  cachedSearchableSymbols = symbols.map((s) => ({
    slug: s.slug,
    title: s.title,
    category: s.category,
    shortDescription: s.shortDescription,
    content: {
      introduction: "",
      generalMeaning: s.content?.generalMeaning ? s.content.generalMeaning.slice(0, 300) : "",
      variations: (s.content?.variations || []).map((v) => ({
        title: v.title,
        content: v.content ? v.content.slice(0, 150) : ""
      })),
      religiousMeaning: s.content?.religiousMeaning ? s.content.religiousMeaning.slice(0, 450) : "",
      psychologicalMeaning: s.content?.psychologicalMeaning ? s.content.psychologicalMeaning.slice(0, 450) : "",
      faqs: []
    },
    relatedSymbols: []
  }));
  return cachedSearchableSymbols;
}
