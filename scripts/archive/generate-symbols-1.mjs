import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const symbols = [
  {
    slug: 'yilan',
    title: 'Rüyada Yılan Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada yılan görmek, genellikle gizli düşmanlara, içsel korkulara, büyük ruhsal değişimlere, şifaya ve yenilenmeye işaret eden son derece güçlü bir semboldür.',
    content: {
      introduction: 'Rüyada yılan görmek, insanlık tarihi boyunca en sık karşılaşılan, sembolik anlamı en derin ve en güçlü rüyalardan biridir. Farklı kültürlerde, mitolojilerde ve dinlerde hem bilgeliği, sonsuzluğu ve şifayı hem de sinsi düşmanları, tehlikeyi ve karanlığı temsil eden yılan, rüyanın bağlamına göre çok çeşitli şekillerde yorumlanır. Rüyanızdaki yılanın rengi, boyutu, size karşı tutumu ve rüyanın geçtiği mekan, bu karmaşık sembolün şifresini çözmek için hayati öneme sahiptir.',
      generalMeaning: 'Rüya tabircilerinin büyük bir kısmına göre rüyada yılan görmek, çevrenizde size dost gibi görünen ama aslında arkanızdan iş çeviren, kötülüğünüzü isteyen sinsi bir düşmanın varlığına işarettir. Bu düşman, iş hayatınızda ayağınızı kaydırmak isteyen bir meslektaşınız, sosyal çevrenizde sizi kıskanan bir arkadaşınız veya ailenizden biri bile olabilir. Yılanın sessizce yaklaşması, bu tehlikenin henüz farkında olmadığınıza delalet eder. Ancak yılan sembolünün tek anlamı düşmanlık değildir. Yılan aynı zamanda periyodik olarak kabuk değiştiren, eskisini atıp yenilenen bir canlı olduğu için, hayatınızda yaşanacak köklü bir değişimin, eski alışkanlıklardan kurtulmanın ve ruhsal bir dönüşümün de habercisi olabilir. Özellikle hayatınızın durağan veya sıkıntılı bir evresindeyseniz, yılan rüyası artık kabuğunuzu kırma vaktinin geldiğini gösterir. Ayrıca, antik çağlardan beri tıbbın ve eczacılığın sembolü olan yılan, sağlık sorunları yaşayan veya hastalık sürecinde olan biri için şifaya kavuşmaya, bedensel ve ruhsal iyileşmeye delalet eder.',
      variations: [
        {
          title: 'Rüyada Siyah Yılan Görmek',
          content: 'Rüyada siyah yılan görmek, genellikle çok güçlü, cesur, inatçı ve tehlikeli bir düşmana işaret eder. Siyah renk, bilinmezi ve karanlığı temsil ettiğinden, bu tehlikenin kaynağını henüz tam olarak göremediğiniz anlamına gelir. Eğer yılan büyük ve kalınsa, bu kişinin gücünün ve etki alanının da büyük olduğu, size verebileceği zararın boyutunun ciddiyeti vurgulanır. Ancak siyah yılan aynı zamanda kişinin kendi içsel karanlığıyla, yıllarca bastırdığı korkuları, travmaları veya yüzleşmekten kaçındığı gölge yanlarıyla yüzleşmesi gerektiğine dair çok güçlü bir psikolojik mesaj da taşır. Bu yüzleşme acı verici olsa da, sonunda büyük bir aydınlanma getirecektir.'
        },
        {
          title: 'Rüyada Beyaz Yılan Görmek',
          content: 'Beyaz yılan, genellikle zarar vermeyecek, zayıf veya niyetini belli eden bir düşmana yorumlanır. Rüyasında beyaz yılan gören kişinin, düşmanlarının planlarını kolayca fark edeceği ve önlem alacağı düşünülür. Diğer bir yoruma göre ise beyaz yılan, rüya sahibinin saf ve temiz duygularla karşılaşacağı bir değişime, manevi bir arınma sürecine girmesine veya hayatına girecek bilge ve yol gösterici bir karaktere işaret eder. Eğer beyaz yılan size dokunmuyor ve sadece etrafınızda geziniyorsa, bu korunma altında olduğunuza ve meleklerin yardımıyla zorlukları aşacağınıza yorulur.'
        },
        {
          title: 'Rüyada Yılan Öldürmek',
          content: 'Rüyada bir yılanı öldürmek, rüya tabirlerinde en hayırlı görülen eylemlerden biridir. Bu rüya, rüya sahibinin karşısına çıkan engelleri aşacağına, kendisine düşmanlık besleyen kişilere karşı kesin bir zafer kazanacağına ve uzun süredir devam eden sıkıntılarından kurtulacağına yorumlanır. Yılanı kendi elleriyle veya bir aletle öldürdüğünü gören kişi, hayatının kontrolünü yeniden eline alır, korkularını yener ve gücünü kanıtlar. Eğer yılanı öldürdükten sonra yılan parçalara ayrılıyorsa, düşmanınızın bir daha toparlanamayacak şekilde mağlup edileceğine işarettir. Bu aynı zamanda içsel şeytanlarınızı veya kötü bir alışkanlığınızı (sigara, alkol, kumar vb.) tamamen yendiğinizin müjdecisidir.'
        },
        {
          title: 'Rüyada Yılan Tarafından Isırılmak',
          content: 'Rüyada yılanın sizi ısırması, uyanıkken de etkisini uzun süre hissedeceğiniz sarsıcı bir deneyimdir. Bu rüya, düşmanınızdan gelecek ani bir zarara, çok güvendiğiniz birinden göreceğiniz beklenmedik bir ihanete veya can sıkıcı bir duruma işarettir. Isırığın yeri ve acısı önemlidir. Eğer yılan sizi zehirli bir şekilde ısırıyor ve acı çekiyorsanız, bu zararın sizi maddi ve manevi olarak yıpratacağına yorumlanır. Ancak yılan ısırdıktan sonra hiçbir acı hissetmediyseniz, düşmanınızın hamlesinin boşa çıkacağına, size verilmek istenen zararı kolayca atlatıp yolunuza devam edeceğinize delalet eder. Bazı eski tabirlere göre ise, yılanın ısırması, kişinin eline geçecek haram bir paraya veya beklenmedik bir yerden gelecek zoraki bir mala işaret edebilir.'
        },
        {
          title: 'Rüyada Çok Sayıda Yılan Görmek',
          content: 'Etrafınızı saran, yerde kaynayan veya üzerinize doğru gelen birçok yılan görmek, çevrenizdeki dost bildiğiniz kişilerin aslında size karşı kıskançlık, rekabet veya kötü niyet beslediğine dikkat çeker. Bu rüya, sosyal çevrenizi, iş arkadaşlarınızı veya akrabalarınızı ciddi bir şekilde gözden geçirmeniz için adeta bir alarm niteliğindedir. Kimseye kolayca güvenmemeniz gereken bir döneme girdiğinizi gösterir. Aynı zamanda, zihninizin birden fazla sorunla, stres kaynağıyla veya korkuyla başa çıkmaya çalıştığının, bu durumun sizi bunalttığının ve zihinsel bir detoksa ihtiyaç duyduğunuzun psikolojik bir yansımasıdır.'
        },
        {
          title: 'Rüyada Evin İçinde Yılan Görmek',
          content: 'Eviniz sizin mahrem alanınız, güvenli limanınızdır. Yılanın evinizde olduğunu görmek, dışarıdan değil, bizzat aile içinden, akrabalarınızdan veya evinize sıkça girip çıkan yakın bir tanıdıktan gelebilecek bir tehlikeye veya ihanete işarettir. Hane içindeki huzursuzluklara, eşler arasındaki anlaşmazlıklara veya gizlice yapılan dedikodulara karşı uyanık olunmalıdır. Yılan yatağınızdaysa, özel hayatınızda veya evliliğinizde çözülmesi gereken derin sorunlar olduğuna; mutfaktaysa, rızkınıza göz diken birilerinin varlığına yorumlanır.'
        },
        {
          title: 'Rüyada Sarı Yılan Görmek',
          content: 'Sarı renk rüyalarda genellikle hastalığı ve solgunluğu temsil eder. Rüyada sarı yılan görmek, rüya sahibinin veya çok yakınındaki birinin yaşayabileceği bir sağlık sorununa, bulaşıcı bir hastalığa veya bedensel bir yorgunluğa işaret eder. Aynı zamanda sarı yılan, size çok yakın görünen, yüzünüze gülen ancak arkanızdan kurnazca planlar yapan iki yüzlü, sinsi bir arkadaşın varlığını simgeler. Sarı yılanı öldürmek, hastalıktan şifa bulmaya veya iki yüzlü bir dostu hayattan çıkarmaya yorulur.'
        },
        {
          title: 'Rüyada Yılanla Konuşmak',
          content: 'Rüyada bir yılanla insan gibi konuştuğunuzu görmek, düşmanınızla veya rakibinizle uzlaşmaya varacağınıza, aranızdaki husumeti iletişim yoluyla çözeceğinize delalet eder. Eğer yılan size güzel ve tatlı sözler söylüyorsa, düşmanınızdan beklenmedik bir fayda göreceğinize veya onun bir hatası sayesinde avantajlı duruma geçeceğinize yorumlanır. Ancak yılan size kötü sözler söylüyorsa, çevrenizdeki dedikodulara ve iftiralara maruz kalacağınıza dair bir uyarıdır.'
        }
      ],
      religiousMeaning: 'Geleneksel İslami rüya tabirlerine göre (özellikle İmam Nablusi ve İbn Şirin yorumlarında), yılan genel olarak düşman, hilekar bir kimse, kadın veya çocuğa işaret edebilir. Yılanın büyüklüğü düşmanın gücünü, küçüklüğü ise zayıflığını temsil eder. Yılan zehri, düşmanın malı ve gücü olarak kabul edilir. Rüyada yılanın eti, derisi veya kanı, düşmandan elde edilecek ganimet, helal mal ve zenginlik olarak yorumlanır. Yılanla dostça konuştuğunu, yılanın kendisine itaat ettiğini gören kişinin, dünyada büyük bir makama ulaşacağına, kendisine düşman olanları bile emri altına alacağına inanılır. Ancak yılanın kişiyi sokması, Allah korusun, bir belaya veya günaha düşmeye, düşman karşısında mağlup olmaya delalet ettiği için, bu rüyayı görenin sadaka vermesi ve tövbe etmesi tavsiye edilir.',
      psychologicalMeaning: 'Psikolojik ve psikanalitik açıdan rüyada yılan görmek, insan bilinçaltının en arkaik (ilkel) sembollerinden biriyle yüzleşmektir. Sigmund Freud\'a göre yılan, fallik bir semboldür ve doğrudan bastırılmış cinsel dürtüleri, libidonun enerjisini veya cinsel korkuları temsil eder. Carl Gustav Jung\'un analitik psikolojisinde ise yılan, "gölge" arketipinin (kişiliğimizin reddettiğimiz, karanlık, ilkel yönleri) bir yansıması veya kundalini enerjisinin uyanışıdır. Yılan, kişisel dönüşümün, ruhsal olarak yeni bir evreye geçişin (kabuk değiştirme metaforuyla) sancılı sürecini simgeler. Bilinçaltınız, tehlike algısını yılan formuyla size sunarak, içgüdülerinize güvenmenizi, toksik insanlardan veya durumlardan arınmanızı talep etmektedir.',
      faqs: [
        {
          question: 'Rüyada yılan görmek her zaman kötü müdür?',
          answer: 'Kesinlikle hayır. Her ne kadar düşmanlığı temsil etse de, yılan aynı zamanda yenilenmeyi, şifayı, bilgeliği ve büyük ruhsal uyanışları da temsil eder. Rüyanın bağlamına ve yılanın ne yaptığına göre, örneğin yılanı öldürmek veya yılanla dost olmak çok olumlu anlamlar taşır.'
        },
        {
          question: 'Hamile bir kadının rüyada yılan görmesi ne anlama gelir?',
          answer: 'Eski tabirlere göre hamile bir kadının rüyasında yılan (özellikle beyaz veya zararsız bir yılan) görmesi, doğacak çocuğun zeki, dirayetli ve toplumda söz sahibi bir erkek evlat olacağına işaret edebilir. Ancak bazı psikolojik yorumlarda, annenin doğum sürecine dair korkularını da yansıtabilir.'
        },
        {
          question: 'Sürekli yılan rüyaları görmek neyin belirtisidir?',
          answer: 'Sürekli yılan rüyası görmek, uyanık hayatınızda sürekli sizi tehdit eden toksik bir ilişkinin (örneğin narsisistik bir partner veya zorba bir patron) varlığına veya yüzleşmekten kaçındığınız çok derin bir travmaya/korkuya işaret eder. Bilinçaltınız, siz sorunu çözene kadar bu alarmı vermeye devam edecektir.'
        }
      ]
    },
    relatedSymbols: ['kopek', 'kedi', 'su', 'ev', 'olum']
  },
  {
    slug: 'dis-dokulmesi',
    title: 'Rüyada Diş Dökülmesi',
    category: 'insan-vucudu',
    shortDescription: 'Rüyada diş dökülmesi, kayıplar, yaşam değişiklikleri, yaşlanma korkusu, güç kaybı ve bazen de sağlık endişeleriyle ilişkilendirilen çok derin bir semboldür.',
    content: {
      introduction: 'Rüyada dişlerinin döküldüğünü, ufalandığını veya avucuna düştüğünü görmek, kişide büyük bir panik, çaresizlik ve endişe yaratan, dünya genelinde en çok rapor edilen evrensel rüyalardan biridir. Bu rüya öylesine gerçektir ki, kişi uyandığında ilk iş olarak eliyle dişlerini kontrol etme ihtiyacı hisseder. Dişlerimiz uyanık hayatta sadece yemek yememizi değil, aynı zamanda gülümsememizi, kendimizi ifade etmemizi ve sosyal görünümümüzü de belirler. Bu nedenle rüyada diş kaybı, hayatımızdaki kontrol kaybı hissiyatını, yaşlanma korkusunu veya çok temel bir yeteneğimizin elimizden alınması kaygısını yansıtır.',
      generalMeaning: 'Rüyada diş dökülmesi, çoğu geleneksel yorumda hayatta yaşanacak somut bir kayba işaret eder. Bu kayıp, yaygın inanışın aksine her zaman bir yakının ölümü olmak zorunda değildir; aynı zamanda iş yerinde statü kaybı, maddi güçte azalma, itibar zedelenmesi veya çok değer verilen bir eşyanın yitirilmesi de olabilir. Dişler insanın gücünü, savunmasını ve kararlılığını simgelediğinden, dişlerin dökülmesi, rüya sahibinin hayatta karşılaştığı zorluklar karşısında kendini savunmasız, güçsüz ve çaresiz hissettiği bir döneme girdiğini gösterir. Ancak modern rüya analistlerine göre bu durum sadece negatif değildir; kişinin hayatında yeni bir sayfa açması, eski, işe yaramayan alışkanlıklarını, inançlarını veya ilişkilerini bırakması (tıpkı süt dişlerinin dökülüp yerine kalıcı dişlerin gelmesi gibi) ve bir yeniden doğuş sürecine girmesi olarak da değerlendirilir.',
      variations: [
        {
          title: 'Rüyada Tüm Dişlerin Dökülmesi',
          content: 'Bütün dişlerin birden döküldüğünü görmek, kişinin hayatında kontrolünü tamamen kaybettiğini hissettiği, her şeyin üst üste geldiği çok sarsıcı bir kriz dönemine işaret eder. Bu rüya, rüya sahibinin hayatında hiçbir dayanağı kalmadığı korkusunu yansıtır. Ancak bazı eski alimlere göre, rüyada tüm dişlerinin dökülüp kucağına düştüğünü veya gözünün önünde olduğunu görmek, kişinin ömrünün uzun olacağına, hatta tüm akrabalarının ölümünü görecek kadar uzun yaşayacağına tabir edilmiştir.'
        },
        {
          title: 'Rüyada Tek Bir Dişin Düşmesi',
          content: 'Sadece bir dişin düşmesi, genellikle hayatınızdaki spesifik bir problemle yüzleşmeye veya yakın çevreden bir kişiyle yaşanacak bir ayrılığa, kırgınlığa yorumlanır. Düşen dişin yeri önemlidir; üst dişler baba tarafını veya otorite figürlerini, alt dişler ise anne tarafını veya daha yakın, korumacı ilişkileri temsil edebilir.'
        },
        {
          title: 'Rüyada Çürük Dişin Dökülmesi',
          content: 'Bu çok hayırlı ve müjdeli bir rüyadır. Çürük bir dişin düşmesi, uyanık hayatta sizi yoran, hasta eden, sürekli sıkıntı ve stres veren bir durumdan, toksik bir arkadaşlıktan veya zararlı bir alışkanlıktan nihayet kurtulacağınıza işarettir. Çürük diş, bedenden atılan bir zehir gibidir; dökülmesi ise şifaya, rahatlamaya ve üzerinizdeki ağır bir yükün kalkmasına delalet eder.'
        },
        {
          title: 'Rüyada Dişin Kanaması',
          content: 'Diş dökülürken yoğun kanama olması, yaşanacak bir kaybın, ayrılığın veya değişimin kişiye çok acı vereceğine, duygusal olarak ciddi şekilde yıpratıcı bir süreç olacağına delalet eder. Kan, hayat enerjisini temsil ettiği için, kanamayla birlikte dökülen diş, kişinin bu süreçte çok fazla enerji ve umut kaybedeceğini gösterir. Bazı yorumculara göre rüyada görülen kan, rüyayı bozar, yani rüyanın gerçekleşmeyeceğini veya etkisinin zayıflayacağını ifade eder.'
        },
        {
          title: 'Rüyada Kendi Dişini Çekmek',
          content: 'Kendi dişini çekmek, hayatınızdaki sorunlu bir durumu kendi iradenizle ve belki de acı çekerek sonlandıracağınız anlamına gelir. Zarar veren bir ilişkiyi kendi isteğinizle bitirmek, size uygun olmayan bir işten istifa etmek gibi cesaret gerektiren radikal kararlar alacağınıza ve bu kararın sorumluluğunu üstleneceğinize işarettir.'
        },
        {
          title: 'Rüyada Dişlerin Ufalanması Kırılması',
          content: 'Dişlerin kırılması veya ağızda ufalanarak dağılması, rüya sahibinin kendine olan güveninin yavaş yavaş parçalandığını, bir hastalık sürecini veya yavaş yavaş gelen maddi sıkıntıları simgeler. Hayatınızdaki sağlam yapıların çatırdamaya başladığı hissine dair bir uyarıdır.'
        }
      ],
      religiousMeaning: 'Geleneksel İslami kaynaklara (özellikle İbn Şirin, İmam Nablusi ve Kirmani) göre rüyada diş görmek genellikle hane halkına, akrabalara ve kişinin soyuna işaret eder. Üst çenedeki dişler baba tarafındaki erkek akrabaları, alt çenedeki dişler ise anne tarafındaki kadın akrabaları temsil eder. Ön dişler en yakınlar (çocuklar, kardeşler), arka azı dişler ise uzak akrabalar veya ailenin büyükleridir. Dişin düşmesi, bu akrabalardan birinin kaybına (vefatına), uzağa gitmesine veya onlarla yaşanacak şiddetli bir küslüğe yorulur. Ancak rüyada eline, kucağına veya eteğine düşen dişin kaybedilmemesi, aileye katılacak yeni bir çocuğa, rüya sahibinin eline geçecek toplu bir paraya veya çok uzun bir ömre işaret ettiği de müjdelenmiştir.',
      psychologicalMeaning: 'Psikoloji literatüründe diş dökülmesi rüyaları geniş bir yer tutar. En temel anlamı, "güç ve kontrol kaybı"dır. Dişler yemeği ısırmamızı (hayata tutunmayı) ve kendimizi savunmamızı sağlar. Dişsiz kalmak, kişinin karşısındaki zorluklar karşısında kendini aciz hissetmesini simgeler. İkinci yaygın anlamı "iletişim ve görünüm kaygısı"dır; kişi, toplum içinde rezil olmaktan, çekiciliğini veya gençliğini kaybetmekten, kendini doğru ifade edememekten ("sözlerinin ağzında dağılması" metaforu) korkmaktadır. Carl Jung, diş dökülmesini "yeniden doğuş" arketipiyle ilişkilendirmiş, kadının doğum yaparken çektiği sancı gibi, kişinin ruhsal olarak yeni bir faza geçerken çektiği psikolojik sancıların bir yansıması olduğunu savunmuştur.',
      faqs: [
        {
          question: 'Rüyada diş dökülmesi her zaman gerçek hayatta ölüm mü demektir?',
          answer: 'Kesinlikle hayır. Bu toplumda çok yaygın olan, insanları korkutan yanlış bir inançtır. Vakaların %99\'unda diş dökülmesi sadece psikolojik stresi, değişim korkusunu, iş hayatındaki kontrol kaybını veya ufak bir maddi kaybı sembolize eder. Somut bir ölüm öngörüsü değildir.'
        },
        {
          question: 'Dişçide diş çektirmek nasıl yorumlanır?',
          answer: 'Rüyada bir diş hekimine gidip diş çektirmek, hayatınızdaki bir sorunu çözmek için profesyonel bir yardıma, bilge bir kişinin tavsiyesine başvuracağınıza ve bu destek sayesinde sorunu kökten halledeceğinize işaret eder.'
        },
        {
          question: 'Yeni bir diş çıktığını görmek ne anlama gelir?',
          answer: 'Diş döküldükten sonra yerine yeni, beyaz ve sağlam bir diş çıktığını görmek, kaybedilen bir şeyin (iş, eşya, statü) yerine çok daha iyisinin ve kalıcısının geleceğine, hayata yeniden umutla tutunulacağına dair muhteşem bir müjdedir.'
        }
      ]
    },
    relatedSymbols: ['olum', 'bebek-hamilelik', 'hastalik', 'aglamak', 'kan']
  }
];

fs.writeFileSync(path.join(contentDir, 'symbols.json'), JSON.stringify(symbols, null, 2));
console.log('Created expanded symbols.json for part 1.');
