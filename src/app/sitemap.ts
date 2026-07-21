import { MetadataRoute } from 'next';
import { getAllSymbols, getAllCategories } from '@/lib/data';

const BASE_URL = 'https://ruyatabirleri.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const symbols = getAllSymbols();
  const categories = getAllCategories();

  const symbolUrls = symbols.map((symbol) => ({
    url: `${BASE_URL}/ruyada-${symbol.slug}-gormek`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${BASE_URL}/kategoriler/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/a-z`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...categoryUrls,
    ...symbolUrls,
  ];
}
