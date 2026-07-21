import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const existingPath = path.join(contentDir, 'symbols.json');
let existingSymbols = [];
if (fs.existsSync(existingPath)) {
  existingSymbols = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
}

const newSymbols = [
  {
    slug: 'su',
    title: 'Rüyada Su Görmek',
    category: 'doga',
    shortDescription: 'Rüyada su görmek; hayat, bereket, temizlik, duyguların akışı ve bilinçaltının engin derinlikleri ile ilişkili, evrensel ve çok katmanlı bir semboldür.',
    content: {
      introduction: 'Su, gezegenimizdeki tüm kültürlerde ve inanç sistemlerinde yaşamın kaynağı, ruhsal arınmanın aracı ve insan duygularının en temel sembolüdür. Rüyada su görmek, tıpkı suyun kendi doğası gibi akışkan, değişken ve çok boyutlu anlamlar içerir. Suyun rüyadaki durumu—berrak mı, bulanık mı, sakin mi, dalgalı mı olduğu—rüya sahibinin mevcut duygusal durumunun, iç huzurunun ve hayatının gidişatının en net aynasıdır. Susuz bir hayat düşünülemeyeceği gibi, rüyalardaki su teması da ruhumuzun en temel ihtiyaçlarına işaret eder.',
      generalMeaning: 'Rüyada temiz, berrak ve durgun su görmek; huzur, bereket, kusursuz bir sağlık ve mutlu, istikrarlı bir yaşama işarettir. Rüyayı gören kişinin iç dünyasında tüm çalkantıların durulduğuna, geçmişin travmalarından arındığına ve işlerinin yolunda gideceğine yorulur. Taze su, yeni başlangıçların ve taze enerjinin habercisidir. Buna karşılık, kirli, bulanık, çamurlu veya kontrolsüzce akan (taşkın, sel) sular ise; derin keder, hastalık, karmaşık duygular, hayal kırıklıkları ve hayatınızdaki belirsizliklere delalet eder. Rüyada su görmek aynı zamanda kişinin sezgilerinin çok güçlü olduğu bir döneme girdiğini, mantıktan ziyade kalbinin sesini dinlemesi gerektiğini de vurgular. Akıp giden bir su, zamanın hızla akıp geçtiğini, fırsatların değerlendirilmesi gerektiğini hatırlatır.',
      variations: [
        {
          title: 'Rüyada Berrak Suda Yüzmek',
          content: 'Kişinin hedeflerine doğru emin, güçlü ve kendinden emin adımlarla ilerlediğini gösterir. Berrak suyun içinde yüzmek, karşısına çıkan zorlukları esneklikle aşacağına, fırsatları çok iyi değerlendireceğine ve ruhsal olarak tam bir arınma yaşadığına yorumlanır. Eğer yüzerken hiç yorulmuyorsanız, işlerinizin su gibi akıp gideceğine, hiç zorlanmadan büyük başarılara imza atacağınıza işarettir.'
        },
        {
          title: 'Rüyada Bulanık Su Görmek veya İçinde Olmak',
          content: 'Bulanık, çamurlu ve kirli su, rüya tabirlerinde pek hayra yorulmaz. Hastalık, maddi sıkıntı, arkanızdan çevrilen çirkin dedikodular veya haksız kazanca işaret eder. Kişinin zihninin son derece karışık olduğu, doğruyu yanlıştan ayırt edemediği ve bu bulanıklık içinde yanlış kararlar alarak kendine zarar verebileceği bir dönemde olduğuna dair ilahi bir uyarıdır.'
        },
        {
          title: 'Rüyada Kana Kana Su İçmek',
          content: 'Temiz, tatlı ve serin bir kaynaktan doya doya su içmek, sağlık, uzun ömür, helal ve bol rızık, ilme/bilgiye ulaşma ve manevi tatmin anlamına gelir. Uzun süren bir dertten, maddi krizden veya manevi boşluktan kurtulup rahata ereceğinizin kesin müjdesidir. Ancak su içtiğiniz halde bir türlü susuzluğunuzu gideremiyorsanız, bu hayatta doyurulamayan bitmek bilmez hırsları, açgözlülüğü veya ruhsal bir boşluğu temsil eder.'
        },
        {
          title: 'Rüyada Sel, Su Taşkını Görmek',
          content: 'Kontrolsüz ve yıkıcı su, duygusal patlamalara, öfke krizlerine, kontrol edilemeyen dışsal olaylara ve büyük toplumsal veya kişisel krizlere yorulur. Bastırılmış duyguların artık zapt edilemez bir şiddetle yüzeye çıkmasıdır. Ancak sel sularının size veya çevrenize zarar vermeden usulca akıp gittiğini görmek, büyük gibi görünen tehlikelerin teğet geçeceğine, sıkıntıların atlatılacağına göstergedir.'
        },
        {
          title: 'Rüyada Evin İçinde Su Görmek',
          content: 'Evinizin içinden temiz bir suyun kaynadığını veya aktığını görmek, hanenize girecek çok büyük bir bolluk ve berekete, hane halkının uzun yıllar huzur içinde yaşayacağına işarettir. Fakat evin içini basan su kirli ve bulanıksa, aile içi şiddetli tartışmalara, haneye dışarıdan müdahale eden kötü niyetli insanlara ve huzursuzluklara delalet eder.'
        },
        {
          title: 'Rüyada Suda Boğulmak',
          content: 'Gerçek hayatta kişinin omuzlarına binen ağır sorumlulukların, borçların veya yoğun stresin altında ezildiğini, nefes alamadığını hissetmesidir. Eğer biri sizi boğulmaktan kurtarıyorsa, ummadığınız bir dost elinin sizi düştüğünüz çukurdan çıkaracağına yorumlanır.'
        }
      ],
      religiousMeaning: 'İslami rüya tabirlerinde su (mâ); İslam, kuran, ilim, hayat, bereket, adalet ve hidayet ile eşanlamlı tutulur. Kur\'an-ı Kerim\'de "Biz her canlı şeyi sudan yarattık" buyrulur. Bu bağlamda rüyada saf su görmek dini inancın sağlamlığına, kalbin saflığına ve helal rızka yorulurken; acı, tuzlu veya sıcak su içmek zorluklara, hastalığa, haram mala veya ilahi bir imtihana delalet eder. Evinde bir su kaynağı belirmesi, rüya sahibinin ilim ehli olacağına veya çevresine çok büyük faydası dokunacak, sadaka-i cariye sayılacak bir iş yapacağına yorumlanır.',
      psychologicalMeaning: 'Analitik psikolojide su, doğrudan bilinçaltını, kolektif bilinçdışını, ana rahmini ve duygularımızın akışkan doğasını temsil eder. Okyanus ve denizler, insanın içindeki keşfedilmemiş devasa ve derin duygusal alanı (kolektif bilinçdışı); nehirler hayatın ve zamanın yönlü akışını; suyun yüzeyi ise bilinç ile bilinçaltı arasındaki ince zarı simgeler. Suda boğulma veya derin sulara dalma korkusu, kişinin kendi duygularıyla yüzleşmekten, bilinçaltındaki karanlık anılara inmeyi göze alamamasından kaynaklanır. Suya girmek, aynı zamanda anne rahmine dönme arzusunu, korunma ve yenilenme ihtiyacını da gösterir.',
      faqs: [
        {
          question: 'Rüyada denize girmek veya deniz görmek ne anlama gelir?',
          answer: 'Deniz, devlet adamı, kudret, sonsuz fırsatlar ve büyük zenginliktir. Büyük, engin ve temiz bir denize girmek, kişinin devlet kapısında önemli bir işinin çözüleceğine, makam sahibi olacağına veya ruhsal olarak engin bir bilgiye ulaşacağına yorulur.'
        },
        {
          question: 'Rüyada sıcak su ile yıkanmak (banyo yapmak) nasıl tabir edilir?',
          answer: 'Geleneksel olarak bedeni yakan sıcak su, hastalığa veya kederlenmeye yorulurken; ılık, rahatlatıcı su, günahlardan ve stresten arınmaya, iç huzuruna kavuşmaya, borçları ödeyip ferahlamaya işaret eder.'
        },
        {
          question: 'Rüyada su üzerinde yürümek nedir?',
          answer: 'Mucizevi bir yeteneğe işaret eder. Kişinin inancının, özgüveninin ve maneviyatının o kadar yüksek olduğu bir döneme girdiğini gösterir ki, herkesi boğan sorunların üzerinden o, ayağı bile ıslanmadan geçip gidecektir.'
        }
      ]
    },
    relatedSymbols: ['deniz', 'yagmur', 'yuzmek', 'nehir']
  },
  {
    slug: 'olum',
    title: 'Rüyada Ölüm Görmek',
    category: 'soyut-kavramlar',
    shortDescription: 'Rüyada ölüm görmek, uyanık hayattaki yaygın korkunun aksine; fiziksel bitişi değil, ömrün uzamasını, eski olanın bitip yeni başlangıçların filizlenmesini temsil eder.',
    content: {
      introduction: 'Rüyasında kendisinin, çok sevdiği bir yakınının veya çocuğunun öldüğünü gören kişi genellikle kan ter içinde, büyük bir dehşet ve korkuyla uyanır. Bu tür kabuslar gün boyu insanın aklından çıkmaz. Ancak rüya sembolizminin en paradoksal yanlarından biri ölüm temasıdır. Rüyada ölüm sembolü, gerçek hayattaki bedensel (fiziksel) ölümü temsil etmez. O, metaforik bir dönüşümün, kabuk değiştirmenin, artık size hizmet etmeyen bir dönemin kapanıp, tamamen yeni ve farklı bir dönemin (yeniden doğuşun) başlamasının en kesin işaretidir.',
      generalMeaning: 'Rüyada ölmek, hem Doğu hem de Batı rüya tabirleri geleneğinde çok net bir şekilde "ömrünün uzaması" ve "büyük, köklü değişim" olarak yorumlanır. Kişinin hayatındaki eski, durağan, belki de acı veren bir dönemin tamamen kapanacağına işaret eder. Bu değişim, hayatınızın temel dinamiklerini etkiler; örneğin bekarsanız evliliğe, çalışıyorsanız radikal bir kariyer değişikliğine, eski ve zararlı bir alışkanlığın tamamen bırakılarak yepyeni, sağlıklı bir kimliğe bürünmeye delalet edebilir. Özetle, rüyada bir şeyin ölmesi, uyanık hayatta o şeyin artık miadını doldurduğunu ve ona veda etmeniz gerektiğini fısıldar.',
      variations: [
        {
          title: 'Rüyada Kendi Ölümünü Görmek',
          content: 'Rüya sahibinin kendi ölümünü görmesi, hayatında kendi iradesiyle veya dış etkenlerle gerçekleşecek devasa bir radikal dönüşümü gösterir. Ego ölüyor ve yerini daha olgun bir benliğe bırakıyor demektir. Eski kimliğinizden, yargılarınızdan veya komplekslerinizden sıyrılarak adeta anka kuşu gibi küllerinizden yeniden doğacağınıza işarettir. Eğer rüyanızda öldüğünüzü ve bir cenaze töreniniz olduğunu görüyorsanız, toplum içindeki eski konumunuzu geride bırakıp yepyeni bir statü kazanacağınıza yorulur.'
        },
        {
          title: 'Rüyada Yaşayan Birinin Öldüğünü Görmek (Anne, Baba, Eş, Kardeş)',
          content: 'En çok korkutan rüyalardandır ancak çok hayırlıdır. Bu rüya, rüyada ölen kişinin ömrünün çok uzun, bereketli ve sağlıklı olacağına kesin olarak yorulur. Psikolojik bağlamda ise, rüya sahibinin o kişiye karşı duyduğu derin kaybetme korkusunu yansıtır. Aynı zamanda aranızdaki ilişkinin dinamiklerinin değiştiğini, örneğin o kişiye olan bağımlılığınızın "ölerek" yerini olgun bir bağımsızlığa bırakması gerektiğini simgeler.'
        },
        {
          title: 'Rüyada Gerçekte Ölmüş Birini Canlı Görmek',
          content: 'Zaten vefat etmiş bir yakını rüyada sağ ve neşeli görmek, o kişinin ahiret hayatında huzurlu ve makamının iyi olduğuna, rüya sahibinin ondan razı olduğuna delalet eder. Ayrıca, rüya sahibinin umudunu tamamen kestiği, "artık bitti, dirilmez" dediği bir işinin, projesinin veya ilişkisinin mucizevi bir şekilde yeniden hayat bulacağına, beklemediği bir yerden sevindirici bir müjde alacağına yorumlanır.'
        },
        {
          title: 'Rüyada Kefen Görmek veya Kefene Sarılmak',
          content: 'Kefen, dünya nimetlerinden soyutlanmayı ve sırlanmayı temsil eder. Kendi üzerinde kefen görmek, hatalardan dönmeye, tövbe etmeye ve maneviyata yönelmeye çağrıdır. Bazen de gizli tutulması gereken sırların açığa çıkmaması için alınan önlemlere işaret eder.'
        },
        {
          title: 'Rüyada Mezarlık Görmek ve Mezar Kazmak',
          content: 'Mezarlık, ibret almaya, kişinin hatalarından dönmesi gerektiğine veya ölüm gerçeğiyle yüzleşerek hayatını düzene sokması gerektiğine işaret eder. Yeni bir ev veya arsa almaya, kalıcı bir yatırım yapmaya (çünkü mezar kalıcı bir evdir) delalet edebilir. Kendi mezarını kazdığını görmek, kendine bir ev veya yeni bir yuva kuracağı anlamına gelir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde "ölüm", genel olarak dindeki eksiklik (kalp katılığı) veya dünyadaki rahatlık olarak iki farklı uca yorumlanabilmektedir. İbn Şirin\'e göre rüyada ağlamadan, sessizce ve huzur içinde ölmek çok hayırlıdır, uzun ömre, ferahlığa ve güzel bir akıbete işaret eder. Ancak feryat figan edilerek, yaka paça yırtılarak, çığlıklarla ölüp gömülmek ise; rüya sahibinin dünyalığının, servetinin artarken maneviyatının, dini inançlarının zayıfladığına, ahiretini unuttuğuna dair ilahi bir ihtardır.',
      psychologicalMeaning: 'Ölüm rüyaları, psikolojik olarak insanın olgunlaşmasının, büyümesinin ve psişik gelişiminin ayrılmaz bir parçasıdır. Bilinçaltı, eski inançların, çocuksu davranış kalıplarının, bitmesi gereken toksik ilişkilerin veya bir yaş evresinin (örneğin ergenliğin bitip yetişkinliğe geçiş) sonunu "ölüm" metaforuyla bir tiyatro sahnesine koyar. Bu nedenle ölüm, yok oluş değil, ruhsal büyümenin zorunlu bir önkoşulu olan "bırakma (letting go)" eylemini temsil eder.',
      faqs: [
        {
          question: 'Rüyada çocuğunun öldüğünü görmek ne demek?',
          answer: 'Anne ve babalar için bir kabus olsa da, rüya tabirinde çocuğun ömrünün uzadığına, onun sağlıklı bir hayat süreceğine ve hayatındaki kötü bir tehlikenin savuşturulduğuna yorulur.'
        },
        {
          question: 'Rüyada ölmek ve tekrar dirilmek nasıl yorumlanır?',
          answer: 'Çok büyük bir günahtan samimi bir tövbe etmeye, dibe vurup iflas ettikten sonra çok daha büyük bir zenginliğe kavuşmaya veya ölümcül/ağır bir hastalıktan mucizevi bir şekilde tamamen kurtulmaya işaret eden, son derece hayırlı, ikinci bir şans rüyasıdır.'
        },
        {
          question: 'Rüyada can çekişmek ne anlama gelir?',
          answer: 'Bir konu hakkında vicdan azabı çekmeye, karar vermekte çok zorlanılan arafta bir durumda kalmaya veya bir sırrın altında ezilmeye işaret eder.'
        }
      ]
    },
    relatedSymbols: ['mezar', 'aglamak', 'kan', 'kefen', 'hastalik']
  }
];

fs.writeFileSync(path.join(contentDir, 'symbols-2.json'), JSON.stringify(newSymbols, null, 2));

const all = [...existingSymbols, ...newSymbols];
fs.writeFileSync(existingPath, JSON.stringify(all, null, 2));
console.log('Merged part 2 into symbols.json.');
