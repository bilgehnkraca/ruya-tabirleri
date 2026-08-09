const fs = require('fs');
const path = require('path');

const lightFilePath = path.join('/Users/bilgehan/Desktop/Ruyatabirleri/content/symbols', 'symbols-light.json');
const rawLight = JSON.parse(fs.readFileSync(lightFilePath, 'utf-8'));

const symbols = rawLight.map((s) => ({ title: s.title, slug: s.slug }));

console.log(`Loaded ${symbols.length} symbols`);

function buildKeywords(s) {
  const keywords = [];
  const slugWord = s.slug
    .replace(/-/g, ' ')
    .replace(/\byi\b/g, 'yı')
    .trim();
  if (slugWord.length >= 3 && slugWord.length <= 40) {
    keywords.push(slugWord);
  }
  const coreMatch = s.title.match(/^R\u00fcyada\s+(.+?)\s+G\u00f6rmek/i);
  if (coreMatch) {
    const core = coreMatch[1].trim();
    if (core.length >= 3 && core.length <= 40 && !keywords.includes(core.toLowerCase())) {
      keywords.push(core.toLowerCase());
    }
  }
  return Array.from(new Set(keywords.filter(k => k.length >= 3)));
}

const tokenMap = new Map();
const entries = [];
for (const s of symbols) {
  if (s.slug === 'test') continue;
  const kws = buildKeywords(s);
  for (const kw of kws) {
    if (!tokenMap.has(kw)) {
      entries.push({ keyword: kw, slug: s.slug });
    }
  }
}
entries.sort((a, b) => b.keyword.length - a.keyword.length);
for (const { keyword, slug } of entries) {
  if (!tokenMap.has(keyword.toLowerCase())) {
    tokenMap.set(keyword.toLowerCase(), { slug, displayText: keyword });
  }
}

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const pattern = Array.from(tokenMap.keys())
  .sort((a, b) => b.length - a.length)
  .map(escapeRegExp)
  .join('|');

const startRegex = performance.now();
const cachedRegex = new RegExp(`(?<![\\w\\u00C0-\\u024F])(${pattern})(?![\\w\\u00C0-\\u024F])`, 'gi');
console.log(`Regex built in ${(performance.now() - startRegex).toFixed(2)} ms. Pattern length: ${pattern.length}`);

const sampleText = `Rüyalarda deneyimlenen doğal afetler arasında en sarsıcı ve akılda kalıcı olanlardan biri depremdir. Rüyada deprem olduğunu görmek, uyandığınızda bıraktığı yoğun panik ve korku hissiyle sizi gün boyu etkisi altına alabilir. Ev ve yılan sembolleri çok yaygındır. Rüyada altın veya bebek görmek de sık karşılaşılan durumlardandır. Hayatınızın temelini oluşturan inançların, ilişkilerin veya kariyer planlarının beklenmedik bir şekilde sınandığı, sarsıldığı ve dönüşüme uğradığı dönemlerde bu rüya adeta bir alarm zili görevi görür.`;

const startMatch = performance.now();
let match;
cachedRegex.lastIndex = 0;
let matchCount = 0;
while ((match = cachedRegex.exec(sampleText)) !== null) {
  matchCount++;
}
const endMatch = performance.now();
console.log(`Found ${matchCount} matches in ${(endMatch - startMatch).toFixed(2)} ms`);
