import { Metadata } from 'next';
import { Compass, BookOpen, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Rüya Tabirleri Sözlüğü hakkında bilgiler, misyonumuz ve rüya tabiri yaklaşımımız.',
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto pb-12">
      <header className="mb-12 text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Hakkımızda</h1>
        <p className="text-xl text-night-300 max-w-2xl mx-auto">
          Bilinçaltınızın sembolik dilini çözmenize yardımcı olan rehberiniz.
        </p>
      </header>

      <div className="prose prose-invert prose-night max-w-none">
        <div className="bg-night-800/30 rounded-2xl p-8 border border-night-700/50 mb-10">
          <h2 className="text-2xl font-serif font-bold text-mystic-100 mt-0 mb-4 flex items-center gap-3">
            <Compass className="text-mystic-500 w-6 h-6" />
            Misyonumuz
          </h2>
          <p className="text-night-200 leading-relaxed text-lg mb-0">
            Rüya Tabirleri Sözlüğü olarak temel misyonumuz; insanların rüyalarında gördükleri sembolleri en doğru, en kapsamlı ve çok boyutlu şekilde yorumlamalarına yardımcı olmaktır. Rüyalar, sadece zihnimizin geceleri oynadığı oyunlar değil; korkularımızın, umutlarımızın ve bilinçaltı süreçlerimizin bir yansımasıdır. Biz, bu yansımayı anlamlandırmak için buradayız.
          </p>
        </div>

        <h2 className="text-3xl font-serif font-bold text-white mb-6">Yaklaşımımız</h2>
        <p className="text-night-200 leading-relaxed mb-8">
          İnternet dünyasında dolaşan birbirinin kopyası, yüzeysel ve kaynağı belirsiz rüya tabirlerinin aksine, platformumuz çok katmanlı bir yaklaşım benimser. Her bir rüya sembolünü incelerken iki temel sütuna dayanırız:
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-night-800/20 p-6 rounded-xl border-t-4 border-mystic-500">
            <h3 className="text-xl font-bold text-mystic-100 mb-3 mt-0 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Klasik ve İslami Gelenek
            </h3>
            <p className="text-night-300 text-sm leading-relaxed mb-0">
              Yüzyıllardır aktarılan kültürel ve dini rüya tabiri mirası (İbn Şirin geleneği vb.), sembollerin toplumumuzdaki tarihsel ve inançsal karşılıklarını verir. Bu kadim bilgeliği süzgeçten geçirerek, günümüz insanının anlayacağı bir dille sunarız.
            </p>
          </div>
          <div className="bg-night-800/20 p-6 rounded-xl border-t-4 border-accent-500">
            <h3 className="text-xl font-bold text-accent-100 mb-3 mt-0 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Modern Psikoloji
            </h3>
            <p className="text-night-300 text-sm leading-relaxed mb-0">
              Freud, Jung ve çağdaş psikoloji ekollerinin rüyalara ve bilinçaltına yaklaşımını temel alarak; sembollerin kişinin ruh hali, travmaları veya günlük yaşamındaki stres faktörleriyle olan bağlantısını bilimsel bir çerçevede inceleriz.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-white mb-4">İçerik Kalitesi ve Güvenilirlik</h2>
        <p className="text-night-200 leading-relaxed mb-6">
          Sitemizdeki tüm içerikler, kapsamlı araştırmalar sonucu özenle hazırlanır. Hiçbir yoruma &quot;kesin böyledir&quot; veya &quot;geleceği gösterir&quot; iddiasıyla yaklaşmıyoruz; çünkü rüyalar son derece kişiseldir ve ancak rüyayı gören kişinin mevcut yaşam bağlamı içinde gerçek anlamını bulur. Bizim sunduğumuz içerikler, rüyanızı kendi içsel yolculuğunuzda yorumlayabilmeniz için bir anahtar niteliği taşır.
        </p>
        <p className="text-night-200 leading-relaxed">
          Rüya Sözlüğü&apos;nü tercih ettiğiniz için teşekkür ederiz. İyi uykular ve güzel rüyalar dileriz.
        </p>
      </div>
    </article>
  );
}
