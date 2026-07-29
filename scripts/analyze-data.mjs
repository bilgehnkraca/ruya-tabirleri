import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsBaseDir = path.join(__dirname, '..', 'content', 'symbols');

function getAllSymbols() {
  if (!fs.existsSync(symbolsBaseDir)) return [];
  const symbols = [];
  
  const rootFiles = fs.readdirSync(symbolsBaseDir, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory() && dirent.name.endsWith('.json'))
    .map(dirent => path.join(symbolsBaseDir, dirent.name));

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
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(fileContent);
    if (Array.isArray(parsed)) {
      symbols.push(...parsed);
    } else if (parsed && typeof parsed === 'object' && parsed.slug) {
      symbols.push(parsed);
    }
  }
  return symbols;
}

const symbols = getAllSymbols();
console.log(`Total Symbols Parsed: ${symbols.length}`);

// Find duplicates
const slugMap = new Map();
const duplicates = [];
for (const sym of symbols) {
  if (!sym.slug) continue;
  if (slugMap.has(sym.slug)) {
    duplicates.push(sym.slug);
  } else {
    slugMap.set(sym.slug, sym);
  }
}

console.log(`Unique Slugs: ${slugMap.size}`);
console.log(`Duplicate Slugs: ${duplicates.length}`);
if (duplicates.length > 0) {
  console.log(`Sample Duplicates: ${duplicates.slice(0, 5).join(', ')}`);
}

// Mock getSearchableSymbols
const searchableSymbols = Array.from(slugMap.values()).map((s) => ({
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

const searchableJson = JSON.stringify(searchableSymbols);
console.log(`Search API Payload Size: ${(Buffer.byteLength(searchableJson, 'utf8') / 1024 / 1024).toFixed(2)} MB`);

