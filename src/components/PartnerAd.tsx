import React from 'react';

interface PartnerAdProps {
  slug?: string;
  className?: string;
}

interface AdConfig {
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  url: string;
  buttonText: string;
  gradient: string;
  border: string;
  shadow: string;
  buttonGradient: string;
  icon: string;
}

export default function PartnerAd({ slug = '', className = '' }: PartnerAdProps) {
  const lowerSlug = slug.toLowerCase();

  // Helper to match keywords
  const match = (words: string[]) => words.some(word => lowerSlug.includes(word));

  let config: AdConfig;

  if (match(['bebek', 'hamile', 'dogum', 'cocuk', 'kiz', 'erkek', 'gelin', 'dugun', 'evlilik', 'nisan', 'anne'])) {
    config = {
      badge: 'Anne ve Aile Adayları İçin Önerilen Çözüm',
      badgeColor: 'text-pink-300 bg-pink-950/80 border-pink-500/40',
      title: 'Gebelik, Doğum Tarihi ve Evlilik Hesaplama',
      description: 'Rüyanızdaki yeni başlangıçların heyecanını yaşarken; tahmini doğum tarihinizi, gebelik haftanızı ve evlilik zamanlamanızı saniyeler içinde hesaplayın.',
      url: 'https://www.turkiyehesaplama.com/gebelik-hesaplama',
      buttonText: 'Gebelik ve Doğum Hesapla →',
      gradient: 'from-pink-950/70 via-night-900 to-purple-950/70',
      border: 'border-pink-500/60 hover:border-pink-400',
      shadow: 'shadow-[0_0_25px_rgba(236,72,153,0.25)]',
      buttonGradient: 'from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500',
      icon: '🤰'
    };
  } else if (match(['altin', 'para', 'maas', 'borc', 'cuzdan', 'zengin', 'bank', 'ticaret', 'dolar', 'euro', 'kredi', 'yatirim'])) {
    config = {
      badge: 'Finansal Strateji ve Yatırım Rehberi',
      badgeColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40',
      title: 'Kredi, Maaş, Altın ve Yatırım Hesaplama Sistemleri',
      description: 'Bolluk, bereket ve kazanç rüyalarınızı somut adımlara dönüştürün. Kredi taksitlerinizi, net-brüt maaşınızı ve altın yatırımlarınızı en güncel oranlarla planlayın.',
      url: 'https://www.turkiyehesaplama.com/kredi-hesaplama',
      buttonText: 'Kredi ve Yatırım Hesapla →',
      gradient: 'from-emerald-950/70 via-night-900 to-teal-950/70',
      border: 'border-emerald-500/60 hover:border-emerald-400',
      shadow: 'shadow-[0_0_25px_rgba(16,185,129,0.25)]',
      buttonGradient: 'from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500',
      icon: '💎'
    };
  } else if (match(['vefat', 'olmus', 'baba', 'dede', 'babaanne', 'miras', 'akraba', 'yasli', 'mezuniyet', 'komsu', 'ogretmen'])) {
    config = {
      badge: 'Yaşam Döngüsü ve Zaman Rehberi',
      badgeColor: 'text-amber-300 bg-amber-950/80 border-amber-500/40',
      title: 'Yaş, Zaman ve Nesil Farkı Hesaplama Araçları',
      description: 'Geçmişle geleceği birbirine bağlayan rüyalarınızda zamanın kıymetini idrak edin. Tam yaşınızı, gün farklarını ve önemli tarihleri kolayca hesaplayın.',
      url: 'https://www.turkiyehesaplama.com/yas-hesaplama',
      buttonText: 'Yaş ve Zaman Hesapla →',
      gradient: 'from-amber-950/70 via-night-900 to-orange-950/70',
      border: 'border-amber-500/60 hover:border-amber-400',
      shadow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
      buttonGradient: 'from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500',
      icon: '🎂'
    };
  } else if (match(['kabe', 'namaz', 'kuran', 'ramazan', 'oruc', 'zekat', 'cami', 'dua', 'hac', 'ezan', 'secde', 'ihram', 'kadir', 'iftar'])) {
    config = {
      badge: 'İslami Günler ve İbadet Takvimi',
      badgeColor: 'text-gold-300 bg-amber-950/80 border-gold-500/40',
      title: 'Dini Günler, Ramazan, Fitre ve Zekat Hesaplama',
      description: 'Manevi atmosferi yüksek rüyalarınızın ardından ibadetlerinizi, zekat miktarınızı ve mübarek dini günleri eksiksiz bir şekilde planlayın.',
      url: 'https://www.turkiyehesaplama.com/dini-gunler-hesaplama',
      buttonText: 'Dini Günler ve Zekat Hesapla →',
      gradient: 'from-amber-950/80 via-night-900 to-yellow-950/70',
      border: 'border-gold-500/60 hover:border-gold-400',
      shadow: 'shadow-[0_0_25px_rgba(212,175,55,0.25)]',
      buttonGradient: 'from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500',
      icon: '📿'
    };
  } else if (match(['araba', 'yol', 'otobus', 'ucak', 'gemi', 'tren', 'yolculuk', 'bilet', 'mesafe', 'kopru', 'tunel'])) {
    config = {
      badge: 'Seyahat ve Rota Planlama Araçları',
      badgeColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40',
      title: 'Mesafe, Seyahat ve Yakıt Tüketimi Hesaplama',
      description: 'Hayat yolculuğunuza veya yeni bir şehre doğru atılacak adımlarda mesafeleri, yakıt masraflarını ve seyahat rotalarınızı önceden hesaplayın.',
      url: 'https://www.turkiyehesaplama.com/mesafe-hesaplama',
      buttonText: 'Mesafe ve Yakıt Hesapla →',
      gradient: 'from-cyan-950/70 via-night-900 to-blue-950/70',
      border: 'border-cyan-500/60 hover:border-cyan-400',
      shadow: 'shadow-[0_0_25px_rgba(6,182,212,0.25)]',
      buttonGradient: 'from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500',
      icon: '🧭'
    };
  } else if (match(['saat', 'zaman', 'gece', 'gunduz', 'gun', 'takvim', 'randevu', 'yildiz', 'gunes', 'ayna', 'telefon'])) {
    config = {
      badge: 'Zaman Yönetimi ve Takvim Rehberi',
      badgeColor: 'text-indigo-300 bg-indigo-950/80 border-indigo-500/40',
      title: 'Tarih, Gün Farkı, Saat ve Zaman Hesaplama',
      description: 'Zamanın akışına dair rüyalarınızdan ilham alarak iki tarih arasındaki gün farkını, iş günlerini ve zaman çizelgenizi kolayca yönetin.',
      url: 'https://www.turkiyehesaplama.com/tarih-hesaplama',
      buttonText: 'Tarih ve Zaman Hesapla →',
      gradient: 'from-indigo-950/70 via-night-900 to-blue-950/70',
      border: 'border-indigo-500/60 hover:border-indigo-400',
      shadow: 'shadow-[0_0_25px_rgba(99,102,241,0.25)]',
      buttonGradient: 'from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500',
      icon: '⏳'
    };
  } else if (match(['alisveris', 'pazar', 'magaza', 'hediye', 'indirim', 'fatura', 'fiyat', 'kdv', 'yuzde'])) {
    config = {
      badge: 'Akıllı Alışveriş ve Bütçe Danışmanı',
      badgeColor: 'text-rose-300 bg-rose-950/80 border-rose-500/40',
      title: 'KDV, Yüzde, İndirim ve Kar-Zarar Hesaplama',
      description: 'Alışveriş, pazar ve kazanç rüyalarınızın ardından ticari bütçenizi, indirim oranlarını, KDV dahil/hariç fiyatları pratikçe hesaplayın.',
      url: 'https://www.turkiyehesaplama.com',
      buttonText: 'Yüzde ve İndirim Hesapla →',
      gradient: 'from-rose-950/70 via-night-900 to-red-950/70',
      border: 'border-rose-500/60 hover:border-rose-400',
      shadow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)]',
      buttonGradient: 'from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500',
      icon: '🛒'
    };
  } else if (match(['hastalik', 'doktor', 'hastane', 'kilo', 'yemek', 'tatli', 'su', 'icmek', 'meyve', 'sebze', 'sifa'])) {
    config = {
      badge: 'Sağlıklı Yaşam ve Vücut Analizi',
      badgeColor: 'text-teal-300 bg-teal-950/80 border-teal-500/40',
      title: 'Vücut Kitle İndeksi (VKİ), Kalori ve Kilo Hesaplama',
      description: 'Şifa, yemek ve beden sağlığına dair rüyalarınızın gösterdiği yenilenme enerjisiyle ideal kilonuzu ve vücut kitle indeksinizi anında öğrenin.',
      url: 'https://www.turkiyehesaplama.com',
      buttonText: 'VKİ ve Sağlık Hesapla →',
      gradient: 'from-teal-950/70 via-night-900 to-emerald-950/70',
      border: 'border-teal-500/60 hover:border-teal-400',
      shadow: 'shadow-[0_0_25px_rgba(20,184,166,0.25)]',
      buttonGradient: 'from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500',
      icon: '🍎'
    };
  } else if (match(['asker', 'selam', 'nobet', 'safak', 'tezker', 'gurbet'])) {
    config = {
      badge: 'Şafak Sayar ve Askerlik Rehberi',
      badgeColor: 'text-red-300 bg-red-950/80 border-red-500/40',
      title: 'Şafak Sayar ve Askerlik Süresi Hesaplama',
      description: 'Askerlik, gurbet ve hasret temalı rüyalarınızda sevdiklerinize kavuşacağınız tezkere gününü ve şafak sayınızı tam takvimle hesaplayın.',
      url: 'https://www.turkiyehesaplama.com',
      buttonText: 'Şafak ve Süre Hesapla →',
      gradient: 'from-red-950/70 via-night-900 to-orange-950/70',
      border: 'border-red-500/60 hover:border-red-400',
      shadow: 'shadow-[0_0_25px_rgba(239,68,68,0.25)]',
      buttonGradient: 'from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500',
      icon: '⭐'
    };
  } else if (match(['ev', 'apartman', 'cati', 'kapi', 'pencere', 'oda', 'duvar', 'mobilya', 'kiraci'])) {
    config = {
      badge: 'Konut ve Gayrimenkul Hesaplamaları',
      badgeColor: 'text-blue-300 bg-blue-950/80 border-blue-500/40',
      title: 'Kira Artış Oranı ve Konut Kredisi Hesaplama',
      description: 'Huzurlu ev ve mekan rüyalarınızdan hareketle konut yatırımlarınızı, aylık kira artış oranlarınızı ve tapu masraflarınızı kolayca planlayın.',
      url: 'https://www.turkiyehesaplama.com/kredi-hesaplama',
      buttonText: 'Konut ve Kira Hesapla →',
      gradient: 'from-blue-950/70 via-night-900 to-indigo-950/70',
      border: 'border-blue-500/60 hover:border-blue-400',
      shadow: 'shadow-[0_0_25px_rgba(59,130,246,0.25)]',
      buttonGradient: 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500',
      icon: '🏡'
    };
  } else {
    // Default High-Impact Banner for All Other Symbols
    config = {
      badge: 'Önerilen Partner Çözüm Platformu',
      badgeColor: 'text-mystic-300 bg-mystic-950/80 border-mystic-500/40',
      title: "Türkiye'nin En Kapsamlı Ücretsiz Hesaplama Platformu",
      description: "Rüya yorumunuzu incelerken günlük hayatınızı kolaylaştıracak yaş, gebelik, kredi, tarih, zekat ve yüzlerce hesaplama aracını ücretsiz keşfedin.",
      url: 'https://www.turkiyehesaplama.com',
      buttonText: 'Tüm Hesaplama Araçlarını Keşfet →',
      gradient: 'from-mystic-950/80 via-night-900 to-purple-950/80',
      border: 'border-mystic-500/60 hover:border-mystic-400',
      shadow: 'shadow-[0_0_25px_rgba(112,60,211,0.25)]',
      buttonGradient: 'from-mystic-600 to-purple-600 hover:from-mystic-500 hover:to-purple-500',
      icon: '🧮'
    };
  }

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${config.gradient} border-2 ${config.border} rounded-2xl p-6 md:p-7 my-8 shadow-2xl ${config.shadow} transition-all duration-300 group ${className}`}>
      {/* Background ambient glow effect */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-mystic-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border tracking-wide uppercase shadow-sm">
            <span>{config.icon}</span>
            <span>{config.badge}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-mystic-200 transition-colors">
            {config.title}
          </h3>
          <p className="text-night-200 text-sm md:text-base leading-relaxed max-w-2xl">
            {config.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={config.url}
            target="_blank"
            rel="noopener noreferrer dofollow"
            className={`relative z-10 inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r ${config.buttonGradient} px-6 py-3.5 rounded-xl text-base font-extrabold shadow-lg transition-all duration-300 transform group-hover:scale-105 hover:shadow-xl text-center`}
          >
            <span>{config.buttonText}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
