import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Rüya Sözlüğü",
  description: "ruyasozlugunuz.com sitesinde kullanılan çerezlerin türleri, amaçları, saklama süreleri ve nasıl kontrol edebileceğinize dair bilgiler.",
  alternates: { canonical: "https://www.ruyasozlugunuz.com/cerez-politikasi" },
};

const LAST_UPDATED = "18 Ağustos 2026";

const cookies = [
  {
    provider: "Google Analytics",
    names: "_ga, _gid, _ga_*",
    purpose: "Ziyaretçi sayısı, sayfa görüntüleme, oturum süresi gibi anonim trafik analitiği",
    type: "Performans",
    duration: "_ga: 2 yıl / _gid: 24 saat",
    optout: "https://tools.google.com/dlpage/gaoptout",
  },
  {
    provider: "Google AdSense / AdMob",
    names: "IDE, DSID, NID, 1P_JAR, CONSENT",
    purpose: "Kişiselleştirilmiş reklam gösterimi ve reklam etkileşimi ölçümü",
    type: "Reklam",
    duration: "13 ay — 2 yıl arası",
    optout: "https://myadcenter.google.com/",
  },
  {
    provider: "Yandex Metrica / RTB",
    names: "_ym_uid, _ym_d, _ym_isad, yabs-sid",
    purpose: "Oturum analizi ve Yandex reklam ağı kişiselleştirmesi",
    type: "Performans / Reklam",
    duration: "Oturum — 1 yıl arası",
    optout: "https://yandex.com/support/metrica/general/opt-out.html",
  },
  {
    provider: "ruyasozlugunuz.com",
    names: "cookie_consent",
    purpose: "Çerez onay tercihini hatırlamak",
    type: "Zorunlu",
    duration: "1 yıl",
    optout: null,
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-300 mb-2">Çerez (Cookie) Politikası</h1>
      <p className="text-mystic-400 mb-10">Son güncellenme tarihi: {LAST_UPDATED}</p>

      <div className="prose prose-invert prose-mystic max-w-none space-y-8 text-night-200">

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">Çerez Nedir?</h2>
          <p>
            Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır.
            Çerezler; site oturumunuzu sürdürmek, tercihlerinizi hatırlamak, trafik analitiği yapmak ve kişiselleştirilmiş reklam
            göstermek gibi amaçlarla kullanılır. Bu politika yalnızca <strong className="text-neutral-300">ruyasozlugunuz.com</strong> web
            sitesini kapsar; mobil uygulama (Sırdaş) çerez kullanmaz.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">Çerez Türleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { type: "Zorunlu Çerezler", desc: "Sitenin temel işlevleri için şarttır. Devre dışı bırakılamaz; kullanıcı tercihine gerek duymaz.", color: "border-green-500/30 bg-green-500/5" },
              { type: "Performans Çerezleri", desc: "Anonim trafik verileri toplayarak sitenin nasıl kullanıldığını anlamamıza yardımcı olur.", color: "border-blue-500/30 bg-blue-500/5" },
              { type: "Reklam Çerezleri", desc: "İlgi alanlarınıza göre kişiselleştirilmiş reklam sunmak amacıyla kullanılır. KVKK kapsamında açık rıza gerektirir.", color: "border-amber-500/30 bg-amber-500/5" },
              { type: "İşlevsel Çerezler", desc: "Dil, çerez onayı gibi kullanıcı tercihlerini hatırlar.", color: "border-purple-500/30 bg-purple-500/5" },
            ].map((item) => (
              <div key={item.type} className={"rounded-2xl border p-4 " + item.color}>
                <p className="font-semibold text-neutral-300 mb-1">{item.type}</p>
                <p className="text-sm text-night-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">Kullandığımız Çerezlerin Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-3 text-neutral-300 font-semibold">Sağlayıcı</th>
                  <th className="text-left py-3 pr-3 text-neutral-300 font-semibold">Çerez Adı</th>
                  <th className="text-left py-3 pr-3 text-neutral-300 font-semibold">Amaç</th>
                  <th className="text-left py-3 pr-3 text-neutral-300 font-semibold">Tür</th>
                  <th className="text-left py-3 text-neutral-300 font-semibold">Süre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-night-300">
                {cookies.map((c) => (
                  <tr key={c.provider}>
                    <td className="py-3 pr-3 font-medium text-neutral-400 align-top">{c.provider}</td>
                    <td className="py-3 pr-3 font-mono text-xs align-top text-night-400">{c.names}</td>
                    <td className="py-3 pr-3 align-top text-xs">{c.purpose}</td>
                    <td className="py-3 pr-3 align-top">
                      <span className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{c.type}</span>
                    </td>
                    <td className="py-3 align-top text-xs">{c.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p className="mb-4">
            Zorunlu çerezler dışındaki tüm çerezleri sitemizin çerez onay paneli üzerinden reddedebilir veya
            tarayıcı ayarlarınızdan yönetebilirsiniz.
          </p>
          <div className="space-y-3">
            {[
              { browser: "Google Chrome", url: "chrome://settings/cookies" },
              { browser: "Mozilla Firefox", url: "about:preferences#privacy" },
              { browser: "Safari", url: "Tercihler → Gizlilik → Çerezleri Yönet" },
              { browser: "Microsoft Edge", url: "edge://settings/privacy" },
            ].map((b) => (
              <div key={b.browser} className="flex items-center gap-3 text-sm bg-white/[0.02] border border-white/8 rounded-xl px-4 py-3">
                <span className="text-neutral-400 font-medium w-36">{b.browser}</span>
                <span className="text-night-400 font-mono text-xs">{b.url}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-sm font-semibold text-neutral-300">Reklam Çerezleri İçin Opt-Out Linkleri:</p>
            {cookies.filter(c => c.optout).map(c => (
              <a key={c.provider} href={c.optout!} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-mystic-400 hover:text-mystic-300 transition-colors">
                <span>→</span> {c.provider} — Opt-out
              </a>
            ))}
            <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-mystic-400 hover:text-mystic-300 transition-colors">
              <span>→</span> Your Online Choices (Avrupa Reklam Birliği)
            </a>
          </div>
          <p className="mt-4 text-sm text-night-400">
            Çerezleri tamamen devre dışı bırakmanız durumunda sitenin bazı özellikleri (çerez onay tercihi hatırlama vb.) çalışmayabilir.
          </p>
        </section>

        <section>
          <h2 className="tracking-tight text-xl font-bold text-mystic-400 mt-8 mb-4">Güncellemeler</h2>
          <p>
            Kullandığımız çerezler veya amaçları değiştiğinde bu politika güncellenir. Önemli değişiklikler sitemizde duyurulur.
          </p>
        </section>

      </div>
    </div>
  );
}
