import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieConsent from '@/components/CookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ruyasozlugunuz.com'),
  title: {
    template: "%s | Rüya Tabirleri Sözlüğü",
    default: "Rüya Tabirleri Sözlüğü - En Kapsamlı Rüya Yorumları",
  },
  description: "Türkiye'nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü. Dini, psikolojik ve genel rüya yorumları.",
  openGraph: {
    title: "Rüya Tabirleri Sözlüğü",
    description: "Türkiye'nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü. Dini, psikolojik ve genel rüya yorumları.",
    url: 'https://www.ruyasozlugunuz.com',
    siteName: 'Rüya Tabirleri Sözlüğü',
    images: [
      {
        url: 'https://www.ruyasozlugunuz.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rüya Tabirleri Sözlüğü',
    description: "Türkiye'nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü.",
    images: ['https://www.ruyasozlugunuz.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Funding Choices Snippet */}
        <Script
          id="google-fc-script"
          src="https://fundingchoicesmessages.google.com/i/pub-3922046877246889?ers=1"
          strategy="afterInteractive"
        />
        <Script id="google-fc-init" strategy="afterInteractive">
          {`(function() {function signalGooglefcPresent() {if (!window.googletag) {window.googletag = {cmd: []};} if (googletag.apiReady) {googletag.cmd.push(function() {googletag.pubads().setPrivacySettings({restrictDataProcessing: false});});} else {window.googletag.cmd.push(function() {googletag.pubads().setPrivacySettings({restrictDataProcessing: false});});}}window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.pubads().addEventListener('privacySettingsReady', function() {signalGooglefcPresent();});});})()`}
        </Script>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3922046877246889"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Yandex Reklam Script */}
        <Script id="yandex-rtb-init" strategy="afterInteractive">
          {`
            window.yaContextCb = window.yaContextCb || []
            window.yaContextCb.push(()=>{
              /* Init specific RTB blocks here or in components */
            })
          `}
        </Script>
        <Script src="https://yandex.ru/ads/system/context.js" async strategy="afterInteractive" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-night-900 text-night-100 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="glass-header py-4 px-4 md:px-6 flex items-center justify-between flex-wrap gap-4">
            <a href="/" className="text-2xl font-serif font-bold text-mystic-300">
              Rüya<span className="text-mystic-500">Sözlüğü</span>
            </a>
            <nav className="flex space-x-3 md:space-x-5 text-sm md:text-base items-center">
              <a 
                href="https://www.turkiyehesaplama.com" 
                target="_blank" 
                rel="noopener noreferrer dofollow" 
                className="hover:text-white text-mystic-200 font-extrabold transition-all duration-300 flex items-center gap-1.5 border-2 border-mystic-400/60 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-mystic-900 via-purple-900 to-night-900 shadow-[0_0_15px_rgba(112,60,211,0.4)] hover:shadow-[0_0_20px_rgba(112,60,211,0.7)] hover:scale-105"
              >
                <span className="animate-bounce">🔥</span> <span className="hidden sm:inline">Hesaplama</span> Araçları
              </a>
              <a href="/diyanet-islami-ruya-tabirleri" className="hover:text-gold-300 text-gold-400 font-bold transition-colors flex items-center gap-1">📖 İslami Tabirler</a>
              <a href="/kategoriler" className="hover:text-mystic-400 transition-colors">Kategoriler</a>
              <a href="/a-z" className="hover:text-mystic-400 transition-colors">A-Z İndeks</a>
            </nav>
          </header>
          
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gradient-to-b from-night-900 to-night-950 border-t-2 border-mystic-500/30 py-14 mt-16 shadow-2xl">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-night-300 mb-10">
                <div>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg border-b border-night-700 pb-2">Rüya Sözlüğü</h4>
                  <p className="mb-4 leading-relaxed">Türkiye&apos;nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü. Bilinçaltınızın size anlattıklarını ve ilahi işaretleri keşfedin.</p>
                  <p className="text-xs text-night-400">Bir turtle arge projesidir.</p>
                </div>

                <div>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg border-b border-night-700 pb-2">Hızlı Bağlantılar</h4>
                  <ul className="space-y-2.5">
                    <li><a href="/diyanet-islami-ruya-tabirleri" className="hover:text-gold-400 text-gold-500 font-bold transition-colors flex items-center gap-1.5"><span>📖</span> İslami & Diyanet Tabirleri</a></li>
                    <li><a href="/hakkimizda" className="hover:text-mystic-400 transition-colors">Hakkımızda</a></li>
                    <li><a href="/iletisim" className="hover:text-mystic-400 transition-colors">İletişim</a></li>
                    <li><a href="/gizlilik-politikasi" className="hover:text-mystic-400 transition-colors">Gizlilik Politikası</a></li>
                    <li><a href="/kvkk" className="hover:text-mystic-400 transition-colors">KVKK Aydınlatma Metni</a></li>
                  </ul>
                </div>

                <div className="lg:col-span-2 bg-night-800/40 border border-mystic-500/30 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4 border-b border-night-700/80 pb-2.5">
                    <h4 className="text-white font-serif font-bold text-lg flex items-center gap-2">
                      <span className="text-xl">🔥</span> Önerilen Hesaplama Sistemleri (Partner Çözümlerimiz)
                    </h4>
                    <span className="bg-mystic-500/20 text-mystic-300 text-xs font-bold px-2.5 py-1 rounded-full border border-mystic-500/40 hidden sm:inline">Ücretsiz & Güvenilir</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm">
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🧮</span> Türkiye Hesaplama Platformu
                    </a>
                    <a href="https://www.turkiyehesaplama.com/gebelik-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>👶</span> Gebelik & Doğum Tarihi
                    </a>
                    <a href="https://www.turkiyehesaplama.com/kredi-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>💰</span> Kredi, Maaş & Altın Hesaplama
                    </a>
                    <a href="https://www.turkiyehesaplama.com/yas-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🎂</span> Yaş & Gün Farkı Hesaplama
                    </a>
                    <a href="https://www.turkiyehesaplama.com/dini-gunler-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🕌</span> Dini Günler, Ramazan & Zekat
                    </a>
                    <a href="https://www.turkiyehesaplama.com/mesafe-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🚗</span> Mesafe, Seyahat & Yakıt
                    </a>
                    <a href="https://www.turkiyehesaplama.com/tarih-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>⏳</span> Tarih & Saat Hesaplama
                    </a>
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>📊</span> KDV, Yüzde & İndirim
                    </a>
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>⚖️</span> Vücut Kitle İndeksi (VKİ)
                    </a>
                    <a href="https://www.turkiyehesaplama.com/kredi-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🏡</span> Kira Artış Oranı & Konut
                    </a>
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🇹🇷</span> Şafak Sayar & Askerlik
                    </a>
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-200 font-semibold transition-colors flex items-center gap-2 truncate">
                      <span>🎓</span> Not Ortalaması & Sınav
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center pt-8 border-t border-night-800/80 text-night-400">
                <p>&copy; {new Date().getFullYear()} Rüya Sözlüğü. Tüm hakları saklıdır.</p>
                <p className="mt-2 text-xs text-night-500">Bu sitedeki tabirler bilgilendirme amaçlıdır. Çapraz hesaplama çözümleri Türkiye Hesaplama partnerliği ile sağlanmaktadır.</p>
              </div>
            </div>
          </footer>
        </div>
        <CookieConsent />
      </body>
      <GoogleAnalytics gaId="G-HJVZQRSTPE" />
    </html>
  );
}
