# Project Discovery

**Project Name:** Rüya Tabirleri
**Domain:** ruyasozlugunuz.com
**Framework:** Next.js (14.2.5) App Router
**Language:** TypeScript
**Package Manager:** npm (based on package-lock.json)
**Rendering Model:** SSG/ISR (`generateStaticParams` supported via `outputFileTracingIncludes`)
**CMS / Database:** Local JSON files (`content/symbols/`) with large batched data.
**Styling:** Tailwind CSS (`@tailwindcss/typography`, `tailwindcss-animate`)
**Analytics / Ads:** Yandex Metrica, Google AdSense (CSP headers in next.config.mjs)
**Routing Architecture:**
- `/` (Home)
- `/sembol/[slug]` (Symbol detail)
- `/kategoriler/[category]`
- `/a-z`
- `/diyanet-islami-ruya-tabirleri`
- `/hakkimizda`, `/iletisim`, `/kullanim-kosullari`, `/gizlilik-politikasi`, `/cerez-politikasi`, `/kvkk`
**SEO Features Detected:**
- Next.js rewrites mapping `/ruyada-[slug]-gormek` to `/sembol/[slug]`.
- Custom `/sitemap-index.xml` via rewrite.
- Special `llms.txt` and `llms-full.txt` cache handling for AI crawlers (GEO readiness).
- Custom `X-Robots-Tag` headers exposing max-snippet and index rules.
