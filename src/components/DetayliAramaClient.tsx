"use client";

import { useState, useMemo, useEffect, useRef, KeyboardEvent } from 'react';
import { DreamSymbol } from '@/lib/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, Sparkles, ChevronRight, CornerDownLeft, Brain, ShieldAlert, HeartHandshake, Zap, Command } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

interface SearchableItem {
  id: string;
  type: 'symbol' | 'variation';
  title: string;
  content: string;
  slug: string;
  score: number;
}

// Türkçe stop words (arama niyetinde anlamı tek başına taşımayan kelimeler)
const STOP_WORDS = new Set([
  'rüyada', 'ruyada', 'görmek', 'gordum', 'gordum', 'gördüm', 've', 'hem', 'ile', 
  'görüp', 'gorup', 'bir', 'çok', 'cok', 'nasıl', 'nedir', 'ne', 'demek', 'anlama', 
  'gelir', 'tabiri', 'islami', 'diyanet', 'psikolojik', 'yorum', 'yorumu', 'ben', 
  'bana', 'biz', 'diye', 'gibi', 'yada', 'veya', 'ise', 'için', 'icin', 'olan', 'olarak'
]);

// Sembol başlığından 'Rüyada' ve 'Görmek' eklerini temizler
const cleanTitle = (title: string) => {
  return title.trim().replace(/^rüyada\s+/i, '').replace(/\s+görmek$/i, '');
};

// Sözlük listesi için başlığı düzgün şekilde 'Rüyada X Görmek' formatına getirir (çift Rüyada önler)
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

