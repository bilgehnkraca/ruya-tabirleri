export const metadata = {
  title: 'Çerez Politikası',
  description: 'Rüya Sözlüğü çerez (cookie) kullanım politikası ve aydınlatma metni.',
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-mystic-300 mb-8">Çerez (Cookie) Politikası</h1>
      
      <div className="prose prose-invert prose-mystic max-w-none space-y-6 text-night-200">
        <p>Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Çerez Nedir?</h2>
          <p>
            Çerezler (cookies), web sitemizi ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza (akıllı telefon veya tablet gibi) 
            kaydedilen küçük metin dosyalarıdır. Çerezler genellikle web sitesinin adını, çerezin cihazınızdaki kullanım ömrünü ve 
            rastgele oluşturulmuş benzersiz bir sayı değerini içerir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Çerezleri Ne İçin Kullanıyoruz?</h2>
          <p>
            Çerezleri web sitemizin daha kolay kullanılmasını sağlamak, sitemizi ve hizmetlerimizi ilgi alanlarınıza ve ihtiyaçlarınıza 
            göre ayarlamak için kullanıyoruz. Çerezler sitemiz üzerindeki gelecekteki hareketlerinizi hızlandırmak amacıyla da kullanılabilir. 
            Ayrıca, ziyaretçilerin sitemizi nasıl kullandığını anlamak, sitemizin tasarımını ve kullanışlılığını geliştirmek amacıyla 
            toplu istatistikler derlemek için de çerezleri (Google Analytics, Yandex Metrica vb.) kullanıyoruz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Hangi Tür Çerezleri Kullanıyoruz?</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün çalışması için kesinlikle gerekli olan çerezlerdir.</li>
            <li><strong>Performans Çerezleri:</strong> Ziyaretçilerin web sitesini nasıl kullandığına dair bilgi toplayan çerezlerdir (hangi sayfaların daha sık ziyaret edildiği vb.). Bu çerezler kişisel kimlik bilgilerini toplamaz.</li>
            <li><strong>Hedefleme/Reklam Çerezleri:</strong> İlgi alanlarınıza uygun reklamlar sunmak ve bir reklamı görme sayınızı sınırlandırmak amacıyla kullanılır (Örn: Google AdSense, Yandex RTB çerezleri).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>
            Çerezleri dilediğiniz gibi kontrol edebilir veya silebilirsiniz. Bilgisayarınızda halihazırda bulunan çerezleri silebilir 
            ve çoğu İnternet tarayıcısında çerezlerin kaydedilmesini/yerleştirilmesini engelleyebilirsiniz. Ancak çerezleri silerseniz 
            veya engellerseniz, web sitemizdeki bazı özellikler amaçlandığı gibi çalışmayabilir.
          </p>
        </section>
      </div>
    </div>
  );
}
