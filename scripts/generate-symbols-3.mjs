import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const existingPath = path.join(contentDir, 'symbols.json');
let existingSymbols = [];
if (fs.existsSync(existingPath)) {
  existingSymbols = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
}

// Helper for generating deep detailed content for remaining symbols
function generateDeepContent(title, slug, category, shortDesc, coreMeaning, relMeaning, psyMeaning, vars) {
  return {
    slug, title, category, shortDescription: shortDesc,
    content: {
      introduction: `${title} sembolü, insanlık tarihinin en köklü ve en derin metaforlarından birini yansıtır. Rüyanın bağlamına ve hissiyatına göre, hem korkutucu bir uyarı hem de içsel bir aydınlanma sürecinin habercisi olabilir. Bu sembolün şifresini çözmek için, rüya esnasındaki duygusal tepkileriniz ve sembolün detayları hayati öneme sahiptir.`,
      generalMeaning: `${coreMeaning} Bu rüya, sadece bir haberci değil, aynı zamanda bilinçaltınızın size tuttuğu bir aynadır. Uyanık hayatta görmezden geldiğiniz, bastırdığınız veya yüzleşmekten korktuğunuz gerçeklerin yüzeye çıkmasıdır. Hayatınızdaki mevcut durağanlık veya kriz durumlarında, bu sembol size yol göstermek ve değişim için gereken cesareti vermek üzere rüyanıza misafir olmuştur.`,
      variations: vars,
      religiousMeaning: `${relMeaning} Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre, bu tür güçlü semboller tesadüf değildir. Rüya sahibinin manevi dünyasındaki dalgalanmaların, ilahi bir uyarının veya yakın zamanda elde edilecek bir nimetin müjdecisi olarak kabul edilir.`,
      psychologicalMeaning: `${psyMeaning} Carl Jung'un kolektif bilinçdışı teorisine göre, bu sembol arketipik bir imgedir. Yani sadece kişisel anılarınızdan değil, tüm insanlığın ortak hafızasından beslenir. Ego ile gölge arasındaki çatışmanın veya bireyleşme (kendini gerçekleştirme) sürecindeki sancıların görselleşmiş halidir.`,
      faqs: [
        { question: `Bu rüya her zaman olumsuz mu yorumlanır?`, answer: `Kesinlikle hayır. Çoğu insan bu rüyadan korkarak uyansa da, aslında büyük bir dönüşümün ve şifanın müjdecisidir.` },
        { question: `Bu rüyayı sık sık görüyorsam ne yapmalıyım?`, answer: `Bilinçaltınız ısrarla aynı mesajı veriyorsa, uyanık hayatta çözmeniz gereken toksik bir ilişki veya bitirmeniz gereken bir süreç var demektir.` },
        { question: `Psikolojik destek almamı gerektirecek bir durum mu?`, answer: `Rüyalar sadece semboliktir. Ancak rüya sonrası aşırı kaygı yaşıyorsanız, bu içsel bir kaygının yansımasıdır ve bunu profesyonel destekle çözmek faydalı olabilir.` }
      ]
    },
    relatedSymbols: ['su', 'kedi', 'olum']
  };
}

