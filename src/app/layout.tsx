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
        {/* Google AdSense Script - Replace with actual client ID later */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Yandex Reklam Script */}
        <Script id="yandex-rtb-init" strategy="lazyOnload">
          {`
            window.yaContextCb = window.yaContextCb || []
            window.yaContextCb.push(()=>{
              /* Init specific RTB blocks here or in components */
            })
          `}
        </Script>
        <Script src="https://yandex.ru/ads/system/context.js" async strategy="lazyOnload" />
        
        {/* Yandex Metrica */}
        <Script id="yandex-metrica" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym("XXXXXXXX", "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
          `}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-night-900 text-night-100 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="glass-header py-4 px-6 flex items-center justify-between">
            <a href="/" className="text-2xl font-serif font-bold text-mystic-300">
              Rüya<span className="text-mystic-500">Sözlüğü</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="/kategoriler" className="hover:text-mystic-400 transition-colors">Kategoriler</a>
              <a href="/a-z" className="hover:text-mystic-400 transition-colors">A-Z İndeks</a>
            </nav>
          </header>
          
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-night-900 border-t border-night-800 py-8 mt-12">
            <div className="container mx-auto px-4 text-center text-sm text-night-400">
              <p>&copy; {new Date().getFullYear()} Rüya Sözlüğü. Tüm hakları saklıdır. Rüya Sözlüğü bir turtle arge projesidir.</p>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs">
                <a href="/hakkimizda" className="hover:text-mystic-400 transition-colors">Hakkımızda</a>
                <span>•</span>
                <a href="/iletisim" className="hover:text-mystic-400 transition-colors">İletişim</a>
                <span>•</span>
                <a href="/gizlilik-politikasi" className="hover:text-mystic-400 transition-colors">Gizlilik</a>
                <span>•</span>
                <a href="/cerez-politikasi" className="hover:text-mystic-400 transition-colors">Çerezler</a>
                <span>•</span>
                <a href="/kullanim-kosullari" className="hover:text-mystic-400 transition-colors">Şartlar</a>
              </div>
              <p className="mt-3">Bu sitedeki tabirler bilgilendirme amaçlıdır.</p>
            </div>
          </footer>
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
