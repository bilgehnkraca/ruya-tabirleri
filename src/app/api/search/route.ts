import { NextResponse } from 'next/server';
import { getSearchableSymbols } from '@/lib/data';

const STOP_WORDS = new Set([
  'rüyada', 'ruyada', 'görmek', 'gordum', 'gordum', 'gördüm', 've', 'hem', 'ile', 
  'görüp', 'gorup', 'bir', 'çok', 'cok', 'nasıl', 'nedir', 'ne', 'demek', 'anlama', 
  'gelir', 'tabiri', 'islami', 'diyanet', 'psikolojik', 'yorum', 'yorumu', 'ben', 
  'bana', 'biz', 'diye', 'gibi', 'yada', 'veya', 'ise', 'için', 'icin', 'olan', 'olarak',
  'beni', 'onu', 'bunun', 'şunu', 'kendi'
]);

const SYNONYM_MAP: Record<string, string[]> = {
  'baba': ['peder', 'babam', 'babami', 'ebeveyn', 'rahmetli', 'vefat', 'ata', 'babacığım'],
  'anne': ['valide', 'annem', 'annemi', 'ebeveyn', 'rahmetli', 'vefat', 'annecik'],
  'ölüm': ['vefat', 'ölü', 'cenaze', 'rahmetli', 'mezar', 'kabir', 'ölmüş', 'türbe'],
  'para': ['altın', 'altin', 'servet', 'nakit', 'kağıt para', 'zenginlik', 'cüzdan', 'dolar', 'euro', 'maaş', 'kazanç', 'külçe', 'bilezik', 'pırlanta', 'hazime'],
  'yılan': ['yilan', 'engerek', 'kobra', 'boğa', 'sürüngen', 'zehirli', 'ısırması'],
  'köpek': ['kopek', 'it', 'enik', 'yavru köpek', 'sadık', 'golden'],
  'kedi': ['yavru kedi', 'pisik', 'iran kedisi', 'tekir', 'mırlama'],
  'ev': ['hane', 'daire', 'konak', 'bina', 'yalı', 'apartman', 'oda', 'villa', 'salon', 'mutfak', 'balkon', 'bahçe', 'yazlık'],
  'su': ['deniz', 'nehir', 'göl', 'şelale', 'dere', 'çay', 'yağmur', 'okyanus', 'zemzem', 'yüzmek', 'boğulmak', 'berrak', 'içmek'],
  'çocuk': ['bebek', 'evlat', 'yavru', 'oğul', 'kız', 'torun', 'küçük', 'oğlum', 'kızım'],
  'araba': ['otomobil', 'araç', 'vasıta', 'taksi', 'minibüs', 'otobüs', 'tır', 'sürmek', 'garaj'],
  'yol': ['yolculuk', 'seyahat', 'patika', 'otoban', 'göç', 'tur', 'rotası', 'harita', 'uçak', 'gemi', 'tren'],
  'ağlama': ['gözyaşı', 'ağlamak', 'üzüntü', 'keder', 'yas', 'katarsis', 'sarılıp'],
  'gülme': ['neşe', 'sevinç', 'mutluluk', 'gülümsemek', 'kahkaha', 'bayram', 'kutlama'],
  'yemek': ['taam', 'rızık', 'sofra', 'lokma', 'ziyafet', 'ikram', 'pastane', 'fırın', 'ekmek', 'tatlı', 'börek', 'pasta'],
  'hastalık': ['şifa', 'doktor', 'hastane', 'hasta', 'tedavi', 'ilaç', 'sağlık', 'ameliyat', 'hemşire'],
  'namaz': ['ibadet', 'camii', 'secde', 'dua', 'abdest', 'kabe', 'ezan', 'seccade', 'tesbih', 'kur\'an']
};

const CATEGORY_FILTERS = [
  { id: 'tumu', label: 'Tüm Kategoriler' },
  { id: 'hayvanlar', match: ['hayvanlar', 'animals'] },
  { id: 'aile-insan', match: ['ailem', 'insanlar', 'family', 'people'] },
  { id: 'doga-mekan', match: ['doga', 'mekanlar', 'nature', 'places'] },
  { id: 'yol-eylem', match: ['yolculuk', 'eylemler', 'actions', 'travel'] },
  { id: 'nesne-gida', match: ['nesneler', 'yiyecek', 'items', 'food'] },
  { id: 'manevi-beden', match: ['soyut-kavramlar', 'beden', 'spiritual', 'body'] },
];

