export const metadata = {
  title: 'Kullanım Koşulları',
  description: 'Rüya Sözlüğü web sitesi kullanım koşulları ve yasal uyarılar.',
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-mystic-300 mb-8">Kullanım Koşulları ve Yasal Uyarı</h1>
      
      <div className="prose prose-invert prose-mystic max-w-none space-y-6 text-night-200">
        <p>Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Bilgilendirme Amaçlı İçerik</h2>
          <p>
            Rüya Sözlüğü (ruyasozlugunuz.com) üzerinde yer alan tüm rüya tabirleri, yorumlar ve içerikler 
            <strong> tamamen eğlence ve genel bilgilendirme amaçlıdır</strong>. Rüya yorumları bilimsel bir gerçekliğe, 
            tıbbi bir teşhise veya kesin bir psikolojik analize dayanmaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Tıbbi veya Profesyonel Tavsiye Değildir</h2>
          <p>
            Sitemizde okuduğunuz hiçbir rüya tabiri veya yorum, tıbbi, psikiyatrik, finansal veya hukuki bir tavsiye 
            yerine geçmez. Psikolojik veya fiziksel sağlık sorunlarınız için lütfen alanında uzman profesyonellere (doktor, psikolog, psikiyatrist vb.) 
            başvurunuz. Sitemizdeki içeriklere dayanarak alınacak kararlardan ve sonuçlarından sitemiz ve içerik yazarları 
            sorumlu tutulamaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Telif Hakkı</h2>
          <p>
            Web sitemizde yer alan tasarım, metin, grafik ve diğer tüm materyallerin telif hakları aksi belirtilmedikçe 
            Rüya Sözlüğü&apos;ne aittir. İzinsiz kopyalanması, çoğaltılması veya başka mecralarda yayınlanması yasaktır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-mystic-400 mt-8 mb-4">Dış Bağlantılar (Linkler)</h2>
          <p>
            Sitemiz, farklı internet sitelerine bağlantılar verebilir. Rüya Sözlüğü, link verdiği, banner tanıtımını yaptığı sitelerin içeriklerinden 
            veya gizlilik prensiplerinden sorumlu değildir.
          </p>
        </section>
      </div>
    </div>
  );
}
