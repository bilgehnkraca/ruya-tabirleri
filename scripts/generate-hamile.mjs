import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updatedSymbol = {
  slug: 'hamile-olmak',
  title: 'Rüyada Hamile Olduğunu Görmek',
  category: 'insanlar',
  shortDescription: 'Rüyada hamile olmak; kişinin içinde büyüttüğü yeni bir fikri, sabır gerektiren büyük bir değişimi, müjdeli bir bekleyişi ve maddi-manevi bereketin artışını sembolize eder.',
  content: {
    introduction: 'Hamilelik, hayatın en mucizevi, en sancılı ama sonunda en büyük ödülü veren süreçlerinden biridir. Rüyada hamile olduğunu veya birini hamile olarak görmek, tıpkı uyanık hayattaki gebelik süreci gibi, içinizde yavaş yavaş büyüyen, olgunlaşan ve sonunda gün yüzüne çıkacak olan bir duruma işaret eder. Bu durum yeni bir yetenek, yaratıcı bir fikir, uzun süredir üzerinde çalışılan bir proje veya hayatınızı kökünden değiştirecek bir karar olabilir. Rüyada hamilelik, doğası gereği hem bir yükü ve sorumluluğu (karnında taşıma eylemi) hem de bu yükün sonunda elde edilecek muazzam sevinci ve bereketi bir arada barındıran, dönüşüm odaklı çok güçlü bir semboldür.',
    generalMeaning: 'Rüya tabirlerinin büyük bir kısmında hamilelik, mal, mülk, zenginlik ve rızkın artması olarak yorumlanır. Rüyasında hamile olduğunu gören kadının malı artar, işleri yoluna girer ve övülecek bir konuma yükselir. Hamileliğin ayları ilerlemişse veya karın çok büyükse, elde edilecek servetin veya müjdenin o denli büyük olacağına işaret eder. Ancak hamilelik aynı zamanda bir "bekleyiş" ve "sabır" sürecidir. Bu rüya, arzu ettiğiniz bir şeye hemen ulaşamayacağınızı, hedefinize varmak için tıpkı bir anne adayı gibi sabretmeniz, o fikri veya projeyi besleyip büyütmeniz gerektiğini söyler. Bekar bir kadının kendini hamile görmesi, bazen ailesini ilgilendiren bir sıkıntıya veya taşıması zor bir sırra işaret etse de, genel anlamda yeteneklerinin filizlenmesi olarak da okunur. Erkeklerin kendini hamile görmesi ise genellikle çok gizli tutulan, dışarıdan duyulmasından korkulan büyük bir sırra, bazen de çok ağır bir maddi/manevi yüke delalet eder.',
    variations: [
      {
        title: 'Bekar Bir Kızın Hamile Olduğunu Görmesi',
        content: 'Toplumsal normlar gereği rüya sahibini uykusunda strese sokan bu rüya, tabir ilmine göre şahsın kendisine uygun, hayırlı ve zengin bir kısmetle karşılaşacağına veya iş hayatında kendisinden beklenmeyen çok büyük bir başarıya imza atacağına yorulur. Ancak bazı eski kaynaklar, bekar kızın hamileliğini ailesine gelecek hafif bir kedere de yormuştur.'
      },
      {
        title: 'Erkeğin Kendini Hamile Görmesi',
        content: 'Fizyolojik olarak imkansız olan bu rüya, erkeğin taşıdığı çok ağır bir psikolojik yüke, kimseyle paylaşamadığı büyük bir sırra veya altından kalkmakta zorlandığı bir borca işaret eder. Erkeğin iç dünyasında bir kriz yaşadığının göstergesidir.'
      },
      {
        title: 'Rüyada Başkasını (Bir Tanıdığını) Hamile Görmek',
        content: 'Rüyanızda gördüğünüz kişinin hayatında çok olumlu gelişmeler yaşandığına, o kişinin maddi olarak rahatlayacağına veya sizden gizlediği çok güzel bir planı (örneğin yeni bir iş veya evlilik düşüncesi) olduğuna delalet eder.'
      },
      {
        title: 'Rüyada Hamile Olup Doğurmak',
        content: 'Hamileliğin doğuma dönüşmesi, çekilen tüm çilelerin, sıkıntıların ve bekleyişin nihayet sona ereceğine, kişinin büyük bir refaha, mutluluğa ve "kurtuluşa" ereceğine işarettir. Hastalıktan şifa bulmaya, borçları kapatmaya ve yepyeni tertemiz bir hayata (yeni doğmuş bir bebek gibi) başlamaya yorulur.'
      },
      {
        title: 'Rüyada Karnındaki Bebeğin Hareket Ettiğini Görmek',
        content: 'Uzun süredir üzerinde çalıştığınız projenin, yatırımın veya hayalinizin artık meyve vermeye başladığını, sonuçları çok yakında (canlı bir şekilde) göreceğinizi müjdeler. İçinizdeki umudun çok güçlü ve hayatta olduğuna işarettir.'
      }
    ],
    religiousMeaning: 'Klasik İslami rüya tabiri ekolünün önde gelen isimlerinden Nablusi\'ye göre, rüyada hamilelik (gebelik) genellikle dünya malındaki artışa ve zenginliğe delalet eder. İbn Şirin\'e göre de kadının hamileliği servet ve izzettir. Rüyasında eşinin hamile olduğunu gören bir erkeğin, dünyalığının (rızkının) çok olacağı ve genişleyeceği müjdelenir. Ancak dul bir kadının veya genç bir kızın hamileliği, bazen bulunduğu eve gelecek olan hırsızlık veya yangın gibi musibetlere karşı bir ilahi ikaz olarak da yorumlanabilmiştir. Kısır (çocuğu olmayan) bir kadının hamile kalması ise, ümit kesilen çok zor bir işin Allah\'ın izniyle mucizevi bir şekilde gerçekleşeceğine yorulur.',
    psychologicalMeaning: 'Psikanalitik açıdan hamilelik, "Yaratıcılık" ve "Bütünleşme" (Individuation) arketipidir. Zihinsel veya sanatsal olarak yeni bir fikir üretme, kendinizi yeniden doğurma (kendini geliştirme) sürecinde olduğunuzu gösterir. Jung felsefesinde hamilelik, kişinin bilinçaltındaki farklı ve henüz tam gelişmemiş yönlerinin (potansiyellerinin) olgunlaşma sürecidir. Eğer hayatınızda büyük bir karar arifesindeyseniz, bir kitap yazıyor, yeni bir iş kuruyor veya kendinizde radikal bir huy değişikliğine gidiyorsanız, bilinçaltınız bunu size "hamilelik" sembolü üzerinden gösterir. Bebek aslında "yeni sizin" ta kendisidir.',
    faqs: [
      {
        question: 'Rüyada hamile kalmak gerçekten hamile kalınacağının bir işareti midir?',
        answer: 'Çocuk sahibi olmayı çok isteyen (veya korkan) kişilerde bu sadece psikolojik bir yansıma (wish-fulfillment) olabilir. Ancak tabir olarak fiziksel gebelikten ziyade, maddi bereketin veya yeni başlangıçların habercisidir.'
      },
      {
        question: 'Hamileyken kanama görmek (düşük yapmak) ne anlama gelir?',
        answer: 'Büyük emek vererek büyüttüğünüz bir işin, ilişkinin veya projenin son anda iptal olmasına, beklentilerinizin suya düşmesine ve yaşanacak hayal kırıklığına işaret eder.'
      },
      {
        question: 'İstemeden hamile kaldığını görmek nasıl yorumlanır?',
        answer: 'Hayatınızda kendi kontrolünüz dışında gelişen, sorumluluğunu almak istemediğiniz ancak mecbur kaldığınız ağır bir göreve veya bir ilişkiye zorlandığınızı hissettiğinize delalet eder.'
      }
    ]
  },
  relatedSymbols: ['bebek', 'kan', 'su']
};

const index = symbols.findIndex(s => s.slug === 'hamile-olmak');
if (index !== -1) {
  symbols[index] = updatedSymbol;
} else {
  symbols.push(updatedSymbol);
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully created hamile-olmak');
