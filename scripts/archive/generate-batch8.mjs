import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'kirmizi-renk',
    title: 'Rüyada Kırmızı Renk Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada kırmızı renk görmek; güçlü duygulara, ihtirasa, büyük bir aşka, bazen de tehlikeye, ani öfkeye ve dikkat çekici olaylara işaret eder.',
    content: {
      introduction: 'Renkler, rüyaların en güçlü psikolojik sembollerinden biridir ve kırmızı, renk skalasındaki en yoğun, en dikkat çekici ve en provokatif renktir. Kırmızı; kanın, ateşin, aşkın ve savaşın rengidir. Rüyalarda kırmızı renk görmek (kırmızı bir elbise, araba, elma veya sadece kıpkırmızı bir atmosfer), rüya sahibinin hayatındaki enerjinin ve tutkunun en üst seviyede olduğunu gösterir. Ancak bu enerji, nereye yönlendirildiğine bağlı olarak yapıcı (aşk, canlılık) veya yıkıcı (öfke, tehlike) olabilir. Rüyada kırmızının tonu (parlak, canlı veya kan kırmızısı) ve hangi nesnede görüldüğü tabiri derinden etkiler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada parlak ve temiz bir kırmızı renk görmek, sevince, neşeye, büyük bir aşka ve ihtirasa delalet eder. Rüyasında kırmızı bir elbise giydiğini gören kişi (özellikle kadınsa), toplum içinde çok dikkat çekeceği, şöhret veya itibar kazanacağı bir konuma gelir; bekar ise çok tutkulu bir aşk yaşayarak evlenir. Erkeklerin kırmızı giymesi ise geleneksel tabirlerde genellikle kibre, aşırı hırsa, gösterişe veya (kırmızı kanı andırdığı için) bazen husumete yorulur. Kırmızı güller, kırmızı elma veya kırmızı meyveler görmek taze başlangıçlara, sevgiye ve berekete işarettir. Ancak rahatsız edici, karanlık veya kanı andıran bir kırmızı görmek; tehlikeye, yaklaşan bir tartışmaya, öfke patlamalarına ve kişinin çok dikkatli olması gerektiğine dair bir "kırmızı alarm" niteliği taşır.',
      variations: [
        {
          title: 'Rüyada Kırmızı Araba Görmek',
          content: 'Kişinin hedeflerine ulaşırken çok hırslı, rekabetçi ve hızlı davranacağına işarettir. Statü elde etme, gösteriş yapma arzusunu ve bazen de riskli (hız kaynaklı) girişimleri temsil eder.'
        },
        {
          title: 'Rüyada Kırmızı Ayakkabı Giymek',
          content: 'Duygusal hayatta veya iş hayatında atılacak çok cesur bir adıma, dikkat çekici bir değişime (farklılaşmaya) ve özellikle kadınlar için çekiciliğin, şansın artmasına yorulur.'
        },
        {
          title: 'Rüyada Kırmızı Gül Almak',
          content: 'Saf, tutkulu ve ateşli bir sevgiye işarettir. Evliler için eşler arasındaki muhabbetin tazelenmesine, bekarlar için ise ayakları yerden kesecek bir ilanıaşka delalet eder.'
        },
        {
          title: 'Rüyada Kırmızı Göz Görmek',
          content: 'Genellikle ağlamaya, uykusuzluğa veya büyük bir öfkeye işarettir. Rüyada birinin gözlerinin kırmızı olduğunu görmek, o kişinin size karşı çok kinli veya sinirli olduğunu gösterir.'
        },
        {
          title: 'Rüyada Gökyüzünün Kızarması (Kıpkırmızı Olması)',
          content: 'O bölgede yaşanacak olağanüstü bir duruma, halk arasında çıkacak büyük bir karışıklığa, isyana veya (eski tabirlere göre) kan dökülmesine işaret eden ciddi bir uyarıdır.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde renklerin anlamı kültürden kültüre değişebilmektedir. İbn Şirin\'e göre rüyada kırmızı giysi görmek, kadınlar için sevinç, süs ve hayırdır. Erkekler için ise kırmızı elbise giymek (savaş dışında) pek hayırlı sayılmaz; dünya hırsına, şatafata, dinden uzaklaşarak eğlenceye (lehviyat) dalmaya yorulur. Rüyada yüzünün kızardığını görmek, utanılacak bir iş yapmaya veya birine yalan söylemiş olmanın verdiği vicdan azabına delalet eder.',
      psychologicalMeaning: 'Psikolojide kırmızı, uyarılmanın, agresyonun ve cinselliğin rengidir. Kırmızı, otonom sinir sistemini uyararak kalp atışını hızlandırır. Rüyasında yoğun kırmızı gören biri, uyanık hayatında büyük bir öfke (kırmızı görme deyimi), stres veya çok yoğun bir cinsel istek/aşk yaşıyor demektir. Kırmızı bir uyarıdır (trafik lambası gibi); bilinçaltı kişiye "Dur ve dikkat et, duyguların kontrolden çıkıyor" mesajı veriyor olabilir.',
      faqs: [
        {
          question: 'Rüyada kırmızı dudak boyası (ruj) sürmek nedir?',
          answer: 'Sözlerinizle dikkat çekmek istediğinize, yalan veya abartılı konuşmalara meyledebileceğinize, dış görünüşe aşırı önem verdiğinize işarettir.'
        },
        {
          question: 'Rüyada kırmızı kan görmek korkutucu mudur?',
          answer: 'Eğer kan parlak kırmızıysa, enerjinin ve yaşam gücünün tazelenmesine (gençleşmeye); ancak pıhtılaşmış veya koyu kırmızıyken korkutucuysa mal kaybına yorulur.'
        },
        {
          question: 'Rüyada evini kırmızıya boyamak ne anlama gelir?',
          answer: 'Ev içindeki tartışmaların (ateşin) artacağına veya tam tersine eve çok neşeli, coşkulu ve kutlama havası hakim olacak bir olayın yaşanacağına işaret eder.'
        }
      ],
      relatedSymbols: ['ates', 'kan', 'dugun']
    }
  },
  {
    slug: 'sinav',
    title: 'Rüyada Sınava Girmek',
    category: 'nesneler',
    shortDescription: 'Rüyada sınava girmek; gerçek hayattaki kaygılara, kişinin yetersizlik hissine, sınanmaya, büyük bir karar arifesinde olmaya ve sabrın test edilmesine işaret eder.',
    content: {
      introduction: 'Eğitim hayatı bitmiş olsa bile, insanların rüyalarında en çok gördükleri senaryolardan biri sınava girmek, sınava geç kalmak veya soruları yapamamaktır. Rüyada sınav, hayat okulunun ve günlük yaşamdaki performans kaygısının direkt bir yansımasıdır. İnsan sürekli olarak iş hayatında, ilişkilerinde veya ahlaki konularda test edildiğini hisseder. Rüyada sınava girmek, genellikle uyanık hayatta karşılaşılan bir problemin üstesinden gelme çabasını, "başarısızlık" korkusunu ve kendini kanıtlama ihtiyacını sembolize eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada sınava girmek, kişinin gerçek hayatta önemli bir dönemeçte olduğuna, bir terfi, evlilik kararı veya ticari bir atılım öncesinde kendi yeterliliğini sorguladığına işaret eder. Sınavda başarılı olduğunu, soruları kolayca çözdüğünü görmek; işlerin yolunda gideceğine, hedeflere ulaşılacağına ve girilecek her türlü mücadeleden (hastalık, mahkeme vb.) zaferle çıkılacağına delalet eder. Aksine, sınavda başarısız olmak, soruları yapamamak veya kağıdın boş kalması; kişinin uyanık hayatta hazırlıksız yakalandığı bir olaya, özgüven eksikliğine, başarısızlık korkusunun gerçeğe dönüşme endişesine yorulur. Sınava geç kalmak veya sınav yerini bulamamak ise kaçırılan fırsatların ve ertelenen sorumlulukların yarattığı içsel stresin açık bir göstergesidir.',
      variations: [
        {
          title: 'Rüyada Sınava Geç Kalmak',
          content: 'Zamanı iyi yönetemediğinize, çok önemli bir fırsatı elden kaçırma korkusuna veya "hayata geç kalmışlık" (yaşıtlarından geri kalma) hissine delalet eder.'
        },
        {
          title: 'Rüyada Sınavda Kopya Çekmek',
          content: 'Hedeflere ulaşmak için dürüst olmayan yollara sapma eğilimine, haksız kazanca veya bir problemi çözerken başkalarından gizlice akıl almaya (kendi aklına güvenmemeye) yorulur.'
        },
        {
          title: 'Rüyada Sınav Kağıdını Boş Vermek',
          content: 'Büyük bir pes edişin, çaresizlik hissinin ve mevcut bir sorunu çözmekten tamamen vazgeçtiğinizin (havlu attığınızın) bilinçaltındaki karşılığıdır.'
        },
        {
          title: 'Rüyada Sınavı Kaçırmak (Unutmak)',
          content: 'Hayatınızdaki çok önemli bir sorumluluğu göz ardı ettiğinize, detayları kaçırdığınıza ve bu yüzden ileride büyük bir pişmanlık duyacağınıza işaret eden uyarıcı bir rüyadır.'
        },
        {
          title: 'Rüyada Sınav Sonucunu (Notu) Görmek',
          content: 'Eğer not yüksekse sevindirici bir haber veya terfi alınacağına; not düşükse gerçek hayatta yapılacak bir hatanın bedelinin ağır olacağına ve hayal kırıklığına yorulur.'
        }
      ],
      religiousMeaning: 'İslami rüya tabirlerinde sınav, "İmtihan dünyası" kavramıyla doğrudan ilişkilidir. Rüyada sınava tabi tutulduğunu görmek, Allah tarafından sabrınızın, imanınızın ve dürüstlüğünüzün test edildiği bir olay (bir zorluk veya hastalık) yaşayacağınıza delalet eder. Rüyasında sınavı başarıyla geçtiğini gören kişi, nefsini yener, günahtan korunur ve imtihanı başarıyla atlatır. Sınavı verememek ise manevi zayıflığa, ibadetlerdeki eksikliğe ve tövbe etme ihtiyacına dair ilahi bir ihtardır.',
      psychologicalMeaning: 'Sınav rüyaları, psikolojide tipik bir "Performans Anksiyetesi" (Kaygısı) örneğidir. İş yerinde yapılacak bir sunum, alınacak yeni bir sorumluluk veya sadece toplumun "başarı" beklentileri, kişiyi çocukluğundaki sınav travmalarına geri götürür. Sürekli sınav rüyası gören bireyler, hayatlarında mükemmeliyetçi, hata yapmaktan korkan ve sürekli yargılandığını hisseden kişilerdir. Kalem yazmaması veya sürenin yetmemesi, kontrol kaybı hissini vurgular.',
      faqs: [
        {
          question: 'Mezun olalı yıllar oldu, neden sürekli sınav rüyası görüyorum?',
          answer: 'Çünkü beyniniz, şu an hayatınızda yaşadığınız stres veya "yetersizlik" hissini, en iyi bildiği ve en çok strese girdiği geçmiş anıya (sınava) benzeterek rüyaya dönüştürür.'
        },
        {
          question: 'Rüyada üniversite sınavına tekrar girmek ne demek?',
          answer: 'Hayatınızda radikal bir değişiklik yapma, meslek değiştirme veya geçmişte verdiğiniz bir kararı yeniden sorgulama arzusuna işaret eder.'
        },
        {
          question: 'Rüyada sınavgözetmeni olmak nedir?',
          answer: 'Çevrenizdeki insanları çok fazla yargıladığınıza, onların hatalarını aradığınıza veya yönetici konumuna (otoriteye) yükseldiğinize işarettir.'
        }
      ],
      relatedSymbols: ['okul', 'kalem', 'kitap']
    }
  },
  {
    slug: 'saat',
    title: 'Rüyada Saat Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada saat görmek; zamanın hızla akıp gitmesine, planlara, verilen sözlere, ömre, sabra ve bazen de kaçırılan fırsatlara işaret eder.',
    content: {
      introduction: 'Saat, zamanın, düzenin, hayatın ritminin ve yaşlanmanın evrensel sembolüdür. Rüyalarda saat görmek, kişinin uyanık hayattaki "zaman algısı" ile doğrudan bağlantılıdır. Saniyenin tik-takları, geç kalanlar için bir stres kaynağı, bekleyenler için ise bir sabır sınavıdır. Rüyada kol saati, duvar saati veya bozuk bir saat görmek; kişinin ömrünü nasıl harcadığına, hayatındaki önceliklere, yaklaştığı bir teslim tarihine (deadline) veya hayatın geçiciliğine (mortalite) dikkat çeken derin bir uyarıcıdır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada güzel ve tıkır tıkır çalışan bir saat görmek, kişinin hayatında her şeyin planlı, düzenli ve yolunda gittiğine; işlerin tam zamanında, aksamadan ilerleyeceğine delalet eder. Rüyada kol saati takmak, kişinin disiplinli olduğuna, sorumluluklarını bildiğine ve sözünde duran karakterli biri olduğuna işarettir. Duvar saati genellikle hane içindeki düzene veya aile büyüğünün (babanın) otoritesine yorulur. Rüyada saatin kırılması, durması veya bozulması ise çok olumsuz tabir edilir; işlerin sarpa saracağına, planların erteleneceğine, işsizliğe, bazen de hastalar için ecelin (zamanın) yaklaştığına işaret eder. Saatin çok hızlı ilerlediğini görmek ömrün boşa harcandığına, saatin çok yavaş ilerlemesi ise çekilen sıkıntıların (borç veya hasretin) uzayacağına delalet eder.',
      variations: [
        {
          title: 'Rüyada Altın Saat Görmek',
          content: 'Zamanın çok değerli olduğuna (vakit nakittir) işaret eder. Kişinin altın değerinde bir fırsat yakalayacağına ve zamanını çok kârlı işlerde kullanacağına yorulur.'
        },
        {
          title: 'Rüyada Saat Hediye Almak',
          content: 'Birinin size saat hediye etmesi, o kişinin size yeni bir fırsat sunacağına, aranızdaki ilişkinin uzun ömürlü olacağına veya size çok önemli bir öğüt (zamanın kıymeti hakkında) vereceğine işarettir.'
        },
        {
          title: 'Rüyada Saati Geriye Almak',
          content: 'Geçmişe duyulan özleme, yapılan büyük bir hatayı telafi etme isteğine veya gençliğe dönme (yaşlanma korkusu) arzusuna delalet eden psikolojik bir rüyadır.'
        },
        {
          title: 'Rüyada Alarm Çalması',
          content: 'Büyük bir uyanışa, "Artık harekete geçme vakti geldi" mesajına ve ihmal edilen çok önemli bir meselenin artık son aşamasına geldiğine (acil koda) işaret eder.'
        },
        {
          title: 'Rüyada Saatin Kaç Olduğunu Görmek',
          content: 'Görülen rakamlar (örneğin 12:00) bir dönüm noktasına işaret edebilir. Belirli bir saati görmek, o saatte gerçekleşecek bir olaya veya hayatınızın hangi evresinde olduğunuza (akşam saati ise yaşlılık vb.) yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde saat, "Ecel", "Kıyamet" (Kıyamet saati) ve "Ömür sermayesi" olarak tabir edilir. Saatin durduğunu veya kırıldığını görmek, kişinin dünyevi veya uhrevi amelinin bittiğine (vefatına) işaret edebilir. Bir kimse rüyada saatinin çok güzel çalıştığını görse, amellerinin düzenli, namazlarının vaktinde olduğuna yorulur. Saatinin camının kırıldığını veya akrep-yelkovanının düştüğünü görmek, kişinin vaktini malayani (boş) işlerle harcayarak ömür nimetine nankörlük ettiğine dair bir ihtardır.',
      psychologicalMeaning: 'Psikolojide saat rüyaları, yaklaşan bir teslim tarihi, yaşlanma korkusu veya "biyolojik saatin" tik-taklaması (çocuk sahibi olma baskısı) ile ilgilidir. Kişi sürekli saatine bakıyorsa, gerçek hayatta aşırı kontrollü, stresli ve anı yaşayamayan bir yapıya sahiptir. Saatin eridiğini (Dali\'nin tablosundaki gibi) görmek, zaman algısının bozulduğunu, depresyonu veya hayattaki hedeflerin anlamsızlaştığını simgeler.',
      faqs: [
        {
          question: 'Rüyada antika (eski) cep saati görmek nedir?',
          answer: 'Geçmişten gelen bir mirasa, geleneklere bağlılığa veya babadan/dededen kalacak çok değerli bir öğüde işaret eder.'
        },
        {
          question: 'Rüyada saati kaybetmek ne anlama gelir?',
          answer: 'Hayatınızın kontrolünü veya yönünüzü kaybettiğinize, önemli bir fırsatı "zamanlamayı tutturamadığınız için" kaçıracağınıza yorulur.'
        },
        {
          question: 'Rüyada dijital saat görmek fark eder mi?',
          answer: 'Dijital saat genellikle modern hayata, aceleciliğe, netliğe (rakamlar kesindir) ve çok daha hızlı gelişecek, teknolojik veya rasyonel konulara işaret eder.'
        }
      ],
      relatedSymbols: ['altin', 'ayna', 'yuzuk']
    }
  },
  {
    slug: 'ayi',
    title: 'Rüyada Ayı Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada ayı görmek; güçlü, cüsseli ancak kaba ve ahmak bir düşmana, kadın için baskıcı bir erkeğe, tehlikeli rakiplere ve gizli güçlere işaret eder.',
    content: {
      introduction: 'Ayı, vahşi doğada devasa cüssesi, inanılmaz gücü ve öngörülemez yapısıyla korkulan bir hayvandır. Rüyalarda ayı görmek, genellikle rüya sahibinin etrafındaki kaba saba, laftan anlamaz, cahil ama fiziksel veya maddi olarak güçlü insanları temsil eder. Aynı zamanda ayının kış uykusuna yatan bir canlı olması, bilinçaltındaki bastırılmış içgüdüleri, gizli düşmanlıkları veya "uyuyan bir dev" misali henüz ortaya çıkmamış tehlikeleri sembolize eder. Rüyada ayının size saldırması veya sizin ayıyı yenmeniz tabiri doğrudan etkiler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada ayı görmek, kaba kuvvet kullanan, ahmak, kötü ahlaklı ve hilekar bir düşmana delalet eder. Rüyasında bir ayının kendisine doğru geldiğini gören kişi, böyle kaba bir insanla muhatap olmak veya tartışmak zorunda kalır. Rüyada ayıya binmek, onu terbiye etmek veya onu yenmek, çok büyük ve tehlikeli bir düşmana (veya zorlu bir işe) üstünlük sağlamaya, devlet kademesinde söz geçirmeye ve büyük bir zafer kazanmaya yorulur. Ayı eti yemek veya ayının postunu (derisini) yüzmek, o kaba düşmanın malını veya makamını ele geçirmeye işarettir. Rüyada ayının saldırması ve sizi yaralaması, rakipleriniz tarafından zarara uğratılacağınıza ve itibar kaybedeceğinize delalet eder.',
      variations: [
        {
          title: 'Rüyada Kutup Ayısı (Beyaz Ayı) Görmek',
          content: 'Beyaz ayı, genellikle daha saygın, uzakta olan veya size doğrudan zararı dokunmayan ama gücünden çekinilen (yabancı) bir yöneticiye veya rakibe işaret eder.'
        },
        {
          title: 'Rüyada Boz Ayı Görmek',
          content: 'Doğrudan hasetçi, inatçı ve kaba komşulara, akrabalara veya iş ortamındaki çekilmez, bencil insanlara yorulur.'
        },
        {
          title: 'Rüyada Yavru Ayı Görmek',
          content: 'Zararsız gibi görünen ancak ileride büyüyüp başınıza dert açabilecek küçük sorunlara, veya şımarık, laf dinlemez bir çocuğa/gence işaret eder.'
        },
        {
          title: 'Rüyada Ayıdan Kaçmak',
          content: 'Uğraşamayacağınızı bildiğiniz kaba insanlardan ve beladan uzak durmaya çalışmaya, tehlikeli bir yüzleşmeden sağ salim kurtulmaya delalet eder.'
        },
        {
          title: 'Rüyada Ayının Oynaması (Sirk Ayısı)',
          content: 'Ahmak ve güçlü bir düşmanınızın maskara duruma düşeceğine, kendi kazdığı kuyuya düşerek çevresine rezil olacağına yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Nablusi\'ye göre) ayı; münafık (ikiyüzlü), ahmak, hırsız ve alçak yaratılışlı bir insanı temsil eder. Bir ayı ile güreştiğini gören kimse, böyle ahlaksız bir kişiyle mücadeleye girer. Ayının kendisini yere çaldığını (yendiğini) görmek, düşmanın galebesine; kendisinin ayıyı yere çalması düşmana karşı zafere yorulur. Bazen ayı, yol kesici eşkıyaya veya kötü ahlaklı, hantal (tembel) bir kadına/erkeğe de işaret edebilir.',
      psychologicalMeaning: 'Jung psikolojisinde ayı, hem yıkıcı (vahşi) anneyi (aşırı korumacı, boğucu anne figürü) hem de bilinçaltının derinliklerindeki ilkel, vahşi içgüdüleri simgeler. Rüyada ayı görmek, kişinin içindeki "uyuyan canavarı", öfkeyi veya vahşi arzuları (kış uykusundan uyanan) temsil edebilir. Kişinin ayıdan kaçması, kendi içindeki kontrol edemediği vahşi doğadan veya kaba dürtülerinden korktuğunu gösterir.',
      faqs: [
        {
          question: 'Rüyada eve ayı girmesi ne anlama gelir?',
          answer: 'Hane içine giren, kaba saba hareketleriyle ailenin huzurunu bozan zorba bir misafire veya akrabaya (örneğin kaba bir damat veya kayınpeder) işarettir.'
        },
        {
          question: 'Rüyada ayının konuştuğunu görmek nedir?',
          answer: 'Hiç beklemediğiniz, cahil sandığınız bir insandan çok mantıklı veya sarsıcı bir söz işiteceğinize delalet eder.'
        },
        {
          question: 'Rüyada ayı öldürmek her zaman iyi midir?',
          answer: 'Evet, kaba kuvvet ve cehaletle sizi alt etmeye çalışan büyük bir beladan veya düşmandan tamamen kurtulmaya yorulur.'
        }
      ],
      relatedSymbols: ['aslan', 'kopek', 'kedi']
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
