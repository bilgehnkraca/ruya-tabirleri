import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updates = [
  {
    slug: 'balik',
    title: 'Rüyada Balık Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada balık görmek; rızık, kısmet, bereket, ganimet, evlilik ve içsel dinginlik anlamına gelen, rüya tabirlerindeki en aydınlık ve şanslı sembollerden biridir.',
    content: {
      introduction: 'Su, tüm yaşamın kaynağıdır; balık ise o kaynağın içinde yaşayan, ondan beslenen ve bereketin doğrudan vücut bulmuş halidir. Rüyada balık görmek, istisnasız tüm rüya yorumcuları tarafından en büyük kısmet, en saf şans ve en hayırlı rızık olarak kabul edilir. İster denizden yeni çıkmış taze bir balık olsun, ister denizin dibinde yüzen renkli balıklar olsun, bu sembol genellikle maddi ve manevi anlamda hayatınıza girecek muazzam bir zenginliği temsil eder. Aynı zamanda su altı (bilinçaltı) dünyasına ait oldukları için, kişinin derinlerde yatan içgüdülerini, gizli duygularını ve sezgisel bilgeliğini de simgelerler.',
      generalMeaning: 'Rüyasında balık gören veya yakalayan kişinin hayatına çok yakında, hiç beklemediği bir yerden helal ve büyük bir rızık girer. Balıkların sayısı biliniyorsa (bir, iki, üç gibi) genellikle kadınlara, kız çocuklarına veya evliliğe yorulur. Ancak balıkların sayısı bilinmeyecek kadar çoksa, bu sayılamayacak büyüklükteki bir ganimete, servete ve hiç bitmeyecek bir berekete delalet eder. Rüyada balık tutmak, rüya sahibinin kendi emeği ve zekasıyla büyük bir kazanç elde edeceğine, eline geçecek çok büyük bir fırsata işaret eder. Büyük balık, devlet büyüklerinden, önemli makamlardan gelecek devasa bir faydaya; küçük balıklar ise ufak ama sürekli gelecek olan sevindirici haberlere ve küçük kazançlara yorulur. Rüyada canlı ve taze balık yemek çok hayırlıyken, kokmuş veya çürümüş balık görmek haram mala, dedikoduya veya hayal kırıklığına işaret edebilir.',
      variations: [
        {
          title: 'Rüyada Balık Tutmak',
          content: 'Elinize oltanızı veya ağınızı alıp balık tuttuğunuzu görmek, nasibinizi arama yolunda attığınız adımların karşılıksız kalmayacağına işarettir. Temiz bir suda balık tutmak, helal kazanca ve başarıya; bulanık suda balık tutmak ise zorluklarla, hileyle veya büyük bir stresle elde edilecek bir kazanca yorulur.'
        },
        {
          title: 'Rüyada Büyük Balık (Yunus, Balina) Görmek',
          content: 'Devasa balıklar görmek, çok büyük bir devlet işine, mirasa veya çok saygın bir insanın himayesine girmeye delalet eder. Yunus balığı özellikle çok merhametli, bilgili ve şans getiren bir dosta veya rehbere işaret eder. Rüya sahibinin çok büyük bir korkusunu yenip, muazzam bir içsel güce kavuştuğunu gösterir.'
        },
        {
          title: 'Rüyada Pişmiş Balık Yemek',
          content: 'Hazır, emek sarf etmeden elde edilecek bir mala veya mirasa yorulur. Pişmiş balık, pişmiş (olgunlaşmış) bir fırsattır. Uzun süredir beklenen bir işin nihayet onaylanması, davanın lehinize sonuçlanması veya sınavın kazanılması anlamına gelir.'
        },
        {
          title: 'Rüyada Ölü Balık Görmek',
          content: 'Büyük bir fırsatın göz göre göre elden kaçtığına, kişinin tembelliği veya dikkatsizliği yüzünden kısmetinin kapandığına işaret eder. Bazen de çok heves edilen bir işin son anda iptal olmasına ve yaşanacak sükutu hayale (hayal kırıklığına) yorulur.'
        },
        {
          title: 'Rüyada Balığın Sudan Çıkması / Karada Çırpınması',
          content: 'Kişinin kendi doğal ortamından (rahatlık alanından) uzaklaştığını, yabancı bir çevrede veya işte zorlandığını, adeta "sudan çıkmış balığa" döndüğünü gösterir. Aynı zamanda rızkın elde edilmesinde çekilecek çok büyük bir zorluğa işaret eder.'
        }
      ],
      religiousMeaning: 'İslami rüya tabiri kaynaklarında balık (sayısı biliniyorsa) kadın veya eş olarak, sayısı bilinmiyorsa ganimet (mal) olarak geçer. Nablusi\'ye göre taze balık bekar için evliliğe, evli için çocuk sahibi olmaya yorulur. Yunus (A.S.)\'ın balığın karnında kalması kıssasına atıfla; rüyada büyük bir balığın karnına girdiğini görmek veya balık tarafından yutulmak, çok büyük bir imtihandan geçmeye, bir süre hapis veya karanlık bir dönem yaşamaya ancak sonunda mutlaka selamate ve büyük bir manevi mertebeye ulaşmaya delalet eder. Tuzlu balık yemek veya görmek ise bazen keder, hastalık veya çok zorlu bir yolculuk olarak yorumlanmıştır.',
      psychologicalMeaning: 'Jung psikolojisinde balıklar, suyun derinliklerinde (yani kolektif bilinçaltında) yüzen düşünceler, arketipler ve yaratıcı enerjilerdir. Rüyada derin sudan bir balık çıkarmak, bilinçaltınızdan bilincinize taşıdığınız yeni bir fikri, aydınlanmayı veya içinizdeki yaratıcı gücün uyanışını temsil eder. Ayrıca balık sembolü Hristiyanlıkta ve diğer eski kültürlerde ruhun ve ilahi gerçeğin bir simgesidir; bu nedenle rüyada altın veya çok parlak renkli balıklar görmek, kişinin ruhsal olarak çok yüksek bir uyanış ve huzur evresine girdiğini gösterir.',
      faqs: [
        {
          question: 'Rüyada uçan balık görmek ne anlama gelir?',
          answer: 'Sınırları aşan bir başarıya işarettir. Beklentilerinizin çok ötesinde, imkansız gibi görünen bir hayalinizin gerçekleşeceğine ve hayretler içinde kalacağınıza yorulur.'
        },
        {
          question: 'Akvaryum balığı görmek ile deniz balığı görmek arasındaki fark nedir?',
          answer: 'Akvaryum balığı kontrol altındaki, evcil ve sınırlı bir kısmeti (örneğin düzenli bir maaşı veya ev içindeki küçük sevinçleri) temsil ederken; deniz balığı çok daha büyük, sınırsız ve özgür bir kısmeti (ticaret, büyük girişim) simgeler.'
        },
        {
          question: 'Rüyada balık temizlemek (pullarını kazımak) ne demektir?',
          answer: 'Zor kazanılan bir paranın veya fırsatın önündeki engelleri (pürüzleri) kendi emeğinizle temizlediğinize, zor kısmını halledip yakında sefasını süreceğinize işarettir.'
        }
      ]
    },
    relatedSymbols: ['su', 'deniz', 'altin']
  },
  {
    slug: 'deprem',
    title: 'Rüyada Deprem Görmek',
    category: 'doga',
    shortDescription: 'Rüyada deprem görmek; köklü değişimleri, sarsıcı haberleri, hayatın temel taşlarının yerinden oynamasını, ego yıkımını ve radikal dönüşümleri sembolize eder.',
    content: {
      introduction: 'Deprem, doğanın en sarsıcı, en kontrol edilemez ve en ürkütücü güçlerinden biridir. Uyanık hayatta bastığımız zemin ne kadar sağlamsa, kendimizi o kadar güvende hissederiz. Rüyada bu zeminin ayaklarımızın altından kaydığını, evlerin sallandığını görmek; kişinin "temel güvenlik (basic trust)" duygusunun sarsıldığı, hayatının merkezine koyduğu inançların, ilişkilerin veya kariyerin büyük bir risk altında olduğu hissiyatının dışa vurumudur. Ancak deprem sadece bir yıkım değil, aynı zamanda eski ve çürümüş yapıların yıkılıp yerine yenilerinin yapılabileceği zorunlu bir "alan açma" (dönüşüm) sürecidir.',
      generalMeaning: 'Rüya tabirlerinde deprem (zelzele) genellikle uyanık hayatta yaşanacak çok büyük, ani ve sarsıcı bir değişime işaret eder. Bu değişim, uzun süredir çalıştığınız bir işten aniden çıkarılmak, bir ilişkinin aniden bitmesi veya taşınmak gibi köklü olaylar olabilir. Rüyada sadece yerin sallandığını ancak bir şeyin yıkılmadığını görmek, korkutucu ama zararsız bir haber alınacağına, büyük bir stres yaşanacağına ancak sonunda işlerin yoluna gireceğine yorulur. Ancak binaların yıkıldığını, yerin yarıldığını görmek, kişisel veya toplumsal çapta büyük bir felakete, iflaslara, devlet büyüklerinden gelecek sıkıntılı kararlara veya ciddi bir hastalığa delalet eder. Dağların sarsıldığını görmek, o bölgedeki önemli ve güçlü kişilerin yaşayacağı krizlere işaret eder. Olumlu açıdan bakıldığında deprem, kişinin yıllardır içine hapsolduğu konfor alanının yıkılması ve mecburi (ama sonu hayırlı olacak) bir ruhsal büyüme sürecine girmesidir.',
      variations: [
        {
          title: 'Rüyada Depremden Sağ Kurtulmak',
          content: 'Bu rüya, rüya sahibinin hayatında yaşanacak muazzam bir krizin, boşanmanın veya iflasın altından kendi dirayetiyle, burnu bile kanamadan kalkacağına işarettir. Çok zorlu bir sınavı başarıyla geçeceğinizi ve bu krizden eskisinden çok daha güçlü çıkacağınızı müjdeler.'
        },
        {
          title: 'Rüyada Enkaz Altında Kalmak',
          content: 'Gerçek hayatta altından kalkması çok zor olan bir borcun, iftiranın veya psikolojik baskının (depresyonun) altında ezildiğinizi gösterir. Hayatın üstünüze üstünüze geldiği, nefes almakta zorlandığınız ve çaresiz hissettiğiniz bir dönemi yansıtan çok güçlü bir uyarıcı rüyadır.'
        },
        {
          title: 'Rüyada Sadece Kendi Evinin Sallandığını Görmek',
          content: 'Dış dünyada her şey sakinken sadece kendi evinizin veya odanızın sallandığını görmek, toplumsal değil tamamen ailevi veya içsel bir krize işaret eder. Eşler arasındaki çok şiddetli bir tartışmaya, hanedeki bir hastalığa veya sadece sizin bildiğiniz derin bir sırrın açığa çıkma korkusuna yorulur.'
        },
        {
          title: 'Rüyada Yerin Yarıldığını Görmek',
          content: 'Eski sırların ortaya çıkması, gizlenen günahların veya yalanların artık saklanamayacak hale gelmesi demektir. Aynı zamanda kişinin adeta "yer yarılsa da içine girsem" dediği büyük bir utanç veya korku duygusunun rüyadaki somut karşılığıdır.'
        },
        {
          title: 'Rüyada Deprem Olurken Dua Etmek / Şehadet Getirmek',
          content: 'Büyük bir kriz anında kişinin maneviyatına, inancına ve köklerine sarılacağına, başına gelen felaketi tevekkülle karşılayıp bu sayede manevi olarak çok yüksek bir dereceye (arınmaya) ulaşacağına delalet eder.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabirlerinde zelzele (deprem), Allah\'ın celal sıfatının bir tecellisi, toplumsal bir ikaz, devlet yöneticilerinden gelecek korku (baskı) veya o bölgeye inecek olan kıtlık, hastalık (taun) gibi musibetler olarak tabir edilir. Nablusi, bir bölgede deprem olduğunu görmenin, oranın halkı arasında fitne çıkacağına, gizli sırların açığa çıkacağına veya yöneticilerin değişeceğine işaret ettiğini belirtir. Ancak bazen rüyada sadece yerin sarsılması, o topraklara gelecek olan bereketin (toprağın uyanmasının) ve tarımsal bolluğun da gizli bir müjdecisi olarak yorumlanmıştır.',
      psychologicalMeaning: 'Psikanalizde deprem, ego (benlik) yapısının çöküşüdür. Üzerine kimliğinizi inşa ettiğiniz, "ben buyum" dediğiniz inançların, dogmaların ve savunma mekanizmalarının yıkılmasıdır. Hayatınızda büyük bir paradigma değişimi (midlife crisis gibi) yaşıyorsanız, bilinçaltınız bu radikal içsel devrimi bir deprem olarak sahneler. Deprem, bastırılmış travmaların ve devasa duygusal enerjilerin fay hatlarından kırılarak yüzeye çıkmasıdır. Korkutucu olsa da, bu rüya "gerçek olmayan, çürük temelli her şeyin yıkılmasına izin ver ki, yerine sağlamını inşa edebilesin" diyen bilgece bir psikolojik davettir.',
      faqs: [
        {
          question: 'Hamile bir kadının deprem rüyası görmesi ne anlama gelir?',
          answer: 'Genellikle fiziksel olarak doğuma (bedenin sarsılmasına ve bebeğin dünyaya gelmesine) veya annelik hormonlarının getirdiği aşırı duygusal sarsıntılara yorulan psikolojik bir rüyadır.'
        },
        {
          question: 'Depremi önceden hissetmek veya rüyada deprem olacağını bilmek nedir?',
          answer: 'Kuvvetli sezgilerinizin uyanık hayatta yaklaşmakta olan bir krizi (örneğin iş yerindeki bir kovulmayı veya ilişkideki bir aldatmayı) önceden sezdiğine, ancak bunu bilincinize henüz kabul ettiremediğinize işarettir.'
        },
        {
          question: 'Rüyada deprem anında denizin taşması (tsunami) görmek nasıl tabir edilir?',
          answer: 'Depremle sarsılan mantığınızın (toprak), kontrol edilemez duygular (tsunami/su) tarafından tamamen işgal edildiğine işarettir. Büyük bir öfke krizinin veya derin bir kederin hayatınızı ele geçirmesidir.'
        }
      ]
    },
    relatedSymbols: ['su', 'deniz', 'ev']
  },
  {
    slug: 'cinsellik',
    title: 'Rüyada Cinsellik (Cima) Görmek',
    category: 'eylemler',
    shortDescription: 'Rüyada cinsellik görmek; sanılanın aksine sadece bedensel dürtüleri değil, iki farklı enerjinin, fikrin veya ortaklığın birleşmesini, dünyevi hedeflere ulaşmayı ve güç kazanmayı sembolize eder.',
    content: {
      introduction: 'Rüyalarda cinsellik, kişinin uyanık hayatta en çok utandığı, gizlediği veya uyanır uyanmaz suçluluk hissettiği temaların başında gelir. Ancak rüya dili mecazlarla doludur ve cinsellik sembolizmi, çoğunlukla erotik bir arzudan ziyade "birleşme", "ortaklık kurma", "güç aktarımı" ve "yaratıcılık" anlamına gelir. Bir kimseyle cinsel ilişkiye girmek, onunla bir konuda ortaklık yapmaya, onun huyunu veya yeteneklerini özümsemeye (içselleştirmeye) ya da uyanık hayattaki bir hedefinize tutkuyla bağlanmaya işaret eder. Rüyada görülen cinsel eylemler, bilinçaltının dünyevi arzuları, hırsları ve insanlarla olan güç dinamiklerini ifade etmek için kullandığı en çıplak ve doğrudan metafordur.',
      generalMeaning: 'Rüya tabiri kaynaklarının neredeyse tamamında, rüyada tanınan biriyle cinsel ilişkiye girmek (cima), o kişiyle yapılacak çok kârlı bir iş ortaklığına, yardımlaşmaya, o kişiden görülecek büyük bir menfaate veya iki tarafın birbirinin sırrına vakıf olmasına yorulur. Eşiyle veya sevdiği kişiyle ilişkiye girdiğini görmek, aradaki sevgi bağının güçlenmesine, hane içindeki huzura ve murada ermeye delalet eder. Rüyada tanınmayan, yabancı biriyle ilişkiye girmek, kişinin hiç beklemediği bir yerden gelecek büyük bir kısmete, dünya nimetlerine ve başarıya ulaşmasına yorulur. Çünkü yabancı kişi "dünya" veya "talih" olarak kabul edilir. Ancak rüyada ölüyle, yasaklı (mahrem) kişilerle veya hayvanlarla cinsel ilişki gibi sapkın görünen durumlar; rüya sahibinin çaresizliğine, imkansız veya haram bir işin peşinden koşmasına, büyük bir günaha yaklaşmasına veya iç dünyasında yaşadığı ağır bir ahlaki çatışmaya (gölge arketipi) dair sarsıcı ikazlardır.',
      variations: [
        {
          title: 'Rüyada Eşiyle Cinsel İlişkiye Girmek',
          content: 'Aralarındaki muhabbetin, güvenin ve sadakatin çok yüksek olduğuna işarettir. Beklenen bir işin çok kolay ve zevkli bir şekilde hallolacağına, eşlerin birbirlerinin dertlerine derman olacağına ve hane içindeki bereketin artacağına yorulur.'
        },
        {
          title: 'Rüyada Patron veya Otorite Figürüyle Birlikte Olmak',
          content: 'Erotik bir anlam taşımaz. Kişinin uyanık hayatta güç, makam ve onaylanma arzusu içinde olduğunu gösterir. Patrondan görülecek büyük bir desteğe, terfi almaya veya o kişinin mesleki özelliklerini kendi karakterinize entegre ettiğinize işaret eder.'
        },
        {
          title: 'Rüyada Zorla İlişkiye Girmek (Tecavüz)',
          content: 'Rüya sahibinin iradesinin uyanık hayatta başka biri veya bir kurum tarafından gasp edildiğini gösterir. İstemediğiniz bir işi yapmaya zorlandığınızı, sınırlarınızın ihlal edildiğini ve hayatınızın kontrolünü kaybettiğinizi hissettiğiniz, psikolojik şiddet içeren bir döneme yorulur.'
        },
        {
          title: 'Rüyada Cinsellik Sırasında İzlenmek',
          content: 'Özel hayatınıza, mahremiyetinize ve sırlarınıza başkalarının müdahale etmesinden duyduğunuz korkuyu yansıtır. Aynı zamanda çok gizli yürüttüğünüz kârlı bir projenin (veya ilişkinin) dedikodusunun yapıldığına, nazara veya hasete maruz kalacağınıza işaret eder.'
        },
        {
          title: 'Rüyada Cinsiyet Değiştirmiş Olarak İlişkiye Girmek',
          content: 'Erkeğin kadın, kadının erkek formunda olması; Jungiyen psikolojide erkeğin içindeki "Anima" (dişil enerji, sezgi) ve kadının içindeki "Animus" (eril enerji, mantık, eylem) arketiplerinin dengelenme çabasını simgeler. Karakterinizde eksik olan yönü tamamladığınıza yorulur.'
        }
      ],
      religiousMeaning: 'İslami rüya tabiri âlimlerinden İbn Şirin\'e göre rüyada cima (cinsel ilişki), kişinin niyet ettiği işe ulaşması, dünya nimetlerinden faydalanması ve makam sahibi olması demektir. Rüyada genç ve güzel bir kadınla ilişkiye giren kişi, dünyanın güzelliklerine ve servete nail olur. Çirkin veya yaşlı biriyle cima etmek, üzüntüye, keder ve imkansız hedeflere yorulur. Ancak rüyada ihtilam olmak (yani uykuda gerçekten boşalmak/gusül gerektiren duruma düşmek), İslami tabir geleneğinde "şeytani rüya" (hulm) sınıfına girer ve bu rüyanın tabiri yapılmaz; zira rüya sadece fizyolojik bir ihtiyacın sonucudur ve manevi bir sembol içermez.',
      psychologicalMeaning: 'Sigmund Freud, rüyaların temelinde bastırılmış cinselliğin (Libido) yattığını savunsa da; modern rüya analizcileri cinsel rüyaları "entegrasyon" (bütünleşme) olarak okur. Rüyada biriyle sevişmek, o kişinin uyanık hayatta sahip olduğu ve sizin kendinizde eksik bulduğunuz nitelikleri (örneğin; cesaret, zeka, sosyallik, rahatlık) bilinçaltı düzeyde kendi karakterinize "katma/bütünleştirme" çabanızdır. Ayrıca, bastırılmış yaratıcılığın ve bedensel enerjinin uyanışı anlamına da gelir. Ahlaken sizi rahatsız eden cinsel tabuları rüyada yaşamak, içinizdeki vahşi doğanın, kuralları reddeden "Gölge" (Shadow) arketipinin güvenli bir şekilde rüya ortamında deşarj edilmesidir.',
      faqs: [
        {
          question: 'Rüyada yakın bir arkadaşımla (dostumla) ilişkiye girmem, ona aşık olduğum anlamına mı gelir?',
          answer: 'Hayır, nadiren romantik bir anlam taşır. Çoğu zaman bu, o kişiyle aranızdaki dostluk bağının, güvenin ve samimiyetin zirvede olduğunu veya onun bir özelliğine (örneğin zekasına) hayranlık duyduğunuzu gösterir.'
        },
        {
          question: 'Rüyada eski sevgiliyle veya eşle cinsellik görmek ne demektir?',
          answer: 'O kişiyle olan meselenizin (hesabınızın) henüz kapanmadığına, geçmişte kalan duyguların hala içinizde aktif olduğuna veya o döneme ait bir hatayı (veya başarıyı) bugün tekrar ettiğinize yorulur.'
        },
        {
          question: 'Rüyada cinselliğin yarım kalması ne anlama gelir?',
          answer: 'Gerçek hayatta çok heveslendiğiniz, sonuna yaklaştığınızı düşündüğünüz bir projenin, anlaşmanın veya ilişkinin son anda dış bir etken yüzünden sekteye uğramasına (engellenmesine) işarettir.'
        }
      ]
    },
    relatedSymbols: ['hamile-olmak', 'yilan', 'bebek']
  },
  {
    slug: 'agac',
    title: 'Rüyada Ağaç Görmek',
    category: 'doga',
    shortDescription: 'Rüyada ağaç görmek; kökleri geçmişe, dalları geleceğe uzanan insan ömrünü, aileyi, bereketi, ruhsal büyümeyi ve kişinin toplum içindeki sağlam duruşunu sembolize eder.',
    content: {
      introduction: 'Ağaç, mitolojiden dinlere, psikolojiden edebiyata kadar insanlığın en kadim ve en evrensel sembolüdür (Hayat Ağacı). Rüyada ağaç görmek, doğrudan rüya sahibinin kendisini, ömrünü, aile ağacını (soyunu) ve dünyadaki dik duruşunu temsil eder. Toprağın derinliklerine inen kökler geçmişinizi, inançlarınızı ve atalarınızı; gövde şu anki karakterinizi ve gücünüzü; yapraklar ve meyveler ise eylemlerinizi, kazancınızı ve geleceğe bıraktığınız mirası simgeler. Yemyeşil, ulu bir ağaç görmek huzur ve bereket dolu uzun bir ömre işaret ederken; kurumuş veya kesilmiş bir ağaç, enerjinin çekilmesine, ailevi bağların kopmasına veya yaklaşan bir kayba dair çok derin ve bilgece bir mesaj taşır.',
      generalMeaning: 'Rüya tabirlerinin tamamında ağaç, uyanık hayattaki büyük ve faydalı bir insana, bazen bizzat rüya sahibinin karakterine, bazen de bereketli bir işe yorulur. Rüyada meyve veren, yeşil yapraklı bir ağaç görmek, kişinin kazancının helal ve bol olacağına, çocuklarının veya eserlerinin ona gurur vereceğine, toplum içinde gölgesine sığınılan (yardımsever) asil bir insan olacağına delalet eder. Mevsiminde yeşermiş bir ağaç, umutların yeşermesine ve murada ermeye; kurumuş yapraksız bir ağaç ise fakirliğe, yalnızlığa, hastalığa veya ümitsizliğe işarettir. Rüyada ağaç dikmek, yeni bir iş kurmaya, evlenmeye veya evlat sahibi olmaya (köksalmaya) yorulur. Ağaca çıkmak veya tırmanmak, korkuları yenip çok yüksek bir makama erişmeye, büyük bir liderin himayesine girmeye delalet eder.',
      variations: [
        {
          title: 'Rüyada Meyveli Ağaç (Örn: Elma, İncir Ağacı) Görmek',
          content: 'Ağacın üzerinde taze ve lezzetli meyveler görmek, yürüttüğünüz projelerin, verdiğiniz emeklerin muazzam bir başarıyla (meyveyle) sonuçlanacağına işarettir. Kazancın bereketli, helal ve zahmetsiz olmasına, aynı zamanda salih ve hayırlı evlatlara yorulur.'
        },
        {
          title: 'Rüyada Ağacın Kuruması veya Kesilmesi',
          content: 'Ailedeki çok değerli, ulu bir çınar (baba, dede gibi bir otorite figürü) sayılan kişinin vefatına veya ağır bir hastalığına yorulabilen uyarıcı bir rüyadır. Kendi ağacınızın kuruduğunu görmek, ruhsal bir çöküşe, rızkın kesilmesine veya inancın zayıflamasına delalet eder.'
        },
        {
          title: 'Rüyada Ağaç Dalının Kırılması',
          content: 'Ağaç dalı çocukları, kardeşleri veya güvendiğiniz yakın dostları temsil eder. Dalın kırılması, aile üyelerinden biriyle yaşanacak büyük bir küslüğe, kopuşa veya onların başına gelecek hafif bir sıkıntıya işaret eder.'
        },
        {
          title: 'Rüyada Evin İçinde Ağaç Çıkması',
          content: 'Evin tam ortasında ulu bir ağacın büyümesi, o haneden çok büyük bir ilim adamının, liderin veya çok zengin birinin çıkacağına, o ailenin isminin nesiller boyu övgüyle anılacağına (kök salacağına) dair muhteşem bir müjdedir.'
        },
        {
          title: 'Rüyada Ağaç Köklerini Görmek',
          content: 'Toprak altındaki kökleri görmek, kişinin geçmişini sorguladığına, aile sırlarına, ata mirasına veya kendi bilinçaltının çok derinlerine (temellerine) inmeye başladığına işaret eder. Kendini tanıma yolculuğunda temellerin sağlam atıldığını gösterir.'
        }
      ],
      religiousMeaning: 'İslami tabir kaynaklarında her ağacın farklı bir karakteri vardır. Hurma ağacı görmek asil, cömert ve alim bir insana (veya mümin birine); ceviz ağacı cimri ve çetin bir adama; zeytin ağacı mübarek, ilim sahibi bir aileye veya nura; çam ağacı ise şan ve şöhrete yorulur. Kur\'an\'da geçen Tuba ağacını görmek, ahiret saadetine ve cennetlik amellere; Zakkum ağacı görmek ise haram kazanca ve ilahi azaba delalet eder. Rüyada bir ağacın yapraklarını toplamak, helal para biriktirmeye; ağacın kökünden sökülmesi ise bir yöneticinin veya büyük bir alimin görevden alınmasına / vefatına yorulur.',
      psychologicalMeaning: 'Carl Jung için ağaç, kişisel gelişim sürecinin (İndividüasyon) kusursuz bir haritasıdır. Kökleriyle karanlık bilinçaltına (toprağa) inen, dallarıyla aydınlık bilince (gökyüzüne) uzanan ağaç, insanın zıtlıklarını kendi içinde nasıl birleştirmesi gerektiğini gösterir. Rüyada ağacınızın ne durumda olduğu, şu anki ruh halinizin bir röntgenidir. Eğik, cılız bir ağaç ezikliği ve travmaları; dimdik, devasa bir ağaç ise sarsılmaz bir özgüveni ve bilgeliği temsil eder. Orman içinde bir ağaç olmak, toplum (kolektif) içindeki yerinizi ve diğer insanlarla bağınızı nasıl algıladığınızı gösterir.',
      faqs: [
        {
          question: 'Rüyada sonbaharda yaprak döken bir ağaç görmek kötü müdür?',
          answer: 'Hayır. Yaprak dökümü doğal bir döngüdür. Hayatınızdaki eski ve işe yaramaz alışkanlıkları, sahte dostları ve yorgunlukları geride bıraktığınızı, kıştan sonra gelecek olan taze bir bahara (yenilenmeye) hazırlandığınızı gösterir.'
        },
        {
          question: 'Karanlık ve korkutucu bir ormanda ağaçlar arasında kaybolmak ne demek?',
          answer: 'Bilinçaltının kaotik labirentinde kaybolduğunuzu, uyanık hayatta yönünüzü kaybettiğinizi ve derin bir kimlik veya anlam krizi (existential crisis) yaşadığınızı yansıtır.'
        },
        {
          question: 'Bir ağacın çiçek açtığını (örneğin badem veya kiraz çiçeği) görmek nedir?',
          answer: 'Ruhsal olarak tam bir uyanış, masumiyet, taze bir aşk ve umutların en güzel şekilde çiçeklenmesi demektir. Çok zarif ve hassas bir sevincin habercisidir.'
        }
      ]
    },
    relatedSymbols: ['su', 'ev', 'ates']
  },
  {
    slug: 'deniz',
    title: 'Rüyada Deniz Görmek',
    category: 'doga',
    shortDescription: 'Rüyada deniz görmek; muazzam bir bereketi, devlet kapısını, sınırsız idealleri, engin bir iç dünyayı ve insanın hayat karşısındaki ruhsal dalgalanmalarını temsil eden devasa bir arketiptir.',
    content: {
      introduction: 'Deniz, hem uçsuz bucaksız enginliğiyle sonsuz bir huzurun ve özgürlüğün kaynağı, hem de fırtınalı dalgalarıyla yutucu, korkutucu bir gücün merkezidir. Rüyalar aleminde deniz görmek, kişinin karşı karşıya olduğu hayatın (veya bilinçaltının) büyüklüğünü temsil eder. Denizin durumu (dalgasız, fırtınalı, berrak, bulanık) sizin şu anki ruhsal halinizin ve hayat yolculuğunuzun en net aynasıdır. Rüyada deniz, genellikle ulaşılamaz sanılan çok büyük hedefleri, devlet adamlarını, muazzam bir maddi zenginliği ve bitmek tükenmek bilmeyen bir manevi ilmi sembolize eder. Su, duyguların elementidir; dolayısıyla devasa bir su kütlesi olan deniz, içinizdeki en derin, en güçlü hislerin ve potansiyelin yansımasıdır.',
      generalMeaning: 'Rüya tabirlerinin ittifakla kabul ettiği üzere, rüyada büyük, temiz, dalgasız ve sakin bir deniz görmek, muratların en büyüğüne ermeye, devlet kademesinde veya iş hayatında muazzam bir güce (yetkiye) kavuşmaya, bitmez tükenmez bir zenginliğe ve gönül huzuruna işarettir. Rüyasında deniz suyundan içtiğini gören kişi, ilim, hikmet veya çok büyük bir makam sahibi olur. Denizin üzerinde yürümek, mucizevi bir inanca, şüphelerden arınmaya ve korkulan her şeyden emniyette olmaya delalet eder. Ancak denizin dalgalı, fırtınalı veya bulanık olması; hayatınızda yaşanacak şiddetli karmaşaya, devlet veya otorite figürleriyle yaşanacak krizlere, korku ve şiddete işaret eder. Rüyada denizde boğulduğunu veya dibe battığını görmek, dünya hayatının dertleri veya günahları (dünya denizi) içinde kaybolmaya, maddi/manevi bir yıkıma yorulurken; boğulmaktan son anda kurtulmak, çok büyük bir beladan tövbe veya yardım ile kurtuluşa ermeyi müjdeler.',
      variations: [
        {
          title: 'Rüyada Sakin ve Çarşaf Gibi Deniz Görmek',
          content: 'Zihnin ve ruhun tam bir denge (homeostaz) ve sükunet içinde olduğuna işarettir. Atılacak adımlarda engellerin kalktığını, ferahlık ve güven içinde hedefe ulaşılacağını gösterir. Adeta hayatın size gülümsemesi ve tüm kapıların açılmasıdır.'
        },
        {
          title: 'Rüyada Fırtınalı, Dev Dalgalı Deniz Görmek',
          content: 'İçsel olarak yaşanan çok büyük öfke patlamalarının, bastırılamayan krizlerin ve dış dünyada mücadele etmek zorunda kalacağınız zorba veya baskıcı rakiplerin varlığına yorulur. Duygusal (su) olarak boğulma tehlikesi geçirdiğinizin göstergesidir.'
        },
        {
          title: 'Rüyada Denizde Yüzmek',
          content: 'Kendi çabanızla, azminizle ve aklınızla hayatta yol aldığınıza, büyük ve zor bir projeyi başarmak üzere olduğunuza işarettir. Eğer rahatça yüzüyorsanız hedefe kolay varacaksınız; ancak yüzmekte zorlanıyor veya akıntıya karşı kürek çekiyorsanız, başarıya ulaşmadan önce çok çile çekeceğinize delalet eder.'
        },
        {
          title: 'Rüyada Denizin Kuruması veya Çekilmesi (Cezir)',
          content: 'Büyük bir talihsizliğe, o bölgedeki bereketin veya devlet gücünün zayıflamasına, ekonomik bir krize yorulur. Bireysel anlamda ise kişinin yaratıcılığının (ilhamının) tükenmesi, manevi bir kuraklık ve umutsuzluk içine girmesi demektir.'
        },
        {
          title: 'Rüyada Denizden Bir Şey Çıkarmak (İnci, Mercan vb.)',
          content: 'İlim öğrenmeye, çok kıymetli ve gizli bir bilgiye (sırra) vakıf olmaya veya hiç beklenmeyen, eşsiz değerde maddi bir ganimete (helal rızka) sahip olmaya yorulur. Kendi içinizdeki (bilinçaltınızdaki) muazzam bir yeteneği keşfetmenizin sembolüdür.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya âlimleri (örneğin İbn Şirin) denizi; sultan, adil veya zalim bir yönetici, büyük bir âlim veya muazzam bir zenginlik olarak yorumlar. Denizin suyu tatlıysa adil ve iyi bir lidere; acı ve tuzluysa zalim ve zorba bir yöneticiye delalet eder. Rüyada deniz suyunu tamamen içip bitirdiğini görenin, yeryüzünün saltanatına veya benzersiz bir ilme sahip olacağına inanılır. Deniz, aynı zamanda dünyayı temsil eder; kim dünyada boğulursa ahiretini kaybeder. Rüyada denizden abdest aldığını gören kişi, devlet adamları eliyle veya çok büyük bir vesileyle korkularından, günahlarından ve dertlerinden arınarak şifa bulur.',
      psychologicalMeaning: 'Jung ekolünde deniz, "Kolektif Bilinçdışının" en saf ve en büyük sembolüdür. Sınırları olmayan, gizemli, karanlık derinliklerinde canavarlar (korkular) ve hazineler (arketipler) barındıran deniz, bizim en derin ruhsal varlığımızdır. Rüyada denizin kıyısında durmak, bilincin bilinçdışıyla karşılaşma (yüzleşme) anıdır. Deniz korkusu (talassofobi) içeren rüyalar, kişinin kendi derinliklerine inmekten, kontrolü kaybetmekten veya yoğun duygular tarafından yutulmaktan duyduğu korkuyu simgeler. Denize dalmak ise, bir psikanaliz sürecine, içsel bir keşfe (insight) ve kendini bilme (self-discovery) yolculuğuna gönüllü çıkışın harika bir metaforudur.',
      faqs: [
        {
          question: 'Rüyada gece karanlığında deniz görmek ne anlama gelir?',
          answer: 'Belirsizliğe, gelecekle ilgili büyük korkulara ve depresif duygulara işaret eder. Karanlık deniz, neyle karşılaşacağınızı bilmediğiniz bir döneme (örneğin yeni bir şehre taşınma, riskli bir iş) girmekten duyulan endişedir.'
        },
        {
          question: 'Uçsuz bucaksız denizin ortasında bir gemide veya adada olmak nedir?',
          answer: 'Hayat denizinde kendinizi çok yalnız ve izole hissettiğinizi, ancak yine de batmadığınızı ve hayatta kaldığınızı gösterir. Büyük bir kalabalığın içinde yalnız hissetmenin (yabancılaşmanın) rüyadaki karşılığıdır.'
        },
        {
          question: 'Rüyada denizin dibini (kumunu veya balıkları) çok net, berrak görmek nasıl yorumlanır?',
          answer: 'Zihninizin çok açık olduğu, hayatınızdaki en karmaşık problemleri (bilinçaltınızın diplerini) bile net bir şekilde görebildiğiniz ve çözdüğünüz harika bir ruhsal uyanış evresinde olduğunuza müjdedir.'
        }
      ]
    },
    relatedSymbols: ['su', 'balik', 'olum']
  }
];

updates.forEach(updatedSymbol => {
  const index = symbols.findIndex(s => s.slug === updatedSymbol.slug);
  if (index !== -1) {
    symbols[index] = updatedSymbol;
  } else {
    symbols.push(updatedSymbol);
  }
});

fs.writeFileSync(symbolsPath, JSON.stringify(symbols, null, 2));
console.log('Successfully created balik, deprem, cinsellik, agac, deniz');
