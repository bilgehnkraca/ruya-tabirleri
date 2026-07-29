import { getAllSymbols } from '@/lib/data';

const BASE_URL = 'https://www.ruyasozlugunuz.com';
const SYMBOLS_PER_SITEMAP = 1000;

export async function GET() {
  const symbols = getAllSymbols();
  const numSitemaps = Math.ceil(symbols.length / SYMBOLS_PER_SITEMAP);
  
  // Use current date for the index, since sitemaps are generated on-demand
  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap/0.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
`;

  for (let i = 1; i <= numSitemaps; i++) {
    xml += `  <sitemap>
    <loc>${BASE_URL}/sitemap/${i}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>\n`;
  }

  xml += `</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
