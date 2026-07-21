import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updatedSymbol = {
  slug: 'para',
  title: 'Rüyada Para Görmek',
  category: 'nesneler',
  shortDescription: 'Rüyada para görmek; maddi dünyadaki güç arayışınızı, içsel değer duygunuzu, bazen gereksiz edilecek lafları ve yaşanacak küçük çaplı sevinçleri sembolize eder.',
  content: {
    introduction: 'Para, modern dünyada hayatta kalmanın, gücün, statünün ve özgürlüğün en temel aracıdır. Rüyalarda para görmek de tam olarak bu algıların bilinçaltındaki yansımalarını taşır. Ancak rüya tabirleri açısından para sembolü, tıpkı altın gibi çok yönlü ve bazen de paradoksaldır. Rüyada kağıt para mı, bozuk para mı gördüğünüz, parayı bulduğunuz mu yoksa kaybettiğiniz mi büyük önem taşır. Rüyada para, sadece maddi bir kazancı değil, aynı zamanda kişinin kendi özdeğerini (self-worth), yeteneklerine duyduğu güveni ve sosyal ilişkilerinde ne kadar değer gördüğünü de temsil eden psikolojik bir aynadır.',
    generalMeaning: 'Rüya tabircilerinin birçoğuna göre rüyada para görmek, rüyanın niteliğine göre hem hayra hem de şerre yorulabilir. Genel kanıya göre kağıt para görmek; değerli bir eşya almaya, saygınlık kazanmaya, iş hayatında beklenmedik bir fırsatla karşılaşmaya ve genel olarak ferahlamaya işaret eder. Rüyada tomarla kağıt para saymak, çok kârlı bir işe girişileceğine veya beklenen bir terfinin, zammın geleceğine yorulur. Buna karşılık, rüyada madeni (bozuk) para görmek; dedikoduya, can sıkıcı ve ufak tefek pürüzlere, laf kalabalığına ve gereksiz tartışmalara delalet eder. Rüyasında para bulan kişinin hayatında şanslı bir döneme gireceği, eline havadan (beklenmedik bir şekilde) bir fırsat geçeceği düşünülür. Rüyada para kaybetmek ise, kişinin uyanık hayatta bir fırsatı kaçıracağına, itibar kaybı yaşayacağına veya özgüveninde zedelenme olacağına dair bir işarettir. Para aynı zamanda zamanı ve enerjiyi simgelediğinden, paranın nasıl harcandığı, enerjinizi neye kanalize ettiğinizin de bir göstergesidir.',
    variations: [
      {
        title: 'Rüyada Kağıt Para Görmek',
        content: 'Büyük değer taşıyan kağıt paralar görmek, kişinin iş veya eğitim hayatında atacağı çok büyük ve sağlam adımlara işarettir. Yeni bir mülk edinmeye, önemli bir sözleşme imzalamaya veya rütbe atlamaya delalet eder. Görülen paranın miktarı ve yeniliği, elde edilecek başarının büyüklüğüyle doğru orantılıdır.'
      },
      {
        title: 'Rüyada Bozuk Para Görmek',
        content: 'Madeni paralar (özellikle birbirine çarpıp ses çıkaran paralar), genellikle halk arasında dönen dedikodulara, asılsız sözlere ve boş tartışmalara yorulur. Cebinizde bozuk para şıngırdaması, arkanızdan konuşulan lafların kulağınıza geleceğine işaret eder. Ancak parlak, gümüş veya altın madeni paralar ise küçük ama sürekli gelecek olan, bereketli kazançlara delalet eder.'
      },
      {
        title: 'Rüyada Yerde Para Bulmak',
        content: 'Yerde, yolda veya ummadık bir yerde para bulmak, hiç beklemediğiniz bir anda karşınıza çıkacak harika bir fırsatın habercisidir. Uzun süredir çözülemeyen bir sorununuzun, aniden belirecek bir yardım sayesinde çözüleceğine ve moralinizin çok yükseleceğine yorulur.'
      },
      {
        title: 'Rüyada Birine Para Vermek (Dağıtmak)',
        content: 'Rüyanızda kendi isteğinizle başkalarına para dağıtıyorsanız, bu çok hayırlıdır. Üzerinizdeki dertleri, tasaları ve ağırlıkları başınızdan savacağınıza, manevi olarak çok hafifleyeceğinize işarettir. Gerçek hayatta da bolca sadaka vermeniz veya ihtiyacı olanlara yardım etmeniz gerektiğine dair bir mesajdır.'
      },
      {
        title: 'Rüyada Sahte Para Görmek',
        content: 'Sahte para, tıpkı sahte dostlar gibidir. Çevrenizde size yalan söyleyen, göründüğü gibi olmayan ve sizi dolandırmaya (sadece maddi değil, duygusal olarak da sömürmeye) çalışan kurnaz bir insanın varlığına dair ciddi bir ilahi uyarıdır. İmzalanacak belgelere ve verilecek sözlere çok dikkat edilmelidir.'
      }
    ],
    religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre para rüyaları dikkatle yorumlanmalıdır. İbn Şirin ve diğer alimlere göre, üzerinde Allah\'ın kelamı yazılı altın veya gümüş sikkeler görmek ilme, Kuran okumaya ve dini vecibelere uymaya delalet ederken; üzerinde resimler bulunan yabancı veya bayağı paralar görmek dünya kelamına, dedikoduya, faydasız sözlere ve bazen de kavgaya işaret eder. Rüyada bir kimseye para verdiğini veya parasını evden dışarı attığını gören kişinin gam ve kederden kurtulacağına, borçluysa borcunu ödeyeceğine hükmedilir. Rüyada sayısız paraya sahip olmak, dünya hırsına kapılarak ahireti unutmaya bir ikaz olarak da yorumlanabilir.',
    psychologicalMeaning: 'Psikoanalitik açıdan para, saf potansiyel enerjidir ve doğrudan "güç, kontrol ve özdeğer" kavramlarını sembolize eder. Rüyada çok parası olduğunu gören kişi, uyanık hayatta olaylar üzerinde tam kontrol sağlamak, bağımsızlığını ilan etmek ve güvende hissetmek arzusundadır. Para kaybetmek ise, kontrolü kaybetme korkusu, yetersizlik hissi ve sosyal çevrede statü veya değer kaybetme kaygısıyla (inferiority complex) yakından ilişkilidir. Sigmund Freud, rüyalardaki parayı, çocukluk dönemindeki biriktirme ve mülkiyet güdülerinin (anal dönem) bir yansıması olarak değerlendirirken; modern psikoloji parayı, kişinin kendi yeteneklerine biçtiği değer (özgüven) olarak okur.',
    faqs: [
      {
        question: 'Rüyada yabancı para (Dolar, Euro vb.) görmek ne demektir?',
        answer: 'Farklı bir kültürle veya ülkeyle yapılacak bir işbirliğine, uzaklardan gelecek kazançlı bir habere veya kişinin ufkunu genişletecek yeni bir eğitim/kariyer yolculuğuna işarettir.'
      },
      {
        question: 'Rüyada ölüden (vefat etmiş birinden) para almak nasıl yorumlanır?',
        answer: 'Çok hayırlı bir rüyadır. Ölüden alınan her güzel şey müjdedir. Ummadığınız bir yerden gelecek yardıma, kesilmiş bir ümidin yeniden yeşermesine ve beklenmedik büyük bir ferahlığa delalet eder.'
      },
      {
        question: 'Cüzdanımın parasız, boş olduğunu görmek ne anlama gelir?',
        answer: 'Kişinin duygusal olarak tamamen tükendiğini, insanlara verecek sevgisinin kalmadığını veya manevi olarak büyük bir boşluk (depresyon) içinde olduğunu gösteren psikolojik bir alarmdır.'
      }
    ]
  },
  relatedSymbols: ['altin', 'olum']
};

const index = symbols.findIndex(s => s.slug === 'para');
if (index !== -1) {
  symbols[index] = updatedSymbol;
} else {
  symbols.push(updatedSymbol);
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully created para');
