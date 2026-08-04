# SEO Fix Roadmap

## CRITICAL
- **Sitemap Index Rewrite (next.config.mjs):** Next.js 14 native `generateSitemaps` automatically handles sitemap index creation at `/sitemap.xml`. The manual rewrite to `/sitemap-index.xml` might conflict with native routing.

## HIGH
- **Empty Description Fallback:** In `SymbolPage`, `generateMetadata` uses a fallback description if `shortDescription` is too short. Ensure all symbols in the JSON database have robust `shortDescription` fields to avoid duplicate fallback texts across pages.
- **Rel Attribute (SymbolContentTabs):** The attribute `rel="noopener noreferrer dofollow"` is used. `dofollow` is not a valid HTML attribute value; it should just be omitted to be "dofollow" natively.

## MEDIUM
- **Static Generation Limit:** `generateStaticParams` is limited to 50 symbols due to Vercel build timeouts. This means thousands of pages rely on ISR (On-Demand). Ensure caching and CDN layer (e.g., Vercel Edge Cache) are perfectly configured so bots don't hit cold starts excessively.

## LOW / INFO
- **RichTextWithLinks Keyword Extraction:** Keyword extraction regex works well, but could be slow for 4000+ symbols. Caching is correctly implemented at the module level.
