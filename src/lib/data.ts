import fs from 'fs';
import path from 'path';
import { cache } from 'react';
import { DreamSymbol } from './types';

const symbolsBaseDir = path.join(process.cwd(), 'content', 'symbols');
const indexFilePath = path.join(symbolsBaseDir, 'slug-index.json');
const lightFilePath = path.join(symbolsBaseDir, 'symbols-light.json');
const searchableFilePath = path.join(symbolsBaseDir, 'searchable-symbols.json');

let cachedSlugMap: Record<string, string> | null = null;
let cachedLightSymbols: { title: string; slug: string }[] | null = null;
let cachedSearchableSymbols: DreamSymbol[] | null = null;

export const getSymbolBySlug = cache((slug: string): DreamSymbol | undefined => {
  if (!cachedSlugMap) {
    if (fs.existsSync(indexFilePath)) {
      cachedSlugMap = JSON.parse(fs.readFileSync(indexFilePath, 'utf-8'));
    } else {
      return undefined;
    }
  }

  const relativePath = cachedSlugMap?.[slug];
  if (!relativePath) return undefined;

  const fullPath = path.join(symbolsBaseDir, relativePath);
  try {
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const parsed = JSON.parse(fileContent);
    if (Array.isArray(parsed)) {
      return parsed.find((s: DreamSymbol) => s.slug === slug);
    }
    if (parsed.slug === slug) return parsed;
  } catch (e) {
    console.error(`Error reading symbol ${slug} from ${fullPath}:`, e);
  }
  return undefined;
});

export function getAllSymbols(): DreamSymbol[] {
  // Returns searchable symbols which contain title, slug, category, shortDescription, 
  // and truncated content (generalMeaning, religiousMeaning, psychologicalMeaning).
  // This is safe to use for listings, sitemaps, and search, but NOT for full page renders.
  return getSearchableSymbols();
}

export function getSymbolsByCategory(category: string): DreamSymbol[] {
  const allSearchable = getSearchableSymbols();
  return allSearchable.filter((s) => s.category === category);
}

export function getAllCategories(): string[] {
  const allSearchable = getSearchableSymbols();
  const categories = new Set(allSearchable.map(s => s.category));
  return Array.from(categories);
}

export function getCachedSymbolsLight(): { title: string; slug: string }[] {
  if (!cachedLightSymbols) {
    if (fs.existsSync(lightFilePath)) {
      const rawLight = JSON.parse(fs.readFileSync(lightFilePath, 'utf-8'));
      // Link to all symbols. Title length doesn't matter since RichTextWithLinks extracts the core keyword.
      cachedLightSymbols = rawLight
        .filter((s: any) => s.title && s.title.length >= 3)
        .map((s: any) => ({ title: s.title, slug: s.slug }))
        .sort((a: any, b: any) => b.title.length - a.title.length);
    } else {
      return [];
    }
  }
  return cachedLightSymbols!;
}

export function getSearchableSymbols(): DreamSymbol[] {
  if (!cachedSearchableSymbols) {
    if (fs.existsSync(searchableFilePath)) {
      cachedSearchableSymbols = JSON.parse(fs.readFileSync(searchableFilePath, 'utf-8'));
    } else {
      return [];
    }
  }
  return cachedSearchableSymbols!;
}
