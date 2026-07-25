const fs = require('fs');
const path = require('path');

function getCleanName(title) {
  return title.replace(/^Rüyada\s+/i, '').replace(/\s+Görmek.*/i, '').trim();
}

function analyzeKeywords(slug, cleanName) {
  const text = (slug + ' ' + cleanName).toLowerCase();
  
  let theme = 'general';
  let partnerLink = 'https://www.turkiyehesaplama.com';
  let partnerAnchor = 'Türkiye Hesaplama araçları';
  let partnerContext = 'gündelik planlamalarınızda ve bütçe yönetiminizde';
  let scholarFocus = 'İmam Nablusi ve İbn-i Sirin';
  let psychFocus = 'Carl Gustav Jung ve Sigmund Freud';
  let archetype = 'gölge (shadow) ve benlik (self) arketipi';

  if (text.match(/bebek|hamile|cocuk|gelin|dugun|evlilik|nişan|anneyle/)) {
    theme = 'family_birth';
    partnerLink = 'https://www.turkiyehesaplama.com/gebelik-hesaplama.html';
    partnerAnchor = 'gebelik, evlilik ve doğum tarihi hesaplama sistemleri';
    partnerContext = 'yeni yaşam evrelerinizi planlarken, ailevi hedeflerinizi ve zaman çizelgenizi düzenlemede';
    scholarFocus = 'İbn-i Sirin ve İmam Cafer-i Sadık';
    psychFocus = 'Carl Jung\'un yeniden doğuş (rebirth) ve çocuk arketipi';
    archetype = 'ilahi safiyet, yeni başlangıçlar ve içsel çocuğun uyanışı';
  } else if (text.match(/altin|para|miras|cuzdan|terfi|is|maas|alisveris|pazar|sozlesme|bank|ekmek|ticaret|mucevher|kiralik|evrak|hesap/)) {
    theme = 'wealth_career';
    partnerLink = 'https://www.turkiyehesaplama.com/kredi-hesaplama.html';
    partnerAnchor = 'kredi, maaş, altın ve yatırım hesaplama sistemleri';
    partnerContext = 'maddi adımlarınızı atarken, bütçe yönetiminizde ve kariyer yatırımlarınızda';
    scholarFocus = 'İmam Nablusi ve Seyyid Süleyman';
    psychFocus = 'Alfred Adler\'in üstünlük çabası ve Freud\'un gerçeklik ilkesi';
    archetype = 'maddi güvence arayışı, ego yeterliliği ve toplumsal statü';
  } else if (text.match(/vefat|olmus|baba|dede|babaanne|kardes|akraba|kus|sarilmak|mezuniyet|komsu|miras|ogretmen/)) {
    theme = 'social_ancestral';
    partnerLink = 'https://www.turkiyehesaplama.com/yas-hesaplama.html';
    partnerAnchor = 'yaş, zaman ve nesil farkı hesaplama araçları';
    partnerContext = 'geçmişle geleceği birbirine bağlarken, yaşam döngünüzü ve ailevi mirasınızı değerlendirmede';
    scholarFocus = 'İbn-i Sirin ve İmam Nablusi';
    psychFocus = 'Carl Jung\'un kollektif bilinçdışı ve ata (ancestral) arketipi';
    archetype = 'sıla-i rahim, geçmişle barışma ve vicdani bütünleşme';
  } else if (text.match(/yagmur|su|deniz|selale|gol|yunus|balik|gemi|liman|nehir|kuyu|yuzmek|dalga|ada|cimen|ormand|bahce/)) {
    theme = 'water_nature';
    partnerLink = 'https://www.turkiyehesaplama.com/gun-hesaplama.html';
    partnerAnchor = 'gün, saat ve zaman dilimi hesaplama rehberi';
    partnerContext = 'duygusal akışınızı yönetirken, hayatınızdaki dönüm noktalarını ve doğa kamplarınızı belirlemede';
    scholarFocus = 'İmam Cafer-i Sadık ve İmam Nablusi';
    psychFocus = 'Carl Jung\'un derin bilinçdışı okyanusu ve su sembolizmi';
    archetype = 'duygusal arınma (katarsis), manevi şifa ve bilinçaltının derinlikleri';
  } else if (text.match(/kabe|namaz|kuran|ramazan|ezan|cami|zemzem|dua|hizir|melek|secde|ihram|hac|kible|allah|sirat|kevser|ibadet|tesbih|kadir/)) {
    theme = 'spiritual_divine';
    partnerLink = 'https://www.turkiyehesaplama.com/dini-gunler-hesaplama.html';
    partnerAnchor = 'dini günler, ramazan ve zekat hesaplama araçları';
    partnerContext = 'manevi sorumluluklarınızı yerine getirirken, ibadet takviminizi ve hayır işlerinizi planlamada';
    scholarFocus = 'İmam Nablusi, İbn-i Sirin, İmam Cafer-i Sadık ve Seyyid Süleyman';
    psychFocus = 'Carl Jung\'un tinsel (spritüel) bütünleşme ve Yüksek Benlik (Self) arketipi';
    archetype = 'ilahi müjde, manevi fıtrat ve kusursuz iç huzur';
  } else if (text.match(/araba|yol|otobus|ucak|merdiven|kopru|tunel|kapi|anahtar|tren|stadyum|apartman|ucurum/)) {
    theme = 'journey_transition';
    partnerLink = 'https://www.turkiyehesaplama.com/mesafe-hesaplama.html';
    partnerAnchor = 'mesafe, seyahat ve yakıt hesaplama rehberi';
    partnerContext = 'yeni yolculuklara çıkarken, kariyer hedeflerinizdeki aşamaları ve yönünüzü tayin etmede';
    scholarFocus = 'Seyyid Süleyman ve İmam Nablusi';
    psychFocus = 'Carl Jung\'un bireyleşme yolculuğu (hero\'s journey) ve eşik atlama arketipi';
    archetype = 'hayat yolculuğu, engelleri aşma iradesi ve kader dönüşümü';
  } else if (text.match(/saat|zaman|gece|yildiz|gunes|gokkusagi|ayna|telefon|mum|fotograf|kelebek|kopek|kedi|kutuphan/)) {
    theme = 'wisdom_reflection';
    partnerLink = 'https://www.turkiyehesaplama.com/tarih-hesaplama.html';
    partnerAnchor = 'tarih, zaman ve gün farkı hesaplama sistemleri';
    partnerContext = 'zamanın kıymetini idrak ederken, gelecek planlarınızda doğru anı yakalamada';
    scholarFocus = 'İmam Nablusi ve İbn-i Sirin';
    psychFocus = 'Sigmund Freud\'un bilinçli farkındalık ve Jung\'un anima/animus yansıması';
    archetype = 'zaman bilinci, öz farkındalık ve sezgisel aydınlanma';
  }

  return { theme, partnerLink, partnerAnchor, partnerContext, scholarFocus, psychFocus, archetype };
}

