'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Sparkles, Moon, Sun, ShieldCheck, HelpCircle, ChevronDown, ChevronRight, Bookmark, Award, HeartHandshake, Compass } from 'lucide-react';
import TextToSpeech from '@/components/TextToSpeech';
import AdSlot from '@/components/AdSlot';
import PartnerAd from '@/components/PartnerAd';

interface LightSymbol {
  title: string;
  slug: string;
  category: string;
  snippet: string;
}

interface Props {
  symbols: LightSymbol[];
}

const FAQ_ITEMS = [
  {
    question: "İslami ve Diyanet rüya tabirleri kesin olarak gerçekleşir mi?",
    answer: "Hayır, İslam inancına göre peygamberlerin rüyaları hariç hiçbir rüya kesin bir vahiy veya değişmez kader hükmü taşımaz. İslami rüya tabirleri, İbn-i Şirin, İmam Nablusi ve İmam Cafer-i Sadık gibi büyük alimlerin Kur'an sembolizmine, hadislere ve kadim tecrübelere dayanarak yaptıkları yorumlardır. Diyanet İşleri Başkanlığı da rüyaların mutlak gelecek habercisi olarak görülmemesi, sadece kişinin manevi dünyasına bir işaret veya uyarı olarak değerlendirilmesi gerektiğini vurgular."
  },
  {
    question: "Kötü, korkutucu veya şeytani bir rüya gördüğümüzde İslam'a göre ne yapmalıyız?",
    answer: "Peygamber Efendimiz (s.a.v.) hadis-i şeriflerinde şöyle buyurmuştur: 'Sizden biriniz hoşuna gitmeyen kötü bir rüya görürse sol tarafına üç defa hafifçe tükürsün (üflesin), şeytanın şerrinden üç defa Allah'a sığınsın (Euzübesmele çeksin) ve yattığı tarafından diğer tarafına dönsün. Ayrıca bu rüyayı hiç kimseye anlatmasın.' Kötü rüya anlatılmadığı ve hayra yorulduğu sürece sahibine zarar vermez. Ayrıca rüyanın ardından bir miktar sadaka vermek belaları def eder."
  },
  {
    question: "Ramazan ayında veya kandil gecelerinde görülen rüyaların özel bir anlamı var mıdır?",
    answer: "Evet, İslam alimlerine göre Ramazan ayında şeytanların zincire vurulması, rahmet kapılarının açılması ve müminlerin oruçla nefislerini tezkiye etmeleri sebebiyle bu ayda görülen rüyaların 'Rahmani (Rüya-yı Sadıka)' olma ihtimali çok yüksektir. Özellikle Kadir Gecesi, Berat Kandili, Miraç Kandili ve Cuma geceleri sabaha karşı (seher vaktinde) görülen rüyalar manevi müjdeler, ihsanlar ve ilahi uyarılar açısından son derece kıymetlidir."
  },
  {
    question: "Gündüz uykusunda (Kaylule) veya öğleden sonra görülen rüyaların tabiri çıkar mı?",
    answer: "İmam Nablusi ve İbn Şirin'e göre en doğru ve hızlı gerçekleşen rüyalar, sabaha karşı (seher vakti ile sabah namazı arasında) görülen rüyalardır. Gündüz öğle vaktinde yapılan sünnet uyku (Kaylule) esnasında görülen rüyalar da zihin dinlenmiş olduğu için salih rüya sayılır. Ancak akşam üstü, güneş batarken veya aşırı yorgunluk/tokluk üzerine görülen rüyalar genelde 'Adgas-ı Ahlam' (bilinçaltı karmaşası) kabul edilir."
  },
  {
    question: "Rüyayı kimlere anlatmalı, kimlerden sakınmalıyız?",
    answer: "Rüyalar mahremdir ve bir sır gibi korunmalıdır. Hadis-i şerifte 'Rüya, uçan bir kuşun ayağına bağlıdır; yorumlanmadığı sürece düşmez, yorumlandığı an gerçekleşir' buyrulmuştur. Bu sebeple güzel bir rüya görüldüğünde sadece dinini bilen, akıllı, rüya tabirinden anlayan, sizi seven ve haset etmeyen salih kimselere veya ilim ehli üstatlara anlatılmalıdır. Haset eden veya rüyayı hemen kötüye yoran cahil kişilerden kesinlikle sakınılmalıdır."
  }
];

