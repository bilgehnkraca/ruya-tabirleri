import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

for (let symbol of symbols) {
  // AEO for generalMeaning
  const aeoPrefix = `${symbol.title.replace('Rüyada ', '')} rüyada görüldüğünde genel olarak ${symbol.shortDescription.split(';')[1] ? symbol.shortDescription.split(';')[1].trim() : symbol.shortDescription} şeklinde yorumlanır.`;
  
  if (!symbol.content.generalMeaning.startsWith(aeoPrefix)) {
    symbol.content.generalMeaning = `${aeoPrefix} ${symbol.content.generalMeaning}`;
  }

  // AEO for FAQ
  const aeoFaqQuestion = `Rüyada ${symbol.title.replace('Rüyada ', '').replace(' Görmek', '').toLowerCase()} görmek ne anlama gelir?`;
  const existingFaq = symbol.content.faqs.find(f => f.question.toLowerCase() === aeoFaqQuestion.toLowerCase());
  
  if (!existingFaq) {
    symbol.content.faqs.unshift({
      question: aeoFaqQuestion,
      answer: symbol.shortDescription
    });
  }
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('AEO optimization applied to all symbols.');
