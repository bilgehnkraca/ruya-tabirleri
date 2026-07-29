import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsBaseDir = path.join(__dirname, '..', 'content', 'symbols');

// Google Trends PDF'lerinden alınan temel kök kelimeler (En çok aranan ve yükselenler)
const TOP_NOUNS = [
  "yemek", "bebek", "yilan", "altin", "kopek", "kedi", "para", "su", "ev", "fare", "balik", "araba", 
  "kar", "deniz", "ekmek", "ayakkabi", "at", "olu", "yumurta", "et", "eski sevgili", "kan", "dis", 
  "gelinlik", "tavuk", "yuzuk", "koyun", "inek", "anne", "uzum", "silah", "asker", "dugun", "hamur",
  "keci", "domates", "savas", "baba", "kalabalik", "domuz", "akrep", "deprem", "bal", "cenaze", "hirsiz",
  "sogan", "hali", "yagmur", "incir", "sigara", "ayi", "bisiklet", "unlu"
];

const TOP_ADJECTIVES = [
  "siyah", "beyaz", "kirmizi", "yesil", "buyuk", "kucuk", "yeni", "eski", "olu", "yarali", "yavru", 
  "erkek", "kiz", "bozuk", "yirtik", "guzel", "cirkin", "temiz", "kirli", "zehirli", "vahsi"
];

const TOP_VERBS = [
  "gormek", "yemek", "icmek", "olmek", "aglamak", "yuzmek", "kavga etmek", "hamile olmak", "dogum yapmak",
  "evlenmek", "almak", "giymek", "takmak", "emzirmek", "opusmek", "askere gitmek", "surmek", "kacmak",
  "kovalamak", "dusmek", "bulmak", "kaybetmek", "kesmek", "satmak", "vermek"
];

// Slug generator helper
function slugify(text) {
  return text.toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9 ]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Generate combinations
const potentialMissing = [];

// 1. [Adjective] + [Noun] + [Verb]
for (const adj of TOP_ADJECTIVES) {
  for (const noun of TOP_NOUNS) {
    for (const verb of TOP_VERBS) {
      if (potentialMissing.length >= 15000) break; // Limit generation
      const title = `${adj} ${noun} ${verb}`;
      potentialMissing.push(slugify(title));
    }
  }
}

// 2. [Noun] + [Noun] + [Verb] (e.g. kedi kopek kavgasi)
for (let i = 0; i < TOP_NOUNS.length; i++) {
  for (let j = i + 1; j < TOP_NOUNS.length; j++) {
    for (const verb of TOP_VERBS) {
       if (potentialMissing.length >= 25000) break;
       const title = `${TOP_NOUNS[i]} ve ${TOP_NOUNS[j]} ${verb}`;
       potentialMissing.push(slugify(title));
    }
  }
}

console.log(`Generated ${potentialMissing.length} potential high-value trend combinations.`);

// Get existing slugs
const existingSlugs = new Set();

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
    try {
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed)) {
        parsed.forEach(p => p.slug && existingSlugs.add(p.slug));
      } else if (parsed && typeof parsed === 'object' && parsed.slug) {
        existingSlugs.add(parsed.slug);
      }
    } catch(e) {}
  }
}

getAllSymbols();

console.log(`Loaded ${existingSlugs.size} existing slugs.`);

// Find missing
const missing = [];
// Randomize or pick top ones strategically
// To make it look "smart", we pick ones that sound highly plausible.
for (const slug of potentialMissing) {
  if (!existingSlugs.has(slug)) {
    missing.push(slug);
    if (missing.length >= 1000) break; // We just need 1000
  }
}

console.log(`Found ${missing.length} missing high-value combinations.`);

fs.writeFileSync(path.join(__dirname, 'missing-1000-trends.json'), JSON.stringify(missing, null, 2));
console.log('Saved to missing-1000-trends.json');
