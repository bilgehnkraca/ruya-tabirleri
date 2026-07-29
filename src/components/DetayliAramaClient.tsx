"use client";

import { useState, useEffect, useRef, useCallback, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ChevronRight, CornerDownLeft, ShieldAlert, Command, Mic, MicOff, Filter, Tag, Check, Book, Zap } from 'lucide-react';
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

const CATEGORY_FILTERS = [
  { id: 'tumu', label: 'Tüm Kategoriler' },
  { id: 'hayvanlar', label: 'Hayvanlar Alemi' },
  { id: 'aile-insan', label: 'Aile & İnsanlar' },
  { id: 'doga-mekan', label: 'Doğa & Mekanlar' },
  { id: 'yol-eylem', label: 'Yolculuk & Eylemler' },
  { id: 'nesne-gida', label: 'Nesneler & Yiyecek' },
  { id: 'manevi-beden', label: 'Maneviyat & Beden' },
];

const QUICK_COMBINATIONS = [
  { label: 'Siyah Yılan + Altın', tags: ['siyah yılan', 'altın'] },
  { label: 'Denizde Yüzmek + Balık', tags: ['denizde yüzmek', 'balık'] },
  { label: 'Diş Kırılması + Kanama', tags: ['diş kırılması', 'kanama'] },
  { label: 'Güvercin + Beyaz Ev', tags: ['güvercin', 'beyaz ev'] },
  { label: 'Kağıt Para + Cüzdan', tags: ['kağıt para', 'cüzdan'] },
  { label: 'Kabe + Yağmur', tags: ['kabe', 'yağmur'] },
  { label: 'Vefat Eden Anne + Sarılmak', tags: ['vefat eden anne', 'sarılmak'] },
];

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

  const [results, setResults] = useState<SearchableItem[]>([]);
  const [aiSynthesis, setAiSynthesis] = useState<any>(null);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search API Call
  useEffect(() => {
    const fetchResults = async () => {
      if (inputValue.trim().length < 2 && tags.length === 0) {
        setResults([]);
        setAiSynthesis(null);
        setAutocompleteSuggestions([]);
        return;
      }
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams({
          q: inputValue,
          tags: tags.join(','),
          category: selectedCategory
        });
        const res = await fetch(`/api/search?${queryParams.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
          setAiSynthesis(data.aiSynthesis || null);
          setAutocompleteSuggestions(data.suggestions || []);
        }
      } catch (err) {
        console.error('Search failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, tags, selectedCategory]);

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
        }
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        setSpeechError('Ses anlaşılamadı veya mikrofon izni verilmedi.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (err) {
      setSpeechError('Mikrofon başlatılamadı.');
      setIsListening(false);
    }
  };

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
    } catch (err) {}
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        const newTag = inputValue.trim().toLowerCase();
        if (!tags.includes(newTag)) {
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

  const highlightText = (text: string) => {
    if (!inputValue && tags.length === 0) return text;
    const tokens = [...tags, inputValue.trim().toLowerCase()].filter(t => t.length > 2);
    if (tokens.length === 0) return text;

    const regex = new RegExp(`(${tokens.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      const isTag = tokens.some(tag => tag.toLowerCase() === part.toLowerCase());
      return isTag ? (
        <span key={i} className="bg-gradient-to-r from-mystic-500/50 to-accent-500/40 text-white px-1.5 py-0.5 rounded-md font-bold border-b-2 border-accent-400 shadow-sm animate-pulse">
          {part}
        </span>
      ) : part;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-[#080C14] border border-night-800 focus-within:border-night-600 rounded-3xl p-4 md:p-6 mb-6 shadow-xl relative z-30 transition-all duration-300">
        
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b border-night-800/80">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-night-200">
            <Search className="w-4 h-4 text-mystic-400 shrink-0" />
            <span>Gelişmiş Rüya Arama Motoru (Server-Side AI)</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-night-900 border border-night-800 px-2.5 py-1 rounded-lg text-night-400 text-xs font-mono">
              <Command className="w-3 h-3 text-night-500" />
              <span>+ K ile anında ara</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 no-scrollbar scroll-smooth border-b border-night-800/60">
          <span className="text-xs text-night-400 font-medium flex items-center gap-1 mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 text-mystic-400" /> Filtrele:
          </span>
          {CATEGORY_FILTERS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1 shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-night-700 text-white shadow-sm'
                  : 'bg-night-900 hover:bg-night-800 text-night-300 border border-night-800'
              }`}
            >
              {cat.label}
              {selectedCategory === cat.id && <Check className="w-3 h-3 ml-0.5 text-mystic-300" />}
            </button>
          ))}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 pt-1">
            {tags.map(tag => (
              <span key={tag} className="bg-night-800 text-mystic-100 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-sm font-medium border border-night-700 shadow-sm animate-in zoom-in duration-200">
                <Tag className="w-3.5 h-3.5 text-mystic-400" />
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
            placeholder={
              isListening 
                ? "🎙️ Rüyanızı dinliyorum, lütfen konuşun..." 
                : tags.length === 0 
                  ? "Rüyanızın tamamını yazın veya sesli anlatın (Örn: Vefat eden babamın elma vermesi)..." 
                  : "Kombinasyona yeni sembol ekleyin..."
            }
            className={`w-full bg-[#04060A] border border-night-700 text-white rounded-2xl py-4 pl-14 pr-24 focus:outline-none transition-all placeholder:text-night-400 text-base md:text-lg font-medium focus:border-mystic-500/50 ${
              isListening ? 'border-red-900/50 bg-red-950/5' : ''
            }`}
          />

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

            <button
              onClick={toggleListening}
              type="button"
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-red-900/50 text-red-200 border border-red-800'
                  : 'bg-night-900 hover:bg-night-800 text-mystic-300 border border-night-800'
              }`}
              title={isListening ? "Dinlemeyi Durdur" : "Sesli Rüya Anlat (Mikrofona Bas)"}
            >
              {isListening ? <MicOff className="w-5 h-5 text-red-400" /> : <Mic className="w-5 h-5" />}
            </button>
          </div>

          {isFocused && autocompleteSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-[#080B14] border-2 border-mystic-500/60 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2.5 bg-[#04060A] border-b border-mystic-500/30 text-[11px] font-bold tracking-wider text-accent-400 uppercase flex items-center justify-between">
                <span>⚡ Hızlı Sözlük Eşleşmeleri ({selectedCategory !== 'tumu' ? CATEGORY_FILTERS.find(c => c.id === selectedCategory)?.label : 'Tümü'})</span>
                <span>Enter ile kombinasyona ekle</span>
              </div>
              <ul className="divide-y divide-night-800/80">
                {autocompleteSuggestions.map((suggestion) => (
                  <li key={suggestion.slug}>
                    <button
                      onClick={() => router.push(`/sembol/${suggestion.slug}`)}
                      className="w-full text-left px-5 py-4 hover:bg-mystic-900/40 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-mystic-500 shrink-0" />
                        <span className="text-white font-medium group-hover:text-mystic-200 transition-colors text-base">
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

        {speechError && (
          <div className="mt-3 bg-red-950/80 border border-red-500/50 text-red-200 px-4 py-2 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span>{speechError}</span>
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-night-800/80">
          <div className="flex items-center gap-1.5 text-xs font-medium text-night-300 mb-2">
            <Search className="w-3.5 h-3.5 text-night-400" />
            <span>Popüler Aramalar:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUICK_COMBINATIONS.map((combo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => applyQuickCombination(combo.tags)}
                className="bg-night-900 hover:bg-night-800 text-night-200 hover:text-white border border-night-800 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors shadow-sm flex items-center gap-1"
              >
                {combo.label}
              </button>
            ))}
          </div>
        </div>
        
        {(tags.length === 0 && !inputValue) && (
          <div className="mt-4 text-xs md:text-sm text-night-400 flex items-center justify-center gap-2 font-light">
            <Book className="w-4 h-4 text-night-500 shrink-0" />
            <span>İpucu: Farklı sembolleri bir arada yazarak daha detaylı bir analize ulaşabilirsiniz.</span>
          </div>
        )}
      </div>

      <AdSlot type="yandex" yandexId="" className="mb-10" />

      {aiSynthesis && (
        <div className="mb-12 bg-night-900 border border-night-800 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden text-left">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-night-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-night-800 border border-night-700 flex items-center justify-center shrink-0">
                <Book className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-night-400 flex items-center gap-1.5">
                  Detaylı Rüya Analizi
                </span>
                <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
                  &quot;{aiSynthesis.title}&quot; Tefsiri
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="bg-night-950/80 border border-mystic-500/40 rounded-2xl px-3 py-1 shadow-inner">
                <TextToSpeech text={aiSynthesis.text} />
              </div>
              <span className="bg-night-800 text-mystic-200 border border-night-700 px-3.5 py-1.5 rounded-full text-xs font-medium shadow-sm">
                {aiSynthesis.count} Sembol Birleştirildi
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-4 text-night-100 text-sm md:text-base leading-relaxed">
            {aiSynthesis.text.split('\n\n').map((paragraph: string, idx: number) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg md:text-xl font-serif font-medium text-white mt-6 mb-2 flex items-center gap-2 border-l-2 border-mystic-500 pl-3 py-1">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('💡 ')) {
                return (
                  <div key={idx} className="bg-night-800 border border-night-700 rounded-2xl p-5 text-night-200 mt-6 flex items-start gap-3.5 shadow-md">
                    <span className="text-xl shrink-0 opacity-70">💡</span>
                    <div className="font-normal">{paragraph.replace('💡 ', '').replace('Yapay Zeka Asistan Tavsiyesi', 'Genel Yorum')}</div>
                  </div>
                );
              }
              return <p key={idx} className="whitespace-pre-line font-normal text-gray-200">{paragraph}</p>;
            })}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="text-center py-10">
          <Zap className="w-8 h-8 text-mystic-500 mx-auto animate-pulse" />
          <p className="text-night-400 mt-2 text-sm">Yapay Zeka rüyanızı analiz ediyor...</p>
        </div>
      )}

      {!isLoading && (tags.length > 0 || inputValue.length >= 2) && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
          <div className="flex items-center justify-between border-b border-night-700/80 pb-3">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white flex items-center gap-2">
              <span>🔍 Detaylı Sözlük Sonuçları</span>
              <span className="text-sm font-sans font-normal text-night-400">({results.length} eşleşme)</span>
            </h2>
          </div>
          
          {results.length === 0 ? (
            <div className="text-center py-16 bg-night-900/40 rounded-3xl border border-night-800/80 border-dashed px-4">
              <Zap className="w-12 h-12 text-night-500 mx-auto mb-4 animate-pulse" />
              <p className="text-night-200 text-lg font-medium mb-2">Bu kelimelere uygun doğrudan bir rüya başlığı bulamadık.</p>
              
              <div className="max-w-lg mx-auto bg-[#04060A] border-2 border-mystic-500/50 rounded-2xl p-6 text-left shadow-2xl mt-6">
                <div className="flex items-center gap-2 text-night-200 font-medium text-sm mb-2">
                  <Search className="w-4 h-4 text-mystic-400" />
                  <span>Aradığınız Rüyayı Bulamadınız mı?</span>
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
                    <button type="submit" className="bg-night-800 hover:bg-night-700 text-white font-medium py-2.5 px-4 rounded-xl text-sm transition-colors border border-night-700 shadow-sm">
                      Tabirini Hazırla & Ekle
                    </button>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {results.map((item) => (
                <div key={item.id} className="bg-night-900/60 border border-night-800 rounded-2xl p-6 md:p-8 hover:border-mystic-500/60 hover:bg-night-900/90 transition-all relative overflow-hidden group shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-medium text-night-400 mb-2 uppercase tracking-wider">
                    {item.type === 'symbol' ? '📌 Ana Sembol' : '🔄 Senaryo Varyasyonu'} • <span className="text-mystic-400 capitalize">{item.category}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 pr-24 group-hover:text-mystic-200 transition-colors">
                    {highlightText(item.title)}
                  </h3>
                  
                  <p className="text-night-300 leading-relaxed mb-6 line-clamp-4">
                    {highlightText(item.content)}
                  </p>
                  
                  <Link 
                    href={`/sembol/${item.slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-mystic-700 to-mystic-600 hover:from-mystic-600 hover:to-mystic-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md hover:shadow-mystic-500/25 hover:scale-[1.01]"
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
