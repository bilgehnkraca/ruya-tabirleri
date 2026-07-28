import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import CookieConsent from '@/components/CookieConsent';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Calculator, Baby, Coins, CalendarDays, Moon, Car, Clock, BookOpen, Link2 } from 'lucide-react';

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
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-noise text-night-100 antialiased`}>
        <div className="flex flex-col min-h-screen relative z-10">
          <header className="glass-header py-4 px-4 md:px-6 flex items-center justify-between flex-wrap gap-4">
            <Link href="/" className="text-2xl font-serif font-bold text-mystic-300">
              Rüya<span className="text-mystic-500">Sözlüğü</span>
            </Link>
            <nav className="flex space-x-3 md:space-x-5 text-sm md:text-base items-center">
              <a 
                href="https://www.turkiyehesaplama.com" 
                target="_blank" 
                rel="noopener noreferrer dofollow" 
                className="hover:text-white text-mystic-200 font-medium transition-all duration-500 flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full bg-night-800/40 backdrop-blur-md hover:bg-night-700/60 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4 text-mystic-400" /> <span className="hidden sm:inline">Hesaplama</span> Araçları
              </a>
              <Link href="/diyanet-islami-ruya-tabirleri" className="hover:text-gold-300 text-gold-400 font-medium transition-colors flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> İslami Tabirler</Link>
              <Link href="/kategoriler" className="hover:text-mystic-400 transition-colors">Kategoriler</Link>
              <Link href="/a-z" className="hover:text-mystic-400 transition-colors">A-Z İndeks</Link>
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
                    <li><Link href="/diyanet-islami-ruya-tabirleri" className="hover:text-gold-400 text-gold-500 font-medium transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> İslami & Diyanet Tabirleri</Link></li>
                    <li><Link href="/hakkimizda" className="hover:text-mystic-400 transition-colors">Hakkımızda</Link></li>
                    <li><Link href="/iletisim" className="hover:text-mystic-400 transition-colors">İletişim</Link></li>
                    <li><Link href="/gizlilik-politikasi" className="hover:text-mystic-400 transition-colors">Gizlilik Politikası</Link></li>
                    <li><Link href="/kvkk" className="hover:text-mystic-400 transition-colors">KVKK Aydınlatma Metni</Link></li>
                  </ul>
                </div>

                <div className="lg:col-span-2 bg-night-800/40 border border-mystic-500/30 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4 border-b border-night-700/80 pb-3">
                    <h4 className="text-white font-serif font-bold text-lg flex items-center gap-2">
                      <Link2 className="w-5 h-5 text-mystic-400" /> Önerilen Hesaplama Sistemleri
                    </h4>
                    <span className="bg-mystic-900/30 text-mystic-300 text-xs font-medium px-2.5 py-1 rounded-full border border-mystic-500/20 hidden sm:inline">Partner Çözümlerimiz</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm">
                    <a href="https://www.turkiyehesaplama.com" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Calculator className="w-4 h-4 text-night-500 shrink-0" /> Türkiye Hesaplama Platformu
                    </a>
                    <a href="https://www.turkiyehesaplama.com/gebelik-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Baby className="w-4 h-4 text-night-500 shrink-0" /> Gebelik & Doğum Tarihi
                    </a>
                    <a href="https://www.turkiyehesaplama.com/kredi-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Coins className="w-4 h-4 text-night-500 shrink-0" /> Kredi, Maaş & Altın Hesaplama
                    </a>
                    <a href="https://www.turkiyehesaplama.com/yas-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <CalendarDays className="w-4 h-4 text-night-500 shrink-0" /> Yaş & Gün Farkı Hesaplama
                    </a>
                    <a href="https://www.turkiyehesaplama.com/dini-gunler-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Moon className="w-4 h-4 text-night-500 shrink-0" /> Dini Günler, Ramazan & Zekat
                    </a>
                    <a href="https://www.turkiyehesaplama.com/mesafe-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Car className="w-4 h-4 text-night-500 shrink-0" /> Mesafe, Seyahat & Yakıt
                    </a>
                    <a href="https://www.turkiyehesaplama.com/tarih-hesaplama" target="_blank" rel="noopener noreferrer dofollow" className="hover:text-mystic-300 text-night-300 font-medium transition-colors flex items-center gap-2.5 truncate">
                      <Clock className="w-4 h-4 text-night-500 shrink-0" /> Tarih & Saat Hesaplama
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
