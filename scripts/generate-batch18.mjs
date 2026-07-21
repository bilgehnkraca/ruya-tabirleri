import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'hali',
    title: 'Rüyada Halı Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada halı görmek; dünyalık nimetlere, uzun ve rahat bir ömre, kişinin kurduğu düzene ve hane içindeki zenginliğe (berekete) işaret eder.',
    relatedSymbols: ['ev', 'altin', 'dugun'],
    content: {
      introduction: 'Halı, özellikle Doğu ve İslam kültüründe zenginliğin, emeğin, sıcaklığın ve bir evin "yuva" olmasının en temel sembolüdür. Yere serilen bir halı, ayaklarınızı yerden (soğuktan) kestiği gibi, hayat yolculuğunuzdaki konforu ve statünüzü de temsil eder. Rüyalarda halı görmek, rüya sahibinin dünyalık nasibini, elde ettiği makamı veya kurduğu (veya kuracağı) yuvanın sağlamlığını yansıtır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada büyük, temiz, renkli ve yumuşak bir halı görmek; geniş bir rızka, uzun ve çok sağlıklı bir ömre, hane içindeki büyük mutluluğa delalet eder. Rüyasında kendi evine yeni bir halı serdiğini gören kişi, ya yeni ve çok konforlu bir hayata (veya eve) adım atar ya da bekar ise çok zengin ve soylu biriyle evlenir. Rüyada halı dokumak veya satın almak, sabırla ve ilmek ilmek işlenen bir projenin (veya ilişkinin) sonunda mükemmel bir başarı getireceğine işarettir. Ancak halının eski, yırtık, kirli veya çok küçük olması, dünyalık nimetlerin daralmasına, geçim sıkıntısına veya hane içindeki bazı sırlara (halı altına süpürülen dertlere) yorulur.',
      variations: [
        {
          title: 'Rüyada Kırmızı (veya Desenli) Halı Görmek',
          content: 'Hayatınıza girecek büyük bir şöhrete, tanınmaya (kırmızı halı), şatafata ve çok tutkulu bir aşka (canlı renkler) delalet eder.'
        },
        {
          title: 'Rüyada Halı Yıkamak (veya Silmek)',
          content: 'Evinizdeki (veya kalbinizdeki) kötülüklerden, geçmiş hatalardan ve dedikodulardan arınmaya, "temiz bir sayfa" açmaya işarettir.'
        },
        {
          title: 'Rüyada Uçan Halı Görmek',
          content: 'Çok büyük ve masalsı bir hayalin gerçek olacağına, kişinin mucizevi bir şekilde hızla yükseleceğine veya uzun bir yolculuğa çıkacağına yorulur.'
        },
        {
          title: 'Rüyada Halının Dürülmesi (Kaldırılması)',
          content: 'Eğer halı eskiyse bir dönemin kapandığına, yeniyse dünyalık rızkın (veya makamın) artık sonuna gelindiğine (ömrün azaldığına) dair uyarıcı bir rüyadır.'
        },
        {
          title: 'Rüyada Başkasının Halısına Basmak',
          content: 'Başka bir insanın kurduğu düzene, zenginliğe veya mekana dahil olmaya (örneğin o kişinin yanında işe girmeye veya evliliğe) işarettir.'
        }
      ],
      religiousMeaning: 'İslami rüya tabirlerinde (İbn Şirin) yere serilen temiz bir halı, kişinin dünyadaki "makamı, ömrü ve rızkı"dır. Halı ne kadar geniş ve kalınsa, rüya sahibinin rızkı ve ömrü de o kadar uzun ve rahat olur. Rüyada yeşil bir halı (veya seccade) görmek, rüya sahibinin dünyalık zenginliğinden ziyade manevi makamının, ibadetinin ve takvasının çok yüksek olduğuna, ahiret hayatı için "sağlam bir zemin" hazırladığına delalet eder.',
      psychologicalMeaning: 'Psikolojide halı, kişinin "güvenlik ve konfor" alanını (Comfort Zone) temsil eder. Yere sağlam basma ihtiyacınızın, hayatta kendinizi güvende ve "sıcak" hissetme arzunuzun bilinçaltındaki yansımasıdır. Rüyada halının altını kaldırmak veya halı silkelemek, uzun süredir yüzleşmekten kaçtığınız (halı altına süpürdüğünüz) sırlarla, bastırılmış duygularla ve travmalarla artık yüzleşme vaktinin geldiğini gösterir.',
      faqs: [
        {
          question: 'Rüyada rulo halinde (sarılı) halı görmek ne anlama gelir?',
          answer: 'Henüz açılmamış, vakti gelmemiş büyük bir nasibe (çeyize veya mirasa), sır saklamaya veya çıkılacak uzun bir yolculuğa işarettir.'
        },
        {
          question: 'Rüyada duvarda asılı halı görmek nedir?',
          answer: 'Elde edilen bir başarının veya zenginliğin gösterişe dönüştüğüne, gurur duyulan bir aile mirasına yorulur.'
        },
        {
          question: 'Rüyada yırtık (eski) halı üzerinde oturmak kötü müdür?',
          answer: 'Maddi zorluklara, geçim darlığına veya eski (yıpranmış) bir ilişkide hala huzur bulmaya çalışmaya (kanaatkarlığa) delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'timsah',
    title: 'Rüyada Timsah Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada timsah görmek; acımasız, sinsi, ikiyüzlü (timsah gözyaşları) bir düşmana, tehlikeli bir ticaret hayatına veya güvensiz ortamlara işaret eder.',
    relatedSymbols: ['yilan', 'su', 'olum'],
    content: {
      introduction: 'Timsah, doğanın en acımasız, en sinsi ve pusu kuran avcılarından biridir. Suyun altında sessizce bekleyip aniden saldırma özelliği, insanlık tarihi boyunca "hainliği ve beklenmedik tehlikeyi" sembolize etmiştir. Rüyalarda görülen timsah, genellikle etrafınızda dost (veya zararsız) görünen, ancak sizi alt etmek için fırsat kollayan çok güçlü ve merhametsiz bir figürün (patron, akraba veya rakip) habercisidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada timsah görmek, kişinin hayatında çok zalim, hilekar ve asla güvenilmemesi gereken bir insanın (veya düşmanın) varlığına delalet eder. Rüyada nehirde veya denizde yüzen bir timsah görmek, iş veya özel hayatta pusuya yatmış, sizin bir zayıf anınızı bekleyen büyük bir tehlikeye işarettir. Rüyasında timsahtan kaçtığını (kurtulduğunu) gören kişi, bu sinsi düşmanın oyununu bozar ve çok büyük bir belayı kıl payı atlatır. Timsah tarafından ısırılmak veya yenmek, rüya sahibinin düşmanları veya kötü niyetli kişiler tarafından ciddi bir zarara uğratılacağına, malını veya itibarını kaybedeceğine yorulur.',
      variations: [
        {
          title: 'Rüyada Timsah Öldürmek',
          content: 'Çok büyük ve görkemli bir zaferdir! Önünüze çıkan en büyük engeli (veya en acımasız rakibi) kendi gücünüzle alt edeceğinize işarettir.'
        },
        {
          title: 'Rüyada Timsah Derisi (veya Çantası) Görmek',
          content: 'Düşmanınızın gücünden veya malından faydalanacağınıza, tehlikeli bir işten çok karlı (zengin) bir şekilde çıkacağınıza delalet eder.'
        },
        {
          title: 'Rüyada Yavru Timsah Görmek',
          content: 'Şu an size zararsız görünen küçük bir sorunun (veya dedikodunun), önlem alınmazsa ileride başınıza çok büyük bela açacağına dair uyarıdır.'
        },
        {
          title: 'Rüyada Evin İçinde Timsah Görmek',
          content: 'En tehlikelisi budur; düşmanın veya hainliğin dışarıdan değil, ailenizin içinden veya çok güvendiğiniz dost meclisinden geleceğine yorulur.'
        },
        {
          title: 'Rüyada Timsahın Ağladığını Görmek',
          content: 'Klasik "timsah gözyaşları"dır. Size karşı suç işleyen birinin sahte bir şekilde af dileyeceğine, onun yalanlarına asla kanmamanız gerektiğine işarettir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) timsah; hırsız, zalim devlet adamı (veya polis/asker), can yakan tüccar veya acımasız bir zorba olarak tabir edilir. Çünkü timsah, eline geçirdiğini asla sağ bırakmayan, acıması olmayan bir fıtrata sahiptir. Bir kimse rüyasında timsahı karaya (sudan dışarı) çıkardığını görse, o zalim düşmanı etkisiz hale getirir. Timsahın kendisini suya çektiğini görmek, kişinin o zalim gücün (veya haramın) içinde boğulacağına (büyük günaha gireceğine) delalet eder.',
      psychologicalMeaning: 'Psikolojik (Carl Jung) bağlamda timsah, insan zihninin en ilkel, en eski kısmını (sürüngen beyin) ve vahşi arzuları (yıkıcılık, öfke, soğukkanlılık) temsil eder. Suyun altından çıkması, bilinçaltınızdaki kontrol edilemez ve yutucu bir korkunun (veya öfkenin) bilincinize doğru yükseldiğini gösterir. Ayrıca çevrenizdeki insanlara karşı duyduğunuz derin güvensizliğin (paranoyanın) rüyaya yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada timsahtan saklanmak ne demek?',
          answer: 'Sorunlarla yüzleşmek yerine onlardan kaçtığınıza, ancak tehlikenin hala geçmediğine ve sürekli bir tetikte olma (stres) haline yorulur.'
        },
        {
          question: 'Rüyada timsah beslemek (veya sevmek) nedir?',
          answer: 'Ateşle oynamaktır. Kendi ellerinizle size zarar verecek birini büyüttüğünüze veya çok tehlikeli bir işe (insana) körü körüne bağlandığınıza işarettir.'
        },
        {
          question: 'Ölü timsah görmek ne anlama gelir?',
          answer: 'İçinizi kemiren çok büyük bir korkunun yersiz çıkacağına, gizli düşmanınızın kendi kendine yok olacağına (etkisizleşeceğine) delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'kalabalik',
    title: 'Rüyada Kalabalık Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada kalabalık görmek; karmaşaya, önemli kararlar alma arifesine, liderliğe, kişinin içinde bulunduğu toplumsal baskıya veya büyük bir olaya işaret eder.',
    relatedSymbols: ['dugun', 'asker', 'kavga-etmek'],
    content: {
      introduction: 'Kalabalık (insan topluluğu), gücün, kaosun, toplum baskısının ve aynı zamanda "birliğin" sembolüdür. Rüyalarda kendinizi bir kalabalığın içinde veya onlara dışarıdan bakarken görmek, birey olarak uyanık hayattaki "toplumsal statünüzü", kalabalıklar içindeki yalnızlığınızı veya büyük bir değişimin (örneğin kitleleri ilgilendiren bir haberin) eşiğinde olduğunuzu gösterir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada büyük bir kalabalık görmek, rüya sahibinin iş hayatında veya özel hayatında çok karmaşık (kaotik) bir döneme girdiğine, kafasının seslerle (farklı fikirlerle) dolu olduğuna delalet eder. Rüyada kalabalığa (insanlara) liderlik ettiğini, onlara hitap ettiğini gören kişi, makam ve şan sahibi olur, sözü dinlenen saygın bir konuma yükselir. Eğer kalabalık sessiz, düzenli ve sakince bekliyorsa, toplum (veya aile) içinde yaşanacak çok güzel bir olaya, huzura ve güce işarettir. Ancak kalabalık öfkeli, bağırıp çağıran (isyan eden) bir yapıdaysa, dedikoduya, fitneye, büyük bir tartışmanın ortasında kalmaya veya toplumsal bir kargaşaya yorulur.',
      variations: [
        {
          title: 'Rüyada Evin İçinde Kalabalık Görmek',
          content: 'O haneye gelecek çok büyük bir misafire, düğün veya cenaze gibi tüm aileyi bir araya toplayacak ani (büyük) bir gelişmeye işarettir.'
        },
        {
          title: 'Rüyada Kalabalık İçinde Kaybolmak',
          content: 'Kendi kimliğinizi (benliğinizi) bulmakta zorlandığınıza, başkalarının fikirleri (mahalle baskısı) altında ezildiğinize ve ne yapacağınızı bilemediğinize yorulur.'
        },
        {
          title: 'Rüyada Kalabalıktan Kaçmak (Ayrılmak)',
          content: 'Stresten, dedikodudan ve yapay ilişkilerden bıkıp kendi iç dünyanıza (sessizliğe) çekilme ihtiyacınıza, bireyselleşme isteğinize delalet eder.'
        },
        {
          title: 'Rüyada Kalabalık Bir Eğlence (Festival) Görmek',
          content: 'Neşeli insan topluluğu, ruhsal ferahlamaya, yalnızlığın bitmesine ve sosyal hayatın çok canlanacağına (yeni arkadaşlıklara) işarettir.'
        },
        {
          title: 'Rüyada Kabe\'de (veya Camide) Kalabalık Görmek',
          content: 'Çok büyük bir manevi mertebeye, rüya sahibinin Allah katında ve insanlar arasında çok sevilip itibar göreceği güzel işler yapacağına yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin) rüyada tanınmayan (kim olduğu belirsiz) insan kalabalıkları görmek, genellikle "güç ve mülk" olarak yorumlanır. Rüyasında kalabalıkların peşinden yürüdüğünü gören kişi, gücü (saltanatı) eline alır. Nablusi\'ye göre rüyada bir topluluğun (kalabalığın) bir araya gelmesi, Allah\'ın rahmetine, yardıma ve dayanışmaya işarettir (Cemaatte rahmet vardır). Ancak feryat eden veya savaşan kalabalıklar, Allah\'ın bir uyarısı, fitne ve musibet olarak tabir edilir.',
      psychologicalMeaning: 'Psikolojide kalabalık, "Kolektif Bilinçdışını" veya toplumun (Süper Ego) sizin üzerinizdeki beklentilerini sembolize eder. Rüyasında üzerine gelen bir kalabalık gören kişi, uyanık hayatta yargılanmaktan, dedikodudan veya "insanlar ne der" korkusundan muzdariptir. Kalabalık içindeki yalnızlık hissi ise, yabancılaşmanın (Alienation), anlaşılamama duygusunun ve modern hayatın getirdiği ruhsal izolasyonun bir yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada mahşer kalabalığı (kıyamet) görmek ne anlama gelir?',
          answer: 'Adaletin tecelli edeceğine, haksızlığa uğradığınız bir konuda nihayet haklılığınızın (tüm insanlar önünde) kanıtlanacağına işarettir.'
        },
        {
          question: 'Rüyada kadınlardan oluşan bir kalabalık görmek nedir?',
          answer: 'Genellikle dünya süsüne, dedikoduya, fitneye veya erkeğin yaşayacağı dünyevi şaşkınlıklara (nefsi imtihanlara) yorulur.'
        },
        {
          question: 'Rüyada kalabalık bir masada yemek yemek ne demek?',
          answer: 'Çok büyük bir berekete, rızkın (kazancın) paylaşıldıkça çoğalacağına ve sevdiğiniz insanlarla güçlü bir bağ (aile) kurduğunuza delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'kaplumbaga',
    title: 'Rüyada Kaplumbağa Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada kaplumbağa görmek; bilgeliğe, uzun ömre, yavaş ama çok sağlam ilerleyen işlere, sabra ve güçlü bir korunma kalkanına (eve) işaret eder.',
    relatedSymbols: ['ev', 'balik', 'deniz'],
    content: {
      introduction: 'Kaplumbağa, dünyanın en uzun yaşayan canlılarından biri olarak tüm mitolojilerde bilgeliğin, sabrın, evrenin ve zamanın sembolü olmuştur. Kabuğu (evi) sırtında olan bu hayvan, kendi kendine yetebilmeyi ve dış dünyanın tehlikelerine karşı alınan muazzam önlemi temsil eder. Rüyalarda kaplumbağa görmek, yavaşlık gibi görünse de aslında "kalıcılığın, sağlamlığın ve ermişliğin" en güçlü işaretidir.',
      generalMeaning: 'Rüya tabircilerine (özellikle İslami alimlere) göre rüyada kaplumbağa görmek; rüya sahibinin hayatına girecek çok alim, bilgili, adil ve sır tutan bir insana (veya rüya sahibinin kendisinin bu vasıfları kazanacağına) delalet eder. Rüyasında kaplumbağa gören kişinin işleri yavaş ilerlese de sonuçları çok kalıcı, sağlam ve bereketli olur. Kaplumbağa aynı zamanda ev ve mülk sahibi olmaya (sırtındaki kabuk sebebiyle) yorulur. Rüyada kaplumbağa beslemek veya onunla yürüdüğünü görmek, kişinin hayatında doğru kararlar alarak, sabırla çok büyük bir zenginliğe veya ilme ulaşacağına işarettir. Ancak kaplumbağanın öldüğünü veya kabuğunun kırıldığını görmek, bilgili bir insanın kaybına veya kişinin evinde/işinde yaşayacağı savunmasız bir döneme işaret eder.',
      variations: [
        {
          title: 'Rüyada Su Kaplumbağası (Deniz Kaplumbağası) Görmek',
          content: 'Ufkunuzun çok genişleyeceğine, okyanusları aşacak kadar büyük (ve kalıcı) bir yolculuğa veya denizaşırı çok karlı bir işe delalet eder.'
        },
        {
          title: 'Rüyada Kaplumbağa Yavrusu Görmek',
          content: 'Yeni yeşeren bir umuda, ufak adımlarla başlayan ama yıllar geçtikçe devasa bir mirasa veya bilgi birikimine dönüşecek bir projeye (veya çocuğa) yorulur.'
        },
        {
          title: 'Rüyada Kaplumbağanın Isırması',
          content: 'Uyanık hayatta ihmal ettiğiniz, "nasıl olsa bekler" dediğiniz bir meselenin (veya sakin bir insanın) aniden patlayarak size zarar vermesine işarettir.'
        },
        {
          title: 'Rüyada Kabuğuna Çekilmiş Kaplumbağa Görmek',
          content: 'Sosyal hayattan izole olmaya, kendi iç dünyanıza dönme (inziva) ihtiyacınıza veya dışarıdan gelen bir tehlikeye karşı savunma mekanizması geliştirdiğinize yorulur.'
        },
        {
          title: 'Rüyada Kaplumbağa Sürüsü Görmek',
          content: 'Çevrenizde sizden yaşça veya ilimce çok büyük, akil insanların (danışmanların) toplandığına ve bu meclisten çok feyz alacağınıza işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre rüyada kaplumbağa görmek; abid (çok ibadet eden), zahit (dünyadan el etek çeken), Kur\'an okuyan ve ilmiyle amel eden büyük bir alimdir. Bir kimse rüyada evine kaplumbağa aldığını görse, o eve çok değerli, ilim sahibi bir insan misafir olur veya o hane ilim meclisine döner. Nablusi\'ye göre de kaplumbağa hakimin, adaletin ve ilmin sembolüdür. Rüyada kaplumbağa eti yemek (veya bulmak), peygamberlerin ve alimlerin ilmine (veya helal mirasa) varis olmaya delalet eder.',
      psychologicalMeaning: 'Psikolojide kaplumbağa (kabuğu sebebiyle) İçe Dönüklüğün (Introversion), korunma ihtiyacının ve yavaşlamanın sembolüdür. Eğer hayatınız çok kaotik ve hızlı ilerliyorsa, bilinçaltınız size bir kaplumbağa rüyası göstererek "Yavaşla, kendi merkezine (kabuğuna) dön ve köklen" mesajı verir. Aynı zamanda dış dünyaya karşı ördüğünüz kalın duvarların (kimseye güvenmemenin) da bir yansıması olabilir.',
      faqs: [
        {
          question: 'Rüyada uçan kaplumbağa görmek ne demek?',
          answer: 'İmkansız gibi görünen, çok ağır ilerleyen bir işinizin mucizevi bir şekilde (çok hızlı) çözüleceğine ve mantığın sınırlarını aşan bir başarıya işarettir.'
        },
        {
          question: 'Rüyada sırt üstü ters dönmüş kaplumbağa görmek nedir?',
          answer: 'Bir konuda çaresiz kaldığınıza, kendi başınıza (destek almadan) içinden çıkamayacağınız bir krizin ortasına düştüğünüze (yardım çağrısına) delalet eder.'
        },
        {
          question: 'Kaplumbağanın çok hızlı koştuğunu görmek ne anlama gelir?',
          answer: 'Sizden (veya bir işten) hiç beklenmeyen, herkesi şaşkına çevirecek ani bir atağa, çok hızlı gelecek bir refaha (veya zekaya) yorulur.'
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
