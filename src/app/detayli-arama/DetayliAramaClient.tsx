"use client";

import { useState, useMemo, KeyboardEvent } from 'react';
import { DreamSymbol } from '@/lib/types';
import Link from 'next/link';
import { Search, X, Sparkles, ChevronRight } from 'lucide-react';
import AdSlot from '@/components/AdSlot';

interface SearchableItem {
  id: string;
  type: 'symbol' | 'variation';
  title: string;
  content: string;
  slug: string;
  score: number;
}

export default function DetayliAramaClient({ symbols }: { symbols: DreamSymbol[] }) {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && inputValue.trim() !== '') {
      e.preventDefault();
      const newTag = inputValue.trim().toLowerCase();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
    } else if (e.key === 'Backspace' && inputValue === '' && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const results = useMemo(() => {
    if (tags.length === 0) return [];

    let allItems: SearchableItem[] = [];

    // Flatten symbols and variations into searchable items
    symbols.forEach(symbol => {
      // Add general symbol
      allItems.push({
        id: `sym-${symbol.slug}`,
        type: 'symbol',
        title: symbol.title,
        content: symbol.content.generalMeaning,
        slug: symbol.slug,
        score: 0
      });

      // Add variations
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

    // Score items based on tags
    const scoredItems = allItems.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();

      tags.forEach(tag => {
        // Higher score if tag is in title, lower if in content
        if (titleLower.includes(tag)) score += 3;
        else if (contentLower.includes(tag)) score += 1;
      });

      return { ...item, score };
    });

    // Filter and sort
    return scoredItems
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Show top 10 results
  }, [tags, symbols]);

  // Highlight function
  const highlightText = (text: string) => {
    if (tags.length === 0) return text;
    
    // Create a regex to match any of the tags
    const regex = new RegExp(`(${tags.join('|')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => {
      const isTag = tags.some(tag => tag.toLowerCase() === part.toLowerCase());
      return isTag ? (
        <span key={i} className="bg-mystic-500/40 text-mystic-100 px-1 rounded font-semibold">
          {part}
        </span>
      ) : part;
    });
  };

  return (
    <div>
      {/* Search Input Area */}
      <div className="bg-night-800/80 border border-night-700 rounded-2xl p-4 md:p-6 mb-10 shadow-lg shadow-night-900/50 backdrop-blur-md relative z-10">
        
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="bg-mystic-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-medium animate-in zoom-in duration-200">
              {tag}
              <button onClick={() => removeTag(tag)} className="hover:text-mystic-200 focus:outline-none">
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-night-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? "Bir kelime yazın ve boşluk tuşuna basın..." : "Başka bir detay ekleyin..."}
            className="w-full bg-night-900/50 border border-night-700 text-night-100 rounded-xl py-4 pl-14 pr-6 focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-all placeholder:text-night-500 text-lg"
          />
        </div>
        
        {tags.length === 0 && (
          <div className="mt-4 text-sm text-night-400 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-mystic-500" />
            İpucu: Siyah, yılan, ısırması, evde gibi kelimeleri tek tek yazıp enter&apos;a basarak kombinasyon oluşturun.
          </div>
        )}
      </div>

      <AdSlot type="yandex" yandexId="R-A-19625893-1" className="mb-10" />

      {/* Results Area */}
      {tags.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-serif font-bold text-white mb-6 border-b border-night-700 pb-2">
            Bulunan En İyi Eşleşmeler ({results.length})
          </h2>
          
          {results.length === 0 ? (
            <div className="text-center py-12 bg-night-800/30 rounded-2xl border border-night-700 border-dashed">
              <p className="text-night-300 text-lg mb-2">Bu kombinasyona uygun bir rüya detayı bulamadık.</p>
              <p className="text-night-500 text-sm">Farklı kelimeler veya eş anlamlılar denemeyi unutmayın.</p>
            </div>
          ) : (
            results.map((item, index) => (
              <div key={item.id} className="bg-night-800/50 border border-night-700 rounded-2xl p-6 md:p-8 hover:border-mystic-500/50 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-night-900/80 text-mystic-400 text-xs font-bold px-3 py-1 rounded-full border border-night-700">
                    Eşleşme Puanı: {item.score}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-mystic-100 mb-4 pr-32">
                  {highlightText(item.title)}
                </h3>
                
                <p className="text-night-200 leading-relaxed mb-6">
                  {highlightText(item.content)}
                </p>
                
                <Link 
                  href={`/ruyada-${item.slug}-gormek`}
                  className="inline-flex items-center gap-2 bg-mystic-600 hover:bg-mystic-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
                >
                  Tüm Rüya Tabirini Oku <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
