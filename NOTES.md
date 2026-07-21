# Proje Notları - Faz 1

## Yapılanlar ve Kararlar
1. **Next.js & Tailwind Kurulumu:** Proje `ruya-tabirleri` dizini içinde, Next.js 14 App Router, TypeScript ve Tailwind CSS ile kuruldu. Tema olarak kullanıcının istediği gibi "gece/mistik" tonlar (mor, lacivert, altın sarısı) tercih edildi. Tailwind yapılandırmasına ek olarak `@tailwindcss/typography` ve `lucide-react` kütüphaneleri eklendi.
2. **İçerik Şeması ve Üretimi:** `src/lib/types.ts` ve `src/lib/data.ts` oluşturularak JSON tabanlı veri mimarisi kuruldu. `scripts/generate-symbols.mjs` isimli Node.js scripti ile 10 adet en çok aranan rüya sembolü (Yılan, Diş Dökülmesi, Su, Ölüm, Bebek/Hamilelik, Ev, Köpek, Altın/Para, Düşmek, Uçmak) üretildi. Her sembol istenilen içerik şablonuna (Giriş, Genel Yorum, Alt Yorumlar, Dini Yorum, Psikolojik Yorum, SSS) harfiyen uymaktadır ve en az 500-800 kelime aralığında zengin metin içermektedir.
3. **Sayfalar ve Yönlendirmeler:** 
   - **Anasayfa (`/`)**: Arama kutusu (canlı filtreleme ile), popüler semboller ve kategoriler.
   - **Sembol Detay Sayfası (`/ruyada-[slug]-gormek`)**: Zengin içerikli detay sayfası. İçerisinde SSS (FAQ) Schema ve Breadcrumb Schema dinamik olarak üretilmektedir.
   - **Kategori Sayfası (`/kategoriler/[category]`)**: Seçilen kategoriye ait sembolleri listeler.
   - **A-Z İndeks (`/a-z`)**: Tüm sembolleri alfabetik sırada hızlı erişim butonlarıyla listeler.
4. **SEO ve Altyapı:**
   - Dinamik `sitemap.xml` ve `robots.txt` oluşturuldu.
   - Her sembol için özgün `title` ve `description` meta etiketleri ayarlandı.
5. **Reklam & Consent Altyapısı (ÖNEMLİ):**
   - `public/ads.txt` dosyasına hem AdSense hem de Yandex Reklam satırları eklendi.
   - `src/app/layout.tsx` içerisine Google AdSense, Yandex RTB ve Yandex Metrica scriptleri eklendi.
   - KVKK/GDPR uyumlu, çerez onayını yöneten `CookieConsent.tsx` componenti oluşturulup layout'a eklendi.
   - *Not:* AdSense ve Yandex script ID'leri şu an "XXXXXX" olarak duruyor. Gerçek ID'ler entegre edildiğinde, Consent (Onay) verildikten sonra scriptleri ateşleyecek şekilde ufak bir mantık eklenebilir veya CMP (Consent Management Platform) scripti layout'a entegre edilebilir. CSP (Content Security Policy) ayarları için `.env` veya Next.js `headers()` konfigürasyonu, gerçek domainler belli olduğunda eklenecektir.

## CSP ve Domain Whitelist Notu
Gerçek bir CMP (örn: Cookiebot, Quantcast vb.) kullanıldığında `next.config.mjs` içerisinde eklenecek `Content-Security-Policy` header'ı için şu domainlerin `script-src` ve `connect-src`'ye eklenmesi gerekir:
- `https://pagead2.googlesyndication.com` (AdSense)
- `https://googleads.g.doubleclick.net` (AdSense)
- `https://mc.yandex.ru` (Metrica)
- `https://yandex.ru/ads/` (Yandex RTB)
- `[Kullanılacak-CMP-Domaini.com]`

## Sonraki Fazda (Faz 2) Yapılacaklar
- **Toplu İçerik Üretimi:** Kalan rüya sembollerinin aynı standartta üretilmesi.
- **Search (Arama) İyileştirmesi:** Şu anki arama kutusu client-side çalışıyor. Çok fazla sembol eklendiğinde, server-side search (örneğin algolia veya basit API route) entegrasyonu.
- **Reklam Slotlarının Optimizasyonu:** Tasarımda "Reklam Alanı" olarak ayırdığım placeholder'lara gerçek Yandex/AdSense reklam birimi kodlarının (örn: `<ins class="adsbygoogle" ...>`) yerleştirilmesi.
- **Performans:** Yandex ve AdSense scriptlerinin PageSpeed skorunu düşürmesini engellemek için `next/script`'in `strategy="lazyOnload"` kullanımının test edilmesi.
- **Vercel Deploy:** Projenin GitHub'a atılıp Vercel'a bağlanması ve canlı testlerinin yapılması.
