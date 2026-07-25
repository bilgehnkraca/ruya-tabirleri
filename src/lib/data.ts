import fs from 'fs';
import path from 'path';
import { DreamSymbol } from './types';

const symbolsBaseDir = path.join(process.cwd(), 'content', 'symbols');

export function getAllSymbols(): DreamSymbol[] {
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
  
  return Array.from(uniqueSymbolsMap.values());
}

export function getSymbolBySlug(slug: string): DreamSymbol | undefined {
  const symbols = getAllSymbols();
  return symbols.find((s) => s.slug === slug);
}

export function getSymbolsByCategory(category: string): DreamSymbol[] {
  const symbols = getAllSymbols();
  return symbols.filter((s) => s.category === category);
}

export function getAllCategories(): string[] {
  const symbols = getAllSymbols();
  const categories = new Set(symbols.map(s => s.category));
  return Array.from(categories);
}
