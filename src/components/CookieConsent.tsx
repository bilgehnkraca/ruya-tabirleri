'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-night-900 border-t border-night-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-full">
      <div className="text-sm text-night-200 max-w-4xl">
        <strong className="text-white block mb-1">Gizlilik ve Çerez Politikası</strong>
        Sitemizde size en iyi deneyimi sunabilmek, trafiğimizi analiz etmek ve reklamları kişiselleştirmek için çerezler (cookies) kullanıyoruz. Daha fazla bilgi için <Link href="/gizlilik-politikasi" className="text-mystic-400 hover:underline">Gizlilik Politikamızı</Link> ve <Link href="/kvkk" className="text-mystic-400 hover:underline">KVKK Aydınlatma Metnimizi</Link> inceleyebilirsiniz.
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <button 
          onClick={reject}
          className="flex-1 md:flex-none px-4 py-2 rounded-lg border border-night-600 text-night-200 hover:bg-night-800 transition-colors whitespace-nowrap text-sm font-medium"
        >
          Reddet
        </button>
        <button 
          onClick={accept}
          className="flex-1 md:flex-none px-6 py-2 rounded-lg bg-mystic-600 hover:bg-mystic-500 text-white transition-colors whitespace-nowrap text-sm font-medium shadow-[0_0_15px_rgba(112,60,211,0.4)]"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}