const newSymbols = [
  generateDeepContent('Rüyada Uçmak', 'ucmak', 'eylemler', 'Özgürlük arzusunu, yükselişi ve sorunların üstesinden gelmeyi simgeler.', 
    'Uçmak, kişinin üzerindeki maddi ve manevi ağırlıklardan kurtulup tam bir özgürlüğe kavuşmasını temsil eder.', 'Manevi mertebenin yükselmesine ve duaların kabulüne delalet eder.', 'Egonun sınırlarını aşma ve potansiyelini gerçekleştirme arzusudur.', [
      {title: 'Kanatsız Uçmak', content: 'Kendi gücünüzle engelleri aşacağınıza ve kimseye muhtaç olmadan yükseleceğinize işarettir.'},
      {title: 'Uzaya Uçmak', content: 'Sınır tanımayan hayallere, çok büyük projelere ve eşine az rastlanır bir başarıya yorulur.'}
    ]),
  generateDeepContent('Rüyada Kedi Görmek', 'kedi', 'hayvanlar', 'Sezgileri, bağımsızlığı, gizemli bir kadını veya sinsi bir dostu sembolize eder.', 
    'Kedi rüyaları kişinin sezgilerine güvenmesi gerektiğine veya çevresindeki iki yüzlü insanlara dikkat çeker.', 'Eski tabirlerde kedi hizmetkar veya hırsız olarak, bazen de nankörlük olarak yorumlanır.', 'Dişil enerjiyi, gizemi, bağımsızlığı ve içgüdüsel davranışları simgeler.', [
      {title: 'Siyah Kedi Görmek', content: 'Genellikle kötü şans veya büyülü/gizemli olaylarla ilişkilendirilse de, derin sezgilere işaret eder.'},
      {title: 'Kedi Sevmek', content: 'Düşmanla dost olmaya veya zor bir insanı ikna etmeye yorulur.'}
    ]),
  generateDeepContent('Rüyada Köpek Görmek', 'kopek', 'hayvanlar', 'Sadakati, korumayı, dostluğu ve bazen de inatçı düşmanları temsil eder.', 
    'Köpek sadakatin simgesidir. Rüyada köpek görmek size çok sadık bir dosta veya sizi koruyan bir güce işaret eder.', 'İslami tabirlerde köpek çoğu zaman sefih (akılsız) bir düşmana veya hizmetkara yorulur.', 'Kişinin içgüdüsel sadakatini ve ait olma ihtiyacını temsil eder.', [
      {title: 'Köpek Isırması', content: 'Çok güvendiğiniz bir dostunuzdan göreceğiniz ihanete ve acıya yorulur.'},
      {title: 'Havlayan Köpek', content: 'Zarar veremeyecek ama can sıkıcı laflar eden, dedikoducu kişileri simgeler.'}
    ]),
  generateDeepContent('Rüyada Bebek Görmek', 'bebek', 'insanlar', 'Masumiyeti, yeni başlangıçları, temiz haberi ve umudu simgeler.', 
    'Bebek rüyası en güzel rüyalardan biridir. Hayatınızda yepyeni, tertemiz bir sayfanın açılacağını, dertlerin biteceğini müjdeler.', 'Çok büyük bir sevince, günahlardan arınmaya ve Allah\'ın rahmetine delalet eder.', 'Kişinin içindeki "içsel çocuk" arketipini, masumiyeti ve yeni bir projenin doğuşunu simgeler.', [
      {title: 'Ağlayan Bebek', content: 'Şefkat ve ilgi bekleyen işlerinize, ihmal ettiğiniz duygularınıza dikkat çeker.'},
      {title: 'Gülen Bebek', content: 'Çok yakın zamanda alınacak harika bir habere ve ferahlığa işarettir.'}
    ]),
  generateDeepContent('Rüyada Kan Görmek', 'kan', 'soyut-kavramlar', 'Yaşam enerjisini, şiddeti, tutkuyu veya geçersiz kılınan (bozulan) durumları sembolize eder.', 
    'Kan, hayatın kaynağıdır. Rüyada kan görmek büyük bir enerji patlamasına, tutkulu olaylara veya bazen de rüyanın bozulduğuna delalet eder.', 'Eski alimlerin çoğuna göre kan görmek rüyayı bozar. Ancak kan kaybetmek mal kaybına da yorulabilir.', 'Libidoyu, öfkeyi, bastırılmış şiddeti ve canlılık arzusunu temsil eder.', [
      {title: 'Kan Kaybetmek', content: 'Enerjinizi sömüren durumlara, aşırı yorgunluğa ve motivasyon kaybına yorulur.'},
      {title: 'Kan İçmek', content: 'Haram mala bulaşmaya veya büyük bir günaha işaret edebilir.'}
    ]),
  generateDeepContent('Rüyada Ağlamak', 'aglamak', 'eylemler', 'Gözyaşı dökmek, sanılanın aksine ferahlamaya, sevince ve ruhsal arınmaya işarettir.', 
    'Ağlamak, içte biriken zehrin atılmasıdır. Rüyada ağlayan kişi uyanık hayatta feraha çıkar ve yüzü güler.', 'Allah korkusuyla ağlamak çok hayırlıdır, günahların affına ve manevi dereceye işarettir.', 'Duygusal katarsis (arınma) yaşama ihtiyacını ve bastırılmış kederin serbest kalmasını simgeler.', [
      {title: 'Sessizce Ağlamak', content: 'Büyük bir müjdeye, gizli bir sevince ve derinden gelen huzura delalet eder.'},
      {title: 'Hıçkırarak Ağlamak', content: 'Kısa süreli bir strese ancak ardından gelecek büyük bir rahatlamaya yorulur.'}
    ]),
  generateDeepContent('Rüyada Ateş Görmek', 'ates', 'doga', 'Tutkuyu, yaratıcılığı, aynı zamanda öfkeyi ve yıkıcı bir tehlikeyi simgeler.', 
    'Ateş hem ısıtır hem yakar. Hayatınızda büyük bir enerji, tutkulu bir aşk veya kontrol edilemez bir öfke patlaması olabilir.', 'Zararsız ateş müjde ve berekettir. Ancak yakan ateş fitneye, günaha ve ilahi cezaya yorulur.', 'Transformasyonu (dönüşümü), simyayı ve ruhun ateşle arınarak olgunlaşmasını temsil eder.', [
      {title: 'Ateş Yakmak', content: 'Yeni ve büyük bir projeye başlamaya, çevrenizi aydınlatmaya işarettir.'},
      {title: 'Evin Yanması', content: 'Hanede çıkacak büyük bir tartışmaya veya ani bir değişime delalet eder.'}
    ])
];

fs.writeFileSync(path.join(contentDir, 'symbols-3.json'), JSON.stringify(newSymbols, null, 2));

const all = [...existingSymbols, ...newSymbols];
fs.writeFileSync(existingPath, JSON.stringify(all, null, 2));
console.log('Merged part 3 into symbols.json.');
