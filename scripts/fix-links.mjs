import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace href={`/ruyada-${symbol.slug}-gormek`} with href={`/sembol/${symbol.slug}`}
    content = content.replace(/\/ruyada-\$\{([^}]+)\}-gormek/g, '/sembol/${$1}');
    
    // Replace URL paths in strings like https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek
    // Note: the regex above already catches `/ruyada-${...}-gormek` regardless of what's before it!
    // So the above regex is very powerful and catches `https://www.ruyasozlugunuz.com/ruyada-${symbol.slug}-gormek`
    // and turns it into `https://www.ruyasozlugunuz.com/sembol/${symbol.slug}`

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed:', filePath);
    }
  }
});
