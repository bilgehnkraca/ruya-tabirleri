import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updatedSymbol = {
  slug: 'altin',
  title: 'Rüyada Altın Görmek',
  category: 'nesneler',
  shortDescription: 'Rüyada altın görmek; zenginliği, maddi başarıyı, gizli yetenekleri, evliliği ve bazı durumlarda çekilecek kederi veya sıkıntıyı simgeleyen ikili bir arketiptir.',
  content: {
    introduction: 'Tarih boyunca insanoğlunun en çok değer verdiği, uğruna savaşlar çıkardığı ve zenginliğin mutlak ölçütü olarak kabul edilen altın, rüya sembolizminde de en güçlü nesnelerden biridir. Rüyada altın görmek, parıltısı ve göz alıcılığıyla genellikle zenginliğin, itibarın, gücün ve başarının habercisi gibi görünse de; rüyanın bağlamına göre keder, hastalık veya büyük bir sorumluluk anlamına da gelebilir. Altının külçe halinde mi, para formunda mı yoksa bir takı (yüzük, bilezik) olarak mı görüldüğü, rüyanın size fısıldadığı sırları çözmek için en kritik ipuçlarıdır. Bu sembol aynı zamanda kişinin kendi içsel değerini ve gizli potansiyelini de temsil eder.',
    generalMeaning: 'Rüya tabirlerinin genel yaklaşımında altın görmek, rüya sahibinin cinsiyetine, altının formuna ve uyanık hayattaki maddi durumuna göre çok farklı şekillerde yorumlanır. Genellikle iş hayatında elde edilecek parlak başarılara, kişinin yeteneklerinin farkına varılmasına, büyük bir saygınlık kazanmaya ve maddi sıkıntıların sona ermesine işaret eder. Yeni bir iş kurmak, terfi almak veya yüklü bir mirasa konmak gibi somut finansal gelişmeleri müjdeler. Bekar kişiler için evliliğe, evli kişiler için ise çocuk sahibi olmaya (özellikle erkek çocuğa) yorulur. Ancak saf külçe altın görmek, bazı yorumcular tarafından ağır bir yüke, taşınması zor bir sorumluluğa veya sıkıntıya delalet eder. Rüyada altın bulmak, sevinçli bir habere yorulurken, altını kaybetmek fırsatları kaçırmaya veya maddi bir kayba işaret eder. Altın aynı zamanda saflığın ve bozulmazlığın simgesi olduğundan, niyetlerin temizliğini ve sağlam karakteri de gösterir.',
    variations: [
      {
        title: 'Rüyada Altın Bilezik Görmek veya Takmak',
        content: 'Kadınlar için çok hayırlı bir rüyadır; zarafete, saygınlığa, mutlu bir evliliğe, eşten görülecek sevgiye ve korunmaya işarettir. Erkeklerin altın bilezik takması ise bazı geleneksel yorumlarda sıkıntıya, elin kolun bağlanmasına veya haram bir mala işaret etse de, modern yorumlarda genellikle bir zanaat, kalıcı bir meslek "altın bilezik" kazanmaya delalet eder.'
      },
      {
        title: 'Rüyada Çeyrek veya Cumhuriyet Altını Bulmak',
        content: 'Maddi olarak çok ferahlatıcı bir döneme girildiğini gösterir. Bir yerden beklemediğiniz helal bir rızkın geleceğine, borçlarınızın kapanacağına veya yapacağınız küçük bir yatırımın gelecekte size çok büyük kâr getireceğine yorulur.'
      },
      {
        title: 'Rüyada Külçe Altın Görmek',
        content: 'Külçe altın, genellikle işlenmemiş zenginliktir. Rüyasında külçe altın gören veya bulan kişinin eline büyük miktarda bir para geçebilir ancak bu para aynı oranda büyük bir stres, sorumluluk veya çekememezlik getirecektir. Bazen de kişinin henüz işlemediği, farkında olmadığı çok büyük bir potansiyel yeteneğe işaret eder.'
      },
      {
        title: 'Rüyada Altın Dağıtmak veya Vermek',
        content: 'Elinizdeki altını başkalarına dağıttığınızı görmek, borçlarınızı ödeyip hafifleyeceğinize, sıkıntılarınızı başkalarıyla paylaşıp azaltacağınıza veya sahip olduğunuz bilgiyi, ilmi etrafınıza yayarak manevi bir huzur bulacağınıza işarettir.'
      },
      {
        title: 'Rüyada Altının Kararması veya Sahte Olması',
        content: 'Çok güvendiğiniz bir işten büyük bir hayal kırıklığı yaşayacağınıza, dost sandığınız kişilerin sahte (iki yüzlü) çıkacağına veya elinizdeki bir malın değer kaybedeceğine dair ciddi bir uyarı niteliğindedir. Dış görünüşe aldanmamanız gerektiğini gösterir.'
      }
    ],
    religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre, altın görmek erkek ve kadın için farklı anlamlar taşır. İslami fıkıhta erkeklerin altın takması haram kılındığı için, rüyasında altın takan erkeğin dert, gam, hapislik veya haram bir mala bulaşacağı yorumu yapılmıştır. Kadınların rüyada altın görmesi veya takması ise ferahlık, sevinç, ziynet, hayırlı evlat ve güzelliktir. Rüyasında evinin altından yapıldığını gören kişinin evine ateş düşeceği (yangın çıkacağı) şeklinde mecazi bir yorum da mevcuttur. Rüyada altın para basmak (darpetmek), kişinin farz olan ibadetleri (örneğin zekat veya hac) yerine getirmesi gerektiğine dair ilahi bir hatırlatma olabilir.',
    psychologicalMeaning: 'Carl Jung\'un psikanalitik teorisinde altın, "Simya" (Alchemy) sürecinin nihai hedefidir ve psikolojik olarak "Bireyleşme" (Individuation) sürecinin tamamlanmasını, yani kişinin gerçek benliğine (Self) ulaşmasını, ruhsal bütünlüğünü ve aydınlanmasını temsil eder. Rüyada altın bulmak, bilinçaltınızda gömülü kalmış çok değerli bir yeteneği (yaratıcılık, bilgelik, sevgi) keşfettiğinizi gösterir. Altın ışığı yansıttığı için güneşi, eril enerjiyi, bilinci ve mantığı da simgeler. Eğer altını kaybediyorsanız, özdeğer (self-worth) eksikliği yaşadığınızı, kendinizi değersiz veya yetersiz hissettiğiniz bir dönemden geçtiğinizi gösterir.',
    faqs: [
      {
        question: 'Rüyada altın çalmak ne anlama gelir?',
        answer: 'Rüyada altın çalmak, uyanık hayatta başkasının hakkına girmeye, birinin başarısını veya fikrini kopyalamaya çalıştığınıza işarettir. Ayrıca çok arzuladığınız ama hak etmediğinizi düşündüğünüz bir şeye ulaşma çabanızı gösterir.'
      },
      {
        question: 'Rüyada altın yemek nasıl tabir edilir?',
        answer: 'Aşırı hırsın ve açgözlülüğün sembolüdür. Para biriktirmek uğruna hayatın güzelliklerini kaçırdığınıza, cimrilik yaparak aslında kendi ruhunuza zarar verdiğinize (sindiremeyeceğiniz bir yük aldığınıza) yorulur.'
      },
      {
        question: 'Sandık dolusu altın bulmak ne demektir?',
        answer: 'Aileden kalacak bir mirasa, saklı kalmış çok büyük bir sırrın açığa çıkmasına veya uzun süredir üzerinde çalıştığınız bir projenin nihayet devasa bir başarıyla sonuçlanacağına dair en güzel müjdelerden biridir.'
      }
    ]
  },
  relatedSymbols: ['su', 'ates', 'ev']
};

const index = symbols.findIndex(s => s.slug === 'altin');
if (index !== -1) {
  symbols[index] = updatedSymbol;
} else {
  symbols.push(updatedSymbol);
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully created altin');
