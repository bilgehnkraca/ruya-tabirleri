# SEO Guardrails

## 1. Metadata and Canonical
- **FAIL BUILD IF:** `metadataBase` is missing from `RootLayout`.
- **FAIL BUILD IF:** `generateMetadata` output in page templates (e.g., `sembol/[slug]/page.tsx`) does not return an absolute `canonical` URL.
- **FAIL BUILD IF:** Page titles are duplicated across important content pages.

## 2. Sitemap and Indexing
- **FAIL BUILD IF:** `sitemap.ts` returns 404 links or links with `noindex` directives.
- **FAIL BUILD IF:** `X-Robots-Tag` is inadvertently removed or altered to block AI bots like `GPTBot` or `Googlebot`.

## 3. Schema and Structured Data
- **FAIL BUILD IF:** The JSON-LD script for `FAQPage` or `Article` does not map the main entity URL as an Absolute URL.
- **FAIL BUILD IF:** `DefinedTerm` schema is missing on symbol pages.

## 4. Internal Linking
- **FAIL BUILD IF:** `RichTextWithLinks` generates broken links or cyclic links (linking a page to itself).
- **FAIL BUILD IF:** An important symbol page becomes an orphan (0 incoming internal links).

## 5. HTML Validity
- **FAIL BUILD IF:** Invalid rel attributes (such as `dofollow`) are added back to the repository.
