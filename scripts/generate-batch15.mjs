import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'cig-et',
    title: 'Rüyada Çiğ Et Görmek',
    category: 'beden',
    shortDescription: 'Rüyada çiğ et görmek; genellikle arkadan yapılan ağır dedikoduya, sıkıntı ve hüzne, haram mala veya beklenmedik bir sağlık sorununa işaret eden uyarıcı bir rüyadır.',
    content: {
      introduction: 'İnsanoğlu için etin pişirilmesi medeniyetin, ateşin ve emeğin sembolüyken; çiğ et daha çok ilkelliği, vahşeti, henüz olgunlaşmamış (pişmemiş) olayları ve çiğ (kötü) niyetleri temsil eder. Rüyalarda et görmek genel anlamda "mal ve kazanç" ile ilişkili olsa da, etin çiğ olması tabiri tamamen tersine çevirerek olumsuz ve uyarıcı bir niteliğe büründürür. Rüyada çiğ et görmek, rüya sahibinin veya çevresindeki insanların henüz "hazmedemediği" bir meselenin, öfkenin veya dedikodunun ortasında kalacağına işaret eder. Kanlı çiğ et ile temiz çiğ et arasında da tabir farkları bulunur.',
      generalMeaning: 'Rüya tabircilerinin büyük bir çoğunluğuna (özellikle İslami alimlere) göre rüyada çiğ et görmek, kesinlikle hüzün, keder, hastalık ve dedikodudur. Rüyasında evinde çiğ et bulunduğunu gören kişinin hanesine haram bir mal, faiz veya şüpheli bir kazanç girebilir. Rüyada çiğ et yediğini görmek ise, Hucurat Suresi\'ndeki "ölü kardeşinin etini yemek" benzetmesinden yola çıkılarak, çok büyük bir iftiraya, gıybete (dedikoduya) ortak olmaya ve birinin hakkına girmeye delalet eder. Rüyasında kasaptan taze, kanlı bir çiğ et alıp eve getirdiğini gören kişi, kendi eliyle evine bir sıkıntı veya anlaşmazlık taşır. Ancak eti alıp hemen pişirdiğini görmek, bu sıkıntıların akıl yoluyla, sabırla ve iyi niyetle çok çabuk çözüleceğine işarettir.',
      variations: [
        {
          title: 'Rüyada Kanlı Çiğ Et Görmek',
          content: 'Kan, rüyayı "bozar" inancının yanı sıra, açık bir haksızlığa, çok şiddetli bir kavgaya veya kişinin (veya yakınlarından birinin) yaşayacağı ani bir sağlık problemine yorulur.'
        },
        {
          title: 'Rüyada Çiğ Kıyma Görmek',
          content: 'Parçalanmış ve ufalanmış dertlere, küçük ama sürekli can sıkan dedikodulara, akrabalar arasında yaşanacak ve herkesin birbirine gireceği miras/para tartışmalarına işarettir.'
        },
        {
          title: 'Rüyada Birine Çiğ Et Vermek (İkram Etmek)',
          content: 'Rüya sahibinin, farkında olmadan veya bilerek, başka bir insana zarar vereceğine, onu haksız bir işe sürükleyeceğine veya onun arkasından laf taşıyacağına delalet eder.'
        },
        {
          title: 'Rüyada Çiğ Et Kesmek (Doğramak)',
          content: 'Mevcut bir sorunu çözmek için parçalara ayırmaya (analiz etmeye) çalışmaya, zorlu bir işe girişmeye veya başkalarına ait bir malı haksızca pay etmeye yorulur.'
        },
        {
          title: 'Rüyada Çiğ Tavuk Eti Görmek',
          content: 'Kırmızı ete göre nispeten daha az sıkıntılıdır; ancak yine de kadınlar arasında geçecek asılsız dedikodulara, asabiyete ve kısa sürecek bir can sıkıntısına işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre çiğ et, her halükarda üzüntü ve kederdir. Bir kimse rüyada çiğ et yediğini görse, o kişiye (veya çevresine) bir felaket isabet eder. Nablusi, çiğ eti "gıybet ve yalan" olarak tabir eder. Rüyada eti yenmeyen bir hayvanın (aslan, domuz, köpek) çiğ etini görmek, düşmandan gelecek çok haram ve tehlikeli bir mala delalet eder. Rüyada çiğ et görmek aynı zamanda kişinin nefsine yenik düşerek "çiğ" hareketler yapacağına (olgunluktan uzaklaşacağına) dair bir ikazdır.',
      psychologicalMeaning: 'Psikolojide (özellikle evrimsel psikoloji bağlamında) çiğ et, insanın vahşi doğasını, avlanma içgüdüsünü ve ilkel arzularını (saldırganlık ve cinsellik) sembolize eder. Rüyasında kanlı çiğ et gören biri, uyanık hayatında öfkesini veya ilkel dürtülerini bastırmakta zorlanıyor, adeta "kan kokusu almış" bir şekilde saldırgan veya aşırı hırslı hissediyor olabilir. Ayrıca çiğ et, "hazmedilmesi çok zor olan" bir gerçeğin, yaşanan ağır bir travmanın metaforik bir yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada çiğ etin koktuğunu (bozulduğunu) görmek nedir?',
          answer: 'Elinize geçen şüpheli bir kazancın size hayır getirmeyeceğine, sırların çok kötü (mide bulandırıcı) bir şekilde açığa çıkacağına işarettir.'
        },
        {
          question: 'Rüyada köpeklere çiğ et atmak ne anlama gelir?',
          answer: 'Size düşmanlık eden, açgözlü insanlara bir "sus payı" vereceğinize, rüşvetle veya menfaatle birilerini kendinizden uzak tutmaya çalıştığınıza yorulur.'
        },
        {
          question: 'Rüyada çiğ eti çöpe atmak kötü müdür?',
          answer: 'Aksine, bu çok hayırlıdır. Hayatınızdaki haramdan, dedikodudan ve beladan tamamen kurtulduğunuza, o pisliği hayatınızdan temizlediğinize delalet eder.'
        }
      ],
      relatedSymbols: ['et', 'kan', 'domuz']
    }
  },
  {
    slug: 'cilek',
    title: 'Rüyada Çilek Görmek',
    category: 'doga',
    shortDescription: 'Rüyada çilek görmek; taze bir aşka, beklenmedik ve tatlı sürprizlere, güzelliğe, flörte ve ağız tadının yerinde olduğu mutlu günlere işaret eder.',
    content: {
      introduction: 'Çilek, parlak kırmızı rengi, kalbe benzeyen şekli ve cezbedici kokusuyla tüm dünyada romantizmin, sevginin, güzelliğin ve baharın (uyanışın) en güçlü sembollerinden biridir. Rüyalarda mevsiminde, taze ve tatlı bir çilek görmek, rüya sahibinin hayatına girecek çok renkli, tutkulu ve neşeli olayların müjdecisidir. Çilek, genellikle maddi zenginlikten ziyade "duygusal" zenginliği, aşkı ve mutluluğu temsil eder. Ancak çileğin çürük olması veya kışın görülmesi rüyanın manasını değiştirir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada kırmızı, iri ve tatlı bir çilek yediğini görmek, bekar kişiler için ayakları yerden kesecek taze bir aşka, çok mutlu olacakları bir izdivaca (evliliğe) ve tutkuya delalet eder. Evli kişiler için çilek görmek, eşler arasındaki soğukluğun bitmesine, ilişkinin ilk günkü heyecanına dönmesine ve muhabbetin artmasına yorulur. Rüyada bir tarladan veya bahçeden kendi elleriyle çilek topladığını gören kişi, emek verdiği bir ilişkiden veya hobiden çok büyük manevi zevk alır, hayatına neşe katar. Rüyada çilek ikram edilmesi veya satın alınması, yeni dostluklara, sevinçli haberlere ve tatlı dilli insanlara işarettir. Mevsimsiz görülen çilek ise, gerçek olmayacak kadar güzel görünen, aceleyle alınmış duygusal kararlara (heveslere) yorulabilir.',
      variations: [
        {
          title: 'Rüyada Çürük veya Ekşi Çilek Görmek',
          content: 'Aşk hayatında yaşanacak hayal kırıklığına, aldatılmaya veya dışarıdan çok güzel görünen bir insanın/ilişkinin içinin (karekterinin) bozuk olduğuna işaret eder.'
        },
        {
          title: 'Rüyada Çilek Reçeli Yapmak (veya Görmek)',
          content: 'Bu tatlı günleri geleceğe taşımaya, aile içi mutluluğun çok uzun ömürlü olacağına ve mutlu anıları özenle "muhafaza etmeye" yorulur.'
        },
        {
          title: 'Rüyada Birine Çilek Yedirmek',
          content: 'Birinin kalbini kazanmaya, onu tatlı sözlerle ikna etmeye veya uyanık hayatta o kişiye karşı çok yoğun duygular (şefkat, aşk) beslemeye delalet eder.'
        },
        {
          title: 'Rüyada Beyaz (Ham) Çilek Görmek',
          content: 'Henüz olgunlaşmamış bir aşka veya işe, duygularınızın karşılık bulması için biraz daha zamana ve sabra ihtiyacınız olduğuna işarettir.'
        },
        {
          title: 'Rüyada Dev (Çok İri) Çilek Görmek',
          content: 'Beklentilerinizin çok ötesinde, size kendinizi çok özel ve şanslı hissettirecek kocaman bir sevgiye veya sürprize yorulur.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabirlerinde çilek (veya genel olarak tatlı orman meyveleri) doğrudan cennet nimetleri, helal rızık ve eşler arasındaki "meveddet" (şefkat) olarak yorumlanır. Nablusi\'ye göre rüyada kırmızı ve tatlı meyveler yediğini gören kişinin dini ve ahlakı güzel olur, çevresine tatlı sözler söyler (kalp kırmaz). Hamile bir kadının çilek görmesi, genellikle yüzü çok güzel, şirin bir kız çocuğuna (veya çok sevilecek bir evlada) delalet eder.',
      psychologicalMeaning: 'Psikolojide çilek, kalp şekli ve kırmızılığıyla "Eros" (Yaşam enerjisi ve aşk) arketipidir. Rüyasında iştahla çilek yediğini gören kişi, uyanık hayatta romantizme, şımartılmaya, tensel temasa ve estetik (güzellik) duygusuna "açtır" veya tam tersine bu duyguları doyasıya yaşıyordur. Çilek aynı zamanda çocuksu bir neşenin ve "hayatın tadını çıkarmanın" bilinçaltındaki yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada çilek tarlası görmek nedir?',
          answer: 'Seçeneklerinizin çok bol olduğuna, çevrenizdeki insanların sizi çok sevdiğine ve girdiğiniz her ortamda neşe saçtığınıza işarettir.'
        },
        {
          question: 'Rüyada çilek suyu (şerbeti) içmek ne anlama gelir?',
          answer: 'Hastalara şifa, dertlilere deva, aşıklara vuslat (kavuşma) anlamına gelir. Ruhun ferahlamasıdır.'
        },
        {
          question: 'Kışın ortasında kar üstünde çilek görmek ne demektir?',
          answer: 'En umutsuz, en zor anınızda (kış gibi soğuk bir dönemde) bile içinizi ısıtacak, adeta mucize gibi bir gelişme yaşanacağına yorulur.'
        }
      ],
      relatedSymbols: ['kirmizi-renk', 'kiraz', 'dugun']
    }
  },
  {
    slug: 'anne',
    title: 'Rüyada Anne Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada anne görmek; şefkate, ilahi korumaya, işlerin yoluna girmesine, koşulsuz sevgiye, büyük bir berekete ve edilen duaların kabulüne işaret eder.',
    content: {
      introduction: 'Anne; yeryüzündeki en saf sevginin, fedakarlığın, sığınağın ve şefkatin sembolüdür. Doğumdan itibaren insan psikolojisinin merkezinde yer alan anne figürü, rüyalarda görüldüğünde her zaman derin ve sarsıcı bir anlam taşır. Rüyada anneyi sağ veya ölmüş olarak görmek, annenin güldüğünü veya ağladığını görmek, rüya sahibinin uyanık hayattaki ruhsal ihtiyacını, vicdanını ve aradığı "güvenli limanı" yansıtır. Rüyada anne görmek, genellikle en zor zamanlarda Hızır gibi yetişen bir yardıma delalet eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada anne görmek, mutlak surette hayır, bereket ve şefkattir. Rüyasında annesini (sağ iken) güler yüzlü ve mutlu gören kişinin işleri rast gider, kazancı artar, üzerindeki her türlü musibet ve kaza (annesinin duası hürmetine) def olur. Rüyada annesine sarıldığını gören kişi, gurbette ise memleketine (veya sevdiğine) kavuşur, sıkıntıdaysa büyük bir maddi ve manevi feraha erer. Ancak annesini kızgın, üzgün veya kendisine sırtını dönmüş olarak görmek; rüya sahibinin yaptığı çok büyük bir hataya, ahlaki bir yanlışa, uyanık hayatta aldığı bedduaya (veya ah almaya) işaret eden çok ciddi bir ilahi uyarıdır. Rüyada annenin ağlaması ise (sessizce ağlıyorsa) sevinçli bir habere, feryat ederek ağlıyorsa rüya sahibinin yaşayacağı bir hastalığa yorulur.',
      variations: [
        {
          title: 'Rüyada Ölmüş Anneyi Görmek',
          content: 'Eğer anne gülüyorsa, ahirette makamının iyi olduğuna ve rüya sahibinden razı olduğuna işarettir. Ayrıca çok umutsuz (ölmüş) sanılan bir işin yeniden yeşereceğine, mucizevi bir yardıma delalet eder.'
        },
        {
          title: 'Rüyada Annenin Hamile Olduğunu Görmek',
          content: 'Ailenin başına konacak çok büyük bir devlete, mirasa veya anne babanın yaşayacağı çok güzel ve rahat bir yaşlılık dönemine (bolluğa) yorulur.'
        },
        {
          title: 'Rüyada Annenin Öldüğünü Görmek (Sağ İken)',
          content: 'Aksine annenin ömrünün uzayacağına, sağlıklı yaşayacağına işarettir. Psikolojik olarak ise rüya sahibinin "bağımsızlaşma" (kendi ayakları üzerinde durma) sürecini simgeler.'
        },
        {
          title: 'Rüyada Anneden Süt Emmek',
          content: 'Yaşı ne olursa olsun annesinden süt emdiğini gören kişi, çok büyük bir mal (miras) elde eder, hastaysa şifa bulur, hapis ise özgürlüğüne kavuşur.'
        },
        {
          title: 'Rüyada Anneyle Kavga Etmek',
          content: 'Uyanık hayatta kendi doğrularınız ile ailenizin beklentileri (gelenekler) arasında yaşadığınız çatışmaya, ancak bu çatışmanın sonunda yanlış bir karar vererek üzüleceğinize işarettir.'
        }
      ],
      religiousMeaning: 'İslam dininde anne hakkı, Allah hakkından hemen sonra gelir ("Cennet anaların ayakları altındadır"). İbn Şirin\'e göre rüyada anne görmek, baba görmekten çok daha hayırlıdır; zira annenin şefkati ve duası çok daha etkilidir. Rüyada annesinin kendisini çağırdığını gören kişi, hak yola (ibadete) davet ediliyordur. Annesinin kendine dua ettiğini gören kimse, iki cihanda da sırtı yere gelmez. Ölmüş annesini rüyada rüküş veya üzgün görmek, o annenin evladından dua, sadaka ve Kur\'an beklediğine açık bir işarettir.',
      psychologicalMeaning: 'Anne, Jung psikolojisinde "Ulu Anne" (Great Mother) arketipidir; hem hayat veren, besleyen (iyi anne) hem de boğan, kontrol eden (kötü anne) yönleri vardır. Rüyasında sürekli annesini gören kişi, uyanık hayatta çok savunmasız hissetmekte, sığınacak bir liman veya "koşulsuz kabul" (kendi hatalarıyla sevilme) aramaktadır. Anneyle tartışmak, bireyselleşme (Individuation) sancılarını ve "kordon bağını koparma" isteğini gösterir.',
      faqs: [
        {
          question: 'Rüyada annenin saçını taramak ne anlama gelir?',
          answer: 'Annenize (veya ailenize) çok büyük bir iyilik yapacağınıza, onların dertlerini dinleyip onları rahatlatacağınıza işarettir.'
        },
        {
          question: 'Ölmüş annemin bana yemek (veya ekmek) vermesi nedir?',
          answer: 'Çok harika bir rüyadır. Hiç ummadığınız bir yerden elinize geçecek büyük ve tertemiz (helal) bir rızka, mirasa delalet eder.'
        },
        {
          question: 'Rüyada annemin beni evden kovduğunu görmem ne demek?',
          answer: 'Kendi ailenizden bağımsızlaşarak artık kendi hayatınızı (yuvanızı) kurma vaktinizin geldiğine, kendi kanatlarınızla uçmanız gerektiğine yorulur.'
        }
      ],
      relatedSymbols: ['bebek', 'kavga-etmek', 'ev']
    }
  },
  {
    slug: 'hamam-bocegi',
    title: 'Rüyada Hamam Böceği Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada hamam böceği görmek; sinsi, arsız ve istenmeyen düşmanlara, kişinin hayatındaki küçük ama mide bulandıran sorunlara ve bereketsizliğe işaret eder.',
    content: {
      introduction: 'Hamam böceği (veya karafatma), karanlık yerlerde üreyen, pislikle ilişkilendirilen ve insanlarda çoğunlukla iğrenme duygusu uyandıran bir haşeredir. Rüyalarda hamam böceği görmek, rüya sahibinin hayatına sızmış, kolay kolay yok edilemeyen "arsız" sorunları, küçük ama sinir bozucu borçları veya yüzsüz insanları temsil eder. Tıpkı gerçek hayatta bir tane hamam böceğinin arkasında yüzlercesinin olması gibi, rüyada görülen bu böcek de, yüzleşilmezse büyüyecek olan gizli dertlerin ve dedikoduların simgesidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada evin içinde hamam böceği görmek, o haneye nifak sokmaya çalışan, ikiyüzlü, dedikoducu, asalak ve zayıf (ancak arsız) karakterli düşmanlara delalet eder. Rüyasında hamam böceklerinin mutfakta veya yemeklerin üzerinde dolaştığını gören kişinin evine veya işine "haram" karışma tehlikesi vardır, rızkın bereketi (huzuru) kaçar. Rüyada üzerinde hamam böceği dolaştığını görmek, kişinin toksik bir ilişkinin (veya ortamın) içinde olduğuna, insanların o kişiden menfaat (enerji) emdiğine işarettir. Rüyada hamam böceğini ezerek öldürmek ise son derece hayırlıdır; kişinin cesaretini toplayarak hayatındaki bu sinsi ve yüzsüz insanları kapı dışarı edeceğine, sorunları kökünden kurutarak feraha (ve temizliğe) çıkacağına yorulur.',
      variations: [
        {
          title: 'Rüyada Uçan Hamam Böceği Görmek',
          content: 'Sizi çok gafil avlayacak, beklemediğiniz bir anda patlak verecek olan can sıkıcı bir dedikoduya veya asılsız bir iftiraya (kötü bir habere) işaret eder.'
        },
        {
          title: 'Rüyada Yatakta Hamam Böceği Görmek',
          content: 'Özel hayatınıza, evliliğinize burnunu sokan akrabalara (üçüncü şahıslara) veya yatağınıza (özelinize) kadar giren güvensizlik hissine yorulur.'
        },
        {
          title: 'Rüyada Ölü Hamam Böcekleri Görmek',
          content: 'Kendi kendine sönen bir tehlikeye, düşmanlarınızın kendi planlarında boğulacağına ve sizin hiçbir şey yapmanıza gerek kalmadan dertlerin (borçların) son bulacağına işarettir.'
        },
        {
          title: 'Rüyada Dev (Kocaman) Bir Hamam Böceği Görmek',
          content: 'Gözünüzde çok büyüttüğünüz, aslında zayıf ve karaktersiz olan bir insanı zihninizde devasa bir engel haline getirdiğinizi (korkularınızı) temsil eder.'
        },
        {
          title: 'Rüyada Hamam Böceği Yemek (veya Yutmak)',
          content: 'Mecburen kabul etmek zorunda kalacağınız mide bulandırıcı bir duruma, zoraki katlanılan bir patrona/işe veya şüpheli (haram) kazanca yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) haşeratın her türlüsü, kınanan, dinde ve ahlakta zayıf, ancak dille (dedikoduyla) zarar veren insanlardır. Hamam böceği (karafatma) karanlıkta ortaya çıktığı için, ikiyüzlü (münafık), yüzünüze gülüp arkanızdan kuyu kazan akraba veya komşulara delalet eder. Bir kimse rüyada evini haşerattan temizlediğini (ilaçladığını) görse, evini büyüden, nazardan, hasetten ve kem gözlü insanlardan temizler, yuvası Allah\'ın izniyle huzura erer.',
      psychologicalMeaning: 'Psikolojide hamam böceği, "Pislik, Suçluluk ve İğrenme" duygularını temsil eder. Rüya sahibi uyanık hayatta kendini değersiz hissediyor, bir "suçluluk" duygusunun altında eziliyor (Kafka\'nın Dönüşüm\'ü gibi) veya hayatındaki bir durumdan (örneğin borçlardan veya kötü bir ilişkiden) içten içe tiksiniyor olabilir. Hamam böcekleri karanlıktan çıkar; yani bu sorunlar sizin bilinçaltınızın en ücra köşelerinde yüzleşmekten kaçtığınız (halı altına süpürdüğünüz) problemlerdir.',
      faqs: [
        {
          question: 'Rüyada hamam böceği istilasına uğramak ne demek?',
          answer: 'Birikmiş işlerin, ertelediğiniz faturaların veya ufak tefek yalanların bir araya gelerek kontrolden çıktığını (başınıza yıkıldığını) gösterir.'
        },
        {
          question: 'Rüyada kulaktan (veya ağızdan) hamam böceği çıkması nedir?',
          answer: 'Kötü ve dedikoducu sözler işitmeye (kulak), veya ağzınızdan çıkacak çok yakışıksız, size hiç yakışmayan sözlere (mide bulandırıcı gaflara) işarettir.'
        },
        {
          question: 'Rüyada beyaz hamam böceği olur mu, ne anlama gelir?',
          answer: 'Nadirdir; size çok masum ve zararsız (beyaz) görünen bir insanın, aslında içten içe sizin enerjinizi ve malınızı sömüren bir "asalak" olduğuna yorulur.'
        }
      ],
      relatedSymbols: ['bocek', 'karinca', 'ev']
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
