"use client";

import { useState, useMemo, useEffect, useRef, useCallback, KeyboardEvent } from 'react';
import { DreamSymbol } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, Sparkles, ChevronRight, CornerDownLeft, Brain, ShieldAlert, HeartHandshake, Zap, Command, Mic, MicOff, Volume2, Filter, Flame, Tag, Layers, Check } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import TextToSpeech from '@/components/TextToSpeech';

interface SearchableItem {
  id: string;
  type: 'symbol' | 'variation';
  title: string;
  content: string;
  slug: string;
  category: string;
  score: number;
}

// Türkçe stop words (arama niyetinde anlamı tek başına taşımayan kelimeler)
const STOP_WORDS = new Set([
  'rüyada', 'ruyada', 'görmek', 'gordum', 'gordum', 'gördüm', 've', 'hem', 'ile', 
  'görüp', 'gorup', 'bir', 'çok', 'cok', 'nasıl', 'nedir', 'ne', 'demek', 'anlama', 
  'gelir', 'tabiri', 'islami', 'diyanet', 'psikolojik', 'yorum', 'yorumu', 'ben', 
  'bana', 'biz', 'diye', 'gibi', 'yada', 'veya', 'ise', 'için', 'icin', 'olan', 'olarak',
  'beni', 'onu', 'bunun', 'şunu', 'kendi'
]);

// Geliştirilmiş Türkçe NLP ve Eş Anlamlı (Synonym) Sözlüğü
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

// Kategori filtre grupları
const CATEGORY_FILTERS = [
  { id: 'tumu', label: '🌟 Tüm Kategoriler' },
  { id: 'hayvanlar', label: '🦁 Hayvanlar Alemi', match: ['hayvanlar', 'animals'] },
  { id: 'aile-insan', label: '👨‍👩‍👧‍👦 Aile & İnsanlar', match: ['ailem', 'insanlar', 'family', 'people'] },
  { id: 'doga-mekan', label: '🏔️ Doğa & Mekanlar', match: ['doga', 'mekanlar', 'nature', 'places'] },
  { id: 'yol-eylem', label: '🚀 Yolculuk & Eylemler', match: ['yolculuk', 'eylemler', 'actions', 'travel'] },
  { id: 'nesne-gida', label: '💎 Nesneler & Yiyecek', match: ['nesneler', 'yiyecek', 'items', 'food'] },
  { id: 'manevi-beden', label: '🕌 Maneviyat & Beden', match: ['soyut-kavramlar', 'beden', 'spiritual', 'body'] },
];

// Hızlı Kombinasyon Önerileri
const QUICK_COMBINATIONS = [
  { label: '🔥 Siyah Yılan + Altın', tags: ['siyah yılan', 'altın'] },
  { label: '🌊 Denizde Yüzmek + Balık', tags: ['denizde yüzmek', 'balık'] },
  { label: '⚡ Diş Kırılması + Kanama', tags: ['diş kırılması', 'kanama'] },
  { label: '🕊️ Güvercin + Beyaz Ev', tags: ['güvercin', 'beyaz ev'] },
  { label: '💰 Kağıt Para + Cüzdan', tags: ['kağıt para', 'cüzdan'] },
  { label: '🌙 Kabe + Yağmur', tags: ['kabe', 'yağmur'] },
  { label: '👨‍👩‍👧 Vefat Eden Anne + Sarılmak', tags: ['vefat eden anne', 'sarılmak'] },
];

// Sembol başlığından 'Rüyada' ve 'Görmek' eklerini temizler
const cleanTitle = (title: string) => {
  return title.trim().replace(/^rüyada\s+/i, '').replace(/\s+görmek$/i, '');
};

// Sözlük listesi için başlığı düzgün şekilde 'Rüyada X Görmek' formatına getirir
const formatSymbolTitle = (title: string) => {
  let clean = title.trim();
  if (!clean.toLowerCase().startsWith('rüyada')) {
    clean = `Rüyada ${clean}`;
  }
  if (!/(mak|mek|görmek|görmesi|olmak|etmek|bulmak|çıkmak)$/i.test(clean)) {
    clean = `${clean} Görmek`;
  }
  return clean;
};

