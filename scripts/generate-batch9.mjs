import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'domuz',
    title: 'Rüyada Domuz Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada domuz görmek; genellikle haram mala, kötü ahlaklı ve inatçı bir düşmana, haksız kazanca ve çevrenizdeki niyet bozukluklarına işaret eder.',
    content: {
      introduction: 'Domuz, dini ve kültürel kodlarımızda haram kılınmış, pisliği ve nefsani arzuları temsil eden bir canlıdır. Bu nedenle rüyalarda domuz görmek, istisnalar dışında genellikle çok olumsuz ve uyarıcı bir sembol olarak kabul edilir. Rüyada domuz, rüya sahibinin hayatına girmeye çalışan şüpheli veya haram bir kazancı, çevresindeki ahlaksız ve yüzsüz (arsız) insanları temsil eder. Ancak rüyanın gidişatı (domuzla boğuşmak, domuza binmek veya domuz eti yemek) kişinin bu haramlarla veya düşmanlarla olan ilişkisini ve mücadelesini belirler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada domuz görmek, kuvvetli, cüsseli ancak haysiyetsiz, verdiği sözde durmayan ve dinde bozuk bir düşmana delalet eder. Rüyasında domuzla dövüştüğünü veya onu evinden kovduğunu gören kişi, hayatındaki böyle kötü niyetli bir insandan kurtulur veya haram bir iş teklifini elinin tersiyle iter. Domuza bindiğini veya onu yendiğini görmek, çok büyük ve azılı bir düşmana (veya zalim birine) galip gelerek büyük bir güç ve mal elde etmeye yorulur. En tehlikeli rüyalardan biri domuz eti yemektir; rüyada domuz eti yemek (bilerek veya bilmeyerek) gerçek hayatta haram yemeye, gayrimeşru yollardan para kazanmaya, haksızlığa ortak olmaya veya büyük bir günaha işaret eden ciddi bir ilahi uyarıdır.',
      variations: [
        {
          title: 'Rüyada Yaban Domuzu Görmek',
          content: 'Ormanda yaban domuzu görmek, son derece kaba, gaddar ve ne yapacağı belli olmayan (cahil) bir düşmana veya aniden karşınıza çıkacak çok riskli bir belaya işaret eder.'
        },
        {
          title: 'Rüyada Domuz Sürüsü Görmek',
          content: 'Ahlaki çöküntü yaşayan bir topluluğa, dedikodu yuvasına veya kişinin çevresini saran kalabalık ama karaktersiz insanlara yorulur. Bu sürüyü gütmek ise, böyle bir gruba liderlik etmeye işarettir.'
        },
        {
          title: 'Rüyada Domuz Kesmek (Öldürmek)',
          content: 'Çok hayırlı bir rüyadır. Kişinin hayatına sızmaya çalışan bir haramı (veya arsız düşmanı) tamamen hayatından çıkaracağına, tövbe edip helal yola döneceğine ve rahata ereceğine delalet eder.'
        },
        {
          title: 'Rüyada Domuzun Saldırması',
          content: 'Maddi veya manevi olarak size zarar vermek isteyen, hiç utanması olmayan bir rakibin veya düşmanın açıkça hamle yapacağına işarettir.'
        },
        {
          title: 'Rüyada Domuza Dönüşmek',
          content: 'Rüya sahibinin kendi nefsinin kurbanı olduğuna, hırsı ve maddi arzuları yüzünden insanlığını ve ahlakını kaybettiğine dair içsel bir korkuyu ve büyük bir uyarıyı temsil eder.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre domuz, kuvvetli, ahlaksız ve dinen çok bozuk (fasık) bir adamdır. Rüyada domuza bindiğini gören kişi çok mal bulur ve düşmanını kahreder (ancak bu malın helal olup olmadığı tartışmalıdır). Rüyada evinde bir sürü domuz olduğunu gören kimsenin evine veya işine haram rızık girer. Nablusi\'ye göre ise rüyada bilmeden domuz eti yediğini görmek, kişinin istemeyerek de olsa harama veya faize bulaşabileceğine karşı bir uyarıdır.',
      psychologicalMeaning: 'Psikolojide domuz, genellikle "Gölge" arketipinin en alt seviyesini; doymak bilmeyen iştahı, oburluğu, şehveti ve açgözlülüğü (greed) sembolize eder. Rüyasında domuz gören biri, uyanık hayatında kendi ilkel dürtüleriyle, oburluğuyla veya etik dışı istekleriyle yüzleşiyor demektir. Domuzun pisliği, kişinin kendini bir konuda suçlu, "kirli" veya ahlaken zayıf hissetmesinin bilinçaltındaki yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada domuz yavrusu (yavru domuz) görmek ne demek?',
          answer: 'Başlangıçta sevimli veya zararsız gibi görünen küçük bir yalanın veya ufak bir şüpheli kazancın, büyüyerek başınıza büyük bela açacağına işarettir.'
        },
        {
          question: 'Rüyada domuz sürüsünden kaçmak nedir?',
          answer: 'Bulunduğunuz toksik ve ahlaksız ortamdan, kötü niyetli insanlardan kendinizi kurtarma ve temiz kalma çabanıza yorulur.'
        },
        {
          question: 'Rüyada domuz eti ikram edilmesi kötü müdür?',
          answer: 'Evet, birinin sizi çok cazip ama tamamen etik dışı (veya haram) bir işe sürüklemeye çalışacağına dair çok net bir uyarıdır.'
        }
      ],
      relatedSymbols: ['ayi', 'kopek', 'yilan']
    }
  },
  {
    slug: 'kavga-etmek',
    title: 'Rüyada Kavga Etmek',
    category: 'beden',
    shortDescription: 'Rüyada kavga etmek; içsel çatışmalara, bastırılmış öfkeye, gerçek hayattaki fikir ayrılıklarına, haksızlığa karşı direnmeye ve bazen de sürpriz bir şekilde tersine yorularak uzlaşmaya işaret eder.',
    content: {
      introduction: 'Kavga, stresin, öfkenin ve çözülememiş anlaşmazlıkların fiziksel veya sözlü olarak patlama noktasıdır. Rüyalarda kavga etmek, genellikle kişinin uyanık hayatta içine attığı, söyleyemediği sözlerin ve bastırdığı öfkenin bilinçaltında patlak vermesidir. Kavga rüyaları, son derece yorucu ve kalp atışını hızlandıran rüyalardır. Rüyada kiminle kavga ettiğiniz (tanıdık biri, eş, patron veya tanımadığınız biri) ve kavganın nasıl sonuçlandığı (sizin mi dayak yediğiniz yoksa dövdüğünüz mü), rüyanın mesajını çözmek için en kilit noktalardır.',
      generalMeaning: 'Rüya tabircilerine (özellikle eski kaynaklara) göre rüyada kavga etmek, çoğu zaman "tersine" yorulur. Yani rüyada biriyle şiddetli şekilde kavga etmek, o kişiyle uyanık hayatta çok iyi anlaşmaya, aradaki buzların erimesine ve dostluğun (veya aşkın) güçlenmesine delalet edebilir. Rüyada tanıdık biriyle tartışmak, o kişiyle aranızdaki bir meselenin nihayet çözüme kavuşacağına işarettir. Ancak kılıç, bıçak veya silahla yapılan kanlı kavgalar, gerçek hayatta yaşanacak büyük bir husumete, mahkemelik olmaya veya aile içi bölünmelere yorulur. Rüyada tanımadığı bir kalabalıkla kavga ettiğini veya dayak yediğini gören kişi, devletle, yasalarla veya toplumun genel kurallarıyla bir çatışmaya girer. Haklı bir sebep uğruna kavga etmek ise, dini ve ahlaki olarak doğru yolda olduğunuza, zulme boyun eğmediğinize işarettir.',
      variations: [
        {
          title: 'Rüyada Eş veya Sevgiliyle Kavga Etmek',
          content: 'Psikolojik bir boşalım rüyasıdır. Gerçek hayatta eşe söylenemeyen küçük rahatsızlıkların dışa vurumudur. Tabir olarak ise, eşler arasındaki muhabbetin ve bağlılığın artacağına, varsa küslüğün biteceğine yorulur.'
        },
        {
          title: 'Rüyada Dayak Yemek',
          content: 'Dayak yemek, rüya dilinde çok ilginç bir şekilde "yardım görmek" olarak tabir edilir. Rüyada birinden dayak yemek, o kişiden veya ummadığınız bir yerden çok büyük bir iyilik, maddi destek veya borç bulmaya işarettir.'
        },
        {
          title: 'Rüyada Birini Dövmek',
          content: 'Sizin birini dövmeniz, gerçek hayatta sizin o kişiye (veya o kişinin temsil ettiği bir gruba) elinizle veya malınızla büyük bir faydanızın, yardımınızın dokunacağına delalet eder.'
        },
        {
          title: 'Rüyada Sözlü Kavga (Tartışma) Yapmak',
          content: 'Sadece laf dalaşı yapmak, üzüntüye, dedikoduya, can sıkıntısına ve akrabalar arasında yaşanacak ufak tefek kırgınlıklara (soğuk rüzgarlara) işaret eder.'
        },
        {
          title: 'Rüyada Ölü Biriyle Kavga Etmek',
          content: 'Vicdan azabına, kişinin dini veya ahlaki sorumluluklarını yerine getirmediğine (ölünün ruhunu rahatsız ettiğine) veya mirayla ilgili çıkacak tatsızlıklara yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde kavgada haklı olan taraf, gerçek hayatta da galip gelir. Rüyada haksızlığa karşı veya din/ahlak uğruna mücadele ettiğini (cihat ettiğini) gören kişi, manevi olarak çok yüksek bir dereceye ulaşır. Ancak rüyada akrabalarla (sıla-i rahmi keserek) veya sırf dünya malı için kavga ettiğini görmek, dinen zayıflığa, kalpteki kibre ve günaha girmeye yorulur.',
      psychologicalMeaning: 'Kavga rüyaları, kesinlikle bastırılmış agresyonun (öfkenin) rüya yoluyla boşaltılmasıdır (katarsis). İş yerinde patronuna cevap veremeyen kişi, rüyasında patronuyla ölümüne kavga eder. Bu rüyalar, zihnin dengeyi bulma ve stresi atma yöntemidir. Aynı zamanda kavga, kişinin kendi içindeki iki farklı fikir (Ego ve İd) arasındaki çatışmayı da sembolize edebilir; yani aslında kavga ettiğiniz kişi "kendi yansımanızdır".',
      faqs: [
        {
          question: 'Rüyada saç başa kavga etmek ne anlama gelir?',
          answer: 'Kadınlar arasında özellikle itibar zedeleyici dedikodulara, çok şiddetli kıskançlık krizlerine ve sırların ortaya dökülmesine yorulur.'
        },
        {
          question: 'Rüyada kavga ayırmak nedir?',
          answer: 'Sizin arabulucu, barışçıl ve toplumda saygı duyulan, "akil" (sözü dinlenen) bir karaktere sahip olduğunuza, adaletle hükmedeceğinize işarettir.'
        },
        {
          question: 'Rüyada kavga edip ağlamak kötü müdür?',
          answer: 'Hayır, ağlamak ferahlıktır. Tartışmanın ardından ağlamak, içinizdeki zehri attığınıza ve sorunun çözülerek büyük bir rahatlama yaşanacağına yorulur.'
        }
      ],
      relatedSymbols: ['aglamak', 'kan', 'kopek']
    }
  },
  {
    slug: 'okul',
    title: 'Rüyada Okul Görmek',
    category: 'mekanlar',
    shortDescription: 'Rüyada okul görmek; hayat boyu öğrenmeye, yeni tecrübelere, eski dostluklara duyulan özleme, bazen de otorite figürleriyle yaşanan sorunlara işaret eder.',
    content: {
      introduction: 'Okul, hayatımızdaki ilk sosyalleşme, öğrenme, disiplin ve otorite (öğretmen) ile tanışma alanımızdır. Kişiliğimizin şekillendiği bu yıllar, bilinçaltımızda öylesine derin izler bırakır ki; yaşımız 50 bile olsa rüyamızda kendimizi tekrar lise sıralarında, tahtaya kalkarken veya okul koridorlarında koştururken bulabiliriz. Rüyada okul görmek, sadece geçmişe duyulan bir nostalji değil, aynı zamanda hayatın kendisine (hayat okuluna), uyanık hayatta öğrenmeniz gereken yeni derslere ve karşılaşacağınız yeni "sınavlara" işaret eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada okul görmek, ilme, bilgeliğe, kişinin ufkunu genişletecek yeni ortamlara girmesine ve terbiye olmaya delalet eder. Rüyasında okulda ders dinlediğini gören kişi, tecrübeli birinin nasihatinden faydalanır, iş hayatında yeni bir yetenek edinir ve rızkını bilgi yoluyla artırır. Okul aynı zamanda kural ve disiplin mekanı olduğundan, rüyada okulda ceza almak veya müdürle tartışmak, gerçek hayattaki devlet veya patron gibi otorite figürleriyle yaşanacak sürtüşmelere yorulur. Yıllar sonra rüyada eski okulunu ve sınıf arkadaşlarını görmek, kişinin geçmişteki saf, çıkarsız dostlukları özlediğine, şimdiki hayatının stresinden (yetişkin sorumluluklarından) bir an olsun kaçmak istediğine işaret eder.',
      variations: [
        {
          title: 'Rüyada Mezun Olmak',
          content: 'Çok hayırlı bir rüyadır. Kişinin hayatındaki zorlu bir dönemi (hastalık, borç, kötü evlilik) başarıyla "bitirdiğine", diplomasını alıp temiz bir sayfaya, yepyeni bir hayata adım atacağına delalet eder.'
        },
        {
          title: 'Rüyada Okulda Kaybolmak',
          content: 'Kişinin hayatında yönünü şaşırdığına, ne yapacağını bilemediğine, bir meslek veya karar aşamasında kafa karışıklığı yaşadığına işaret eden kaygı rüyasıdır.'
        },
        {
          title: 'Rüyada Yeniden Üniversiteye (Okula) Başlamak',
          content: 'Yaşı ne olursa olsun okula başladığını görmek, kişinin kendini yenileme ihtiyacına, yeni bir hobi veya meslek edineceğine, zihinsel olarak genç kaldığına yorulur.'
        },
        {
          title: 'Rüyada Okul Müdürü Görmek',
          content: 'Devlet büyüklerine, patrona, babaya veya kural koyan (yasaklayan) katı bir kişiye işaret eder. Müdürün size kızması, yapacağınız bir hatadan dolayı uyarılmaya delalet eder.'
        },
        {
          title: 'Rüyada Tahtaya Kalkmak (Soru Sorulması)',
          content: 'Toplum önünde kendinizi ifade etmeniz veya kanıtlamanız gereken (sunum, mülakat gibi) önemli bir teste tabi tutulacağınıza yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde okul, mektep veya medrese olarak geçer ve ilim, irfan, din ve ahlak meclislerini temsil eder. Rüyada okula gidip ders çalıştığını gören kişi, Kur\'an okumaya, sünnete uymaya ve helal kazanmaya meyleder. İbn Şirin\'e göre okul (mektep), bazen çocukların gürültüsünden dolayı "kavga, gürültü ve karmaşa" ortamına da yorulabilir. Okul inşa etmek veya yaptırmak ise kalıcı bir hayır, sadaka-i cariye (cami veya çeşme yaptırmak gibi) anlamına gelir.',
      psychologicalMeaning: 'Okul rüyaları, Jungyen psikolojide "Büyüme" (Maturation) sürecinin sembolüdür. Ancak çoğu zaman rüyada görülen okul, kişinin uyanık hayatta "yetersiz" hissettiği anlarda ortaya çıkar (İmposter Sendromu). Kişi işte kendini başarısız hissettiğinde, zihni onu okul yıllarındaki "sınıfta kalma" korkusuna geri götürür. Okul, aynı zamanda süperegonun (toplumsal kuralların) zihindeki en net temsilcisidir.',
      faqs: [
        {
          question: 'Rüyada okula geç kaldığını görmek nedir?',
          answer: 'Sınav rüyasına benzer şekilde, hayatınızdaki önemli fırsatları değerlendirmekte geciktiğinize veya yaşıtlarınızdan geri kaldığınızı düşündüğünüze işarettir.'
        },
        {
          question: 'Rüyada öğretmenini görmek ne anlama gelir?',
          answer: 'Sıkıştığınız bir konuda size yol gösterecek bilge bir kişiye, bir rehbere veya akıl hocasına (mentor) duyduğunuz ihtiyacı temsil eder.'
        },
        {
          question: 'Rüyada okulun yıkıldığını görmek kötü müdür?',
          answer: 'Mevcut inançlarınızın, bildiğinizi sandığınız doğruların veya eski düzeninizin radikal bir şekilde değişeceğine (yıkılacağına) işarettir.'
        }
      ],
      relatedSymbols: ['sinav', 'kalem', 'kitap']
    }
  },
  {
    slug: 'hastane',
    title: 'Rüyada Hastane Görmek',
    category: 'mekanlar',
    shortDescription: 'Rüyada hastane görmek; sanılanın aksine şifaya, dertlerden kurtulmaya, manevi temizliğe, yardım görmeye ve zor günlerin geride kalacağına işaret eder.',
    content: {
      introduction: 'Hastane kelimesi gerçek hayatta hastalık, acı, endişe ve ölümle özdeşleştiği için, rüyada hastane görmek insanlarda büyük bir korku ve panik yaratır. Ancak rüya tabirleri dilinde semboller genellikle işlevlerine göre yorumlanır. Hastane bir hastalık yeri değil, "şifa bulma ve tedavi" merkezidir. Bu nedenle rüyada hastane, doktor veya hemşire görmek, genellikle rüya sahibinin maddi, manevi veya fiziksel yaralarının iyileşme sürecine girdiğinin, dertlerin biteceğinin müjdecisidir.',
      generalMeaning: 'Rüya tabircilerinin büyük çoğunluğuna göre rüyada hastane görmek, tövbe etmeye, günahlardan arınmaya, hastalar için şifa bulmaya ve borçlular için borçlardan kurtulup feraha çıkmaya delalet eder. Rüyasında hastaneye yattığını gören kişi, yaşadığı çok büyük bir buhrandan, depresyondan veya mali krizden sevdiklerinin (veya devletin/kurumların) desteğiyle çıkacak demektir. Temiz, aydınlık ve güzel kokan bir hastane görmek, hayırlı ve hızlı gelecek bir çözüme; pis, karanlık ve terk edilmiş bir hastane görmek ise iyileşme sürecinin zor ve meşakkatli geçeceğine, ruhsal çöküntüye yorulur. Rüyada hastaneden taburcu olduğunu (çıktığını) görmek, tamamen rahata ermeye, yenilenmiş bir şekilde (ikinci bir şansla) hayata geri dönmeye işarettir.',
      variations: [
        {
          title: 'Rüyada Hastanede Hasta Ziyaret Etmek',
          content: 'Uyanık hayatta sevilen, değer verilen bir insandan iyilik görmeye, o kişiyle bağları güçlendirmeye ve birine yapacağınız büyük bir manevi yardıma yorulur.'
        },
        {
          title: 'Rüyada Ameliyat Olmak',
          content: 'Çok köklü ve sarsıcı ama bir o kadar da gerekli olan radikal bir değişime işarettir. (Örneğin toksik bir ilişkinin bitmesi). "Kangren olmuş kolun kesilmesi" gibi acı da verse sonuç ferahlıktır.'
        },
        {
          title: 'Rüyada Doktor Görmek',
          content: 'İlim sahibi, sorun çözen, yol gösteren akil bir insana (veya hakime) işaret eder. Doktorun size ilaç vermesi, alacağınız çok değerli bir nasihati temsil eder.'
        },
        {
          title: 'Rüyada Akıl Hastanesi (Tımarhane) Görmek',
          content: 'Bazen hapse, bazen dünyevi dertlerden tamamen kopmaya, bazen de kişinin aklını kaçıracak kadar aşık olmasına veya büyük bir servet kazanmasına delalet eder (delilik, zıt anlamıyla büyüklük sayılabilir).'
        },
        {
          title: 'Rüyada Hastane Koridorunda Beklemek',
          content: 'Bir mahkeme sonucunu, bir sınav sonucunu veya çok önemli bir haberi (belirsizlik içinde) endişeyle beklemeye yorulur. Sabrın sınandığı bir dönemdir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde hastane şifahane olarak bilinir. İbn Şirin\'e göre hastane, günahlardan arınma yeri (hamam gibi) veya tövbe kapısıdır. Bir kimse rüyada şifahaneye girdiğini görse, eğer günahkar ise tövbe edip hak yola döner; eğer yoksul ise rızkı artar. Çünkü orası dertlilerin derman bulduğu yerdir. Rüyada ölmüş birini hastanede görmek ise, o kişinin ahirette dualara, sadakaya ve bağışlanmaya ihtiyacı olduğuna dair çok net bir uyarıdır.',
      psychologicalMeaning: 'Psikolojide hastane rüyaları, ruhsal olarak yorgun düştüğünüzün ve bir "mola" veya "bakım" (care) ihtiyacınızın olduğunu gösterir. Bilinçaltınız size "Dur, yaralarını sar ve dinlen" demektedir. Ayrıca hastane, kontrolün sizden çıkıp uzmanlara (doktorlara) geçtiği bir yerdir; bu nedenle hastane rüyası gören kişi, sorunlarıyla tek başına başa çıkamadığını kabul edip uyanık hayatta yardım istemesi gerektiğini içten içe bilmektedir.',
      faqs: [
        {
          question: 'Rüyada hastanede ağlamak ne demek?',
          answer: 'Gözyaşı şifadır. Hastanede ağlamak, mevcut tüm dertlerinizi ve hüznünüzü geride bırakıp çok büyük bir sevinç yaşayacağınıza yorulur.'
        },
        {
          question: 'Rüyada boş ve terk edilmiş hastane görmek nedir?',
          answer: 'Aradığınız yardımı çevrenizde (veya kurumlarda) bulamayacağınıza, kendi yaranızı kendinizin sarması gerektiğine işaret eder.'
        },
        {
          question: 'Rüyada sedyede taşınmak kötü müdür?',
          answer: 'Kötü değildir ancak pasif bir duruma düştüğünüzü, kontrolü başkalarına (örneğin ailenize) bıraktığınızı gösterir. Geçici bir güçsüzlük dönemidir.'
        }
      ],
      relatedSymbols: ['kan', 'olum', 'doktor']
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
