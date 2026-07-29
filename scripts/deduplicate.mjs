import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsBaseDir = path.join(__dirname, '..', 'content', 'symbols');

function deduplicate() {
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

  const seenSlugs = new Set();
  let duplicateCount = 0;

  for (const filePath of allJsonFiles) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(fileContent);
    let isModified = false;
    let newParsed;

    if (Array.isArray(parsed)) {
      newParsed = [];
      for (const sym of parsed) {
        if (!sym.slug) continue;
        if (seenSlugs.has(sym.slug)) {
          duplicateCount++;
          isModified = true;
          console.log(`Removed duplicate: ${sym.slug} from ${path.basename(filePath)}`);
        } else {
          seenSlugs.add(sym.slug);
          newParsed.push(sym);
        }
      }
    } else if (parsed && typeof parsed === 'object' && parsed.slug) {
      if (seenSlugs.has(parsed.slug)) {
        // Single object file is a duplicate. We can just delete the file.
        fs.unlinkSync(filePath);
        console.log(`Deleted duplicate file: ${path.basename(filePath)}`);
        duplicateCount++;
        continue;
      } else {
        seenSlugs.add(parsed.slug);
      }
    }

    if (isModified) {
      fs.writeFileSync(filePath, JSON.stringify(newParsed, null, 2), 'utf-8');
    }
  }

  console.log(`Deduplication complete. Removed ${duplicateCount} duplicates.`);
}

deduplicate();
