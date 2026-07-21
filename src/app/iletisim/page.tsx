import { Metadata } from 'next';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Bizimle iletişime geçin. Soru, öneri ve işbirlikleri için Rüya Tabirleri Sözlüğü iletişim sayfası.',
};

export default function ContactPage() {
  return (
    <article className="max-w-4xl mx-auto pb-12">
      <header className="mb-12 text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">İletişim</h1>
        <p className="text-xl text-night-300 max-w-2xl mx-auto">
          Görüş, öneri veya işbirliği talepleriniz için bize ulaşın.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Bize Ulaşın</h2>
          <p className="text-night-200 leading-relaxed mb-8">
            Rüya Tabirleri Sözlüğü platformunu geliştirmek için geri bildirimleriniz bizim için çok değerlidir. Sitemizde görmek istediğiniz yeni rüya sembolleri, hata bildirimleri veya reklam/işbirliği fırsatları için aşağıdaki kanallardan bizimle iletişime geçebilirsiniz.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-night-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mystic-100 mb-1">E-Posta</h3>
                <p className="text-night-300 text-sm mb-1">Tüm soru ve işbirlikleri için:</p>
                <a href="mailto:iletisim@ruyatabirleri.com" className="text-white hover:text-mystic-400 transition-colors">
                  iletisim@ruyatabirleri.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-night-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mystic-100 mb-1">Sosyal Medya</h3>
                <p className="text-night-300 text-sm mb-1">Yakında sosyal medya hesaplarımız eklenecektir.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-night-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-mystic-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mystic-100 mb-1">Konum</h3>
                <p className="text-night-300 text-sm mb-1">Türkiye</p>
                <p className="text-night-400 text-xs">(Dijital bir platform olduğumuz için fiziksel ofis ziyareti kabul edilmemektedir.)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-night-800/50 p-8 rounded-2xl border border-night-700/50">
          <h3 className="text-xl font-bold text-white mb-6">İletişim Formu</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-night-300 mb-1">Adınız Soyadınız</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-night-900 border border-night-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-colors"
                placeholder="Örn: Ahmet Yılmaz"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-night-300 mb-1">E-Posta Adresiniz</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-night-900 border border-night-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-night-300 mb-1">Mesajınız</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-night-900 border border-night-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mystic-500 focus:ring-1 focus:ring-mystic-500 transition-colors resize-none"
                placeholder="Mesajınızı buraya yazın..."
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full bg-mystic-600 hover:bg-mystic-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Mesajı Gönder
            </button>
            <p className="text-xs text-night-400 text-center mt-4">
              Bu form şimdilik gösterim amaçlıdır. Lütfen bize e-posta adresi üzerinden ulaşın.
            </p>
          </form>
        </div>
      </div>
    </article>
  );
}
