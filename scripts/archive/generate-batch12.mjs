import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'tavuk',
    title: 'Rüyada Tavuk Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada tavuk görmek; çalışkan ve faydalı bir kadına, hane içindeki berekete, evlatlara, dedikoduya ve ufak ama sürekli gelen rızıklara işaret eder.',
    content: {
      introduction: 'Tavuk, insanlık tarihi boyunca evcilleştirilmiş en temel besin kaynaklarından biridir. Üretkenliği, her gün yumurtlaması ve evin (kümesin) etrafında dolaşması nedeniyle rüyalarda tavuk görmek, doğrudan rüya sahibinin ev hayatı, bereketi ve ailesindeki kadınlarla ilişkilendirilir. Rüyada tavuk görmek genellikle olumlu bir sembol olmakla birlikte, tavuğun rengi, sesi, yumurtlayıp yumurtlamadığı veya rüyada bir tavuk sürüsünün bulunması tabiri farklı yönlere çeker. Tavuk aynı zamanda "çabuk telaşlanan" yapısından ötürü uyanık hayattaki gereksiz evhamları da simgeler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada sağlıklı ve etli bir tavuk görmek, çok çalışkan, ailesine düşkün, faydalı ama biraz da neşeli/geveze bir kadına delalet eder. Rüyasında evinde bir sürü tavuk bulunduğunu gören kişinin hanesinde bereket, rızık ve misafir eksik olmaz; kişinin eline ufak ufak ama sürekli (düzenli) bir gelir geçer. Rüyada tavuk kesmek, bekar bir kimse için evliliğe, bazen de bir malın bölüşülmesine yorulur. Tavuğun yumurtladığını görmek, hamileliğe, çok hayırlı bir evlada veya çok kazançlı çıkılacak küçük bir yatırıma işarettir. Ancak tavukların sürekli gıdaklayıp bağrıştığını duymak, akrabalar veya komşular arasında çıkacak can sıkıcı dedikodulara, asılsız haberlere ve gereksiz yaygaraya delalet eder.',
      variations: [
        {
          title: 'Rüyada Çiğ Tavuk Eti Görmek',
          content: 'Uğraşması zahmetli bir işe, kişinin kazancına karışma ihtimali olan şüpheli durumlara veya aile içinde (özellikle kadınlar arasında) yaşanacak kırgınlıklara yorulur.'
        },
        {
          title: 'Rüyada Kara (Siyah) Tavuk Görmek',
          content: 'Zengin, asil ancak biraz ketum (sır saklayan) ve ciddi mizaçlı bir kadına; bazen de kişiye kalacak eski bir mirasa işaret eder.'
        },
        {
          title: 'Rüyada Tavuk ve Civcivleri Bir Arada Görmek',
          content: 'Çok hayırlıdır. Aile saadetine, şefkate, kalabalık bir haneye, torun torba sahibi olmaya ve çocuklardan yana görülecek hayra delalet eder.'
        },
        {
          title: 'Rüyada Tavuğun Uçtuğunu Görmek',
          content: 'Beklenmedik bir başarıya, ev içinden birinin aniden uzak bir yere yolculuğa çıkmasına veya bir sırrın açığa (havaya) uçmasına yorulur.'
        },
        {
          title: 'Rüyada Tavuk Kovalamak',
          content: 'Kişinin küçük hesaplar peşinde koştuğuna, vaktini daha değerli işler yerine ufak tefek meselelerle (veya dedikodularla) harcadığına işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Tavuk, güzel, faydalı ama biraz ahmak (veya hafif meşrep) bir kadına işarettir." Rüyada evine bir tavuk girdiğini gören kişi, böyle bir kadınla evlenir veya onun vasıtasıyla mal sahibi olur. Piliç veya civciv görmek, zorlukla elde edilen yetim malına veya küçük çocuklara yorulur. Nablusi\'ye göre rüyada bir tavuk kesmek, bir kızı evlendirmeye (çeyiz dizmeye); tavuk eti yemek ise, zahmet çekmeden elde edilecek helal ve tatlı bir rızka (özellikle sağlık bulmaya) delalet eder.',
      psychologicalMeaning: 'Psikolojide tavuk, "evcimenlik" (domesticity), annelik içgüdüleri ve bazen de "korkaklık" (chicken) sembolüdür. Rüyada sürekli tavuk görmek, rüya sahibinin konfor alanından çıkmaktan korktuğunu, fazla korumacı (veya evhamlı) bir yapıya büründüğünü gösterebilir. Aynı zamanda etraftaki sürekli "gıdaklamalar", kişinin uyanık hayatta maruz kaldığı bilgi kirliliğini ve çevresinin bitmek bilmeyen tavsiyelerinden bunaldığını yansıtır.',
      faqs: [
        {
          question: 'Rüyada kümesten yumurta toplamak nedir?',
          answer: 'Emeklerinizin karşılığını azar azar ama çok sağlam bir şekilde biriktirdiğinize, sabrın sonundaki maddi rahata işarettir.'
        },
        {
          question: 'Rüyada horoz görmek tavukla aynı mıdır?',
          answer: 'Hayır, horoz evin erkeğini, babayı, ezan okuyan müezzini veya sesi gür çıkan (haberci) bir lideri temsil eder.'
        },
        {
          question: 'Rüyada hastalıklı (kel) tavuk görmek kötü müdür?',
          answer: 'Evet, maddi darlığa, bereketsizliğe veya hanedeki bir kadının geçireceği geçici, hafif bir rahatsızlığa delalet eder.'
        }
      ],
      relatedSymbols: ['yumurta', 'kus', 'yemek-yemek']
    }
  },
  {
    slug: 'koyun',
    title: 'Rüyada Koyun Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada koyun görmek; asil, itaatkar ve bereketli bir insana, helal mala, ganimete, cemaate, iyi niyetli bir eşe ve huzura işaret eden çok hayırlı bir rüyadır.',
    content: {
      introduction: 'Koyun; yünü, sütü, eti ve uysal doğasıyla tarih boyunca bereketi, bereketi ve itaati (kaderine rıza göstermeyi) temsil etmiştir. Rüyalarda koyun görmek, rüya sahibinin hayatındaki huzurlu ilişkilere, alın teriyle elde edilen helal kazanca ve iyi ahlaklı insanlara delalet eder. Özellikle İslami rüya tabirlerinde koyun, "Mümin" insanın sembolüdür (itaatkar ve çevresine zarar vermeyen). Rüyada sürü halinde koyun görmek, koyun sağmak veya koyun kesmek tabirin odak noktasını belirler.',
      generalMeaning: 'Rüya tabircilerinin tümüne göre rüyada koyun görmek, mutlak hayır, bereket ve nimettir. Rüyasında koyun sürüsü gören kişinin eline çok büyük bir sermaye geçer, yöneticilik vasfı artar (çobanlık/liderlik) ve kendisine sadık insanlardan oluşan bir çevresi olur. Bir kimse rüyasında bir koyun bulduğunu veya satın aldığını görse, asil, zengin ve çok iyi huylu bir kadınla evlenir. Koyun sağdığını görmek, eşten veya asil bir kadından gelecek çok büyük bir maddi desteğe (sürekli rızka) işarettir. Ancak koyunun kesildiğini (kurban dışında) görmek, iyi niyetli bir insanın kalbini kırmaya veya bir haksızlığa delalet eder. Rüyada koyun yünü (yapaya) görmek ise malın en saf ve en kalıcı olanıdır.',
      variations: [
        {
          title: 'Rüyada Kurbanlık Koyun Görmek',
          content: 'Allah rızası için yapılacak bir fedakarlığa, verilmiş bir adağın yerine getirilmesine, esaretten veya borçtan kurtulup mutlak feraha ermeye işarettir.'
        },
        {
          title: 'Rüyada Koyun Sürüsü Gütmek',
          content: 'Çok büyük bir topluluğa, şirkete veya kuruma yönetici olmaya, adaleti sağlamaya ve emri altında birçok insanın çalışacağına yorulur.'
        },
        {
          title: 'Rüyada Koç Görmek',
          content: 'Koyundan farklı olarak koç; inatçı, güçlü, şerefli, devlet adamı veya cesur bir lider (komutan) demektir. Koçla dövüşmek böyle bir liderle zıtlaşmaya işarettir.'
        },
        {
          title: 'Rüyada Siyah Koyun Görmek',
          content: '"Ailenin siyah koyunu" deyimindeki gibi dışlanmışlığa değil; Arap ve Doğu kültüründe soyluluğa, güce, sır saklayan ve asaletli kişilere yorulur.'
        },
        {
          title: 'Rüyada Koyunun Doğurması (Kuzu Görmek)',
          content: 'Masumiyete, haneye katılacak çok sevimli bir evlada, sevinçli bir habere ve rızkın katlanarak büyümesine (üremesine) delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde koyun; asalet, zenginlik, şerefli eş ve itaatkar evlattır. İbn Şirin\'e göre koyunlar ganimettir. Rüyada evine bir sürü koyun girdiğini görenin evine büyük bir zenginlik (bereket) girer. Bir koyun kestiğini ancak etini yemediğini gören kimse, şerefli bir kadına zulmeder. Nablusi, rüyada koyun sürüsünün yünlerini kırktığını görenin, kimsenin itiraz edemeyeceği kadar helal ve temiz bir mirasa konacağını belirtir. Peygamberlerin mesleğinin çobanlık olduğu düşünüldüğünde, koyunlarla ilgilenmek dini bütünlüğe ve sünnete uymaya da işarettir.',
      psychologicalMeaning: 'Psikolojide koyun, "Sürü psikolojisini", itaati ve uyum sağlamayı sembolize eder. Rüyasında koyun sürüsü içinde kaybolduğunu gören biri, bireyselliğini kaybetmekten ve sıradanlaşmaktan korkuyor olabilir. Öte yandan uysal bir koyun sevdiğini görmek, kişinin kendi içindeki "masumiyetle", uysal ve barışçıl tarafıyla bağlantı kurduğunu; agresyondan ve kavgadan (kurt/aslan olmaktan) uzaklaşıp iç huzuru bulduğunu gösterir.',
      faqs: [
        {
          question: 'Rüyada koyun eti yemek nedir?',
          answer: 'Eğer pişmişse çok büyük bir hastalığın ardından bulunacak şifaya, dertlerin bitmesine ve yüksek bir makamdan gelecek lütfa yorulur.'
        },
        {
          question: 'Rüyada koyunun saldırması (tos vurması) ne anlama gelir?',
          answer: 'Uysal ve sessiz sandığınız, hep alttan alan birinin (eşiniz veya dostunuz) artık sabrının taştığına ve size çok sert bir karşılık vereceğine işarettir.'
        },
        {
          question: 'Rüyada kaybolmuş bir kuzu bulmak ne demek?',
          answer: 'Yardıma muhtaç birine el uzatmaya, yetim veya öksüz sevindirmeye ve bunun karşılığında çok büyük dua (sevap) almaya delalet eder.'
        }
      ],
      relatedSymbols: ['et', 'ayi', 'kus']
    }
  },
  {
    slug: 'inek',
    title: 'Rüyada İnek Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada inek görmek; zenginliğe, berekete, geçecek olan yıllara (iyi veya kötü), saygın bir kadına ve evin rızkını sağlayan toprağa (veya işe) işaret eder.',
    content: {
      introduction: 'Tarih boyunca medeniyetlerin ayakta kalmasını sağlayan en önemli tarım ve hayvancılık unsurlarından biri inektir. Rüyalarda inek görmek, doğrudan maddi zenginlik, bereket, beslenme ve "zaman" (yıllar) ile ilişkilidir. Yusuf Peygamber\'in Kur\'an-ı Kerim\'de geçen meşhur rüya tabirinde (Yusuf Suresi); yedi semiz inek bolluk yıllarını, yedi zayıf inek ise kıtlık yıllarını temsil etmiştir. Bu nedenle rüyada ineğin besili (şişman) veya zayıf (cılız) olması, rüyanın yorumunu tamamen belirleyen en temel faktördür.',
      generalMeaning: 'Rüya tabircilerine göre rüyada semiz (şişman, etli) bir inek görmek, rüya sahibi ve bölge halkı için ucuzluk, bolluk, bereket ve kazançla geçecek çok hayırlı bir "yıla" (veya döneme) delalet eder. Ticaretle uğraşanlar için büyük kâr, çiftçiler için mahsul bolluğudur. Aksine, zayıf, hastalıklı ve cılız bir inek görmek; kıtlığa, ekonomik krize, geçim sıkıntısına ve kuraklığa yorulur. Rüyada inek sağdığını ve bol süt aldığını gören kişi, yaptığı işten çok büyük ve helal bir kazanç elde eder; bekar ise çok zengin ve dürüst biriyle evlenir. İneğin boynuzlaması veya saldırması, maddi bir kayba veya ev içindeki güçlü bir kadının (annenin/eşin) rüya sahibine olan öfkesine işarettir.',
      variations: [
        {
          title: 'Rüyada Sarı İnek Görmek',
          content: 'Kur\'an\'daki Bakara Suresi\'ne atfen, bakanlara sürur (neşe) veren, dertlerden ve hastalıklardan kurtuluşa, büyük bir mirasa ve şifaya işaret eden çok hayırlı bir rüyadır.'
        },
        {
          title: 'Rüyada İnek Sütü İçmek',
          content: 'Zenginliğe, uzun ömre, ilim öğrenmeye, dine sımsıkı sarılmaya ve kişinin kazancının tamamen saf, helal ve bereketli olduğuna delalet eder.'
        },
        {
          title: 'Rüyada Kesilmiş (Kurban Edilmiş) İnek Görmek',
          content: 'Büyük bir adağın yerine gelmesine, bir tehlikenin savuşturulmasına veya mirastan (toprak/gayrimenkul) düşecek büyük bir paya yorulur.'
        },
        {
          title: 'Rüyada İneğin Eve Girmesi',
          content: 'Eve girecek çok büyük bir servete, beklenmedik yerden gelen berekete veya hane içinden birinin çok iyi bir işe girerek aileyi ihya edeceğine işarettir.'
        },
        {
          title: 'Rüyada Ölü İnek Görmek',
          content: 'Maddi kaynağın (örneğin bir iş yerinin) kapanmasına, büyük bir iflasa, geçim kaynağının kurumasına ve zor günlerin habercisi olan bir uyarıya delalet eder.'
        }
      ],
      religiousMeaning: 'Hz. Yusuf (a.s) kıssasından dolayı inek, doğrudan "Zaman (Yıl)" ve "Rızık" sembolüdür. İbn Şirin\'e göre inek; asil, zengin ve itaatkar kadındır. Rüyasında ineğin kendisiyle konuştuğunu gören kimse, herkesi şaşırtacak kadar büyük bir zenginliğe kavuşur ve nimeti artar. Kirmani\'ye göre, ineğinin kaybolduğunu görenin eşiyle arası açılır. Gebe inek görmek ise, bir sonraki yılın (veya dönemin) bir öncekinden çok daha bereketli geçeceğine, ümitlerin yeşereceğine müjdedir.',
      psychologicalMeaning: 'Psikolojide inek, uysallığı, anneliği (süt vermesi sebebiyle), "Toprak Ana" arketipini ve besleyici, verici feminen (dişil) enerjiyi sembolize eder. Rüyasında sağlıklı bir inek gören kişi, uyanık hayatta şefkat, bakım ve duygusal beslenme ihtiyaçlarını tatmin ediyor demektir. Hindistan gibi kültürlerde ineğin kutsal sayılması da, bilinçaltındaki bu "yaşam veren" mutlak kaynağa duyulan saygının bir yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada buzağı (inek yavrusu) görmek nedir?',
          answer: 'Hz. İbrahim kıssasına atfen, haneye gelecek asil ve hayırlı bir erkek evlada, misafire veya yeni filizlenen tertemiz bir iş fikrine yorulur.'
        },
        {
          question: 'Rüyada ineğin kaçtığını görmek ne demek?',
          answer: 'Elinizdeki büyük bir fırsatı kendi hatanızla kaçırdığınıza, nankörlük ettiğiniz bir nimetin (işin veya eşin) sizden uzaklaştığına işarettir.'
        },
        {
          question: 'Rüyada ineğin ısırması veya çifte atması nedir?',
          answer: 'Çok güvendiğiniz, size hep faydası dokunan birinden yiyeceğiniz büyük bir darbeye veya yaptığınız büyük bir hatanın (israfın) cezasını çekeceğinize delalet eder.'
        }
      ],
      relatedSymbols: ['koyun', 'su', 'sari-yilan']
    }
  },
  {
    slug: 'silah',
    title: 'Rüyada Silah Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada silah görmek; güç, zafer, itibar, kendini güvende hissetme ihtiyacı, bazen de ani öfke ve sivri dilli sözlere işaret eden ikili bir semboldür.',
    content: {
      introduction: 'Silah, insanın savunma, korunma, saldırma ve otorite kurma ihtiyacının en keskin icadıdır. Rüyalarda silah (tabanca, tüfek, kılıç) görmek, rüya sahibinin hayatındaki güç dengeleriyle, kendini tehdit altında hissedip hissetmemesiyle ve korkularıyla doğrudan ilgilidir. Rüyada silah, genellikle "söz" ve "itibar" ile ilişkilendirilir. Silahın ateşlenmesi, hedefini vurup vurmaması veya silahın tutukluk yapması rüyanın size vermek istediği mesajın şifreleridir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada silah görmek (veya silah kuşanmak), çok hayırlıdır; güce, kuvvete, devlet kapısında yüksek makama, düşmanlara karşı alınacak mutlak zafere ve emniyette olmaya delalet eder. Rüyasında üzerinde silah taşıdığını gören kişi, itibar sahibi olur, sözü dinlenir, hastalık veya korkularından şifa bulur. Silahla ateş edip hedefi vurduğunu görmek, bir konuda karar vermeye, amacına ulaşmaya veya çok etkili/keskin bir söz söylemeye (karşı tarafı susturmaya) yorulur. Ancak rüyada mermisiz (boş) silah görmek veya silahın tutukluk yapması, çaresizliğe, sözünün dinlenmemesine, hayal kırıklığına ve kişinin güvendiği dağlara kar yağmasına işarettir. Rüyada birinin size silah doğrultması, ciddi bir dedikoduya, iftiraya veya birinden gelecek ağır eleştirilere maruz kalacağınıza delalet eder.',
      variations: [
        {
          title: 'Rüyada Silah Sesi Duymak',
          content: 'Sürpriz ve sarsıcı bir habere işarettir. Silah sesi uzaktan geliyorsa haber de uzaktan (farklı bir şehirden) gelir. Yakından duyulan silah sesi, ani çıkan dedikodulara veya korkuya yorulur.'
        },
        {
          title: 'Rüyada Silah Satın Almak',
          content: 'Tedbir almaya, dedikodulara karşı kendini savunacak deliller toplamaya, ilim öğrenmeye (cehalete karşı silahlanmaya) veya yeni bir iş kurmak için güç kazanmaya delalet eder.'
        },
        {
          title: 'Rüyada Silahın Kırılması veya Parçalanması',
          content: 'Makamın veya itibarın kaybedilmesine, dayanak noktanızın çökmesine, düşman karşısında savunmasız kalarak mağlubiyet yaşanacağına dair ciddi bir uyarıdır.'
        },
        {
          title: 'Rüyada Kılıç veya Bıçak Görmek',
          content: 'Ateşli silahtan ziyade kesici silahlar; kesin alınan kararlara, adalete, bir durumu kökünden kesip atmaya (boşanma, istifa vb.) veya erkek çocuğa işaret eder.'
        },
        {
          title: 'Rüyada Havaya Ateş Etmek',
          content: 'Öfkenizi veya sevincinizi kontrolsüzce dışa vurduğunuza, boş laf konuşmaya, gösteriş yapmaya ve enerjinizi yanlış yerlere harcadığınıza yorulur.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Silah, erkeğin izzeti, onuru, gücü ve süsüdür. Rüyada kuşanılan silah, düşmanı alt etmeye, hastalıktan şifaya ve zalimlerin şerrinden korunmaya delalet eder." Nablusi\'ye göre rüyada bir kimsenin silahla donandığını ve insanların ona (silahsız halde) baktığını görmek, o kişinin o topluma lider veya yönetici olacağına işarettir. Ayrıca dini tabirlerde silah; cehaleti yenen ilim, şeytanı kovan iman (ve dua) olarak da yorumlanır.',
      psychologicalMeaning: 'Psikolojide silah (özellikle ateşli silahlar), Freudyen yaklaşımda erkekliği (fallik sembol) ve agresyonu (saldırganlığı) temsil eder. Kişinin rüyasında silah görmesi, uyanık hayatta hissettiği savunmasızlık duygusuna karşı geliştirdiği bir savunma mekanizmasıdır. Sürekli silah rüyası gören biri, kendini dış dünyaya karşı tehdit altında hissediyor, "zırhlanma" ihtiyacı duyuyor veya bastırılmış bir öfkeyi içinde barındırıyor demektir.',
      faqs: [
        {
          question: 'Rüyada silahla birini vurmak kötü müdür?',
          answer: 'Genellikle fiziksel bir zarar değildir; o kişiye (veya o karaktere) çok ağır ve etkili bir söz söyleyeceğinize, "taşı gediğine koyacağınıza" işarettir.'
        },
        {
          question: 'Rüyada silahı saklamak (gizlemek) ne anlama gelir?',
          answer: 'Gerçek gücünüzü veya planlarınızı düşmanlarınızdan gizlediğinize, hamle yapmak için doğru (stratejik) zamanı beklediğinize delalet eder.'
        },
        {
          question: 'Rüyada kurşun (mermi) görmek nedir?',
          answer: 'Ağızdan çıkacak sözlere, habere veya ufak tefek dedikodulara yorulur. Kurşun yemek, ağır bir laf işitmektir.'
        }
      ],
      relatedSymbols: ['kan', 'asker', 'kavga-etmek']
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
