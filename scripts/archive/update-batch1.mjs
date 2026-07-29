import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updates = [
  {
    slug: 'kedi',
    title: 'Rüyada Kedi Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada kedi görmek; sezgileri, bağımsız ruhu, dişil enerjiyi, gizemli bir kadını veya bazen de sinsi ve nankör bir dostu sembolize eden çok boyutlu bir imgedir.',
    content: {
      introduction: 'İnsanlık tarihi boyunca kediler, hem kutsal sayılıp tapınılan hem de karanlık güçlerle ilişkilendirilip korkulan son derece gizemli ve zıtlıklarla dolu canlılar olmuştur. Rüyada kedi görmek de bu tarihi ikiliği tam olarak yansıtır. Kedi; bir yandan zarafeti, bağımsızlığı, dişil enerjiyi ve çok güçlü sezgileri temsil ederken; diğer yandan sinsi bir düşmanı, nankörlüğü ve gizli tehlikeleri simgeler. Rüyanızdaki kedinin rengi, size karşı tutumu (uysal mı, saldırgan mı olduğu) ve rüyanın genel hissi, bu sembolün taşıdığı mesajı tamamen değiştirecek kilit unsurlardır. Kedi, evinize giren bir hırsızın veya hayatınıza girecek kurnaz bir insanın da habercisi olabilir.',
      generalMeaning: 'Rüya tabirlerinin çoğunda kedi, kişinin yakın çevresinde bulunan ama gerçek niyetini gizleyen, iki yüzlü, kurnaz ve sinsi bir kişiye (genellikle bir kadına veya fesat bir dosta) işaret eder. Sizinle dost gibi görünen, evinizde veya iş yerinizde rahatça dolaşan ama aslında menfaat peşinde koşan ve fırsatını bulduğunda arkanızdan iş çevirecek birinin varlığına dikkat çeker. Özellikle kedi sizi tırmalıyor veya ısırıyorsa, bu düşmandan göreceğiniz somut bir zarara, dedikoduya veya iftiraya delalet eder. Ancak kedi sembolünü sadece düşmanlıkla sınırlamak eksik olur. Eğer rüyanızda uysal, kendini sevdiren, mırıldanan bir kedi varsa, bu sizin içsel sezgilerinizin çok kuvvetlendiği bir döneme girdiğinizi, yaratıcılığınızın arttığını ve kadınlarla olan ilişkilerinizde (anne, eş, kız kardeş) olumlu gelişmeler yaşanacağını gösterir. Aynı zamanda kedinin bağımsız doğası, sizin de özgürlüğünüze ne kadar düşkün olduğunuzun veya kendi ayaklarınız üzerinde durma ihtiyacınızın bir yansımasıdır.',
      variations: [
        {
          title: 'Rüyada Siyah Kedi Görmek',
          content: 'Tarih boyunca batıl inançların odak noktası olan siyah kedi, rüyada genellikle gizemli, bilinmeyen ve korkulan durumlara işaret eder. Siyah kedi görmek, hayatınızda henüz netleşmemiş, belirsizliğini koruyan ve sizi endişelendiren bir problemin varlığına yorulur. Aynı zamanda çok kıskanç, kara büyü veya kötü enerji yayan, negatif bir insana da delalet edebilir.'
        },
        {
          title: 'Rüyada Beyaz Kedi Görmek',
          content: 'Beyaz renk masumiyeti temsil etse de, rüyada beyaz kedi görmek genellikle size masum ve zararsız gibi görünen, çok naif davranan ama içten içe kurnaz olan birine işaret eder. Diğer bir yoruma göre ise beyaz kedi, hayallerinize kavuşmak için kullanmanız gereken yaratıcı dişil enerjiyi ve saflığı temsil eder. Uysal bir beyaz kedi, huzura ve şefkate delalet eder.'
        },
        {
          title: 'Rüyada Kedi Yavrusu (Yavru Kedi) Görmek',
          content: 'Yavru kedi görmek çok olumlu bir semboldür. Hayatınıza girecek yeni bir sevince, masum ve temiz bir habere, bebek müjdesine veya yeni yeşeren umutlara yorulur. Merhamet duygunuzun yüksek olduğu ve korunmaya muhtaç insanlara veya projelere kol kanat gereceğiniz bir dönemi gösterir.'
        },
        {
          title: 'Rüyada Kedinin Tırmalaması veya Isırması',
          content: 'Bu rüya, etrafınızdaki sinsi düşmanın veya kıskanç bir dostun eyleme geçeceğinin ve size zarar vereceğinin kesin bir uyarısıdır. Görülen zarar genellikle fiziksel değil, itibar zedelenmesi, dedikodu, iftira veya maddi ufak bir kayıp şeklindedir. Kedi tarafından ısırılmak aynı zamanda uzun sürecek ama sonunda iyileşecek bir hastalığa da yorulabilir.'
        },
        {
          title: 'Rüyada Eve Kedi Girmesi',
          content: 'Evinize dışarıdan giren bir kedi, hanenize sızmaya çalışan kötü niyetli birine (bazı tabirlerde hırsıza) yorulur. Eğer kediyi evden kovduğunuzu görürseniz, bu tehlikeyi savuşturacağınıza, kötü niyetli kişiyi hayatınızdan çıkaracağınıza işarettir. Kedi evde huzurla uyuyorsa, hanedeki kadının sözünün geçtiğine ve evin bereketine delalet eder.'
        },
        {
          title: 'Rüyada Kedi Sürüsü Görmek',
          content: 'Etrafınızda çok sayıda kedinin toplanması, dedikodu kazanının kaynadığına, çevrenizde boş konuşan ve sürekli birbirinin arkasından iş çeviren bir kalabalığın ortasında kaldığınıza işarettir. Aynı zamanda zihninizin çok fazla küçük detayla meşgul olduğunu ve odaklanmakta zorlandığınızı da psikolojik olarak gösterir.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara (özellikle Nablusi ve Kirmani gibi alimlere) göre rüyada kedi görmek genellikle hizmetkar, ev halkından olan bir hırsız veya kurnaz bir kadın olarak yorumlanır. Kedinin ısırması veya tırmalaması uzun sürecek bir hastalığa veya düşmandan gelecek keder ve sıkıntıya işarettir. Rüyasında bir kedi sattığını gören kişinin malını infak edeceği (dağıtacağı) veya maddi bir kayba uğrayacağı söylenir. Kedinin miyavlaması veya bağırması, gıybet eden, fitne çıkaran ve insanları birbirine düşüren fena ahlaklı bir kişinin varlığına delalet eder. Rüyada kedi eti yemek ise haram mala veya sihirle uğraşmaya işaret eden olumsuz bir rüyadır.',
      psychologicalMeaning: 'Psikoanalitik açıdan kedi, Carl Jung\'un "Anima" arketipinin (erkeğin içindeki dişil yan veya kadının kendi dişiliği) en klasik hayvan sembollerinden biridir. Kedi, zarafeti, cinselliği, bağımsızlığı, gizemi ve elde edilmesi zor olanı temsil eder. Rüyasında vahşi veya saldırgan bir kedi gören kişi, uyanık hayatında kendi cinselliğini veya kadınlarla olan ilişkilerini bastırmış, bunlardan korkuyor veya bu konuda bir çatışma yaşıyor olabilir. Kedi aynı zamanda kedigillerin doğal özelliği olan "gözlemcilik ve sezgi" ile ilgilidir. Bilinçaltınız, tehlikeleri bir kedi gibi sessizce gözlemlemenizi, mantıktan ziyade içgüdülerinize güvenmenizi size fısıldamaktadır.',
      faqs: [
        {
          question: 'Rüyada kendi beslediğim evcil kedimi görmem ne anlama gelir?',
          answer: 'Eğer kediniz zaten evcil hayvanınızsa, bu rüya çoğu zaman bilinçaltınızın günlük bir yansımasıdır veya o hayvana duyduğunuz sevginin, kaybetme korkunuzun bir dışavurumudur. Tabiri, yabancı bir kedi görmekten farklıdır.'
        },
        {
          question: 'Rüyada kedi öldürmek kötü müdür?',
          answer: 'Rüya tabirlerinde hayvan öldürmek genelde kötü algılansa da, kedinin sinsi bir düşmanı temsil etmesinden dolayı rüyada saldırgan bir kediyi öldürmek, bir düşmana karşı galip gelmeye, büyük bir tehlikeyi savuşturmaya yorulur.'
        },
        {
          question: 'Kedinin konuştuğunu görmek nasıl yorumlanır?',
          answer: 'Sezgilerinizin sizinle doğrudan iletişime geçtiğini, bilinçaltınızdan gelen bir mesajı dinlemeniz gerektiğini gösterir. Aynı zamanda çevrenizdeki kurnaz birinin sizinle bir sırrını paylaşacağına da yorulabilir.'
        }
      ]
    },
    relatedSymbols: ['kopek', 'yilan', 'ev', 'kan']
  },
  {
    slug: 'kopek',
    title: 'Rüyada Köpek Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada köpek görmek; dostluğu, sonsuz sadakati, koruma güdüsünü temsil ettiği kadar, bayağı düşmanlara ve nefse de işaret eden güçlü bir semboldür.',
    content: {
      introduction: 'İnsanoğlunun en eski ve en sadık dostu olan köpek, rüya dünyasında da genellikle dostluk, koruma ve sadakat kavramlarıyla karşımıza çıkar. Ancak tıpkı kedilerde olduğu gibi, rüyada görülen köpeğin niteliği (cinsi, rengi, tavrı) rüyanın mesajını tamamen şekillendirir. Sevimli, uysal ve korumacı bir köpek uyanık hayattaki güvenilir dostlarınızı, size destek olan güçlü figürleri simgelerken; havlayan, saldıran veya kuduz bir köpek ise çevrenizdeki tehlikeli, cahil, inatçı ve zarar vermeye meyilli düşmanları temsil eder. Rüyada köpek görmek aynı zamanda kişinin kendi içgüdüsel sadakatini ve ait olma ihtiyacını da yansıtır.',
      generalMeaning: 'Rüya tabirlerinin büyük bir kısmına göre rüyada köpek görmek, sefih (akılsız), cahil, sürekli konuşan ama icraatı olmayan, havlayıp duran ama ısıramayan bir düşmana işaret eder. Bu düşman, size doğrudan büyük bir zarar verecek güce ve zekaya sahip değildir; ancak dedikodularla, küçük oyunlarla ve ısrarıyla canınızı sıkabilir. Ancak rüyanın bağlamı olumluysa, yani köpek sizinle dostça oynuyor, sizi koruyor veya size eşlik ediyorsa; bu rüya çok sadık, zor gününüzde sizi asla yalnız bırakmayacak, koruyucu ve fedakar bir dosta sahip olduğunuza (veya böyle bir dost edineceğinize) yorulur. Çoban köpeği veya bekçi köpeği görmek, ailenizi, malınızı ve itibarınızı koruyan manevi bir gücün veya saygın bir kişinin varlığına delalet eder. Rüyada köpek beslemek, etrafınızdaki zayıf ve muhtaç kişilere yardım edeceğinizi, liderlik vasıflarınızın ön plana çıkacağını gösterir.',
      variations: [
        {
          title: 'Rüyada Siyah Köpek Görmek',
          content: 'Siyah köpek, genellikle inatçı, kindar ve tehlikeli bir düşmana yorulur. Siyah renk korkuyu ve karanlığı temsil ettiğinden, bu düşmanın size zarar vermek için pusuda beklediğine işaret eder. Psikolojik olarak ise siyah köpek, ehlileştirilememiş içsel öfkeyi ve derin depresif duyguları (İngilizce\'de depresyon için kullanılan "black dog" metaforu gibi) temsil edebilir.'
        },
        {
          title: 'Rüyada Beyaz Köpek Görmek',
          content: 'Beyaz köpek, niyetini açıkça belli eden, saf, temiz kalpli ve sadık bir dosta veya zararsız bir rakibe işaret eder. Hayatınıza girecek olan, size çok sadık kalacak, iyiliksever ve iyi huylu bir insana yorulur. Genellikle rüya sahibinin hayrına olan durumları simgeler.'
        },
        {
          title: 'Rüyada Köpeğin Isırması',
          content: 'Havlayan köpek zararsız bir düşmanı simgelerken, köpeğin sizi ısırması düşmanınızdan fiilen bir zarar göreceğinize, bir iftiraya uğrayacağınıza veya çok güvendiğiniz, sadakatinden emin olduğunuz bir arkadaşınızın sizi sırtınızdan vuracağına (nankörlük edeceğine) delalet eder. Isırılan yerden kan akması, bu zararın maddi kayba da yol açacağını gösterir.'
        },
        {
          title: 'Rüyada Köpek Sürüsü Görmek',
          content: 'Bir grup köpeğin etrafınızı sarması, size karşı birleşmiş, cahil ve kötü niyetli bir topluluğa işaret eder. İş yerinde veya sosyal hayatta aleyhinize kurulan bir komployu veya dedikodu ağını simgeler. Ancak sürünün içinden yara almadan çıkmak, bu topluluğun size hiçbir zarar veremeyeceğine yorulur.'
        },
        {
          title: 'Rüyada Köpek Yavrusu (Enik) Görmek',
          content: 'Çok sevimli bir rüya olduğu gibi tabiri de güzeldir. Şirin bir köpek yavrusu, aileye katılacak sevimli bir çocuğa, yeni ve saf bir dostluğun temellerinin atılmasına veya rüya sahibinin içindeki masumiyetin, şefkat duygusunun ortaya çıkmasına işarettir. Sevgi dolu bir dönemin habercisidir.'
        },
        {
          title: 'Rüyada Kuduz Köpek Görmek',
          content: 'En tehlikeli köpek rüyalarından biridir. Kuduz köpek, tamamen kontrolden çıkmış, mantığını yitirmiş, size zarar vermek uğruna kendini de yok etmeye hazır, tehlikeli, hastalıklı düşüncelere sahip azılı bir düşmana işaret eder. Bu rüya ciddi bir uyarı niteliğindedir; çevrenizdeki bazı kişilerden uzak durmanız gerektiğini gösterir.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre köpek; düşük ahlaklı, himmetsiz, cahil ve sefih (akılsız) bir adama veya düşmana yorulur. Köpeğin havlaması böyle birinden işitilecek çirkin ve boş sözlere, ısırması ise ondan gelecek zarara işarettir. Av köpeği görmek; şeref, izzet ve yüksek bir makama ulaşmaya, düşmana karşı zafer kazanmaya delalet eder. Çoban köpeği görmek, elde edilecek büyük bir mal ve mülke, ailenin güvende olmasına yorulur. Rüyada köpeğin sütünü içmek, büyük bir korku yaşamaya veya bir zalimle dost olmaya işaret ederken; köpeğin üzerine yaslandığını gören kişinin, güvendiği bir düşmanından destek alacağı yorumu yapılmıştır.',
      psychologicalMeaning: 'Psikolojide köpek, sadakatin, evcilleştirilmiş içgüdülerin ve koşulsuz sevginin sembolüdür. Rüyanızda köpekle kurduğunuz ilişki, aslında kendi içgüdülerinizle, hayvan doğanızla ve sadakat duygunuzla olan ilişkinizi yansıtır. Saldırgan bir köpek, bastırdığınız öfkenin, hırsların ve dizginleyemediğiniz cinsel/agresif dürtülerin kontrolden çıktığını gösterir. Köpek, Freudyen analizde genellikle eril (maskülen) enerjiyi, bekçiliği ve otoriteyi temsil ederken; rüyada bir köpeği evcilleştirmek veya onunla oynamak, kişinin kendi ilkel dürtüleriyle barışması ve onlarla uyum içinde yaşamayı öğrenmesi anlamına gelir.',
      faqs: [
        {
          question: 'Rüyada köpeğin beni kovalaması ne anlama gelir?',
          answer: 'Sizden sürekli menfaat bekleyen, paçanıza yapışmış ve kurtulamadığınız sorunlara veya kişilere işaret eder. Vicdan azabından kaçmaya çalıştığınızın da bir göstergesi olabilir.'
        },
        {
          question: 'Rüyada köpek sevmek (okşamak) nasıl yorumlanır?',
          answer: 'Eski bir düşmanla veya rakiple barışmaya, aradaki buzları eritmeye veya inatçı birini tatlı dille ikna etmeye yorulur. Merhametinizin ve affediciliğinizin yüksek olduğunu gösterir.'
        },
        {
          question: 'Rüyada köpek havlaması duymak ne demektir?',
          answer: 'Arkanızdan atıp tutan, asılsız iftiralar ve boş dedikodular çıkaran insanların varlığına işarettir. "İt ürür, kervan yürür" atasözünde olduğu gibi, bu sözlere aldırış etmemeniz gerektiğine dair bir uyanıştır.'
        }
      ]
    },
    relatedSymbols: ['kedi', 'yilan', 'bebek', 'kan']
  },
  {
    slug: 'bebek',
    title: 'Rüyada Bebek Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada bebek görmek; saf masumiyeti, umudu, müjdeli haberleri, hayatınızda filizlenecek yeni başlangıçları ve içsel yaratıcılığı sembolize eden çok hayırlı bir imgedir.',
    content: {
      introduction: 'Bebekler hayatın başlangıcını, saflığı, günahsızlığı ve geleceğe dair en taze umutları temsil eder. Rüyada bebek görmek, rüya tabirleri dünyasında istisnasız en hayırlı, en aydınlık ve ruhu en çok ferahlatan sembollerden biri olarak kabul edilir. Bu rüya, rüya sahibinin hayatında kışın bitip baharın başladığının, uzun süren dert ve sıkıntıların yerini ferahlığa, neşeye ve taze başlangıçlara bırakacağının müjdecisidir. Rüyada görülen bebeğin cinsiyeti, sağlıklı olup olmaması, ağlaması veya gülmesi gibi detaylar, bu sevinçli mesajın hangi alanda ve ne şekilde tezahür edeceğini anlamamıza yardımcı olur. Bebek, hayatınızda büyüteceğiniz yeni bir fikrin, projenin veya aşkın da en güzel temsilidir.',
      generalMeaning: 'Genel rüya tabirlerine göre rüyada temiz, sağlıklı ve güzel yüzlü bir bebek görmek, çok yakında alınacak son derece müjdeli ve sevindirici bir habere, haneye doğacak büyük bir neşeye ve ferahlığa işarettir. Rüyayı gören kişi eğer sıkıntılı, borçlu veya hastaysa; bebek rüyası tüm bu dertlerden kurtuluşun, şifanın ve maddi/manevi zenginliğin kapıda olduğunu gösterir. Yeni bir işe başlamak, yeni bir ilişkiye adım atmak veya mevcut hayatınızda sizi çok mutlu edecek tertemiz bir sayfa açmak anlamına gelir. Rüyada bebeği kucağına alıp sevmek, kişinin emek verdiği, üzerine titrediği bir işin çok güzel meyveler vereceğine, sevap kazanacağı işler yapacağına yorulur. Ancak rüyada cılız, kirli, hasta veya sürekli ağlayan bir bebek görmek, sizin ilgi ve şefkat bekleyen eksik yönlerinize, ilgilenmeniz gereken yarım kalmış projelere veya ufak tefek can sıkıcı haberlere işaret edebilir.',
      variations: [
        {
          title: 'Rüyada Kız Bebek Görmek',
          content: 'Rüya tabirlerinde kız çocuğu görmek, dünyalığa, zenginliğe, berekete, çok büyük bir şerefe ve itibara yorulur. Kız bebek, şansın dönmesi, işlerin rast gitmesi, borçların kolayca ödenmesi ve hane içine dolacak olan sevgi ve merhamet anlamına gelir. Zorlukların ardından gelecek kolaylığın ve bolluğun müjdecisidir.'
        },
        {
          title: 'Rüyada Erkek Bebek Görmek',
          content: 'Erkek bebek görmek de oldukça hayırlıdır ve genellikle güce, kudrete, devlete ve resmi makamlardan gelecek müjdeli haberlere (terfi, atama, başarı vb.) delalet eder. Erkek bebek, dirayeti, gücü ve müjdeli bir haberle gelecek olan ferahlamayı simgeler. Bazı kaynaklara göre kız bebek doğrudan müjde, erkek bebek ise müjdenin getireceği kalıcı güçtür.'
        },
        {
          title: 'Rüyada Bebek Emzirmek',
          content: 'Rüyada kendi bebeğini veya başka bir bebeği emzirdiğini görmek, kişinin çevresine çok faydalı olacağına, ilmini, parasını veya sevgisini insanlarla paylaşacağına işarettir. Bekar bir kadın için evliliğe ve anne olmaya, erkek için ise bolluk ve berekete, helal kazanca yorulur. Süt, ilim ve hikmettir; emzirmek bunu başkalarına aktarmaktır.'
        },
        {
          title: 'Rüyada Ağlayan Bebek Görmek',
          content: 'Ağlayan bir bebek, uyanık hayatta ihmal ettiğiniz, görmezden geldiğiniz bir sorunun (veya kendi iç dünyanızdaki bir yaranın) artık ilgi ve şefkat beklediğini gösterir. Aynı zamanda çevrenizde size muhtaç olan, yardım dileyen birinin varlığına işaret eder. Eğer ağlayan bebeği susturup uyutuyorsanız, zor bir problemi kendi çabanızla başarıyla çözeceğinize delalet eder.'
        },
        {
          title: 'Rüyada Konuşan Bebek Görmek',
          content: 'Yeni doğmuş veya henüz konuşma çağında olmayan bir bebeğin konuştuğunu görmek, mucizevi bir habere, çok şaşırtıcı ve sevindirici bir gelişmeye veya uzun zamandır saklanan bir sırrın açığa çıkmasına yorulur. Bebeğin söylediği sözler genellikle gerçektir ve dikkate alınmalıdır, zira masumiyetin ağzından dökülen kelimeler ilham niteliği taşır.'
        },
        {
          title: 'Rüyada İkiz Bebek Görmek',
          content: 'İkiz bebek, sevincin, bereketin ve kısmetin çifte kavrulmuş (iki kat) haliyle geleceğine işarettir. Beklenmedik, art arda gelecek iki büyük müjdeyi, aynı anda başlayacak iki verimli projeyi veya maddi kazancın bir anda ikiye katlanmasını müjdeler.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri geleneğini takip eden kaynaklara göre rüyada bebek görmek; saf fıtrata, günahsızlığa, meleklerin varlığına ve ilahi rahmete delalet eder. Kirmani ve Nablusi\'ye göre kız bebek görmek, ferahlığa, bolluğa, kolaylığa ve çok büyük bir berekete; erkek bebek ise müjdeye ve güce yorulur. Rüyasında kundakta bir bebek gören veya onu kucağına alan kimsenin hapislikten kurtulacağına, borcunu ödeyeceğine, fakirlikten zenginliğe geçeceğine ve sıkıntılarından arınacağına inanılır. Ancak bebeğin kirli ve çirkin olması, kişinin işlediği günahlara veya karşılaşacağı hafif bir keder ve üzüntüye yorumlanmıştır.',
      psychologicalMeaning: 'Carl Jung ve diğer psikanalitik yaklaşımlara göre rüyadaki bebek, "içsel çocuk (inner child)" arketipinin doğrudan yansımasıdır. Bu sembol, rüya sahibinin kendi içindeki masumiyeti, kırılganlığı, koşulsuz sevgi ihtiyacını ve oyunculuğu temsil eder. Yetişkinlerin rüyasında bebek görmesi, ruhsal bir yenilenme evresine girildiğini, yepyeni bir yeteneğin, yaratıcı bir fikrin veya kişiliğin yeni bir yönünün "doğmakta" olduğunu simgeler. Bebek, gelişime açık, şekillenmeyi bekleyen saf potansiyeldir. Bilinçaltınız size, tıpkı bir bebeğe bakar gibi, kendi içinizde yeni filizlenen bu potansiyele (veya unuttuğunuz masumiyetinize) özen göstermenizi, onu beslemenizi ve korumanızı söylemektedir.',
      faqs: [
        {
          question: 'Hamile kalmak isteyen birinin bebek rüyası görmesi ne anlama gelir?',
          answer: 'Genellikle bu durum bilinçaltının yoğun bir arzusunun yansımasıdır (wish-fulfillment). Psikolojik olarak anne olma isteğinin rüyaya yansımasıdır ancak tabirsel olarak da muradın gerçekleşeceğine dair güzel bir müjde olarak kabul edilir.'
        },
        {
          question: 'Rüyada ölü (vefat etmiş) bebek görmek ne demektir?',
          answer: 'Bu rüya üzücü görünse de tabiri farklıdır; başlamadan biten bir işe, iptal olan bir projeye veya vazgeçtiğiniz bir hayale işaret eder. Ölüm yeni bir başlangıç olduğundan, bu bitişin aslında sizin için daha hayırlı olabileceğini gösterir.'
        },
        {
          question: 'Rüyada terk edilmiş, sahipsiz bir bebek bulmak ne anlama gelir?',
          answer: 'Hiç beklemediğiniz bir yerden elinize geçecek büyük bir fırsata, helal bir kazanca, mirasa veya kendi içinizde unuttuğunuz çok değerli bir yeteneği (örneğin sanat, müzik yeteneği) yeniden keşfetmeye yorulur.'
        }
      ]
    },
    relatedSymbols: ['olum', 'su', 'aglamak', 'kan']
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
console.log('Successfully updated kedi, kopek, bebek');
