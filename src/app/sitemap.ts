import { MetadataRoute } from 'next';
import { getAllSymbols, getAllCategories } from '@/lib/data';

const BASE_URL = 'https://www.ruyasozlugunuz.com';
const SYMBOLS_PER_SITEMAP = 1000;

export async function generateSitemaps() {
  const symbols = getAllSymbols();
  const numSitemaps = Math.ceil(symbols.length / SYMBOLS_PER_SITEMAP);
  
  // id 0 will be for static pages and categories.
  // id 1 to numSitemaps will be for the symbols.
  const sitemaps = [{ id: 0 }];
  for (let i = 0; i < numSitemaps; i++) {
    sitemaps.push({ id: i + 1 });
  }
  return sitemaps;
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date();
  const symbols = getAllSymbols();

  // For id 0: Return static routes and categories
  if (id === 0) {
    const categories = getAllCategories();
    const categoryUrls = categories.map((category) => ({
      url: `${BASE_URL}/kategoriler/${category}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
    
    return [
      { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
      { url: `${BASE_URL}/diyanet-islami-ruya-tabirleri`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${BASE_URL}/a-z`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${BASE_URL}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
      { url: `${BASE_URL}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
      { url: `${BASE_URL}/gizlilik-politikasi`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
      { url: `${BASE_URL}/cerez-politikasi`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
      { url: `${BASE_URL}/kullanim-kosullari`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
      ...categoryUrls,
    ];
  }

  // For id >= 1: Return symbol chunks
  const chunkIndex = id - 1;
  const start = chunkIndex * SYMBOLS_PER_SITEMAP;
  const end = start + SYMBOLS_PER_SITEMAP;
  const chunkedSymbols = symbols.slice(start, end);

  return chunkedSymbols.map((symbol) => ({
    // Bug fixed: Was /ruyada-[slug]-gormek, now /sembol/[slug]
    url: `${BASE_URL}/sembol/${symbol.slug}`,
    lastModified: symbol.dateModified ? new Date(symbol.dateModified) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}
