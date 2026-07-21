import fs from 'fs';
import path from 'path';
import { DreamSymbol } from './types';

const symbolsDir = path.join(process.cwd(), 'content', 'symbols', 'items');

export function getAllSymbols(): DreamSymbol[] {
  if (!fs.existsSync(symbolsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(symbolsDir).filter(file => file.endsWith('.json'));
  const symbols: DreamSymbol[] = [];
  
  for (const file of files) {
    const filePath = path.join(symbolsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    try {
      symbols.push(JSON.parse(fileContent) as DreamSymbol);
    } catch (e) {
      console.error(`Error parsing JSON for file ${file}`, e);
    }
  }
  
  return symbols;
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
