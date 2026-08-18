export const metadata = {
  title: 'Gizlilik Politikası | Rüya Sözlüğü & Sırdaş Uygulaması',
  description: 'Rüya Sözlüğü ve Sırdaş mobil uygulaması gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgilendirme.',
};

const LAST_UPDATED = '11 Ağustos 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-300 mb-2">Gizlilik Politikası</h1>
      <p className="text-mystic-400 mb-8">Son güncellenme tarihi: {LAST_UPDATED}</p>

      <div className="prose prose-invert prose-mystic max-w-none space-y-6 text-night-200">

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">1. Giriş</h2>
          <p>
            Rüya Sözlüğü (ruyasozlugunuz.com) ve <strong>Sırdaş: Rüya, Namaz ve Kuran</strong> mobil uygulaması
            olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası; hem web sitemizi hem
            de iOS ve Android platformlarındaki Sırdaş uygulamasını kapsamaktadır.
          </p>
          <p>
            Uygulamayı veya sitemizi kullanarak bu politikada belirtilen koşulları kabul etmiş sayılırsınız.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">2. Toplanan Veriler</h2>
          <h3 className="text-lg font-semibold text-neutral-300 mt-4 mb-2">2.1 Sırdaş Mobil Uygulaması</h3>
          <p>Uygulamamız aşağıdaki verilere erişim ister veya kullanır:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Konum Verisi (Yalnızca Kullanım Anında):</strong> Bulunduğunuz şehre göre doğru namaz
              vakitlerini ve kıble yönünü hesaplamak için anlık konum bilginize ihtiyaç duyulmaktadır. Bu veri
              sunucularımızda saklanmaz; yalnızca cihazınızda anlık olarak hesaplama amacıyla kullanılır.
            </li>
            <li>
              <strong>Bildirim İzni:</strong> Namaz vakitleri ve günlük ayet/hadis bildirimlerini gönderebilmek için
              bildirim iznine ihtiyaç duyulmaktadır. Bildirimler cihazınız üzerinde yerel olarak zamanlanır; herhangi
              bir sunucuya kişisel veri gönderilmez.
            </li>
            <li>
              <strong>Yerel Depolama (AsyncStorage):</strong> Kullanıcı tercihleri (bildirim saati, PRO durumu,
              kıble ayarları, zikir sayacı, kaza takibi, Kuran yer imi vb.) yalnızca <strong>kendi cihazınızda</strong>{' '}
              saklanır ve hiçbir sunucuya aktarılmaz.
            </li>
            <li>
              <strong>Yapay Zeka (Sırdaş AI):</strong> Sırdaş AI özelliğini kullandığınızda girdiğiniz metin Google
              Generative AI (Gemini) API&apos;sine iletilmektedir. Bu veriler Google&apos;ın Gizlilik Politikası
              kapsamında işlenir. Tarafımızca saklanmaz.
            </li>
            <li>
              <strong>Satın Alma ve Abonelik (RevenueCat):</strong> PRO abonelik işlemleri, RevenueCat aracılığıyla
              Apple App Store ve Google Play Store tarafından güvenli biçimde işlenir. Ödeme bilgilerinize tarafımızca
              erişilmez.
            </li>
            <li>
              <strong>Reklamlar (Google AdMob):</strong> Ücretsiz kullanıcılara reklam göstermek için Google AdMob
              kullanılmaktadır. AdMob, reklam kişiselleştirme amacıyla anonim cihaz kimliği kullanabilir.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-neutral-300 mt-6 mb-2">2.2 Web Sitesi (ruyasozlugunuz.com)</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Log Dosyaları:</strong> Standart sunucu logları (IP adresi, tarayıcı türü, ziyaret saati) analiz
              amacıyla tutulabilir. Bu veriler kişisel kimlikle eşleştirilmez.
            </li>
            <li>
              <strong>Çerezler (Cookies):</strong> Oturum yönetimi ve kullanıcı deneyimini kişiselleştirmek için
              çerezler kullanılabilir.
            </li>
            <li>
              <strong>Analitik:</strong> Google Analytics aracılığıyla anonim ziyaret verileri toplanmaktadır.
            </li>
            <li>
              <strong>Reklam:</strong> Google AdSense aracılığıyla kişiselleştirilmiş reklamlar gösterilebilir.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">3. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizi korumak için endüstri standardı güvenlik önlemleri alıyoruz. Sırdaş uygulaması;
            kullanıcı verilerini kendi sunucularımızda <strong>depolamaz</strong> ve <strong>üçüncü şahıslarla paylaşmaz</strong>.
            Tüm hassas işlemler (ödeme, AI sorguları) ilgili platformların güvenli altyapıları aracılığıyla gerçekleştirilir.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">4. Çocukların Gizliliği</h2>
          <p>
            Hizmetlerimiz 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşından küçük kullanıcılardan
            kişisel veri toplamıyoruz. Ebeveynlerin bu konuda endişesi varsa lütfen bizimle iletişime geçin.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">5. Saklama Süreleri</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-neutral-300 font-semibold">Veri Türü</th>
                  <th className="text-left py-3 text-neutral-300 font-semibold">Saklama Süresi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-night-300">
                <tr><td className="py-2.5 pr-4">Sırdaş AI sohbet metinleri</td><td className="py-2.5">Sıfır — ekran kapanınca silinir</td></tr>
                <tr><td className="py-2.5 pr-4">Konum verisi</td><td className="py-2.5">Anlık hesaplama; saklanmaz</td></tr>
                <tr><td className="py-2.5 pr-4">Uygulama kullanıcı tercihleri</td><td className="py-2.5">Kullanıcı uygulamayı silene dek cihazda</td></tr>
                <tr><td className="py-2.5 pr-4">Abonelik & ödeme kayıtları</td><td className="py-2.5">Abonelik sona erme + 2 yıl (yasal zorunluluk)</td></tr>
                <tr><td className="py-2.5 pr-4">Web sunucu logları</td><td className="py-2.5">90 gün</td></tr>
                <tr><td className="py-2.5 pr-4">Google Analytics verileri</td><td className="py-2.5">14 ay (Google platformu politikası)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">6. Haklarınız ve Başvuru Yöntemi (KVKK)</h2>
          <p>
            6698 sayılı KVKK kapsamında kişisel verilerinize ilişkin haklarınız ve başvuru yöntemi için{' '}
            <a href="/kvkk" className="text-mystic-400 underline">KVKK Aydınlatma Metnimizi</a> inceleyebilirsiniz.
            Başvurularınız 30 gün içinde yanıtlanır.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">7. Değişiklikler</h2>
          <p>
            Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda uygulama
            içinde veya bu sayfa üzerinden bildirim yapılacaktır.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">8. İletişim</h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için{' '}
            <a href="/iletisim" className="text-mystic-400 underline">İletişim</a> sayfamızı ziyaret edebilirsiniz.
          </p>
        </section>

      </div>
    </div>
  );
}


