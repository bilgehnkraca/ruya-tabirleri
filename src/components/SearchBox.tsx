'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Loader2 } from 'lucide-react';

type SearchResult = {
  slug: string;
  title: string;
  shortDescription: string;
};

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        setHasSearched(false);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data.results || []);
          setHasSearched(true);
        }
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full max-w-2xl mx-auto z-40">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-night-800/80 border border-night-700 text-night-100 rounded-full py-3 md:py-4 pl-12 pr-12 focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-all placeholder:text-night-400 text-base"
          placeholder="Rüyanızda ne gördünüz? (Örn: yılan, ev, para...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-night-400 w-5 h-5" />
        {isLoading && (
          <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 text-mystic-500 w-5 h-5 animate-spin" />
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-night-800 border border-night-700 rounded-xl shadow-2xl overflow-hidden">
          <ul>
            {results.map(symbol => (
              <li key={symbol.slug}>
                <Link 
                  href={`/ruyada-${symbol.slug}-gormek`}
                  className="block px-6 py-3 hover:bg-night-700 transition-colors border-b border-night-700/50 last:border-0"
                >
                  <div className="font-semibold text-mystic-100">{symbol.title}</div>
                  <div className="text-sm text-night-400 truncate">{symbol.shortDescription}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {hasSearched && query.length > 0 && results.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-night-800 border border-night-700 rounded-xl p-6 text-center shadow-2xl text-night-300">
          Sonuç bulunamadı. Lütfen farklı bir kelime deneyin.
        </div>
      )}
    </div>
  );
}
