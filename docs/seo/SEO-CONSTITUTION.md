# Rüya Tabirleri Projesi - Geliştirme Anayasası (Constitution)

## 0. Veri Odaklı Karar Alma
* Tüm geliştirmeler, "Rüya Tabirleri" anahtar kelimesinin niyet analizlerine dayanmak zorundadır.
* Metinler **Dini, Psikolojik ve Genel** olarak sekmelere bölünmelidir.
* **Text-to-Speech (Sesli Okuma)** özelliği aktif ve yerel (native API) olmalıdır.

## 1. Tasarım ve Kullanıcı Deneyimi (UI/UX)
* **Karanlık Tema ve Cam Tasarım (Dark Glassmorphism).**
* Uzun metinler mantıksal sekmelere bölünmelidir.

## 2. İçerik Kalitesi
* Her sembol sayfası için minimum **850 kelime** sınırı.
* **Sıfır Fluff** (Kelime Doldurma Yasağı).

## 3. İleri Seviye (Programatik) SEO
* **Wikipedia Tarzı Otomatik İç Linkleme:** `RichTextWithLinks` bileşeni kullanılmalı.
* **Dinamik H2/H3 Başlıklar:** (Örn: "Rüyada {Sembol} Görmek - İslami ve Diyanet Tabiri").
* **Kusursuz Yapısal Veri (Schema.org):** Domain daima `www.ruyasozlugunuz.com` olarak Absolute Path formatında verilmelidir.

## 4. Partner Site
* `turkiyehesaplama.com` linkleri bağlamsal (contextual) ve doğal olarak aralara serpiştirilmelidir.

## 5. Teknik Mimari
* Root Layout içinde `metadataBase` tanımlı olmalı ve tüm sayfalar Canonical URL içermelidir.
* Static Generation (SSG) zorunludur.

## 6. GEO / AEO Kuralları
* AI Overviews için optimize edilmiş, özgün (non-commodity) içerik.
* Zengin medya (optimize görseller) kullanımı.
* AI transparanlığı sağlanmalı.

## SEO RULES
* RULE: Every indexable public page must have exactly one canonical URL.
* RULE: Every sitemap URL must return HTTP 200.
* RULE: No sitemap URL may contain noindex.
* RULE: Every important page must be reachable through internal links.
* RULE: Every public content page must have a unique title.
* RULE: Structured data must match visible page content.
