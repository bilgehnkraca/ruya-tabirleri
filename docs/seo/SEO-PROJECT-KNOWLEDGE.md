# SEO Project Knowledge Base

## PROJECT IDENTITY
**Project:** Rüya Tabirleri (Dream Interpretations Search Engine)
**Target Audience:** Turkish speakers searching for dream meanings.
**Search Intent Segmentation:** Religious (Diyanet/İslami), Psychological (Jung/Freud), and General.
**Main Goal:** Comprehensive, multi-faceted dream interpretation authority. E-A-T focused.

## TECHNICAL ARCHITECTURE
**Framework:** Next.js 14 App Router
**Rendering:** Static Site Generation (SSG) via JSON data files.
**Database:** Massive JSON chunks in `/content/symbols/` (e.g., `searchable-symbols.json`, `slug-index.json`).

## URL ARCHITECTURE
**Canonical Patterns:**
- Symbol pages are accessible via `/ruyada-[slug]-gormek` (rewritten to `/sembol/[slug]`).
- Categories: `/kategoriler/[category]`
- Dictionary: `/a-z`

## SEO ARCHITECTURE
**Strategy:**
- Programmatic SEO via JSON data mapping to Next.js dynamic routes.
- Cross-linking using Wikipedia-style `RichTextWithLinks`.
- Schema.org (JSON-LD) integration for Articles and FAQs.

## GEO & AEO ARCHITECTURE
- AI bot indexing allowed (`X-Robots-Tag`).
- Focus on structured direct answers, psychological analyses, and religious sources for AI overviews.

## PERFORMANCE ARCHITECTURE
- Tailwind CSS styling for minimal bundle size.
- Pre-built indices (`scripts/generate-slug-index.js`) to speed up Next.js SSG build times.
