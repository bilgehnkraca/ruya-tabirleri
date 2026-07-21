import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updatedSymbol = {
  slug: 'fare',
  title: 'Rüyada Fare Görmek',
  category: 'hayvanlar',
  shortDescription: 'Rüyada fare görmek; sinsiliği, gizli düşmanları, maddi kayıpları, hastalıklı düşünceleri ve bazen de hane içine sızmaya çalışan hırsızı sembolize eden uyarıcı bir rüyadır.',
  content: {
    introduction: 'Fareler, tarih boyunca karanlık, pislik, hastalık ve hırsızlıkla özdeşleştirilmiş, insanların genellikle uzak durmak istediği kemirgenlerdir. Rüyalarda beliren fare imgesi de bu kolektif algının bir ürünü olarak, genellikle hayatımıza sinsice sızan sorunları, gizli düşmanları ve içten içe bizi kemiren endişeleri temsil eder. Ancak rüya sembolizmi her zaman düz mantıkla çalışmaz; farenin rengi, büyüklüğü, sayısı ve sizin ona karşı tutumunuz rüyanın ana fikrini kökünden değiştirebilir. Rüyada fare görmek, uyanık hayatta gözden kaçırdığınız küçük ama yıkıcı detaylara dikkat etmeniz gerektiğine dair bilinçaltınızın çaldığı bir tehlike çanıdır.',
    generalMeaning: 'Rüya tabircilerinin büyük bir çoğunluğu rüyada fare görmeyi olumsuz bir işaret olarak kabul eder. Fare, genellikle dışarıdan iyi huylu gibi görünen, sessiz ve derinden ilerleyen, ahlaksız, fesat ve sinsi bir düşmana (bazen de bir kadına veya hırsıza) işaret eder. Bu düşman size doğrudan saldırmaz; tıpkı bir farenin eşyaları kemirmesi gibi, arkanızdan iş çevirerek malınıza, mülkünüze veya itibarınıza yavaş yavaş zarar verir. Evin içinde fare dolaştığını görmek, hane halkından birinin ya da eve sık girip çıkan birinin kötü niyetli olduğuna veya eve hırsız girebileceğine yorulur. Fareler rızkı (yiyeceği) tüketen canlılar olduğu için, evde fare görmek aynı zamanda maddi kayıplara, israfa ve bereketsizliğe de delalet eder. Rüyasında çok sayıda farenin bir yerde toplandığını veya oynaştığını gören kişinin, rızkının bollaşacağına (çünkü fareler sadece yiyeceğin bol olduğu yere toplanır) dair nadir de olsa olumlu bir yorum da mevcuttur.',
    variations: [
      {
        title: 'Rüyada Beyaz Fare Görmek',
        content: 'Beyaz renk masumiyeti temsil etse de, rüyada beyaz fare görmek, niyetini gizleyen, size çok yakın ve zararsız gibi görünen ancak içten içe kuyunuzu kazan iki yüzlü bir dosta veya rakibe işaret eder. Bazı kaynaklara göre beyaz fare gündüzü, siyah fare ise geceyi temsil eder; bu ikisini bir arada görmek zamanın (ömrün) hızla akıp gitmesine yorulur.'
      },
      {
        title: 'Rüyada Farenin Bir Şeyi Kemirmesi',
        content: 'Farenin kıyafetlerinizi, eşyalarınızı veya evdeki yiyecekleri kemirdiğini görmek, maddi bir kayba uğrayacağınıza, gizli bir borcun ortaya çıkacağına veya arkanızdan yapılan dedikoduların sizin saygınlığınızı (kıyafetinizi) yavaş yavaş zedelediğine işarettir. Hastalığa da yorulabilir.'
      },
      {
        title: 'Rüyada Fare Öldürmek',
        content: 'Bu, fare rüyaları içindeki en hayırlı olanıdır. Rüyada fareyi ezerek, vurarak veya zehirleyerek öldürmek; sinsi bir düşmanı alt edeceğinize, size kurulan gizli bir tuzağı fark edip bozacagınıza, maddi zararların önüne geçeceğinize ve huzura kavuşacağınıza yorulur. Düşmana karşı kazanılan kesin bir zaferdir.'
      },
      {
        title: 'Rüyada Fareden Korkmak ve Kaçmak',
        content: 'Uyanık hayatta yüzleşmekten kaçındığınız küçük sorunların, içinizde büyüyerek bir fobiye (takıntıya) dönüştüğünü gösterir. Kendi gücünüzün farkında olmadığınızı ve aslında çok kolay yenebileceğiniz zayıf rakiplerden (veya basit sorunlardan) haksız yere korktuğunuzu simgeler.'
      },
      {
        title: 'Rüyada Fare Kapanı Görmek',
        content: 'Fare kapanı kurmak veya görmek, etrafınızdaki fesat insanlara karşı önlem aldığınıza, onların gerçek yüzünü ortaya çıkarmak için bir tuzak (plan) hazırladığınıza işarettir. Eğer kapana fare yakalanmışsa, düşmanınızın kendi kazdığı kuyuya düşeceğini müjdeler.'
      }
    ],
    religiousMeaning: 'Klasik İslami rüya tabiri ekolünden İbn Şirin ve Nablusi\'ye göre rüyada fare; ahlaksız, fesat çıkarıcı, gizli işler çeviren bir kadına veya arsız bir hırsıza delalet eder. Peygamber Efendimiz (SAV)\'in fareyi "fasık" (kötülük yapan/yoldan çıkmış) olarak nitelendirmesine dayanılarak, fare görmek genellikle dinde ve ahlakta bozulmaya yorulur. Evin içinde farelerin oynaştığını görmek rızkın devamlılığına işaret etse de; farenin evi deldiğini (kemirdiğini) görmek eve girecek bir hırsıza, yatağında fare görmek ise ahlaksız bir eşe veya gayrimeşru ilişkilere (zinaya) yorulmuştur. Fare eti yemek ise gıybet etmeye, haram mal yemeye veya kötü ahlaklı birinden menfaat sağlamaya işaret eder.',
    psychologicalMeaning: 'Psikanalizde fareler, bilinçaltının derinliklerine, karanlık köşelerine (bodrumlara ve kanalizasyonlara) gizlenmiş, bastırılmış ve yüzleşmek istenmeyen utanç verici duygu ve düşünceleri temsil eder. Fobilerin, takıntıların (kompulsif düşüncelerin) ve içsel çürümenin sembolüdür. Freudyen yaklaşımda fare, bazen kemiren ve rahatsız eden cinsel dürtülerle veya suçluluk duygusuyla ilişkilendirilir. Zihninizi sürekli kemiren, sizi rahatsız eden ve enerjinizi emen ne varsa (kötü bir alışkanlık, toksik bir ilişki veya geçmiş bir travma), rüyanızda bir fare sürüsü olarak cisimleşir. Rüyadaki farenin cüssesi, hissettiğiniz korkunun veya suçluluğun büyüklüğünü yansıtır.',
    faqs: [
      {
        question: 'Rüyada farenin üstüme atlaması ne anlama gelir?',
        answer: 'Hiç beklemediğiniz bir anda, ummadığınız zayıf bir kişiden veya çok basit bir olaydan dolayı büyük bir zarar göreceğinize, hazırlıksız yakalanacağınıza ve çok fazla endişeleneceğinize işaret eder.'
      },
      {
        question: 'Rüyada kedi ve fareyi bir arada görmek nasıl yorumlanır?',
        answer: 'Birbiriyle zıt iki gücün (düşmanların) çekişmesine şahit olacağınıza veya iç dünyanızdaki çatışmalara yorulur. Eğer kedi fareyi yakalıyorsa, büyük bir derdinizin doğal yollarla, hiç çaba sarf etmeden çözüleceğini müjdeler.'
      },
      {
        question: 'Çok sayıda farenin evi istila etmesi ne demektir?',
        answer: 'Eğer fareler yiyeceklere dokunmuyorsa haneye gelecek bol rızka ve misafire yorulabileceği gibi; her yeri kemiriyorlarsa kontrolü tamamen kaybettiğiniz büyük bir krize, israfa veya hane içine nifak sokan kalabalık bir düşman grubuna işaret eder.'
      }
    ]
  },
  relatedSymbols: ['kedi', 'yilan', 'ev']
};

const index = symbols.findIndex(s => s.slug === 'fare');
if (index !== -1) {
  symbols[index] = updatedSymbol;
} else {
  symbols.push(updatedSymbol);
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully created fare');
