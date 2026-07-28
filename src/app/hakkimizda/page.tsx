import { Metadata } from 'next';
import { Compass, BookOpen, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Rüya Tabirleri Sözlüğü hakkında bilgiler, misyonumuz ve rüya tabiri yaklaşımımız.',
  alternates: {
    canonical: 'https://www.ruyasozlugunuz.com/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda',
    description: 'Rüya Tabirleri Sözlüğü hakkında bilgiler, misyonumuz ve rüya tabiri yaklaşımımız.',
    url: 'https://www.ruyasozlugunuz.com/hakkimizda',
  },
};

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rüya Tabirleri Sözlüğü',
    alternateName: 'Rüya Sözlüğü',
    url: 'https://www.ruyasozlugunuz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ruyasozlugunuz.com/icon-512.png',
      width: 512,
      height: 512
    },
    description: "Türkiye'nin en kapsamlı rüya tabirleri sözlüğü. İbn-i Sirin, İmam Nablusi, Carl Jung ve Freud kaynaklarına dayanan 2000+ özgün rüya tabiri.",
    foundingDate: '2024',
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye'
    },
    knowsAbout: [
      'Rüya tabiri',
      'İslami rüya yorumu',
      'Diyanet rüya tabirleri',
      'İbn-i Sirin rüya tabiri',
      'İmam Nablusi rüya tabiri',
      'Carl Jung rüya analizi',
      'Sigmund Freud rüya yorumu',
      'Bilinçaltı sembolizm',
      'Arketipler ve kollektif bilinçdışı',
      'Rüya psikolojisi'
    ],
    sameAs: [
      'https://www.turkiyehesaplama.com'
    ]
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rüya Tabirleri Editör Ekibi',
    description: 'İbn-i Sirin, İmam Nablusi ve Carl Jung kaynaklarına dayanan rüya tabiri uzmanları. Türkiye\'nin en güvenilir ve derinlikli rüya analiz platformunun arkasındaki editoryal güç.',
    url: 'https://www.ruyasozlugunuz.com/hakkimizda',
    jobTitle: 'Baş Editör & Araştırmacı',
    worksFor: {
      '@type': 'Organization',
      name: 'Rüya Tabirleri Sözlüğü'
    }
  };

  return (
    <article className="max-w-4xl mx-auto pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <header className="mb-12 text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Hakkımızda</h1>
        <p className="text-xl text-night-300 max-w-2xl mx-auto mb-4">
          Bilinçaltınızın sembolik dilini çözmenize yardımcı olan rehberiniz.
        </p>
        <p className="text-md text-night-400 max-w-2xl mx-auto italic">
          Bu site, İslami rüya tabiri geleneği ve modern psikoloji literatürü temel alınarak hazırlanmıştır. İçerikler 2026 yılından itibaren düzenli olarak güncellenmektedir.
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

        <h2 className="text-2xl font-serif font-bold text-white mb-4">Editoryal Metodoloji ve Güvenilirlik (E-E-A-T)</h2>
        <p className="text-night-200 leading-relaxed mb-6">
          Google&apos;ın E-E-A-T (Deneyim, Uzmanlık, Yetkinlik ve Güvenilirlik) standartlarına sıkı sıkıya bağlıyız. Sitemizdeki tüm içerikler, <strong>Rüya Tabirleri Editör Ekibi</strong> tarafından kapsamlı araştırmalar sonucu özenle hazırlanır. Hiçbir yoruma &quot;kesin böyledir&quot; veya &quot;geleceği gösterir&quot; iddiasıyla yaklaşmıyoruz; çünkü rüyalar son derece kişiseldir ve ancak rüyayı gören kişinin mevcut yaşam bağlamı içinde gerçek anlamını bulur. 
        </p>

        <h3 className="text-xl font-bold text-mystic-200 mb-3">Sıfır Fluff (Kelime Doldurma Yasağı) Politikası</h3>
        <p className="text-night-200 leading-relaxed mb-6">
          Okuyucunun vaktini alan, sırf arama motorlarında uzun görünmek için yazılmış tekrarlayan kelimelere (fluff) platformumuzda yer yoktur. Eklenen her bir kelimenin, İslami tefsirlere (İbn-i Sirin, Nablusi vb.) veya analitik psikoloji analizlerine %100 doğrudan fayda sağlaması, net ve derin bilgi barındırması zorunludur. Tüm rüya tabirlerimiz bu yüksek standart kalite kontrolünden geçmektedir.
        </p>

        <p className="text-night-200 leading-relaxed mt-10 p-6 bg-night-800/40 rounded-xl border border-mystic-500/20 italic">
          Rüya Sözlüğü&apos;nü tercih ettiğiniz için teşekkür ederiz. İyi uykular ve kendi içinize doğru güzel bir yolculuk dileriz.
        </p>
      </div>
    </article>
  );
}
