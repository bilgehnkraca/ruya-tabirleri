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
    shortDescription: 'Rüyada yılan görmek, genellikle gizli düşmanlara, korkulara, şifaya ve yenilenmeye işaret eder.',
    content: {
      introduction: 'Rüyada yılan görmek, en sık karşılaşılan ve sembolik anlamı en güçlü rüyalardan biridir. Farklı kültürlerde hem bilgeliği ve şifayı hem de sinsi düşmanları temsil eden yılan, rüyanın bağlamına göre çok çeşitli şekillerde yorumlanır.',
      generalMeaning: 'Rüya tabircilerinin büyük bir kısmına göre rüyada yılan görmek, çevrenizde size dost gibi görünen ama aslında kötülüğünüzü isteyen sinsi bir düşmanın varlığına işarettir. Bu düşman, iş hayatınızda veya sosyal çevrenizde olabilir. Ancak yılan aynı zamanda kabuk değiştiren bir canlı olduğu için, hayatınızda yaşanacak köklü bir değişimin, yenilenmenin ve ruhsal dönüşümün de habercisi olabilir. Tıpta şifanın sembolü olan yılan, hastalık sürecinde olan biri için iyileşmeye delalet eder.',
      variations: [
        {
          title: 'Rüyada Siyah Yılan Görmek',
          content: 'Rüyada siyah yılan görmek, genellikle güçlü, cesur ve tehlikeli bir düşmana işaret eder. Eğer yılan büyükse, bu kişinin gücünün ve etkisinin de büyük olduğu anlamına gelir. Siyah yılan aynı zamanda kişinin kendi içsel karanlığıyla, bastırdığı korkuları veya travmalarıyla yüzleşmesi gerektiğine dair psikolojik bir mesaj da taşıyabilir.'
        },
        {
          title: 'Rüyada Yılan Öldürmek',
          content: 'Rüyada bir yılanı öldürmek, rüya sahibinin karşısına çıkan engelleri aşacağına, düşmanlarına karşı galip geleceğine ve sıkıntılarından kurtulacağına yorumlanır. Bu rüya, kişinin gücünü ve kontrolü yeniden eline aldığının müjdecisidir.'
        },
        {
          title: 'Rüyada Yılan Tarafından Isırılmak',
          content: 'Rüyada yılanın sizi ısırması, düşmanınızdan gelecek bir zarara, beklenmedik bir ihanete veya can sıkıcı bir duruma işarettir. Eğer yılan ısırdıktan sonra acı hissetmediyseniz, bu zararı kolayca atlatacağınıza yorumlanır.'
        },
        {
          title: 'Rüyada Çok Sayıda Yılan Görmek',
          content: 'Etrafınızı saran birçok yılan görmek, çevrenizdeki dost bildiğiniz kişilerin aslında size karşı kıskançlık veya kötü niyet beslediğine dikkat çeker. Bu rüya, sosyal çevrenizi gözden geçirmeniz için bir uyarı niteliğindedir.'
        },
        {
          title: 'Rüyada Evin İçinde Yılan Görmek',
          content: 'Yılanın evinizde olduğunu görmek, aile içinden veya evinize sıkça girip çıkan yakın bir tanıdıktan gelebilecek bir tehlikeye işarettir. Hane içindeki huzursuzluklara veya sinsi planlara karşı uyanık olunmalıdır.'
        }
      ],
      religiousMeaning: 'Geleneksel İslami rüya tabirlerine göre (örneğin İbn Şirin yorumlarında), yılan genel olarak düşman, hilekar bir kimse, kadın veya çocuğa işaret edebilir. Büyük yılan büyük düşmana, küçük yılan ise zayıf düşmana delalet eder. Rüyada yılanın eti veya derisi, düşmandan elde edilecek ganimet ve mal olarak yorumlanır. Yılanla dostça konuştuğunu gören kişinin, düşmanından menfaat göreceğine inanılır.',
      psychologicalMeaning: 'Psikolojik açıdan rüyada yılan görmek, genellikle bilinçaltımızdaki bastırılmış dürtüleri, korkuları veya cinselliği temsil eder. Carl Jung gibi psikanalistlere göre yılan, "gölge" arketipinin bir yansıması veya kişinin geçirmekte olduğu ruhsal bir dönüşüm sürecinin sembolüdür.',
      faqs: [
        {
          question: 'Rüyada yılan görmek her zaman kötü müdür?',
          answer: 'Hayır, her zaman kötü değildir. Yılan aynı zamanda yenilenmeyi, şifayı ve bilgeliği de temsil eder. Rüyanın bağlamına ve yılanın ne yaptığına göre olumlu anlamlar da taşıyabilir.'
        },
        {
          question: 'Rüyada beyaz yılan görmek ne anlama gelir?',
          answer: 'Beyaz yılan, genellikle zarar vermeyecek zayıf bir düşmana veya rüya sahibinin saf, temiz duygularla karşılaşacağı bir değişime yorumlanır.'
        },
        {
          question: 'Psikolojik olarak rüyada yılan neden görülür?',
          answer: 'Stresli dönemlerde, büyük değişimlerin eşiğindeyken veya gizli korkularımızla yüzleşmemiz gerektiğinde bilinçaltımız yılan sembolünü kullanabilir.'
        }
      ]
    },
    relatedSymbols: ['kopek', 'kedi', 'su', 'ev']
  },
  {
    slug: 'dis-dokulmesi',
    title: 'Rüyada Diş Dökülmesi',
    category: 'insan-vucudu',
    shortDescription: 'Rüyada diş dökülmesi, kayıplar, yaşam değişiklikleri ve bazen de sağlık endişeleriyle ilişkilendirilir.',
    content: {
      introduction: 'Rüyada dişlerinin döküldüğünü görmek, kişide büyük bir panik ve endişe yaratan, en yaygın rüyalardan biridir. Bu rüya, genellikle hayatımızdaki kontrol kaybı hissiyatını veya yaşlanma korkusunu yansıtır.',
      generalMeaning: 'Rüyada diş dökülmesi, çoğu geleneksel yorumda bir kayba işaret eder. Bu kayıp sadece bir yakının kaybı (ölüm) değil, aynı zamanda statü, güç, sağlık veya maddi bir kayıp da olabilir. Ancak modern tabirlerde bu durum, kişinin hayatında yeni bir sayfa açması, eski alışkanlıklarını bırakması ve yeniden doğuş süreci olarak da değerlendirilir.',
      variations: [
        {
          title: 'Rüyada Tüm Dişlerin Dökülmesi',
          content: 'Bütün dişlerin birden dökülmesi, kişinin hayatında kontrolünü tamamen kaybettiğini hissettiği bir döneme işaret eder. Büyük bir değişim veya kriz anının yansıması olabilir.'
        },
        {
          title: 'Rüyada Tek Bir Dişin Düşmesi',
          content: 'Sadece bir dişin düşmesi, genellikle spesifik bir problemle yüzleşmeye veya yakın çevreden bir kişiyle yaşanacak bir ayrılığa yorumlanır.'
        },
        {
          title: 'Rüyada Çürük Dişin Dökülmesi',
          content: 'Bu çok hayırlı bir rüyadır. Çürük bir dişin düşmesi, kişiyi yoran, hasta eden veya sıkıntı veren bir durumdan ya da zararlı bir ilişkiden kurtulmaya işarettir.'
        },
        {
          title: 'Rüyada Dişin Kanaması',
          content: 'Diş dökülürken kanama olması, yaşanacak bir kaybın veya değişimin kişiye acı vereceğine, duygusal olarak yıpratıcı bir süreç olacağına delalet eder.'
        },
        {
          title: 'Rüyada Başkasının Dişinin Dökülmesi',
          content: 'Rüya sahibinin, o kişinin yaşayacağı bir sıkıntıya şahit olacağına veya o kişi için duyduğu yoğun endişeye yorumlanır.'
        }
      ],
      religiousMeaning: 'Geleneksel İslami kaynaklara göre, rüyada diş görmek genellikle hane halkına ve akrabalara işaret eder. Üst dişler baba tarafındaki erkek akrabaları, alt dişler ise anne tarafındaki kadın akrabaları temsil eder. Dişin düşmesi, bu akrabalardan birinin kaybına veya uzaklaşmasına yorulur. Ancak bazı yorumcular, eline veya kucağına düşen dişin, yeni bir çocuk veya uzun ömür anlamına geldiğini de belirtir.',
      psychologicalMeaning: 'Psikolojide rüyada diş dökülmesi, güç ve kontrol kaybı, yaşlanma korkusu veya kişisel görünümle ilgili kaygılarla açıklanır. İletişim kurmada zorluk çekilen, kişinin "sesini duyuramadığı" dönemlerde de bu rüya sıkça görülür.',
      faqs: [
        {
          question: 'Rüyada diş dökülmesi her zaman ölüm mü demektir?',
          answer: 'Kesinlikle hayır. Bu çok yaygın bir yanılgıdır. Çoğu zaman sadece psikolojik stres, değişim korkusu veya ufak bir maddi kaybı sembolize eder.'
        },
        {
          question: 'Avuca diş düşmesi ne anlama gelir?',
          answer: 'Geleneksel olarak kucağa veya avuca düşen diş, aileye katılacak yeni bir bebeğe veya beklenmedik bir rızka işaret edebilir.'
        },
        {
          question: 'Ağrısız diş düşmesi nasıl yorumlanır?',
          answer: 'Ağrısız ve kansız düşen diş, sorunların kolayca ve kendiliğinden çözüleceğine, üzüntü vermeyecek bir değişikliğe yorulur.'
        }
      ]
    },
    relatedSymbols: ['olum', 'bebek-hamilelik', 'hastalik']
  },
  {
    slug: 'su',
    title: 'Rüyada Su Görmek',
    category: 'doga',
    shortDescription: 'Rüyada su görmek; hayat, bereket, temizlik, duygular ve bilinçaltının derinlikleri ile ilişkilidir.',
    content: {
      introduction: 'Su, tüm kültürlerde yaşamın, arınmanın ve duyguların temel sembolüdür. Rüyada su görmek, suyun durumuna, berraklığına ve akışına göre çok farklı şekillerde yorumlanan evrensel bir temadır.',
      generalMeaning: 'Rüyada temiz, berrak ve durgun su görmek; huzur, bereket, sağlık ve mutlu bir yaşama işarettir. Rüyayı gören kişinin iç dünyasında dinginliğe kavuştuğuna ve işlerinin yolunda gideceğine yorulur. Kirli, bulanık veya taşkın sular ise keder, hastalık, karmaşık duygular ve hayatınızdaki belirsizliklere delalet eder.',
      variations: [
        {
          title: 'Rüyada Berrak Suda Yüzmek',
          content: 'Kişinin hedeflerine doğru emin adımlarla ilerlediğini, karşısına çıkan fırsatları iyi değerlendireceğini ve ruhsal bir arınma yaşadığını gösterir.'
        },
        {
          title: 'Rüyada Bulanık Su Görmek',
          content: 'Bulanık ve kirli su, hastalık, sıkıntı, dedikodu veya haksız kazanca işaret eder. Kişinin zihninin karışık olduğu ve yanlış kararlar alabileceği bir dönemde olduğuna dair uyarıdır.'
        },
        {
          title: 'Rüyada Su İçmek',
          content: 'Temiz bir kaynaktan doya doya su içmek, sağlık, uzun ömür, bilgiye ulaşma ve manevi tatmin anlamına gelir. Susuzluğunu giderememek ise doyurulamayan arzuları temsil eder.'
        },
        {
          title: 'Rüyada Su Taşması veya Sel',
          content: 'Duygusal patlamalara, kontrol edilemeyen olaylara ve büyük toplumsal/kişisel krizlere yorulur. Ancak suyun zarar vermeden akıp gitmesi, sıkıntıların atlatılacağını gösterir.'
        },
        {
          title: 'Rüyada Evin İçinde Su Görmek',
          content: 'Eğer su temizse hane içine girecek bolluk ve berekete, kirli ise aile içi tartışmalara ve huzursuzluklara işaret eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde su, İslam, ilim, hayat, bereket ve adalet ile ilişkilendirilir. Rüyada saf su içmek, dinde istikamete ve helal rızka yorulurken; acı veya tuzlu su içmek zorluklara ve haram mala delalet edebilir.',
      psychologicalMeaning: 'Psikolojik olarak su, doğrudan bilinçaltını ve duygularımızı temsil eder. Okyanus derin duyguları, nehir hayatın akışını, suyun yüzeyi ise bilinç ile bilinçaltı arasındaki sınırı simgeler. Suda boğulma hissi, kişinin gerçek hayatta sorumluluklar veya duygular altında ezildiğini gösterir.',
      faqs: [
        {
          question: 'Rüyada denize girmek ne anlama gelir?',
          answer: 'Büyük ve temiz bir denize girmek, kişinin devlet kapısında bir işinin olacağına, büyük bir kısmete veya engin bir bilgiye ulaşacağına yorulur.'
        },
        {
          question: 'Rüyada sıcak su ile yıkanmak nasıl tabir edilir?',
          answer: 'Sıcak su genellikle hastalığa veya kederlenmeye yorulurken, ılık su rahatlamaya ve stresten arınmaya işaret eder.'
        }
      ]
    },
    relatedSymbols: ['deniz', 'yagmur', 'yuzmek']
  },
  {
    slug: 'olum',
    title: 'Rüyada Ölüm Görmek',
    category: 'soyut-kavramlar',
    shortDescription: 'Rüyada ölüm görmek, yaygın inancın aksine genellikle ömrün uzamasına, büyük değişimlere ve yeni başlangıçlara işaret eder.',
    content: {
      introduction: 'Rüyasında kendisinin veya bir yakınının öldüğünü gören kişi genellikle korkuyla uyanır. Ancak rüyada ölüm sembolü, gerçek hayattaki fiziksel ölümü değil, sembolik bir "sonlanma ve yeniden doğuş"u temsil eder.',
      generalMeaning: 'Rüyada ölmek, rüya tabirleri geleneğinde "ömrünün uzaması" olarak yorumlanır. Kişinin hayatındaki eski bir dönemin kapanıp, tamamen yeni bir dönemin başlayacağına işaret eder. Bu değişim; evlilik, taşınma, yeni bir iş veya eski, zararlı bir alışkanlığın bırakılması şeklinde tezahür edebilir.',
      variations: [
        {
          title: 'Rüyada Kendi Ölümünü Görmek',
          content: 'Kişinin hayatında radikal bir dönüşüm yaşayacağına, eski kimliğinden veya sorunlarından sıyrılarak adeta yeniden doğacağına işarettir. Manevi bir uyanışın habercisi olabilir.'
        },
        {
          title: 'Rüyada Yaşayan Birinin Öldüğünü Görmek',
          content: 'Bu rüya, rüyada ölen kişinin ömrünün uzun ve sağlıklı olacağına yorulur. Aynı zamanda rüya sahibinin, o kişiye karşı beslediği derin sevgiyi veya kaybetme korkusunu da yansıtır.'
        },
        {
          title: 'Rüyada Ölmüş Birini Canlı Görmek',
          content: 'Gerçekte vefat etmiş bir yakını canlı görmek, o kişinin ahiret hayatında huzurlu olduğuna, rüya sahibinin ise beklemediği bir yerden sevindirici bir haber alacağına delalet eder.'
        },
        {
          title: 'Rüyada Mezarlık Görmek',
          content: 'Mezarlık, ibret almaya, kişinin hatalarından dönmesi gerektiğine veya korkularıyla yüzleşeceği bir içsel yolculuğa işaret eder. Temiz bir mezarlık huzuru, bakımsız bir mezarlık kafa karışıklığını temsil eder.'
        }
      ],
      religiousMeaning: 'Geleneksel tabirlerde "ölüm", dindeki eksiklik veya dünyadaki rahatlık olarak da yorumlanabilmektedir. İbn Şirin\'e göre ağlamadan, sessizce ölmek uzun ömre; feryat figan edilerek ölüp gömülmek ise dünyalığın artarken maneviyatın zayıflamasına işaret eder.',
      psychologicalMeaning: 'Ölüm rüyaları, psikolojik olarak büyümenin ve gelişmenin ayrılmaz bir parçasıdır. Bilinçaltı, eski inançların, çocuksu davranışların veya bitmesi gereken ilişkilerin sonunu "ölüm" metaforuyla sahneye koyar.',
      faqs: [
        {
          question: 'Rüyada anne-babanın öldüğünü görmek ne demek?',
          answer: 'Genellikle onların ömrünün uzun olacağına yorulur. Ancak aynı zamanda kişinin artık kendi ayakları üzerinde durması, bağımsızlaşması gerektiğine dair psikolojik bir mesajdır.'
        },
        {
          question: 'Rüyada ölmek ve dirilmek nasıl yorumlanır?',
          answer: 'Büyük bir günahtan tövbe etmeye, iflastan sonra tekrar zengin olmaya veya ağır bir hastalıktan tamamen kurtulmaya işaret eden çok hayırlı bir rüyadır.'
        }
      ]
    },
    relatedSymbols: ['mezar', 'aglamak', 'kan']
  },
  {
    slug: 'bebek-hamilelik',
    title: 'Rüyada Bebek ve Hamilelik Görmek',
    category: 'insan',
    shortDescription: 'Yeni umutlar, müjdeli haberler, masumiyet ve hayatınızda filizlenen yeni projelerin veya fikirlerin sembolüdür.',
    content: {
      introduction: 'Bebekler hayatın başlangıcını, saflığı ve potansiyeli temsil eder. Rüyada bebek görmek veya hamile olduğunu görmek, kişinin hayatında yeşermekte olan yeniliklerin en güçlü habercisidir.',
      generalMeaning: 'Rüyada güzel, temiz ve gülen bir bebek görmek, sevinçli bir habere, haneye girecek berekete ve huzura yorulur. Beklenen bir işin hayırlısıyla sonuçlanmasına işarettir. Ağlayan, hasta veya kirli bebek ise, çözülmesi gereken sorunlara, küçük üzüntülere veya rüya sahibinin ihmal ettiği sorumluluklarına dikkat çeker.',
      variations: [
        {
          title: 'Rüyada Erkek Bebek Görmek',
          content: 'Geleneksel olarak müjde, güç, devlet kapısında iş ve başarı olarak yorumlanır. Sevindirici ve büyük bir haberin yakında ulaşacağına delalet eder.'
        },
        {
          title: 'Rüyada Kız Bebek Görmek',
          content: 'Kız bebek, bolluk, bereket, şeref ve zorluklardan sonra gelecek büyük bir kolaylık olarak tabir edilir. Eve girecek rızkın artacağına işarettir.'
        },
        {
          title: 'Rüyada Hamile Olduğunu Görmek',
          content: 'Kişinin cinsiyetinden bağımsız olarak, karnında büyüttüğü yeni bir projesi, umudu veya fikri olduğu anlamına gelir. Yakında meyvelerini verecek bir çabanın sembolüdür.'
        },
        {
          title: 'Rüyada Bebek Emzirmek',
          content: 'Bebek emzirmek, rüya sahibinin çevresindeki insanlara faydalı olacağına, şefkat göstermesi gereken bir durumla karşılaşacağına veya sevgi dolu bir ilişki yaşayacağına yorumlanır.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde bebek, müjde ve ilahi lütuf olarak değerlendirilir. Kur\'an-ı Kerim\'de de çocukların dünya hayatının süsü olduğu belirtilir; bu nedenle rüyada çocuk/bebek görmek dünya nimetlerinin artmasına ve sevinçli haberlere yorulur.',
      psychologicalMeaning: 'Psikolojik olarak rüyada bebek, rüya sahibinin içindeki "içsel çocuğu", savunmasız hissettiği yanlarını veya korunmaya/şefkate ihtiyaç duyan duygularını temsil eder. Ayrıca yaratıcılığın ve yeni fikirlerin kuluçka dönemini (hamilelik) simgeler.',
      faqs: [
        {
          question: 'Bekar birinin rüyada bebek görmesi ne anlama gelir?',
          answer: 'Evlilik veya çocuk özleminden ziyade, hayatında başlayacak yepyeni ve bereketli bir döneme, güzel bir iş teklifine yorulur.'
        },
        {
          question: 'Rüyada ağlayan bebek susturmak nedir?',
          answer: 'Karşınıza çıkan bir krizi kendi çabanız ve sabrınızla başarıyla çözeceğinize, sonunda rahata ereceğinize işaret eder.'
        }
      ]
    },
    relatedSymbols: ['aile', 'anne', 'baba']
  },
  {
    slug: 'ev',
    title: 'Rüyada Ev Görmek',
    category: 'mekanlar',
    shortDescription: 'Rüyada ev görmek, kişinin iç dünyasını, aile yaşantısını, güven duygusunu ve zihinsel durumunu temsil eder.',
    content: {
      introduction: 'Ev, sığınağımız ve kendimizi en güvende hissettiğimiz yerdir. Rüyalardaki ev sembolü, genellikle rüya sahibinin zihnini, bedenini ve hayatındaki temel yapıyı simgeler.',
      generalMeaning: 'Rüyada görülen evin durumu, kişinin ruhsal ve fiziksel durumunu yansıtır. Temiz, ferah ve aydınlık bir ev, iç huzura, mutlu bir aile yaşantısına ve zihinsel berraklığa işaret eder. Eski, harabe veya karanlık bir ev ise kişinin ihmal ettiği psikolojik sorunlarına, sağlık problemlerine veya aile içi iletişimsizliklere delalet eder.',
      variations: [
        {
          title: 'Rüyada Yeni Ev Almak veya Taşınmak',
          content: 'Hayatınızda köklü bir değişimin eşiğinde olduğunuzu gösterir. Yeni bir iş, evlilik, farklı bir şehre yerleşme veya hayata bakış açınızın tamamen yenilenmesi anlamına gelebilir.'
        },
        {
          title: 'Rüyada Evin Yıkıldığını Görmek',
          content: 'Kişinin hayatındaki temel bir inancın, güven duyduğu bir ilişkinin veya kurulu düzeninin sarsılmasına işaret eder. Bu bir uyarı rüyasıdır ve yeniden inşa sürecine hazırlıklı olmayı öğütler.'
        },
        {
          title: 'Rüyada Kalabalık Bir Ev Görmek',
          content: 'Evinizde çok sayıda insan görmek, sosyal hayatınızın hareketleneceğine, evinize gelecek bereketli misafirlere veya dışarıdan gelecek destek ve yardımlara yorumlanır.'
        },
        {
          title: 'Rüyada Tanımadık Bir Evde Olmak',
          content: 'Bilinçaltınızın henüz keşfetmediğiniz, potansiyelinizin farkına varmadığınız yönlerine işaret eder. Evin odaları, keşfedilmeyi bekleyen yeteneklerinizdir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde ev, kişinin dünyalığı, eşi, bedeni ve geçimi olarak yorumlanır. Evin genişliği kişinin rızkının genişliğine, evin darlığı ise geçim sıkıntısına veya manevi daralmaya yorulur.',
      psychologicalMeaning: 'Jung psikolojisinde ev, kişinin "benliği"dir. Üst katlar bilinçli zihni ve idealleri, bodrum katı ise bilinçdışını, karanlık arzuları ve gölge tarafı temsil eder. Rüyada evin bodrumuna inmek, kendi korkularınızla yüzleştiğiniz anlamına gelir.',
      faqs: [
        {
          question: 'Rüyada eski çocukluk evini görmek ne anlama gelir?',
          answer: 'Geçmişe duyulan özlemi, o dönemdeki güven ihtiyacını veya çözülmemiş çocukluk travmalarının bugün tekrar gün yüzüne çıktığını gösterir.'
        },
        {
          question: 'Rüyada evin yandığını görmek nedir?',
          answer: 'Ateşin niteliğine göre değişir. Zarar veren bir yangın hane içi büyük tartışmalara; aydınlatan, zarar vermeyen bir ateş ise müjdeli bir habere ve berekete yorumlanabilir.'
        }
      ]
    },
    relatedSymbols: ['kapi', 'pencere', 'anahtar']
  },
  {
    slug: 'kopek',
    title: 'Rüyada Köpek Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada köpek görmek; sadakati, dostluğu, korumayı simgeleyebildiği gibi, bazen de saldırgan düşmanları temsil eder.',
    content: {
      introduction: 'Köpek, insanın en eski ve en sadık dostudur. Rüyalarda köpek görmek, genellikle çevremizdeki insanlarla olan ilişkilerimizi, sadakat duygusunu veya koruma içgüdüsünü yansıtır.',
      generalMeaning: 'Rüyada uysal, sevimli ve size dostça davranan bir köpek görmek, güvenilir dostlara, destekleyici arkadaşlıklara ve vefaya işarettir. Ancak hırlayan, saldıran veya korkutucu bir köpek görmek, size zarar verebilecek, sadakatsiz veya düşmanca niyetler besleyen kişilere karşı bir uyarıdır.',
      variations: [
        {
          title: 'Rüyada Köpek Isırması',
          content: 'Yakın çevrenizden, güvendiğiniz birinden gelebilecek bir ihanete, üzücü bir söze veya bir dostla yaşanacak şiddetli bir tartışmaya işaret eder.'
        },
        {
          title: 'Rüyada Köpek Sevmek',
          content: 'İnsanlara olan sevginizi, şefkatinizi ve dost canlısı yapınızı yansıtır. Yeni ve sağlam arkadaşlıklar kurulacağının, zor zamanlarda destek göreceğinizin müjdecisidir.'
        },
        {
          title: 'Rüyada Havlayan Köpek Görmek',
          content: 'Arkanızdan dedikodu yapan, size karşı asılsız suçlamalarda bulunan ancak fiili olarak zarar veremeyecek kadar zayıf karakterli kişileri temsil eder.'
        },
        {
          title: 'Rüyada Siyah Köpek Görmek',
          content: 'Siyah renkli köpek, genellikle içsel korkuları, depresif düşünceleri veya size yaklaşmakta olan gizli ve inatçı bir düşmanı simgeler.'
        }
      ],
      religiousMeaning: 'Geleneksel tabirlerde köpek, genellikle "düşük karakterli düşman" veya "günahkar kimse" olarak yorumlanabilmektedir. Ancak rüyada av köpeği veya çoban köpeği görmek, izzete, menfaate ve kişinin malını/mülkünü koruyan yardımcıya delalet eder.',
      psychologicalMeaning: 'Psikolojide köpek, temel içgüdülerimizi, koruma mekanizmalarımızı ve sevgi kapasitemizi temsil eder. Rüyada vahşi bir köpek görmek, bastırılmış öfke ve cinsellik gibi kontrol etmekte zorlandığınız içgüdülerinizin yansıması olabilir.',
      faqs: [
        {
          question: 'Rüyada yavru köpek görmek ne anlama gelir?',
          answer: 'Sevimliliği ve saflığıyla müjdeli bir haber, korunmaya muhtaç bir ilişki veya şefkat duymanız gereken yeni bir duruma işaret eder.'
        },
        {
          question: 'Rüyada köpek sürüsü görmek nedir?',
          answer: 'Sosyal çevrenizde sizinle uğraşan birden fazla kişinin olduğuna veya üstesinden gelmeniz gereken karmaşık bir grup sorununa işaret edebilir.'
        }
      ]
    },
    relatedSymbols: ['kedi', 'kurt', 'yilan']
  },
  {
    slug: 'altin-para',
    title: 'Rüyada Altın ve Para Görmek',
    category: 'maddi-degerler',
    shortDescription: 'Rüyada altın ve para, maddi zenginliğin yanı sıra özdeğer, yetenekler ve ruhsal enerji ile de bağlantılıdır.',
    content: {
      introduction: 'Maddi değerlerin rüyalardaki yansıması her zaman birebir fiziksel zenginlik anlamına gelmez. Altın ve para, sıklıkla kendi özdeğerimizi, içsel gücümüzü ve hayattaki şansımızı sembolize eder.',
      generalMeaning: 'Rüyada altın görmek, aydınlanma, başarı, içsel değer, ruhsal zenginlik ve bazen de ferahlık anlamına gelir. Para görmek ise enerji, güç, fırsatlar ve özgüven ile ilişkilidir. Ancak para veya altın kaybetmek, özgüven eksikliğine, enerjinin tükenmesine veya kaçırılan fırsatlara işaret eder.',
      variations: [
        {
          title: 'Rüyada Altın Bulmak',
          content: 'Kişinin kendi içinde daha önce fark etmediği bir yeteneğini keşfetmesine, büyük bir fırsat yakalamasına veya manevi olarak çok değerli bir bilgiye ulaşmasına yorulur.'
        },
        {
          title: 'Rüyada Kağıt Para Görmek',
          content: 'Geleneksel olarak kağıt para, hafif bir üzüntü veya resmi kurumlardaki bir iş olarak yorumlansa da, modern tabirlerde kazancın artmasına ve elin bollaşmasına işarettir.'
        },
        {
          title: 'Rüyada Bozuk Para Görmek',
          content: 'Bozuk para, dedikodu, ufak tefek sıkıntılar veya kişinin canını sıkacak gereksiz laf kalabalığı olarak tabir edilir.'
        },
        {
          title: 'Rüyada Para Dağıtmak',
          content: 'Çevrenizdeki insanlara bilginizi, sevginizi veya maddi olanaklarınızı cömertçe sunacağınıza, bu sayede manevi huzur bulacağınıza işaret eder.'
        }
      ],
      religiousMeaning: 'Bazı geleneksel İslami tabircilere göre (İbn Şirin gibi), rüyada altın görmek (özellikle külçe altın) gam, keder veya bir cezaya işaret edebilir. Ancak altın takılar (yüzük, bilezik vs.) kadınlar için ziynet ve mutluluk; erkekler için ise bazen üzüntü olarak yorumlanmıştır.',
      psychologicalMeaning: 'Psikolojik bağlamda para ve altın "kişisel değer" ve "güç" sembolüdür. Rüyada çok paranızın olması, özgüveninizin yüksek olduğunu; parayı kaybetmek veya çaldırmak ise değersizlik hissi ve kontrolü kaybetme korkusunu yansıtır.',
      faqs: [
        {
          question: 'Rüyada altın takmak ne demek?',
          answer: 'Bir statü kazanmaya, toplum içinde itibar görmeye veya hayırlı bir evliliğe adım atmaya yorumlanabilir.'
        },
        {
          question: 'Rüyada sahte para/altın görmek nedir?',
          answer: 'Hayal kırıklığına, çevrenizdeki iki yüzlü insanlara veya emek verdiğiniz bir işin boşa çıkacağına dair bir uyarıdır.'
        }
      ]
    },
    relatedSymbols: ['gümüs', 'hazine', 'cuzdan']
  },
  {
    slug: 'dusmek',
    title: 'Rüyada Düşmek',
    category: 'eylemler',
    shortDescription: 'Rüyada düşmek, kontrol kaybı, başarısızlık korkusu, güvensizlik hissi veya destek eksikliği anlamına gelir.',
    content: {
      introduction: 'İnsanların uykudan sıçrayarak uyanmasına neden olan düşme rüyaları, fizyolojik ve psikolojik nedenlerin birleştiği en evrensel rüya deneyimlerinden biridir.',
      generalMeaning: 'Rüyada yüksek bir yerden boşluğa düşmek, hayatınızdaki bir durumla ilgili kontrolünüzü kaybettiğinizi hissettiğinizi gösterir. Bu bir işte başarısız olma korkusu, bir ilişkinin bitişi veya destek göremediğiniz bir zorluk olabilir. Mevki kaybına, itibar zedelenmesine veya maddi düşüşe karşı bir korkuyu simgeler.',
      variations: [
        {
          title: 'Rüyada Düşerken Uyanmak',
          content: 'Uykuya dalma evresindeki kas spazmlarından (miyoklonik sarsıntı) kaynaklanabileceği gibi, tehlikeli veya stresli bir durumdan son anda kurtulmaya da işaret eder.'
        },
        {
          title: 'Rüyada Uçurumdan Düşmek',
          content: 'Büyük bir risk aldığınızı ve bu riskin sonuçlarından korktuğunuzu gösterir. Hayatınızda radikal ve geri dönüşü olmayan bir karar aşamasında olabilirsiniz.'
        },
        {
          title: 'Rüyada Düşüp Kalkmak',
          content: 'Yaşanacak bir başarısızlıktan, hastalıktan veya zarardan sonra toparlanacağınıza, kendi gücünüzle yeniden ayağa kalkacağınıza delalet eder. Çok umut verici bir rüyadır.'
        },
        {
          title: 'Rüyada Birinin Düştüğünü Görmek',
          content: 'O kişinin bir hata yapacağına veya sıkıntıya gireceğine şahit olmaya; ya da çevrenizdeki insanlara karşı empati duygunuzun yüksek olduğuna işaret eder.'
        }
      ],
      religiousMeaning: 'Geleneksel tabirlerde düşmek, durumun kötüye gitmesine, bir günahtan dolayı pişmanlığa veya mevkiden inmeye yorulur. Ancak camiye, güzel bir bahçeye veya hayırlı bir yere düşmek ise güzel sonuçlara delalet eder.',
      psychologicalMeaning: 'Düşme rüyaları tamamen güvensizlik, anksiyete ve desteği kaybetme korkusuyla ilgilidir. Hayatınızda ayağınızı sağlam bastığınızı hissetmediğiniz, her an her şeyin tepe taklak olabileceği endişesi taşıdığınız dönemlerde görülür.',
      faqs: [
        {
          question: 'Sürekli düşme rüyası görmek neyin belirtisi?',
          answer: 'Kronik stres, kaygı bozukluğu veya hayatınızda sürekli sizi aşağı çeken, kontrol edemediğiniz bir durumun varlığına işarettir.'
        },
        {
          question: 'Rüyada suya düşmek ne anlama gelir?',
          answer: 'Duygusal bir krizin içine çekilmeye, ani gelişen olaylar karşısında derin duygusal dalgalanmalar yaşamaya yorulur.'
        }
      ]
    },
    relatedSymbols: ['ucmak', 'kacmak', 'aglamak']
  },
  {
    slug: 'ucmak',
    title: 'Rüyada Uçmak',
    category: 'eylemler',
    shortDescription: 'Rüyada uçmak, özgürlük, sınırları aşma, ruhsal yükseliş ve dertlerden kurtulma arzusu ile tabir edilir.',
    content: {
      introduction: 'Rüyaların en keyifli ve özgürleştirici deneyimi olan uçmak, insanın yerçekimi gibi mutlak bir kuralı yenerek sınırlarını aştığı, muazzam bir kurtuluş hissidir.',
      generalMeaning: 'Rüyada uçmak, genellikle hayatınızdaki sıkıntılardan, kısıtlamalardan ve stresten kurtulmaya, hafiflemeye ve özgürlüğe kavuşmaya işaret eder. Büyük başarılara imza atmak, kariyerde yükselmek veya ruhsal bir aydınlanma yaşamak anlamına gelir. Kontrollü uçuş, hayatınızın direksiyonunda olduğunuzu gösterir.',
      variations: [
        {
          title: 'Rüyada Gökyüzüne Doğru Yükselmek',
          content: 'Hedeflerinize hızla ulaştığınıza, itibarınızın ve statünüzün artacağına, manevi olarak çok üstün bir dereceye erişeceğinize yorulur.'
        },
        {
          title: 'Rüyada Kanatlarla Uçmak',
          content: 'Size destek olan, güç veren kişilerin (veya kendi yeteneklerinizin) yardımıyla büyük işler başaracağınıza, şansınızın yaver gideceğine işarettir.'
        },
        {
          title: 'Rüyada Uçarken Korkmak veya Düşmek',
          content: 'Elde ettiğiniz başarıların veya statünün kalıcı olmayacağından korktuğunuzu, özgüven eksikliği yaşadığınızı ve hedeflerinize ulaşmak için henüz hazır hissetmediğinizi gösterir.'
        },
        {
          title: 'Rüyada Evlerin/Şehrin Üzerinde Uçmak',
          content: 'Olaylara daha geniş bir perspektiften, "kuşbakışı" bakabildiğinizi, sorunları bu geniş vizyon sayesinde kolayca çözeceğinizi temsil eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde uçmak; yolculuğa, makam ve mevki sahibi olmaya, ferahlığa ve sevince delalet eder. Damdan dama uçmak, rütbenin yükselmesine; göğe çekilip kaybolmak ise bazen ecelin yaklaşmasına (ruh teslimine) yorulmuştur.',
      psychologicalMeaning: 'Psikolojide uçmak, "aşkınlık" (transcendence) ihtiyacını, egodan ve dünyevi sorunlardan sıyrılma arzusunu simgeler. Kişinin kendini kısıtlayan inançları yıktığı, yüksek potansiyelini fark ettiği dönemlerin rüyasıdır.',
      faqs: [
        {
          question: 'Rüyada uçan arabaya/halıya binmek ne demek?',
          answer: 'Hayallerinize ulaşmak için sıra dışı, yaratıcı yöntemler kullanacağınıza veya size mucize gibi gelecek bir yardım alacağınıza işaret eder.'
        },
        {
          question: 'Rüyada uzaya uçmak nedir?',
          answer: 'Sınırları tamamen zorladığınız, yeni keşiflere ve maceralara açık olduğunuz, ufkunuzun çok genişlediği bir döneme yorulur.'
        }
      ]
    },
    relatedSymbols: ['dusmek', 'gokyuzu', 'kus']
  }
];

fs.writeFileSync(path.join(contentDir, 'symbols.json'), JSON.stringify(symbols, null, 2));
console.log('Created symbols.json with 10 detailed entries.');