export default function DetayliAramaClient({ symbols }: { symbols: DreamSymbol[] }) {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
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

  // Metin girişini analiz edip anlamlı kelimeleri (tokenları) çıkarma
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

  // Canlı Otomatik Tamamlama (Live Autocomplete Suggestions)
  const autocompleteSuggestions = useMemo(() => {
    if (inputValue.trim().length < 2) return [];
    const lowerInput = inputValue.trim().toLowerCase();
    
    return symbols
      .filter(s => s.title.toLowerCase().includes(lowerInput) || s.slug.includes(lowerInput))
      .slice(0, 5);
  }, [inputValue, symbols]);

  // Eşleşen Ana Semboller (Akıllı Kombinasyon için)
  const matchedSymbols = useMemo(() => {
    if (activeTokens.length === 0) return [];
    return symbols.filter(sym => {
      const symTitle = sym.title.toLowerCase();
      const symSlug = sym.slug.toLowerCase();
      return activeTokens.some(token => symTitle.includes(token) || symSlug.includes(token));
    }).slice(0, 4); // En fazla 4 ana sembolü birleştir
  }, [activeTokens, symbols]);

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
      categories.length > 1 ? `Bu rüya, hayatınızdaki **${categories.join(", ")}** alanlerinin birbiriyle doğrudan bağlantılı olduğunu gösterir.` : ""
    }\n\n`;

    synthesisText += `### 🌟 Sembollerin Etkileşim Analizi\n${combinedGeneral}\n\n`;

    synthesisText += `### 🕌 İslami ve Diyanet Sentezi\n`;
    if (hasReligious) {
      const relNotes = matchedSymbols
        .filter(s => s.content.religiousMeaning)
        .map(s => s.content.religiousMeaning)
        .slice(0, 2)
        .join(" ");
      synthesisText += `İslami alimlerin (İbn-i Sîrîn, İmam Nablusî) kadim tabirlerine göre bu kombinasyon; çevrenizdeki olaylara karşı basiretli olmanızı, elde edeceğiniz nimetlerde şükrü unutmamanızı ve gizli fırsat ya da riskleri zamanında fark etmenizi öğütler. ${relNotes.slice(0, 300)}...\n\n`;
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
      synthesisText += `Modern analitik psikolojiye göre bu rüya, zihninizde dönüştürmeye çalıştığınız duyguların, korkuların veya üstü örtülmüş arzuların bir yansımasıdır. ${psyNotes.slice(0, 300)}...\n\n`;
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

  const results = useMemo(() => {
    if (activeTokens.length === 0) return [];

    let allItems: SearchableItem[] = [];

    symbols.forEach(symbol => {
      allItems.push({
        id: `sym-${symbol.slug}`,
        type: 'symbol',
        title: symbol.title,
        content: symbol.content.generalMeaning,
        slug: symbol.slug,
        score: 0
      });

      symbol.content.variations.forEach((v, index) => {
        allItems.push({
          id: `var-${symbol.slug}-${index}`,
          type: 'variation',
          title: v.title,
          content: v.content,
          slug: symbol.slug,
          score: 0
        });
      });
    });

    const scoredItems = allItems.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();

      activeTokens.forEach(token => {
        if (titleLower.includes(token)) score += 5;
        else if (contentLower.includes(token)) score += 2;
      });

      return { ...item, score };
    });

    return scoredItems
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [activeTokens, symbols]);

  const highlightText = (text: string) => {
    if (activeTokens.length === 0) return text;
    
    const validTokens = activeTokens.filter(t => t.length >= 2);
    if (validTokens.length === 0) return text;

    const regex = new RegExp(`(${validTokens.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      const isTag = validTokens.some(tag => tag.toLowerCase() === part.toLowerCase());
      return isTag ? (
        <span key={i} className="bg-mystic-500/40 text-mystic-100 px-1 rounded font-semibold border-b border-mystic-400">
          {part}
        </span>
      ) : part;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input Area */}
      <div className="bg-night-900/90 border-2 border-mystic-500/30 hover:border-mystic-500/60 focus-within:border-mystic-400 rounded-3xl p-4 md:p-6 mb-8 shadow-2xl shadow-mystic-900/30 backdrop-blur-xl relative z-30 transition-all duration-300">
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-mystic-300">
            <Brain className="w-4 h-4 text-accent-400 animate-pulse" />
            <span>Yapay Zeka Destekli Akıllı Rüya Kombinatörü</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 bg-night-800/80 border border-night-700 px-2.5 py-1 rounded-lg text-night-400 text-xs font-mono">
            <Command className="w-3 h-3" />
            <span>+ K ile anında ara</span>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3 pt-1 border-t border-night-800/80">
            {tags.map(tag => (
              <span key={tag} className="bg-gradient-to-r from-mystic-700 to-night-700 text-mystic-100 px-3 py-1.5 rounded-xl flex items-center gap-2 text-sm font-medium border border-mystic-500/40 shadow-sm animate-in zoom-in duration-200">
                🏷️ {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-white focus:outline-none bg-night-900/50 rounded-full p-0.5">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
            <button 
              onClick={() => { setTags([]); setInputValue(''); }}
              className="text-xs text-night-400 hover:text-red-400 underline ml-1 self-center transition-colors"
            >
              Temizle
            </button>
          </div>
        )}

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-mystic-400 z-10 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? "Rüyanızı veya sembolleri yazın (Örn: Siyah yılan ısırması ve altın)..." : "Kombinasyona yeni sembol ekleyin..."}
            className="w-full bg-[#04060A] border-2 border-mystic-500/50 text-white rounded-2xl py-4 pl-14 pr-12 focus:outline-none focus:border-accent-400 transition-all placeholder:text-gray-400 text-base md:text-lg shadow-inner font-medium"
            style={{ backgroundColor: '#04060A', color: '#FFFFFF' }}
          />
          {inputValue && (
            <button 
              onClick={() => setInputValue('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white bg-night-800 rounded-full p-1 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Live Autocomplete Dropdown */}
          {isFocused && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-[#080B14] border-2 border-mystic-500/50 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200" style={{ backgroundColor: '#080B14' }}>
              <div className="px-4 py-2.5 bg-[#04060A] border-b border-mystic-500/30 text-[11px] font-bold tracking-wider text-accent-400 uppercase flex items-center justify-between">
                <span>⚡ Hızlı Sözlük Eşleşmeleri</span>
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
        
        {activeTokens.length === 0 && (
          <div className="mt-4 text-xs md:text-sm text-night-300 flex items-center justify-center gap-2 font-light">
            <Sparkles className="w-4 h-4 text-accent-400 shrink-0" />
            <span><strong>İpucu:</strong> Tek kelimeler yerine <span className="text-mystic-300 font-medium">&quot;yılan ve altın&quot;</span>, <span className="text-mystic-300 font-medium">&quot;denizde yüzmek&quot;</span> gibi cümleler yazarak yapay zeka kombinasyon motorunu tetikleyin.</span>
          </div>
        )}
      </div>

      <AdSlot type="yandex" yandexId="" className="mb-10" />

      {/* Akıllı Rüya Kombinatörü (AI Synthesis Card) */}
      {aiSynthesis && (
        <div className="mb-12 bg-gradient-to-br from-night-900/90 via-mystic-950/80 to-night-900/90 border-2 border-accent-500/40 rounded-3xl p-6 md:p-8 shadow-2xl shadow-accent-500/10 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-mystic-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-night-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent-600 to-mystic-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/20">
                <Brain className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-400">Yapay Zeka Sentezi</span>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
                  &quot;{aiSynthesis.title}&quot; Kombinasyon Analizi
                </h2>
              </div>
            </div>
            <span className="bg-night-950/80 text-mystic-300 border border-mystic-500/30 px-3 py-1.5 rounded-full text-xs font-semibold">
              ✨ {aiSynthesis.count} Sembol Birleştirildi
            </span>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-night-200 text-sm md:text-base leading-relaxed">
            {aiSynthesis.text.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-serif font-bold text-mystic-200 mt-6 mb-2 flex items-center gap-2 border-l-2 border-accent-500 pl-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('💡 ')) {
                return (
                  <div key={idx} className="bg-accent-950/40 border border-accent-500/30 rounded-2xl p-4 text-accent-200 mt-6 flex items-start gap-3">
                    <span className="text-xl">💡</span>
                    <div>{paragraph.replace('💡 ', '')}</div>
                  </div>
                );
              }
              return <p key={idx} className="whitespace-pre-line">{paragraph}</p>;
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
            <span className="text-xs text-night-400 font-mono hidden sm:inline">En yüksek puana göre sıralandı</span>
          </div>
          
          {results.length === 0 ? (
            <div className="text-center py-16 bg-night-900/40 rounded-3xl border border-night-800/80 border-dashed">
              <Zap className="w-12 h-12 text-night-600 mx-auto mb-4" />
              <p className="text-night-200 text-lg font-medium mb-2">Bu kelimelere uygun doğrudan bir rüya başlığı bulamadık.</p>
              <p className="text-night-400 text-sm max-w-md mx-auto">Farklı eş anlamlı kelimeler (Örn: &quot;köpek&quot; yerine &quot;hayvan&quot;, &quot;para&quot; yerine &quot;altın&quot;) denemeyi deneyin.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {results.map((item) => (
                <div key={item.id} className="bg-night-900/60 border border-night-800 rounded-2xl p-6 md:p-8 hover:border-mystic-500/50 hover:bg-night-900/80 transition-all relative overflow-hidden group shadow-lg">
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="bg-night-950/80 text-mystic-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-night-700/80">
                      Puan: {item.score}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent-400 mb-2 uppercase tracking-wider">
                    {item.type === 'symbol' ? '📌 Ana Rüya Sembolü' : '🔄 Özel Senaryo Varyasyonu'}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 pr-24 group-hover:text-mystic-200 transition-colors">
                    {highlightText(item.title)}
                  </h3>
                  
                  <p className="text-night-300 leading-relaxed mb-6 line-clamp-4">
                    {highlightText(item.content)}
                  </p>
                  
                  <Link 
                    href={`/ruyada-${item.slug}-gormek`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-mystic-700 to-mystic-600 hover:from-mystic-600 hover:to-mystic-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-mystic-500/20"
                  >
                    <span>Kapsamlı Tabiri ve SSS Oku</span> 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
