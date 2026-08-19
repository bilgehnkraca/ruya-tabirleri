import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sırdaş — Rüya, Namaz ve Kuran Uygulaması",
  description: "Namaz vakitleri, Kuran-ı Kerim, rüya tabiri, dua koleksiyonu ve manevi sohbet. Her şey tek uygulamada, tamamen ücretsiz.",
  alternates: { canonical: "https://www.ruyasozlugunuz.com/sirdas" },
  openGraph: {
    title: "Sırdaş — Rüya, Namaz ve Kuran",
    description: "Namaz vakitleri, Kuran-ı Kerim, rüya tabiri, dua koleksiyonu ve manevi sohbet.",
    url: "https://www.ruyasozlugunuz.com/sirdas",
    images: [{ url: "https://www.ruyasozlugunuz.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SirdasPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sırdaş: Rüya, Namaz ve Kuran",
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    description: "Namaz vakitleri, Kuran-ı Kerim, rüya tabiri, dua koleksiyonu ve manevi sohbet uygulaması.",
    url: "https://www.ruyasozlugunuz.com/sirdas",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Sırdaş ücretsiz mi?", acceptedAnswer: { "@type": "Answer", text: "Temel özellikler tamamen ücretsiz. Sınırsız manevi sohbet için isteğe bağlı abonelik var." } },
      { "@type": "Question", name: "Android'da çalışıyor mu?", acceptedAnswer: { "@type": "Answer", text: "Şu an yalnızca iOS için yayında. Android yakında geliyor." } },
      { "@type": "Question", name: "Sohbetlerim kaydediliyor mu?", acceptedAnswer: { "@type": "Answer", text: "Hayır. Uygulamayı kapattığınızda sohbetin tamamı silinir." } },
    ],
  };

  const APPLE_URL = "https://apps.apple.com/tr/app/sirdas-ruya-namaz-ve-kuran/id6801462760";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="relative text-center pt-20 pb-24 overflow-hidden">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-3xl" />
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[26px] mb-8 overflow-hidden shadow-2xl shadow-purple-900/50 border border-white/10">
            <Image 
              src="/sirdas-app-icon.png" 
              alt="Sırdaş App Icon" 
              width={96} 
              height={96} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Sırdaş</h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-xl mx-auto mb-3 font-light">Rüya, Namaz ve Kuran</p>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Namaz vakitlerinizi takip edin. Kuran dinleyin. Rüyalarınızı yorumlayın. Dua edin, zikir çekin. Hepsini tek yerden.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href={APPLE_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white text-black font-semibold px-7 py-3.5 rounded-xl hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.02] shadow-lg text-base">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store&apos;dan İndir
            </a>
          </div>
          <p className="text-neutral-600 text-sm">iOS 16+ · Ücretsiz · Android yakında</p>
        </section>

        {/* ÖZELLIK ŞERİDİ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20">
          {([
            { e: "🕌", l: "Namaz Vakitleri" },
            { e: "📖", l: "Kuran-ı Kerim" },
            { e: "🌙", l: "Rüya Tabiri" },
            { e: "🤲", l: "Dua & Zikir" },
          ] as const).map(item => (
            <div key={item.l} className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 text-center">
              <div className="text-3xl mb-2">{item.e}</div>
              <div className="text-sm text-neutral-300 font-medium">{item.l}</div>
            </div>
          ))}
        </div>

        {/* NAMAZ */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-3 block">Namaz Vakitleri</span>
            <h2 className="text-3xl font-bold text-white mb-4">Hiçbir vakti kaçırmayın</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              GPS bazlı konum tespiti ile günün her saati doğru namaz vakitleri. Sıradaki vakite kalan süreyi canlı sayaç ile takip edin.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {["GPS bazlı otomatik konum", "Ezan bildirimleri (Premium)", "Cami Modu — rahatsız etme", "Kıble Pusulası", "İmsakiye & Kandil takvimi"].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="text-emerald-400">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-900/30 to-night-800/50 border border-emerald-500/20 rounded-3xl p-8 text-center">
            <div className="text-6xl mb-4">🕌</div>
            <div className="text-emerald-400 text-sm font-semibold mb-2">Sıradaki Vakit: AKŞAM</div>
            <div className="text-white text-5xl font-bold tabular-nums mb-4">02:34:17</div>
            <div className="text-neutral-500 text-xs">İstanbul için</div>
          </div>
        </section>

        {/* KURAN */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gradient-to-br from-amber-900/30 to-night-800/50 border border-amber-500/20 rounded-3xl p-8">
            <div className="text-amber-400 text-2xl leading-loose text-right mb-4 font-semibold">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
            <div className="space-y-2">
              {["Mishary Rashid Alafasy", "AbdulBaset AbdulSamad", "Abdurrahmaan As-Sudais", "Maher Al Muaiqly"].map(r => (
                <div key={r} className="flex items-center gap-2 text-sm text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-amber-500/50 flex-shrink-0" />{r}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">Kuran-ı Kerim</span>
            <h2 className="text-3xl font-bold text-white mb-4">Dünyaca ünlü hafızların sesiyle</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              114 surenin tamamını 4 farklı hafızın sesinden dinleyin. Sure biter bitmez otomatik olarak bir sonrakine geçer. Okuduğunuz yeri kaydeder, kaldığınız yerden devam edersiniz.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {["114 sure — eksiksiz", "Arka planda çalma desteği", "Otomatik sure geçişi", "Yer imi — kaldığın yerden devam"].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="text-amber-400">✓</span>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* RÜYA */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-3 block">Rüya Tabiri</span>
            <h2 className="text-3xl font-bold text-white mb-4">Gördüğün rüyayı anlat</h2>
            <p className="text-neutral-400 leading-relaxed mb-6">
              İbn-i Sirin ve İmam Nablusi kaynaklarına dayalı İslami tabirler, Jung ve Freud perspektifinden psikolojik analizler.
            </p>
            <ul className="space-y-2 text-sm text-neutral-400">
              {["İslami tabir (İbn-i Sirin, Nablusi)", "Psikolojik analiz (Jung, Freud)", "İstihare rehberi ve duası", "2000+ sembollü rüya sözlüğü"].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="text-purple-400">✓</span>{x}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-night-800/50 border border-purple-500/20 rounded-3xl p-8">
            <div className="bg-white/5 rounded-2xl p-4 text-sm text-neutral-300 italic leading-relaxed mb-3">
              &ldquo;Rüyamda beyaz bir kuş gördüm ve uçup gitti...&rdquo;
            </div>
            <div className="bg-purple-900/30 border border-purple-500/20 rounded-2xl p-4 text-sm text-neutral-300 leading-relaxed">
              İbn-i Sirin&apos;e göre beyaz kuş; ruhun huzurunu, özgürlüğü ve yakın bir müjdeyi simgeler...
            </div>
          </div>
        </section>

        {/* SOHBET */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-gradient-to-br from-rose-900/20 to-night-800/50 border border-rose-500/20 rounded-3xl p-6 space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-sm">S</div>
              <div className="bg-white/5 rounded-2xl rounded-tl-sm p-3 text-sm text-neutral-300 leading-relaxed">İçim sıkılıyor, sebepsiz bir ağırlık var üzerimde...</div>
            </div>
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-sm">☽</div>
              <div className="bg-purple-900/30 border border-purple-500/10 rounded-2xl rounded-tr-sm p-3 text-sm text-neutral-300 leading-relaxed">O his bazen sebepsiz çöküyor... Kafana taktığın belirli bir şey mi var?</div>
            </div>
            <p className="text-center text-xs text-neutral-600 pt-1">Sırdaş yazıyor...</p>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase mb-3 block">Manevi Sohbet</span>
            <h2 className="text-3xl font-bold text-white mb-4">İçini dökebileceğin biri</h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Hocaya soramadıklarını, günahları, şüpheleri, kaygıları — yargılanmadan dinleyen, İslami perspektifle rehberlik eden bir sohbet.
            </p>
            <div className="flex items-start gap-2 text-sm text-neutral-500 bg-white/[0.02] border border-white/8 rounded-xl p-3">
              <span className="text-green-400 mt-0.5 flex-shrink-0">🔒</span>
              <span>Konuşmalar hiçbir sunucuda saklanmaz. Uygulama kapandığında her şey silinir.</span>
            </div>
          </div>
        </section>

        {/* ARAÇLAR */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3 block">Ve daha fazlası</span>
            <h2 className="text-3xl font-bold text-white">Manevi hayatın tüm ihtiyaçları</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { e: "🤲", t: "Dua Koleksiyonu", d: "Sabah-akşam, yemek, uyku duaları ve daha fazlası." },
              { e: "📿", t: "Zikirmatik", d: "Sayaçlı zikir takibi. Hedef belirle, takip et." },
              { e: "✨", t: "Esmaül Hüsna", d: "Allah'ın 99 ismi, anlamları ve fazileti." },
              { e: "📅", t: "Kandil Takvimi", d: "Mevlid, Regaib, Berat, Kadir geceleri ve bayramlar." },
              { e: "🌅", t: "İmsakiye", d: "Ramazan imsakiyesi, sahur ve iftar vakitleri." },
              { e: "🧭", t: "Kıble Pusulası", d: "Dünyanın her yerinde kıble yönünü bul." },
            ] as const).map(item => (
              <div key={item.t} className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors">
                <div className="text-2xl mb-3">{item.e}</div>
                <div className="text-white font-semibold mb-1 text-sm">{item.t}</div>
                <div className="text-neutral-500 text-xs leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SSS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3 max-w-2xl mx-auto">
            {([
              { q: "Uygulama ücretsiz mi?", a: "Namaz vakitleri, Kuran, dua koleksiyonu ve tüm temel özellikler tamamen ücretsiz. Sınırsız manevi sohbet için isteğe bağlı abonelik mevcuttur." },
              { q: "Android'da çalışıyor mu?", a: "Şu an yalnızca iOS için App Store'da yayında. Android sürümü geliştirme aşamasında." },
              { q: "Manevi sohbetim kaydediliyor mu?", a: "Hayır. Uygulamayı kapattığınızda sohbetin tamamı silinir. Hiçbir sunucuya gönderilmez." },
              { q: "İnternet bağlantısı şart mı?", a: "Namaz vakitleri için ilk yükleme sırasında internet gerekir. Manevi sohbet her zaman internet ister." },
            ] as const).map(item => (
              <div key={item.q} className="border border-white/8 rounded-2xl p-5">
                <div className="text-white font-medium mb-2 text-sm">{item.q}</div>
                <div className="text-neutral-500 text-sm leading-relaxed">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center pb-16">
          <div className="relative bg-gradient-to-br from-purple-900/40 via-night-800/60 to-amber-900/20 border border-white/10 rounded-3xl p-12 overflow-hidden">
            <div className="text-4xl mb-4">☽</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ücretsiz indirin.</h2>
            <p className="text-neutral-400 mb-8 max-w-sm mx-auto">
              Namaz vaktinden rüya tabirine, Kuran&apos;dan manevi sohbete — hepsi cebinizde.
            </p>
            <a href={APPLE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black font-semibold px-8 py-4 rounded-xl hover:bg-neutral-100 transition-all duration-200 hover:scale-[1.02] shadow-2xl text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store&apos;dan İndir — Ücretsiz
            </a>
          </div>
        </section>

        {/* YASAL BELGELER */}
        <section className="mb-12 border border-white/8 rounded-3xl p-8">
          <h2 className="text-lg font-bold text-white mb-1">Yasal Bilgiler</h2>
          <p className="text-neutral-500 text-sm mb-6">Sırdaş uygulamasını kullanmadan önce aşağıdaki belgeleri incelemenizi tavsiye ederiz.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {([
              {
                href: "/gizlilik-politikasi",
                title: "Gizlilik Politikası",
                desc: "Kişisel verilerinizin nasıl toplandığını ve korunduğunu açıklar.",
                badge: "Zorunlu",
              },
              {
                href: "/kvkk",
                title: "KVKK Aydınlatma Metni",
                desc: "6698 sayılı KVKK kapsamında veri işleme ve haklarınız.",
                badge: "KVKK",
              },
              {
                href: "/kullanim-kosullari",
                title: "Kullanım Koşulları",
                desc: "Uygulamayı kullanırken geçerli olan kural ve koşullar.",
                badge: null,
              },
              {
                href: "/cerez-politikasi",
                title: "Çerez Politikası",
                desc: "Web sitemizde kullanılan çerezler ve amaçları.",
                badge: null,
              },
            ] as const).map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-start gap-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/8 hover:border-white/15 rounded-2xl p-4 transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-semibold group-hover:text-neutral-200">{item.title}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">{item.badge}</span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-neutral-600 group-hover:text-neutral-400 transition-colors mt-0.5 flex-shrink-0">→</span>
              </Link>
            ))}
          </div>
          <p className="text-neutral-600 text-xs mt-6 text-center">
            Uygulamayı indirerek ve kullanarak{" "}
            <Link href="/kullanim-kosullari" className="underline hover:text-neutral-400">Kullanım Koşullarını</Link>
            {" "}ve{" "}
            <Link href="/gizlilik-politikasi" className="underline hover:text-neutral-400">Gizlilik Politikasını</Link>
            {" "}kabul etmiş sayılırsınız.
          </p>
        </section>

        {/* İLETİŞİM */}
        <section className="mb-12 border border-white/8 rounded-3xl p-8 text-center bg-white/[0.01]">
          <h2 className="text-xl font-bold text-white mb-3">Bize Ulaşın</h2>
          <p className="text-neutral-400 text-sm mb-6 max-w-md mx-auto leading-relaxed">
            Sırdaş uygulaması veya Rüya Sözlüğünüz ile ilgili her türlü soru, görüş, öneri ve teknik destek talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
          <a href="mailto:destek@ruyasozlugunuz.com" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors">
            <span className="text-lg">✉️</span> destek@ruyasozlugunuz.com
          </a>
        </section>

        {/* İÇ LİNKLER */}
        <div className="text-center pb-12">
          <p className="text-neutral-600 text-xs mb-3">Web üzerinden rüya tabirlerine ulaşın</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors border border-white/8 px-3 py-1.5 rounded-full">Rüya Sözlüğü</Link>
            <Link href="/diyanet-islami-ruya-tabirleri" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors border border-white/8 px-3 py-1.5 rounded-full">İslami Tabirler</Link>
            <Link href="/kategoriler" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors border border-white/8 px-3 py-1.5 rounded-full">Kategoriler</Link>
          </div>
        </div>

      </div>
    </>
  );
}