const cleanTitle = (title: string) => title.trim().replace(/^rüyada\s+/i, '').replace(/\s+görmek$/i, '');

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const tagsParam = searchParams.get('tags') || '';
  const categoryParam = searchParams.get('category') || 'tumu';

  const tags = tagsParam ? tagsParam.split(',').map(t => t.trim()).filter(Boolean) : [];

  const inputTokens = q
    .toLowerCase()
    .replace(/[^a-z0-9çğıöşü\s]/g, ' ')
    .split(/\s+/)
    .map(w => w.trim())
    .filter(w => w.length >= 2 && !STOP_WORDS.has(w));

  const activeTokens = Array.from(new Set([...tags, ...inputTokens]));

  if (activeTokens.length === 0 && q.length < 2) {
    return NextResponse.json({ results: [], aiSynthesis: null });
  }

  const symbols = getSearchableSymbols();

  const matchesCategory = (cat: string) => {
    if (categoryParam === 'tumu') return true;
    const filterObj = CATEGORY_FILTERS.find(f => f.id === categoryParam);
    if (!filterObj || !filterObj.match) return true;
    return filterObj.match.some(m => cat.toLowerCase().includes(m));
  };

  const expandedTokensMap = new Map<string, string[]>();
  activeTokens.forEach(token => {
    const syns = new Set<string>();
    syns.add(token);
    if (SYNONYM_MAP[token]) {
      SYNONYM_MAP[token].forEach(s => syns.add(s));
    }
    Object.entries(SYNONYM_MAP).forEach(([key, val]) => {
      if (val.some(v => v.includes(token) || token.includes(v)) || key === token) {
        syns.add(key);
        val.forEach(v => syns.add(v));
      }
    });
    expandedTokensMap.set(token, Array.from(syns));
  });

  // Calculate scores
  let allItems: any[] = [];
  
  symbols.forEach(symbol => {
    if (!matchesCategory(symbol.category)) return;

    allItems.push({
      id: `sym-${symbol.slug}`,
      type: 'symbol',
      title: symbol.title,
      content: symbol.content?.generalMeaning || symbol.shortDescription || "",
      slug: symbol.slug,
      category: symbol.category,
      score: 0
    });

    if (symbol.content?.variations) {
      symbol.content.variations.forEach((v: any, index: number) => {
        allItems.push({
          id: `var-${symbol.slug}-${index}`,
          type: 'variation',
          title: v.title,
          content: v.content,
          slug: symbol.slug,
          category: symbol.category,
          score: 0
        });
      });
    }
  });

  const scoredItems = allItems.map(item => {
    let itemScore = 0;
    const itemTitle = item.title.toLowerCase();
    const itemContent = item.content.toLowerCase();
    const itemSlug = item.slug.toLowerCase();

    activeTokens.forEach(token => {
      const syns = expandedTokensMap.get(token) || [token];
      
      syns.forEach(syn => {
        if (itemSlug === syn || itemTitle === syn || itemTitle === `rüyada ${syn} görmek`) {
          itemScore += 50;
        } else if (itemTitle.includes(syn)) {
          itemScore += 20;
        } else if (itemSlug.includes(syn)) {
          itemScore += 15;
        } else if (itemContent.includes(syn)) {
          itemScore += 5;
        }
      });
    });

    return { ...item, score: itemScore };
  }).filter(item => item.score > 0);

  scoredItems.sort((a, b) => b.score - a.score);
  
  const results = scoredItems.slice(0, 15);

  // AI Synthesis
  let aiSynthesis = null;
  const matchedSymbols = symbols.filter(sym => {
    if (!matchesCategory(sym.category)) return false;
    const symTitle = sym.title.toLowerCase();
    const symSlug = sym.slug.toLowerCase();
    const symDesc = sym.shortDescription.toLowerCase();

    return activeTokens.some(token => {
      const syns = expandedTokensMap.get(token) || [token];
      return syns.some(syn => symTitle.includes(syn) || symSlug.includes(syn) || symDesc.includes(syn));
    });
  }).slice(0, 4);

  if (matchedSymbols.length >= 2 || (matchedSymbols.length > 0 && activeTokens.length >= 2)) {
    const titles = matchedSymbols.map(s => cleanTitle(s.title)).join(" + ");
    const categories = Array.from(new Set(matchedSymbols.map(s => s.category.replace('-', ' '))));
    
    const combinedGeneral = matchedSymbols
      .map(s => `• **${cleanTitle(s.title)}:** ${s.shortDescription}`)
      .join("\n\n");

    const hasReligious = matchedSymbols.some(s => s.content?.religiousMeaning);
    const hasPsychological = matchedSymbols.some(s => s.content?.psychologicalMeaning);

    let synthesisText = `Rüyada **${titles}** unsurlarının bir arada görülmesi, bilinçaltınızın ve manevi hislerinizin çok katmanlı bir mesaj verdiğine işaret eder. ${
      categories.length > 1 ? `Bu rüya, hayatınızdaki **${categories.join(", ")}** alanlarının birbiriyle doğrudan bağlantılı olduğunu gösterir.` : ""
    }\n\n`;

    synthesisText += `### 🌟 Sembollerin Etkileşim Analizi\n${combinedGeneral}\n\n`;

    synthesisText += `### 🕌 İslami ve Diyanet Sentezi\n`;
    if (hasReligious) {
      const relNotes = matchedSymbols
        .filter(s => s.content?.religiousMeaning)
        .map(s => s.content.religiousMeaning)
        .slice(0, 2)
        .join(" ");
      synthesisText += `İslami alimlerin kadim tabirlerine göre bu kombinasyon; çevrenizdeki olaylara karşı basiretli olmanızı, gizli fırsat ya da riskleri zamanında fark etmenizi öğütler. ${relNotes.slice(0, 350)}...\n\n`;
    } else {
      synthesisText += `Bu sembollerin bir araya gelmesi manevi açıdan helal kazanca, niyet safiyetine ve karşılaşılan zorlukların ardından ferahlığa erişileceğine yorulmaktadır.\n\n`;
    }

    synthesisText += `### 🧠 Psikolojik (Jung & Freud) Bilinçaltı Mesajı\n`;
    if (hasPsychological) {
      const psyNotes = matchedSymbols
        .filter(s => s.content?.psychologicalMeaning)
        .map(s => s.content.psychologicalMeaning)
        .slice(0, 2)
        .join(" ");
      synthesisText += `Modern analitik psikolojiye göre bu rüya, zihninizde dönüştürmeye çalıştığınız duyguların bir yansımasıdır. ${psyNotes.slice(0, 350)}...\n\n`;
    } else {
      synthesisText += `Bilinçaltınız, gündelik yaşantınızda baskıladığınız duygu durumlarını veya önemli değişimleri bu sembolleri birleştirerek açığa çıkarmaktadır.\n\n`;
    }

    synthesisText += `💡 **Yapay Zeka Asistan Tavsiyesi:** Bu rüyayı bütüncül olarak değerlendirdiğinizde, ani kararlar yerine sakin ve sabırlı bir adımı tercih etmelisiniz.`;

    aiSynthesis = {
      title: titles,
      text: synthesisText,
      count: matchedSymbols.length
    };
  }

  // Generate suggestions for autocomplete if query is short
  let suggestions: any[] = [];
  if (q.trim().length >= 2 && results.length === 0 && activeTokens.length === 1) {
      const lowerInput = q.trim().toLowerCase();
      suggestions = symbols
        .filter(s => matchesCategory(s.category) && (s.title.toLowerCase().includes(lowerInput) || s.slug.includes(lowerInput)))
        .slice(0, 5)
        .map(s => ({ title: s.title, slug: s.slug }));
  }

  return NextResponse.json({
    results,
    aiSynthesis,
    suggestions
  });
}
