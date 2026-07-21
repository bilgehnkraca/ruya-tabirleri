import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'yemek-yemek',
    title: 'Rüyada Yemek Yemek',
    category: 'beden',
    shortDescription: 'Rüyada yemek yemek; rızkın artmasına, helal veya haram kazanca, tatmin olmaya, açgözlülüğe ve duygusal doyuma işaret eden çok katmanlı bir semboldür.',
    content: {
      introduction: 'Beslenmek, insan hayatının en temel fiziksel ihtiyacıdır. Rüyalarda yemek yemek ise sadece fiziksel açlığın değil, ruhsal açlığın, bilgiye, sevgiye veya güce duyulan ihtiyacın da doyurulmasını sembolize eder. "Rüyada" aramaları içinde Türkiye\'de en çok aratılan sembol olması tesadüf değildir; zira yemek rüyaları rızıkla, maddi kazançla ve evdeki bereketle doğrudan ilişkilidir. Rüyada ne yenildiği (tatlı, acı, et, sebze), kiminle yenildiği ve yemeğin tadı, rüyanın size getireceği müjdenin (veya uyarının) niteliğini tamamen değiştirir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada taze, lezzetli ve güzel görünümlü bir yemek yemek, çok hayırlı bir rüyadır; kişinin eline geçecek zahmetsiz ve helal bir rızka, borçlardan kurtulmaya ve iç huzuruna delalet eder. Rüyasında çok çeşitli ve zengin bir sofrada yemek yediğini gören kişinin evine bolluk girer, misafiri eksik olmaz ve maddi sıkıntı çekmez. Tatlı yemek sevinçli haberlere, aşka ve muhabbete yorulurken; acı, ekşi veya bozuk yemek yemek hastalığa, sıkıntıya, haram lokmaya veya can sıkıcı sözler işitmeye işarettir. Rüyada doymadığını hissederek sürekli yemek yemek, dünya malına olan doyumsuzluğa (açgözlülüğe) ve kanaatsizliğe yorulur. Kalabalık bir ortamda yemek yemek, toplumsal dayanışmaya ve akrabalarla bağların güçlenmesine işarettir.',
      variations: [
        {
          title: 'Rüyada Ölüyle Birlikte Yemek Yemek',
          content: 'Eğer ölen kişi tanıdıksa ve yemek güzelse, o kişinin rüya sahibinden dua beklediğine veya rüya sahibinin çok uzun ömürlü olacağına işarettir. Ancak ölü kişinin yemeği zorla alması hastalık veya mal kaybına yorulabilir.'
        },
        {
          title: 'Rüyada Kendi Etini Yemek',
          content: 'Kişinin kendi birikimini, sermayesini yiyerek tüketeceğine veya gizli kalması gereken kendi hatalarını açığa çıkararak itibarına zarar vereceğine delalet eder.'
        },
        {
          title: 'Rüyada Elle Yemek Yemek',
          content: 'Sünnete uygun yaşamaya, kanaatkar olmaya, sadeliğe ve el emeğiyle kazanılacak temiz (helal) bir paraya yorulur.'
        },
        {
          title: 'Rüyada Yemek Ziyafeti (Daveti) Vermek',
          content: 'Cömertliğe, toplumda çok saygın bir konuma gelmeye, başkalarına yardım etmeye ve kişinin bir dileğinin gerçekleşmesi üzerine (adak niyetine) hayır işleyeceğine işarettir.'
        },
        {
          title: 'Rüyada Yemeğin İçinden Saç (Kıl) Çıkması',
          content: 'Rızkınıza karışan şüpheli bir duruma, canınızı çok sıkacak ufak ama mide bulandırıcı bir dedikoduya veya evdeki ufak tefek geçimsizliklere delalet eder.'
        }
      ],
      religiousMeaning: 'İslami rüya alimlerinden İbn Şirin\'e göre; rüyada yemek yediğini görmek rızıktır. Yemeğin sağ elle yenmesi sünnete uymaya, sol elle yenmesi ise şeytana tabi olmaya (veya günaha meyle) yorulur. Yemeğin sıcak olması berekete, çok sıcak olup dili yakması ise faize veya haram mala işarettir. Rüyada beyaz ekmekle güzel bir yemek yemek, ilim sahibi olmaya ve helal kazanca delalet eder. Rüyada yemek yiyip "Elhamdülillah" demek, kişinin şükrünün karşılığında nimetinin artacağına dair müjdedir.',
      psychologicalMeaning: 'Psikolojide yeme eylemi, "Doyum" (Gratification) ihtiyacını simgeler. Duygusal olarak aç hisseden (sevgi göremeyen) kişiler, rüyalarında sürekli olarak tıkınırcasına yemek yediklerini görebilirler. Yemek aynı zamanda enerjiyi içe almaktır; hayatınızda eksik olan bir gücü, fikri veya motivasyonu aradığınızı gösterir. Eğer yemek zehirli veya kötüyse, zihninize "toksik" düşüncelerin sızdığını (zararlı inançları hazmetmeye çalıştığınızı) ifade eder.',
      faqs: [
        {
          question: 'Rüyada hiç bilmediğim yabancı bir yemeği yemek nedir?',
          answer: 'Yeni bir işe, yabancı bir kültüre girmeye veya daha önce hiç tecrübe etmediğiniz bir kazanç kapısının aralanacağına işarettir.'
        },
        {
          question: 'Rüyada zorla yemek yedirilmesi ne anlama gelir?',
          answer: 'İstemediğiniz bir sorumluluğu üstlenmek zorunda kalacağınıza veya birinin size kendi fikirlerini zorla kabul ettirmeye (empoze etmeye) çalıştığına yorulur.'
        },
        {
          question: 'Rüyada yemek masasının devrilmesi kötü müdür?',
          answer: 'Maddi bir kaybı, israfı, rızkın tepilmesini veya ev içinde çıkacak çok büyük bir anlaşmazlığı (nimetin kadrini bilmemeyi) temsil eder.'
        }
      ],
      relatedSymbols: ['su', 'ekmek', 'et']
    }
  },
  {
    slug: 'ekmek',
    title: 'Rüyada Ekmek Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada ekmek görmek; nimetin ve rızkın en temel sembolü olup, ilme, berekete, saf inanca, eşe, yaşama sevinci ve alın terine işaret eder.',
    content: {
      introduction: 'Ekmek, insanlık kültüründe sadece bir gıda değil, yaşamın, emeğin ve nimetin kutsallığının en somut sembolüdür. Rüyalarda ekmek görmek de doğrudan rüya sahibinin yaşam enerjisini, sahip olduğu nimetleri, dini inancını ve evindeki bereketi yansıtır. Rüyada taze, sıcak ve beyaz bir ekmek görmek ile bayat, küflü veya yanmış bir ekmek görmek arasında tabir açısından çok keskin farklar bulunur. Ekmek aynı zamanda kişinin ilmini, eşini ve hayatını idame ettirme çabasını simgeler.',
      generalMeaning: 'Rüya tabircilerinin ittifakla belirttiği üzere rüyada taze, güzel kokulu ve beyaz ekmek görmek, tertemiz ve helal bir kazanca, huzurlu bir hayata, ilme ve uzun ömre işaret eder. Bekar bir kimsenin taze ekmek yemesi hayırlı ve uyumlu bir eşle evlenmeye, öğrenci için ise zihin açıklığına ve başarısına yorulur. Rüyada fırından yeni çıkmış sıcak ekmek almak, zahmetsizce elde edilecek bir mala ve sevince delalet eder. Ancak bayat, taş gibi sert veya küflenmiş ekmek görmek, maddi sıkıntıya, geçim derdine, cimriliğe veya kişinin sahip olduğu nimetlerin kıymetini bilmediği için yaşayacağı darlığa işarettir. Rüyada ekmek kırıntılarını toplamak, büyük bir kanaatkarlığa ve bu şükrün sonucunda Allah tarafından verilecek büyük bir mükafata yorulur.',
      variations: [
        {
          title: 'Rüyada Ekmek Bölüşmek (Paylaşmak)',
          content: 'Çok hayırlı bir rüyadır. Kişinin adaletli olduğuna, ortaklıklardan kazanç sağlayacağına ve sevdiği insanlarla (veya yoksullarla) rızkını paylaşarak bereketini artıracağına işarettir.'
        },
        {
          title: 'Rüyada Çöpe Ekmek Atmak',
          content: 'Nankörlüğe, israfa, dine ve nimete saygısızlık yapmaya, bu nedenle kişinin elindeki malın ziyan olacağına dair çok ciddi bir ilahi uyarıdır.'
        },
        {
          title: 'Rüyada Ekmek Yapmak (Hamur Yoğurmak)',
          content: 'Kişinin kendi alın teriyle, sabırla ve büyük bir emekle kendi servetini (geleceğini) inşa ettiğine, emeklerinin karşılığını çok fazlasıyla alacağına yorulur.'
        },
        {
          title: 'Rüyada Yanık Ekmek Görmek',
          content: 'Bir işin aceleye getirildiği için (veya dikkatsizlikten) bozulmasına, ateşli hastalıklara veya haram karışmış bir kazanca delalet eder.'
        },
        {
          title: 'Rüyada Kuşlara veya Karıncalara Ekmek Vermek',
          content: 'Sadaka vermeye, görünmez kazalardan belalardan korunmaya ve kişinin çok merhametli, yufka yürekli bir insan olduğuna işarettir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Kirmani) ekmek, saf İslam dinini, sünneti ve Kur\'an-ı Kerim\'i temsil eder. Saf ve beyaz ekmek, dinde ihlasa; yufka (ince) ekmek kısa ömre veya az kazanca yorulur. Bir kimse rüyada kendisine yarım ekmek verildiğini görse, ömrünün yarısının geçtiğine yorumlanmıştır. Fakir bir kimsenin rüyada ekmek bulması zenginliğe, zengin birinin ekmek kaybetmesi fakirliğe delalet eder. Ekmek dilenmek ise, ilim talebeleri için ilim dilenmek manasına geldiğinden hayırlı sayılır.',
      psychologicalMeaning: 'Psikolojide ekmek, temel güvenlik (Survival) ihtiyacının simgesidir. Eğer rüyanızda sürekli ekmek arıyor veya bir ekmeğe ulaşamıyorsanız, uyanık hayatta maddi kaygılar (geçim derdi) veya duygusal açlık çekiyor olabilirsiniz. Ekmek yapmak (hamur yoğurmak), zihnin yaratıcılık sürecini, bir fikri veya projeyi "yoğurarak" olgunlaştırma evresinde olduğunuzu gösterir.',
      faqs: [
        {
          question: 'Rüyada kepekli veya siyah (çavdar) ekmek görmek kötü müdür?',
          answer: 'Kötü değildir, ancak kazancın biraz meşakkatli, zorluklarla veya daha mütevazı bir yaşam tarzıyla elde edileceğine yorulur.'
        },
        {
          question: 'Rüyada fırıncıdan çok sayıda ekmek almak ne demek?',
          answer: 'Elinize geçecek yüklü miktarda bir paraya, büyük bir ihaleyi kazanmaya veya uzun süreli bir refah dönemine girmeye işarettir.'
        },
        {
          question: 'Rüyada ekmek arası bir şeyler yemek nedir?',
          answer: 'Küçük tasarruflarla büyük birikimler yapmaya, pratik zekaya ve sorunları hızlıca çözerek yoluna devam etmeye yorulur.'
        }
      ],
      relatedSymbols: ['yemek-yemek', 'su', 'hamile-olmak']
    }
  },
  {
    slug: 'et',
    title: 'Rüyada Et Görmek',
    category: 'beden',
    shortDescription: 'Rüyada et görmek; etin pişmiş mi yoksa çiğ mi olduğuna bağlı olarak zenginliğe, dedikoduya, hastalığa veya zahmetsiz kazanca işaret eden çift yönlü bir semboldür.',
    content: {
      introduction: 'Rüyalarda et, insanın hayatta elde ettiği en somut "maddi" kazancı, vücudun gücünü, şehveti ve dünyevi arzuları sembolize eder. İnsanın yaşamını sürdürmek için tükettiği en güçlü besin olan et, rüyalarda görüldüğünde tabiri en çok detaylara bağlı olan sembollerden biridir. Pişmiş et ile çiğ et arasında, helal hayvan eti ile haram hayvan eti arasında anlam bakımından devasa farklar vardır. Rüyada et, bazen gizli bir hazine, bazen de arkadan yapılan çok ağır bir dedikodu anlamına gelir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada eti iyi pişmiş, lezzetli ve sıcak olarak görmek, çok hayırlı bir rüyadır; kişinin eline hiç beklemediği bir yerden geçecek zahmetsiz, büyük bir paraya (mirasa, piyangoya) ve lüks bir hayata delalet eder. Rüyada çiğ et görmek ise (yükselen aramalardaki önemiyle birlikte) çoğunlukla olumsuz tabir edilir; çiğ et hastalığa, sıkıntıya, dedikoduya, hazmedilemeyen sözlere ve hüzne işarettir. Rüyada kasaptan et almak, bir iş için yatırım yapmaya ancak bu süreçte biraz sıkıntı çekmeye yorulur. Helal hayvanların (koyun, sığır, tavuk) etini görmek fayda ve menfaat iken, eti yenmeyen hayvanların (aslan, köpek, yılan) etini görmek düşmandan veya zalimlerden gelecek (çoğu zaman haram) mala delalet eder. Rüyada et kavurmak, kişinin sabrının sonucunda çok büyük bir ferahlığa kavuşacağını gösterir.',
      variations: [
        {
          title: 'Rüyada Çiğ Et Görmek ve Yemek',
          content: 'Çiğ et görmek kötü habere, çiğ et yemek ise birinin arkasından çok ağır gıybet (dedikodu) yapmaya, iftiraya ortak olmaya veya haram mala el uzatmaya yorulur.'
        },
        {
          title: 'Rüyada İnsan Eti Yemek',
          content: 'İslami tabirlere göre insan eti yemek, açıkça gıybet etmektir ("Hucurat Suresi"nde belirtildiği gibi). Birinin arkasından konuşmaya ve o kişinin hakkına girmeye delalet eder.'
        },
        {
          title: 'Rüyada Kuş Eti Yemek',
          content: 'Kuşlar gökyüzünü temsil ettiği için kuş eti yemek; zahmetsiz, asil, tertemiz bir kazanca, seyahatten gelecek mala ve çok yüksek bir rütbeye yorulur.'
        },
        {
          title: 'Rüyada Et Dağıtmak (Fakirleri Doyurmak)',
          content: 'Sıkıntıların sadaka ve iyiliklerle def edileceğine, kişinin malının zekatını verdiğine ve toplumda çok hayırsever, sevilen biri olacağına işarettir.'
        },
        {
          title: 'Rüyada Kendi Etinin Kesildiğini Görmek',
          content: 'Maddi bir kayba, vücutta zayıflığa (hastalığa), veya bir akrabanın haksızlığı yüzünden kişinin malından bir parça koparılmasına yorulur.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre pişmiş et, kolay kazanılan mal, çiğ et ise hastalık ve üzüntüdür. Domuz eti açıkça haram maldır. Nablusi\'ye göre rüyada sığır veya koyun eti görmek, mal ve nimettir. Rüyada kurban eti görmek (özellikle Kurban bayramında değilken bile), kişinin Allah\'a yakınlaşacağına, adaklarının kabul olacağına ve esaretten/borçtan kurtulacağına delalet eder. Balık eti, helal, tertemiz, bol ve sürekli rızıktır.',
      psychologicalMeaning: 'Psikolojide et (özellikle kanlı çiğ et), vahşi içgüdüleri, hayatta kalma savaşını, cinselliği ve insanın en ilkel arzularını sembolize eder. Çiğ et gören kişi, uyanık hayatta öfkesini kontrol edemediği veya tamamen içgüdüsel (hayvani) hareket ettiği bir dönemden geçiyor olabilir. Pişmiş et ise bu dürtülerin terbiye edildiğini, "medenileştiğini" ve kişinin enerjisini yapıcı bir şekilde kullandığını gösterir.',
      faqs: [
        {
          question: 'Rüyada etin kurtlanması veya bozulması nedir?',
          answer: 'Kazancınıza karışan faize, harama veya çok değer verdiğiniz bir malın (araba, ev vb.) ziyan olmasına, değer kaybetmesine işarettir.'
        },
        {
          question: 'Rüyada sucuk, pastırma gibi işlenmiş et görmek ne demek?',
          answer: 'Uzun vadeli yatırımlara, saklanan bir mala (birikime) ve zor günler için hazırlık yapmaya yorulur.'
        },
        {
          question: 'Rüyada et yemeği (etli yemek) yapmak nedir?',
          answer: 'Ailenizin refahı için gösterdiğiniz çabaya, misafir ağırlayacağınıza ve hanenize girecek berekete delalet eder.'
        }
      ],
      relatedSymbols: ['yemek-yemek', 'kan', 'koyun']
    }
  },
  {
    slug: 'yumurta',
    title: 'Rüyada Yumurta Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada yumurta görmek; doğurganlığa, potansiyele, evlada, kolay elde edilecek mala ve bazen de sırların gizlendiğine işaret eder.',
    content: {
      introduction: 'Yumurta, kırılabilir yapısı ve içinden yeni bir yaşam (civciv) çıkması nedeniyle tüm kültürlerde potansiyelin, doğurganlığın, yeni başlangıçların ve zenginliğin evrensel sembolüdür. Rüyalarda yumurta görmek, rüya sahibinin henüz "kuluçka" aşamasında olan fikirlerini, sakladığı sırları veya aileye katılacak yeni bir bebeği (özellikle kadınları/kız çocuklarını) temsil eder. Rüyada yumurtanın taze, kırık, çok sayıda veya çürük olması rüyanın manasını farklılaştırır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada çok sayıda (sepet dolusu) yumurta görmek, bekar kişiler için evliliğe, evli kişiler için ise çok çocuğa veya ticarette büyük bir kazanca (zenginliğe) delalet eder. Rüyasında haşlanmış veya pişmiş taze yumurta yediğini gören kişi, zahmet çekmeden kolay yoldan helal bir para kazanır. Çiğ yumurta içmek (veya yemek) genellikle haksız kazanca (haram yemeye) veya can sıkıcı dedikodulara yorulur. Rüyada yumurtanın kırılması, hamile kadınlar için maalesef düşük riskine veya bir hayal kırıklığına işarettir. Bekar bir kızın rüyasında yumurta kırması ise bekaretin veya evliliğin sembolü sayılabilir. Rüyada yumurta bulmak veya almak, kişinin karşısına çıkacak yeni ve çok kârlı bir fırsata yorulur.',
      variations: [
        {
          title: 'Rüyada Tavuğun Yumurtladığını Görmek',
          content: 'Evinizde bir kadının hamile kalmasına, yeni bir çocuğa veya yatırımlarınızın tam da beklediğiniz gibi "meyve/ürün" vermesine (kâra geçmeye) işaret eder.'
        },
        {
          title: 'Rüyada Çürük (Bozuk) Yumurta Görmek',
          content: 'Dışarıdan güzel ve kârlı görünen bir işin içyüzünün çok karanlık olduğuna, hayal kırıklığına, veya görünüşü iyi huyu kötü bir eşe delalet eder.'
        },
        {
          title: 'Rüyada Çift Sarılı Yumurta Görmek',
          content: 'Beklentilerin iki katına çıkacağına, ikiz çocuğa, çifte şansa ve aynı anda kapınızı çalacak iki büyük kısmete (iş veya nasip) yorulur.'
        },
        {
          title: 'Rüyada Yumurta Kabuğu Görmek',
          content: 'Özden ziyade şekle önem vermeye, gösterişe veya rüya sahibinin geçmişte kalmış (içi boşalmış) anılara takılı kaldığına işarettir.'
        },
        {
          title: 'Rüyada Renkli (Boyalı) Yumurta Görmek',
          content: 'Festivallere, eğlenceli ve renkli insanlarla tanışmaya, kültürel etkinliklere ve hayatınıza girecek neşeli sürprizlere işaret eder.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre rüyada yumurta görmek; kadınlara, cariyelere, saklanmış gümüş veya altın paralara delalet eder. Çünkü yumurta değerli bir şeyi içinde saklar. Kur\'an-ı Kerim\'de cennet kadınları "saklı yumurtalara" benzetilmiştir (Saffat: 49). Nablusi\'ye göre rüyada birinin kendisine yumurta verdiğini görmek, soylu ve hayırlı bir evlada işarettir. Rüyada yumurtanın üzerinde kuluçkaya yatmak (oturmak), bekar bir kadın için evlenip yuva kurmaya yorulur.',
      psychologicalMeaning: 'Psikolojide yumurta, "Embriyo" (fikrin doğuşu) ve kişinin henüz dışa vurmadığı potansiyelidir. Rüyanızda bir yumurtayı dikkatle koruduğunuzu görmek, kırılgan bir yeteneğinizi veya çok sevdiğiniz bir fikri dış dünyanın eleştirilerinden korumaya çalıştığınızı gösterir. Kırık yumurta görmek, güven zedelenmesini, korunmasızlığı ve "kabuğundan zorla çıkarılmış" olmayı simgeler.',
      faqs: [
        {
          question: 'Rüyada sucuklu veya pastırmalı yumurta yemek ne demek?',
          answer: 'Birkaç farklı güzel olayın birleşeceğine, keyfe, ağız tadına ve kişinin kazancını afiyetle (ve lüks içinde) yiyeceğine yorulur.'
        },
        {
          question: 'Rüyada devekuşu veya büyük bir yumurta görmek nedir?',
          answer: 'Beklentilerinizin çok ötesinde devasa bir sürprizle karşılaşacağınıza veya çok büyük (çaplı) bir projeye imza atacağınıza işarettir.'
        },
        {
          question: 'Rüyada yüzüne yumurta fırlatıldığını görmek ne anlama gelir?',
          answer: 'Toplum önünde küçük düşürülme korkusuna, haksız bir eleştiriye veya birilerinin sizi kasıtlı olarak kışkırtmaya çalıştığına delalet eder.'
        }
      ],
      relatedSymbols: ['tavuk', 'bebek', 'yemek-yemek']
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