export default function IslamicGuideContent({ symbols }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredSymbols = useMemo(() => {
    return symbols.filter(symbol => {
      const matchesSearch = symbol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            symbol.snippet.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || symbol.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [symbols, searchQuery, selectedCategory]);

  const categories = useMemo(() => {
    const cats = new Set(symbols.map(s => s.category));
    return ['all', ...Array.from(cats)];
  }, [symbols]);

  const categoryNames: Record<string, string> = {
    all: 'Tüm İslami Tabirler',
    hayvanlar: 'Hayvanlar & Canlılar',
    esyalar: 'Eşyalar & Nesneler',
    doga: 'Doğa & Tabiat Olayları',
    mekanlar: 'Mekanlar & Yapılar'
  };

  const fullGuideTextToSpeech = `
    İslami ve Diyanet Rüya Tabirleri Rehberi.
    İslam dininde rüya, sadece uykuda görülen hayaller bütünü değil, ruhun berzah alemindeki seyahati ve ilahi bir uyarı veya müjde mekanizması olarak kabul edilir.
    Kur'an-ı Kerim'de Hazreti Yusuf, Hazreti İbrahim ve Peygamber Efendimiz Hazreti Muhammed'in rüyalarından bahsedilerek rüya olgusunun hakikati vurgulanmıştır.
    İslami ekolde rüyalar üç ana kısma ayrılır: Rahmani rüyalar, şeytani rüyalar ve nefsi rüyalar.
    Rahmani rüyalar Allah'tan bir müjde veya rehberliktir. Sabaha karşı seher vaktinde görülür ve uyandığınızda huzur verir.
    Şeytani rüyalar ise şeytanın insanı korkutmak ve mahzun etmek için verdiği vesveselerdir. Bu rüyalar kesinlikle kimseye anlatılmamalı ve hayra yorulmalıdır.
    İbn-i Şirin, İmam Nablusi ve İmam Cafer-i Sadık gibi kadim rüya alimleri, rüyaları Kur'an sembolizmi ve sünnet ışığında muazzam bir ilim haline getirmişlerdir.
  `;

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-night-800/80 to-night-900/50 border border-gold-500/30 rounded-3xl p-6 md:p-12 backdrop-blur-md shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-mystic-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Kadim İslami Rüya Külliyatı</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
            İslami & Diyanet <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-yellow-500">Rüya Tabirleri Kılavuzu</span>
          </h1>
          <p className="text-lg md:text-xl text-night-200 leading-relaxed mb-8">
            İbn-i Şirin, İmam Nablusi, İmam Cafer-i Sadık ve Diyanet ekolü ışığında Kur&apos;an ve Sünnet temelli rüya yorumları. Rüyalarınızın dini, tasavvufi ve manevi sırlarını keşfedin.
          </p>

          <div className="flex flex-wrap items-center gap-4 bg-night-900/60 p-4 rounded-2xl border border-gold-500/20">
            <TextToSpeech text={fullGuideTextToSpeech} />
            <span className="text-xs text-night-400 italic">
              🔊 Bu rehberin özetini ve İslami rüya adabını sesli dinleyebilirsiniz.
            </span>
          </div>
        </div>
      </section>

      {/* Top Banner Ad */}
      <AdSlot type="adsense" slotId="GUIDE_TOP_AD" className="my-8" />

      {/* Kısım 1: İslami Rüya Kültürü ve 3 Temel Rüya Türü */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 mb-2 flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-gold-500" />
            İslam İnancında Rüyaların 3 Temel Kısım ve Sırrı
          </h2>
          <p className="text-night-300 mb-6 leading-relaxed">
            Peygamber Efendimiz Hz. Muhammed (s.a.v.) bir hadis-i şeriflerinde şöyle buyurmuştur: <strong className="text-gold-300">&quot;Rüya üç kısımdır: Allah&apos;tan bir müjde olan salih rüya, şeytanın verdiği korku ve vesveseden ibaret olan rüya ve kişinin kendi nefsinin veya günlük meşguliyetlerinin zihnine yansıması olan rüya.&quot;</strong>
          </p>
        </div>

        <div className="bg-night-800/40 border border-gold-500/30 rounded-2xl p-6 hover:bg-night-800/60 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4">
            <Sun className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-3">1. Rahmani Rüyalar (Salih / Sadık)</h3>
          <p className="text-sm text-night-300 leading-relaxed">
            Allah Teala tarafından mümin kullarına bir müjde, ilham, uyarı veya yol gösterici olarak ihsan edilen rüyalardır. Genelde seher vaktinde (sabaha karşı) görülür. Uyandığınızda zihninizde net, berrak kalır ve kalbinize derin bir huzur, sekinet verir. Peygamberlik nurundan bir cüz sayılır.
          </p>
        </div>

        <div className="bg-night-800/40 border border-night-700/60 rounded-2xl p-6 hover:bg-night-800/60 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
            <Moon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-3">2. Şeytani Rüyalar (Hulm / Kabus)</h3>
          <p className="text-sm text-night-300 leading-relaxed">
            Şeytanın insanı korkutmak, üzmek, ümitsizliğe düşürmek veya aldatmak amacıyla zihne saldığı karanlık vesveselerdir. Yüksekten düşme, canavar görme veya nefesi kesilme gibi kabuslardır. Bu rüyaların hiçbir dini hükmü veya tabiri yoktur; kimseye anlatılmamalı ve Allah&apos;a sığınılmalıdır.
          </p>
        </div>

        <div className="bg-night-800/40 border border-mystic-500/30 rounded-2xl p-6 hover:bg-night-800/60 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-mystic-500/10 border border-mystic-500/30 flex items-center justify-center text-mystic-400 mb-4">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-3">3. Nefsi / Bilinçaltı Rüyalar (Adgas)</h3>
          <p className="text-sm text-night-300 leading-relaxed">
            Günlük hayattaki yoğun iş stresinin, ailevi tartışmaların, bedensel rahatsızlıkların veya açlık/susuzluk/yorgunluk gibi biyolojik ihtiyaçların uykuda zihne yansımasıdır. Örneğin gün boyu tuzlu yiyip uyuyan birinin rüyasında şelalelerden su içmesi bu türdendir; tabir edilmez.
          </p>
        </div>
      </section>

      {/* Kısım 2: Kadim Alimler ve Diyanet Ekolü */}
      <section className="bg-night-800/30 border border-night-700 rounded-3xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-gold-400" />
          Kadim Rüya Alimleri ve Tabir Ekolleri
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-night-200 leading-relaxed">
          <div className="space-y-4">
            <div className="border-l-4 border-gold-500 pl-4">
              <h3 className="text-lg font-bold text-gold-300">İbn-i Şirin (r.a.) - İslami Tabirin Kurucusu</h3>
              <p className="text-sm mt-1 text-night-300">
                Tabiin döneminin en büyük alimlerinden olan İbn-i Şirin, rüya tabirini rastgele bir tahmin değil, Kur&apos;an ayetlerinin sembolizmi, Peygamber Efendimiz&apos;in hadisleri ve Arap dilinin incelikleriyle harmanlanan bir &quot;ilim&quot; olarak kurmuştur. Rüyayı gören kişinin takvasına, mesleğine ve niyetine göre aynı sembolden tamamen farklı tabirler çıkarmış; adeta modern analitik psikolojinin asırlar önceki İslami öncüsü olmuştur.
              </p>
            </div>
            <div className="border-l-4 border-mystic-500 pl-4">
              <h3 className="text-lg font-bold text-mystic-300">İmam Nablusi - Osmanlı & İslam Külliyatı</h3>
              <p className="text-sm mt-1 text-night-300">
                Osmanlı döneminde yaşamış olan Abdülgani en-Nablusi&apos;nin başyapıtı *Ta&apos;tirü&apos;l-Enam fi Ta&apos;biri&apos;l-Menam*, günümüzde de Diyanet dahil tüm İslam dünyasında en çok başvuru yapılan rüya sözlüğüdür. Nablusi, rüyalardaki sembolleri sosyal hayatın gerçekleriyle, esnaf kültürüyle ve insanın manevi gelişimiyle bütünleştirerek çok yönlü ve derin bir külliyat bırakmıştır.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-bold text-blue-300">İmam Cafer-i Sadık (a.s.) - Manevi ve Sayısal Sembolizm</h3>
              <p className="text-sm mt-1 text-night-300">
                Ehli Beyt&apos;in büyük imamlarından Cafer-i Sadık hazretleri, rüyalarda görülen sembollerin kaç farklı anlama gelebileceğini sayısal olarak kategorize etmiştir. Örneğin rüyada görülen suyun, ağacın veya yılanın hangi durumlarda nimete, hangi durumlarda belaya delalet ettiğini manevi makamlar üzerinden muazzam bir netlikle açıklamıştır.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-bold text-green-300">Diyanet İşleri Başkanlığı Yaklaşımı</h3>
              <p className="text-sm mt-1 text-night-300">
                Günümüz Diyanet İşleri Başkanlığı ve İslam alimleri, rüya tabirlerine kaderi belirleyen değişmez bir kehanet olarak bakılmaması konusunda müminleri uyarır. Diyanet ekolüne göre rüya bir ümit ve manevi muhasebe aracıdır. Rüyalar her zaman hayra yorulmalı, güzel ahlaka vesile kılınmalı ve kaderin mutlak sahibinin yalnızca Allah (c.c.) olduğu asla unutulmamalıdır.
              </p>
            </div>
          </div>
        </div>

        {/* Partner Entegrasyonu */}
        <div className="mt-8 pt-6 border-t border-night-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-night-900/50 p-6 rounded-2xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧮</span>
            <p className="text-sm text-night-200">
              Rüyalarınızın zamanını hesaplamak veya günlük hayattaki zekat, kredi ve yaş hesaplamalarınız için <strong className="text-mystic-300">Türkiye Hesaplama</strong> araçlarını kullanabilirsiniz.
            </p>
          </div>
          <a
            href="https://turkiyehesaplama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-900 font-bold text-sm transition-colors whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Hesaplama Araçlarına Git &rarr;
          </a>
        </div>
      </section>

      {/* Kısım 3: Mevsimsel Dalgalanmalar - Ramazan Zirvesi ve Mübarek Zamanlar */}
      <section className="relative bg-gradient-to-r from-night-900 via-night-800 to-night-900 border border-gold-500/40 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            🌙 Ramazan & Kandiller Özel
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
            Ramazan Ayında ve Mübarek Gecelerde Görülen Rüyaların Fazileti
          </h2>
          <p className="text-night-200 leading-relaxed mb-6">
            Google Trends arama verileri ve kadim İslami kaynaklar göstermektedir ki, **Ramazan aylarında, Kadir Gecesi, Berat, Miraç ve Mevlid kandillerinde ile Cuma gecelerinde** rüya görme ve tabir aratma oranları %40 ile %60 arasında muazzam zirveler (peak) yapar. 
          </p>
          <p className="text-night-300 text-sm leading-relaxed mb-6">
            İslam alimlerine göre bunun hikmeti şudur: Ramazan ayında şeytanlar zincire vurulur, rahmet ve mağfiret kapıları sonuna kadar açılır. Oruç ibadetiyle bedeni hafifleyen, nefsini tezkiye eden ve maneviyata yönelen müminin kalbi berrak bir ayna haline gelir. Bu mübarek zaman dilimlerinde sabaha karşı görülen rüyaların **Rahmani (Rüya-yı Sadıka)** olma ihtimali diğer aylara kıyasla katbekat yüksektir. Bu rüyalardaki semboller çok daha net, uyarılar çok daha hikmetli ve müjdeler çok daha yakındır.
          </p>
          <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-300 text-sm flex items-center gap-3">
            <Sparkles className="w-6 h-6 flex-shrink-0 text-gold-400" />
            <span>
              <strong>Kadim Kural:</strong> Ramazan ayında veya Cuma seherinde gördüğünüz güzel rüyaları hemen sadaka ile taçlandırın ve şükür namazı kılın.
            </span>
          </div>
        </div>
      </section>

      {/* Middle Banner Ad */}
      <AdSlot type="adsense" slotId="GUIDE_MIDDLE_AD" className="my-8" />

      {/* Kısım 4: İnteraktif İslami Sembol Sözlüğü & Arama Motoru */}
      <section className="space-y-8" id="islami-sozluk">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-3">
            İslami & Diyanet Rüya Sözlüğü Dizini
          </h2>
          <p className="text-night-300 text-sm">
            Veritabanımızdaki 500 sembolün kadim İslami yorumlarını aşağıdan anlık arayabilir veya kategorilere göre filtreleyerek detaylı tefsirlerine ulaşabilirsiniz.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-night-800/60 border border-night-700 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-4 backdrop-blur-md">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-night-400" />
            <input
              type="text"
              placeholder="İslami tabirlerde sembol veya kelime ara (Örn: yılan, altın, bebek, su)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-night-900/80 border border-night-700/80 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-night-400 focus:outline-none focus:border-gold-500 transition-colors text-sm md:text-base"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-night-400 hover:text-white bg-night-800 px-2 py-1 rounded"
              >
                Temizle
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-3 rounded-xl text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-gold-500 text-night-950 font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-night-900/80 text-night-300 hover:bg-night-700 hover:text-white border border-night-700/60'
                }`}
              >
                {categoryNames[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-night-400 px-2">
          <span>Toplam <strong>{filteredSymbols.length}</strong> İslami tabir listeleniyor</span>
          {selectedCategory !== 'all' && (
            <span>Kategori: <strong className="text-gold-400">{categoryNames[selectedCategory]}</strong></span>
          )}
        </div>

        {/* Symbols Grid */}
        {filteredSymbols.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSymbols.map((sym) => (
              <Link
                key={sym.slug}
                href={`/sembol/${sym.slug}`}
                className="group bg-night-800/40 border border-night-700/80 rounded-2xl p-6 hover:bg-night-800/80 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                      {categoryNames[sym.category] || sym.category}
                    </span>
                    <Bookmark className="w-4 h-4 text-night-500 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-2 flex items-center justify-between">
                    <span>Rüyada {sym.title} Görmek</span>
                    <ChevronRight className="w-5 h-5 text-night-400 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-night-300 line-clamp-3 leading-relaxed">
                    {sym.snippet}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-night-700/50 flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span>İslami Tefsiri Oku &rarr;</span>
                  <span className="text-night-500">İbn Şirin & Nablusi</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-night-800/20 rounded-2xl border border-night-700">
            <HelpCircle className="w-12 h-12 text-night-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Aradığınız kriterde İslami tabir bulunamadı</h3>
            <p className="text-sm text-night-400 max-w-md mx-auto mb-6">
              Arama kelimenizi değiştirerek veya kategori filtresini &quot;Tüm İslami Tabirler&quot; olarak ayarlayarak tekrar deneyebilirsiniz.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-6 py-2.5 rounded-xl bg-gold-500 text-night-950 font-bold text-sm hover:bg-gold-400 transition-colors"
            >
              Filtreleri Sıfırlayıp Tümünü Göster
            </button>
          </div>
        )}
      </section>

      {/* Partner Ad Module */}
      <PartnerAd slug="diyanet-islami-rehber" className="my-10" />

      {/* Kısım 5: Adab-ı Müşarün-İleyh (Rüya Adabı ve İslami Kurallar) */}
      <section className="bg-night-800/50 border border-night-700 rounded-3xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-green-400" />
          Rüya Görüldüğünde Uyulması Gereken İslami Adab ve Edepler
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-night-200 leading-relaxed">
          <div className="bg-night-900/60 p-5 rounded-2xl border border-green-500/20 space-y-3">
            <h3 className="text-base font-bold text-green-400 flex items-center gap-2">
              <span>✅</span> Güzel ve Hayırlı Rüya Görülünce Yapılacaklar
            </h3>
            <ul className="list-disc list-inside space-y-2 text-night-300">
              <li>Uyanır uyanmaz <strong className="text-white">&quot;Elhamdülillah&quot;</strong> diyerek Allah&apos;a hamd ve şükür edilmelidir.</li>
              <li>Rüya, sadece sizi seven, salih, takva sahibi ve rüya ilminden anlayan kimselere anlatılmalıdır.</li>
              <li>Rüyayı ilk yoran kişinin yorumu çok önemlidir; bu sebeple her zaman hayra yorulmalı ve <strong className="text-white">&quot;Hayır olsun inşallah&quot;</strong> denilmelidir.</li>
              <li>Müjdeli rüyanın şükrü olarak yoksullara veya çocuklara küçük bir sadaka verilmesi menduptur.</li>
            </ul>
          </div>

          <div className="bg-night-900/60 p-5 rounded-2xl border border-red-500/20 space-y-3">
            <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
              <span>❌</span> Kötü veya Korkutucu Rüya Görülünce Yapılacaklar
            </h3>
            <ul className="list-disc list-inside space-y-2 text-night-300">
              <li>Kesinlikle telaşlanmamalı, rüyanın şeytani bir vesveseden ibaret olduğu bilinmelidir.</li>
              <li>Sol tarafa üç kez hafifçe (tükürür gibi) üflenmeli ve <strong className="text-white">&quot;Euzübillahimineşşeytanirracim&quot;</strong> denilmelidir.</li>
              <li>Bu rüya <strong className="text-white">kesinlikle hiç kimseye (en yakınınıza bile) anlatılmamalıdır.</strong> Anlatılmazsa asla zarar vermez.</li>
              <li>Yattığınız taraftan diğer tarafa dönüp uyumalı veya kalkıp abdest alarak iki rekat namaz kılınmalıdır.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kısım 6: Sıkça Sorulan Sorular (SSS / FAQ Accordion) */}
      <section className="space-y-6" id="sss">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
            İslami Rüya Tabirleri Hakkında Sıkça Sorulan Sorular (SSS)
          </h2>
          <p className="text-night-400 text-sm">
            Diyanet İşleri Başkanlığı ve kadim rüya alimlerinin kaynaklarından derlenen en merak edilen dini sorular ve cevapları.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-night-800/40 border border-night-700 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left font-serif font-bold text-lg text-white hover:text-gold-300 flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-night-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-night-200 text-sm md:text-base leading-relaxed border-t border-night-700/50 pt-4 bg-night-900/30">
                    <p className="whitespace-pre-wrap">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="bg-gradient-to-r from-gold-500/20 via-mystic-600/20 to-gold-500/20 border border-gold-500/30 rounded-3xl p-8 text-center max-w-4xl mx-auto">
        <HeartHandshake className="w-12 h-12 text-gold-400 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          Aradığınız Rüya Sembolünü Henüz Bulamadınız mı?
        </h3>
        <p className="text-night-200 text-sm md:text-base max-w-xl mx-auto mb-6">
          Sitemizde A&apos;dan Z&apos;ye alfabetik olarak sıralanmış yüzlerce rüya sembolü ve psikolojik analizleri mevcuttur. Tam listeye hemen göz atın.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/a-z"
            className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-sm transition-colors shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            A-Z Tüm Rüya Sembolleri İndeksi &rarr;
          </Link>
          <Link
            href="/kategoriler"
            className="px-6 py-3 rounded-xl bg-night-800 hover:bg-night-700 text-white border border-night-600 font-medium text-sm transition-colors"
          >
            Kategorilere Göre Göz At
          </Link>
        </div>
      </section>

    </div>
  );
}
