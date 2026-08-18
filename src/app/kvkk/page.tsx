import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Sırdaş & Rüya Sözlüğü",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "https://www.ruyasozlugunuz.com/kvkk" },
};

const LAST_UPDATED = "18 Ağustos 2026";

export default function KVKKPage() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="text-sm text-night-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-mystic-400 transition-colors">Anasayfa</Link>
        <span>/</span>
        <span className="text-night-200">KVKK Aydınlatma Metni</span>
      </nav>

      <h1 className="text-3xl tracking-tight font-bold text-neutral-300 mb-2">
        Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni
      </h1>
      <p className="text-mystic-400 mb-10">Son güncellenme tarihi: {LAST_UPDATED}</p>

      <div className="prose prose-invert prose-mystic max-w-none space-y-8 text-night-200">

        <section>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca <strong className="text-neutral-300">veri sorumlusu</strong> sıfatıyla,
            kişisel verilerinizin toplanma yöntemleri, işlenme amaçları, aktarıldığı taraflar ve haklarınız hakkında sizi aydınlatmak isteriz.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">1. Veri Sorumlusunun Kimliği</h2>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-1 text-sm">
            <p><strong className="text-neutral-300">Ticari Unvan / Hizmet Adı:</strong> Rüya Sözlüğü (ruyasozlugunuz.com) & Sırdaş Uygulaması</p>
            <p><strong className="text-neutral-300">Kapsam:</strong> Web sitesi ve Sırdaş iOS/Android mobil uygulaması</p>
            <p><strong className="text-neutral-300">İletişim:</strong> <Link href="/iletisim" className="text-mystic-400 underline">İletişim Formu</Link></p>
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">2. İşlenen Kişisel Veriler, Toplanma Yöntemi ve Hukuki Dayanağı</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-neutral-300 font-semibold">Veri Kategorisi</th>
                  <th className="text-left py-3 pr-4 text-neutral-300 font-semibold">Toplanan Veri</th>
                  <th className="text-left py-3 pr-4 text-neutral-300 font-semibold">Hukuki Dayanak (KVKK 5. Madde)</th>
                  <th className="text-left py-3 text-neutral-300 font-semibold">Saklama Süresi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-night-300">
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Konum Verisi</td>
                  <td className="py-3 pr-4">Anlık GPS koordinatı (namaz vakti & kıble)</td>
                  <td className="py-3 pr-4">Madde 5/1-f — Meşru menfaat</td>
                  <td className="py-3">Anlık; saklanmaz</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Yapay Zeka Girişi</td>
                  <td className="py-3 pr-4">Sohbet metni (Google Gemini API&apos;ye iletilir)</td>
                  <td className="py-3 pr-4">Madde 5/1-a — Açık rıza (modal onayı)</td>
                  <td className="py-3">Ekran kapanınca silinir</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Kullanıcı Tercihleri</td>
                  <td className="py-3 pr-4">Bildirim ayarları, PRO durumu, Kuran yer imi (AsyncStorage)</td>
                  <td className="py-3 pr-4">Madde 5/1-f — Meşru menfaat</td>
                  <td className="py-3">Kullanıcı silene dek cihazda</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Abonelik Verisi</td>
                  <td className="py-3 pr-4">Satın alma kaydı (RevenueCat, App Store/Play Store)</td>
                  <td className="py-3 pr-4">Madde 5/1-c — Sözleşmenin ifası</td>
                  <td className="py-3">Abonelik + 2 yıl</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Reklam Verisi</td>
                  <td className="py-3 pr-4">Anonim cihaz kimliği (Google AdMob)</td>
                  <td className="py-3 pr-4">Madde 5/1-f — Meşru menfaat</td>
                  <td className="py-3">Google politikasına göre</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Log Dosyaları (Web)</td>
                  <td className="py-3 pr-4">IP, tarayıcı, sayfa görüntüleme, oturum süresi</td>
                  <td className="py-3 pr-4">Madde 5/1-f — Meşru menfaat</td>
                  <td className="py-3">90 gün (Vercel/Google)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-neutral-400">Çerezler (Web)</td>
                  <td className="py-3 pr-4">Analytics, reklam çerezleri</td>
                  <td className="py-3 pr-4">Madde 5/1-a — Açık rıza (çerez onayı)</td>
                  <td className="py-3">Çerez politikasına göre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">3. Kişisel Verilerin Aktarıldığı Taraflar</h2>
          <p className="mb-3">Kişisel verileriniz aşağıdaki taraflarla KVKK&apos;nın 8. ve 9. maddeleri kapsamında paylaşılabilir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-neutral-400">Google LLC (ABD):</strong> Gemini AI, AdMob, Analytics, AdSense — gizlilik politikası kapsamında</li>
            <li><strong className="text-neutral-400">RevenueCat Inc. (ABD):</strong> Abonelik yönetimi — gizlilik politikası kapsamında</li>
            <li><strong className="text-neutral-400">Vercel Inc. (ABD):</strong> Web hosting ve CDN altyapısı</li>
            <li><strong className="text-neutral-400">Apple Inc. / Google:</strong> Uygulama mağazası satın alma işlemleri</li>
            <li><strong className="text-neutral-400">Yetkili Kamu Kurumları:</strong> Yasal zorunluluk halinde yalnızca talep edilen veriler</li>
          </ul>
          <p className="mt-4 text-sm text-night-400">
            Yurt dışı aktarımlar; KVKK 9. maddesi kapsamında yeterli koruma mekanizmaları (SCCs, açık rıza) çerçevesinde gerçekleştirilmektedir.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">4. İlgili Kişi Hakları (KVKK Madde 11)</h2>
          <p className="mb-3">Kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
              "İşlenmişse buna ilişkin bilgi talep etme",
              "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
              "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
              "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
              "KVKK 7. madde kapsamında silinmesini veya yok edilmesini isteme",
              "Düzeltme ve silme işlemlerinin üçüncü kişilere bildirilmesini isteme",
              "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
              "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde giderilmesini talep etme",
            ].map((hak) => (
              <div key={hak} className="flex items-start gap-2 text-sm bg-white/[0.02] border border-white/8 rounded-xl p-3">
                <span className="text-mystic-400 mt-0.5 flex-shrink-0">✓</span>
                <span className="text-night-300">{hak}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">5. Başvuru Yöntemi</h2>
          <p className="mb-4">
            Yukarıdaki haklarınızı kullanmak için aşağıdaki yöntemlerden birini tercih edebilirsiniz:
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 space-y-3 text-sm">
            <p>
              <strong className="text-neutral-300">Elektronik başvuru:</strong>{" "}
              <Link href="/iletisim" className="text-mystic-400 underline">İletişim sayfamız</Link> üzerinden{" "}
              &quot;KVKK Başvurusu&quot; konusu ile tarafınıza ait kimlik doğrulayıcı bilgilerle yazılı olarak iletebilirsiniz.
            </p>
            <p className="text-night-400">
              Başvurular KVKK&apos;nın 13. maddesi uyarınca <strong>30 gün</strong> içinde yanıtlanır.
              Talebin reddi hâlinde gerekçe bildirilir. Başvurunun reddedilmesi, yetersiz yanıt verilmesi veya süresinde yanıt verilmemesi
              durumunda <strong>Kişisel Verileri Koruma Kurulu&apos;na (KVKK)</strong> şikâyette bulunma hakkınız saklıdır.
            </p>
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">6. Değişiklikler</h2>
          <p>
            Bu aydınlatma metni yasal düzenlemeler veya uygulamadaki değişiklikler nedeniyle güncellenebilir.
            Güncel metin her zaman bu sayfada yayımlanır.
          </p>
        </section>

      </div>
    </article>
  );
}
