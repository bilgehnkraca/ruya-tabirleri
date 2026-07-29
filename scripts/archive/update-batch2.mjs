import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updates = [
  {
    slug: 'kan',
    title: 'Rüyada Kan Görmek',
    category: 'soyut-kavramlar',
    shortDescription: 'Rüyada kan görmek; yaşam enerjisini, canlılığı, tutkuyu, öfkeyi ve bazen de rüyanın hükmünü yitirmesini (bozulmasını) temsil eden paradoksal bir semboldür.',
    content: {
      introduction: 'Tıpkı su gibi, kan da insanlık için yaşamın en temel kaynağıdır. Rüyada kan görmek, her zaman çok şiddetli duyguların, büyük bir enerji patlamasının ve hayati önem taşıyan meselelerin habercisidir. Ancak rüya tabirleri geleneğinde kan, en tartışmalı sembollerden biridir. Toplumda yaygın olarak bilinen "kan rüyayı bozar" inanışı, kısmen doğru olmakla birlikte kanın rüyadaki çıkış şekline, miktarına ve rüya sahibinde yarattığı hisse göre bambaşka anlamlar da taşıyabilir. Kan, sadece bedenin değil, ruhun da enerjisini, tutkularını ve en derin arzularını simgeler.',
      generalMeaning: 'Rüyasında kan gören kişinin hayatında son derece hareketli, tutku dolu veya öfke yüklü bir dönem yaşanıyor demektir. Vücudun bir yerinden kan aktığını görmek, genellikle kişinin enerjisini, zamanını veya maddi gücünü tüketen bir durumun varlığına (kan kaybı = güç kaybı) işaret eder. Eğer kan bir yaradan akıyorsa ve acı veriyorsa, geçmişten gelen bir travmanın veya uyanık hayattaki bir kederin kanadığına yorulur. Ancak rüyada kanın bedenden çıkması aynı zamanda bir rahatlamaya, bedendeki ve ruhtaki bir "zehrin" atılmasına da delalet edebilir; tipik olarak uzun süren bir hastalıktan veya derin bir kederden şifa bulmaya (tıpkı hacamat gibi) yorulur. Kan görmek, kişinin libidosunun, yaratıcı enerjisinin veya içindeki savaşçı ruhun uyandığını da gösterebilir.',
      variations: [
        {
          title: 'Rüyada Kendi Kanını Görmek',
          content: 'Kendi kanını görmek, genellikle aile bağlarına, kana dayalı ilişkilere ve kişinin kendi iç dünyasındaki enerji harcamasına yorulur. Bir yerinizin kesilip kanaması, sevdiğiniz biri için fedakarlık yapacağınıza veya malınızdan bir kısmını istemeyerek harcayacağınıza işaret edebilir.'
        },
        {
          title: 'Rüyada Başkasının Kanını Görmek',
          content: 'Tanıdığınız birinin kanını görmek, o kişinin sizin yardımınıza ihtiyacı olduğuna, enerjisinin tükendiğine veya o kişiyle aranızda tutkulu, hararetli bir çatışma yaşanacağına delalet eder. Tanımadığınız birinin kanı ise, tanık olacağınız üzücü bir haksızlığa işaret eder.'
        },
        {
          title: 'Rüyada Kan Kusmak veya Tükürmek',
          content: 'Kan kusmak, kişinin içinde tuttuğu, söyleyemediği öfkenin, kırgınlıkların ve zehirli duyguların artık patlama noktasına geldiğini gösterir. Bastırılan bu duyguların bir şekilde dışa vurulması gerektiğine, aksi takdirde kişiyi içten içe tüketeceğine dair ciddi bir uyarıdır.'
        },
        {
          title: 'Rüyada Her Yerin Kan Olması (Kan Gölü)',
          content: 'Etrafın kan gölüne dönmesi, büyük bir kaosa, toplumsal bir huzursuzluğa veya iş hayatınızda yaşanacak devasa bir krize yorulur. Rüya sahibinin kontrol edemediği ve kendini çok çaresiz hissettiği büyük çaplı krizlerin yansımasıdır.'
        },
        {
          title: 'Rüyada Burun Kanaması',
          content: 'İslami tabirlerde burun kanaması çok spesifik bir şekilde yorumlanır. Eğer ince ve açık renkli bir kan geliyorsa helal kazanca ve feraha; ancak pıhtılaşmış, koyu ve kalın bir kan geliyorsa haram paraya veya kişinin üst üste yapacağı ciddi hatalara yorulur.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre, kan görmek çoğu zaman haram mal, batıl işler veya rüyanın bozulması (hükümsüz kalması) olarak yorumlanır. Vücudunda yara olmadan kan çıktığını görmek, kişinin elinden çıkacak paraya veya ödemek zorunda kalacağı bir kefarete işaret eder. İbn Şirin ve diğer alimlerin ekolünde, rüyada kan içmek kesinlikle haram mal yemeye, iftira atmaya veya büyük bir günaha bulaşmaya yorulur. Ancak bir ihtiyaç veya tedavi amacıyla (hacamat gibi) kan aldırdığını görmek çok hayırlıdır; hastalıktan şifaya, borçlardan kurtulmaya ve ruhsal arınmaya delalet eder.',
      psychologicalMeaning: 'Psikanaliz açısından kan, saf yaşam gücünün (libido) ve hayatta kalma içgüdüsünün ta kendisidir. Cinselliği, şiddeti, tutkuyu, öfkeyi ve hayatın döngüsel doğasını temsil eder. Rüyada kan kaybetmek, psikolojik olarak tükendiğinizi, bir ilişkinin veya işin tüm enerjinizi emdiğini (burn-out) gösterir. Kadınların rüyalarındaki kan temaları genellikle doğurganlık, ay döngüsü ve dişil gücün kabullenişi ile derinden bağlantılıyken; şiddet içerikli kan rüyaları, bastırılmış agresyonun (saldırganlığın) rüya yoluyla güvenli bir şekilde deşarj edilmesidir.',
      faqs: [
        {
          question: 'Kan görmek gerçekten rüyayı bozar mı?',
          answer: 'Halk arasındaki inançta evet, kan görülen rüyanın tabir edilmeyeceğine inanılır. Ancak rüya sembolizmi açısından kanın çok derin bir anlamı vardır ve bilinçaltının önemli bir mesajını taşıdığı için profesyonel tabirde bozulmuş sayılmaz, yorumlanır.'
        },
        {
          question: 'Kanamayı durdurmaya çalışmak ne anlama gelir?',
          answer: 'Hayatınızdaki bir kanamayı (sürekli para kaybı, tükenen bir ilişki, depresyon) durdurmak ve kontrolü yeniden elinize almak için gösterdiğiniz çabayı simgeler. Kanamayı durdurursanız, sorunu da çözeceksiniz demektir.'
        },
        {
          question: 'Rüyada kan bağışı yapmak nasıl yorumlanır?',
          answer: 'Manevi bir fedakarlığa, hiç tanımadığınız birine yapacağınız çok büyük bir iyiliğe veya bilginizi, sevginizi, enerjinizi toplum yararına kullanacağınıza dair muhteşem bir rüyadır.'
        }
      ]
    },
    relatedSymbols: ['olum', 'hastalik', 'su', 'aglamak']
  },
  {
    slug: 'aglamak',
    title: 'Rüyada Ağlamak',
    category: 'eylemler',
    shortDescription: 'Rüyada ağlamak; içsel arınmayı, kederin sona erip büyük bir ferahlığın gelişini, sürpriz sevinçleri ve ruhsal rahatlamayı müjdeleyen son derece pozitif bir semboldür.',
    content: {
      introduction: 'Ağlamak, uyanık hayatta genellikle üzüntünün, acının ve çaresizliğin bir ifadesi olsa da; rüya aleminde bu durum tam tersine işler. Rüyalar dünyasının en bilinen zıtlık kurallarından biri "ağlamanın gülmek, ferahlamak" anlamına gelmesidir. Rüyada gözyaşı dökmek, ruhun yıkanması, içteki zehrin atılması ve bilinçaltındaki düğümlerin çözülmesidir. Rüyasında ağlayan kişi, uyandığında tuhaf bir şekilde kendini çok hafiflemiş, rahatlamış ve huzurlu hisseder; çünkü o, taşıdığı yükü rüyasında bırakmıştır.',
      generalMeaning: 'Rüya tabirlerinin tamamına yakınında rüyada ağlamak, çok büyük bir sevince, müjdeli bir habere ve ferahlığa işarettir. Kişinin hayatındaki sıkıntıların, kederin ve dertlerin gözyaşlarıyla akıp gittiği, ardından güneşli günlerin geleceği kabul edilir. Özellikle sessizce, sadece gözyaşı dökerek ağlamak en hayırlı olanıdır; bu rüya, Allah\'ın rahmetine, umut edilen şeylerin gerçekleşmesine ve beklenen mutlu haberin çok yakında geleceğine delalet eder. Rüyada ağlamak, kişinin hayatında uzun süredir birikmiş olan stresi, endişeyi ve belirsizliği nihayet geride bırakacağına, karşısına çıkan zorlukları aşarak büyük bir manevi doyuma ulaşacağına işaret eder. Ancak ağlamanın şekli (sessiz, hıçkırarak, feryat ederek) rüyanın mesajını değiştiren yegane faktördür.',
      variations: [
        {
          title: 'Rüyada Sessizce Ağlamak',
          content: 'En güzel ve hayırlı rüyalardandır. Sadece gözyaşlarının aktığını görmek, kişinin içindeki tüm sıkıntılardan arınacağına, hiç beklemediği bir yerden gelecek maddi veya manevi destekle ferahlayacağına yorulur. Duaların kabulüne ve gönül rahatlığına delalet eder.'
        },
        {
          title: 'Rüyada Hıçkıra Hıçkıra Ağlamak',
          content: 'Biraz sarsıcı bir dönemden sonra gelecek rahatlamayı gösterir. Kişi şu anda gerçek hayatta büyük bir baskı veya keder içindedir, ancak bu zor dönemin sonuna gelindiğine, krizin doruk noktasına ulaştıktan hemen sonra her şeyin çözüleceğine işaret eder.'
        },
        {
          title: 'Rüyada Feryat Ederek, Bağırarak Ağlamak',
          content: 'Bu tür ağlama rüya tabirlerinde pek sevilmez. Bağıra çağıra, üstünü başını yırtarak ağlamak; rüya sahibinin uyanık hayatta da yaşayabileceği bir felakete, çok derin bir kedere, büyük bir maddi kayba veya itibarının zedelenmesine dair ilahi bir uyarıdır.'
        },
        {
          title: 'Rüyada Sevinçten Ağlamak',
          content: 'Uyanık hayatta da tam olarak sevinçten ağlanacak, muhteşem bir gelişmenin yaşanacağını gösterir. Çok istenen bir sınavın kazanılması, zor bir hastalığın atlatılması veya sevilen birinin sağ salim geri dönmesi gibi mucizevi haberlerin kapıda olduğunu müjdeler.'
        },
        {
          title: 'Rüyada Ölü Birinin Arkasından Ağlamak',
          content: 'Eğer ölen kişi gerçekten hayattaysa, onun ömrünün uzayacağına ve onunla ilgili çok güzel bir haber alacağınıza yorulur. Ancak gerçekten ölmüş biri için ağlıyorsanız, o kişiye duyduğunuz derin özlemi ve yarım kalan vedalaşma ihtiyacınızı yansıtır.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre, rüyada Allah korkusundan, günahlarından pişmanlıktan veya Kuran dinlerken ağlamak, rüyaların en makbulüdür. Bu rüya, rüya sahibinin Allah katındaki derecesinin yükseleceğine, tüm günahlarının affedileceğine, hidayete ereceğine ve dünyevi dertlerinden tamamen kurtulacağına müjdedir. Ancak sessiz ağlamanın aksine feryat etmek, cahiliye adetlerinden sayıldığı için İslami rüya yorumcuları tarafından uyanık hayatta başa gelecek gerçek bir musibetin, musibete karşı sabırsızlığın ve isyanın göstergesi olarak tabir edilmiştir.',
      psychologicalMeaning: 'Ağlamak, psikolojik olarak en güçlü deşarj (katarsis) yöntemlerinden biridir. Uyanık hayatta güçlü görünmek zorunda kalan, "erkekler ağlamaz" baskısıyla büyüyen veya iş hayatında duygularını bastıran kişiler, rüyalarında sıklıkla şiddetle ağladıklarını görürler. Bu, bilinçaltının ruhsal bütünlüğü sağlamak (homeostaz) için biriken negatif duyguları, stresi ve travmayı rüya yoluyla dışarı atmasıdır. Ağlayarak uyanmak, zihinsel bir detoks sürecinden geçtiğinizi ve artık o acıyı serbest bıraktığınızı kanıtlar.',
      faqs: [
        {
          question: 'Uyandığımda gerçekten yastığımın ıslak (ağlamış) olduğunu görüyorum, bu normal mi?',
          answer: 'Evet, rüyadaki duygu yoğunluğu o kadar fazladır ki beyin bedene doğrudan sinyal gönderir ve gözyaşı bezleri çalışır. Bu, bilinçaltınızın çok güçlü bir ruhsal temizlik yaptığını gösterir.'
        },
        {
          question: 'Başkasına sarılıp ağlamak ne demek?',
          answer: 'Sarılıp ağladığınız kişiyle aranızdaki bağın çok güçleneceğine, o kişiyle ortak bir sevinci veya başarıyı kutlayacağınıza, birbirinize büyük destek olacağınıza yorulur.'
        },
        {
          question: 'Gözden yaş değil kan akarak ağlamak nedir?',
          answer: 'Geçmişte yapılan büyük bir hatadan dolayı çekilen çok derin bir vicdan azabına, kişinin kendini asla affedemediği bir travmaya veya elden giden bir fırsat için duyulan ağır pişmanlığa işaret eder.'
        }
      ]
    },
    relatedSymbols: ['olum', 'bebek', 'su', 'kan']
  },
  {
    slug: 'ates',
    title: 'Rüyada Ateş Görmek',
    category: 'doga',
    shortDescription: 'Rüyada ateş görmek; büyük bir tutkuyu, yaratıcılığı, aydınlanmayı temsil ettiği gibi, kontrol edilemeyen öfkeyi, fitneyi ve tehlikeli bir yıkımı da simgeleyen ikili bir arketiptir.',
    content: {
      introduction: 'Ateş, medeniyetin doğuşunu sağlayan aydınlık ve ısı kaynağı olmasının yanı sıra, her şeyi küle çevirebilen yıkıcı bir güce sahiptir. Rüyalarda ateş sembolü de bu muazzam ikiliği barındırır. Ateş; hayatımızdaki tutkuları, bastırılamayan arzuları, içimizdeki yaratıcı kıvılcımı ve manevi aydınlanmayı temsil edebileceği gibi; öfke krizlerini, etrafımızı saran tehlikeleri, dedikodu ateşini ve ilahi bir uyarıyı da simgeleyebilir. Rüyada gördüğünüz ateşin size zarar verip vermediği, alevlerin boyutu ve dumanı, bu güçlü sembolün mesajını okumak için en önemli anahtarlardır.',
      generalMeaning: 'Rüya tabirlerinin çoğuna göre, insana zarar vermeyen, ısınmak veya aydınlanmak amacıyla yakılan ateş çok hayırlıdır. Rüya sahibinin hayatında onu karanlıktan çıkaracak yeni bir fikre, projeye, bol kazanca veya çok tutkulu bir aşk ilişkisine yorulur. Etrafa ışık saçan bir ateş, bilgiye ulaşmaya, hidayete ve çevresine fayda sağlayan güçlü bir lidere delalet eder. Ancak dumanı çok yoğun olan, etrafı yakan, kıvılcımlar saçan ve kontrol edilemeyen bir ateş; uyanık hayatta patlak verecek büyük bir tartışmaya, fitneye (dedikoduya), toplumsal kargaşaya veya maddi/manevi bir yıkıma işarettir. Ateş sizi yakıyorsa, çevrenizdeki bir haksızlıktan yara alacağınıza, kontrol edemediğiniz öfkenizin önce size zarar vereceğine dair ciddi bir uyarıdır.',
      variations: [
        {
          title: 'Rüyada Ateş Yakmak',
          content: 'Eğer bir ocağa, sobaya veya karanlığı aydınlatmak için bir yere ateş yakıyorsanız; çok faydalı bir işe girişeceğinize, ailenize ve çevrenize ışık olacağınıza, bereketli bir yola gireceğinize yorulur. Ancak fitne çıkarmak (insanları birbirine düşürmek) amacıyla ateş yakmak, düşmanlığa ve günaha işarettir.'
        },
        {
          title: 'Rüyada Evin Yanması',
          content: 'Evin alev alev yanması çok korkutucu bir rüyadır. Genellikle aile içinde yaşanacak çok şiddetli tartışmalara, boşanmaya, haneye düşecek bir ateşe (büyük bir kedere) veya ani bir felakete yorulur. Ancak alevler evi yakmıyor sadece aydınlatıyorsa, haneye gelecek büyük bir devlete ve zenginliğe delalet eder.'
        },
        {
          title: 'Rüyada Ateş Söndürmek',
          content: 'Kendi çabanızla bir yangını veya ateşi söndürdüğünüzü görmek, etrafınızda dönen büyük bir fitneyi veya tartışmayı zekanızla yatıştıracağınıza, büyük bir krizi önleyeceğinize işarettir. Bir kavgada ara bulucu rolü üstlenecek ve barışı sağlayacaksınız demektir.'
        },
        {
          title: 'Rüyada Ateşin İçine Düşmek (Ama Yanmamak)',
          content: 'Tıpkı Hz. İbrahim (A.S.)\'ın ateşe atılıp yanmaması mucizesi gibi, rüyada ateşe düşüp yanmadığını görmek; size kurulan çok büyük bir tuzaktan, atılan çok ağır bir iftiradan mucizevi bir şekilde alnınızın akıyla, zarar görmeden çıkacağınıza dair muhteşem bir müjdedir.'
        },
        {
          title: 'Rüyada Gökyüzünden Ateş Yağması',
          content: 'Toplumsal bir felakete, o bölgeye inecek bir hastalığa, savaşa veya ekonomik bir çöküşe yorulur. Kişisel olmaktan ziyade kolektif bir cezayı veya sınavı simgeler.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre ateş, cehennemi, ilahi azabı, fitneyi ve günahları temsil eder. Ancak ışık veren ateş hidayete ve nimete yorulur. Alevsiz ateş (kor), üzüntü veya gizli düşmanlığa; alevli ateş ise açık bir belaya işaret eder. Rüyada ateş yemek, Kuran\'daki yetim malı yeme ayetlerine istinaden, yetim malı yemek, haksız kazanç elde etmek veya faize bulaşmak anlamına gelir. Rüyasında kış günü ısınmak için ateş yaktığını gören kişinin ihtiyaçları giderilir. Ateş perestlerin (ateşe tapanların) yaktığı ateşi görmek ise batıl inançlara sapmaya delalet eder.',
      psychologicalMeaning: 'Carl Jung ve diğer psikanalistler ateşi büyük bir "dönüşüm (transformasyon)" arketipi olarak ele alırlar. Simyada ateş, baz metali altına çeviren unsurdur; psikolojide ise acının, tutkunun ve krizin, insan ruhunu olgunlaştıran (pişiren) doğasını simgeler. Rüyada yangın görmek, uyanık hayatta kontrol edemediğiniz bir duygunun (aşk, nefret, öfke) bilincinizi tamamen ele geçirdiğini gösterir. Ateş aynı zamanda Prometheus mitinde olduğu gibi zekayı, buluşu ve çalınan ilahi ışığı temsil eder. Yaratıcı potansiyelinizin uyanışıdır.',
      faqs: [
        {
          question: 'Rüyada ateş görmek her zaman bela mı getirir?',
          answer: 'Hayır. Kontrollü ateş (ocak, mum, soba) her zaman berekettir, bilgidir, ışıktır, huzurlu bir yuvadır. Yalnızca kontrolden çıkmış, yıkan ve yakan ateş belaya yorulur.'
        },
        {
          question: 'Rüyada üzerindeki elbiselerin yanması ne demektir?',
          answer: 'Size çok yakın birinden veya itibarınızdan zarar göreceğinize, sırlarınızın ortaya dökülmesiyle toplum içinde zor duruma düşeceğinize (sosyal itibarınızın yanmasına) işaret eder.'
        },
        {
          question: 'Küllenen bir ateş görmek nasıl yorumlanır?',
          answer: 'Bir dönem hayatınızda çok etkili olan bir tutkunun, aşkın veya büyük bir kavganın artık sakinleştiğine, enerjisinin tükendiğine ve geriye sadece anıların kaldığına yorulur.'
        }
      ]
    },
    relatedSymbols: ['su', 'ev', 'aglamak', 'olum']
  }
];

updates.forEach(updatedSymbol => {
  const index = symbols.findIndex(s => s.slug === updatedSymbol.slug);
  if (index !== -1) {
    symbols[index] = updatedSymbol;
  } else {
    symbols.push(updatedSymbol);
  }
});

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully updated kan, aglamak, ates');
