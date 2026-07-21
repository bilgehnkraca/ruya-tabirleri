import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'tabut',
    title: 'Rüyada Tabut Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada tabut görmek; sanılanın aksine mülke, zenginliğe, gizlenen sırlara, uzun ömre, galibiyete ve zorluklardan sonra gelecek büyük bir ferahlığa işaret eder.',
    content: {
      introduction: 'Tıpkı "ölüm" sembolü gibi, tabut da rüyalarda görüldüğünde uyanan kişiyi dehşete düşüren, gün boyu etkisinden çıkılamayan korkutucu bir imgedir. Ancak rüya tabirlerinin gizemli dünyasında tabut, ölümün değil, "muhafazanın" (korumanın), mülkün ve değişimin sembolüdür. Tabut, değerli bir şeyin saklandığı bir sandık gibidir. Rüyasında tabut gören kişinin hayatında sakladığı büyük sırlar, biriktirdiği mallar veya üstesinden gelmesi gereken büyük dönüşümler vardır. Rüyada boş tabut görmek, tabutun içinde tanıdık birini görmek veya tabut taşımak rüyanın tamamen farklı şekillerde yorumlanmasını sağlar.',
      generalMeaning: 'Rüya tabircilerine (özellikle İslami alimlere) göre rüyada tabut görmek, çok büyük bir mülke (eve veya arabaya), büyük bir servete ve kişinin makamca yükseleceğine delalet eder. Rüyasında kendisi için bir tabut yapıldığını veya satın alındığını gören kişinin rızkı artar, işleri yoluna girer. Rüyada bir tabutun içinde yattığını görmek, kişinin düşmanlarından korkusunun kalmayacağına, ilahi bir koruma (muhafaza) altına gireceğine ve borçlardan kurtulacağına yorulur. Boş bir tabut görmek, içsel bir boşluğa, boşa çıkan beklentilere veya kişinin hayatındaki bazı konularda (ilişkilerde) hissettiği sonun yaklaştığına işaret eder. Tabutun uçtuğunu veya havada asılı durduğunu görmek ise, gurbette olan veya o bölgede tanınan önemli bir zatın vefat haberine yorulur.',
      variations: [
        {
          title: 'Rüyada Kendi Tabutunu Taşımak',
          content: 'Kendi yükünü kendin çekeceğine, kimseye muhtaç olmadan çok büyük işler başaracağına ve sonunda adını (şanını) çok yükseklere taşıyacağına işarettir.'
        },
        {
          title: 'Rüyada Tabutun İçinden Canlı Çıkmak',
          content: 'Zorlukların, "öldüm bittim" denilen anların ardından gelen yeniden doğuşa, umutların tekrar yeşermesine ve çok şaşırtıcı bir kurtuluşa (ikinci şansa) delalet eder.'
        },
        {
          title: 'Rüyada Tabut Almak veya Satmak',
          content: 'Dünya malına, büyük bir ihaleye girmeye veya kişinin ticaret hayatında çok büyük (ve riskli) yatırımlar yaparak muazzam bir gelir elde edeceğine yorulur.'
        },
        {
          title: 'Rüyada Tabutun İçinde Tanıdık Birini Görmek',
          content: 'Eğer tabuttaki kişi sağ ise, o kişinin makamca yükseleceğine, zenginleşeceğine veya çok büyük bir ev/mülk sahibi olacağına dair çok hayırlı bir müjdedir.'
        },
        {
          title: 'Rüyada Tabutun İçinde Altın veya Para Görmek',
          content: 'Kazanılacak büyük bir mirasa, beklenmedik bir yerden (belki de yıllardır unutulmuş bir haktan) ele geçecek toplu mala işaret eder.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Rüyada tabut görmek, büyük bir devlete (zenginliğe), yüce bir makama ve düşmana galip gelmeye işarettir. Rüyasında bir tabutun içinde taşındığını gören kişi, insanların omuzlarında (saygıyla) yükselir ve yönetici konumuna gelir." Ayrıca Kur\'an kıssalarında Tâlût\'a verilen "Tabut" (Ahit Sandığı), içi sekine (huzur) dolu bir güven ve iktidar sembolüdür. Bu nedenle rüyada tabut görmek, kalbe inecek ilahi bir güvene ve korkulardan emin olmaya yorulur.',
      psychologicalMeaning: 'Psikolojide tabut, "Kapanış" (Closure) arketipidir. Hayatınızdaki bir bölümün (bir ilişkinin, bir işin veya eski bir inancınızın) artık tamamen öldüğünü ve onu "gömme" (geride bırakma) zamanının geldiğini gösterir. Ayrıca tabut, klostrofobik bir alanı simgelediği için, kişinin uyanık hayatta kendini bir durumun (işin veya evliliğin) içinde kapana kısılmış, nefes alamıyor gibi hissetmesinin de rüyadaki tezahürü olabilir.',
      faqs: [
        {
          question: 'Rüyada bebek tabutu görmek ne anlama gelir?',
          answer: 'Genellikle yarım kalmış (doğmadan ölmüş) hayallere, çok emek verilen bir projenin iptal olmasına veya erken gelen bir hayal kırıklığına işaret eder.'
        },
        {
          question: 'Rüyada açık tabut görmek nedir?',
          answer: 'Henüz sonuçlanmamış bir meseleye, içinizde kapatamadığınız bir yaraya veya hala geri dönüşü olabilecek bir bitiş kararına yorulur.'
        },
        {
          question: 'Rüyada eski ve kırık bir tabut görmek kötü müdür?',
          answer: 'Elbette, eski düşmanlıkların tekrar gün yüzüne çıkmasına veya uzun süredir saklanan bir sırrın artık gizlenemeyeceğine (kırılıp döküleceğine) delalet eder.'
        }
      ],
      relatedSymbols: ['olum', 'mezarlik', 'altin']
    }
  },
  {
    slug: 'yuzmek',
    title: 'Rüyada Yüzmek',
    category: 'doga',
    shortDescription: 'Rüyada yüzmek; ilim denizine dalmaya, hayattaki zorluklarla mücadele etmeye, hedeflere ulaşmaya, ruhsal arınmaya ve bazen de bilinmezliğe karşı verilen savaşa işaret eder.',
    content: {
      introduction: 'Su, rüyalarda bilinçaltının, duyguların ve hayatın kendisinin en net sembolüdür. Rüyada yüzmek ise, rüya sahibinin kendi duygularıyla, çevresiyle ve hayatın zorluklarıyla nasıl başa çıktığının dinamik bir göstergesidir. Suda rahatça, suyun yüzeyinde süzülerek yüzmek ile dalgalarla boğuşarak çırpınmak arasında tabir açısından uçurumlar vardır. Yüzülen yerin (deniz, havuz, nehir veya bulanık bir göl) temizliği, derinliği ve dalga boyu, rüyanın mesajını şifreleyen ana unsurlardır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada temiz, berrak ve sakin bir suda rahatça yüzmek, kişinin hedeflerine hiçbir engelle karşılaşmadan, akıcı bir şekilde ulaşacağına, içsel huzura ve büyük bir başarıya delalet eder. Rüyada denizde yüzmek, genellikle devlet kapısında veya çok büyük bir kurumda işe girmeye, ilim öğrenmeye ve arzuların genişliğine yorulur. Ancak dalgalı, fırtınalı ve bulanık bir suda yüzmek; kişinin uyanık hayatta devasa sorunlarla, borçlarla veya hastalıklarla kıyasıya bir mücadele içinde olduğuna (ayakta kalmaya çalıştığına) işaret eder. Suda boğulma tehlikesi atlatıp kıyıya çıkmak, çok büyük bir felaketin (veya mahkemenin, iflasın) eşiğinden dönerek kurtuluşa ermek demektir. Havuzda yüzmek ise, kişinin kendi sınırları içinde, risk almadan, güvenli bir alanda kaldığını gösterir.',
      variations: [
        {
          title: 'Rüyada Nehirde (Akarsuda) Akıntıya Karşı Yüzmek',
          content: 'Toplumun veya ailenin genel görüşlerine karşı gelmeye, zor olanı seçmeye, isyankar bir tutuma ve inatçı bir şekilde kendi doğrularını savunmaya yorulur.'
        },
        {
          title: 'Rüyada Çamurlu veya Bulanık Suda Yüzmek',
          content: 'Günaha girmeye, iftiraya uğramaya, şüpheli (haram) kazanca, dedikoduların ortasında kalmaya ve hastalıklara işaret eden olumsuz bir rüyadır.'
        },
        {
          title: 'Rüyada Suyun Altında (Dalarak) Yüzmek',
          content: 'Bilinmeyeni araştırmaya, derin bir ilme sahip olmaya, sırlara vakıf olmaya veya herkesten gizlenen bir gerçeği gün yüzüne çıkarmak için çabalamaya delalet eder.'
        },
        {
          title: 'Rüyada Okyanusta Yüzmek',
          content: 'Hedeflerin, hayallerin ve ufkun çok geniş olduğuna, uluslararası işlere, büyük bir şöhrete ve sınır tanımayan bir özgüvene işarettir.'
        },
        {
          title: 'Rüyada Kıyafetleriyle Yüzmek',
          content: 'Yüklerinden, geçmişinden veya sırlarından kurtulamadan (onları da peşinden sürükleyerek) yeni bir hayata adım atmaya çalışmaya ve zorlanmaya yorulur.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre rüyada denizde yüzmek, ilim talebeleri için alim olmaya, tüccarlar için zenginliğe, yöneticiler için ise adaletle hükmetmeye yorulur. Bir kimse rüyada yüzerek denizin veya nehrin karşı kıyısına geçtiğini görse, dünya ve ahiret sıkıntılarından kurtulur, selamate erer. Nablusi ise, bir denizde yüzüp boğulduğunu (ama ölmediğini) görenin dünya işlerine (mal mülk sevdasına) tamamen dalacağına, ahireti unutacağına işaret ettiğini belirtir.',
      psychologicalMeaning: 'Yüzmek, psikolojik olarak insanın "duygusal zekası" ile ilgilidir. Suda rahat yüzen kişi, duygularını iyi yöneten, stresle başa çıkabilen ve uyumlu (resilient) bir karaktere sahiptir. Çırpınarak yüzen kişi ise uyanık hayatta "boğulduğunu" hisseder; belki iş yükü, belki de toksik bir ilişki onu dibe çekmektedir. Su, anne karnındaki amniyon sıvısını da simgelediğinden, yüzmek bilinçaltında anneye, kökenlere ve güvende olma ihtiyacına duyulan derin özlemi de temsil eder.',
      faqs: [
        {
          question: 'Rüyada yüzme bilmediği halde yüzdüğünü görmek nedir?',
          answer: 'Hiç tecrübeniz olmayan, bilmediğiniz bir işe (veya evliliğe) cesaretle atılacağınıza ve içgüdülerinizle başarılı olacağınıza işarettir.'
        },
        {
          question: 'Rüyada karanlıkta (gece) yüzmek tehlikeli midir?',
          answer: 'Büyük bir belirsizliğin içine girildiğine, sırlarla dolu gizli işler çevrildiğine veya sonucunu kestiremediğiniz bir yolda körü körüne ilerlediğinize yorulur.'
        },
        {
          question: 'Rüyada kışın soğuk suda yüzmek ne anlama gelir?',
          answer: 'Zorlu şartlara göğüs germeye, nefsi terbiye etmeye veya sağlığınıza dikkat etmeniz gereken riskli bir döneme işaret eder.'
        }
      ],
      relatedSymbols: ['su', 'deniz', 'balik']
    }
  },
  {
    slug: 'anahtar',
    title: 'Rüyada Anahtar Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada anahtar görmek; sırların çözülmesine, kapanmış kapıların açılmasına, yeni fırsatlara, ferahlığa, duaların kabulüne ve ilim sahibi olmaya işaret eder.',
    content: {
      introduction: 'Anahtar, insanlık tarihi boyunca gizemin, çözümün, yetkinin ve kapalı kapıları (fırsatları) açmanın evrensel sembolü olmuştur. Bir yere giriş iznini, mülkiyeti (ev veya araba) ve "şifreyi" temsil eder. Rüyalarda anahtar görmek, çoğu zaman rüya sahibinin hayatındaki kilitlenmiş (çözümsüz kalmış) bir sorunun çözümünü bulacağına, yeni bir döneme adım atacağına işaret eder. Rüyada anahtarı kaybetmek, anahtarla kapıyı açmak veya kırık bir anahtar görmek, rüyanın kişinin kaderiyle ilgili verdiği en önemli mesajları içerir.',
      generalMeaning: 'Rüya tabircilerinin ortak görüşüne göre rüyada anahtar görmek; bol rızık, bereket, hacca gitmek, ilim, evlat ve sıkıntılardan kurtulmaktır. Rüyasında elinde birçok anahtar (anahtarlık) bulunduğunu gören kişi, büyük bir makama (yönetime) gelir, geniş yetkilere sahip olur ve rızkı hiç beklemediği yerlerden açılır. Bir kapıyı anahtarla kolayca açtığını görmek, duaların Allah katında kabul olduğuna, tıkalı işlerin (mahkeme, ticaret vb.) aniden açılacağına ve kişinin büyük bir zafere ulaşacağına delalet eder. Ancak anahtarın kapıyı açmaması veya kilide uymaması, kişinin yanlış yolda ilerlediğine, zorlukların bir süre daha devam edeceğine yorulur. Rüyada anahtar kaybetmek ise, fırsatları kaçırmaya, desteksiz kalmaya, iş hayatında güven ve itibar kaybına işaret eder.',
      variations: [
        {
          title: 'Rüyada Altın Anahtar Görmek',
          content: 'Zenginliğe, çok yüksek bir mevkiye ulaşmaya ve en zor (açılmaz denilen) kapıların, güçlü insanların desteğiyle (veya büyük bir servetle) kolayca açılacağına işarettir.'
        },
        {
          title: 'Rüyada Kırık Anahtar Görmek',
          content: 'Maalesef olumsuz bir semboldür. Boşa çıkan umutlara, işlerin yarıda kalmasına, verilen bir sözün tutulamayacağına veya çözüme çok yaklaşmışken yaşanacak büyük bir hüsrana yorulur.'
        },
        {
          title: 'Rüyada Birinden Anahtar Almak',
          content: 'Size verilecek çok önemli bir sırra, devredilecek bir mirasa/yetkiye veya uyanık hayatta bir kişinin sizin hayatınıza girmesi (kalbinizin kapısını açması) için ona izin vermenize delalet eder.'
        },
        {
          title: 'Rüyada Anahtar Bulmak',
          content: 'Hiç umulmadık bir anda karşınıza çıkacak mükemmel bir fırsata (yeni bir iş, yeni bir ev veya araba), talihin yüzünüze gülmesine işarettir.'
        },
        {
          title: 'Rüyada Üzerinde Anahtar Deliği Olan Kapı Görmek',
          content: 'Bir gizemi çözmeye çok yaklaştığınıza, veya birinin sizi (hayatınızı) uzaktan gizlice izlediğine (röntgenci bir göze) işaret edebilir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde anahtar, "Miftah" olarak geçer. Peygamber Efendimiz (s.a.v) bir hadisinde "Sabır, ferahlığın (cennetin) anahtarıdır" buyurmuştur. Bu bağlamda rüyada anahtar görmek, sabredilen bir dertten sonra gelecek büyük bir selamete yorulur. İbn Şirin\'e göre anahtar görmek; duaların kabulü, ilim, düşmana galibiyet ve rızıktır. Rüyada cennetin anahtarını elinde tuttuğunu gören kişi hacca gider veya dininde çok yüksek (salih) bir dereceye ulaşır. Anahtarsız bir kilit görmek ise cimriliğe ve kalbin katılığına delalet eder.',
      psychologicalMeaning: 'Psikolojide (özellikle Jungyen analizde) anahtar, bilinçaltına veya zihnin kilitli odalarına giden yolu temsil eder. Kişinin yıllarca bastırdığı (kilitlediği) bir travmayı çözme (açma) isteğini gösterir. Ayrıca anahtar, kontrol (yetki) duygusudur. Anahtarını kaybeden biri, uyanık hayatında kontrolü kaybettiğini, "hayatının direksiyonunda" başkalarının olduğunu hisseder. Freudyen yaklaşıma göre ise kilit ve anahtar, açıkça cinselliğin (ve cinsel birleşmenin) fallik sembollerindendir.',
      faqs: [
        {
          question: 'Rüyada eve girememek (anahtarı unutmak) ne demek?',
          answer: 'Kendi içinize dönmekte zorlandığınıza, ailenizle aranızda iletişim kopukluğu olduğuna veya kendi "merkezinizden" uzaklaştığınıza işarettir.'
        },
        {
          question: 'Rüyada kocaman (dev) bir anahtar görmek nedir?',
          answer: 'Hayatınızda yapacağınız çok büyük ve köklü bir değişikliğe, büyük bir sırrı (veya çok önemli bir iş kapısını) aralamaya yorulur.'
        },
        {
          question: 'Rüyada anahtarı bilerek suya (denize) atmak kötü müdür?',
          answer: 'Bir sırrı sonsuza dek saklamaya, geçmişe tamamen sünger çekmeye ve bir konuyu (ilişkiyi) bir daha asla açılmamak üzere geri dönülmez şekilde bitirmeye işaret eder.'
        }
      ],
      relatedSymbols: ['ev', 'araba-kullanmak', 'altin']
    }
  }
];

const currentSlugs = symbols.map(s => s.slug);
for (const s of newSymbols) {
  if (!currentSlugs.includes(s.slug)) {
    symbols.push(s);
  }
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully added: ' + newSymbols.map(s => s.slug).join(', '));
