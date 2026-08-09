const fs = require('fs');
const path = require('path');

const lightFilePath = path.join('/Users/bilgehan/Desktop/Ruyatabirleri/content/symbols', 'symbols-light.json');
const rawLight = JSON.parse(fs.readFileSync(lightFilePath, 'utf-8'));

console.log(`Total in symbols-light: ${rawLight.length}`);
console.log(`Example title: ${rawLight[0].title}`);

const symbols = rawLight
  .filter((s) => s.title && s.title.length >= 3 && s.title.length <= 35)
  .map((s) => ({ title: s.title, slug: s.slug }))
  .sort((a, b) => b.title.length - a.title.length);

console.log(`Loaded ${symbols.length} symbols after filtering length <= 35`);
