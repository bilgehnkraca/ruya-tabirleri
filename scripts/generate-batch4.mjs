import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updates = [
  {
    slug: 'dugun',
    title: 'Rüyada Düğün Görmek',
    category: 'eylemler',
    shortDescription: 'Rüyada düğün görmek; kalabalıkları, toplumsal statüyü, bazen hüznü ve cenazeyi, bazen de yepyeni bir başlangıcı ve anlaşmayı sembolize eden çok karmaşık bir imgedir.',
    content: {
      introduction: 'Düğün, gerçek hayatta neşenin, kutlamanın, yeni bir başlangıcın ve kalabalıkların bir araya gelişinin en belirgin sembolüdür. Ancak rüya tabirleri dünyasında "düğün" sembolü, genellikle uyanık hayattaki karşılığının tam tersi anlamlar taşıyan, oldukça kafa karıştırıcı ve uyarıcı bir metafordur. Rüyada düğün görmek, çoğu zaman gürültü, karmaşa, keder veya bir kayıp (cenaze) ile ilişkilendirilir. Buna rağmen rüyadaki düğünün sessiz mi yoksa çalgılı mı olduğu, kimin evlendiği ve rüya sahibinin düğündeki rolü, bu rüyanın karanlık mı yoksa aydınlık mı bir mesaj taşıdığını belirleyen yegane faktörlerdir. Düğün, psikolojik olarak da kişinin toplum önündeki imajını ve taahhütlerini temsil eder.',
      generalMeaning: 'Rüya tabircilerinin büyük bir çoğunluğu, içinde çalgı, oyun, halay ve yüksek sesli müzik bulunan düğün rüyalarını olumsuz yorumlar. Çalgılı ve gürültülü bir düğün görmek, genellikle o bölgede veya o hanede yaşanacak bir musibete, bir cenazeye veya derin bir kedere işaret eder. Çünkü aşırı neşe ve taşkınlığın (rüyalar alemindeki zıtlık kuralı gereği) uyanık hayatta gözyaşı getireceğine inanılır. Rüyasında kendi düğününü (çalgılı) gören kişinin başına çok büyük bir dert açılır veya amansız bir hastalığa yakalanır. Ancak rüyada çalgısız, eğlencesiz, sessiz sakin ve sadece ikram (yemek) yapılan bir düğün veya nikah meclisi görmek çok hayırlıdır; berekete, huzura, bekar için evliliğe, sıkıntıların bitmesine ve çok kârlı bir anlaşma (sözleşme) yapmaya delalet eder. Rüyada bir düğün yemeğine davetli olduğunu görmek, rüya sahibinin eline geçecek büyük bir kısmete ve itibara yorulur.',
      variations: [
        {
          title: 'Rüyada Kendi Düğününü Görmek',
          content: 'Eğer düğün sessiz ve huzurluysa, uyanık hayatta gireceğiniz yeni ve çok ciddi bir ortaklığa, sorumluluk almaya ve itibar kazanmaya işarettir. Ancak kendi düğününüzde çalgı çaldığını ve oynandığını görüyorsanız, çok büyük bir hastalığa, bir felakete veya hayal kırıklığına uğrayacağınıza dair uyarıcı bir rüyadır.'
        },
        {
          title: 'Rüyada Başkasının Düğününe Gitmek',
          content: 'Eğer düğün sahibi tanınan biriyse, o kişinin başına gelecek bir sıkıntıya sizin de şahit olacağınıza yorulur. Ancak tanımadığınız birinin düğününe gitmek, uzaktan gelecek bir habere veya toplum içinde yaşanacak genel bir kargaşaya (kalabalığa) delalet eder.'
        },
        {
          title: 'Rüyada Düğünde Oynamak (Halay Çekmek vb.)',
          content: 'Rüyalarda oynamak ve zıplamak nadiren iyiye yorulur. Düğünde oynadığını gören kişinin uyanık hayatta canı çok sıkılır, eline geçecek bir paradan hayır görmez veya kendisini çok utandıracak bir olayın içine düşerek (rezil olarak) ağlamak zorunda kalır.'
        },
        {
          title: 'Rüyada Düğün Hazırlığı Yapmak',
          content: 'Bu rüya genellikle olumludur. Çok telaşlı ama sonu güzel bitecek bir sürece girdiğinizi gösterir. Yeni bir iş kurmak, taşınmak veya eğitim hayatında yeni bir sayfa açmak gibi meşakkatli ama heyecan verici değişimlerin habercisidir.'
        },
        {
          title: 'Rüyada Sadece Gelin ve Damat Görmek (Düğünsüz)',
          content: 'Eğlence ve çalgı olmadan sadece gelin ve damadı yan yana görmek, iki zıt fikrin veya iki farklı işin başarıyla bir araya getirileceğine, çok bereketli bir ortaklık (veya evlilik) kurulacağına ve huzura erileceğine işarettir.'
        }
      ],
      religiousMeaning: 'Klasik İslami tabir (İbn Şirin ve Kirmani) geleneğinde çalgılı, müzikli ve oyunlu düğün rüyaları kesinlikle musibet, ölüm veya bela olarak tabir edilir. Nablusi\'ye göre rüyada düğün, bazen cenaze merasimiyle eşdeğer tutulmuştur; zira her ikisinde de kalabalıklar toplanır ve bir telaş vardır. Rüyasında evlendiğini ancak eşini (gelini/damadı) göremediğini ve ismini de bilmediğini gören kişinin ecelinin yaklaşmış olabileceği yorumu yapılmıştır. Fakat sessiz, sadece ziyafet verilen ve Kur\'an/mevlid okunan düğünler, bereket, şükür, şifa ve dünyevi sevinçlere (murada ermeye) delalet eder.',
      psychologicalMeaning: 'Psikanalitik açıdan düğün, Carl Jung\'un "Mistik Evlilik (Mysterium Coniunctionis)" arketipinin bir yansımasıdır. Düğün, kişinin kendi içindeki eril ve dişil enerjileri (Anima ve Animus), mantık ile duyguyu veya bilinç ile bilinçaltını birleştirmesini, yani ruhsal bir bütünlüğe ulaşmasını sembolize eder. Bu yüzden rüyada evlenmek, uyanık hayatta kendinizde yeni bir huy veya inanç kabul ettiğinizin göstergesidir. Sosyal psikoloji açısından ise düğün rüyası, toplumdan onay bekleme (kabul görme) ihtiyacınızı, başkalarının sizin hayatınız (ilişkiniz, işiniz) hakkında ne düşündüğüne fazlasıyla önem verdiğinizi ve "taahhüt (bağlanma)" korkularınızı yansıtır.',
      faqs: [
        {
          question: 'Zaten evli olan birinin rüyasında tekrar evlendiğini (düğünü olduğunu) görmesi ne demektir?',
          answer: 'Eşiyle olan bağlarının tazeleneceğine, evliliğindeki bir sorunu çözerek ikinci bir balayı dönemi yaşayacaklarına yorulur. Ancak rüyada eşi dışında (yabancı) biriyle çalgılı düğün yapmak, aile içi büyük bir krize veya ayrılığa işaret edebilir.'
        },
        {
          question: 'Rüyada iptal olan (yarım kalan) bir düğün görmek nedir?',
          answer: 'Uyanık hayatta çok ümit bağladığınız bir işin veya ilişkinin son anda, hiç beklemediğiniz bir sebeple iptal olacağına ve yaşanacak sükutu hayale delalet eder.'
        },
        {
          question: 'Rüyada gizli bir nikah veya sessiz bir tören görmek nasıl yorumlanır?',
          answer: 'Çok zekice, kurnazca ve başarıyla yürütülen ticari bir anlaşmaya, kimseye duyurmadan elde edilecek çok büyük bir zenginliğe veya dedikodulardan uzak durarak kurulan huzurlu bir hayata yorulur.'
        }
      ]
    },
    relatedSymbols: ['gelinlik']
  },
  {
    slug: 'gelinlik',
    title: 'Rüyada Gelinlik Görmek',
    category: 'nesneler',
    shortDescription: 'Rüyada gelinlik görmek; masumiyeti, yepyeni bir sayfayı, saf niyetleri, bazen de eceli (kefeni) veya hüzünlü bir ayrılığı simgeleyen çok derin bir metafordur.',
    content: {
      introduction: 'Gelinlik, bir insanın (özellikle kadının) hayatındaki en büyük dönüşüm anının, saflığın ve yeni bir hayata atılan adımın dünyevi sembolüdür. Rüyada gelinlik görmek, sadece bekar genç kızlar için değil, her yaştan kadın ve erkek için çok güçlü mesajlar barındırır. Beyaz rengin getirdiği saflık ve temizlik hissi, gelinliğin genel yorumunu "müjde ve huzur" yönüne çekse de; rüya tabirlerindeki meşhur zıtlık prensipleri, gelinlik rüyasının bazen çok karanlık bir ayrılığa veya hüzne (kefene) işaret etmesine de sebep olur. Gelinliğin temizliği, yırtık olup olmaması ve rüya sahibinin o gelinliğin içindeki hissiyatı, bu rüyanın şifresini çözen en önemli faktörlerdir.',
      generalMeaning: 'Rüya tabirlerinin genel hatlarına göre, bekar bir genç kızın rüyasında bembeyaz, tertemiz ve güzel bir gelinlik giymesi (veya görmesi), uyanık hayatta da tez vakitte hayırlı bir evlilik yapacağına, muradına ereceğine ve çok mutlu bir yuva kuracağına yorulur. Evli bir kadının gelinlik giymesi ise, genellikle güzel ve hayırlı bir evlat (özellikle kız çocuğu) sahibi olmaya, evlilikteki dertlerin bitip yenilenmeye (ikinci bir bahara) delalet eder. Rüyada gelinlik giymek aynı zamanda kişinin itibarının artmasına, girdiği bir işte veya toplumda saygıdeğer (saf/temiz) bir konuma gelmesine işarettir. Ancak, eğer giyilen gelinlik kirli, yırtık, siyah veya çamurlu ise, bu durum evliliğin veya başlanacak yeni bir işin sonunun hüsran olacağına, beklenen mutluluğun gelmeyeceğine ve büyük bir hayal kırıklığı yaşanacağına dair kesin bir uyarıdır.',
      variations: [
        {
          title: 'Rüyada Kirli veya Yırtık Gelinlik Görmek',
          content: 'Çok büyük umutlarla başlanan bir işin (veya evliliğin) hüsranla sonuçlanacağına, adınıza (namusunuza veya itibarınıza) sürülecek bir lekeye, iftiraya veya dedikoduya işarettir. Saf niyetlerinizin kötü niyetli insanlar tarafından suistimal edildiğini gösterir.'
        },
        {
          title: 'Erkeğin Rüyada Gelinlik Görmesi (veya Giymesi)',
          content: 'Erkeğin gelinlik giymesi, toplum içinde çok büyük bir utanç yaşayacağına, itibarının sıfırlanacağına veya kadınsı (pasif) bir duruma düşürüleceğine yorulur. Ancak erkeğin sadece bir gelinlik (kıyafet olarak) görmesi, iş hayatında eline geçecek tertemiz bir sayfa ve kazanca delalet eder.'
        },
        {
          title: 'Rüyada Gelinlik Aradığını (Denediğini) Görmek',
          content: 'Hayatınızda doğru yolu (veya doğru kişiyi) bulmak için büyük bir arayış içinde olduğunuzu, karar vermekte zorlandığınızı gösterir. Eğer gelinliği bulup üzerine tam oturduğunu görürseniz, arayışınızın çok güzel bir şekilde sonuçlanacağına işarettir.'
        },
        {
          title: 'Rüyada Gelinliği Çıkarmak (Üzerinden Atmak)',
          content: 'Büyük bir hevesle başlanan ancak sonradan size zarar vereceğini anladığınız bir işten (veya nişandan) son anda vazgeçeceğinize, zararın neresinden dönülürse kârdır diyerek kendinizi kurtaracağınıza yorulur.'
        },
        {
          title: 'Rüyada Siyah (veya Renkli) Gelinlik Görmek',
          content: 'Siyah gelinlik giymek, mutluluk beklenen bir yerden keder ve gözyaşı geleceğine işarettir. Genellikle mutsuz bir evliliğe veya evlilik arifesinde yaşanacak büyük bir yasa delalet eder. Kırmızı gelinlik ihtirasa, yeşil gelinlik ise maneviyatın (dinin) güzelliğine yorulur.'
        }
      ],
      religiousMeaning: 'Klasik İslami tabirlerde bembeyaz bir gelinlik (veya beyaz bir elbise) genel olarak dine, imana, kalbin saflığına ve iyi amellere yorulur. Kişinin günahlardan arınarak tertemiz bir hayata (adeta yeni doğmuş gibi) başlayacağına işarettir. Ancak, rüyada bir kadının veya erkeğin tanımadığı, meçhul bir eşle evlenmek üzere gelinlik (veya damatlık) giymesi ve o ortamın hüzünlü olması, bazı alimler (İbn Şirin) tarafından gelinliğin "kefene" benzetilmesine yol açmış ve kişinin ecelinin yakın olabileceğine dair bir ilahi işaret olarak yorumlanmıştır. Temiz gelinlik aynı zamanda helal rızka ve dünya nimetlerinden şükürle faydalanmaya da yorulur.',
      psychologicalMeaning: 'Psikanaliz açısından gelinlik giymek, "Geçiş Töreni (Rite of Passage)" arketipidir. Bu, hayatınızda bir evrenin (örneğin ergenliğin, bekarlığın veya eski bir karakterinizin) tamamen bitip, yeni bir kimliğe (yetişkinliğe, bilgeliğe) geçiş yaptığınızı simgeler. Bilinçaltınız, sizin saflık (yeniden başlama) arzunuzu ve toplum tarafından "kabul görme (beğenilme)" ihtiyacınızı gelinlik imgesiyle tatmin eder. Eğer rüyanızda gelinliğinizin size uymadığını, dar veya çirkin olduğunu görüyorsanız; bu durum uyanık hayatta üstlendiğiniz "iyi kız/kötü kız" veya "uyumlu eş" rollerinin aslında sizin gerçek kimliğinize (özünüze) ne kadar ters düştüğünü gösteren bir isyan (baskı) göstergesidir.',
      faqs: [
        {
          question: 'Yaşlı bir kadının rüyasında gelinlik giymesi ne anlama gelir?',
          answer: 'Genellikle dünyevi arzuların bitişine, ahiret hayatına (kefene) veya o kişinin çocukları/torunları vasıtasıyla hanesine girecek çok büyük bir sevince (müjdeye) yorulur. Temiz ve aydınlık bir rüyadır.'
        },
        {
          question: 'Rüyada gelinliğin eteklerinin çamur olması ne demektir?',
          answer: 'Kuracağınız temiz yuvaya veya başlayacağınız güzel bir işe dışarıdan bulaşacak dedikoduya, fitneye ve atılacak küçük iftiralara işarettir. Çevrenizdeki kıskanç insanlara dikkat etmeniz gerektiği anlamına gelir.'
        },
        {
          question: 'Başkasına ait bir gelinliği giymek nasıl yorumlanır?',
          answer: 'Başkasının hayatına, statüsüne veya eşine özendiğinize (kıskançlığa) ya da başkasının hakkı olan bir makama (işe) sizin geçeceğinize işaret eder. Empati eksikliğini de yansıtabilir.'
        }
      ]
    },
    relatedSymbols: ['dugun']
  },
  {
    slug: 'eski-sevgili',
    title: 'Rüyada Eski Sevgiliyi Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada eski sevgiliyi görmek; geçmişle yüzleşmeyi, kapanmamış yaraları, tekrar edilen hataları ve bazen de şu anki ilişkinizdeki (veya hayatınızdaki) tatminsizliği sembolize eder.',
    content: {
      introduction: 'İnsan beyni anıları asla tamamen silmez; onları bilinçaltının derin çekmecelerine kaldırır. Rüyada eski sevgiliyi görmek, rüya görenlerin (özellikle yeni ayrılmış veya yeni bir ilişkiye başlamış kişilerin) en çok kafasını karıştıran ve "Acaba ona geri mi dönmeliyim?" sorusunu sordurtan sembollerin başında gelir. Ancak rüyaların dili semboliktir ve rüyadaki eski sevgili, nadiren o kişinin kendisini temsil eder. Eski sevgili, genellikle geçmişte bıraktığınız bir duygunun, o dönemde sahip olduğunuz bir karakter özelliğinin veya şu anki hayatınızda eksikliğini hissettiğiniz bir heyecanın (veya ders almadığınız bir hatanın) ete kemiğe bürünmüş, tanıdık bir maskesidir.',
      generalMeaning: 'Rüya tabirlerine göre eski sevgiliyi görmek, kişinin geçmişle olan bağını henüz tamamen koparamadığını, aklında kalan soru işaretlerinin (keşkelerin) olduğuna işaret eder. Eğer şu an hayatınızda biri (eşiniz veya sevgiliniz) varsa ve rüyada eski sevgiliyi görüyorsanız, bu rüya mevcut ilişkinizde (belki de cinsel hayatınızda veya iletişiminizde) bazı şeylerin eksik olduğuna, rutinleştiğine ve bilinçaltınızın geçmişteki heyecanı (tutkuyu) aradığına yorulur. Rüyada eski sevgiliyle barıştığını görmek, uyanık hayatta o kişiyle barışacağınız anlamına gelmez; aksine hayatınıza girecek yepyeni ve çok güzel bir kısmete, eski dertleri arkanızda bırakıp yeni bir sayfa açmaya delalet eder. Eski sevgiliyle kavga etmek ise, geçmişteki o toksik enerjiden (öfkeden) sonunda kurtulduğunuza ve kendinizi özgürleştirdiğinize işarettir.',
      variations: [
        {
          title: 'Rüyada Eski Sevgiliyle Barışmak (Sarılmak)',
          content: 'Zıtlık kuralı gereği yeni bir aşka, yeni bir tanışmaya veya mevcut hayatınızda sizi çok mutlu edecek yeni bir karara yorulur. Geçmişin yüklerini affederek (sarılıp) serbest bıraktığınızı ve artık yeni güzelliklere yer açtığınızı gösterir.'
        },
        {
          title: 'Rüyada Eski Sevgilinin Ağladığını Görmek',
          content: 'O kişinin sizden sonra mutlu olamadığına, size haksızlık ettiği için vicdan azabı çektiğine veya onunla ilgili yakın zamanda (ortak arkadaşlardan) bir haber veya itiraf alacağınıza delalet eder. Gözyaşı onun vicdanının sesidir.'
        },
        {
          title: 'Rüyada Eski Sevgiliyi Yeni Biriyle (Başkasıyla) Görmek',
          content: 'Ego (kıskançlık) rüyasıdır. Onun sizi tamamen unuttuğu gerçeğiyle yüzleşmeye başladığınızı gösterir. Aynı zamanda sizin de artık hayatınıza bakmanız, yeni fırsatlara odaklanmanız gerektiğine dair bilinçaltınızın verdiği bir kabul (kabullenme) mesajıdır.'
        },
        {
          title: 'Rüyada Eski Sevgilinin Evlendiğini Görmek',
          content: 'Onunla olan bağınızın, ümidinizin (bilinç düzeyinde de, bilinçaltı düzeyde de) artık ebediyen koptuğuna işarettir. Siz de kendi hayatınızda çok radikal bir karar (belki de kendi evliliğiniz/nişanınız) alma arifesindesiniz demektir.'
        },
        {
          title: 'Rüyada Eski Sevgiliyle Seks Yapmak',
          content: 'Onu özlemekten ziyade, onun temsil ettiği bir özelliği (özgüven, rahatlık, macera hissi) şu anki hayatınızda (veya kendinizde) eksik bulduğunuza ve bunu "bütünleştirmek" (entegre etmek) istediğinize işaret eden klasik bir Jungiyen rüyasıdır.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri kaynaklarında (İbn Şirin vb.) "eski sevgili" gibi modern kavramlar doğrudan yer almasa da, geçmişte kalınan ve kişiye acı veren "eski eş, eski ortak veya düşman" figürleri üzerinden yorumlanır. Geçmişten gelen birini görmek, bazen tekrar dirilecek olan eski bir düşmanlığa, unutulmuş bir günahın tekrar gün yüzüne çıkmasına veya tövbe edilen bir hataya yeniden düşme tehlikesine (nefse uymaya) dair bir ikaz olarak kabul edilir. Rüyada eski eşle tekrar nikah kıydığını görmek, bozulan işlerin tekrar yoluna girmesine, tövbeye ve dinde salah (iyilik) bulmaya yorulmuştur.',
      psychologicalMeaning: 'Psikolojide eski sevgili, sizin kendi geçmişinizin ve "Gölge (Shadow)" arketipinizin bir yansımasıdır. Eğer o kişi size kötü davrandıysa ve rüyanızda onu görüyorsanız, uyanık hayatta şu an yine kendinize kötü davranılmasına (sınırlarınızın ihlal edilmesine) izin veriyorsunuz demektir; yani eski bir şablonu (travmayı) tekrar ediyorsunuzdur. Eski sevgili, tamamlanmamış işlerin (Gestalt psikolojisindeki unfinished business) sembolüdür. Bilinçaltınız o ilişkiye dair "Neden böyle oldu?", "Acaba benim suçum muydu?" gibi sorulara (kapanış - closure) cevap aradığı için onu sürekli rüyalarınıza getirir.',
      faqs: [
        {
          question: 'Evli olduğum halde sürekli eski sevgilimi rüyamda görüyorum, bu aldatmak mıdır?',
          answer: 'Kesinlikle hayır. Evliliğinizde (örneğin romantizm, iletişim veya heyecan) rutinleşen ve eksikliğini hissettiğiniz bir şey vardır. Bilinçaltınız bu eksikliği, geçmişteki en güçlü duygu anınız olan (eski sevgili) imgesiyle size hatırlatır.'
        },
        {
          question: 'Ayrılalı yıllar oldu, onu hiç düşünmüyorum ama neden rüyama girdi?',
          answer: 'O kişinin temsil ettiği dönemi (örneğin üniversite yıllarındaki özgürlüğünüzü, gençliğinizi veya o dönemki cesaretinizi) özlüyor olabilirsiniz. Rüya o kişiyi değil, "o zamanlardaki sizi" özlediğinizi gösterir.'
        },
        {
          question: 'Rüyamda eski sevgilimin bana bir şey vermesi ne demek?',
          answer: 'Geçmişte ondan aldığınız bir hayat dersini, acıyı veya tecrübeyi nihayet tam olarak idrak ettiğinize ve bunu şu anki olgunluğunuza bir hediye (kazanım) olarak eklediğinize işarettir.'
        }
      ]
    },
    relatedSymbols: ['cinsellik', 'dugun', 'aglamak']
  },
  {
    slug: 'sac-kesilmesi',
    title: 'Rüyada Saç Kesilmesi Görmek',
    category: 'beden',
    shortDescription: 'Rüyada saç kesilmesi; radikal değişimleri, bazen itibar ve güç kaybını, bazen de ömrün uzamasını, eski yüklerden (dertlerden) kurtulmayı sembolize eden çok boyutlu bir imgedir.',
    content: {
      introduction: 'İnsanlık tarihi boyunca saç, hem kadın hem de erkek için gücün, statünün, çekiciliğin (libidonun) ve bilgeliğin (Samsun ve Delila mitolojisindeki gibi) en güçlü fiziksel sembolü olmuştur. Rüyada saç görmek zenginlik, uzun ömür ve şeref iken; rüyada saç kesilmesi veya kestirilmesi doğrudan bir "eksiklik", "dönüşüm" veya "feragat" anlamına gelir. Saçların kesilmesi, kişinin kendi isteğiyle mi yoksa zorla mı gerçekleştiğine, saçın ne kadarının kesildiğine ve uyanık hayatta kişinin saçına ne kadar değer verdiğine göre çok farklı anlamlar (hem çok olumlu hem de çok olumsuz) taşıyabilir. Bu rüya, hayatınızda bir dönemin kapandığının en keskin habercisidir.',
      generalMeaning: 'Rüya tabircilerinin büyük bir kısmına göre rüyada saçların kendi isteğiyle ve güzel bir modelde (kuaförde) kesildiğini görmek, kişinin kendi iradesiyle hayatında yapacağı çok olumlu ve taze bir başlangıca (imaj veya iş değişikliğine), borçlarından ve sıkıntılarından arınmaya, ferahlamaya yorulur. Saçın çok az bir miktar (uçlarından) alınması dertlerin hafiflemesidir. Ancak, rüyada kişinin saçlarının kendi isteği dışında (zorla) veya çirkin/kötü bir şekilde kesildiğini görmesi; itibar kaybına, çok güvendiği bir işten kovulmaya, maddi zarara, özgüven eksikliğine veya aileden birinin yaşayacağı büyük bir kedere işaret eder. Saç gücü temsil ettiği için, saçın sıfıra vurulması (dazlak olmak) güçten düşmeye ve yenilgiye delalet edebileceği gibi; hac veya umre niyetiyle saç kestirmek ise tam tersine manevi olarak en yüksek mertebeye, günahların affına ve mutlak huzura yorulur.',
      variations: [
        {
          title: 'Rüyada Kendi Saçını Kendin Kesmek',
          content: 'Kişinin kendi hayatının iplerini (kontrolünü) tamamen eline aldığına, radikal ve geri dönüşü olmayan, cesur bir karar vereceğine işarettir. Kendi hatalarının bedelini kendi ödeyeceğine ve kimseden yardım beklemeden kendi yolunu çizeceğine yorulur.'
        },
        {
          title: 'Rüyada Başkasının (Tanıdık Birinin) Saçını Kesmek',
          content: 'Sizin o kişiye karşı bir üstünlük (güç/otorite) kuracağınıza, o kişinin bir hatasını düzelteceğinize veya o kişiye maddi/manevi çok büyük bir zarar (veya yardım) vereceğinize delalet eder. Eylemdeki hissiyatınıza göre tabir değişir.'
        },
        {
          title: 'Rüyada Saçın Zorla Kesilmesi',
          content: 'Özgürlüğünüzün kısıtlandığına, uyanık hayatta size tahakküm eden (baskı kuran) zorba bir yöneticinin veya eşin varlığına işaret eder. İtibarınızın zedelendiği ve kendinizi çok savunmasız hissettiğiniz bir dönemi yansıtır.'
        },
        {
          title: 'Rüyada Kel Kalmak (Tüm Saçın Dökülmesi/Kesilmesi)',
          content: 'Genellikle büyük bir maddi çöküşe (iflasa), sosyal statünün tamamen kaybedilmesine ve yalnızlığa yorulan uyarıcı bir rüyadır. Bazen de kişinin uyanık hayatta yaşlanmaktan ve çekiciliğini kaybetmekten duyduğu derin korkunun yansımasıdır.'
        },
        {
          title: 'Rüyada Kuaförde / Berberde Saç Kestirmek',
          content: 'Profesyonel bir destek alarak (danışmanlık vs.) işlerinizi düzene sokacağınıza, dış görünüşünüze ve toplum içindeki imajınıza eskisinden daha çok önem vermeye başlayacağınıza ve bu sayede itibar (saygı) kazanacağınıza işarettir.'
        }
      ],
      religiousMeaning: 'Klasik İslami rüya tabiri âlimlerinden Nablusi ve İbn Şirin\'e göre saç kesimi mevsime ve niyetine göre değişir. Hac mevsiminde veya ihramdan çıkmak amacıyla rüyada saç kesmek/tıraş olmak; kefaretlerin ödenmesine, borçların edasına, emanetin yerine teslimine ve büyük bir korkudan kurtulmaya müjdedir. Ancak hac mevsimi dışında kadının saçını kestirmesi (veya kesilmesi) eşiyle yaşayacağı şiddetli bir tartışmaya, erkeğin saçını (saç uzatmayı seviyorsa) kestirmesi ise fakirliğe, keder veya bir musibete (mal kaybına) yorulur. Askerin saç kestirmesi ise zafer ve kuvvettir.',
      psychologicalMeaning: 'Psikanalitik açıdan saç, libidonun (yaşam ve cinsellik enerjisinin) uzantısı ve bireyin "Persona"sının (dış dünyaya gösterdiği maske/imaj) en önemli parçasıdır. Saç kestirmek, psikolojik bir savunma mekanizması veya bir yas (ayrılık) sürecidir. Kadınların (ve erkeklerin) travmatik bir ayrılıktan veya depresyondan sonra gerçek hayatta da saçlarını kestirmeleri gibi; rüyada saç kesilmesi, kişinin eski kimliğini (Acı çeken benliğini) ölüme terk etmesi (kesip atması) ve yeniden doğuş arzusudur. Bazen de bilinçaltının "Ben artık eski ben değilim, beni böyle kabul edin" şeklindeki isyan çığlığıdır.',
      faqs: [
        {
          question: 'Rüyada saç uçlarından biraz kestirmek (kırıkları aldırmak) ne anlama gelir?',
          answer: 'Hayatınızdaki ufak tefek pürüzleri (borçları, küçük sorunları) düzelttiğinize, kendinize bakım (ruhsal detoks) yaptığınıza ve yüklerinizden hafiflediğinize işaret eden çok rahatlatıcı bir rüyadır.'
        },
        {
          question: 'Rüyada saçımı kestim ama pişman oldum (ağladım), bu ne demek?',
          answer: 'Uyanık hayatta çok aceleci (fevri) bir kararla elinizdeki büyük bir fırsatı veya sevdiğiniz bir insanı kaybedeceğinize ve sonrasında çok derin bir pişmanlık duyacağınıza dair ikazdır.'
        },
        {
          question: 'Rüyada kesilen saçların hızla (hemen) geri uzadığını görmek nedir?',
          answer: 'Kaybettiğiniz gücü, malı veya itibarı, eskisinden çok daha güçlü ve hızlı bir şekilde (katlanarak) geri kazanacağınıza delalet eden muhteşem bir zafer ve yenilenme müjdesidir.'
        }
      ]
    },
    relatedSymbols: ['aglamak', 'kan']
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
console.log('Successfully created dugun, gelinlik, eski-sevgili, sac-kesilmesi');
