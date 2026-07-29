import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsDir = path.join(__dirname, '..', 'content', 'symbols');

function slugify(text) {
  const trMap = {
    'ç': 'c', 'Ç': 'c',
    'ğ': 'g', 'Ğ': 'g',
    'ı': 'i', 'I': 'i', 'İ': 'i',
    'ö': 'o', 'Ö': 'o',
    'ş': 's', 'Ş': 's',
    'ü': 'u', 'Ü': 'u'
  };
  let str = text.toLowerCase();
  for (let key in trMap) {
    str = str.split(key).join(trMap[key]);
  }
  return str.replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
}

function getAllJsonFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsonFiles(file));
    } else if (file.endsWith('.json')) {
      results.push(file);
    }
  });
  return results;
}

const files = getAllJsonFiles(symbolsDir);
const slugMap = {}; // Maps old slug to new slug

// First pass: generate slug map and update slug inside files
for (const file of files) {
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.slug) {
          const newSlug = slugify(item.slug);
          if (newSlug !== item.slug) {
            slugMap[item.slug] = newSlug;
            item.slug = newSlug;
          }
        }
      });
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
    } else if (data && data.slug) {
      const newSlug = slugify(data.slug);
      if (newSlug !== data.slug) {
        slugMap[data.slug] = newSlug;
        data.slug = newSlug;
      }
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}

console.log(`Created slug map with ${Object.keys(slugMap).length} items.`);

// Second pass: Update relatedSymbols with new slugs
for (const file of files) {
  try {
    let changed = false;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (Array.isArray(data)) {
      data.forEach(item => {
        if (item.relatedSymbols && Array.isArray(item.relatedSymbols)) {
          item.relatedSymbols = item.relatedSymbols.map(rs => {
            if (slugMap[rs]) {
              changed = true;
              return slugMap[rs];
            }
            // Just in case it has un-slugified stuff
            const attemptSlugify = slugify(rs);
            if (attemptSlugify !== rs) {
              changed = true;
              return attemptSlugify;
            }
            return rs;
          });
        }
      });
      if (changed) fs.writeFileSync(file, JSON.stringify(data, null, 2));
    } else if (data) {
      if (data.relatedSymbols && Array.isArray(data.relatedSymbols)) {
        data.relatedSymbols = data.relatedSymbols.map(rs => {
          if (slugMap[rs]) {
            changed = true;
            return slugMap[rs];
          }
          const attemptSlugify = slugify(rs);
          if (attemptSlugify !== rs) {
            changed = true;
            return attemptSlugify;
          }
          return rs;
        });
      }
      if (changed) fs.writeFileSync(file, JSON.stringify(data, null, 2));
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e);
  }
}

console.log('Fixed all slugs in JSON files.');