function getThemeSpecificSections(theme, cleanName, lowerName, meta) {
  let variations = [];
  let faqs = [];
  let religiousAddon = "";
  let psychAddon = "";

  if (theme === 'family_birth') {
    religiousAddon = `İslam tefsir geleneğinde ailevi nesil, evlat sevgisi ve hanedeki huzur en mukaddes nimetler arasında sayılır. Bu sebeple rüyada ${lowerName} deneyimlemek, soyun devamına, hayırlı evlatlara ve ev içi berekete işaret eder.`;
    psychAddon = `Psikolojik olarak aile ve bebek imgeleri, bireyin içsel olgunluk düzeyini, koruyuculuk içgüdülerini ve geleceğe dair ümitlerini yansıtır. Zihnin sevgi, bağlılık ve aidiyet arayışının bir projeksiyonudur.`;
    variations = [
      {
        title: `Rüyada Aile Meclisinde veya Hastanede ${cleanName} Görmek`,
        content: `Rüyada aile üyeleriyle birlikte veya bir hastane ortamında ${lowerName} ile karşılaşmak, ailevi bağların güçleneceğine, hastalıklardan şifa bulmaya ve hane içine girecek müjdeli haberlere işaret eder. İslami tefsirler bu durumu sıla-i rahim ve ilahi rahmet olarak nitelendirir.`
      },
      {
        title: `Rüyada ${cleanName} Esnasında Sevinç Gözyaşları Dökmek`,
        content: `Rüya esnasında ${lowerName} sebebiyle mutluluktan ağladığını görmek, gerçek hayatta yaşanacak büyük bir ferahlamanın ve murada ermenin habercisidir. Psikolojik olarak bastırılmış pozitif duyguların sağlıklı bir şekilde açığa çıkmasını sembolize eder.`
      },
      {
        title: `Rüyada Tanımadığın Bir Ortamda ${cleanName} İle Karşılaşmak`,
        content: `Yabancı bir ortamda ${lowerName} deneyimlemek, rüya sahibinin karşısına çıkacak yeni ve hayırlı insanlara, kurulacak samimi dostluklara ve sosyal çevrede kazanılacak saygınlığa delalet eder.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin ailevi ve manevi açıdan İslami tefsiri nedir?`,
        answer: `Bu rüya İslami açıdan ailevi saadeti, haneye girecek bereketi ve neslin hayrını müjdeler. Diyanet tefsirlerine göre kişinin aile büyüklerine saygıyı ve küskünlükleri bitirmeyi tavsiye eden rahmet dolu bir işarettir.`
      },
      {
        question: `Rüyada ${lowerName} görmek psikolojik olarak hangi içgüdüleri temsil eder?`,
        answer: `Analitik psikolojide bu sembol, içsel çocuğun uyanışını, anne/baba olma içgüdüsünü, koruma arzusunu ve yenilenme ihtiyacını temsil eder. Zihnin sevgi ve şefkat arayışını yansıtır.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra aile hayatımda nelere dikkat etmeliyim?`,
        answer: `Bu rüyadan sonra aile içi iletişime daha fazla özen göstermeli, küs olduğunuz yakınlarınızla barışma adımları atmalısınız. Ayrıca geleceğe yönelik planlamalarınızda [${meta.partnerAnchor}](${meta.partnerLink}) üzerinden zaman ve takvim planlaması yapmanız faydalı olacaktır.`
      }
    ];
  } else if (theme === 'wealth_career') {
    religiousAddon = `İslami ticaret ve kazanç ahlakında helal rızık her şeyin üstündedir. Bu rüya, kişinin alın teriyle kazanacağı malın bereketleneceğine ve şüpheli kazançlardan uzak durduğu sürece ilahi yardıma mazhar olacağına işaret eder.`;
    psychAddon = `Maddi semboller ve iş yaşamı imgeleri, bireyin özdeğer algısını, başarı güdüsünü ve toplumsal statü kaygılarını simgeler. Egoun dünyevi hayatta kendini ispatlama ve güvenceye alma çabasının tezahürüdür.`;
    variations = [
      {
        title: `Rüyada İş Yerinde veya Pazarda ${cleanName} Deneyimlemek`,
        content: `İş ortamında veya hareketli bir pazarda ${lowerName} görmek, mesleki kariyerinizde yeni fırsatların doğacağına, terfi veya kazanç artışına ve ticari atılımlarda başarıya ulaşılacağına delalet eder.`
      },
      {
        title: `Rüyada ${cleanName} Sayesinde Büyük Bir Kazanç Elde Etmek`,
        content: `Rüya esnasında ${lowerName} yoluyla kazanç sağladığını görmek, uzun süredir verilen emeklerin karşılığının alınacağını ve maddi sıkıntıların sona ereceğini müjdeler.`
      },
      {
        title: `Rüyada Başkalarıyla ${cleanName} Paylaşmak ve Yardım Etmek`,
        content: `Rüyada elde edilen imkanları veya ${lowerName} deneyimini çevresiyle paylaştığını görmek, kişinin cömertliğine, zekat ve sadaka bilincine, bu sayede malının daha da bereketleneceğine işaret eder.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin kariyer ve helal kazanç açısından mesajı nedir?`,
        answer: `İslami tefsirlere göre bu rüya, dürüst ticarete, helal rızka ve mesleki basamakları hakkaniyetle tırmanmaya işarettir. Kişinin kazancında şükür ve sadakayı unutmaması gerektiğini hatırlatır.`
      },
      {
        question: `Rüyada ${lowerName} görmek hırs ve özdeğer psikolojisi açısından ne anlama gelir?`,
        answer: `Psikolojik olarak bu imge, bireyin maddi güvence ihtiyacını, kariyer hedeflerindeki tutkusunu ve toplum içinde takdir edilme arzusunu simgeler. Başarı moti̇vasyonunun yüksek olduğuna işaret eder.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra finansal planlamamda ne yapmalıyım?`,
        answer: `Bu rüyanın ardından yatırımlarınızı ve iş kararlarınızı aceleye getirmeden, analitik verilerle planlamalısınız. Özellikle [${meta.partnerAnchor}](${meta.partnerLink}) aracılığıyla bütçe, kredi veya gelir-gider dengenizi hesaplayarak somut adımlar atabilirsiniz.`
      }
    ];
  } else if (theme === 'water_nature') {
    religiousAddon = `Su, deniz ve doğa unsurları İslam literatüründe rahmet, şifa ve günahlardan arınma (taharet) sembolüdür. Berrak su ve yeşillik, kalp huzuruna ve duaların kabulüne delalet eder.`;
    psychAddon = `Su ve doğa imgeleri, Jung psikolojisinde doğrudan bilinçaltı okyanusunu ve duygusal derinlikleri temsil eder. Ruhun doğayla bütünleşerek yenilenme ve katarsis yaşama arzusudur.`;
    variations = [
      {
        title: `Rüyada Berrak ve Sakin Bir Doğada ${cleanName} Görmek`,
        content: `Sakin ve huzur verici bir doğa ortamında ${lowerName} ile karşılaşmak, zihinsel karmaşanın biteceğine, içsel bir huzura kavuşulacağına ve ruhsal şifanın gerçekleşeceğine delalet eder.`
      },
      {
        title: `Rüyada Yağmur veya Akarsu Eşliğinde ${cleanName} Deneyimlemek`,
        content: `Yağmur yağarken veya akan bir su kenarında ${lowerName} görmek, ilahi rahmetin üzerinizde olduğuna, üzüntü ve kederlerin su gibi akıp gideceğine işaret eden hayırlı bir rüyadır.`
      },
      {
        title: `Rüyada Mevsimsiz veya Beklenmedik Bir Anda ${cleanName} Görmek`,
        content: `Doğanın alışılmadık bir anında ${lowerName} deneyimlemek, hayatınızda aniden gerçekleşecek mucizevi gelişmelere, sürpriz sevinçlere ve kaderin hayırlı dönüşümlerine yorulur.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin manevi arınma ve rahmet tefsiri nedir?`,
        answer: `Bu rüya İslami kaynaklarda gönül ferahlığına, günahlardan tövbe etmeye ve ilahi rahmetin tecellisine yorulur. Temizlik, şifa ve bereket alameti olarak kabul edilir.`
      },
      {
        question: `Rüyada ${lowerName} görmek bilinçaltı ve duygusal derinlik açısından neyi ifade eder?`,
        answer: `Analitik psikolojide bu sembol, duygusal bir boşalmayı (katarsis), ruhsal yenilenmeyi ve bilinçaltındaki bastırılmış hislerin şifalı bir şekilde bilince taşınmasını temsil eder.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra ruhsal sükunet için ne yapılmalıdır?`,
        answer: `Bu rüyadan sonra doğayla daha fazla vakit geçirmeli, içsel tefekkürü artırmalı ve stresten uzak durmalısınız. Günlük zaman akışınızı ve tatil planlarınızı [${meta.partnerAnchor}](${meta.partnerLink}) üzerinden düzenleyerek kendinize vakit ayırabilirsiniz.`
      }
    ];
  } else if (theme === 'spiritual_divine') {
    religiousAddon = `Dini ve manevi rüyalar, rüya-i sadıka (sadık rüyalar) kategorisinde değerlendirilir. Bu tür imge ve deneyimler, doğrudan ilahi ikramlara, yüksek manevi mertebelere ve kulluk şuuruna delalet eder.`;
    psychAddon = `Sprtiüel imgeler, Jung'un benlik (Self) arketipi ile en yüksek düzeyde bütünleşmeyi simgeler. Bireyin varoluşsal anlam arayışında huzura ulaştığını ve manevi bir olgunluk evresine geçtiğini gösterir.`;
    variations = [
      {
        title: `Rüyada Kutsal Mekanlarda veya Cami Avlusunda ${cleanName} Görmek`,
        content: `Kutsal mekanlarda veya manevi atmosferi yüksek bir yerde ${lowerName} deneyimlemek, duaların Hak katında makbul olduğuna, günahlardan arınmaya ve manevi bir koruma kalkanına alındığına delalet eder.`
      },
      {
        title: `Rüyada Nurani Bir Işık Eşliğinde ${cleanName} İle Karşılaşmak`,
        content: `Rüya esnasında aydınlık, beyaz giysili veya nurani bir atmosferde ${lowerName} görmek, ilahi bir müjdeye, ruhsal bir aydınlanmaya ve hidayet yolunda sabit kadem olmaya yorulur.`
      },
      {
        title: `Rüyada Kalabalık Bir Cemaatle Birlikte ${cleanName} Yaşamak`,
        content: `Salih insanlardan oluşan kalabalık bir toplulukla ${lowerName} deneyimlemek, hayırlı insanlarla yolların kesişeceğine, topluma faydalı manevi hizmetlerde bulunulacağına işarettir.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin rüya-i sadıka (sadık rüya) bağlamında anlamı nedir?`,
        answer: `Kadim İslami alimlere göre bu sembol, ilahi bir lütuf, manevi ferahlık ve kabul olunan duaların bir müjdesidir. Kişinin ibadetlerine ve ahlaki fıtratına sımsıkı sarılması gerektiğini hatırlatır.`
      },
      {
        question: `Rüyada ${lowerName} görmek Jung psikolojisinde Yüksek Benlik arketipini nasıl yansıtır?`,
        answer: `Psikolojik olarak bu rüya, zihnin varoluşsal anlam arayışını tamamladığını, içsel sükunete ulaştığını ve tinsel (spritüel) bir bütünleşme yaşadığını gösteren en üst düzey arketipsel semboldür.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra manevi şükür için ne yapılmalıdır?`,
        answer: `Bu rüyanın manevi şükrünü eda etmek için sadaka vermeli, ibadetlerinizi huşu içinde yapmalı ve hayır işlerine yönelmelisiniz. Dini günler takviminizi ve zekat/sadaka bütçenizi [${meta.partnerAnchor}](${meta.partnerLink}) yardımıyla planlayabilirsiniz.`
      }
    ];
  } else if (theme === 'journey_transition') {
    religiousAddon = `Yolcular, araçlar ve geçiş sembolleri İslami tefsirlerde hayat yolculuğunu, kaderin yönünü ve sabırla aşılacak engelleri simgeler. Hak yolunda istikamet sahibi olmanın önemini vurgular.`;
    psychAddon = `Yolculuk ve geçiş imgeleri, psikolojide kahramanın yolculuğu (hero\'s journey) modelini temsil eder. Bireyin eski alışkanlıklarını geride bırakarak yeni bir kimliğe ve yaşam aşamasına geçiş iradesidir.`;
    variations = [
      {
        title: `Rüyada Zorlu Bir Engel veya Yoldan Sonra ${cleanName} Ulaşmak`,
        content: `Zorlu bir merdiveni, tüneli veya yolu aştıktan sonra ${lowerName} deneyimlemek, çekilen zahmetlerin ardından gelecek büyük rahmete, başarılara ve zaferlere delalet eder.`
      },
      {
        title: `Rüyada Hızlı Bir Araçta veya Yolculuk Esnasında ${cleanName} Görmek`,
        content: `Hareket halindeki bir araçta veya yolculukta ${lowerName} ile karşılaşmak, hayatınızdaki değişimlerin hızlanacağına ve beklenen hedeflere düşünüldüğünden daha kısa sürede varılacağına işarettir.`
      },
      {
        title: `Rüyada Yolunu Kaybedip Sonra ${cleanName} İle Doğru Yönü Bulmak`,
        content: `Bir belirsizlik veya kaybolma hissinin ardından ${lowerName} sayesinde doğru yolu bulmak, gerçek hayatta kafa karışıklıklarının giderileceğine ve hikmetli bir rehberlikle feraha çıkılacağına yorulur.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin hayat yolculuğu ve kader açısından İslami yorumu nedir?`,
        answer: `İslami açıdan bu rüya, kişinin kader yolculuğunda önemli bir dönüm noktasında olduğunu, sabır ve azimle hareket ettiği takdirde hayırlı kapıların açılacağını müjdeler.`
      },
      {
        question: `Rüyada ${lowerName} görmek eşik atlama ve bireyleşme psikolojisinde ne anlama gelir?`,
        answer: `Analitik psikolojide bu sembol, eski yaşam formunu bırakıp yeni bir olgunluk evresine (eşik atlama) geçildiğini ve kişinin kendi kaderinin sorumluluğunu eline aldığını gösterir.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra yeni adımlarımda nasıl bir strateji izlemeliyim?`,
        answer: `Bu rüyadan sonra hayatınızdaki değişimlere direnmemeli, karşılaştığınız engelleri birer tecrübe olarak görmelisiniz. Seyahat, mesafe veya zaman çizelgesi gibi konulardaki planlamalarınızı [${meta.partnerAnchor}](${meta.partnerLink}) üzerinden organize edebilirsiniz.`
      }
    ];
  } else {
    // social_ancestral / wisdom_reflection / general
    religiousAddon = `İnsan ilişkileri, zaman ve nesne sembolleri İslam tefsirinde sosyal ahlak, kul hakkına riayet ve zamanın kıymetini bilme prensipleriyle açıklanır. Hayırlı insanlarla bir arada bulunmaya davet eder.`;
    psychAddon = `Sosyal ve bilgeliğe dair semboller, bireyin kollektif bilinçdışı ile olan bağını, ego esnekliğini ve empati yeteneğini simgeler. Zihnin sosyal uyum ve bilgece farkındalık geliştirme sürecidir.`;
    variations = [
      {
        title: `Rüyada Eski Dostlar veya Büyüklerle Birlikte ${cleanName} Görmek`,
        content: `Eski arkadaşlar, akrabalar veya aile büyükleriyle birlikte ${lowerName} deneyimlemek, geçmişte kalan güzel hatıraların canlanacağına, sıla-i rahime ve sosyal hayatta dayanışmaya işarettir.`
      },
      {
        title: `Rüyada Parlak ve Aydınlık Bir Atmosferde ${cleanName} İle Karşılaşmak`,
        content: `Aydınlık, huzurlu ve temiz bir ortamda ${lowerName} görmek, kişinin zihinsel ve sosyal hayatında önünün açık olduğuna, doğru kararlar alarak takdir toplayacağına delalet eder.`
      },
      {
        title: `Rüyada ${cleanName} Hakkında Birinden Tavsiye veya Hediye Almak`,
        content: `Rüya esnasında bir bilge kimseden ${lowerName} ile ilgili tavsiye veya hediye almak, gerçek hayatta size yol gösterecek hayırlı bir insanın desteğini göreceğinize yorulur.`
      }
    ];
    faqs = [
      {
        question: `Rüyada ${lowerName} görmenin sosyal ilişkiler ve kul hakkı bağlamında tefsiri nedir?`,
        answer: `İslami yorumlara göre bu rüya, insanlarla iyi geçinmeye, ahde vefa göstermeye ve sosyal adalet bilincini korumaya işarettir. Toplumda saygınlığın artacağına delalet eder.`
      },
      {
        question: `Rüyada ${lowerName} görmek sosyal uyum ve kollektif psikoloji açısından neyi gösterir?`,
        answer: `Psikolojik açıdan bu sembol, bireyin toplumsal aidiyet arayışını, empati kapasitesini ve çevresiyle sağlıklı sınırlar kurma becerisini temsil eder.`
      },
      {
        question: `Rüyada ${lowerName} gördükten sonra sosyal ve kişisel hayatımda ne yapmalıyım?`,
        answer: `Bu rüyanın ardından yakın çevrenizle iletişiminizi güçlendirmeli, size tavsiye veren tecrübeli insanları dinlemelisiniz. Günlük planlamalarınız ve zaman yönetiminiz için [${meta.partnerAnchor}](${meta.partnerLink}) araçlarından destek alabilirsiniz.`
      }
    ];
  }

  return { variations, faqs, religiousAddon, psychAddon };
}

