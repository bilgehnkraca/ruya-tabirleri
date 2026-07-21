import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'kabe',
    title: 'Rüyada Kabe Görmek',
    category: 'mekanlar',
    shortDescription: 'Rüyada Kabe görmek; manevi huzura, duaların kabulüne, hacca gitmeye, güvende hissetmeye ve büyük bir rütbeye erişmeye işaret eden çok hayırlı bir rüyadır.',
    content: {
      introduction: 'İslam dünyasının en kutsal mekanı ve kıblesi olan Kabe, rüyalarda görülebilecek en hayırlı, en güçlü ve manevi derinliği en yüksek sembollerden biridir. Kabe, yeryüzündeki ilahi rahmetin, birliğin (tevhid), güvenin ve affın merkezidir. Rüyada Kabe görmek, kişinin içsel bir uyanış yaşadığına, manevi bir arayışta olduğuna veya hayatında çok büyük, köklü ve olumlu bir değişimin eşiğinde bulunduğuna işaret eder. Psikolojik olarak Kabe, kişinin kendi "merkezini", içsel huzurunu ve sığınağını bulmasını temsil eder.',
      generalMeaning: 'Rüya tabircilerinin tamamına yakınına göre rüyada Kabe görmek, kişinin korkularından emin olacağına, düşmanlarına karşı zafer kazanacağına ve dualarının Allah katında kabul göreceğine delalet eder. Rüyasında Kabe\'yi gören kişi bekar ise ahlaklı ve dindar biriyle evlenir; evli ise hanesine büyük bir bereket ve huzur dolar. Kabe aynı zamanda adaleti, devleti ve büyük liderleri de temsil ettiğinden, rüya sahibinin iş hayatında veya toplum içinde çok yüksek bir makama erişeceğine, saygınlığının artacağına yorumlanır. Kabe\'ye bakmak, ona dokunmak veya orada ibadet etmek, ruhen arınmaya ve günahlardan tövbe etmeye işarettir.',
      variations: [
        {
          title: 'Rüyada Kabe\'de Namaz Kılmak',
          content: 'Kabe\'nin içinde veya etrafında namaz kıldığını görmek, kişinin dini vecibelerini yerine getirme konusundaki samimiyetine, kalbindeki iman nuruna ve ahiret saadetine yorulur. Aynı zamanda devlet büyüklerinden veya nüfuzlu kişilerden büyük bir iyilik ve himaye göreceğine işarettir.'
        },
        {
          title: 'Rüyada Kabe\'yi Tavaf Etmek',
          content: 'Tavaf etmek, verilen bir sözün (adağın) yerine getirilmesine, kişinin üzerine düşen görevleri layıkıyla yapacağına ve manevi bir yükselişe delalet eder. Tavaf, aynı zamanda kişinin kendi iç dünyasındaki dönüşümün ve evrensel uyumla birleşmesinin sembolüdür.'
        },
        {
          title: 'Rüyada Kabe\'nin Yıkıldığını Görmek',
          content: 'Kabe\'nin bir duvarının çöktüğünü veya hasar gördüğünü görmek, maalesef toplumda büyük bir alimin, saygın bir liderin vefatına veya o bölgede yaşanacak büyük bir fitneye, adaletsizliğe işaret eden uyarıcı bir rüyadır. Kişisel bazda ise ibadetlerdeki eksikliğe yorulur.'
        },
        {
          title: 'Rüyada Kabe\'ye Dokunmak veya Öpmek',
          content: 'Hacerü\'l-Esved\'i öpmek veya Kabe\'nin örtüsüne sarılarak ağlamak, derin bir pişmanlığın ardından gelecek kesin bir affa, çok büyük bir muradın gerçekleşmesine ve kişinin hayatı boyunca hiçbir zaman darda kalmayacağına müjdedir.'
        },
        {
          title: 'Rüyada Kabe\'nin Kendi Evine Geldiğini Görmek',
          content: 'Çok nadir görülen bu rüya, rüya sahibinin ilim, irfan veya ahlak yönünden o kadar yükseleceğine ve çevresine o kadar faydalı olacağına işaret eder ki, insanların ona akın akın saygı ve ihtiyaç için geleceğine yorulur.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Rüyada Kabe\'yi görmek; halife, vezir, lider veya evlenilecek hayırlı bir eşe işarettir. Bir kimse rüyasında Kabe\'ye girdiğini görse, büyük bir devlet başkanının huzuruna çıkar veya düşmanının şerrinden güvende olur." Kirmani\'ye göre ise, Kabe\'ye bakmak hacca gitmeye işarettir. Rüyada Kabe\'nin yerinden başka bir yere taşındığını görmek, o bölgenin liderinin veya adalet sisteminin değişeceğine delalet eder.',
      psychologicalMeaning: 'Carl Jung\'un analitik psikolojisi bağlamında Kabe gibi devasa ve merkezi kutsal mekanlar, "Self"in (Bütünsel Benliğin) arketipsel yansımalarıdır. Kare yapısı ve merkezi konumu, psişenin bütünlüğünü, dengesini ve sağlamlığını simgeler. Rüyada Kabe\'yi görmek, kişinin hayatındaki kaosun içinde kendine sarsılmaz bir dayanak, bir "içsel merkez" bulduğunu gösterir.',
      faqs: [
        {
          question: 'Rüyada Kabe\'yi uzaktan görmek ne anlama gelir?',
          answer: 'Kabe\'yi uzaktan görmek, dualarınızın kabulüne çok yaklaştığınızı, kalbinizin temizliğini ve hayatınızda sizi bekleyen büyük, güzel gelişmeleri gösterir.'
        },
        {
          question: 'Gayrimüslim biri rüyada Kabe görürse ne olur?',
          answer: 'Eski tabircilere göre bu, o kişinin hidayete ereceğine veya hayatında çok büyük, aydınlatıcı bir manevi uyanış yaşayacağına işaret eder.'
        },
        {
          question: 'Rüyada Kabe örtüsünün değiştiğini görmek nedir?',
          answer: 'Toplumda veya iş hayatınızda yaşanacak yeni bir döneme, yenilenmeye ve itibarın tazelenmesine yorulur.'
        }
      ],
      relatedSymbols: ['su', 'aglamak', 'dugun']
    }
  },
  {
    slug: 'yagmur',
    title: 'Rüyada Yağmur Yağdığını Görmek',
    category: 'doga',
    shortDescription: 'Rüyada yağmur yağdığını görmek; Allah\'ın rahmetine, berekete, bolluğa, dertlerden arınmaya ve kurumuş umutların yeniden yeşermesine işaret eder.',
    content: {
      introduction: 'Su, tüm yaşamın kaynağıdır; yağmur ise gökyüzünden yeryüzüne inen ilahi bir lütuf, bir temizlenme ve yeniden doğuş sembolüdür. Rüyalarda yağmur görmek, hemen hemen tüm kültürlerde rahmet, bereket ve canlanma olarak yorumlanır. Kuraklık içindeki bir toprağın yağmura kavuşması gibi, rüya sahibinin hayatındaki sıkıntıların, maddi darlıkların ve ruhsal çöküntülerin yerini huzura bırakacağına işaret eder. Ancak yağmurun nasıl yağdığı (hafif çiseleme mi yoksa yıkıcı bir sel mi) tabiri tamamen değiştiren en önemli faktördür.',
      generalMeaning: 'Rüyada yağan yağmur eğer etrafa zarar vermiyorsa, sakin ve bereketli yağıyorsa, bu o bölge halkı ve rüya sahibi için bolluk, ucuzluk, bereket ve rahmettir. Uzun süredir beklenen bir işin hayırlısıyla sonuçlanacağına, hastaların şifa bulacağına, borçluların borçlarını ödeyeceğine delalet eder. Rüyada yağmur altında ıslanmak, günahlardan arınmaya, ruhsal bir ferahlamaya ve kişinin üzerindeki nazar, sıkıntı veya hastalıktan kurtulmasına yorulur. Ancak rüyada yağmurun evleri yıktığını, ağaçları devirdiğini veya sel felaketine dönüştüğünü görmek; o bölgede yaşanacak bir fitneye, hastalığa, zalim bir yöneticinin baskısına veya rüya sahibinin hayatında yaşanacak ani, yıkıcı değişimlere (duygusal patlamalara) işaret eder.',
      variations: [
        {
          title: 'Rüyada Sağanak Yağmur Görmek',
          content: 'Eğer sağanak yağmur çevreye zarar vermiyorsa, arka arkaya gelecek çok büyük ve sevindirici haberlere, maddi zenginliğe yorulur. Zarar veren sağanak ise ani öfke patlamalarına ve kontrol edilemeyen olaylara işarettir.'
        },
        {
          title: 'Rüyada Sadece Kendi Üzerine Yağmur Yağdığını Görmek',
          content: 'Gökyüzü açıkken veya diğer yerler kuruyken sadece rüya sahibinin veya kendi evinin üzerine yağmur yağdığını görmek, Allah tarafından sadece o kişiye veya aileye verilecek özel bir nimete, berekete ve lütfa delalet eder.'
        },
        {
          title: 'Rüyada Yağmur Suyu İçmek',
          content: 'Temiz ve berrak yağmur suyundan içmek, ilim öğrenmeye, şifa bulmaya ve helal kazanca işarettir. Eğer su bulanık veya acıysa, karşılaşılacak geçici hastalıklara veya şüpheli kazançlara yorulur.'
        },
        {
          title: 'Rüyada Kan veya Ateş Yağdığını Görmek',
          content: 'Gökten yağmur yerine kan, taş veya ateş yağması çok olumsuz bir semboldür. O bölgede çıkacak savaşa, büyük bir adaletsizliğe, salgın hastalıklara veya toplumun ahlaki çöküşüne dair ciddi bir ilahi ihtardır.'
        },
        {
          title: 'Rüyada Güneşli Havada Yağmur Yağması',
          content: 'Hem güneşin açması hem de yağmurun yağması, çok kısa sürecek bir sıkıntının ardından gelecek muazzam bir sevince, "ağlarken gülmeye" ve sürpriz gelişmelere yorulur.'
        }
      ],
      religiousMeaning: 'İmam Nablusi şöyle der: "Rüyada yağan yağmur, Allah\'ın rahmeti, bereketi ve yardımıdır. Eğer yağmur yılın her zamanı (normal mevsiminde) yağıyorsa her türlü hayra; mevsimi dışında aniden ve yıkıcı yağıyorsa o bölgeye gelecek ilahi bir cezaya veya hastalığa delalet eder." Kuran-ı Kerim\'de yağmur, ölü toprağın diriltilmesi olarak geçer; bu nedenle rüyada yağmur, kişinin ölmüş kalbinin imanla veya bitmiş umutlarının yeni bir fırsatla dirilmesidir.',
      psychologicalMeaning: 'Psikolojide yağmur, duyguların (su sembolizmi) serbest bırakılmasını, bastırılmış üzüntülerin veya stresin "ağlanarak" dışa vurulmasını simgeler. Yağmur altında ıslanmak, bilinçaltında bir arınma (katarsis) ihtiyacını, eski travmaların yıkanıp gitmesi arzusunu temsil eder. Yıkıcı sel yağmurları ise bastırılmış duyguların artık bilinci tehdit edecek boyutta taştığına işaret eder.',
      faqs: [
        {
          question: 'Rüyada yağmurda şemsiye açmak ne demektir?',
          answer: 'Bir tehlikeye veya duygusal bir saldırıya karşı kendinizi korumaya aldığınızı, tedbirli davrandığınızı gösterir.'
        },
        {
          question: 'Rüyada gece yağmur yağdığını görmek kötü müdür?',
          answer: 'Hayır, gece yağan yağmur genellikle kimseye görünmeden, sessizce yapılan duaların kabulüne ve içinizde kopardığınız fırtınaların dineceğine işarettir.'
        },
        {
          question: 'Rüyada çamurlu yağmur yağması ne anlama gelir?',
          answer: 'Çevrenizde dolaşan iftiralara, itibar zedeleyici sözlere ve haksızlığa uğrama ihtimaline karşı uyarıdır.'
        }
      ],
      relatedSymbols: ['su', 'deniz', 'kar']
    }
  },
  {
    slug: 'bocek',
    title: 'Rüyada Böcek Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada böcek görmek; genellikle can sıkıcı küçük pürüzlere, arkanızdan konuşan dedikoducu insanlara veya hayatınızdaki "asalak" ilişkilere işaret eder.',
    content: {
      introduction: 'Böcekler, gerçek hayatta da rüyalarda da genellikle insanlarda rahatsızlık, iğrenme veya korku uyandıran canlılardır. Rüyada böcek görmek, bilinçaltının sizi rahatsız eden, enerjinizi emen ancak ilk bakışta önemsiz gibi görünen detayları veya kişileri sembolize etme şeklidir. Tıpkı bir sivrisineğin uykunuzu kaçırması gibi, rüyadaki böcekler de hayatınızdaki huzur kaçırıcı ufak tefek pürüzleri temsil eder. Böceğin türü (arı, karınca, hamamböceği, örümcek) rüyanın anlamını tamamen değiştirebilir.',
      generalMeaning: 'Rüya tabirlerinde böcek, genellikle zayıf, korkak ama mide bulandıran, dedikoducu ve fesat düşmanlara yorulur. Rüyada evde çok sayıda böcek görmek, aile içine nifak sokmaya çalışan akrabalara veya çekemeyen komşulara işarettir. Üzerinde böcek dolaştığını görmek, kişinin enerjisini tüketen "toksik" bir ilişkinin veya ortamın içinde olduğuna delalet eder. Rüyada böcek öldürmek ise, bu tarz dedikoduları ve küçük düşmanları susturmaya, sorunları kökünden çözmeye ve feraha çıkmaya yorumlanır. Farklı bir açıdan, bazı spesifik böcekler (örneğin arı veya karınca) bereket, çalışkanlık ve helal kazanç anlamına gelirken; hamamböceği veya karafatma pisliğe, kötü niyetli insanlara ve bereketsizliğe yorulur.',
      variations: [
        {
          title: 'Rüyada Hamamböceği Görmek',
          content: 'Hamamböceği, sinsi ve arsız bir düşmanı veya size yük olan insanları temsil eder. Aynı zamanda kişinin çözmekten kaçtığı, "halı altına süpürdüğü" ve giderek çoğalan sorunların simgesidir.'
        },
        {
          title: 'Rüyada Böcek Öldürmek',
          content: 'Çok hayırlı bir rüyadır. Üzerinizdeki ölü toprağını atacağınıza, size zarar veren insanları hayatınızdan çıkaracağınıza ve cesaretle sorunların üstesinden geleceğinize işaret eder.'
        },
        {
          title: 'Rüyada Vücudundan Böcek Çıktığını Görmek',
          content: 'Kulağından, ağzından veya derisinden böcek çıktığını görmek, kişinin içini kemiren bir dertten, hastalıktan veya kötü bir alışkanlıktan kurtulacağına, adeta bir "arınma" yaşayacağına yorulur.'
        },
        {
          title: 'Rüyada Yatağında Böcek Görmek',
          content: 'Özel hayata veya evliliğe karışan üçüncü şahıslara, kıskançlık ve nazara işarettir. Eşler arasında gereksiz konulardan çıkacak ufak çaplı huzursuzlukları da sembolize eder.'
        },
        {
          title: 'Rüyada Uçan Böcek Görmek',
          content: 'Uçan böcekler genellikle çabuk yayılan asılsız haberlere, dedikodulara ve bir anda parlayıp sönen tartışmalara işaret eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlere göre genel anlamda "haşerat" (böcek türleri), zayıf karakterli, sözünde durmayan ve sadece dedikoduyla insanlara zarar verebilen düşük seviyeli düşmanları simgeler. Câferi Sâdık (r.a) haşerat görmeyi şu şekilde tabir etmiştir: "Zayıf düşman, dildeki dedikodu, malda noksanlık ve gizli hüzün." Ancak arı görmek helal rızka ve şifaya, ipek böceği görmek ise helal yoldan gelecek zenginliğe yorulur.',
      psychologicalMeaning: 'Psikolojik açıdan böcekler, bilinçaltına itilmiş kaygıları, "pis" veya istenmeyen olarak kodlanmış düşünceleri temsil eder. Bir insanın rüyasında sürekli böcek istilası görmesi, uyanık hayatında kontrolünü kaybettiği küçük detayların (borçlar, bitmeyen işler, mail yığınları) zihnini "kemirdiğini" gösterir. Franz Kafka\'nın "Dönüşüm" eserindeki gibi, böcek aynı zamanda kişinin kendini değersiz, istenmeyen ve yabancılaşmış hissetmesinin de güçlü bir metaforudur.',
      faqs: [
        {
          question: 'Rüyada büyük devasa böcek görmek nedir?',
          answer: 'Gözünüzde çok büyüttüğünüz, aslında o kadar tehlikeli olmayan bir korkunuzla yüzleşmeniz gerektiğine işaret eder.'
        },
        {
          question: 'Rüyada yemeğin içinden böcek çıkması ne anlama gelir?',
          answer: 'Kazancınıza haram veya şüpheli bir şeyin karıştığına, ya da çok güvendiğiniz birinden göreceğiniz bir vefasızlığa yorulur.'
        },
        {
          question: 'Rüyada karınca sürüsü görmek de aynı mıdır?',
          answer: 'Hayır, karınca genellikle eve girecek berekete, çok çalışarak elde edilecek büyük bir zenginliğe veya kalabalık bir cemaate işaret eder.'
        }
      ],
      relatedSymbols: ['yilan', 'kedi', 'karinca']
    }
  },
  {
    slug: 'yuzuk',
    title: 'Rüyada Yüzük Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada yüzük görmek; evliliğe, makam ve mevkiye, verilen sözlerin tutulmasına ve kişinin hayatındaki bitmeyen, sonsuz döngülere (sadakat) işaret eder.',
    content: {
      introduction: 'Yüzük, dairesel yapısı (başlangıcı ve sonu olmaması) nedeniyle insanlık tarihi boyunca sonsuzluğun, bağlılığın, mühür (otorite) ve sadakatin en güçlü sembolü olmuştur. Rüyalarda yüzük görmek de bu evrensel sembolizmden beslenir. İster bekar ister evli olsun, rüya sahibinin hayatında kuracağı kalıcı bağları, elde edeceği gücü veya statüyü temsil eder. Yüzüğün altından, gümüşten, pırlantadan veya demirden olması, kırık veya bütün olması, parmağa dar veya bol gelmesi rüyanın tüm anlamını şekillendiren hayati detaylardır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada yüzük takmak, bekar kimseler için hayırlı bir evliliğe, yeni bir yuvaya ve aşka; evli kimseler için ise evlat sahibi olmaya, eşler arasındaki sevginin perçinlenmesine veya yeni bir eve taşınmaya delalet eder. Yüzük aynı zamanda "mühür" ve "imza" anlamına geldiğinden, iş hayatında yüksek bir makama gelmeye, büyük bir yetki sahibi olmaya ve sözünün geçmesine yorulur. Rüyada altın yüzük görmek genellikle kadınlar için süs, zenginlik ve zarafet iken, klasik tabirlerde erkekler için (altın haram kılındığı için) sıkıntı, borç veya üzüntü olarak yorumlanabilmektedir. Gümüş yüzük ise hem erkek hem kadın için inanca, güce ve helal mala işarettir. Rüyada yüzüğün kırılması veya kaybolması, nişan bozulmasına, eşler arası ayrılığa veya iş hayatında statü kaybına (işten çıkarılma) yorulur.',
      variations: [
        {
          title: 'Rüyada Tektaş veya Pırlanta Yüzük Görmek',
          content: 'Pırlanta ve değerli taşlı yüzükler, kişinin itibarının çok yükseleceğine, çok değerli ve asil bir insanla hayatını birleştireceğine işarettir. Işıltılı bir zekaya ve toplumda büyük bir şöhrete yorulur.'
        },
        {
          title: 'Rüyada Yüzük Kırılması',
          content: 'Maalesef olumsuz bir semboldür. Verilen bir sözün tutulamayacağına, bir anlaşmanın feshedileceğine, nişan veya evlilikte yaşanacak büyük çatırdamalara ve güven kaybına işaret eder.'
        },
        {
          title: 'Rüyada Yüzüğün Dar veya Bol Gelmesi',
          content: 'Parmağı sıkan yüzük, zoraki katlanılan bir ilişkiye veya işe; bol gelip düşen yüzük ise kişinin taşıyamayacağı (kapasitesini aşan) bir makama getirildiğine veya elindeki değeri kıymet bilmediği için kaybedeceğine yorulur.'
        },
        {
          title: 'Rüyada Yüzük Bulmak',
          content: 'Bekarlar için aniden karşılarına çıkacak hayırlı bir kısmete; evliler için şans eseri elde edilecek büyük bir zenginliğe ve ele geçecek tarihi bir fırsata delalet eder.'
        },
        {
          title: 'Rüyada Ölüden Yüzük Almak',
          content: 'Vefat etmiş birinden yüzük almak, o kişinin mirasına veya ilmine konmaya, çok uzun ömürlü olmaya ve duaların kabulüne işaret eden çok güçlü ve hayırlı bir rüyadır.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Yüzük, kişinin malı, mülkü, gücü ve evladıdır. Rüyada parmağındaki yüzüğün taşının düştüğünü gören kişinin malı eksilir veya evladı zarar görür. Hz. Süleyman\'ın mührü bir yüzük olduğundan, rüyada güzel bir yüzük takmak saltanat ve devlete işarettir." Erkeklerin altın yüzük takması dini tabirlerde genellikle kibir ve dünya sevgisi yüzünden yaşanacak zillete yorulurken, gümüş ve akik yüzük sünnete uymaya ve berekete delalet eder.',
      psychologicalMeaning: 'Jung psikolojisinde yüzük (mandala benzeri dairesel yapısı) kişinin "Bütünlük" (Individuation) arayışını simgeler. İçsel dünyada eril ve dişil enerjilerin birleşmesini, ruhen olgunlaşmayı ve kişiliğin entegrasyonunu temsil eder. Aynı zamanda yüzük, kişinin çevresine verdiği taahhütleri ve "bağlanma" korkularını da yansıtır. Rüyada yüzüğü fırlatıp atmak, uyanık hayattaki sorumluluklardan ve boğucu bağlardan kaçış arzusunun dışa vurumudur.',
      faqs: [
        {
          question: 'Rüyada yüzüğünü çıkarıp birine vermek ne anlama gelir?',
          answer: 'Kendi rızanızla yetkinizi, makamınızı devretmeye veya ilişkinizde fedakarlık yaparak kontrolü karşı tarafa bırakmaya yorulur.'
        },
        {
          question: 'Rüyada birden fazla yüzük takmak nedir?',
          answer: 'Birçok farklı kaynaktan gelecek kazanca, birden fazla iş veya sorumluluk üstlenmeye işaret eder.'
        },
        {
          question: 'Rüyada yüzüğün taşının düşmesi kötü müdür?',
          answer: 'Evet, genellikle maddi veya manevi bir "değer" kaybına, itibar zedelenmesine veya çok sevilen bir eşyanın hasar görmesine yorumlanır.'
        }
      ],
      relatedSymbols: ['altin', 'dugun', 'gelinlik']
    }
  }
];

// Combine avoiding duplicates
const currentSlugs = symbols.map(s => s.slug);
for (const s of newSymbols) {
  if (!currentSlugs.includes(s.slug)) {
    symbols.push(s);
  }
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully added: ' + newSymbols.map(s => s.slug).join(', '));
