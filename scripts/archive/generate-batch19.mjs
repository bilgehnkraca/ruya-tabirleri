import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'ceviz',
    title: 'Rüyada Ceviz Görmek',
    category: 'doga',
    shortDescription: 'Rüyada ceviz görmek; zor elde edilen ama çok kalıcı olan bir mala, sağlam bir karaktere, sağlığa, gizli bir ilme ve zorluklardan sonra gelecek berekete işaret eder.',
    relatedSymbols: ['agac', 'yemek-yemek', 'elma'],
    content: {
      introduction: 'Ceviz, hem sert kabuğu hem de insan beynine benzeyen iç yapısıyla, doğadaki en gizemli ve korunaklı meyvelerden biridir. Ulaşması (kırması) zahmetli, ancak içi son derece besleyici ve şifalıdır. Rüyalarda ceviz görmek, genellikle rüya sahibinin hayatındaki "zorlukla elde edilecek ama çok sağlam olacak" kazançları, dışarıya kapalı (sır saklayan) insanları veya zihinsel/bedensel sağlığı sembolize eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada ceviz görmek, genel olarak çok hayırlı bir mala, zenginliğe ve uzun bir ömre delalet eder. Rüyasında ceviz kırıp yediğini gören kişi, uzun süredir uğraştığı, önünde engeller olan (sert kabuklu) bir işi nihayet çözer ve çok büyük bir maddi/manevi kazanç elde eder. Rüyada ceviz ağacı görmek, dışarıdan çok sert ve huysuz (veya cimri) görünen, ancak iç dünyasında çok faydalı, zengin ve bilge bir insana yorulur. Rüyada bir çuval veya kase dolusu ceviz görmek, kişinin eline geçecek toplu bir paraya (miras veya ikramiye) işarettir. Ancak cevizin içinin çürük veya kurtlu çıkması, dışarıdan karlı görünen bir işin veya insanın içinin bozuk olduğuna dair ciddi bir uyarıdır.',
      variations: [
        {
          title: 'Rüyada Ceviz Kırmak',
          content: 'Zorlu bir problemi zekanızla veya bilek gücünüzle çözeceğinize, inatçı bir insanı ikna edeceğinize ve hedefinize ulaşacağınıza delalet eder.'
        },
        {
          title: 'Rüyada Yeşil (Kabuklu) Ceviz Görmek',
          content: 'Henüz olgunlaşmamış, vakti gelmemiş bir nasibe işarettir. Sabırlı olunması gerektiğine, acele edilirse elin (veya dilin) boyanıp (zarar görüp) pişman olunacağına yorulur.'
        },
        {
          title: 'Rüyada Çürük Ceviz Görmek',
          content: 'Büyük umutlarla girilen bir işten veya güvenilen bir insandan görülecek hayal kırıklığına, içinin "boş" çıkmasına delalet eder.'
        },
        {
          title: 'Rüyada Ceviz İçi Görmek (Hazır Kırılmış)',
          content: 'Hiç yorulmadan, zahmet çekmeden, başkasının (veya ailenin) hazırladığı bir hazıra (mirasa veya paraya) konmaya işarettir.'
        },
        {
          title: 'Rüyada Ceviz Toplamak (Ağaçtan)',
          content: 'Zor ve kibirli bir insandan (veya büyük bir kurumdan) kendi hakkını söke söke almaya, büyük bir zafer ve kazanç elde etmeye yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) ceviz; gömülü mal (define), salih bir eş veya çok zorlu bir mücadele (husumet) sonrası elde edilecek rızıktır. Çünkü ceviz kırılmadan içindeki nimet görülmez. Rüyada ceviz ağacına çıktığını gören kişi, çok sert, sözü geçen, otoriter (ancak faydası dokunan) yabancı bir adama sırtını dayar. Nablusi\'ye göre rüyada ceviz içi, sırların (gizli ilimlerin) ortaya çıkmasına, bedenin şifasına ve sağlam (sarsılmaz) bir imana delalet eder.',
      psychologicalMeaning: 'Psikolojide ceviz, şekli itibarıyla beyni ve "zihni" temsil eder. Rüyasında sağlam bir ceviz gören kişinin zihinsel berraklığı, akıl sağlığı ve sorun çözme yeteneği çok yüksektir. Ancak ceviz kabuğunu kırmakta zorlanmak, uyanık hayatta çözemediğiniz karmaşık bir "zihin bilmecesine" (kararsızlığa) işaret eder. Ayrıca cevizin sert kabuğu, dış dünyaya karşı ördüğünüz "savunma mekanizmanızı" ve duygularınızı (içinizi) gizleme eğiliminizi simgeler.',
      faqs: [
        {
          question: 'Rüyada ceviz ağacından düşmek ne anlama gelir?',
          answer: 'Güvendiğiniz, sırtınızı dayadığınız çok güçlü (veya sert) bir insanın desteğini kaybedeceğinize, kibrinizin kurbanı olacağınıza işarettir.'
        },
        {
          question: 'Rüyada cevizle oynamak (ses çıkarması) nedir?',
          answer: 'Elinizdeki malla (veya başarıyla) gereksiz yere övündüğünüze, bu sesin (gösterişin) çevrede düşmanlık ve dedikodu (husumet) yaratacağına yorulur.'
        },
        {
          question: 'Rüyada ceviz ağacı dikmek ne demektir?',
          answer: 'Gelecek nesillere, torunlara bırakılacak çok kalıcı ve büyük bir mirasa, sağlama alınmış bir geleceğe (uzun vadeli yatırıma) delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'keci',
    title: 'Rüyada Keçi Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada keçi görmek; inatçılığa, kararlılığa, sarp (zor) yollardan elde edilecek kazanca, sabırlı olmaya ve bağımsızlık (özgürlük) isteğine işaret eder.',
    relatedSymbols: ['koyun', 'inek', 'dag'],
    content: {
      introduction: 'Keçi, hayvanlar aleminde inatçılığı, başına buyrukluğu ve koyunların (sürünün) aksine sarp kayalıklara (zorluklara) korkusuzca tırmanabilme yeteneğiyle bilinir. Rüyalarda görülen keçi figürü, genellikle rüya sahibinin (veya hayatındaki birinin) uzlaşmaz tavrını, zorluklar karşısındaki direncini ve "kendi bildiğini okuma" huyunu sembolize eder. Koyun uysallığı ve itaati temsil ederken, keçi bireyselliği ve isyanı temsil eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada keçi görmek, kişinin hayatında çok inatçı, dediğim dedik ama bir o kadar da çalışkan bir insanın varlığına delalet eder. Rüyada bir keçi sürüsü görmek, rüya sahibinin karşısına çıkacak ufak tefek zorluklara (inatlaşmalara), ancak bu zorlukların üstesinden gelerek rızkını taştan çıkaracağına yorulur. Rüyada keçi sağmak veya keçi sütü içmek, zorluklardan sonra gelecek çok helal ve bereketli bir mala işarettir. Rüyasında bir keçiyle inatlaştığını veya keçinin kendisine tos vurduğunu gören kişi, uyanık hayatta otorite figürleriyle (patron, baba veya inatçı bir eş) çok sert bir tartışmaya girer.',
      variations: [
        {
          title: 'Rüyada Keçi Yavrusu (Oğlak) Görmek',
          content: 'Evinize neşe katacak çok şirin ama yaramaz (ele avuca sığmaz) bir çocuğa, veya çok sevimli, küçük bir hediye (müjde) almaya delalet eder.'
        },
        {
          title: 'Rüyada Dağ Keçisi Görmek',
          content: 'Hedeflerinizin çok yüksek olduğuna, kimsenin cesaret edemediği çok zorlu (sarp) bir işe girişip başarıyla (zirveye çıkarak) sonuçlandıracağınıza işarettir.'
        },
        {
          title: 'Rüyada Siyah Keçi Görmek',
          content: 'Çevrenizde esmer, çok gizemli ve son derece inatçı (fikri değiştirilemeyen) birine, veya içinizdeki gizli isyankar duygulara yorulur.'
        },
        {
          title: 'Rüyada Keçi Kesmek',
          content: 'İçinizdeki inadı kıracağınıza, gurur yapmayı bırakıp ailenizle (veya işinizle) barışacağınıza, tövbe edip huzura ereceğinize delalet eder.'
        },
        {
          title: 'Rüyada Keçi Boynuzu Görmek',
          content: 'Çok güçlü bir dirence, kişinin rakiplerine karşı kendini savunmak için geliştirdiği sert tutuma ve güç (otorite) arayışına işarettir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) keçi; kadri yüce, vakarlı, dayanıklı ancak inatçı bir adamdır. Rüyada keçi eti yemek, zorluklarla ve çetin mücadelelerle elde edilecek rızka (mal) yorulur. Keçinin yünü (kılı) mala ve servete delalet eder. Rüyada bir keçiye bindiğini gören kimse, inatçı ve zor bir insana sözünü geçirir (onu yönetir). Keçinin derisini yüzmek ise, inatçı bir insandan zorla alınacak bir mala veya o kişinin sırlarının ifşa olmasına işarettir.',
      psychologicalMeaning: 'Psikolojide keçi, kişinin "gölge" (Shadow) arketipini, isyankar yönünü ve boyun eğmez bireyselliğini temsil eder (keçi, şeytan tasvirlerinde sıkça kullanılan bir motiftir). Rüyasında keçi gören kişi, uyanık hayatta toplumsal kurallara (sürüye) uymak istemiyor, kendi özgürlüğünü ilan etmek istiyor veya birine karşı (belki de kendine karşı) çok anlamsız bir "keçi inadı" sürdürüyor olabilir.',
      faqs: [
        {
          question: 'Rüyada keçi sürüsü gütmek (çobanlık) ne anlama gelir?',
          answer: 'Birbirinden farklı karakterde, inatçı ve zor bir grup insanı (ekibi veya aileyi) başarıyla yöneteceğinize (liderlik yapacağınıza) işarettir.'
        },
        {
          question: 'Rüyada keçinin saldırması (tos vurması) nedir?',
          answer: 'Uyanık hayatta inat ettiğiniz bir konuda çok büyük bir duvara (hataya) çarpacağınıza, dikbaşlılığınızın size zarar vereceğine yorulur.'
        },
        {
          question: 'Eve keçi girmesi ne demektir?',
          answer: 'Hane içine girecek çok inatçı (huysuz) birine, aile içinde yaşanacak fikir ayrılıklarına ancak bu kişinin eve bereket de getireceğine delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'hamur',
    title: 'Rüyada Hamur Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada hamur görmek; kolaylaşan işlere, helal kazanca, berekete, henüz sonuçlanmamış (yoğrulan) olaylara ve kişinin kaderini kendi elleriyle şekillendirmesine işaret eder.',
    relatedSymbols: ['ekmek', 'yemek-yemek', 'ev'],
    content: {
      introduction: 'Hamur, su ile unun birleşmesiyle ortaya çıkan, insan emeğiyle yoğrulan ve sonunda ekmeğe (hayata) dönüşen en temel bereket sembolüdür. Hamur, yapısı gereği "şekil alabilirliği, hazırlık aşamasını ve olgunlaşmayı" temsil eder. Rüyalarda hamur görmek, genellikle rüya sahibinin elindeki imkanları nasıl kullandığını, geleceğini nasıl yoğurduğunu (inşa ettiğini) ve evindeki bereketi gösterir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada hamur görmek veya yoğurmak, helal yoldan kazanılacak paraya, işlerin kolaylaşmasına ve hane içine doğacak büyük bir berekete delalet eder. Rüyasında hamur yoğurduğunu gören kişi, uzun vadeli bir iş için kolları sıvar, emek verir ve o işin "kabarmasını" (sonuç vermesini) bekler. Rüyada hamurun mayalanıp taştığını (kabardığını) görmek, kişinin kazancının ve malının beklediğinden çok daha fazla artacağına, ticaretinin çok bereketli geçeceğine işarettir. Ancak hamurun mayalanmaması (kabarmaması) veya ekşimesi, işlerde yaşanacak durgunluğa, zarara veya girilen yolda "vaktinden önce" davranıldığı için başarısız olunacağına yorulur.',
      variations: [
        {
          title: 'Rüyada Hamur Açmak',
          content: 'İşlerinizin ve ufkunuzun genişleyeceğine, karmaşık sorunları ustalıkla çözeceğinize ve el beceriniz (veya pratik zekanız) sayesinde takdir toplayacağınıza işarettir.'
        },
        {
          title: 'Rüyada Hamur Yemek (Çiğ Hamur)',
          content: 'Sabırsızlığa, bir işin veya ilişkinin "pişmesini" (olgunlaşmasını) beklemeden acele karar verip hata yapmaya (hazımsızlığa) delalet eder.'
        },
        {
          title: 'Rüyada Başkasının Hamur Yoğurduğunu Görmek',
          content: 'Çevrenizde sizin iyiliğiniz (veya ortak bir gelecek) için emek veren, işleri toparlayan ve size destek olan cefakar bir insana (genellikle anne veya eş) yorulur.'
        },
        {
          title: 'Rüyada Hamur Kızartmak (Pişirmek)',
          content: 'Sabırla beklenen bir sürecin nihayet meyvesini (sonucunu) vereceğine, emeklerin karşılığının nakit paraya veya sıcak bir yuvaya dönüşeceğine işarettir.'
        },
        {
          title: 'Rüyada Ele Yapışan (Cıvık) Hamur Görmek',
          content: 'İçinden çıkılması zor, yapışkan ve can sıkıcı bir belaya bulaştığınıza, ne kadar uğraşsanız da o sorundan (veya dedikodudan) kolay kolay kurtulamayacağınıza yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Nablusi) hamur, zahmetsiz veya ticaretten kazanılan "helal" maldır. Rüyada hamur yoğurmak misafirin gelmesine (hazırlık yapmaya) veya hamile bir kadının doğumunun yaklaştığına delalet eder. Dar yerlerde hamur yoğurmak bereketsizliğe veya günaha, geniş ve temiz yerlerde yoğurmak ise rahmete yorulur. Rüyada hamurun bereketlenip taştığını gören kimse Allah\'ın izniyle darlıktan bolluğa (feraha) çıkar, zengin olur.',
      psychologicalMeaning: 'Psikolojide hamur, kişinin kendi "karakterini" veya "hayatını" şekillendirme (yoğurma) sürecini sembolize eder. Rüya sahibi, uyanık hayatta yeni bir yetenek öğreniyor, kendini geliştiriyor veya yeni bir duruma adapte olmaya (şekil almaya) çalışıyor demektir. Hamurun kıvamı, bu sürecin (adaptasyonun) ne kadar zor veya kolay geçtiğinin bilinçaltındaki aynasıdır.',
      faqs: [
        {
          question: 'Rüyada hamur teknesi görmek ne anlama gelir?',
          answer: 'Evinizin, şirketinizin veya projenizin (yani rızkınızın kaynağının) temellerinin çok sağlam olduğuna ve hiç boş kalmayacağına işarettir.'
        },
        {
          question: 'Kuru, taş gibi olmuş hamur görmek nedir?',
          answer: 'Elinizdeki sermayeyi (veya yeteneği) yanlış zamanda, yanlış şekilde kullandığınız için ziyan ettiğinize (katılaştığınıza, gelişime kapandığınıza) yorulur.'
        },
        {
          question: 'Rüyada börek/baklava hamuru (yufka) açmak ne demek?',
          answer: 'İş hayatında çok ince işçilik gerektiren, hassas ama sonunda çok büyük bir prestij (ve servet) getirecek bir projeye imza atacağınıza delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'yangin',
    title: 'Rüyada Yangın Görmek',
    category: 'doga',
    shortDescription: 'Rüyada yangın görmek; ani değişimlere, yıkıma, sonrasında gelecek büyük bir arınmaya (veya yeniden doğuşa), iflasa veya şiddetli bir kavgaya işaret eder.',
    relatedSymbols: ['ates', 'ev', 'cehennem'],
    content: {
      introduction: 'Ateş ve yangın, insanlık tarihinin en büyük korkusu olduğu kadar, en büyük arındırıcısı ve medeniyet kurucusudur (mitolojide Anka Kuşu\'nun küllerinden doğması gibi). Rüyalarda kontrol edilemeyen bir yangın görmek, rüya sahibinin hayatında meydana gelecek şiddetli ve ani bir değişimi, bir şeylerin "kül olmasını" ve genellikle önlenemez bir krizi (öfkeyi) sembolize eder. Yangın, rüyanın nasıl bittiğine bağlı olarak yıkım veya yeniden doğuş anlamına gelir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada alev alev, dumanı tüten bir yangın görmek, çoğunlukla büyük bir fitneye, musibete, hastalığa veya hane (ya da ülke) içinde çıkacak çok büyük bir kargaşaya (savaşa) delalet eder. Rüyasında evinin yandığını gören kişinin hanesine büyük bir nifak girer, eşler arasında şiddetli bir geçimsizlik veya ani bir iflas (mal kaybı) yaşanır. Ancak alevsiz, sadece ışık saçan bir yangın görmek (veya o ateşte ısınmak), rüya sahibinin korktuğu bir şeyden emin (güvende) olacağına, büyük bir müjde alacağına işarettir. Rüyada bir yangını söndürmek ise, rüya sahibinin bilgeliği ve soğukkanlılığı sayesinde çok büyük bir belanın veya dedikodunun önüne geçileceğine yorulur.',
      variations: [
        {
          title: 'Rüyada Orman Yangını Görmek',
          content: 'Toplumu veya kalabalık bir aileyi ilgilendiren büyük bir kriz, kıtlık, ekonomik dalgalanma veya bir hastalığın (salgının) hızla yayılmasına işarettir.'
        },
        {
          title: 'Rüyada Yangından Kaçmak (Kurtulmak)',
          content: 'Çok tehlikeli, zarar verici bir ilişkiden veya iflas etmek üzere olan bir işten son anda paçayı sıyırarak büyük bir felaketi atlatacağınıza delalet eder.'
        },
        {
          title: 'Rüyada Üstünün (Kıyafetinin) Yanması',
          content: 'Kişinin itibarına, şerefine veya işine (kıyafete) çok büyük bir leke sürüleceğine, dedikodular yüzünden canının çok yanacağına yorulur.'
        },
        {
          title: 'Rüyada Yangın Çıkarmak (Bilerek)',
          content: 'Kendi öfkeniz, hırsınız veya kibiriniz yüzünden kendi hayatınızı (veya başkalarının hayatını) mahvedeceğinize, etrafınıza bilerek zarar verdiğinize işarettir.'
        },
        {
          title: 'Rüyada Yangından Birini Kurtarmak',
          content: 'Çok büyük bir sevaba gireceğinize, hayatı darmadağın olmuş bir insanın elinden tutarak onu küllerinden yeniden var edeceğinize (kahramanlığa) delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) yangın, Allah\'ın azabı, devlet adamlarının zulmü veya insanlar arasına düşecek büyük bir fitne (kavga) olarak tabir edilir. Kur\'an\'da ateş genellikle cehennemle bağdaştırıldığı için rüyada ateşte yanmak, büyük günahlara (özellikle yetim malı yemeye veya faize) işarettir. Gökyüzünden ateş (yangın) yağdığını görmek, o bölgeye isabet edecek bir musibettir. Ancak Hz. İbrahim\'in ateşe atılıp yanmaması kıssasına dayanarak, rüyada ateşin ortasında kalıp yanmadığını (serin olduğunu) gören kişi, iftiralardan ve düşmanlarından ilahi bir yardımla (mucizeyle) kurtulur.',
      psychologicalMeaning: 'Psikolojide yangın, kontrol edilemeyen, yıkıcı "Öfke" ve "İhtiras" (Tutku) duygularını temsil eder. Rüyasında yangın gören kişi, uyanık hayatta tükenmişlik sendromu yaşıyor (Burn-out), öfkeden patlamak üzere hissediyor veya hayatındaki her şeyi yakıp yıkıp sıfırdan başlama (Radikal Değişim) arzusu taşıyor olabilir. Yangın, bastırılmış duyguların şiddetli bir şekilde yüzeye çıkmasıdır.',
      faqs: [
        {
          question: 'Rüyada dumansız yangın görmek ne anlama gelir?',
          answer: 'Kimsenin ruhu duymadan, gizliden gizliye yaşanacak bir tehlikeye veya sadece ruhunuzu yakan ama dışarıdan belli olmayan (gizli) bir aşka/derde yorulur.'
        },
        {
          question: 'Kendi evinin yandığını ve ağladığını görmek nedir?',
          answer: 'Maddi bir kayıp yaşanacağına, ancak dökülen gözyaşlarının ardından ailenin birbirine daha sıkı sarılarak bu zorluğu atlatacağına işarettir.'
        },
        {
          question: 'Rüyada gökten yangın düşmesi ne demek?',
          answer: 'İlahi bir uyarıdır; toplum olarak işlenen günahların (veya adaletsizliğin) sonucunda başa gelecek kaçınılmaz (ilahi) bir krizi temsil eder.'
        }
      ]
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
