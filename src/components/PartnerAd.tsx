import Link from 'next/link';

interface PartnerAdProps {
  slug?: string;
  className?: string;
}

export default function PartnerAd({ slug = '', className = '' }: PartnerAdProps) {
  // Simple keyword matching for contextual ads
  const isBabyRelated = ['bebek', 'hamile', 'dogum', 'cocuk', 'kiz', 'erkek'].some(word => slug.includes(word));
  const isFinanceRelated = ['para', 'altin', 'zengin', 'borc', 'dolar', 'euro'].some(word => slug.includes(word));
  
  if (isBabyRelated) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-r from-mystic-900/60 to-night-900 border border-mystic-500/50 rounded-xl p-6 my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(112,60,211,0.15)] group ${className}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-mystic-500/10 rounded-full blur-3xl group-hover:bg-mystic-500/20 transition-all duration-500"></div>
        <div className="relative z-10">
          <h4 className="text-mystic-300 font-semibold mb-1 flex items-center gap-2">
            <span>👶</span> Anne Adayları İçin
          </h4>
          <p className="text-night-300 text-sm">
            Rüyanızın heyecanını yaşarken, tahmini doğum tarihinizi ve gebelik haftanızı hesaplamak ister misiniz?
          </p>
        </div>
        <a 
          href="https://turkiyehesaplama.com/gebelik-hesaplama" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 whitespace-nowrap bg-gradient-to-r from-mystic-600 to-mystic-500 hover:from-mystic-500 hover:to-mystic-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-mystic-900/50 transition-all transform hover:scale-105"
        >
          Gebelik Hesaplama &rarr;
        </a>
      </div>
    );
  }

  if (isFinanceRelated) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-r from-emerald-900/40 to-night-900 border border-emerald-500/50 rounded-xl p-6 my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_20px_rgba(16,185,129,0.15)] group ${className}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
        <div className="relative z-10">
          <h4 className="text-emerald-400 font-semibold mb-1 flex items-center gap-2">
            <span>💰</span> Finansal Planlama
          </h4>
          <p className="text-night-300 text-sm">
            Bolluk ve bereket rüyalarınızı gerçeğe dönüştürmek için kredi ve maaş hesaplamalarınızı hemen yapın.
          </p>
        </div>
        <a 
          href="https://turkiyehesaplama.com/kredi-hesaplama" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative z-10 whitespace-nowrap bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-105"
        >
          Kredi Hesaplama &rarr;
        </a>
      </div>
    );
  }

  // Default ad
  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-night-800 to-night-900 border border-night-600 hover:border-mystic-500/50 rounded-xl p-6 my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg group transition-all duration-300 ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-mystic-500/5 rounded-full blur-3xl group-hover:bg-mystic-500/15 transition-all duration-500"></div>
      <div className="relative z-10">
        <h4 className="text-mystic-400 font-semibold mb-1 flex items-center gap-2">
          <span>🧮</span> Günlük Hayatınızı Kolaylaştırın
        </h4>
        <p className="text-night-300 text-sm">
          Yaş hesaplama, tarih farkı, yüzde hesaplama ve çok daha fazlası için Türkiye&apos;nin en kapsamlı araçları.
        </p>
      </div>
      <a 
        href="https://turkiyehesaplama.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative z-10 whitespace-nowrap bg-night-700 hover:bg-mystic-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all transform hover:scale-105"
      >
        Tüm Araçları Keşfet &rarr;
      </a>
    </div>
  );
}
