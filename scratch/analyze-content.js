const fs = require('fs');
const path = require('path');

const symbolsDir = path.join(__dirname, '../content/symbols');
const files = fs.readdirSync(symbolsDir).filter(f => f.endsWith('.json') && !f.includes('index') && !f.includes('light') && !f.includes('searchable'));

let totalSymbols = 0;
let totalWords = 0;
let below850Count = 0;
let missingReligious = 0;
let missingPsychological = 0;

// Track exact text to find duplicates
const religiousTexts = new Map();
const psychologicalTexts = new Map();

let duplicateReligious = 0;
let duplicatePsychological = 0;

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).length;
}

for (const file of files) {
  try {
    const content = JSON.parse(fs.readFileSync(path.join(symbolsDir, file), 'utf-8'));
    const symbols = Array.isArray(content) ? content : [content];
    
    for (const sym of symbols) {
      if (!sym.slug || !sym.content) continue;
      
      totalSymbols++;
      const genWords = countWords(sym.content.generalMeaning);
      const relWords = countWords(sym.content.religiousMeaning);
      const psyWords = countWords(sym.content.psychologicalMeaning);
      
      let varWords = 0;
      if (sym.content.variations) {
        sym.content.variations.forEach(v => varWords += countWords(v.content));
      }
      
      let faqWords = 0;
      if (sym.content.faqs) {
        sym.content.faqs.forEach(f => faqWords += countWords(f.question) + countWords(f.answer));
      }
      
      const sumWords = genWords + relWords + psyWords + varWords + faqWords;
      totalWords += sumWords;
      
      if (sumWords < 850) {
        below850Count++;
      }
      
      if (!sym.content.religiousMeaning || relWords < 20) {
        missingReligious++;
      } else {
        const hash = sym.content.religiousMeaning.substring(0, 100);
        if (religiousTexts.has(hash)) {
          duplicateReligious++;
        } else {
          religiousTexts.set(hash, true);
        }
      }
      
      if (!sym.content.psychologicalMeaning || psyWords < 20) {
        missingPsychological++;
      } else {
        const hash = sym.content.psychologicalMeaning.substring(0, 100);
        if (psychologicalTexts.has(hash)) {
          duplicatePsychological++;
        } else {
          psychologicalTexts.set(hash, true);
        }
      }
    }
  } catch (e) {
    console.error(`Error parsing ${file}:`, e.message);
  }
}

console.log('--- CONTENT ANALYSIS REPORT ---');
console.log(`Total Files Checked: ${files.length}`);
console.log(`Total Symbols Analyzed: ${totalSymbols}`);
console.log(`Average Word Count per Symbol: ${(totalWords / totalSymbols).toFixed(0)}`);
console.log(`Symbols BELOW 850 words (Constitution Violation): ${below850Count} (${((below850Count/totalSymbols)*100).toFixed(1)}%)`);
console.log(`Symbols missing/short Religious content: ${missingReligious}`);
console.log(`Symbols missing/short Psychological content: ${missingPsychological}`);
console.log(`Duplicate Religious Content (first 100 chars match): ${duplicateReligious} (${((duplicateReligious/totalSymbols)*100).toFixed(1)}%)`);
console.log(`Duplicate Psychological Content (first 100 chars match): ${duplicatePsychological} (${((duplicatePsychological/totalSymbols)*100).toFixed(1)}%)`);