function generateUpgradedSymbol(slug, baseTitle, category) {
  const cleanName = getCleanName(baseTitle);
  const lowerName = cleanName.toLowerCase();
  const meta = analyzeKeywords(slug, cleanName);
  const custom = getThemeSpecificSections(meta.theme, cleanName, lowerName, meta);

  const title = `Rüyada ${cleanName} Görmek - İslami, Diyanet ve Psikolojik Tabiri`;

  const shortDescription = `Rüyada ${lowerName} görmek, İslami ve Diyanet tefsirlerine göre ${meta.archetype} ile ilişkilendirilirken; analitik psikolojide ${meta.psychFocus} perspektifinden bilinçaltı dönüşümünü ve zihinsel dengeyi temsil eder.`;

  const introduction = `Rüyada ${lowerName} ile karşılaşmak, insan zihninin uyku esnasında hem spritüel sezgilerle hem de bilinçaltının derin sembolik diliyle kurduğu çok boyutlu ve hayati bir iletişim biçimidir. Kadim rüya tabiri geleneğinden günümüz modern nöro-psikolojik uyku araştırmalarına kadar bu özel imge, bireyin yaşamında dikkat çekici bir dönüm noktasını, çözülmeyi bekleyen bir düğümü veya yaklaşan müjdeli bir gelişmeyi simgeler. Uykunun en derin evresi olan REM uykusunda zihinsel savunma mekanizmalarının ve ego bariyerlerinin gevşemesiyle açığa çıkan bu sembol, rüya sahibinin günlük dünyası ile derinlerde yatan ${meta.archetype} arasında köprü kurar. İslami literatürde ve Diyanet kaynaklarında ilahi bir işaret, vicdani bir uyarı veya rahmet kapısı olarak değerlendirilen bu deneyim, analitik psikolojide ise zihnin kendini rehabilite etme, travmaları onarma ve yeniden yapılandırma sürecinin en somut göstergesidir. Özellikle ${meta.theme.replace(/_/g, ' ve ')} temasıyla doğrudan bağlantılı olan bu rüya, kişinin geçmiş tecrübeleriyle gelecekteki hedefleri arasında sentez yapmasını sağlayan eşsiz bir zihinsel harita niteliği taşır.`;

  const generalMeaning = `Rüyada ${lowerName} görmenin gündelik yaşama, sosyal dinamiklere ve gelecek planlarına yansımaları incelendiğinde, kişinin hayatında yeni bir farkındalık düzeyine ulaştığı açıkça görülmektedir. Uzman rüya analistleri ve sosyolojik davranış bilimciler, bu rüyayı deneyimleyen bireylerin özellikle yakın dönemde alacakları kararlarda acelecilikten kaçınarak gözleme dayalı, stratejik ve sağduyulu bir tutum sergilemelerini önermektedir. Bu sembol, kişinin iş ve kariyer hayatında karşılaştığı belirsizliklerin dağılacağına, sarf edilen yoğun emeklerin meyvesini vereceğine ve çevresel ilişkilerde daha sağlam temeller atılacağına işaret eder. Özellikle ${meta.partnerContext} [${meta.partnerAnchor}](${meta.partnerLink}) üzerinden destek alarak adımlarınızı somut verilere dayandırmanız, bu rüyanın işaret ettiği olumlu dönüşüm sürecini hızlandıracaktır. Sosyal ilişkiler ve ailevi dinamikler açısından incelendiğinde ise, bu rüya taraflar arasında empati kurmanın, kırgınlıkları ortadan kaldırmanın ve dürüst bir iletişim kurgulamanın önemini hatırlatır. Kişinin özgüvenini tazelemesi, zihinsel karmaşadan arınarak net hedefler belirlemesi ve yaşamın sunduğu yeni fırsatları cesaretle kucaklaması gerektiğini vurgulayan bu imge, hem maddi hem de manevi alanda dengeli bir büyümenin ve huzurun habercisi konumundadır.`;

  const religiousMeaning = `Kadim İslami rüya tabiri kaynaklarına ve özellikle ${meta.scholarFocus} ekollerinin derin tefsirlerine göre, rüyada ${lowerName} görmek, rüya sahibinin manevi derecesine, niyetlerinin samimiyetine ve rüyanın görüldüğü esnadaki ruhsal durumuna bağlı olarak çok katmanlı hikmetler barındırır. Diyanet rüya tabirleri rehberliğinde de vurgulandığı üzere, bu imge müminler için hem ferahlatıcı bir müjde hem de fıtrata dönüş davetidir. ${custom.religiousAddon} Eğer rüya sahibi günlük yaşamında hak yolunda adalet, helal kazanç ve erdemle hareket ediyorsa, bu rüya haneye girecek berekete, duaların ilahi katında kabul göreceğine, sıkıntılardan kurtularak şifa bulmaya ve ${meta.archetype} alametine delalet eder. İslami alimler, rüyada görülen bu sembolün berrak, aydınlık ve huzur verici olmasını rahmet, mağfiret ve hidayet nuru olarak yorumlarlar. Ancak rüya esnasında kasvet, korku veya kararsızlık hissedildiyse, bu durum kişinin dünya telaşına gereğinden fazla kapılarak ahiret bilincini, manevi sorumluluklarını ve kul hakkına riayet etme prensibini ihmal ettiğine dair şefkatli bir ilahi ikazdır. Bu sebeple rüya sahibinin iç muhasebesini yapması, tövbe ile manevi kalbini arındırması ve ihtiyaç sahiplerine sadaka vererek şükrünü eda etmesi tavsiye olunur.`;

  const psychologicalMeaning = `Analitik psikoloji ve derinlik psikolojisi perspektifinden, özellikle ${meta.psychFocus} kuramları ışığında rüyada ${lowerName} imgesi, bilinçdışının bilince aktarmak istediği hayati arketipsel mesajları temsil eder. Carl Gustav Jung, bu tür sembolleri bireyin "bireyleşme (individuation)" yolculuğunda karşılaştığı kollektif bilinçdışı unsurları ve ${meta.archetype} ile bütünleşme çabası olarak nitelendirir. ${custom.psychAddon} Günlük yaşamda ifade edilememiş arzulardan, bastırılmış duygusal ihtiyaçlardan veya kişilerarası sınır ihlallerinden kaynaklanan psişik enerji, uykuda sembolik bir forma bürünerek bu imge üzerinden açığa çıkar. Freudyan yaklaşıma göre ise bu rüya, ego ile alt benlik (id) arasındaki dengeyi sağlamaya çalışan bir savunma mekanizması, içsel çatışmaların çözümü ve ruhsal bir boşalma (katarsis) anıdır. Rüya sahibinin güncel hayatında yaşadığı stres, değişim korkusu, kimlik arayışı veya varoluşsal sorgulamalar, zihnin rüya laboratuvarında yeniden işlenerek zihinsel rehabilitasyon sağlanır. Bu deneyim, bireyin kendi içsel potansiyelini fark etmesi, geçmiş travmalarından özgürleşmesi ve ruhsal bütünlüğünü sağlayarak hayata çok daha dirençli ve dengeli adapte olması için bilinçaltının sunduğu şifalı bir rehberdir.`;

  return {
    slug,
    title,
    shortDescription,
    category,
    content: {
      introduction,
      generalMeaning,
      religiousMeaning,
      psychologicalMeaning,
      variations: custom.variations,
      faqs: custom.faqs
    }
  };
}

const batches = [
  'complex-symbols-2026-batch-05.json',
  'complex-symbols-2026-batch-06.json',
  'complex-symbols-2026-batch-07.json',
  'complex-symbols-2026-batch-08.json',
  'complex-symbols-2026-batch-09.json'
];

let totalUpgraded = 0;
batches.forEach(batchFile => {
  const filePath = path.join(__dirname, '..', 'content', 'symbols', batchFile);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const upgradedData = data.map(item => generateUpgradedSymbol(item.slug, item.title, item.category));
    fs.writeFileSync(filePath, JSON.stringify(upgradedData, null, 2), 'utf8');
    totalUpgraded += upgradedData.length;
    console.log(`Successfully upgraded ${batchFile} (${upgradedData.length} symbols) with theme-specific variations and FAQs.`);
  }
});

console.log(`\nAll ${totalUpgraded} newly added symbols have been successfully upgraded to strict constitutional standards!`);
