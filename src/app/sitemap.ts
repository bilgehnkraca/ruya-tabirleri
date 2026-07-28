import { MetadataRoute } from 'next';
import { getAllSymbols, getAllCategories } from '@/lib/data';

const BASE_URL = 'https://www.ruyasozlugunuz.com';
const STATIC_DATE = new Date('2026-06-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const symbols = getAllSymbols();
  const categories = getAllCategories();

  const symbolUrls = symbols.map((symbol) => ({
    url: `${BASE_URL}/ruyada-${symbol.slug}-gormek`,
    lastModified: STATIC_DATE,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${BASE_URL}/kategoriler/${category}`,
    lastModified: STATIC_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: STATIC_DATE, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/diyanet-islami-ruya-tabirleri`, lastModified: STATIC_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/a-z`, lastModified: STATIC_DATE, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/iletisim`, lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/gizlilik-politikasi`, lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/cerez-politikasi`, lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/kullanim-kosullari`, lastModified: STATIC_DATE, changeFrequency: 'monthly', priority: 0.3 },
    ...categoryUrls,
    ...symbolUrls,
  ];
}
