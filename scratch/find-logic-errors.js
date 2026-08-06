const fs = require('fs');
const path = require('path');

const symbolsPath = path.join(__dirname, '../content/symbols/searchable-symbols.json');
const symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

let doubleVerb = 0;
let awkwardGrammar = 0;
let excessiveAdjectives = 0;
let nounAsVerb = 0;
let veryShort = 0;

const errors = [];
const grammarErrors = [];

symbols.forEach(s => {
  // Clean the title: remove "Rüyada" and the suffix
  let core = s.title.replace(/^Rüyada\s+/i, '').replace(/\s*-\s*İslami.*$/i, '').trim().toLowerCase();
  
  const words = core.split(' ');
  
  // 1. Awkward grammar (e.g. "Büyük Cüzdan Kaçmak" -> "Cüzdan Kaçmak" mismatch)
  // Check if a noun modifier is followed by a verb that doesn't make sense, but scriptmatically it's hard.
  // Let's just look for double infinitives again.
  if (words.length >= 2) {
    const lastWord = words[words.length - 1];
    const secondLast = words[words.length - 2];
    
    // e.g., "Kaçmak Görmek"
    if ((lastWord === 'görmek' || lastWord === 'almak') && 
        (secondLast.endsWith('mak') || secondLast.endsWith('mek')) && 
        secondLast !== 'olmak' && secondLast !== 'yapmak' && secondLast !== 'etmek') {
       doubleVerb++;
       if (errors.length < 30) errors.push({ type: 'Double Infinitive', core });
    }
  }

  // 2. Excessive Adjectives (e.g. "Eski Kırık Kırmızı Araba Görmek")
  if (words.length >= 5) {
     excessiveAdjectives++;
     if (grammarErrors.length < 30) grammarErrors.push({ type: 'Too Many Words (Possible AI Keyword Mashing)', core });
  }

  // 3. Just weird ones like "Kaçmak" without object, or weird endings
  const lastWord = words[words.length - 1];
  if (!lastWord.endsWith('mek') && !lastWord.endsWith('mak')) {
     nounAsVerb++;
     if (errors.length < 30) errors.push({ type: 'Does not end with action', core });
  }
});

console.log('--- LOGIC ERRORS ANALYSIS (CLEANED) ---');
console.log(`Total Symbols Evaluated: ${symbols.length}`);
console.log(`Double Infinitive (e.g. Kaçmak Görmek): ${doubleVerb}`);
console.log(`Excessive Length (> 5 words): ${excessiveAdjectives}`);
console.log(`Doesn't end with an infinitive (mek/mak): ${nounAsVerb}`);
console.log('\n--- DOUBLE INFINITIVE SAMPLES ---');
console.log(errors.filter(e => e.type === 'Double Infinitive').slice(0, 5));
console.log('\n--- EXCESSIVE LENGTH SAMPLES ---');
console.log(grammarErrors.slice(0, 10));
console.log('\n--- NO INFINITIVE SAMPLES ---');
console.log(errors.filter(e => e.type === 'Does not end with action').slice(0, 5));
