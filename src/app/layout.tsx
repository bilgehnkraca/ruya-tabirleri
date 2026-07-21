import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieConsent from '@/components/CookieConsent';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
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
            <nav className="flex space-x-4 md:space-x-6 text-sm md:text-base items-center">
              <a href="https://turkiyehesaplama.com" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-200 text-mystic-400 font-medium transition-colors flex items-center gap-1.5 border border-mystic-500/30 px-3 py-1.5 rounded-full bg-mystic-900/30">
                <span className="hidden sm:inline">🧮</span> Hesaplama
              </a>
              <a href="/kategoriler" className="hover:text-mystic-400 transition-colors">Kategoriler</a>
              <a href="/a-z" className="hover:text-mystic-400 transition-colors">A-Z İndeks</a>
            </nav>
          </header>
          
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-night-900 border-t border-night-800 py-12 mt-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-night-400 mb-8">
                <div>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg">Rüya Sözlüğü</h4>
                  <p className="mb-4">Türkiye&apos;nin en kapsamlı, özgün ve güvenilir rüya tabirleri sözlüğü. Bilinçaltınızın size anlattıklarını keşfedin.</p>
                  <p>Bir turtle arge projesidir.</p>
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg">Hızlı Bağlantılar</h4>
                  <ul className="space-y-2">
                    <li><a href="/hakkimizda" className="hover:text-mystic-400 transition-colors">Hakkımızda</a></li>
                    <li><a href="/iletisim" className="hover:text-mystic-400 transition-colors">İletişim</a></li>
                    <li><a href="/gizlilik-politikasi" className="hover:text-mystic-400 transition-colors">Gizlilik Politikası</a></li>
                    <li><a href="/kvkk" className="hover:text-mystic-400 transition-colors">KVKK Aydınlatma Metni</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-serif font-bold mb-4 text-lg">Partner Ağımız</h4>
                  <ul className="space-y-2">
                    <li><a href="https://turkiyehesaplama.com" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-400 transition-colors flex items-center gap-2"><span>🧮</span> Türkiye Hesaplama</a></li>
                    <li><a href="https://turkiyehesaplama.com/gebelik-hesaplama" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-400 transition-colors flex items-center gap-2"><span>👶</span> Gebelik Hesaplama</a></li>
                    <li><a href="https://turkiyehesaplama.com/kredi-hesaplama" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-400 transition-colors flex items-center gap-2"><span>💰</span> Kredi Hesaplama</a></li>
                    <li><a href="https://turkiyehesaplama.com/yas-hesaplama" target="_blank" rel="noopener noreferrer" className="hover:text-mystic-400 transition-colors flex items-center gap-2"><span>🎂</span> Yaş Hesaplama</a></li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-8 border-t border-night-800">
                <p>&copy; {new Date().getFullYear()} Rüya Sözlüğü. Tüm hakları saklıdır.</p>
                <p className="mt-2 text-xs text-night-500">Bu sitedeki tabirler bilgilendirme amaçlıdır.</p>
              </div>
            </div>
          </footer>
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
