import { Metadata } from 'next';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Bizimle iletişime geçin. Soru, öneri ve işbirlikleri için Rüya Tabirleri Sözlüğü iletişim sayfası.',
  alternates: {
    canonical: 'https://www.ruyasozlugunuz.com/iletisim',
  },
  openGraph: {
    title: 'İletişim',
    description: 'Bizimle iletişime geçin. Soru, öneri ve işbirlikleri için Rüya Tabirleri Sözlüğü iletişim sayfası.',
    url: 'https://www.ruyasozlugunuz.com/iletisim',
  },
};

export default function ContactPage() {
  return (
    <article className="max-w-4xl mx-auto pb-12">
      <header className="mb-12 text-center pt-8">
        <h1 className="text-4xl md:text-5xl tracking-tight font-bold text-white mb-6">İletişim</h1>
        <p className="text-xl text-night-300 max-w-2xl mx-auto">
          Görüş, öneri veya işbirliği talepleriniz için bize ulaşın.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl tracking-tight font-bold text-white mb-6">Bize Ulaşın</h2>
          <p className="text-night-200 leading-relaxed mb-8">
            Rüya Tabirleri Sözlüğü platformunu geliştirmek için geri bildirimleriniz bizim için çok değerlidir. Sitemizde görmek istediğiniz yeni rüya sembolleri, hata bildirimleri veya reklam/işbirliği fırsatları için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="tracking-tight text-lg font-semibold text-white mb-1">E-Posta</h3>
                <p className="text-night-300 text-sm mb-1">Tüm soru ve işbirlikleri için:</p>
                <a href="mailto:iletisim@ruyatabirleri.com" className="text-white hover:text-mystic-400 transition-colors">
                  iletisim@ruyatabirleri.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="tracking-tight text-lg font-semibold text-white mb-1">Sosyal Medya</h3>
                <p className="text-night-300 text-sm mb-1">Yakında sosyal medya hesaplarımız eklenecektir.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="tracking-tight text-lg font-semibold text-white mb-1">Konum</h3>
                <p className="text-night-300 text-sm mb-1">Türkiye</p>
                <p className="text-night-400 text-xs">(Dijital bir platform olduğumuz için fiziksel ofis ziyareti kabul edilmemektedir.)</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}
