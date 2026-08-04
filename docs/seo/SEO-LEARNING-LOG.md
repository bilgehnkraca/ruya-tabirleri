# SEO Learning & Regression Log

## 2026-08-04
**CHANGE:** INITIAL DISCOVERY & AUTO-FIX
**DISCOVERED:** 
1. The project had `sitemap.xml` rewritten to `sitemap-index.xml` manually in `next.config.mjs`, which can conflict with Next.js 14 native `generateSitemaps`. 
2. Invalid HTML attribute `dofollow` was being used in several partner links.
**ROOT CAUSE:** Developer intent to explicitly mark links as dofollow and manually control sitemap chunking indexing.
**FIX:** Removed the rewrite from `next.config.mjs`. Replaced `dofollow` with standard omitted value (which is `dofollow` by default).
**LESSON:** Rely on native Next.js capabilities for sitemaps (`generateSitemaps` automatically handles the index) and strictly adhere to HTML5 validation rules for anchor tags.
**NEW RULE:** Never manually rewrite `sitemap.xml` when using Next.js 14 `generateSitemaps`. Never use `dofollow` in `rel` attributes.
