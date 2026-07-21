import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'sut',
    title: 'Rüyada Süt Görmek',
    category: 'beden',
    shortDescription: 'Rüyada süt görmek; İslam fıtratına, temiz rızka, helal mala, sağlıklı bir yaşama ve bilgi (ilim) sahibi olmaya işaret eder.',
    relatedSymbols: ['su', 'bebek', 'anne'],
    content: {
      introduction: 'Süt, insanoğlunun yeryüzündeki ilk besini, anne ile bebek arasındaki en güçlü bağ ve yaşamın saflığını temsil eden eşsiz bir gıdadır. Rüyalarda süt görmek, tüm rüya alimleri tarafından istisnasız olarak "hayır ve bereket" olarak yorumlanmıştır. Rüyada görülen sütün miktarı, sıcaklığı veya tadı, rüya sahibinin elde edeceği helal malın, edineceği temiz ilmin veya manevi huzurun büyüklüğünü gösterir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada taze, temiz ve beyaz süt görmek; helal kazanca, refaha ve dürüstlüğe delalet eder. Rüyasında kana kana tatlı süt içtiğini gören kişi, çok bereketli bir ticarete atılır, eğer öğrenciyse veya bir şey öğrenmek istiyorsa ilim irfan sahibi olur. Bir hastanın süt içmesi çok hızlı bir şifadır. Rüyada birinden süt almak, o kişiden (veya onun temsil ettiği kurumdan) görülecek büyük bir maddi desteğe veya nasihat almaya yorulur. Ancak sütün bozulmuş, ekşimiş veya yere dökülmüş olması, haram mala, boşa giden emeğe veya rüya sahibinin fıtratından (doğruluğundan) uzaklaştığına işarettir.',
      variations: [
        {
          title: 'Rüyada Anne Sütü Görmek (veya Emmek)',
          content: 'Yaşınız ne olursa olsun, bir annenin şefkatine veya çok karşılıksız (ilahi) bir yardıma kavuşacağınıza, sıkıntılarınızın son bulacağına işarettir.'
        },
        {
          title: 'Rüyada Hayvan Sütü Sağmak',
          content: 'Kendi emeğinizle, alın terinizle (veya bir zanaat sayesinde) çok büyük ve bereketli bir kazanç elde edeceğinize, malınızın artacağına delalet eder.'
        },
        {
          title: 'Rüyada Sütün Yere Dökülmesi',
          content: 'Büyük bir nimeti israf etmeye, kıymetini bilemediğiniz için elinizden kayıp gidecek bir fırsata veya hane içinde yaşanacak ufak bir mal kaybına yorulur.'
        },
        {
          title: 'Rüyada Süt Taşırmak (Kaynatırken)',
          content: 'Ailenizde veya işinizde bolluğun, bereketin adeta "taşıp" etrafa yayılacağına, ancak bir yandan da öfke kontrolüne (taşkınlık yapmamaya) dikkat etmeniz gerektiğine işarettir.'
        },
        {
          title: 'Rüyada Ekşi (Bozuk) Süt İçmek',
          content: 'Size sunulan bir yardımın veya paranın içinde şüphe (haram) olduğuna, veya niyetini bozduğunuz (dürüstlükten ayrıldığınız) bir işe delalet eder.'
        }
      ],
      religiousMeaning: 'İslam dininde süt, Hz. Muhammed\'in (s.a.v) Miraç gecesinde kendisine sunulan şarap ve süt kadehlerinden sütü seçmesi nedeniyle "Fıtrat" (yaratılışın temizliği ve İslam) olarak kabul edilir. İbn Şirin\'e göre rüyada süt içmek, Kur\'an ahlakına ve temiz yaratılışa sahip olmaktır. Rüyada inek, koyun veya keçi gibi helal hayvanların sütünü sağmak veya içmek, Allah\'ın lütfu ve helal rızıktır. Yırtıcı veya eti yenmeyen (köpek, domuz) hayvanların sütünü içmek ise dine aykırı davranmaya ve harama bulaşmaya yorulur.',
      psychologicalMeaning: 'Psikolojide süt, "Ana Tanrıça" veya anne arketipi ile doğrudan bağlantılıdır. Rüyada süt içmek, bilinçaltınızın yoğun bir şekilde şefkat, bakım görme, "beslenme" (sadece fiziksel değil, ruhsal olarak da onaylanma) ihtiyacı içinde olduğunu gösterir. Çok yorucu bir dönemden geçen birinin rüyasında süt görmesi, ruhunun "iyileşme ve arınma" sürecine girdiğinin çok olumlu bir işaretidir.',
      faqs: [
        {
          question: 'Rüyada göğsünden süt gelmesi (bekar veya erkek olsa bile) ne demek?',
          answer: 'Çok büyük bir merhamete, bir yetime veya darda kalan birine kol kanat gereceğinize, içinizden taşan bir cömertliğe yorulur.'
        },
        {
          question: 'Rüyada süt ile yıkanmak ne anlama gelir?',
          answer: 'Geçmişteki tüm hatalardan (ve günahlardan) tövbe ederek tamamen arınmaya, ruhen ve bedenen tertemiz bir sayfa açmaya işarettir.'
        },
        {
          question: 'Rüyada siyah süt görmek mümkün mü, nedir?',
          answer: 'Fıtrata tamamen ters (karanlık) bir duruma düşmeye, helal gibi görünen bir işin aslında tamamen hileli ve kötü olduğuna delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'bit',
    title: 'Rüyada Bit Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada bit görmek; sanılanın aksine zenginliğe, bol paraya, kalabalık aileye, ancak bazen de kişinin etrafındaki asalak (menfaatçi) insanlara işaret eder.',
    relatedSymbols: ['bocek', 'karinca', 'hamam-bocegi'],
    content: {
      introduction: 'Bit, gerçek hayatta pislik, yoksulluk ve hastalıkla ilişkilendirilse de, klasik rüya tabirlerinde çok ilginç bir şekilde "para ve kalabalık" ile eşleştirilir. Bunun nedeni, bitin insan kanından beslenmesi ve çok hızlı üreyerek saç diplerini sarmasıdır. Rüyalarda saçın veya vücudun bitlenmesi, genellikle rüya sahibinin etrafını saracak kadar çoğalan bir nimeti veya tam tersine, onun sırtından geçinen "asalak" insanları sembolize eder.',
      generalMeaning: 'Klasik rüya tabircilerine göre rüyada kendi saçında bolca bit görmek, kişinin hiç beklemediği kadar çok mala, zenginliğe ve paraya kavuşacağına delalet eder. Rüyasında bitlendiğini gören bir kişinin kazancı o kadar artar ki, hesabını yapmakta zorlanır. Ancak rüyada bitlerin sürekli insanı ısırdığını ve rahatsız ettiğini görmek, rüya sahibinin zenginliğinden (veya iyi niyetinden) faydalanmak isteyen, onun kanını (enerjisini) emen sinsi, dedikoducu ve menfaatçi akrabalara veya sözde dostlara işarettir. Rüyada bit öldürmek ise, sıkıntılardan ve borçlardan kurtulmaya yorulur.',
      variations: [
        {
          title: 'Rüyada Saçından Bit Ayıklamak',
          content: 'Hayatınızdaki sahte dostları, sizi sömüren insanları tespit edip hayatınızdan bir bir çıkaracağınıza, işlerinizi düzene sokacağınıza işarettir.'
        },
        {
          title: 'Rüyada Başkasının Saçında Bit Görmek',
          content: 'O kişinin (veya genel olarak çevrenizdeki insanların) çok büyük bir zenginliğe kavuşacağına veya o kişinin sırlarına vakıf olacağınıza delalet eder.'
        },
        {
          title: 'Rüyada Elbisenin Üzerinde Bit Görmek',
          content: 'Kazanılacak çok fazla paraya, rızkın taşmasına, ancak bu zenginliğin beraberinde birçok yiyiciyi (menfaatçiyi) de kapınıza getireceğine yorulur.'
        },
        {
          title: 'Rüyada Dev Bir Bit (veya Sirke) Görmek',
          content: 'Küçük gibi görünen ama sizi sürekli içten içe kemiren, enerjinizi alan takıntılı bir düşünceye veya kurtulamadığınız bir düşmana işarettir.'
        },
        {
          title: 'Rüyada Bitin Kan Emdiğini Görmek',
          content: 'Sizi sömüren bir ortama (iş yeri veya ilişki) tahammül ettiğinize, hakkınızın yendiğine ve bu duruma artık "dur" demeniz gerektiğine işaret eder.'
        }
      ],
      religiousMeaning: 'İslami rüya tabirlerinde (Özellikle Nablusi\'ye göre) bit; mal, dünyalık nimet, çoluk çocuk ve hastalar için hastalıktır. Rüyada çokça bit görmek, rüya sahibinin emri altında çalışacak çok sayıda işçiye veya çok kalabalık bir sülaleye (berekete) delalet eder. Rüyada cami veya mescit gibi bir yerde bit görmek, dini cemaatlere veya çok ilim sahibi bir mecliste bulunmaya yorulur. Ancak rüyada bit yemek, "gıybet (dedikodu) yapmaya" işarettir.',
      psychologicalMeaning: 'Psikolojik olarak bit, "parazit" ilişkileri sembolize eder. Rüyasında başının bitlerle dolduğunu ve kaşındığını gören kişi, uyanık hayatta başkalarının sorunlarını düşünmekten kendi aklını yitirecek noktaya gelmiş (kafası kaşınıyor), zihnini kemiren endişelere teslim olmuş olabilir. Bit, sizin üzerinizden (sizin izninizle veya izniniz olmadan) geçinen toksik ilişkilerin bilinçaltındaki vücut bulmuş halidir.',
      faqs: [
        {
          question: 'Rüyada saçı tararken bit dökülmesi ne anlama gelir?',
          answer: 'Elinize çok kolay ve zahmetsiz (havadan) geçecek bir paraya veya miras paylaşımına işarettir.'
        },
        {
          question: 'Rüyada sirke (bit yumurtası) görmek nedir?',
          answer: 'Henüz başlangıç aşamasında olan ama ileride çok büyüyecek (bereketlenecek) bir işe, projeye veya tohumu atılan bir zenginliğe yorulur.'
        },
        {
          question: 'Rüyada vücudun her yerinde bit gezdiğini görmek kötü mü?',
          answer: 'Hissiyata bağlıdır. Eğer rahatsızlık vermiyorsa, devasa bir zenginliğe, dünya malına gark olmaya (boğulmaya) delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'gemi',
    title: 'Rüyada Gemi Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada gemi görmek; kurtuluşa (selamete), büyük bir makama, güvenli bir işe, tehlikelerden uzaklaşmaya ve hayat yolculuğunda yeni ufuklara açılmaya işaret eder.',
    relatedSymbols: ['deniz', 'su', 'yuzmek'],
    content: {
      introduction: 'Gemi, tıpkı Nuh\'un Gemisi tufandan nasıl kurtulduysa, insanlık tarihi boyunca sığınak, kurtuluş ve yepyeni umutlara yapılan yolculuğun en görkemli sembolü olmuştur. Rüyalarda görülen devasa bir gemi, genellikle rüya sahibinin hayatındaki büyük çalkantıları (fırtınaları) atlatmasını sağlayacak "güvenli bir yapıyı" (büyük bir şirket, devlet dairesi, güçlü bir aile) veya tamamen yön değiştirecek büyük bir hayat yolculuğunu temsil eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada büyük, sağlam ve gösterişli bir gemi görmek; ferahlığa, huzura, büyük bir makama ve borçlardan (sıkıntılardan) tamamen kurtulmaya (selamete ermeye) delalet eder. Rüyasında bir gemiye bindiğini gören kişi, çok güçlü bir insanın veya devletin koruması altına girer, iflasın eşiğinden döner veya çok büyük ve güvenli bir projede yer alır. Geminin karada yürüdüğünü görmek, kişinin imkansız denilen bir işi başaracağına işarettir. Ancak geminin su alması, batması veya fırtınada savrulması, kişinin güvendiği dağlara kar yağacağına, sığındığı kapının (işin veya ailenin) büyük bir krizden geçtiğine yorulur.',
      variations: [
        {
          title: 'Rüyada Geminin Batması',
          content: 'İçinde bulunduğunuz büyük bir oluşumun (şirket veya evlilik) tehlikede olduğuna, liderin veya sizin yapacağınız bir hata yüzünden her şeyin "suya düşeceğine" işarettir.'
        },
        {
          title: 'Rüyada Gemiden İnmek (Karaya Çıkmak)',
          content: 'Çok zor ve stresli bir dönemin (yolculuğun) ardından nihayet sağlam bir zemine basmaya, hedefe ulaşmaya ve derin bir nefes almaya delalet eder.'
        },
        {
          title: 'Rüyada Gemi Kaptanı Olmak (Gemi Kullanmak)',
          content: 'Kendi hayatınızın kontrolünü (dümenini) elinize alacağınıza, büyük kitleleri yönetecek bir mevkiye geleceğinize ve liderlik edeceğinize yorulur.'
        },
        {
          title: 'Rüyada Gemiyi Kaçırmak',
          content: 'Ayağınıza kadar gelen çok büyük bir fırsatı (tarihi bir anı) değerlendiremediğinize, elinizden kayıp giden bir şansa üzüleceğinize işarettir.'
        },
        {
          title: 'Rüyada Uçan Gemi Görmek',
          content: 'Gerçekleşmesi mucizelere bağlı olan devasa bir hayalin (ütopik bir hedefin) çok sürpriz bir şekilde gerçek olacağına ve yükselişe delalet eder.'
        }
      ],
      religiousMeaning: 'İslam dininde gemi "Nuh\'un Gemisi" (Sefine-i Nuh) ile özdeşleşir. Bu nedenle İbn Şirin ve diğer alimlere göre rüyada gemiye binmek doğrudan "kurtuluş, selamet ve tövbe" anlamına gelir. Günahkar bir kimsenin gemiye bindiğini görmesi günahlarından tövbe edip hak yola (kurtuluş gemisine) gireceğine işarettir. Fakir biri gemi görse zengin olur, hasta biri görse (eğer gemi sağlam ilerliyorsa) şifa bulup ayağa kalkar.',
      psychologicalMeaning: 'Psikolojide deniz (ve okyanus) genellikle devasa, karanlık ve kontrol edilemez olan "bilinçaltını" veya "hayatın kaosunu" simgeler. Gemi ise, bu kaosun (denizin) üzerinde bizim inşa ettiğimiz Ego\'yu, kişiliğimizi ve hayatta kalma mekanizmalarımızı temsil eder. Sağlam bir gemi, psikolojik dayanıklılığınızın yüksek olduğunu; su alan bir gemi ise bilinçaltınızdaki korkuların (suyun) hayatınızı basmak üzere olduğunu, savunma mekanizmalarınızın çöktüğünü gösterir.',
      faqs: [
        {
          question: 'Rüyada karaya oturmuş (çölde) gemi görmek ne anlama gelir?',
          answer: 'Bir işin tıkandığına, sermayenin veya gücün olduğu halde işi yürütecek doğru ortamın (suyun) bulunamadığına, çaresizliğe işarettir.'
        },
        {
          question: 'Rüyada geminin uç kısmında durmak (Titanik gibi) nedir?',
          answer: 'Özgürlük ihtiyacına, kendinizi dünyaya karşı yenilmez (çok cesur) hissettiğinize ve geleceğe umutla (ve rüzgara karşı) baktığınıza yorulur.'
        },
        {
          question: 'Rüyada savaş gemisi görmek kötü müdür?',
          answer: 'Kötü değildir. Devlet gücüne, çok büyük ve dişli bir düşmana karşı ailenizi (veya kendinizi) korumak için zırhlı ve güçlü bir konuma geçeceğinize delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'bisiklet',
    title: 'Rüyada Bisiklet Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada bisiklet görmek; kişinin kendi çabasıyla ilerlemesine, hayatın denge üzerine kurulu olduğuna, kısa süreli yorgunluklara ve hedefe giden yolda bireysel mücadeleye işaret eder.',
    relatedSymbols: ['araba-kullanmak', 'yolculuk', 'spor'],
    content: {
      introduction: 'Bisiklet, insanın kendi kas gücünü (emeğini) kullanarak hareket ettirdiği, ancak denge sağlanamazsa anında devrilen muazzam bir araçtır. Rüyalarda bisiklet görmek veya kullanmak, rüya sahibinin hayatının dümeninde tek başına olduğunu, başkalarından destek (motor gücü) almadan tamamen kendi alın teriyle ilerlediğini sembolize eder. Bisiklet rüyaları doğrudan "denge, emek ve istikrar" ile ilgilidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada düzgün bir yolda keyifle bisiklet sürmek, kişinin kendi emeği ve bileğinin hakkıyla hedefine çok dengeli, yavaş ama sağlam adımlarla ilerlediğine delalet eder. Rüyada bisiklet görmek genellikle çok büyük (araba gibi) değil ama tatminkar ve bereketli küçük kazançlara yorulur. Ancak yokuş yukarı bisiklet sürmek, hedefe ulaşmak için kişinin çok fazla ter döktüğüne, çevresinden hiç yardım almadığı için çok yorulduğuna işarettir. Rüyada bisikletin tekerinin patlaması veya zincirinin atması, işlerin geçici olarak aksamasına (küçük pürüzlere) ve kişinin hevesinin kırılmasına yorulur.',
      variations: [
        {
          title: 'Rüyada Yokuş Aşağı Bisiklet Sürmek',
          content: 'Zorlukların geride kaldığına, bir işin "kendi ivmesiyle" artık çok rahat ilerlediğine, ancak hız kontrol edilemezse büyük bir kaza (hata) yapılabileceğine işarettir.'
        },
        {
          title: 'Rüyada Bisikletten Düşmek',
          content: 'Hayatınızdaki dengenin geçici olarak bozulduğuna, aldığınız bireysel bir kararda küçük bir hata yaparak tökezleyeceğinize delalet eder.'
        },
        {
          title: 'Rüyada İki Kişilik (Tandem) Bisiklet Sürmek',
          content: 'Evlilikte veya iş ortaklığında her iki tarafın da (aynı hedefe) eşit emek harcadığını, uyumlu ve dengeli bir ilişki yürütüldüğünü gösterir.'
        },
        {
          title: 'Rüyada Bisiklet Çalınması',
          content: 'Kendi emeğinizle, çabanızla kurduğunuz bir düzenin başkaları tarafından kıskanıldığına veya haksız yere elinizden (fırsatınızın) alınacağına yorulur.'
        },
        {
          title: 'Rüyada Bisiklet Satın Almak',
          content: 'Yeni bir karar almaya, bağımsızlığınızı ilan etmeye ve "artık kendi ayaklarımın üzerinde durmalıyım" diyerek yeni bir yola girmeye işarettir.'
        }
      ],
      religiousMeaning: 'Bisiklet modern bir icat olduğu için klasik İslami tabirlerde (Nablusi gibi) doğrudan yer almaz; ancak "binek" (at, deve) kategorisinde değerlendirilir. Rüyada bir bineğe (bisiklete) binip hedefine ulaştığını gören kişinin ameli (çabası) karşılıksız kalmaz. Allah, "İnsan için ancak çalıştığının karşılığı vardır" buyurur. Bisiklet rüyası da tam olarak başkasının sırtından geçinmeden, tamamen helal ve şahsi emekle kazanılan (alın teri dökülen) rızka delalet eder.',
      psychologicalMeaning: 'Psikolojide bisiklet, "hayatın dengesini" (iş-özel hayat dengesi) ve özerkliği temsil eder. Einstein\'ın "Hayat bisiklete binmek gibidir, dengede kalmak için hareket etmeye devam etmelisin" sözü bu rüyanın tam karşılığıdır. Rüyasında sürekli bisiklet süren ama yorulan kişi, uyanık hayatta her yükü kendi omuzlarına almaktan (kimseye güvenmemekten) tükenmiş olabilir. Bisikletten düşmek ise kontrolü kaybetme korkusudur.',
      faqs: [
        {
          question: 'Rüyada tekerleği olmayan (veya bozuk) bisiklete binmeye çalışmak nedir?',
          answer: 'Elinizdeki imkanların (sermayenin veya bilginin) hedefiniz için yetersiz olduğuna, boşa kürek (pedal) çevirdiğinize işarettir.'
        },
        {
          question: 'Rüyada yağmurda bisiklet sürmek ne anlama gelir?',
          answer: 'Bir yandan çok duygusal (hüzünlü) bir dönemden geçerken, diğer yandan hayata tutunmak için (pes etmeden) çalışmaya devam ettiğinize yorulur.'
        },
        {
          question: 'Rüyada çocuk bisikleti (üç tekerlekli) sürmek ne demek?',
          answer: 'Çocuksu (veya biraz toy) davranışlar sergilediğinize, bazı konularda sorumluluk almaktan kaçtığınıza veya birinden hala destek tekerleği beklediğinize delalet eder.'
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
