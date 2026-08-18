import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Koşulları ve Sorumluluk Reddi | Sırdaş & Rüya Sözlüğü",
  description: "Sırdaş uygulaması ve Rüya Sözlüğü kullanım koşulları, sorumluluk reddi beyanı ve yasal uyarılar.",
  alternates: { canonical: "https://www.ruyasozlugunuz.com/kullanim-kosullari" },
};

const LAST_UPDATED = "18 Ağustos 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-10 mb-4">{title}</h2>
      <div className="space-y-3 text-night-200 leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-300 mb-2">Kullanım Koşulları ve Sorumluluk Reddi</h1>
      <p className="text-mystic-400 mb-2">Son güncellenme tarihi: {LAST_UPDATED}</p>
      <p className="text-neutral-500 text-sm mb-10">
        Bu belge; <strong className="text-neutral-300">ruyasozlugunuz.com</strong> web sitesini ve{" "}
        <strong className="text-neutral-300">Sırdaş: Rüya, Namaz ve Kuran</strong> mobil uygulamasını kapsamaktadır.
        Uygulamayı veya siteyi kullanarak aşağıdaki tüm koşulları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.
      </p>

      {/* BÜYÜK UYARI */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-10">
        <h2 className="text-amber-400 font-bold text-lg mb-3">⚠️ Önemli Sorumluluk Reddi Beyanı</h2>
        <p className="text-neutral-300 leading-relaxed">
          Sırdaş uygulaması ve Rüya Sözlüğü web sitesi; bir <strong>psikolog, psikiyatrist, doktor, avukat, müftü veya herhangi bir lisanslı
          profesyonel</strong> yerine geçmez. Sunulan tüm içerikler yalnızca genel bilgilendirme ve eğlence amaçlıdır.
          Acil bir durumda lütfen <strong>112</strong>&apos;yi (ambulans) veya <strong>182</strong>&apos;yi (ALO psikiyatri hattı) arayın.
        </p>
      </div>

      <div className="prose prose-invert prose-mystic max-w-none space-y-2">

        <Section title="1. Hizmetin Kapsamı ve Tanımlar">
          <p>
            &quot;Hizmet&quot; ifadesi; <em>ruyasozlugunuz.com</em> web sitesini, Sırdaş iOS/Android uygulamasını ve bu
            platformlar üzerinden sunulan tüm içerik, araç ve özellikleri kapsar. &quot;Kullanıcı&quot; ise bu Hizmetlere
            erişen gerçek veya tüzel kişiyi ifade eder. Hizmeti kullanan herkes bu koşulları peşinen kabul etmiş sayılır.
          </p>
        </Section>

        <Section title="2. Yapay Zeka (Sırdaş AI) – Sorumluluk Reddi">
          <p>
            Sırdaş uygulamasındaki &quot;Manevi Sohbet&quot; özelliği, bir yapay zeka dil modeli (Google Gemini) tarafından
            çalıştırılmaktadır. Bu özelliğe ilişkin kritik uyarılar:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Profesyonel tavsiye değildir:</strong> Sırdaş AI&apos;nin verdiği yanıtlar; psikiyatrik, psikolojik,
              tıbbi, hukuki veya dini (fetvaya dayalı) profesyonel tavsiye niteliği taşımaz.
              Bir psikolog, psikiyatrist, müftü veya doktor yerine kullanılamaz.
            </li>
            <li>
              <strong>Hata yapabilir:</strong> Yapay zeka yanıtları yanlış, eksik veya yanıltıcı olabilir. Yanıtların doğruluğu
              garanti edilmez. Kritik kararlarınızı yapay zeka çıktısına dayandırmayınız.
            </li>
            <li>
              <strong>Dini içerik:</strong> Sunulan dini bilgiler genel bilgilendirme amaçlıdır; kişiye özel fetva niteliği
              taşımaz. Bireysel dini meseleleriniz için yetkili bir din görevlisine (imam, müftü, diyanet) başvurunuz.
            </li>
            <li>
              <strong>Ruh sağlığı:</strong> Kendinize veya başkasına zarar vermeyi, intiharı ya da ciddi bir kriz durumunu
              yaşıyorsanız lütfen derhal <strong>182 (ALO Psikiyatri Hattı)</strong> veya <strong>182&apos;yi</strong> arayınız ya da
              bir sağlık kuruluşuna başvurunuz. Sırdaş AI bu tür durumlara müdahale edemez.
            </li>
            <li>
              <strong>Veri aktarımı:</strong> Sohbet içerikleri yanıt üretmek amacıyla Google Gemini API&apos;sine iletilir.
              Bu veriler tarafımızca saklanmamakla birlikte Google&apos;ın gizlilik politikasına tabidir.
            </li>
          </ul>
        </Section>

        <Section title="3. Rüya Tabirleri – Sorumluluk Reddi">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Tüm rüya tabirleri ve yorumları yalnızca <strong>eğlence ve genel bilgilendirme</strong> amaçlıdır.
              Bilimsel, tıbbi veya psikolojik bir gerçekliğe dayanmaz.
            </li>
            <li>
              Bir rüya yorumu; tıbbi teşhis, psikolojik değerlendirme, kader bildirimi veya kehanet niteliği taşımaz.
            </li>
            <li>
              Kullanıcının rüya içeriğine dayanarak alacağı herhangi bir kişisel, mali, sağlık veya iş kararından
              tarafımız sorumlu tutulamaz.
            </li>
            <li>
              İslami kaynaklara (İbn-i Sirin, İmam Nablusi vb.) atıflar genel bir aktarım niteliğinde olup kişiye özel
              dini fetva değildir.
            </li>
          </ul>
        </Section>

        <Section title="4. Namaz Vakitleri – Doğruluk Reddi">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Namaz vakitleri, cihazın GPS konumuna dayalı astronomik hesaplama yöntemleriyle otomatik olarak belirlenir.
            </li>
            <li>
              Hesaplanan vakitler Diyanet İşleri Başkanlığı veya yerel müftülük tarafından ilan edilen resmi vakitlerden
              dakikalar düzeyinde farklılık gösterebilir.
            </li>
            <li>
              Namaz vaktinin kesin olarak doğru olması gerektiği durumlarda (özellikle oruç, seyahat vb.) resmi
              Diyanet kaynaklarını veya yerel müftülüğü esas alınız.
            </li>
            <li>
              Yanlış hesaplanan vakitler nedeniyle ortaya çıkabilecek herhangi bir dini veya kişisel sorumluluk
              tarafımıza ait değildir.
            </li>
          </ul>
        </Section>

        <Section title="5. Kuran-ı Kerim Ses Kayıtları">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Uygulamada yer alan Kuran-ı Kerim ses kayıtları kamuya açık ve ücretsiz kullanım lisansına sahip
              kaynaklardan temin edilmiştir.
            </li>
            <li>
              Ses kayıtlarında telaffuz veya tecvit hatası olabileceği ihtimali göz ardı edilmemelidir.
              Şüphe durumunda mutlaka basılı bir Mushaf veya güvenilir bir hocadan teyit alınız.
            </li>
            <li>
              Bu kayıtlar; yalnızca kişisel dinleme amaçlıdır. Ticari amaçla kopyalanması, dağıtılması veya
              yayınlanması yasaktır.
            </li>
          </ul>
        </Section>

        <Section title="6. Genel Sorumluluk Sınırlaması">
          <p>
            Yürürlükteki mevzuatın izin verdiği azami ölçüde; hizmet sağlayıcı, yöneticileri, çalışanları, iş ortakları
            ve lisans verenler; aşağıdakilerden kaynaklanan doğrudan, dolaylı, arızi, özel, sonuçsal veya cezai zararlardan
            sorumlu değildir:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hizmetin kullanımından veya kullanılamamasından,</li>
            <li>Hizmete güvenerek alınan kararlardan,</li>
            <li>Yetkisiz erişim veya veri ihlallerinden,</li>
            <li>Hizmetin kesintisiz veya hatasız çalışacağına ilişkin beklentilerden,</li>
            <li>Üçüncü taraf hizmetlerinden (Google, RevenueCat, AdMob vb.) kaynaklanan sorunlardan.</li>
          </ul>
          <p>
            Herhangi bir koşulda tarafımızın toplam sorumluluğu, son 12 (on iki) ay içinde kullanıcının ödediği ücretle
            sınırlıdır. Ücretsiz kullanıcılar için bu tutar sıfırdır.
          </p>
        </Section>

        <Section title="7. Yaş Sınırı">
          <p>
            Hizmetlerimiz <strong>13 yaşın altındaki</strong> bireylere yönelik değildir. 13-18 yaş arasındaki kullanıcıların
            ebeveyn veya yasal veli denetiminde kullanması önerilir. Özellikle &quot;Manevi Sohbet&quot; özelliği duygusal
            olarak hassas konular içerebilir.
          </p>
        </Section>

        <Section title="8. Yasaklı Kullanımlar">
          <p>Kullanıcı, aşağıdaki amaçlarla Hizmeti kullanamaz:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Yasa dışı faaliyetleri teşvik etmek veya kolaylaştırmak,</li>
            <li>Nefret söylemi, taciz veya ayrımcılık içeren içerik üretmek,</li>
            <li>Hizmetin güvenlik sistemlerini atlatmaya çalışmak,</li>
            <li>Otomatik araçlarla (bot, scraper vb.) içerik toplamak,</li>
            <li>Başkasının kimliğine bürünmek,</li>
            <li>Sistemi aşırı yüklemeye yönelik saldırı düzenlemek.</li>
          </ul>
        </Section>

        <Section title="9. Fikri Mülkiyet">
          <p>
            Web sitesi ve uygulamadaki tasarım, metin, grafik, kod, logo ve diğer tüm materyaller aksi belirtilmedikçe
            hizmet sahibine aittir. Kaynak gösterilmeksizin kopyalanması, ticari amaçla kullanılması veya türev eser
            oluşturulması yasaktır.
          </p>
        </Section>

        <Section title="10. Hizmet Değişiklikleri ve Sonlandırma">
          <p>
            Hizmet sağlayıcı; önceden bildirim yapmaksızın hizmetin herhangi bir özelliğini değiştirme, askıya alma
            veya tamamen sonlandırma hakkını saklı tutar. Bu durum nedeniyle kullanıcıya herhangi bir tazminat
            ödenmez.
          </p>
          <p>
            Abonelik ücretleri; App Store veya Google Play üzerinden işlenir ve ilgili platformların iade politikasına
            tabidir. Biz ödeme işlemi yapmaz, iade taleplerini doğrudan ilgili mağaza üzerinden yönetmenizi öneririz.
          </p>
        </Section>

        <Section title="11. Üçüncü Taraf Bağlantılar ve Hizmetler">
          <p>
            Hizmetlerimiz; Google (Gemini AI, AdMob, Analytics), RevenueCat, Apple App Store ve benzeri üçüncü taraf
            platformlardan yararlanmaktadır. Bu platformların gizlilik politikaları ve kullanım koşulları onlara ait olup
            tarafımız bu platformların uygulamalarından sorumlu değildir.
          </p>
          <p>
            Sitemizde yer alan dış bağlantılar (turkiyehesaplama.com vb.) kendi koşullarına tabidir.
          </p>
        </Section>

        <Section title="12. Uygulanacak Hukuk ve Yetki">
          <p>
            Bu kullanım koşulları <strong>Türk Hukuku</strong>&apos;na tabidir. Taraflar arasında çıkacak uyuşmazlıklarda
            Türkiye mahkemeleri yetkilidir.
          </p>
        </Section>

        <Section title="13. Koşulların Değiştirilmesi">
          <p>
            Kullanım koşullarını zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında uygulama veya web sitesi
            üzerinden bildirim yapılır. Değişiklik tarihinden sonra Hizmetleri kullanmaya devam etmeniz, güncellenmiş
            koşulları kabul ettiğiniz anlamına gelir.
          </p>
        </Section>

        <Section title="14. İletişim">
          <p>
            Bu koşullarla ilgili sorularınız için{" "}
            <Link href="/iletisim" className="text-mystic-400 underline">İletişim</Link> sayfamızı kullanabilirsiniz.
          </p>
        </Section>

      </div>
    </div>
  );
}
