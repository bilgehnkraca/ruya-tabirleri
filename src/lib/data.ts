import fs from 'fs';
import path from 'path';
import { DreamSymbol } from './types';

const dataFile = path.join(process.cwd(), 'content', 'symbols', 'symbols.json');

export function getAllSymbols(): DreamSymbol[] {
  if (!fs.existsSync(dataFile)) {
    return [];
  }
  const fileContent = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(fileContent) as DreamSymbol[];
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
