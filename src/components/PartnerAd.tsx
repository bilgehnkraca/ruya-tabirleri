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
      <div className={`bg-mystic-900/40 border border-mystic-500/30 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
        <div>
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
          className="whitespace-nowrap bg-mystic-600 hover:bg-mystic-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Gebelik Hesaplama
        </a>
      </div>
    );
  }

  if (isFinanceRelated) {
    return (
      <div className={`bg-emerald-900/30 border border-emerald-500/30 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
        <div>
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
          className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Kredi Hesaplama
        </a>
      </div>
    );
  }

  // Default ad
  return (
    <div className={`bg-night-800/60 border border-night-700 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-mystic-500/30 transition-colors ${className}`}>
      <div>
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
        className="whitespace-nowrap bg-night-700 hover:bg-mystic-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
      >
        Tüm Araçları Keşfet
      </a>
    </div>
  );
}
