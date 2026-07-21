import { getAllSymbols } from '@/lib/data';
import DetayliAramaClient from './DetayliAramaClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detaylı Rüya Arama | Kombinasyonlu Tabir Motoru',
  description: 'Rüyanızdaki tüm detayları (renkler, olaylar, nesneler) etiket olarak ekleyin, size en uygun rüya tabirini saniyeler içinde bulalım.',
  alternates: { canonical: '/detayli-arama' }
};

export default function DetayliAramaPage() {
  const symbols = getAllSymbols();
  
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Detaylı Rüya Motoru</h1>
        <p className="text-xl text-night-300 leading-relaxed max-w-2xl mx-auto">
          Rüyanızdaki detayları kelime kelime yazın ve Enter&apos;a basın. Sizin için en uygun tabiri bulalım.
          <br/><span className="text-sm text-night-400 mt-2 block">(Örn: Siyah, Yılan, Isırmak)</span>
        </p>
      </header>
      
      <DetayliAramaClient symbols={symbols} />
    </div>
  );
}
