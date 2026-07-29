import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const updates = [
  {
    slug: 'asker',
    title: 'Rüyada Asker Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada asker görmek; disiplini, otoriteyi, devlet makamından gelecek bir haberi, içsel çatışmaları ve düşmana karşı elde edilecek kesin zaferi sembolize eder.',
    content: {
      introduction: 'Asker, tarih boyunca devletin bekasını, gücü, güvenliği ve vatan savunmasını temsil etmiştir. Rüyalar aleminde asker figürü, uyanık hayattaki düzene, kanuna, adalete ve kişisel disipline atıfta bulunur. Rüyada asker görmek, çoğunlukla kişinin devlet kapısında (resmi dairelerde) bekleyen bir işinin çözüleceğine, hayatında yeni ve katı bir düzen kurması gerektiğine veya kendisini çok güvende hissedeceği bir ortama gireceğine işaret eder. Ancak asker aynı zamanda "savaşı" ve "mücadeleyi" de çağrıştırdığı için, rüyadaki askerin durumu (dost mu düşman mı olduğu, üniforması, silahı) rüya sahibinin iç dünyasındaki çatışmaların (ego ile süperego arasındaki savaşın) bir yansıması olarak da okunmalıdır.',
      generalMeaning: 'Rüya tabircileri asker rüyalarını genellikle kuvvet, kudret ve zafer olarak yorumlar. Rüyasında asker gören veya bir askerle konuştuğunu gören kişi, düşmanlarına (veya rakiplerine) karşı mutlak bir üstünlük sağlar. Devlet büyüklerinden, yöneticilerden veya amirlerinden çok büyük bir destek (himaye) görür. Rüyada üniformalı ve silahlı bir asker, alınacak olan çok sevindirici ve sağlam bir habere (resmi bir evraka, mahkeme kararına veya tayine) delalet eder. Rüyada askere gitmek (askere çağrılmak), kişinin üzerine alacağı yeni ve meşakkatli bir sorumluluğa, vatani veya insani bir görevi yerine getirmeye yorulur. Ancak rüyada düşman askeri görmek veya askerden kaçmak, kişinin kanunlarla başının derde gireceğine, büyük bir korku yaşayacağına veya sorumluluklarından kaçtığı için başarısızlığa uğrayacağına dair bir ikazdır.',
      variations: [
        {
          title: 'Rüyada Silahlı Asker Görmek',
          content: 'Silah, gücün ve yaptırımın sembolüdür. Rüyada silahlı asker görmek, çok güçlü, inatçı ve sözü geçen birinden destek alınacağına işarettir. Hakkınız olanı söke söke (güç kullanarak veya adalet yoluyla) alacağınızı müjdeler.'
        },
        {
          title: 'Rüyada Asker Kıyafeti (Üniforma) Giymek',
          content: 'Kişinin kendi hayatında devasa bir disiplin (rutin) kuracağına, tembellikten kurtulup hedeflerine doğru çok kararlı yürüyeceğine işarettir. Kariyer anlamında devlet kademesinde veya kurumsal bir şirkette yöneticiliğe (amirliğe) yükseleceğine yorulur.'
        },
        {
          title: 'Rüyada Askerle Kavga Etmek',
          content: 'Devletle, polisle veya adaleti temsil eden kurumlarla (belki patronunuzla) yaşanacak büyük bir krize delalet eder. Kurallara (kanunlara) karşı gelindiğini, asilik yapıldığını ve bunun sonucunda haksız çıkılacağını gösteren bir uyarı rüyasıdır.'
        },
        {
          title: 'Rüyada Asker Ordusu Görmek',
          content: 'Bulunduğunuz şehre veya ülkeye gelecek olan berekete (eğer ordu sizin tarafınızdaysa) yorulabileceği gibi; bazen de toplumda yaşanacak genel bir kargaşaya, korkuya (salgın hastalığa veya ekonomik krize) işaret eder. Ordu zaferin de korkunun da habercisi olabilir.'
        },
        {
          title: 'Rüyada Yaralı veya Ölü Asker Görmek',
          content: 'Haklı olduğunuz bir davada (veya işte) gücünüzü kaybettiğinize, çok güvendiğiniz bir destekçinizin veya yöneticinizin görevden alınmasına (vefasızlığına) işarettir. İnancın ve mücadelenin kırıldığı anı simgeler.'
        }
      ],
      religiousMeaning: 'İslami tabir kaynaklarında (Nablusi ve Kirmani ekolü) asker görmek; Allah\'ın ordusuna, meleklerin yardımına, müminler için zafere ve zalimler için ise intikama (cezaya) yorulur. Rüyasında bir orduya veya asker grubuna katıldığını gören kişinin amellerinin güzel olduğu, hak yolunda (doğrulukta) mücadele ettiği ve dinine bağlı olduğu kabul edilir. Ancak zalim (dinsiz) bir askerin o bölgeye girmesi, oraya inecek olan ilahi bir azabın, kıtlığın veya fitnenin habercisi sayılır. Askerler peygamberleri de temsil edebileceği için, onlardan görülecek bir iyilik veya merhamet, manevi şefaat olarak tabir edilir.',
      psychologicalMeaning: 'Psikanalitik açıdan asker, Süperego\'yu (toplumsal kuralları, ahlakı ve babayı) temsil eden mükemmel bir arketiptir. Asker rüyaları, bilinçaltınızın sizi hizaya (disipline) sokma çabasıdır. İçinizdeki vahşi dürtüler (id) çok taşkınlık yaptığında, rüyanızda polis veya asker figürleri sizi kovalar veya tutuklar; bu sizin kendi kendinize duyduğunuz suçluluk (cezalandırılma) hissidir. Kendinizi komutan veya asker olarak görüyorsanız, hayatınızın kontrolünü (otoritesini) nihayet ele aldığınızı, kurallarınızı kendi koyduğunuz ve sınırlarınızı başkalarına karşı başarıyla koruduğunuz (savunma hattı kurduğunuz) sağlıklı bir dönemi yansıtır.',
      faqs: [
        {
          question: 'Zaten askerliğini yapmış (veya asker olmayan) birinin rüyasında tekrar askere gittiğini görmesi ne demektir?',
          answer: 'Genellikle hayatında yeniden çözmesi gereken çok zorlu bir görevin (örneğin yeni bir iş veya zor bir evlilik) başladığına, adeta "acemi birliği" gibi her şeyi baştan öğrenmek zorunda kaldığına işarettir.'
        },
        {
          question: 'Kadınların rüyasında asker görmesi nasıl yorumlanır?',
          answer: 'Bekar kadınlar için çok disiplinli, koruyucu, güçlü (ve biraz sert) bir eş adayıyla (veya devlet memuru biriyle) tanışmaya; evli kadınlar için ise resmi kurumlardaki bir işin başarıyla (zaferle) sonuçlanmasına yorulur.'
        },
        {
          question: 'Rüyada askere selam vermek ne anlama gelir?',
          answer: 'Otoriteye (veya kanunlara) saygı duyduğunuza, büyüklerinizden veya yöneticilerinizden onay (takdir) alacağınıza, iş hayatınızda adab-ı muaşeret kurallarına uyarak çok sevileceğinize işarettir.'
        }
      ]
    },
    relatedSymbols: ['kan', 'ates']
  },
  {
    slug: 'araba-kullanmak',
    title: 'Rüyada Araba Kullanmak',
    category: 'eylemler',
    shortDescription: 'Rüyada araba kullanmak; hayatınızın kontrolü, kişisel bağımsızlığınız, hırslarınız, kariyer yolculuğunuz ve hedeflerinize ne kadar hızlı (veya yavaş) ilerlediğinizi sembolize eden mükemmel bir modern rüya metaforudur.',
    content: {
      introduction: 'İnsanlar binlerce yıl rüyalarında at sürdüler; ancak modern çağda atın yerini araba aldı. Rüyada araba, doğrudan sizin hayatınızı, bedeninizi (motor), enerjinizi (yakıt) ve zihninizi (direksiyon) temsil eden kusursuz bir semboldür. Rüyada araba kullanmak, uyanık hayattaki kader yolculuğunuzda direksiyon başında olup olmadığınızı, yani ipleri elinizde tutup tutmadığınızı gösterir. Arabanın modeli (eski/yeni), rengi, hızı, yolun durumu (asfalt/toprak) ve arabada yanınızda kimin oturduğu, rüyanın şifresini çözen en önemli detaylardır. Araba rüyaları, kariyerinizin (işinizin) veya ilişkinizin şu an hangi yöne, nasıl bir hızla gittiğinin tam bir projeksiyonudur.',
      generalMeaning: 'Rüya tabirlerinde araba (otomobil) kullanmak genel olarak iş hayatındaki gidişata, kişinin statüsüne ve vereceği kararlara yorulur. Rüyada yeni, lüks ve hızlı bir arabayı başarıyla (kaza yapmadan) kullanmak; kişinin kariyerinde çok hızlı bir yükseliş yaşayacağına, rızkının genişleyeceğine, toplumda saygı göreceğine (itibara) ve tüm hedeflerine kolaylıkla ulaşacağına delalet eder. Eğer arabayı çok yavaş, zorlanarak veya bozuk bir yolda (çamurda vb.) kullanıyorsanız, mevcut işlerinizde pürüzler çıkacağına, kazancınızı çok zor şartlarda elde edeceğinize işarettir. Rüyada arabanın bozulması, benzininin bitmesi veya kaza yapmak; uyanık hayatta karşılaşacağınız ani bir iflasa, projelerinizin durmasına, bedensel (sağlık) çöküşe veya yanlış kararlarınız yüzünden (hız/hırs) yaşayacağınız bir felakete dair çok net bir ikazdır.',
      variations: [
        {
          title: 'Rüyada Arabayı Hızlı (Süratli) Kullanmak',
          content: 'Büyük bir özgüvene (hatta kibre), iş hayatında alınacak çok büyük (ama riskli) kararlara ve hızlı gelen bir zenginliğe yorulur. Ancak arabayı kontrol edemiyorsanız, kendi hırslarınızın ve kibrinizin sizi felakete sürükleyeceğine dair bir uyarıdır.'
        },
        {
          title: 'Rüyada Arabayı Başkasının (Şoförün) Kullanması',
          content: 'Eğer şoför koltuğunda siz değilseniz; kendi hayatınızın, paranızın veya ilişkinizin kontrolünü (direksiyonu) başkasına, ailenize veya eşinize bıraktığınızı gösterir. Kendi ayaklarınız üzerinde durmakta zorlandığınızın, bağımlılığınızın resmidir.'
        },
        {
          title: 'Rüyada Arabayla Kaza Yapmak',
          content: 'Kariyerinizde çok güvendiğiniz bir işin son anda (sizin veya başkasının hatası yüzünden) iptal olacağına, maddi zarar (kaza) yaşanacağına veya dost sandığınız kişilerle yollarınızın çok şiddetli bir tartışmayla ayrılacağına işarettir.'
        },
        {
          title: 'Rüyada Arabanın Freninin Tutmaması',
          content: 'Uyanık hayatta tamamen kontrolünüz dışında (hızla) gelişen olayları sembolize eder. Durduramadığınız bir harcama (borç), frenleyemediğiniz bir öfke krizini veya kötü gidişatını durduramadığınız bir ilişkiyi yansıtan stres rüyasıdır.'
        },
        {
          title: 'Rüyada Gece (Karanlıkta) Araba Kullanmak',
          content: 'Geleceğinizi göremediğinize, bilinmezlik (karanlık) içinde risk alarak bir işe kalkıştığınıza delalet eder. Farlar açık ve yolu aydınlatıyorsa, kendi sezgileriniz (veya bir dostunuzun fikri) sayesinde doğru yolu bulacağınızı müjdeler.'
        }
      ],
      religiousMeaning: 'Modern bir icat olduğu için klasik (eski) İslami tabir kaynaklarında "araba" doğrudan geçmez; ancak tüm modern tabirciler arabayı eski metinlerdeki "at, binek hayvanı veya gemi" sembolleriyle eşdeğer tutar. Buna göre rüyada arabaya binmek veya kullanmak; şeref, izzet, makam, rızık ve yolculuk (sefer) olarak yorumlanır. Rüyasında güzel bir bineğe (arabaya) sahip olan kişinin, Allah\'ın izniyle dünyalığı artar ve saygın biri olur. İslami açıdan arabanın bozulması, kişinin tövbe etmesi gereken bir günaha (yolda kalmaya) veya nazara işarettir. Arabayla menzile (hedefe) varmak ise ahiret yurdunda da selamette (kurtuluşta) olmaya yorulur.',
      psychologicalMeaning: 'Araba, Jungiyen psikolojide Ego\'nun (bilinçli zihnin) dış dünyadaki aracıdır (Avatar/Persona). Arabanın rengi ve modeli, dış dünyaya kendinizi nasıl pazarlamak istediğinizin (statü arzunuzun) göstergesidir. Araba kullanmak "otonomi" (kendi kendini yönetme) ihtiyacınızdır. Arabayı eğer siz kullanıyorsanız, bağımsız bir birey (yetişkin) olma sürecini başarıyla tamamlamışsınızdır. Rüyada arka koltukta (veya bagajda) oturmak ise, çocukluk travmalarının (bağımlılıkların) devam ettiğine ve hayatın sorumluluğunu almaktan (direksiyon geçmekten) korktuğunuza işaret eden çok tipik bir savunma mekanizması (regresyon) rüyasıdır.',
      faqs: [
        {
          question: 'Ehliyetim ve araba kullanmayı bilmediğim halde rüyamda mükemmel araba kullanıyordum?',
          answer: 'İçinizde bugüne kadar hiç keşfetmediğiniz, çok büyük bir gizli yeteneğin (liderlik, yöneticilik veya cesaretin) ortaya çıkacağına ve normalde yapamam dediğiniz çok büyük bir işin altından ustalıkla kalkacağınıza delalet eder.'
        },
        {
          question: 'Rüyada arabayı geriye doğru sürmek ne demektir?',
          answer: 'Hayatta ilerlemek (büyümek) yerine, sürekli geçmiş hataları tekrarladığınıza, eski ilişkilere (veya alışkanlıklara) takılı kaldığınıza ve kendinizi sabote (gerileme) ettiğinize işaret eder.'
        },
        {
          question: 'Arabanın çalındığını görmek nasıl yorumlanır?',
          answer: 'Kimliğinizi (statünüzü), işteki pozisyonunuzu veya bağımsızlığınızı kaybetme korkusudur. Sizi başarıya taşıyan "motivasyonun (arabanın)" elinizden alındığını, ruhsal olarak yaya (tükenmiş) kaldığınızı hissetmenizdir.'
        }
      ]
    },
    relatedSymbols: ['at', 'ayakkabi']
  },
  {
    slug: 'mezarlik',
    title: 'Rüyada Mezarlık Görmek',
    category: 'mekanlar',
    shortDescription: 'Rüyada mezarlık görmek; sanılanın aksine ölümü değil, uzun ömrü, hatalardan dönmeyi, geçmişle yüzleşmeyi, tövbeyi, bilgeliği ve bazen de hapsolunmuş (çıkmaz) bir psikolojiyi temsil eder.',
    content: {
      introduction: 'İnsanlık için en büyük bilinmezlik ve korku kaynağı olan ölümün, dünyadaki fiziksel durağı olan mezarlıklar; uyanık hayatta hüznün, gözyaşının ve sonun sembolüdür. Ancak rüya tabirlerinin o büyüleyici zıtlık kuralı (tersinleme) mezarlık rüyalarında tam anlamıyla devreye girer. Rüyada mezarlık görmek, şaşırtıcı bir şekilde eceli veya kötülüğü değil; tam tersine uzun ömrü, uyanışı, içsel dönüşümü ve bilgeliği (ibret almayı) sembolize eder. Mezarlıklar aynı zamanda sükunetin, sessizliğin ve dünyanın yalan (geçici) olduğu gerçeğinin yüzümüze vurulduğu mekanlardır. Bu sebeple rüyada mezarlıkta dolaşmak, aslında kendi ruhunuzun (bilinçaltınızın) en derinlerinde, geçmişinizle hesaplaştığınız bir inziva (meditasyon) sürecidir.',
      generalMeaning: 'Rüya tabircilerinin ortak görüşüne göre rüyada mezarlık (kabristan) görmek, kişinin ömrünün uzun ve bereketli olacağına delalet eder. Kişi rüyasında bir mezarlığa girdiğini (ziyaret ettiğini) görürse, uyanık hayatta hatalarından döneceğine (tövbe edeceğine), kibrini yenip alçakgönüllü olacağına ve manevi (ruhsal) bir aydınlanma yaşayacağına yorulur. Ancak rüyada mezarların yıkık dökük olması veya açık bir mezar görmek, o bölgedeki inancın (ahlakın) zayıflamasına veya kişinin işlediği günahlara (geçmiş hataların ortaya çıkmasına) dair ciddi bir uyarıdır. Bekar birinin mezarlık görmesi evliliğe (yeni bir eve girmeye), hastanın mezarlık görmesi şifaya yorulabildiği gibi; rüyada ölülerin mezarlarından çıktığını (dirildiğini) görmek ise imkansız sanılan bir işin mucizevi bir şekilde gerçekleşmesine, hapisteki masumların kurtuluşuna delalet eder.',
      variations: [
        {
          title: 'Rüyada Açık (Boş) Mezar Görmek',
          content: 'Eğer içine girmiyorsanız, uzun sürecek bir yolculuğa, yeni alınacak (veya taşınılacak) bir eve işarettir. Ancak bazen uyanık hayatta size kurulan büyük bir tuzağı (kazılan kuyuyu) son anda fark edeceğinize dair çok net bir ilahi ikaz olarak da yorumlanır.'
        },
        {
          title: 'Rüyada Mezarlıkta Uyumak',
          content: 'Dünya işlerinden tamamen el etek çektiğinize, derin bir depresyona (veya melankoliye) girdiğinize, sorumluluklarınızdan (sorunlardan) kaçmak için adeta "ölü taklidi" yaptığınıza işaret eden psikolojik bir rüyadır.'
        },
        {
          title: 'Rüyada Kendi Mezarını Görmek / Kazmak',
          content: 'Sanılanın aksine uzun ömre (veya ev inşa etmeye) yorulur. Kendinize yeni bir düzen (yuva) kuracağınıza işarettir. Kendi mezarına girmek ise büyük bir evlilik yapmaya, dünya malından (mirastan) zengin olmaya delalet eder.'
        },
        {
          title: 'Rüyada Tanıdık Birinin (Ölmüş) Mezarını Ziyaret Etmek',
          content: 'O kişinin sizden dua (hayır hasenat) beklediğine işaret edebileceği gibi; uyanık hayatta o kişinin temsil ettiği karakter özelliklerini (örneğin babanızsa otoriteyi, annenizse şefkati) çok özlediğinizi ve ona ihtiyaç duyduğunuzu gösterir.'
        },
        {
          title: 'Rüyada Mezarlıkta Yağmur Yağdığını Görmek',
          content: 'O bölge halkına (veya geçmiş atalarınıza) inecek olan muazzam bir ilahi rahmete, affa ve berekete delalet eder. Gözyaşlarının dineceğine, rüya sahibinin içindeki ateşin (kederin) yağmurla birlikte sönüp huzura ereceğine yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabir geleneğinde (Nablusi, İbn Şirin) mezarlık görmek, âlimlerin ve zahitlerin (dünyaya değer vermeyenlerin) meclisine, ibadete, takvaya ve hapishaneye yorulur. Çünkü hapis de mezar gibi insanı dünyadan soyutlar. Rüyada mezar kazan kişi yeni bir ev (yuva) inşa eder. Mezarın yeşillikler içinde, aydınlık ve güzel olması, o kabirdeki kişinin ahiret yurdunun (cennet) güzelliğine; karanlık ve korkunç olması ise azaba (veya dünyadaki kötü amellere) işaret eder. Rüyada müşrik (veya kafir) mezarlığı görmek ise keder, şüphe, günahkarların toplandığı eğlence mekanları veya zindan olarak tabir edilmiştir.',
      psychologicalMeaning: 'Carl Jung ekolüne göre mezarlık, "Bilinçaltının (Kolektif Hafızanın)" en karanlık dehlizidir. Geçmişteki (ölmüş) travmaların, unutulmuş anıların, terk edilmiş yeteneklerin (eski hobilerin, eski benliklerin) gömülü olduğu yerdir. Rüyada mezarlıkta dolaşmak, bir nevi kendi içinizde bir "Arkeolojik Kazı" yapmaktır. Kendinizi tanımak, eski korkularınızla yüzleşmek (ölülerle konuşmak) için bilinçaltınıza indiğinizi gösterir. Aynı zamanda mezarlık rüyaları, "varoluşsal kriz (existential crisis)" dönemlerinde (insan ölümlü olduğunu idrak ettiğinde) çok sık görülür; ego (benlik) kendi ölümlülüğünü kabul etmeye çalışıyordur.',
      faqs: [
        {
          question: 'Rüyada gece karanlığında korkarak mezarlıktan geçmek ne demek?',
          answer: 'Uyanık hayatta çok büyük bir belanın, riskin veya hastalığın kıyısından döndüğünüze işarettir. Geçmişin karanlık izlerinden, pişmanlıklardan ve korkulardan kendinizi kurtarma çabanızı yansıtır.'
        },
        {
          question: 'Mezarlıkta çiçekler (güller) veya yeşillik görmek nasıl yorumlanır?',
          answer: 'Eğer bir merhumun mezarındaysa onun ruhunun şad olduğuna (ahiretinin güzel olduğuna); kendi hayatınız içinse çok büyük kederlerin ardından (mezarlık), yeşerecek taptaze umutlara ve iç huzuruna delalet eder.'
        },
        {
          question: 'Ölmüş babamı veya annemi rüyamda canlı görmek (mezardan çıkması) nedir?',
          answer: 'Tamamen bitmiş (ölmüş) sandığınız bir işten, projeden veya davadan hiç beklemediğiniz anda, mucizevi bir şekilde (dirilerek) çok büyük bir fayda (veya haber) sağlayacağınıza kesin işarettir.'
        }
      ]
    },
    relatedSymbols: ['olum', 'ev', 'aglamak']
  },
  {
    slug: 'kar',
    title: 'Rüyada Kar Yağdığını Görmek',
    category: 'doga',
    shortDescription: 'Rüyada kar görmek; mevsime göre anlamı tamamen değişen, zamanında yağarsa bolluk, bereket, şifa ve ruhsal temizliği; mevsimsiz yağarsa hastalık, keder ve ertelenen işleri sembolize eden çok güçlü bir iklimsel metafordur.',
    content: {
      introduction: 'Kar, tabiatın dinlenme evresine girdiğinin, yeryüzünün bembeyaz ve saf bir örtüyle örtülerek tüm kirlerinden (ve renklerinden) arındığının en büyük göstergesidir. Rüyalar aleminde kar sembolünün anlamı, rüyanın ne zaman (hangi mevsimde) görüldüğüne ve rüya sahibinin kara karşı hissiyatına (üşüyüp üşümediğine) bağlı olarak taban tabana zıt şekillerde (hem çok hayırlı hem çok şerli) yorumlanır. Rüyada lapa lapa yağan temiz bir kar, ruhsal bir detoksu, günahlardan (veya borçlardan) kurtuluşu temsil ederken; dondurucu bir soğukla yağan ve hayatı felç eden bir kar fırtınası, yaşanacak ciddi ekonomik krizlerin, soğukluk (duygusuzluk) döneminin ve ertelenen umutların bir yansımasıdır.',
      generalMeaning: 'Rüya tabiri âlimlerinin (örneğin İbn Şirin) en temel kuralı şudur: Kar (veya yağmur), kendi mevsiminde (kışın) görülürse istisnasız çok büyük bir hayırdır, berekettir, ucuzluktur ve düşmanlara karşı kazanılacak zaferdir. Ancak kış dışında (yazın veya baharda) yağan kar, hastalıklara, kederlere, devlet tarafından gelecek cezalara ve kıtlığa (pahalılığa) delalet eder. Rüyada yağan karın altında üşümeden, keyifle yürümek veya kar topu oynamak, kişinin iç huzurunu bulduğuna, tertemiz (beyaz) bir sayfa açarak yeni bir işe (veya aşka) başlayacağına yorulur. Üzerinize kar yağarken titremek ve çok üşümek, maddi olarak yaşanacak fakirliğe, eşler veya dostlar arasındaki derin bir "soğukluğa (küslüğe)" ve yalnızlığa işarettir. Rüyada yağan karların eridiğini görmek ise, dertlerin, kederlerin (buzların) eriyerek yerini bahara (mutluluğa ve ferahlığa) bırakacağını müjdeler.',
      variations: [
        {
          title: 'Rüyada Lapa Lapa Kar Yağması',
          content: 'Eğer karın yağışı hayatı olumsuz etkilemiyorsa (huzur veriyorsa), o yılın (veya o dönemin) çok bereketli geçeceğine, bol para kazanılacağına ve kişinin kalbindeki tüm kin, öfke ve haset duygularının temizleneceğine (beyazlayacağına) işarettir.'
        },
        {
          title: 'Rüyada Çığ Düşmesi (veya Kar Fırtınası)',
          content: 'Bilinçaltının "duygusal çöküş (overload)" uyarısıdır. Üstesinden gelemeyeceğiniz, çok ani gelişen (tıpkı bir çığ gibi) ve sizi ezen büyüklükte bir sorunla (borç, hastalık veya felaketle) karşılaşacağınıza dair çok güçlü ve uyarıcı bir rüyadır.'
        },
        {
          title: 'Rüyada Karda Ayak İzleri Görmek',
          content: 'Kariyerinizde veya hayat yolunuzda sizden önce o yoldan gitmiş (tecrübeli) birinin adımlarını (izini) takip etmeniz gerektiğine işarettir. Aynı zamanda, yaptığınız işlerin (veya hataların) gizli kalmayacağına, er ya da geç karda iz bırakır gibi ortaya çıkacağına yorulur.'
        },
        {
          title: 'Rüyada Kar Yemek',
          content: 'Yaz mevsiminde kar yemek çok büyük bir ferahlık, müjde, hastalıktan şifa bulmak (ateşin sönmesi) ve tatlı haberlere delalet ederken; kışın kar yemek dert, keder veya çevrenizdeki soğuk (vefasız) insanlardan göreceğiniz küçük zararlara yorulur.'
        },
        {
          title: 'Rüyada Yaz Ortasında Kar Yağması',
          content: 'Klasik tabirlerde ani bir hastalığa, planların (tatil, düğün, iş) beklenmedik bir felaket yüzünden ertelenmesine (buzdolabına kaldırılmasına) veya devlet erkanı arasında yaşanacak çok büyük ve şaşırtıcı bir krize işarettir.'
        }
      ],
      religiousMeaning: 'İslami rüya yorumcuları (Kirmani, Cafer-i Sadık) karı rızık, hayat (su) ve bazen de asker (ordu) olarak tabir etmiştir. Kar, gökten inen bir nimettir. Az yağan kar nimettir, ancak çok yağan ve yolları kapatan kar; o bölgeye gelecek olan zalim bir yöneticiye, vergi artışına, düşman işgaline veya taun (salgın hastalık) gibi ilahi bir cezaya yorulur. Rüyada kar suyundan abdest almak veya yıkanmak, günahlardan (siyahlıklardan) kar beyazlığı gibi tamamen arınmaya, hakiki ve kabul olan bir tövbeye delalet eden, maneviyatı en yüksek, en aydınlık rüyalardan biri kabul edilir.',
      psychologicalMeaning: 'Psikanalitik bağlamda kar ve buz, duyguların "donmasını (repression)", apatiyi (hissizleşmeyi) ve depresyonu sembolize eder. Rüyasında karlar içinde donduğunu gören kişi, uyanık hayatta empati yoksunu (soğuk) insanlarla çevrilidir veya yaşadığı ağır bir travma (örneğin kayıp veya aldatılma) yüzünden kendi kalbini buzdan bir kafese (duyarsızlığa) hapsetmiştir. Kar aynı zamanda "izolasyon (yalnızlık)" arketipidir; her tarafın karla kaplı olması, kişinin dış dünyayla (toplumla) iletişimini kesip kendi kabuğuna çekilme, dinlenme ve enerjisini (kış uykusu gibi) yenileme ihtiyacını yansıtır.',
      faqs: [
        {
          question: 'Rüyada çamurlu (veya kirli, siyah) kar görmek ne anlama gelir?',
          answer: 'Saflığın ve iyi niyetlerin bozulduğuna (kirletildiğine) işarettir. Temiz sandığınız (örneğin beyaz bir sayfa açtığınız) bir işin veya ilişkinin aslında çok dedikodulu, hileli ve yozlaşmış (çamurlu) bir yapıda olduğunu gösterir.'
        },
        {
          question: 'Evimin içine kar yağdığını görmek nasıl tabir edilir?',
          answer: 'Eğer kar evi yıkmıyorsa, hanenize girecek olan muazzam bir zenginliğe, şifaya ve huzura işarettir. Aile içindeki (kavga, gürültü) ateşinin sönüp yerini sükunete (ve beyazlığa) bırakacağı anlamına gelir.'
        },
        {
          question: 'Karda zorlukla yürümeye çalışmak ne demektir?',
          answer: 'Hedeflerinize ulaşırken önünüze sürekli aşılması zor (ve yavaşlatıcı) engeller çıktığını, çok büyük bir emek (efor) sarf etmenize rağmen uyanık hayatta (ve kariyerinizde) istediğiniz hızda ilerleyemediğinizi gösterir.'
        }
      ]
    },
    relatedSymbols: ['su', 'deniz']
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
console.log('Successfully created asker, araba-kullanmak, mezarlik, kar');
