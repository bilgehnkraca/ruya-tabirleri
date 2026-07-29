import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'karinca',
    title: 'Rüyada Karınca Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada karınca görmek; berekete, çok çalışmaya, hane halkının kalabalıklaşmasına, uzun ömre ve sabrın sonunda elde edilecek büyük başarıya işaret eder.',
    content: {
      introduction: 'Karınca, tüm dünyada çalışkanlığın, dayanışmanın, sabrın ve disiplinin sembolüdür. Rüyalarda görülen karınca, genellikle rüya sahibinin iş hayatındaki çabalarını, hanesindeki bereketi ve toplumsal bağlarını yansıtır. Karıncalar tek başlarına değil, koloniler halinde yaşarlar; bu nedenle rüyada karınca görmek, bireysellikten ziyade toplumsal birliğe, aile üyelerine, ortaklıklara ve kalabalık ortamlara işaret eder. Rüyada karıncaların evin içine girmesi, yiyecek taşıması veya vücutta dolaşması rüyanın anlamını tamamen değiştiren önemli detaylardır.',
      generalMeaning: 'Rüya tabirleri uzmanlarına göre rüyada evin içine karıncaların girdiğini görmek, o haneye büyük bir bereket, rızık ve bolluk geleceğine delalet eder. Karıncaların bir eve girmesi, o evde yiyecek ve bolluk olduğu anlamına geldiğinden çok hayırlı kabul edilir. Rüyada karıncaların yiyecek taşıdığını görmek, rüya sahibinin emeklerinin boşa gitmeyeceğine, yaptığı yatırımların veya çalışmaların meyvesini çok yakında toplayacağına işarettir. Ancak karıncaların evden dışarıya yiyecek taşıdığını görmek, hırsızlığa, israfa veya maddi bir kayba yorulabilir. Rüyada çok sayıda karınca (karınca sürüsü) görmek, kalabalık bir askeriyeye, büyük bir halk topluluğuna veya kişinin soyunun/ailesinin çok genişleyeceğine işaret eder. Uçan karınca görmek ise, bir yerden başka bir yere yapılacak ani bir yolculuğu (bazen de bir hastanın vefatını) simgeleyebilir.',
      variations: [
        {
          title: 'Rüyada Üzerinde (Vücudunda) Karınca Dolaşması',
          content: 'Hastalar için maalesef ağırlaşmaya veya vefata yorulabilen uyarıcı bir rüyadır. Sağlıklı kişiler için ise, gereksiz konuları kafaya çok taktığına, küçük dertleri büyüterek kendi kendini yediğine (içsel strese) işaret eder.'
        },
        {
          title: 'Rüyada Karınca Öldürmek',
          content: 'Zayıf insanlara zulmetmeye, kendi kısmetini ve bereketini kendi elleriyle tepmeye veya iş hayatında yapılan çok büyük bir hataya (yanlış yatırıma) delalet eder. Genellikle pişmanlıkla sonuçlanacak bir kararı simgeler.'
        },
        {
          title: 'Rüyada Karınca Yuvası Görmek',
          content: 'Kişinin memleketini, iş yerini veya kalabalık ailesini temsil eder. Karınca yuvası kazmak veya bozmak, bir ailenin dağılmasına veya kurulu bir düzenin kişinin kendi hataları yüzünden yıkılmasına işarettir.'
        },
        {
          title: 'Rüyada Yatakta Karınca Görmek',
          content: 'Bekar kişiler için evliliğe ve çok çocuk sahibi olmaya; evli kişiler için ise hanedeki nüfusun artmasına (hamilelik haberi vb.) ve aile bağlarının güçlenmesine yorulur.'
        },
        {
          title: 'Rüyada Karınca Isırması',
          content: 'Zayıf ama ısrarcı bir düşmanın size vereceği küçük bir zarara, veya iş hayatında rakipleriniz tarafından yapılacak ufak tefek engellemelere, can sıkıcı sözlere işaret eder.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Karınca görmek asker, ordu, aile, uzun ömür ve rızık demektir. Bir kimse evine karıncaların bir şey taşıdığını görse o evde hayır ve bereket çoğalır. Karıncanın evden bir şey çıkardığını görmesi ise yoksulluğa işarettir." Ayrıca İslam geleneğinde Hz. Süleyman (a.s) ile karıncanın kıssası meşhurdur; bu bağlamda rüyada karıncanın konuştuğunu veya karıncanın dilinden anladığını görmek, rüya sahibinin büyük bir ilim, makam ve yönetim yeteneği elde edeceğine (devlet adamlığına) yorulur.',
      psychologicalMeaning: 'Psikolojide karınca, kişinin "küçük ama sürekli" olan endişelerini, günlük rutin içindeki boğulmuşluk hissini veya toplumsal normlara (kalabalığa) uyum sağlama çabasını sembolize eder. Sürü psikolojisini temsil eden karınca, kişinin bireyselliğini kaybedip büyük bir makinenin sıradan bir çarkı gibi hissettiği dönemlerde de rüyalara girebilir. Karıncaların sistematik çalışması, bilinçaltının kişiye "disiplinli ol" mesajıdır.',
      faqs: [
        {
          question: 'Rüyada dev karınca görmek ne anlama gelir?',
          answer: 'Küçük ve önemsiz bir sorunu veya detayı zihninizde çok büyüterek kendinize devasa bir engel haline getirdiğinizi gösterir.'
        },
        {
          question: 'Rüyada kırmızı karınca görmek kötü müdür?',
          answer: 'Kırmızı veya zehirli karıncalar, daha agresif rakiplere, ani gelişen ateşli hastalıklara veya şiddetli tartışmalara işaret ettiği için dikkatli olunmalıdır.'
        },
        {
          question: 'Rüyada kanatlı karınca sürüsü görmek nedir?',
          answer: 'Kolektif bir değişime, iş yerinizde toplu bir taşınmaya, terfi veya görev değişikliğine (uçarak yer değiştirme) yorulur.'
        }
      ],
      relatedSymbols: ['bocek', 'ev', 'para']
    }
  },
  {
    slug: 'aslan',
    title: 'Rüyada Aslan Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada aslan görmek; güce, otoriteye, devlete, liderliğe, başarıya ve korkusuzca atılacak adımlara işaret eden çok kuvvetli bir semboldür.',
    content: {
      introduction: 'Ormanların kralı aslan, insanlık tarihi boyunca gücün, cesaretin, asalet ve otoritenin mutlak sembolü olmuştur. Rüyalarda aslan görmek de genellikle rüya sahibinin kendi içsel gücünü (özgüvenini), hayatındaki otorite figürlerini (patron, baba, devlet yöneticisi) veya ulaşacağı yüksek makamları temsil eder. Ancak aslan, aynı zamanda yırtıcı ve tehlikeli bir hayvandır; bu nedenle rüyada aslanın size dostça mı yaklaştığı, yoksa saldırdığı mı rüyanın tabirini tamamen zıt kutuplara çekebilir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada aslan görmek, rütbe, yüksek makam, şan ve şöhret anlamına gelir. Rüyasında bir aslanı evcilleştirdiğini, ona bindiğini veya aslanla yan yana yürüdüğünü gören kişi, devlet kademesinde veya iş hayatında çok büyük bir güce hükmeder, rakiplerine mutlak üstünlük sağlar. Aslan yavrusu (aslan parçası) görmek, hayırlı, zeki ve gelecekte büyük işler başaracak bir erkek evlada işarettir. Rüyada bir aslanla dövüştüğünü görmek, kişinin azılı bir düşmanla veya zorlu bir hastalıkla (nefs mücadelesiyle) büyük bir savaşa gireceğini gösterir; aslanı yenerse düşmanına galip gelir. Rüyada aslandan kaçmak, devletin veya güçlü bir kimsenin gazabından korkmaya, sorumluluklardan kaçmaya yorulurken, aslanın rüya sahibini ısırması veya yaralaması, otorite sahibi birinden veya devletten gelecek bir zarara, cezaya delalet eder.',
      variations: [
        {
          title: 'Rüyada Aslan Sevmek (Okşamak)',
          content: 'Devlet büyükleriyle, yöneticilerle veya nüfuzlu kişilerle çok iyi ilişkiler kurmaya, onların desteğini ve himayesini (korumasını) arkasına alarak yükselmeye işarettir.'
        },
        {
          title: 'Rüyada Evin İçinde Aslan Görmek',
          content: 'Evin içine giren aslan, o haneden çıkacak büyük bir lidere, devlet adamına veya hane reisinin çok büyük bir başarı elde ederek aileyi onurlandıracağına yorulur.'
        },
        {
          title: 'Rüyada Aslan Sütü İçmek',
          content: 'Maddi ve manevi olarak elde edilecek çok büyük bir güce, düşmanlara karşı mutlak zafere, zenginliğe ve yenilmez bir karaktere bürünmeye işarettir.'
        },
        {
          title: 'Rüyada Kafeste Aslan Görmek',
          content: 'Kişinin içindeki potansiyeli, yetenekleri veya öfkeyi bastırdığına (hapsettiğine) işarettir. Aynı zamanda tehlikeli bir düşmanın etkisiz hale getirildiğini de gösterir.'
        },
        {
          title: 'Rüyada Aslan Kükremesi Duymak',
          content: 'Devletten gelecek önemli bir habere, yeni bir kanuna veya toplumda yankı uyandıracak büyük bir olaya (veya iş yerinde patronun sert bir tepkisine) delalet eder.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) aslan rüyasını; "Kuvvetli bir düşman, zalim bir idareci veya çetin bir hastalık" olarak tabir eder. Rüyada aslan eti yemek, padişahtan (devletten) büyük bir mal ve makam elde etmeye yorulur. Kirmani\'ye göre, bir aslanı sırtına alıp taşıdığını gören kişi düşmanıyla barışır veya devlet erkanıyla dost olur. İslami tabirlerde aslan, nefsi emmareyi (insanın vahşi ve terbiye edilmesi gereken dürtülerini) de simgeler; aslanı yenmek, kişinin kendi nefsine galip gelmesi (büyük cihat) anlamına da gelir.',
      psychologicalMeaning: 'Psikolojide aslan, "Baskın Karakter" (Alpha) arketipidir. Rüya sahibinin içindeki liderlik dürtülerini, cesareti ve özgüveni temsil eder. Rüyada aslan tarafından kovalanmak, kişinin yüzleşmekten korktuğu güçlü bir figürü (genellikle otoriter bir baba veya patron) ya da kendi içindeki kontrol edemediği öfkeyi simgeler. Aslan, Jung analizinde psişenin karanlık ama inanılmaz derecede yaratıcı ve güçlü olan hayvani (vahşi) enerjisini temsil eder.',
      faqs: [
        {
          question: 'Rüyada dişi aslan görmek ne demek?',
          answer: 'Çok güçlü, soylu, cesur ama bir o kadar da korumacı (veya bazen zalim) bir kadına, iyi bir eşe veya güçlü bir anne figürüne işaret eder.'
        },
        {
          question: 'Rüyada beyaz aslan görmek nedir?',
          answer: 'Çok nadir ve hayırlı bir rüyadır. Gücün adaletle, asaletin bilgelikle birleştiği, tamamen tertemiz ve kusursuz bir başarıyı müjdeler.'
        },
        {
          question: 'Rüyada aslandan saklanmak kötü müdür?',
          answer: 'Sorumluluk almaktan veya size yüklenen liderlik rolünden korktuğunuzu, potansiyelinizi kullanmaktan kaçındığınızı gösterir.'
        }
      ],
      relatedSymbols: ['kopek', 'ev', 'kabe']
    }
  },
  {
    slug: 'kus',
    title: 'Rüyada Kuş Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada kuş görmek; tez vakitte gelecek müjdeli bir habere, özgürlüğe, ruhun yücelmesine, duaların kabulüne ve sevinçli yolculuklara işaret eder.',
    content: {
      introduction: 'Gökyüzünün hakimi olan kuşlar, ruhun bedenden bağımsızlığını, özgürlüğü, umudu ve ilahi mesajları sembolize eder. Kuşlar, yeryüzü ile gökyüzü (maddi ile manevi dünya) arasındaki habercilerdir. Rüyada kuş görmek, hemen hemen tüm kültürlerde çok hayırlı, neşeli ve müjdeli kabul edilir. Rüya sahibinin hayatında meydana gelecek ani ve güzel gelişmelere, uzun zamandır beklenen bir haberin (bir "kuşun kanadında") nihayet geleceğine işaret eder. Kuşun türü (güvercin, kartal, karga, serçe), rengi ve ne yaptığı rüyanın detaylı anlamını belirler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada uçan bir kuş görmek, hayallerin gerçekleşmesine, umutların yeşermesine ve kişinin önüne açılacak yeni fırsatlara delalet eder. Eğer kuş rüya sahibinin başına veya omuzuna konarsa, bu çok büyük bir kısmetin, devlet kuşunun veya şansın doğrudan o kişiye geleceğine işarettir. Rüyada evin içine kuş girmesi, o haneye uzaktan gelecek müjdeli bir habere veya misafire yorulur. Kuş sürüsü görmek, elde edilecek toplu bir mala veya kolay yoldan kazanılacak zenginliğe işarettir. Ancak karga veya akbaba gibi leş yiyen ve siyah kuşlar görmek, genellikle kötü habere, dedikoduya veya arsız bir düşmana yorulurken; bülbül güzel söze, güvercin sadakat ve barışa, kartal ise devlet, güç ve mutlak otoriteye delalet eder.',
      variations: [
        {
          title: 'Rüyada Beyaz Güvercin Görmek',
          content: 'En hayırlı kuş rüyalarındandır. Küslüklerin bitmesine, barışa, temiz ve dürüst bir aşka (veya evliliğe), alınacak çok sevindirici ve tertemiz bir habere delalet eder.'
        },
        {
          title: 'Rüyada Kuş Yakalamak',
          content: 'Büyük bir fırsatı değerlendirmeye, önemli bir başarıya imza atmaya veya kişinin uzun zamandır peşinden koştuğu bir hedefe (bir kalbe) ulaşmasına yorulur.'
        },
        {
          title: 'Rüyada Ölü Kuş Görmek veya Kuş Öldürmek',
          content: 'Umutların tükenmesine, kaçırılan fırsatlara, hayal kırıklığına ve beklenen iyi haberin gelmeyeceğine işarettir. Bazen de kişinin kendi eliyle şansını teptiğini gösterir.'
        },
        {
          title: 'Rüyada Kuşun Yumurtladığını Görmek',
          content: 'Bereketin artmasına, hamileliğe, yeni bir girişimin veya fikrin filizlenerek meyve vermesine işaret eder.'
        },
        {
          title: 'Rüyada Kafeste Kuş Görmek',
          content: 'Özgürlüğün kısıtlanmasına, baskı altında hissetmeye, hapse veya zorunlu bir hizmete yorulur. Kafesin kapısını açıp kuşu uçurmak ise borçlardan ve dertlerden azat olmak demektir.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre kuş, genel olarak şeref, itibar ve müjdedir. İri yapılı kuşlar sultanlara, alimlere veya zengin tüccarlara; küçük kuşlar (serçe vb.) ise eğlenceye, sıradan insanlara veya küçük çocuklara yorulur. Kur\'an-ı Kerim\'de Hz. Süleyman ile Hüdhüd kuşunun kıssası geçtiğinden, konuşan kuş görmek ilme, büyük bir sırrı öğrenmeye ve devlet kademesinde söz sahibi olmaya işaret eder. Karga fasık ve yalancı adama, tavus kuşu ise güzelliğiyle övünen kibirli kişilere delalet eder.',
      psychologicalMeaning: 'Psikolojide kuşlar, insan zihninin sınırlarını aşma arzusunu (transcendence), fikirlerin ve hayallerin uçuşunu temsil eder. Uçan bir kuş, rüya sahibinin günlük yaşamın ağır sorumluluklarından ve stresinden kurtulma, bağımsızlaşma isteğinin bir dışa vurumudur. Kafesteki kuş, bastırılmış yeteneklerin veya "kapana kısılmış" hissedilen bir ilişkinin/işin açık bir simgesidir.',
      faqs: [
        {
          question: 'Rüyada rengarenk bir kuş görmek nedir?',
          answer: 'Hayatınıza girecek çok renkli, neşeli olaylara, sanatsal ilhama veya farklı kültürlerden insanlarla tanışmaya işarettir.'
        },
        {
          question: 'Rüyada papağan görmek ne anlama gelir?',
          answer: 'Arkanızdan dedikodu yapan, sizin sözlerinizi başkalarına taşıyan geveze ve boş konuşan bir insana yorulur.'
        },
        {
          question: 'Rüyada yaralı bir kuş görmek kötü müdür?',
          answer: 'Kalp kırıklığına, incinmiş bir umuda veya yardıma muhtaç bir yakınınızın (özellikle masum birinin) sizden destek beklediğine işaret eder.'
        }
      ],
      relatedSymbols: ['ucmak', 'bebek', 'altin']
    }
  },
  {
    slug: 'ayna',
    title: 'Rüyada Ayna Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada ayna görmek; kişinin iç dünyasıyla (vicdanıyla) yüzleşmesine, kibre, evliliğe, gerçeğin ortaya çıkmasına ve hayal kırıklıklarına işaret eder.',
    content: {
      introduction: 'Ayna, sadece fiziksel görüntümüzü değil, aynı zamanda ruhumuzu, niyetlerimizi ve gizlediğimiz gerçekleri de yansıtan derin bir semboldür. Rüyalarda ayna, kişinin kendi "Ben"ine (Ego) dışarıdan bakması, bir nevi vicdan muhasebesi yapması anlamına gelir. Ayna, gerçeğin çarpıtılmadan gösterildiği yerdir. Rüyada aynaya bakmak, aynanın kırılması, aynanın kirli veya puslu olması, kişinin kendisiyle veya çevresiyle olan ilişkisindeki doğruluğu (dürüstlüğü) sorgulayan güçlü mesajlar barındırır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada aynaya bakmak, bekar biri için evliliğe, eş arayışına veya kendisine benzeyen, dengi bir insanla karşılaşmaya delalet eder. Evli bir kimsenin aynaya bakması ise (eğer eşi hamileyse) doğacak çocuğun kendisine çok benzeyeceğine yorulur. Rüyada parlak ve temiz bir aynaya bakmak, kişinin gönül ferahlığına, vicdan rahatlığına ve işlerinde dürüst davrandığına işarettir. Puslu, kirli veya çatlak bir aynaya bakmak ise, içsel sıkıntılara, kişinin kendi hatalarını görmezden geldiğine, ilişkilerinde gizlenen sinsi sorunlara delalet eder. Arkası sırlı (paslı) ayna görmek, hayal kırıklığına ve yalanlara; aynada kendi yüzünü farklı (çirkin veya ihtiyar) görmek ise, dinde noksanlığa, yapılan hataların bedeline ve itibar kaybına yorulur.',
      variations: [
        {
          title: 'Rüyada Ayna Kırmak',
          content: 'Aynanın düşüp kırıldığını veya onu bilerek kırdığınızı görmek, sevilen biriyle (eş, dost) aranın tamamen açılmasına, vefata veya geri dönülmez büyük bir tartışmaya işaret eden olumsuz bir rüyadır.'
        },
        {
          title: 'Rüyada Başkasının Aynasına Bakmak',
          content: 'Birisinin aynasına bakmak, o kişinin sırlarını öğrenmeye, onun hayat tarzına imrenmeye veya uyanık hayatta o kişiyle çok yakın (bazen tehlikeli) bir bağ kurmaya yorulur.'
        },
        {
          title: 'Rüyada Aynada Kendini Güzel Görmek',
          content: 'İç huzurunun yüksekliğine, kişinin manevi olarak kendini geliştirdiğine, toplum içinde çok sevilip saygı duyulacak işler yaptığına (içi dışı bir olmaya) delalet eder.'
        },
        {
          title: 'Rüyada Ayna Satın Almak',
          content: 'Yeni bir hayata, yeni bir dosta veya evliliğe atılacak adıma işarettir. Aynı zamanda kişinin kendini geliştirmek (eğitim vb.) için yatırım yapacağı anlamına da gelir.'
        },
        {
          title: 'Rüyada Aynada Kendi Yüzünü Görememek',
          content: 'Aynaya bakıp yansıma görememek, kişinin kimlik bunalımına girdiğine, çevresinde itibarını ve görünürlüğünü kaybettiğine (yok sayıldığına) işaret eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde ayna, kadını ve dünyayı temsil eder. İbn Şirin\'e göre rüyada aynaya bakmak, mürüvvet (insanlık), makam ve eştir. Güzel ayna iyi eşe, kötü ayna geçimsiz eşe yorulur. Rüyada gümüş ayna görmek, genellikle dinen sıkıntıya veya kibire; altın ayna ise imanda zafiyete yorumlanmıştır (İslam\'da altın ve gümüş eşya kullanımıyla ilgili kurallardan ötürü). Aynada yüzünü gören kadın hamile ise kızı, erkek aynaya bakarsa (eşi hamileyse) oğlu olur diye tabir edilmiştir.',
      psychologicalMeaning: 'Ayna, psikolojide kendini bilme (Self-reflection) ve narsisizm kavramlarının merkezindedir. Rüyada sürekli aynaya bakan biri, uyanık hayatta başkalarının kendisi hakkında ne düşündüğünü çok fazla önemsiyor (onay arıyor) veya tam tersine bencil bir narsisizm girdabında yaşıyor olabilir. Ayna aynı zamanda "Gölge" (Shadow) arketipinin yüzeye çıktığı yerdir; aynada görülen korkutucu veya çirkin yansıma, kişinin kendisinde kabul etmek istemediği kötü özellikleridir.',
      faqs: [
        {
          question: 'Rüyada aynaya bakıp korkmak ne anlama gelir?',
          answer: 'Kendi yaptığınız hatalardan, geçmişteki bir sırrınızdan veya içinizde büyüyen karanlık bir duygudan korktuğunuzu gösterir (vicdan azabı).'
        },
        {
          question: 'Rüyada başkasının size ayna hediye etmesi nedir?',
          answer: 'O kişinin size bir gerçeği (veya hatanızı) göstereceğine, size ayna tutarak (rehberlik ederek) doğruyu bulmanıza yardım edeceğine yorulur.'
        },
        {
          question: 'Rüyada süslü (antika) ayna görmek ne demektir?',
          answer: 'Geçmişe duyulan özleme, eski ve köklü ilişkilere veya yüzeysel güzelliğe gereğinden fazla önem verildiğine işarettir.'
        }
      ],
      relatedSymbols: ['su', 'kadin', 'yuzuk']
    }
  }
];

const currentSlugs = symbols.map(s => s.slug);
for (const s of newSymbols) {
  if (!currentSlugs.includes(s.slug)) {
    symbols.push(s);
  }
}

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully added: ' + newSymbols.map(s => s.slug).join(', '));
