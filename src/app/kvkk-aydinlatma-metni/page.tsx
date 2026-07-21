import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Rüya Sözlüğü Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni.',
};

export default function KVKKPage() {
  return (
    <article className="max-w-4xl mx-auto pb-12">
      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-night-200">KVKK Aydınlatma Metni</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-serif font-bold text-white mb-6">KVKK Aydınlatma Metni</h1>
        <p className="text-night-300">Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
      </header>

      <div className="prose prose-invert prose-night max-w-none">
        <section className="mb-8">
          <p>
            Rüya Sözlüğü (bundan böyle &quot;Site&quot; veya &quot;Biz&quot; olarak anılacaktır) olarak, kişisel verilerinizin 
            güvenliğine ve gizliliğine büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu 
            (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin toplanması, işlenmesi ve 
            aktarılması süreçleri hakkında sizleri bilgilendirmek isteriz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-mystic-400 mb-4">1. İşlenen Kişisel Veriler ve Toplanma Yöntemleri</h2>
          <p>
            Sitemizi ziyaret ettiğinizde aşağıdaki kişisel verileriniz otomatik veya kısmen otomatik yöntemlerle toplanabilir:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><strong>İşlem Güvenliği Verileri:</strong> IP adresiniz, tarayıcı bilgileriniz, cihaz bilgileriniz, işletim sisteminiz ve Site içi gezinme verileriniz (Google Analytics ve Yandex Metrica aracılığıyla).</li>
            <li><strong>Çerezler (Cookies):</strong> Çerez Politikamızda detaylandırıldığı üzere, deneyiminizi kişiselleştirmek ve reklam/analitik hizmetleri sunmak amacıyla çerez verileri (Yandex Advertising Network ve Google AdSense dahil).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-mystic-400 mb-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>
            Toplanan kişisel verileriniz aşağıdaki amaçlar doğrultusunda KVKK&apos;nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak işlenmektedir:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Sitenin sorunsuz çalışmasını sağlamak ve bilgi güvenliği süreçlerini yürütmek,</li>
            <li>Kullanıcı deneyimini analiz ederek içerik ve hizmetlerimizi geliştirmek,</li>
            <li>İlgi alanlarınıza uygun reklamlar gösterebilmek (Yandex RTB ve AdSense ağı aracılığıyla),</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek ve olası hukuki uyuşmazlıklarda delil olarak kullanmak.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-mystic-400 mb-4">3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz; sunucu ve altyapı hizmeti aldığımız yurt içi veya yurt dışı firmalara (Vercel vb.), 
            analitik ve reklam hizmeti sağlayıcılarımıza (Google LLC, Yandex LLC) ve kanunen yetkili kamu kurum 
            ve kuruluşlarına, KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-mystic-400 mb-4">4. İlgili Kişinin (Veri Sahibinin) Hakları</h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
            <li>KVKK 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
            <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-mystic-400 mb-4">5. İletişim</h2>
          <p>
            Yukarıda belirtilen haklarınızı kullanmak veya KVKK süreçlerimizle ilgili sorularınızı iletmek için, 
            sitemizdeki iletişim sayfası üzerinden bizimle irtibata geçebilirsiniz.
          </p>
        </section>
      </div>
    </article>
  );
}
