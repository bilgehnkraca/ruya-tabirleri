export const metadata = {
  title: 'Gizlilik Politikası',
  description: 'Rüya Sözlüğü gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-mystic-300 mb-8">Gizlilik Politikası</h1>
      
      <div className="prose prose-invert prose-mystic max-w-none space-y-6 text-night-200">
        <p>Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">1. Giriş</h2>
          <p>
            Rüya Sözlüğü (ruyasozlugunuz.com) olarak ziyaretçilerimizin gizliliğine büyük önem veriyoruz. 
            Bu Gizlilik Politikası belgesi, sitemiz tarafından hangi tür kişisel bilgilerin alındığını, 
            toplandığını ve nasıl kullanıldığını ana hatlarıyla belirtmektedir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">2. Log Dosyaları</h2>
          <p>
            Birçok standart web sunucusunda olduğu gibi, Rüya Sözlüğü de log (günlük) dosyalarını kullanır. 
            Bu dosyalardaki bilgiler; internet protokolü (IP) adresleri, tarayıcı türü, İnternet Servis Sağlayıcısı (ISS), 
            tarih/saat damgası, yönlendirme/çıkış sayfaları ve muhtemel tıklama sayısını içerir. Bu bilgiler eğilimleri 
            analiz etmek, siteyi yönetmek, kullanıcının sitedeki hareketlerini izlemek ve demografik bilgi toplamak amacıyla kullanılır. 
            IP adresleri ve diğer benzer bilgiler, kişisel olarak tanımlanabilir herhangi bir bilgiyle bağlantılı değildir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">3. Çerezler (Cookies) ve Web İşaretçileri</h2>
          <p>
            Rüya Sözlüğü, ziyaretçilerin tercihleri, kullanıcının hangi sayfalara eriştiği veya ziyaret ettiği, 
            ziyaretçinin tarayıcı türüne veya ziyaretçinin tarayıcısı üzerinden gönderdiği diğer bilgilere dayanarak web 
            sayfası içeriğini özelleştirmek için çerezleri kullanır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">4. Reklam Ortakları ve Üçüncü Taraf Çerezleri</h2>
          <p>
            Sitemizde reklam yayınlamak için Google AdSense ve Yandex Reklam Ağı (Yandex Advertising Network) gibi üçüncü taraf reklam şirketlerini kullanmaktayız. 
            Bu şirketler, bu siteye ve diğer web sitelerine yaptığınız ziyaretler hakkındaki bilgileri (adınız, adresiniz, e-posta adresiniz veya telefon numaranız hariç), 
            ilginizi çekecek ürün ve hizmetlerin reklamlarını göstermek için kullanabilir.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Üçüncü taraf satıcı olarak Google ve Yandex, sitemizde reklam yayınlamak için çerezleri kullanır.</li>
            <li>Reklam ortaklarımız, kendi gizlilik politikaları çerçevesinde çerezler ve web işaretçileri (web beacons) kullanabilir.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">5. Analitik Araçları</h2>
          <p>
            Sitemizin trafiğini analiz etmek ve kullanıcı deneyimini iyileştirmek amacıyla Google Analytics ve Yandex Metrica gibi analitik araçları kullanıyoruz. 
            Bu araçlar anonim kullanım verileri toplar. Bu verilerin toplanması ve işlenmesi, ilgili servis sağlayıcıların gizlilik politikalarına tabidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">6. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili daha fazla bilgiye ihtiyaç duyarsanız veya sorularınız varsa, lütfen İletişim sayfası üzerinden bizimle iletişime geçmekten çekinmeyin.
          </p>
        </section>
      </div>
    </div>
  );
}
