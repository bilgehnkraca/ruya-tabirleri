import fs from 'fs';
import path from 'path';
import { DreamSymbol } from './types';

const symbolsBaseDir = path.join(process.cwd(), 'content', 'symbols');

export function getAllSymbols(): DreamSymbol[] {
  if (!fs.existsSync(symbolsBaseDir)) {
    return [];
  }
  
  const categories = ['animals', 'items', 'nature', 'places'];
  const symbols: DreamSymbol[] = [];
  
  for (const category of categories) {
    const categoryDir = path.join(symbolsBaseDir, category);
    if (!fs.existsSync(categoryDir)) continue;
    
    const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.json'));
    
    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      try {
        symbols.push(JSON.parse(fileContent) as DreamSymbol);
      } catch (e) {
        console.error(`Error parsing JSON for file ${file}`, e);
      }
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