export default function DetayliAramaClient() {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('tumu');
  const [isFocused, setIsFocused] = useState(false);
  const [feedbackDream, setFeedbackDream] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  
  // Lazy load: symbols are fetched from API on first interaction (not embedded in HTML)
  const [symbols, setSymbols] = useState<DreamSymbol[]>([]);
  const [symbolsLoaded, setSymbolsLoaded] = useState(false);
  const symbolsLoadingRef = useRef(false);

  const loadSymbols = useCallback(async () => {
    if (symbolsLoaded || symbolsLoadingRef.current) return;
    symbolsLoadingRef.current = true;
    try {
      const res = await fetch('/api/symbols');
      if (res.ok) {
        const data = await res.json();
        setSymbols(data);
        setSymbolsLoaded(true);
      }
    } catch (e) {
      console.error('Symbol data fetch failed:', e);
    }
  }, [symbolsLoaded]);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Cmd + K / Ctrl + K klavye kısayolu dinleyicisi
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent | globalThis.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 🎙️ Sesli Arama (Speech-to-Text / Web Speech API) Başlatma
  const toggleListening = () => {
    setSpeechError(null);
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setSpeechError('Tarayıcınız sesli arama özelliğini desteklemiyor (Chrome veya Edge önerilir).');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'tr-TR';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
        setInputValue('');
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputValue(transcript);
          // Uzun bir rüya anlatıldıysa kelimeleri otomatik etiketlere dönüştür
          const words = transcript
            .toLowerCase()
            .replace(/[^a-z0-9çğıöşü\s]/g, ' ')
            .split(/\s+/)
            .map((w: string) => w.trim())
            .filter((w: string) => w.length >= 3 && !STOP_WORDS.has(w));
          
          if (words.length > 0) {
            setTags(prev => Array.from(new Set([...prev, ...words.slice(0, 4)])));
          }
        }
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setSpeechError('Ses anlaşılamadı veya mikrofon izni verilmedi. Lütfen tekrar deneyin.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      console.error(err);
      setSpeechError('Mikrofon başlatılamadı.');
      setIsListening(false);
    }
  };

  // Metin girişini analiz edip anlamlı kelimeleri (tokenları) çıkarma ve NLP Eş Anlamlı Kök Genişletme
  const activeTokens = useMemo(() => {
    const inputTokens = inputValue
      .toLowerCase()
      .replace(/[^a-z0-9çğıöşü\s]/g, ' ')
      .split(/\s+/)
      .map(w => w.trim())
      .filter(w => w.length >= 2 && !STOP_WORDS.has(w));
    
    // Hem inputtaki kelimeler hem de eklenmiş etiketler
    const allUniqueTokens = Array.from(new Set([...tags, ...inputTokens]));
    return allUniqueTokens;
  }, [inputValue, tags]);

  // Eş anlamlı sözlükle genişletilmiş token havuzu (NLP Scoring için)
  const expandedTokensMap = useMemo(() => {
    const map = new Map<string, string[]>(); // token -> synonyms
    activeTokens.forEach(token => {
      const syns = new Set<string>();
      syns.add(token);
      // Sözlükte anahtar mı?
      if (SYNONYM_MAP[token]) {
        SYNONYM_MAP[token].forEach(s => syns.add(s));
      }
      // Sözlükte değerler içinde mi?
      Object.entries(SYNONYM_MAP).forEach(([key, val]) => {
        if (val.some(v => v.includes(token) || token.includes(v)) || key === token) {
          syns.add(key);
          val.forEach(v => syns.add(v));
        }
      });
      map.set(token, Array.from(syns));
    });
    return map;
  }, [activeTokens]);

  // Kategori filtre kontrolü
  const matchesCategory = useCallback((category: string) => {
    if (selectedCategory === 'tumu') return true;
    const filterObj = CATEGORY_FILTERS.find(f => f.id === selectedCategory);
    if (!filterObj || !filterObj.match) return true;
    return filterObj.match.some(m => category.toLowerCase().includes(m));
  }, [selectedCategory]);

  // Canlı Otomatik Tamamlama (Live Autocomplete Suggestions)
  const autocompleteSuggestions = useMemo(() => {
    if (inputValue.trim().length < 2) return [];
    const lowerInput = inputValue.trim().toLowerCase();
    
    return symbols
      .filter(s => matchesCategory(s.category) && (s.title.toLowerCase().includes(lowerInput) || s.slug.includes(lowerInput)))
      .slice(0, 5);
  }, [inputValue, symbols, matchesCategory]);

  // Eşleşen Ana Semboller (Akıllı Kombinasyon & NLP için)
  const matchedSymbols = useMemo(() => {
    if (activeTokens.length === 0) return [];
    
    return symbols.filter(sym => {
      if (!matchesCategory(sym.category)) return false;
      const symTitle = sym.title.toLowerCase();
      const symSlug = sym.slug.toLowerCase();
      const symDesc = sym.shortDescription.toLowerCase();

      // Doğrudan veya eş anlamlı eşleşme
      return activeTokens.some(token => {
        const syns = expandedTokensMap.get(token) || [token];
        return syns.some(syn => symTitle.includes(syn) || symSlug.includes(syn) || symDesc.includes(syn));
      });
    }).slice(0, 4); // En fazla 4 ana sembolü birleştir
  }, [activeTokens, symbols, expandedTokensMap, matchesCategory]);

  // Yapay Zeka Rüya Kombinatörü - Algoritmik Tefsir Üretici
  const aiSynthesis = useMemo(() => {
    if (matchedSymbols.length < 2 && activeTokens.length < 2) return null;
    if (matchedSymbols.length === 0) return null;

    const titles = matchedSymbols.map(s => cleanTitle(s.title)).join(" + ");
    const categories = Array.from(new Set(matchedSymbols.map(s => s.category.replace('-', ' '))));
    
    // Sembollerin genel anlamlarını birleştir
    const combinedGeneral = matchedSymbols
      .map(s => `• **${cleanTitle(s.title)}:** ${s.shortDescription}`)
      .join("\n\n");

    // İslami ve Psikolojik derinliği sentezle
    const hasReligious = matchedSymbols.some(s => s.content.religiousMeaning);
    const hasPsychological = matchedSymbols.some(s => s.content.psychologicalMeaning);

    let synthesisText = `Rüyada **${titles}** unsurlarının bir arada görülmesi, bilinçaltınızın ve manevi hislerinizin çok katmanlı bir mesaj verdiğine işaret eder. ${
      categories.length > 1 ? `Bu rüya, hayatınızdaki **${categories.join(", ")}** alanlarının birbiriyle doğrudan bağlantılı olduğunu gösterir.` : ""
    }\n\n`;

    synthesisText += `### 🌟 Sembollerin Etkileşim Analizi\n${combinedGeneral}\n\n`;

    synthesisText += `### 🕌 İslami ve Diyanet Sentezi\n`;
    if (hasReligious) {
      const relNotes = matchedSymbols
        .filter(s => s.content.religiousMeaning)
        .map(s => s.content.religiousMeaning)
        .slice(0, 2)
        .join(" ");
      synthesisText += `İslami alimlerin (İbn-i Sîrîn, İmam Nablusî) kadim tabirlerine göre bu kombinasyon; çevrenizdeki olaylara karşı basiretli olmanızı, elde edeceğiniz nimetlerde şükrü unutmamanızı ve gizli fırsat ya da riskleri zamanında fark etmenizi öğütler. ${relNotes.slice(0, 350)}...\n\n`;
    } else {
      synthesisText += `Bu sembollerin bir araya gelmesi manevi açıdan helal kazanca, niyet safiyetine ve karşılaşılan zorlukların ardından ferahlığa erişileceğine yorulmaktadır.\n\n`;
    }

    synthesisText += `### 🧠 Psikolojik (Jung & Freud) Bilinçaltı Mesajı\n`;
    if (hasPsychological) {
      const psyNotes = matchedSymbols
        .filter(s => s.content.psychologicalMeaning)
        .map(s => s.content.psychologicalMeaning)
        .slice(0, 2)
        .join(" ");
      synthesisText += `Modern analitik psikolojiye göre bu rüya, zihninizde dönüştürmeye çalıştığınız duyguların, korkuların veya üstü örtülmüş arzuların bir yansımasıdır. ${psyNotes.slice(0, 350)}...\n\n`;
    } else {
      synthesisText += `Bilinçaltınız, gündelik yaşantınızda baskıladığınız duygu durumlarını veya karar verme arifesinde olduğunuz önemli değişimleri bu sembolleri birleştirerek açığa çıkarmaktadır.\n\n`;
    }

    synthesisText += `💡 **Yapay Zeka Asistan Tavsiyesi:** Bu rüyayı bütüncül olarak değerlendirdiğinizde, özellikle yakın çevrenizle olan iletişiminizde sezgilerinize güvenmeli, ani kararlar yerine sakin ve sabırlı bir adımı tercih etmelisiniz.`;

    return {
      title: titles,
      text: synthesisText,
      count: matchedSymbols.length
    };
  }, [matchedSymbols, activeTokens]);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackDream.trim()) return;
    try {
      const existing = JSON.parse(localStorage.getItem('ruya_missing_feedback') || '[]');
      existing.push({
        dream: feedbackDream.trim(),
        date: new Date().toISOString(),
        query: inputValue || tags.join(' ')
      });
      localStorage.setItem('ruya_missing_feedback', JSON.stringify(existing));
      setFeedbackSubmitted(true);
      setFeedbackDream('');
      setTimeout(() => setFeedbackSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        const newTag = inputValue.trim().toLowerCase();
        if (!tags.includes(newTag) && !STOP_WORDS.has(newTag)) {
          setTags([...tags, newTag]);
        }
        setInputValue('');
      }
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const applyQuickCombination = (comboTags: string[]) => {
    setTags(comboTags);
    setInputValue('');
  };

  // Sonuçları puanlayıp sıralama (NLP & Eş Anlamlı destekli)
  const results = useMemo(() => {
    if (activeTokens.length === 0) return [];

    let allItems: SearchableItem[] = [];

    symbols.forEach(symbol => {
      if (!matchesCategory(symbol.category)) return;

      allItems.push({
        id: `sym-${symbol.slug}`,
        type: 'symbol',
        title: symbol.title,
        content: symbol.content.generalMeaning,
        slug: symbol.slug,
        category: symbol.category,
        score: 0
      });

      symbol.content.variations.forEach((v, index) => {
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
    });

    const scoredItems = allItems.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();

      activeTokens.forEach(token => {
        const syns = expandedTokensMap.get(token) || [token];
        
        syns.forEach((syn, index) => {
          const isExactToken = index === 0;
          if (titleLower.includes(syn)) {
            score += isExactToken ? 12 : 6; // Doğrudan kelimeyse 12 puan, eş anlamlıysa 6 puan
          } else if (contentLower.includes(syn)) {
            score += isExactToken ? 4 : 2; // İçerikte geçiyorsa 4 veya 2 puan
          }
        });
      });

      return { ...item, score };
    });

    return scoredItems
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 15);
  }, [activeTokens, symbols, expandedTokensMap, matchesCategory]);

  const highlightText = (text: string) => {
    if (activeTokens.length === 0) return text;
    
    // Tüm aktif tokenlar ve eş anlamlıları
    const allHighlightWords = new Set<string>();
    activeTokens.forEach(t => {
      allHighlightWords.add(t);
      const syns = expandedTokensMap.get(t);
      if (syns) syns.forEach(s => { if (s.length >= 3) allHighlightWords.add(s); });
    });

    const validTokens = Array.from(allHighlightWords).filter(t => t.length >= 2);
    if (validTokens.length === 0) return text;

    const regex = new RegExp(`(${validTokens.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      const isTag = validTokens.some(tag => tag.toLowerCase() === part.toLowerCase());
      return isTag ? (
        <span key={i} className="bg-gradient-to-r from-mystic-500/50 to-accent-500/40 text-white px-1.5 py-0.5 rounded-md font-bold border-b-2 border-accent-400 shadow-sm animate-pulse">
          {part}
        </span>
      ) : part;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search Input Area with Glowing Glassmorphism Border */}
      <div className="bg-gradient-to-b from-night-900/95 via-night-900/90 to-night-950/95 border-2 border-mystic-500/40 hover:border-mystic-400/80 focus-within:border-accent-400 focus-within:shadow-[0_0_40px_rgba(251,191,36,0.15)] rounded-3xl p-4 md:p-6 mb-6 shadow-2xl shadow-mystic-950/50 backdrop-blur-2xl relative z-30 transition-all duration-300">
        
        {/* Üst Bilgi Barı */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-night-800/80">
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-mystic-200 to-accent-300">
            <Brain className="w-4 h-4 text-accent-400 animate-pulse shrink-0" />
            <span>Akıllı Rüya Çevirmeni v2.0 (Sesli & Eş Anlamlı NLP Motoru)</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-night-800/80 border border-night-700 px-2.5 py-1 rounded-lg text-night-300 text-xs font-mono">
              <Command className="w-3 h-3 text-mystic-400" />
              <span>+ K ile anında ara</span>
            </div>
          </div>
        </div>

        {/* Kategori Filtre Butonları */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 no-scrollbar scroll-smooth border-b border-night-800/60">
          <span className="text-xs text-night-400 font-medium flex items-center gap-1 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-mystic-400" /> Filtrele:
          </span>
          {CATEGORY_FILTERS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1 shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-black font-bold shadow-lg shadow-accent-500/20 scale-105'
                  : 'bg-night-800/80 hover:bg-night-700 text-night-200 border border-night-700/60'
              }`}
            >
              {cat.label}
              {selectedCategory === cat.id && <Check className="w-3 h-3 ml-0.5" />}
            </button>
          ))}
        </div>

        {/* Etiketler (Tags) Alanı */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 pt-1">
            {tags.map(tag => (
              <span key={tag} className="bg-gradient-to-r from-mystic-800/90 via-mystic-700 to-night-800 text-mystic-100 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-sm font-semibold border border-mystic-400/50 shadow-md animate-in zoom-in duration-200">
                <Tag className="w-3.5 h-3.5 text-accent-400" />
                <span>{tag}</span>
                <button onClick={() => removeTag(tag)} className="hover:text-red-400 focus:outline-none bg-night-900/60 hover:bg-night-950 rounded-full p-1 transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
            <button 
              onClick={() => { setTags([]); setInputValue(''); }}
              className="text-xs text-night-400 hover:text-red-400 underline ml-1 self-center transition-colors font-medium"
            >
              Tümünü Temizle
            </button>
          </div>
        )}

        {/* Sesli Arama ve Metin Girişi Kutusu */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-mystic-400 z-10 pointer-events-none" />
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => { setIsFocused(true); loadSymbols(); }}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={handleKeyDown}
            placeholder={
              isListening 
                ? "🎙️ Rüyanızı dinliyorum, lütfen konuşun..." 
                : tags.length === 0 
                  ? "Rüyanızın tamamını yazın veya sesli anlatın (Örn: Vefat eden babamın elma vermesi)..." 
                  : "Kombinasyona yeni sembol ekleyin..."
            }
            className={`w-full bg-[#04060A] border-2 text-white rounded-2xl py-4 pl-14 pr-24 focus:outline-none transition-all placeholder:text-gray-400 text-base md:text-lg shadow-inner font-medium ${
              isListening ? 'border-red-500 bg-red-950/10 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse' : 'border-mystic-500/50 focus:border-accent-400'
            }`}
            style={{ backgroundColor: '#04060A', color: '#FFFFFF' }}
          />

          {/* Sağ Aksiyon Butonları (Temizle & Mikrofon) */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 z-10">
            {inputValue && (
              <button 
                onClick={() => setInputValue('')}
                className="text-gray-300 hover:text-white bg-night-800 hover:bg-night-700 rounded-full p-1.5 transition-colors"
                title="Yazıyı Temizle"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* 🎙️ Sesli Arama Mikrofon Butonu */}
            <button
              onClick={toggleListening}
              type="button"
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all shadow-lg ${
                isListening
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white animate-bounce shadow-red-500/40'
                  : 'bg-gradient-to-r from-mystic-700 to-night-800 hover:from-mystic-600 hover:to-mystic-700 text-mystic-200 border border-mystic-500/40 hover:scale-105'
              }`}
              title={isListening ? "Dinlemeyi Durdur" : "Sesli Rüya Anlat (Mikrofona Bas)"}
            >
              {isListening ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5 text-accent-400" />}
            </button>
          </div>

          {/* Live Autocomplete Dropdown */}
          {isFocused && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-[#080B14] border-2 border-mystic-500/60 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: '#080B14' }}>
              <div className="px-4 py-2.5 bg-[#04060A] border-b border-mystic-500/30 text-[11px] font-bold tracking-wider text-accent-400 uppercase flex items-center justify-between">
                <span>⚡ Hızlı Sözlük Eşleşmeleri ({selectedCategory !== 'tumu' ? CATEGORY_FILTERS.find(c => c.id === selectedCategory)?.label : 'Tümü'})</span>
                <span>Enter ile kombinasyona ekle</span>
              </div>
              <ul className="divide-y divide-night-800/80">
                {autocompleteSuggestions.map((suggestion) => (
                  <li key={suggestion.slug}>
                    <button
                      onClick={() => router.push(`/ruyada-${suggestion.slug}-gormek`)}
                      className="w-full text-left px-5 py-4 hover:bg-mystic-900/40 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent-500 group-hover:scale-125 transition-transform shrink-0" />
                        <span className="text-white font-semibold group-hover:text-accent-300 transition-colors text-base">
                          {formatSymbolTitle(suggestion.title)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all font-mono shrink-0">
                        Doğrudan Git <CornerDownLeft className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sesli Arama Hata Uyarısı */}
        {speechError && (
          <div className="mt-3 bg-red-950/80 border border-red-500/50 text-red-200 px-4 py-2 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span>{speechError}</span>
          </div>
        )}

        {/* 🔥 Tek Tıkla Hazır Kombinasyon Hapları */}
        <div className="mt-5 pt-4 border-t border-night-800/80">
          <div className="flex items-center gap-1.5 text-xs font-bold text-mystic-300 mb-2">
            <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
            <span>Popüler Yapay Zeka Rüya Kombinasyonlarını Deneyin (Tek Tıkla Ara):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUICK_COMBINATIONS.map((combo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => applyQuickCombination(combo.tags)}
                className="bg-night-800/90 hover:bg-gradient-to-r hover:from-mystic-800 hover:to-night-700 text-night-200 hover:text-white border border-night-700/80 hover:border-accent-400/50 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 shadow-sm hover:scale-105 flex items-center gap-1"
              >
                {combo.label}
              </button>
            ))}
          </div>
        </div>
        
        {activeTokens.length === 0 && (
          <div className="mt-4 text-xs md:text-sm text-night-300 flex items-center justify-center gap-2 font-light">
            <Sparkles className="w-4 h-4 text-accent-400 shrink-0" />
            <span><strong>Akıllı İpucu:</strong> Sözlüğümüz <span className="text-accent-300 font-semibold">eş anlamlı kelimeleri (baba = peder, ölüm = vefat, para = servet)</span> otomatik algılar ve tefsir eder!</span>
          </div>
        )}
      </div>

      <AdSlot type="yandex" yandexId="" className="mb-10" />

      {/* Akıllı Rüya Kombinatörü (AI Synthesis Card) + TTS Sesli Dinleme */}
      {aiSynthesis && (
        <div className="mb-12 bg-gradient-to-br from-night-900/95 via-mystic-950/90 to-night-900/95 border-2 border-accent-500/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-accent-500/15 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden text-left">
          <div className="absolute -right-12 -top-12 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-56 h-56 bg-mystic-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-night-800/80 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-600 via-accent-500 to-mystic-500 flex items-center justify-center text-black font-extrabold shadow-lg shadow-accent-500/25 shrink-0">
                <Brain className="w-6 h-6 animate-pulse text-black" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-accent-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Yapay Zeka Sentez ve Kombinasyon Raporu
                </span>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
                  &quot;{aiSynthesis.title}&quot; Tefsiri
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* 🔊 Sentezi Sesli Dinle Butonu (TextToSpeech) */}
              <div className="bg-night-950/80 border border-mystic-500/40 rounded-2xl px-3 py-1 shadow-inner">
                <TextToSpeech text={aiSynthesis.text} />
              </div>
              <span className="bg-gradient-to-r from-mystic-800 to-night-900 text-accent-300 border border-accent-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                ✨ {aiSynthesis.count} Sembol Birleştirildi
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-night-100 text-sm md:text-base leading-relaxed">
            {aiSynthesis.text.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg md:text-xl font-serif font-bold text-mystic-200 mt-6 mb-2 flex items-center gap-2 border-l-4 border-accent-500 pl-3 bg-mystic-950/40 py-1.5 rounded-r-xl">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('💡 ')) {
                return (
                  <div key={idx} className="bg-gradient-to-r from-accent-950/60 via-night-900 to-accent-950/60 border-2 border-accent-500/40 rounded-2xl p-5 text-accent-200 mt-6 flex items-start gap-3.5 shadow-xl">
                    <span className="text-2xl shrink-0">💡</span>
                    <div className="font-medium">{paragraph.replace('💡 ', '')}</div>
                  </div>
                );
              }
              return <p key={idx} className="whitespace-pre-line font-normal text-gray-200">{paragraph}</p>;
            })}
          </div>
        </div>
      )}

      {/* Results Area */}
      {activeTokens.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
          <div className="flex items-center justify-between border-b border-night-700/80 pb-3">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white flex items-center gap-2">
              <span>🔍 Detaylı Sözlük Sonuçları</span>
              <span className="text-sm font-sans font-normal text-night-400">({results.length} eşleşme)</span>
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-mystic-950/80 text-mystic-300 border border-mystic-500/30 px-3 py-1 rounded-full font-mono">
                ⚡ NLP Eş Anlamlı Algoritması Aktif
              </span>
            </div>
          </div>
          
          {results.length === 0 ? (
            <div className="text-center py-16 bg-night-900/40 rounded-3xl border border-night-800/80 border-dashed px-4">
              <Zap className="w-12 h-12 text-night-500 mx-auto mb-4 animate-pulse" />
              <p className="text-night-200 text-lg font-medium mb-2">Bu kelimelere uygun doğrudan bir rüya başlığı bulamadık.</p>
              <p className="text-night-400 text-sm max-w-md mx-auto mb-8">Farklı kelimeler denemek veya aradığınız rüyayı hemen alt bölümden ücretsiz talep etmek ister misiniz?</p>
              
              {/* Eksik Rüya Talep Kutusu (Boş Sonuç) */}
              <div className="max-w-lg mx-auto bg-[#04060A] border-2 border-mystic-500/50 rounded-2xl p-6 text-left shadow-2xl">
                <div className="flex items-center gap-2 text-accent-400 font-bold text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Aradığın Rüyayı Bulamadın mı? Hemen Talep Et!</span>
                </div>
                <p className="text-xs text-gray-300 mb-4">
                  Sistemimize günlük 200 yeni sembol ekleme standartımızla, talep ettiğiniz rüyayı sıfır fluff ve en az 850 kelimelik İslami & Psikolojik derinlikle hazırlayalım.
                </p>
                {feedbackSubmitted ? (
                  <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-200 p-3 rounded-xl text-center text-sm font-semibold animate-in zoom-in-95">
                    ✅ Talebiniz alındı! Yapay zeka tefsir motorumuz rüyanızı sıraya aldı.
                  </div>
                ) : (
                  <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-3">
                    <textarea 
                      value={feedbackDream}
                      onChange={(e) => setFeedbackDream(e.target.value)}
                      placeholder="Gördüğünüz rüyayı kısaca yazın (Örn: Rüyada yeşil elma yemek ve denize girmek)..."
                      className="w-full bg-[#080B14] border border-night-700 text-white placeholder-gray-400 text-sm rounded-xl p-3 focus:outline-none focus:border-accent-400 min-h-[80px]"
                    />
                    <button type="submit" className="bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-black font-bold py-2.5 px-4 rounded-xl text-sm transition-all shadow-lg hover:scale-[1.02]">
                      🚀 Tabirini Hazırla & Ekle (Ücretsiz Talep)
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {results.map((item) => (
                <div key={item.id} className="bg-night-900/60 border border-night-800 rounded-2xl p-6 md:p-8 hover:border-mystic-500/60 hover:bg-night-900/90 transition-all relative overflow-hidden group shadow-lg">
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="bg-night-950/90 text-mystic-300 text-[11px] font-bold px-3 py-1 rounded-full border border-night-700/80 shadow-inner">
                      Puan: {item.score}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent-400 mb-2 uppercase tracking-wider">
                    {item.type === 'symbol' ? '📌 Ana Rüya Sembolü' : '🔄 Özel Senaryo Varyasyonu'} • <span className="text-mystic-300 capitalize">{item.category}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 pr-24 group-hover:text-mystic-200 transition-colors">
                    {highlightText(item.title)}
                  </h3>
                  
                  <p className="text-night-300 leading-relaxed mb-6 line-clamp-4">
                    {highlightText(item.content)}
                  </p>
                  
                  <Link 
                    href={`/ruyada-${item.slug}-gormek`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-mystic-700 to-mystic-600 hover:from-mystic-600 hover:to-mystic-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-mystic-500/25 hover:scale-[1.01]"
                  >
                    <span>Kapsamlı Tabiri ve SSS Oku</span> 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          )}
          
          {/* Sonuç Listesi Altı Genel Feedback Kutusu */}
          {results.length > 0 && (
            <div className="mt-12 bg-gradient-to-r from-night-900/90 via-mystic-950/80 to-night-900/90 border border-mystic-500/40 rounded-3xl p-6 md:p-8 text-left shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-accent-400 font-bold text-sm md:text-base mb-1">
                    <Sparkles className="w-5 h-5" />
                    <span>Aradığınız Rüya Varyasyonunu Bulamadınız mı?</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300">
                    Gördüğünüz spesifik senaryoyu bize yazın. Günlük 200 sembol ekleme standartımızla, 850+ kelimelik İslami ve Psikolojik tabirini hemen sisteme ekleyelim!
                  </p>
                </div>
                
                <div className="w-full md:w-96 shrink-0">
                  {feedbackSubmitted ? (
                    <div className="bg-emerald-950/80 border border-emerald-500 text-emerald-200 p-3 rounded-xl text-center text-sm font-semibold">
                      ✅ Talebiniz alındı! En kısa sürede eklenecektir.
                    </div>
                  ) : (
                    <form onSubmit={handleFeedbackSubmit} className="flex gap-2">
                      <input 
                        type="text"
                        value={feedbackDream}
                        onChange={(e) => setFeedbackDream(e.target.value)}
                        placeholder="Örn: Eski evde kedi beslemek..."
                        className="flex-1 bg-[#04060A] border border-night-700 text-white placeholder-gray-400 text-xs md:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-accent-400"
                      />
                      <button type="submit" className="bg-accent-500 hover:bg-accent-400 text-black font-bold px-4 py-2.5 rounded-xl text-xs md:text-sm shrink-0 transition-transform hover:scale-105">
                        Talep Et
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
