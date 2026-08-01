const fs = require('fs');
const path = require('path');

const symbolsBaseDir = path.join(process.cwd(), 'content', 'symbols');
const indexFilePath = path.join(symbolsBaseDir, 'slug-index.json');
const lightFilePath = path.join(symbolsBaseDir, 'symbols-light.json');
const searchableFilePath = path.join(symbolsBaseDir, 'searchable-symbols.json');

function generateIndexes() {
  console.log('Generating indexes for fast retrieval...');
  
  if (!fs.existsSync(symbolsBaseDir)) {
    console.warn(`Directory not found: ${symbolsBaseDir}`);
    return;
  }

  const slugMap = {}; // slug -> relative file path
  const symbolsLight = []; 
  const searchableSymbols = [];

  const rootFiles = fs.readdirSync(symbolsBaseDir, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory() && dirent.name.endsWith('.json') && !['slug-index.json', 'symbols-light.json', 'searchable-symbols.json'].includes(dirent.name))
    .map(dirent => dirent.name);

  const subDirs = fs.readdirSync(symbolsBaseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const allJsonFiles = [...rootFiles];
  for (const dirName of subDirs) {
    const dirPath = path.join(symbolsBaseDir, dirName);
    const files = fs.readdirSync(dirPath)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(dirName, f));
    allJsonFiles.push(...files);
  }

  let totalSymbols = 0;

  function processSymbol(sym, relativePath) {
    if (!sym || !sym.slug) return;
    
    slugMap[sym.slug] = relativePath;
    totalSymbols++;

    symbolsLight.push({
      slug: sym.slug,
      title: sym.title || '',
      category: sym.category || '',
      dateModified: sym.dateModified || new Date().toISOString()
    });

    searchableSymbols.push({
      slug: sym.slug,
      title: sym.title || '',
      category: sym.category || '',
      shortDescription: sym.shortDescription || '',
      content: {
        introduction: "",
        generalMeaning: sym.content?.generalMeaning ? sym.content.generalMeaning.slice(0, 300) : "",
        variations: (sym.content?.variations || []).map(v => ({
          title: v.title || '',
          content: v.content ? v.content.slice(0, 150) : ""
        })),
        religiousMeaning: sym.content?.religiousMeaning ? sym.content.religiousMeaning.slice(0, 450) : "",
        psychologicalMeaning: sym.content?.psychologicalMeaning ? sym.content.psychologicalMeaning.slice(0, 450) : "",
        faqs: []
      },
      relatedSymbols: []
    });
  }

  for (const relativePath of allJsonFiles) {
    const filePath = path.join(symbolsBaseDir, relativePath);
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(fileContent);
      
      if (Array.isArray(parsed)) {
        for (const sym of parsed) {
          processSymbol(sym, relativePath);
        }
      } else {
        processSymbol(parsed, relativePath);
      }
    } catch (e) {
      console.error(`Error parsing JSON for file ${filePath}:`, e);
    }
  }

  fs.writeFileSync(indexFilePath, JSON.stringify(slugMap), 'utf-8');
  fs.writeFileSync(lightFilePath, JSON.stringify(symbolsLight), 'utf-8');
  fs.writeFileSync(searchableFilePath, JSON.stringify(searchableSymbols), 'utf-8');

  console.log(`Successfully indexed ${totalSymbols} symbols from ${allJsonFiles.length} files.`);
  console.log(`Indexes saved to ${symbolsBaseDir}`);
}

generateIndexes();
