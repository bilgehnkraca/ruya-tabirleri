# Rüya Tabirleri Projesi - Geliştirme Anayasası (Constitution)

Bu dosya, Rüya Tabirleri projesinin bundan sonraki tüm geliştirme, kodlama ve tasarım aşamalarında yapay zeka asistanı tarafından uyulması ZORUNLU olan katı kuralları (best-practices) içerir. 

## 0. Veri Odaklı Karar Alma (22 Yıllık Google Trends Stratejisi)
Tüm geliştirmeler, "Rüya Tabirleri" anahtar kelimesinin 2004-2026 yılları arasındaki 22 yıllık arama motoru niyet (search intent) analizlerine dayanmak zorundadır:
* **Niyet Ayrışması (Sekmeler):** Kullanıcılar artık sadece "yılan" diye değil; "diyanet tabiri", "psikolojik anlamı" gibi uzun kuyruklu hedeflerle arama yapıyor. Bu sebeple tüm metinler mutlaka Dini, Psikolojik ve Genel olarak sekmelere bölünmüş olmalıdır.
* **Kombinasyonlu Arama İhtiyacı:** "Siyah yılan ısırması" gibi kompleks senaryolar için detaylı/etiketli rüya arama motoru her daim aktif ve fonksiyonel tutulmalıdır.
* **Mevsimsel Dalgalanmalar (Ramazan Zirvesi):** Dini günlerde ve Ramazan aylarında rüya tabiri aramaları %40-%60 oranında devasa zirveler (peak) yapar. Dinamik ana sayfa temaları (İslami mod) bu dönemlere duyarlı olmalıdır.
* **Tüketim Alışkanlığı (TTS):** Yatakta telefon kullanan kitlenin uzun rüyaları okumak yerine "dinlemeyi" tercih etmesi verisi doğrultusunda, Text-to-Speech (Sesli Okuma) özelliği tüm içeriklerde kusursuz çalışmalıdır.

## 1. Tasarım ve Kullanıcı Deneyimi (UI/UX)
* **Karanlık Tema ve Cam Tasarım (Dark Glassmorphism):** Site tasarımında her zaman Night (gece/koyu) ve Mystic (mor/gizemli) renk paleti kullanılacaktır. Tasarımlar sıradan değil; gradyanlar, bulanıklık efektleri (backdrop-blur) ve mikro-animasyonlarla zenginleştirilmiş "Premium" hissettiren bir yapıda olmalıdır.
* **İçerik Bölümlendirmesi:** Uzun rüya tabirleri asla tek bir blok halinde sunulmaz. Ziyaretçiyi sıkmamak için mutlaka mantıksal sekmelere (Örn: Genel Yorum, İslami Tabir, Psikolojik Analiz) bölünmelidir.
* **Erişilebilirlik:** Sesli okuma (Text-to-Speech) gibi özellikler dış kütüphanelere bağlı kalmadan tarayıcının yerel (native) API'leri kullanılarak temiz bir şekilde entegre edilir.

## 2. İçerik Kalitesi ve Derinliği (1000 Kelime Kuralı)
* **Minimum Kelime Sınırı:** Oluşturulan her bir rüya sembolü (Genel, Dini, Psikolojik yorumlar, varyasyonlar ve SSS bölümlerinin toplamı) **mutlaka en az 1000 kelimeden** oluşmak zorundadır. Arama motorlarında "kapsamlı (comprehensive) içerik" otoritesi kurabilmek için sığ ve kısa tabirlere asla yer verilemez.

## 3. İleri Seviye (Programatik) SEO
* **Wikipedia Tarzı Otomatik İç Linkleme:** Yeni bir metin eklenirken veya mevcut bir metin render edilirken, metin içerisindeki anahtar kelimeler mutlaka `RichTextWithLinks` bileşeni kullanılarak taranmalı ve sitedeki diğer rüya tabirlerine otomatik olarak çapraz link (cross-link) verilmelidir. Bu işlem SEO'nun kalbidir.
* **Dinamik ve Tıklama Odaklı (Click-Bait) Başlıklar:** H2 ve H3 başlıkları statik olamaz (Örn: "Dini Yorum" yerine "Rüyada {Sembol} Görmek - İslami ve Diyanet Tabiri"). Kullanıcının Google'da arattığı uzun kuyruklu (long-tail) kelimeler sayfa yapısına entegre edilmelidir.
* **Kusursuz Yapısal Veri (Schema.org):** Her sayfanın yapısına uygun (Article, BreadcrumbList, CollectionPage, FAQPage vb.) JSON-LD kodları kesinlikle sayfaya gömülmeli ve *domain daima orijinal URL (www.ruyasozlugunuz.com) olarak* Absolute Path formatında verilmelidir. 

## 4. Partner Site Çapraz Linkleme & Otorite (turkiyehesaplama.com)
* **Doğal Metin İçi Yerleşim:** Partner sitemiz olan `turkiyehesaplama.com` linkleri, kullanıcıyı rahatsız etmeden makalenin doğal bir parçası gibi (bağlamsal/contextual) aralara serpiştirilmelidir.
* **Göz Alıcı Reklam Alanları (PartnerAd):** Banner tasarımları dikkat çekici (animasyonlu, gradientli, hover efektli) olmalı ve içeriğin bittiği yere değil, okuma akışının tam kalbine (metin arasına) gömülmelidir.

## 5. Teknik Mimari ve Next.js App Router Kuralları
* **Static Generation (SSG):** Tüm rüya sembolleri ve kategori sayfaları SEO ve hız odaklı olduğu için derleme aşamasında oluşturulmalıdır (`generateStaticParams`).
* **Canonical URL ve Metadata:** Relative (göreceli) URL'lerden kaynaklanan kopya içerik hatalarını önlemek için Root Layout içinde mutlaka `metadataBase` tanımlanmış olmalı ve tüm sayfalar Canonical URL içermelidir.
* **TypeScript & Tailwind:** Tüm yeni bileşenler katı TypeScript kurallarıyla yazılmalı ve Tailwind CSS dışında (zorunlu kalmadıkça) stil dosyası kullanılmamalıdır.

> **ASİSTAN İÇİN NOT:** Bu projedeki herhangi bir istekte kod yazmaya başlamadan veya yeni bir özellik eklemeden önce bu anayasadaki SEO, Linkleme ve Tasarım kurallarına %100 uyumlu olunduğu teyit edilecektir.
