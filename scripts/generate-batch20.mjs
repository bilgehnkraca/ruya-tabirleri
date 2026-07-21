import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'orumcek',
    title: 'Rüyada Örümcek Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada örümcek görmek; hilekar bir kadına (veya düşmana), sabırla örülen bir işe, ibadete yönelmeye veya karmaşık ilişki ağlarına işaret eder.',
    relatedSymbols: ['bocek', 'karinca', 'hamam-bocegi'],
    content: {
      introduction: 'Örümcek, kendi ağını büyük bir sabır ve matematikle ören, avını o ağa düşürüp sessizce bekleyen eşsiz bir canlıdır. Aynı zamanda dinler tarihinde peygamberleri mağarada saklayıp koruyan mucizevi bir hayvandır. Rüyalarda örümcek görmek, bağlama göre çok keskin iki zıt anlama gelir: Ya etrafınızda sizin için bir "tuzak ağı" ören sinsi bir düşman vardır, ya da siz büyük bir sabır ve ibadetle (dünyadan el etek çekerek) kendi manevi ağınızı örüyorsunuzdur.',
      generalMeaning: 'Rüya tabircilerine göre rüyada evde örümcek görmek, rüya sahibinin hayatında zayıf, hilekar ve fesat çıkaran bir insanın (klasik tabirlerde genellikle dedikoducu bir kadının) varlığına delalet eder. Rüyada üzerinize örümcek düştüğünü görmek, hiç beklemediğiniz bir tuzağa çekilmek üzere olduğunuza, etrafınızda dönen dolapları fark edemediğinize işarettir. Rüyada örümcek ağı görmek ise genellikle zayıflığa, eskiyen ve terk edilen işlere (çünkü ağ genelde viranelerde olur) veya geçim sıkıntısına yorulur. Ancak rüyada devasa bir örümcek görüp ondan korkmamak, iş hayatında sabırla, ilmek ilmek örülen ve sonunda çok başarılı olacak büyük bir projeye (stratejiye) işarettir.',
      variations: [
        {
          title: 'Rüyada Örümcek Ağı Temizlemek',
          content: 'Hayatınızdaki toksik insanları, eski ve çürümüş alışkanlıkları tamamen söküp atacağınıza, yuvanızı ve zihninizi arındıracağınıza delalet eder.'
        },
        {
          title: 'Rüyada Örümcek Tarafından Isırılmak',
          content: 'Sinsi bir düşmanın, sizin çok güvendiğiniz bir anda (arkanızdan) yapacağı küçük ama son derece zehirli (can yakan) bir hamleye yorulur.'
        },
        {
          title: 'Rüyada Zehirli (Kara) Örümcek Görmek',
          content: 'Çok kıskanç, tehlikeli ve size zarar vermek için gün sayan, karanlık düşüncelere sahip güçlü bir rakibe (veya akrabaya) işarettir.'
        },
        {
          title: 'Rüyada Tavanda Örümcek Görmek',
          content: 'Evinizin (veya işinizin) üzerinde kara bulutlar dolaştığına, üst makamlardan (veya aile büyüklerinden) gelecek bir baskıya yorulur.'
        },
        {
          title: 'Rüyada Örümcek Öldürmek',
          content: 'Büyük bir ferahlıktır! Sizin için kazılan kuyuyu fark edip o tuzağı bozacığınıza, sinsi bir düşmanı kendi silahıyla vuracağınıza delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) örümcek, zayıflığın ve ibadetin sembolüdür. Kur\'an-ı Kerim\'de Ankebut Suresi\'nde örümcek ağının "en zayıf ev" olduğu belirtilir. Bu nedenle rüyada örümcek ağı görmek zayıf bir inanca veya fakirliğe yorulur. Ancak Sevr Mağarası\'nda Hz. Muhammed\'i (s.a.v) düşmanlardan koruyan örümcek kıssasına dayanılarak, rüyada bir örümceğin sizi koruduğunu veya ağ ördüğünü görmek, Allah\'ın izniyle büyük bir tehlikeden (çok zayıf görünen bir sebeple) mucizevi şekilde kurtulmaya delalet eder. Rüyada örümcek görmek bazen de, dünyadan el etek çekip sürekli ibadet eden, zahit (abid) bir kişiyi temsil eder.',
      psychologicalMeaning: 'Psikolojide örümcek ağı, annenin "yutucu" ve "kontrol edici" sevgisini (Jung\'a göre) veya karmaşık, içinden çıkılmaz sosyal ilişkileri temsil eder. Rüyasında bir örümcek ağına takıldığını gören kişi, uyanık hayatta birinin onu manipüle ettiğini, hareket alanını kısıtladığını ve kendini bir "kapanın" içinde sıkışmış hissettiğini deneyimliyordur. Ayrıca korkulan (fobik) bir hayvan olarak örümcek, bastırılmış cinselliğin veya bilinçaltındaki "karanlık, tüylü, kontrol edilemez" dürtülerin yansıması olabilir.',
      faqs: [
        {
          question: 'Rüyada yüzüne örümcek ağı yapışması ne anlama gelir?',
          answer: 'Bir iftiraya uğramaya, görmenizi (gerçekleri fark etmenizi) engelleyen bir yalana veya geçici bir itibarsızlığa işarettir.'
        },
        {
          question: 'Rüyada ağ ören örümcek izlemek nedir?',
          answer: 'Çok sabırlı olmanız gereken bir döneme girdiğinize, tıpkı o örümcek gibi işinizi ilmek ilmek işlerseniz büyük başarı yakalayacağınıza yorulur.'
        },
        {
          question: 'Rüyada ağzından örümcek çıkması ne demek?',
          answer: 'Ağzınızdan çıkan, başkaları için tuzak (veya yalan) niteliğinde olan sözlere; veya içinizi kemiren çok gizli bir sırrı nihayet itiraf etmeye delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'elma',
    title: 'Rüyada Elma Görmek',
    category: 'doga',
    shortDescription: 'Rüyada elma görmek; barışa, güzelliğe, kişinin mesleğindeki kazancına, evlada, neşeye ve taze bir aşka işaret eder.',
    relatedSymbols: ['agac', 'yemek-yemek', 'cilek'],
    content: {
      introduction: 'Elma, insanlık tarihinin başlangıcından (Hz. Adem ve Havva kıssası) bu yana cazibenin, bilginin, bereketin ve yeryüzündeki yaşamın en ikonik sembolüdür. Rüyalarda görülen elma, genellikle kişinin arzularını, hayattaki amacını (mesleğini) ve neşesini temsil eder. Rüyada görülen elmanın rengi, tadı ve tazeliği, kişinin elde edeceği başarının ve mutluluğun kalitesini doğrudan belirler.',
      generalMeaning: 'Rüya tabircilerine göre rüyada elma görmek, kişinin mesleği (sanatı) ve rızkıdır. Bir tüccar elma görürse ticareti, bir çiftçi görürse hasadı, bir memur görürse makamı bereketlenir. Rüyasında tatlı, kırmızı ve güzel kokulu bir elma yediğini gören kişi, çok temiz bir helal rızka kavuşur, bekar ise çok güzel ve ahlaklı biriyle evlenir. Rüyada birinden elma almak, o kişiden gelecek sevgiye ve desteğe işarettir. Rüyada bir elmayı ikiye böldüğünü görmek, iş ortaklığına veya evlilikte yaşanacak bir ayrılığa (ikiye bölünmeye) yorulur. Elmanın ekşi, çürük veya kurtlu olması ise haram kazanca, hayal kırıklığına veya fesatlık eden bir dosta (içten içe çürümeye) delalet eder.',
      variations: [
        {
          title: 'Rüyada Kırmızı Elma Görmek',
          content: 'Şehvete, büyük bir aşka, cazibeye, çok güzel bir evlada (kız çocuğuna) veya toplum içinde elde edilecek çok parlak bir itibara işarettir.'
        },
        {
          title: 'Rüyada Yeşil Elma Görmek',
          content: 'Sağlığa, bedensel arınmaya, manevi temizliğe, sabır gerektiren ama sonu çok hayırlı (ve uzun ömürlü) olacak bir işe (erkek çocuğuna) yorulur.'
        },
        {
          title: 'Rüyada Elma Ağacı Görmek',
          content: 'İnsanlara çok faydası dokunan, inançlı, cömert ve sevecen bir insana (veya rüya sahibinin topluma faydalı büyük bir iş kuracağına) delalet eder.'
        },
        {
          title: 'Rüyada Ağaçtan Elma Toplamak',
          content: 'Kendi emeğinizle, alın terinizle hedeflerinize tek tek ulaşacağınıza ve çok yüksek (saygın) bir mevkiye geleceğinize işarettir.'
        },
        {
          title: 'Rüyada Çürük (Kurtlu) Elma Yemek',
          content: 'Dışarıdan çok cazip görünen bir işin veya insanın içinin bozuk olduğuna, elinize geçecek haram (veya hileli) bir paraya yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) elma, himmet ve kuvvettir. Rüyada elma gören kişinin himmeti (amacı) neyse ona kavuşur. Hz. Adem\'in cennetten çıkışına sebep olan yasak meyve genellikle elma ile tasvir edildiği için, bazı alimler rüyada izinsiz elma koparmayı "nefse yenik düşmek ve günah işlemek" olarak yorumlar. Nablusi\'ye göre mescitte elma koklamak evliliğe, elmayı ısırmak ise elde edilecek büyük bir sevince ve hayırlı bir evlada delalet eder.',
      psychologicalMeaning: 'Psikolojide elma, "cazibe", "bilgi" ve "farkındalık" (aydınlanma) sembolüdür (Newton\'un başına düşen elma gibi). Rüyasında çok parlak ve güzel bir elma gören kişi, uyanık hayatta önüne çıkan cazip bir teklifi değerlendirmekte veya yeni bir "farkındalığa" ulaşmaktadır. Elmayı ısırmak, tabuları yıkma (yasak olanı deneme) arzusunun, cesaretin ve hayatın "tadını çıkarma" isteğinin bilinçaltındaki yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada birine elma vermek ne anlama gelir?',
          answer: 'O kişiye duyduğunuz sevgiye, şefkate veya elinizdeki bir imkanı (rızkı) o insanla büyük bir cömertlikle paylaşacağınıza işarettir.'
        },
        {
          question: 'Hamile kadının rüyada elma görmesi nedir?',
          answer: 'Eğer elma kırmızıysa kız çocuğuna, yeşil ise erkek çocuğuna, her halükarda doğumun çok sağlıklı ve neşeli geçeceğine yorulur.'
        },
        {
          question: 'Rüyada elma suyu içmek ne demek?',
          answer: 'Zahmetsiz, süzülmüş, saf bir rızka (veya ilme) kavuşmaya, hastalar için çok hızlı bir şifaya ve ruhsal ferahlamaya delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'unlu',
    title: 'Rüyada Ünlü Birini Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada ünlü görmek; takdir edilme arzusuna, toplumda statü atlamaya, iddialı hedeflere, bazen de gerçekleşmeyecek boş hayallere (ve kibre) işaret eder.',
    relatedSymbols: ['kalabalik', 'asker'],
    content: {
      introduction: 'Ünlü insanlar (sanatçılar, aktörler, devlet adamları), modern toplumda "başarının, zenginliğin, yeteneğin ve popülerliğin" zirvesi olarak algılanır. Rüyalarda televizyondan veya ekrandan tanınan ünlü bir figürü görmek, rüya sahibinin kendi iç dünyasındaki "başarı ihtiyacını", toplumda öne çıkma arzusunu veya o ünlünün temsil ettiği karaktere bürünme isteğini yansıtır. Bu rüya, rüya sahibinin hırslarıyla doğrudan ilgilidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada ünlü birini görmek, rüya sahibinin çevresinde itibarının (saygınlığının) artacağına, adından söz ettirecek büyük bir başarıya imza atacağına delalet eder. Rüyasında sevdiği, takdir ettiği bir ünlüyle sohbet ettiğini gören kişi, çok önemli ve nüfuzlu insanlardan destek alır, iş hayatında beklenmedik bir sıçrama (terfi) yaşar. Ünlü biriyle arkadaş olduğunu görmek, lüks ve konforlu bir hayata adım atmaya işarettir. Ancak sevilmeyen veya kötü şöhretli bir ünlü görmek, toplum içinde rüya sahibinin adının bir dedikoduya karışacağına, itibar kaybına veya kibirli (bencil) davranışları yüzünden yalnız kalacağına yorulur.',
      variations: [
        {
          title: 'Rüyada Ünlü Bir Şarkıcı Görmek',
          content: 'Hayatınıza girecek büyük bir neşeye, kutlamaya, ancak bazen de geçici (ve içi boş) eğlencelere kapılıp gerçekleri görmezden gelmeye işarettir.'
        },
        {
          title: 'Rüyada Ünlü Bir Oyuncuyla Öpüşmek',
          content: 'Gerçekleşmesini çok istediğiniz büyük bir arzunuza kavuşacağınıza, ancak bu arzunun sonucunun beklediğiniz kadar tatmin edici olmayabileceğine yorulur.'
        },
        {
          title: 'Rüyada Ünlü Birinin Öldüğünü Görmek',
          content: 'Gözünüzde çok büyüttüğünüz bir insanın (veya hedefin) aslında o kadar da önemli olmadığını fark edeceğinize, illüzyonların yıkılmasına delalet eder.'
        },
        {
          title: 'Rüyada Ünlü Bir Devlet Adamı Görmek',
          content: 'Devlet kapısında işinizin çözüleceğine, mahkemede veya resmi bir kurumda çok güçlü bir destek bulacağınıza ve adaletin yerini bulacağına işarettir.'
        },
        {
          title: 'Rüyada Kendinin Ünlü Olduğunu Görmek',
          content: 'Kibrinize, çevrenizdeki insanları küçümsediğinize veya tam tersine, hak ettiğiniz değeri göremediğiniz için içten içe çok büyük bir onaylanma ihtiyacı duyduğunuza yorulur.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabirlerinde modern anlamda "ünlü" kavramı yoktur; ancak bu durum "şöhret ve makam sahibi, vali veya sultan" olarak yorumlanır. İbn Şirin\'e göre rüyada bir devlet büyüğü veya herkesin tanıdığı sevilen bir alimi görmek, büyük bir devlete, ilme ve rızka işarettir. Rüyada halkın çok sevdiği bir kişiyle yürümek, o kişinin ahlakından nasibini almaya yorulur. Ancak dinde şöhret genellikle "afet" kabul edildiği için, kibirli ve gösterişli insanlarla beraber olmak, dini zayıflığa ve dünyaya fazlasıyla meyletmeye delalet eder.',
      psychologicalMeaning: 'Psikolojide ünlü birini görmek, "İdeal Benlik" (Ideal Self) projeksiyonudur. Rüya sahibi uyanık hayatta o ünlünün sahip olduğu özellikleri (zenginlik, çekicilik, rahatlık, özgüven) kendine katmak istemektedir. Ünlü biriyle arkadaş olmak, bilinçaltının kişiye verdiği "Sen de en az onlar kadar değerlisin" tesellisidir. Aynı zamanda "Gölge" (Shadow) yönünüz de olabilir; sevmediğiniz bir ünlüyü görmek, kendinizde kabullenemediğiniz kötü özelliklerin o kişide vücut bulmuş halidir.',
      faqs: [
        {
          question: 'Rüyada ünlü biriyle yemek yemek ne anlama gelir?',
          answer: 'Çok nüfuzlu, varlıklı ve geniş çevreye sahip insanlarla aynı masaya oturacağınıza (ortak bir iş yapıp büyük kâr elde edeceğinize) işarettir.'
        },
        {
          question: 'Ünlü birinin evime misafir geldiğini görmek nedir?',
          answer: 'Hane içine girecek çok büyük bir kısmete, ailenizin itibarının (sosyal statüsünün) birdenbire yükseleceğine ve herkesin sizi konuşacağına yorulur.'
        },
        {
          question: 'Rüyada ünlü birinden imza veya hediye almak ne demek?',
          answer: 'Kariyerinizde çok önemli bir onaya, takdir belgesine (veya terfiye) sahip olacağınıza, emeklerinizin başkaları tarafından "onaylanacağına" delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'sogan',
    title: 'Rüyada Soğan Görmek',
    category: 'doga',
    shortDescription: 'Rüyada soğan görmek; gözyaşına, gizli sırların kat kat açığa çıkmasına, haram (veya şüpheli) mala, bazen de çok sağlam bir sağlığa işaret eder.',
    relatedSymbols: ['yemek-yemek', 'ekmek', 'et'],
    content: {
      introduction: 'Soğan, acı tadı ve keskin kokusuyla yemeklerin vazgeçilmezi olsa da, soyuldukça insanı ağlatması ve katmanlı yapısı sebebiyle rüyalarda derin sırlar barındırır. Rüyalarda görülen soğan genellikle "gözyaşı, dedikodu, ifşa olan sırlar ve can sıkıntısı" ile sembolize edilir. Kat kat olan yapısı, bir yalanın veya sırrın altına gizlenmiş başka sırları temsil eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada çiğ (kabuklu) soğan görmek, gizli kalmış kötü şeylerin ortaya çıkmasına, kişinin canını sıkacak (gözünü yaşartacak) ağır dedikodulara ve tartışmalara delalet eder. Rüyasında çiğ soğan yediğini gören kişi, haram bir işe karışır, çirkin sözler söyler veya hakkında çok ağır laflar edilir. Rüyada soğan soymak, bir insanın gizlediği yalanları, ikiyüzlülüğü kat kat ortaya çıkarmaya (onun maskesini düşürmeye), ancak bunu yaparken çok üzülmeye işarettir. Bunun tam aksine rüyada pişmiş soğan görmek veya yemek çok hayırlıdır; kişinin hatalarından tövbe etmesine, arınmasına, sağlığına (şifaya) ve işlerini yoluna koymasına yorulur.',
      variations: [
        {
          title: 'Rüyada Yeşil (Taze) Soğan Görmek',
          content: 'Zahmetle kazanılan paraya, çok çalışma gerektiren helal rızka ve sağlık problemlerinin bitip hastanın hızla ayağa kalkmasına işarettir.'
        },
        {
          title: 'Rüyada Soğan Doğramak',
          content: 'Uyanık hayatta kendi ellerinizle (belki de boş yere) canınızı sıktığınıza, küçük bir sorunu büyüterek gözyaşı döktüğünüze delalet eder.'
        },
        {
          title: 'Rüyada Birinden Soğan Almak',
          content: 'O kişiden (veya çevresinden) size gelecek kötü (acı) bir habere, bir nankörlüğe veya sizi çok üzecek bir kalp kırıklığına yorulur.'
        },
        {
          title: 'Rüyada Çürük Soğan Görmek',
          content: 'Toplum (veya aile) içindeki ahlaki çöküntüye, dışarıdan sağlam görünen ama için için kokmuş (bozulmuş) ilişkilere ve riyakarlığa işarettir.'
        },
        {
          title: 'Rüyada Soğan Ekimi Yapmak (Tarlada)',
          content: 'Gelecekte hem biraz gözyaşı ama sonunda da büyük bir bereket getirecek (acı tatlı) uzun vadeli bir işe yatırım yapmaya delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) soğan (ve sarımsak), kokuları nedeniyle meleklerin ve cemaatin hoşlanmadığı şeylerdir; dolayısıyla rüyada çiğ soğan görmek "çirkin söz, günah ve haram mal" olarak tabir edilir. Nablusi\'ye göre rüyada soğan yiyen hasta bir kimse ölür; ancak yeşil soğan koparmak hastanın iyileşmesine delalet eder. Rüyada bol miktarda soğan görmek, kişinin hilekarların veya dedikoducuların arasına düşmesine yorulurken, pişmiş soğan yemek hakka dönmeye, tövbeye ve ilahi affa işarettir.',
      psychologicalMeaning: 'Psikolojide soğanın katmanları, insan ruhunun ve savunma mekanizmalarının katmanlarını temsil eder (Jung\'un maskeleri/personaları gibi). Rüyada soğan soymak, kendi iç dünyanızın (veya bir başkasının) derinliklerine inme sürecini simgeler. Ortaya çıkan her katmanda bir acı (gözyaşı) vardır; çünkü gerçeklerle yüzleşmek, bastırılmış travmaları açığa çıkarmak her zaman zordur ve can yakar. Çiğ soğan, "acı gerçekleri" temsil eder.',
      faqs: [
        {
          question: 'Rüyada soğan koktuğunu hissetmek ne anlama gelir?',
          answer: 'Adınızın bir dedikoduya veya çirkin bir işe karıştığına, insanların arkanızdan konuştuğuna (kötü bir şöhrete) işarettir.'
        },
        {
          question: 'Rüyada soğan kızartmak (yemek yapmak) nedir?',
          answer: 'Elinizdeki sıkıntılı, acı ve zor bir durumu kendi yeteneğinizle yumuşatarak, ondan çok hayırlı (lezzetli) bir kazanç elde edeceğinize yorulur.'
        },
        {
          question: 'Rüyada beyaz (tatlı) soğan görmek kötü müdür?',
          answer: 'Diğer soğanlara göre daha iyidir. Üzüntünüzün çok hafif atlatılacağına, yaşayacağınız sıkıntının aslında sizin için çok hayırlı bir sonuca vesile olacağına delalet eder.'
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
