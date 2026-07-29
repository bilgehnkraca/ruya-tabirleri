import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'birini-oldurmek',
    title: 'Rüyada Birini Öldürmek',
    category: 'beden',
    shortDescription: 'Rüyada birini öldürmek; sanılanın tam aksine o kişiye çok büyük bir iyilik yapmaya, uzun ömre, hatalardan dönmeye, içsel bir değişime ve derin bir vicdan muhasebesine işaret eder.',
    content: {
      introduction: 'Rüyasında cinayet işlediğini, bilerek veya yanlışlıkla birini öldürdüğünü gören kişi uykusundan kan ter içinde, büyük bir dehşet ve vicdan azabıyla uyanır. Cinayet rüyaları, psikolojik olarak insanın taşıyabileceği en ağır yüklerden biri gibi hissettirse de, rüya tabirleri dilinde ölüm ve öldürmek eylemi fiziki bir sonu değil, "manevi bir değişimi" temsil eder. Rüyada öldürmek, bir durumu (veya bir karakter özelliğini) ortadan kaldırmak, birine yardım etmek veya büyük bir günahtan (haksızlıktan) dönmek anlamlarını taşır. Kimi öldürdüğünüz (tanıdık biri, tanımadığınız biri veya kendiniz) rüyanın asıl şifresidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada birini öldürdüğünü görmek (veya cinayet işlemek), rüyadaki dehşetin aksine "öldürülen kişiye uyanık hayatta çok büyük bir iyilik yapmaya" delalet eder. Rüyasında tanıdığı birini öldürdüğünü gören kimse, o kişiye (belki de farkında olmadan) çok büyük bir maddi veya manevi destekte bulunur, o kişiyi dertlerinden kurtarır. İslami rüya tabirlerinde cinayet, bazen kişinin kendi nefsine zulmetmesi (büyük bir günah işlemesi) anlamına da gelse, genellikle "uzun ömür" ve "fayda sağlama" olarak yorulur. Tanımadığı birini öldürmek, içsel bir korkuyu yenmeye, kötü bir alışkanlığı (mesela sigarayı) tamamen bırakmaya işarettir. Rüyada nefsi müdafaa için birini öldürmek, haksızlığa karşı büyük bir zafer kazanmaya ve hakkını söke söke almaya delalet eder.',
      variations: [
        {
          title: 'Rüyada Kendi Çocuğunu Öldürmek',
          content: 'Kur\'an-ı Kerim\'deki (Hızır aleyhisselam) kıssasından ve cahiliye adetlerinden yola çıkarak, bu rüya kişinin çocuğuna (beklenmedik bir şekilde) çok büyük bir servet bırakacağına veya hayırlı bir rızka kavuşacağına yorulur.'
        },
        {
          title: 'Rüyada Kendini Öldürmek (İntihar Etmek)',
          content: 'Kişinin geçmişteki tüm günahlarına ve hatalarına kesin bir dille tövbe ettiğine, "eski benliğini" öldürerek yepyeni, tertemiz bir karaktere (yeni bir hayata) doğacağına işarettir.'
        },
        {
          title: 'Rüyada Yanlışlıkla (Kazara) Birini Öldürmek',
          content: 'Gerçek hayatta istemeden birinin kalbini kırmaya, ağızdan çıkan yanlış bir söz yüzünden yaşanacak büyük bir pişmanlığa veya ödenmesi gereken bir kefarete (sadakaya) delalet eder.'
        },
        {
          title: 'Rüyada Öldürdüğü Kişinin Dirildiğini Görmek',
          content: 'Çok umutsuz görünen, "bitti" denilen bir meselenin (veya aşkın) küllerinden yeniden doğacağına, kişinin geçmiş hatalarıyla tekrar yüzleşmek zorunda kalacağına yorulur.'
        },
        {
          title: 'Rüyada Silahla Birini Vurarak Öldürmek',
          content: 'O kişiye karşı sarf edilecek çok ağır, sarsıcı ama bir o kadar da "gerçek" sözlere, tartışmada karşı tarafı susturup haklı çıkmaya işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre rüyada birini haksız yere öldürmek büyük bir günahtır ve kişinin inancındaki eksikliğe, bir haksızlığa ortak olmasına yorulur. Ancak rüyada öldürülen kişi için bu durum hayırdır. Kirmani der ki: "Rüyada birini öldürdüğünü gören, o kimseye mal ve menfaat sağlar." Hz. Ömer\'den (r.a) aktarılan bazı tabirlere göre, kendi kendini öldürmek (tövbe-i nasuh) gerçek tövbeye delalet eder. Rüyada savaşta (cihatta) düşman öldürmek ise, dinde metanete, ticarette büyük kâra ve mutlak galibiyete işarettir.',
      psychologicalMeaning: 'Cinayet rüyaları psikolojide bastırılmış öfkenin (agresyonun) zirvesidir. Rüyasında patronunu veya sevmediği bir akrabasını öldüren kişi, o kişinin hayatındaki otoritesinden kurtulmak, o bağı tamamen koparmak istemektedir. Öte yandan, rüyada öldürülen kişi bazen rüya sahibinin "kendi özelliğidir." Örneğin rüyada hırsız öldürmek, kendi içinizdeki açgözlü (veya kurnaz) yönü terbiye etmeye (öldürmeye) çalıştığınızın göstergesidir.',
      faqs: [
        {
          question: 'Rüyada cinayet işleyip kaçmak ne anlama gelir?',
          answer: 'Uyanık hayatta yaptığınız büyük bir hatanın veya söylediğiniz bir yalanın ortaya çıkmasından çok korktuğunuza (vicdan azabına) işarettir.'
        },
        {
          question: 'Rüyada birini boğarak öldürmek nedir?',
          answer: 'Bir kişiyi sözlerinizle, baskılarınızla veya aşırı kıskançlığınızla çok fazla sıktığınıza (boğduğunuza) ve ona hareket alanı bırakmadığınıza delalet eder.'
        },
        {
          question: 'Rüyada yılan veya zehirli hayvan öldürmek cinayetle aynı mıdır?',
          answer: 'Hayır, o çok hayırlıdır. Yılan öldürmek, sinsi bir düşmanı tamamen zararsız hale getirmeye ve büyük bir tehlikeden kurtulmaya yorulur.'
        }
      ],
      relatedSymbols: ['olum', 'kavga-etmek', 'kan']
    }
  },
  {
    slug: 'kiraz',
    title: 'Rüyada Kiraz Görmek',
    category: 'doga',
    shortDescription: 'Rüyada kiraz görmek; helal ve tatlı kazanca, sevinçli bir habere, sağlığa, aşka, çabuk elde edilecek kısa süreli mutluluklara ve berekete işaret eder.',
    content: {
      introduction: 'Baharın müjdecisi ve en sevilen meyvelerden biri olan kiraz, rüyalarda neşenin, tatlı bir hayatın, sağlığın ve aşkın (özellikle şekli ve rengi itibariyle dudakların/kalbin) sembolüdür. Çift çift büyümesi nedeniyle ikili ilişkileri, sadakati ve eşleri de temsil eder. Rüyada mevsiminde kıpkırmızı, sulu ve parlak bir kiraz görmek, rüya sahibinin hayatında yaşanacak çok taze, heyecan verici ancak belki de kiraz mevsimi gibi "kısa sürecek" çok yoğun bir mutluluğa işaret eder. Kirazın yenmesi, toplanması veya ekşi olması tabiri değiştiren detaylardır.',
      generalMeaning: 'Rüya tabircilerinin büyük bir kısmına göre rüyada (mevsiminde) kiraz görmek, kişinin eline geçecek çok helal, zahmetsiz ve tatlı bir paraya (rızka) delalet eder. Rüyasında ağaçtan kiraz toplayıp yediğini gören kişi, kendi emeklerinin ve iyi niyetinin meyvesini toplar; bekar ise çok sevecen, güler yüzlü ve tatlı dilli biriyle flört eder (veya evlenir). Kiraz aynı zamanda sağlığı simgeler; hasta birinin rüyada tatlı kiraz yemesi tez vakitte şifa bulacağına, yanaklarına kan (renk) geleceğine işarettir. Rüyada kiraz bahçesi (ağacı) görmek, cömertliğe, neşeli kalabalıklara, düğün veya nişan gibi çok renkli kutlamalara yorulur. Ancak mevsimi dışında (kışın) kiraz görmek, aceleyle alınmış kararlara, gerçekleşmeyecek tatlı hayallere veya kısa süreli (gelip geçici) bir rahatsızlığa delalet edebilir.',
      variations: [
        {
          title: 'Rüyada Çürük veya Kurtlu Kiraz Görmek',
          content: 'Dışarıdan çok cazip ve güzel görünen (size cazip sunulan) bir ilişkinin veya işin, aslında içinin bozuk olduğuna (aldatmaca ve hüsrana) işaret eden güçlü bir uyarıdır.'
        },
        {
          title: 'Rüyada Kiraz Çekirdeği Görmek',
          content: 'Geleceğe yatırım yapmaya, atılacak sağlam temellere ve ufak birikimlerle alınacak büyük bir mala yorulur. Çekirdeği yutmak ise içe atılan, söylenmeyen bir sirra delalet eder.'
        },
        {
          title: 'Rüyada Beyaz (Sarı) Kiraz Görmek',
          content: 'Kırmızı kiraza göre daha kalıcı bir sağlığa, saf bir sevgiye ve gösterişten uzak, sade bir yaşantının getirdiği kalıcı iç huzuruna işarettir.'
        },
        {
          title: 'Rüyada Ekşi Kiraz (Vişne) Yemek',
          content: 'Hayatın tatlı olduğu kadar acı/ekşi yönlerini de tecrübe etmeye, iş hayatında ufak tefek pürüzlere (ağız tadı bozukluğuna) veya nazara yorulur.'
        },
        {
          title: 'Rüyada Kış Günü Kiraz Görmek',
          content: 'Zamanı gelmeden istenen şeylere, sabırsızlığa ve kişinin elindeki fırsatların henüz olgunlaşmadığına, bir süre daha beklemesi gerektiğine delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde tatlı meyveler her zaman rızık, cennet nimeti ve şifa olarak yorumlanır. Nablusi\'ye göre rüyada tatlı meyve (kiraz, üzüm vb.) görmek, dinde ihlasa, iyi ahlaka ve helal kazanmaya yorulur. Rüyasında tanımadığı birinden kiraz aldığını gören, hiç ummadığı bir kapıdan ferahlık bulur. Evli bir kadının kiraz görmesi, güzelliğinin ve eşiyle olan muhabbetinin artacağına; bekar birinin görmesi ise ahlaklı ve neşeli bir yuvaya işarettir.',
      psychologicalMeaning: 'Kiraz, parlak kırmızısı ve çifte yapısıyla psikolojide (özellikle aşk ve flört evresinde) cinsel çekimi, romantizmi ve "ilk heyecanları" (honeymoon phase) simgeler. Rüyasında sürekli kiraz yediğini gören kişi, uyanık hayatında daha fazla neşe, tatlılık ve romantik heyecan arzulamaktadır. Hayatın monotonluğundan sıkılmış, "kiraz mevsiminin" o kısa ama capcanlı coşkusunu yaşamaya ihtiyaç duymaktadır.',
      faqs: [
        {
          question: 'Rüyada ağaçtan dalıyla birlikte kiraz koparmak nedir?',
          answer: 'Bir işten (veya aileden) köklü bir destek alarak kazanç sağlamaya, "salkım salkım" gelecek şansa ve birden fazla sevindirici habere işarettir.'
        },
        {
          question: 'Rüyada kiraz reçeli yapmak ne anlama gelir?',
          answer: 'Güzel günleri (kazancı) geleceğe saklamaya, çok tutumlu (tasarruflu) olmaya ve hanedeki neşenin, ağız tadının uzun yıllar bozulmayacağına yorulur.'
        },
        {
          question: 'Rüyada ölüye kiraz ikram etmek kötü müdür?',
          answer: 'Hayır, ölen kişinin ahirette (cennet bahçelerinde) olduğuna ve sizin ona okuduğunuz duaların çok tatlı bir hediye gibi ulaştığına delalet eder.'
        }
      ],
      relatedSymbols: ['kirmizi-renk', 'uzum', 'agac']
    }
  },
  {
    slug: 'sel',
    title: 'Rüyada Sel Görmek',
    category: 'doga',
    shortDescription: 'Rüyada sel görmek; kontrol edilemeyen büyük değişimlere, duygusal patlamalara, toplumsal olaylara, bazen büyük bir yıkıma bazen de düşmanın zararına işaret eder.',
    content: {
      introduction: 'Su, normal şartlarda hayatın ve rahmetin kaynağıdır; ancak kontrolden çıkarak sele (afete) dönüştüğünde, önüne çıkan her şeyi yıkan devasa bir felaket sembolü olur. Rüyalarda sel görmek, rüya sahibinin hayatında aniden gelişen, kontrol edemediği ve kendini akıntısına kaptırdığı olayları temsil eder. Rüyada selin rengi (bulanık mı, berrak mı), selin nereden geldiği ve selden kurtulup kurtulmadığınız rüyanın size verdiği korkutucu ama çok önemli mesajın anahtarını oluşturur.',
      generalMeaning: 'Rüya tabircilerine göre rüyada yıkıcı ve çamurlu bir sel görmek, genellikle iyiye yorulmaz; o bölgeye gelecek bir salgın hastalığa, devlet adamlarından (veya patrondan) gelecek büyük bir baskıya, fitneye ve düşman saldırısına delalet eder. Rüyasında evini sel bastığını gören kişinin hanesinde çok büyük, şiddetli bir tartışma patlak verir veya maddi olarak büyük bir zarara uğrar. Sel sularının her yeri kapladığını ancak kimseye zarar vermediğini görmek, bir düşman ordusunun gelip zarar vermeden gideceğine (veya korkulan bir belanın teğet geçeceğine) işarettir. Rüyada sele kapıldığını görmek, kişinin duygusal bir çöküntü yaşadığına, borç veya sıkıntılarının boyunu aştığına yorulurken; selden yüzerek kurtulmak, tüm bu devasa tehlikelerden ve düşmanların hilelerinden son anda, büyük bir şansla (ve ilahi yardımla) kurtuluşa ermek demektir.',
      variations: [
        {
          title: 'Rüyada Yağmur Sonrası Berrak Sel Görmek',
          content: 'Suyun yıkıcı değil de sadece taşkın ve berrak olması, çok büyük ve şiddetli bir sevince, bölgeye gelecek muazzam bir berekete ve zenginliğe yorulur.'
        },
        {
          title: 'Rüyada Sel Suyunun Kan Renginde Olması',
          content: 'Çok ciddi bir ilahi uyarıdır. Bölgede yaşanacak kanlı bir çatışmaya, büyük bir adaletsizliğe, salgın hastalığa ve toplumun genelinde yaşanacak büyük bir yasa (hüzne) delalet eder.'
        },
        {
          title: 'Rüyada Dağdan Gelen (Heyelanlı) Sel Görmek',
          content: 'Beklenmeyen, çok ani ve üst düzey bir otoriteden (devlet veya büyük bir patrondan) gelecek ağır cezalara, ani iş kayıplarına işarettir.'
        },
        {
          title: 'Rüyada Selden Birini Kurtarmak',
          content: 'Manevi mertebenizin çok yüksek olduğuna, çaresiz kalmış bir dosta el uzatarak onu büyük bir felaketten çekeceğinize ve dualarını alacağınıza yorulur.'
        },
        {
          title: 'Rüyada Sel Sularının Çekildiğini Görmek',
          content: 'Zor günlerin, fırtınanın ve krizin artık geride kaldığına, hasar tespiti yapıldıktan sonra yepyeni (temizlenmiş) bir sayfa açılacağına delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Kirmani) sel, "Zalim düşman ve fitne" olarak tabir edilmiştir. Kur\'an-ı Kerim\'deki Nuh tufanı ve Sebe halkının helakı (Arim seli) örneklerinden yola çıkılarak, rüyada sel görmek, Allah\'ın o bölge halkına isyanları (veya haksızlıkları) sebebiyle verdiği bir ceza, ihtar veya hastalık olarak yorumlanır. Rüyada sel suyunu yönlendirdiğini (engellediğini) gören kişi, büyük bir fitneyi durdurur, düşmanına galip gelir ve toplumun huzurunu koruyan cesur bir lider olur.',
      psychologicalMeaning: 'Psikolojide sel, kesinlikle "Duygusal Taşkınlık" ve "Kontrol Kaybı"dır. Su bilinçaltını temsil ederken, sel bu bilinçaltının taşıp rasyonel zihni (evi/sokakları) işgal etmesidir. Rüyasında sele kapıldığını gören kişi, uyanık hayatta öfke, üzüntü veya stres gibi duyguların altında ezilmekte, olaylara artık müdahale edemediği, sürüklenip gittiği bir tükenmişlik (burnout) sendromu yaşamaktadır.',
      faqs: [
        {
          question: 'Rüyada selde yüzmek ne anlama gelir?',
          answer: 'Kriz anlarında bile soğukkanlılığınızı koruyabildiğinize, felaketler içinde hayatta kalma (survival) gücünüzün çok yüksek olduğuna işarettir.'
        },
        {
          question: 'Rüyada sel suyu içmek nedir?',
          answer: 'Eğer su çamurluysa haram kazanca (veya hastalığa), berraksa hiç ummadığınız, zorlu bir kaynaktan elde edeceğiniz bir menfaate yorulur.'
        },
        {
          question: 'Rüyada yolda giderken aniden sel çıkması kötü müdür?',
          answer: 'Planladığınız bir işte (veya seyahatte) karşınıza çıkacak çok ani, öngörülemez ve mecburen ertelemenize sebep olacak büyük bir engele delalet eder.'
        }
      ],
      relatedSymbols: ['su', 'yagmur', 'deniz']
    }
  },
  {
    slug: 'nisanlanmak',
    title: 'Rüyada Nişanlanmak',
    category: 'beden',
    shortDescription: 'Rüyada nişanlandığını görmek; yeni bir sözleşmeye, hayırlı başlangıçlara, bir tehlikeden kurtulmaya, bazen de yalnızlığa duyulan korkuya işaret eder.',
    content: {
      introduction: 'Nişanlanmak, evliliğe (bütünlüğe) giden yolda verilen en güçlü "söz" ve toplumsal bir ilandır. Rüyalarda nişanlanmak, rüya sahibinin ilişki durumuna (bekar veya evli) bağlı olarak tamamen farklı şekillerde yorumlanır. Bekar biri için evlilik arzusu ve yeni başlangıçlar anlamına gelirken, evli birinin rüyada tekrar nişanlanması, hayatındaki bazı eksiklikleri veya sorumlulukları yeniden gözden geçirmesini işaret eder. Nişan yüzüğünün takılması, alınan bir sözün (taahhüdün) resmiyet kazanmasıdır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada tanınan, bilinen ve sevilen biriyle nişanlanmak (yüzük takmak), bekar kişiler için gerçek hayatta çok hayırlı bir evliliğe, mutlu bir yuva kurmaya ve sevinçli haberlere delalet eder. Rüyada tanımadığı, meçhul biriyle nişanlandığını görmek ise, çok büyük (ama riskli) bir iş ortaklığına, yeni bir sözleşme imzalamaya veya rüya sahibinin hayatında aniden belirecek, onu bambaşka bir yola sokacak (yeni bir kariyere vb.) keskin bir viraja işarettir. Evli bir kadının veya erkeğin rüyada başka biriyle nişanlandığını görmesi, genellikle maddi veya manevi bir sıkıntıya, aile içi güven sarsıntılarına, bazen de zorunlu (istemeyerek) girişilecek bir işe yorulur. Rüyada nişan bozmak (yüzük atmak) ise, verilen bir karardan vazgeçmeye, iptal olan bir ihaleye veya büyük bir anlaşmazlığın eşiğinden dönmeye delalet eder.',
      variations: [
        {
          title: 'Rüyada Kendi Nişan Törenini (Eğlencesini) Görmek',
          content: 'Eğer rüyada çalgı, gürültü ve abartılı bir oyun havası yoksa, mutluluğa ve berekete işarettir. Ancak davullu zurnalı, çok gürültülü bir nişan görmek (eski tabirlere göre) o bölgede yaşanacak büyük bir hüzne (kargaşaya) yorulabilir.'
        },
        {
          title: 'Rüyada Zorla Nişanlanmak',
          content: 'Rüya sahibinin gerçek hayatta üzerine yıkılan, istemediği ancak boyun eğmek zorunda kaldığı ağır sorumluluklara (baskılara) ve özgürlüğünün kısıtlandığı hissine delalet eder.'
        },
        {
          title: 'Rüyada Nişan Yüzüğünün Düşmesi (veya Kırılması)',
          content: 'Çok hevesle başlanan bir projenin (veya ilişkinin) hayal kırıklığıyla sonuçlanacağına, verilen sözlerin tutulmayacağına ve güven kaybına işaret eden uyarıcı bir rüyadır.'
        },
        {
          title: 'Rüyada Eski Sevgiliyle Nişanlanmak',
          content: 'Kişinin geçmişle (eski hesaplarla) olan bağını henüz koparamadığına, yarım kalmış meselelerin tekrar gün yüzüne çıkacağına ve bir kapanış (closure) yapması gerektiğine yorulur.'
        },
        {
          title: 'Rüyada Yaşlı (veya Ölmüş) Biriyle Nişanlanmak',
          content: 'Yaşlı biriyle nişanlanmak büyük bir tecrübeden fayda sağlamaya; ölmüş biriyle nişanlanmak ise imkansız bir hayalin peşinde koşmaya veya mirasla ilgili (geçmişten gelen) bir habere delalet eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Nablusi) nişan, akit (sözleşme) demektir. Rüyada bir kişiyle nişanlanmak, o kişiyle aranızda bir hukuk, bir anlaşma (ticaret vb.) doğacağına işarettir. Rüyada nişan yüzüğü takmak (eğer altın ise) erkek için dinde zafiyete (altın yasağından ötürü) veya sıkıntıya; gümüş yüzük takmak ise dinde kuvvete, helal kazanca ve sünnete uymaya delalet eder. Nişanlanmak aynı zamanda, dünyevi arzuların (evlilik ve yuva) helal yoldan talep edilmesinin güzel bir yansımasıdır.',
      psychologicalMeaning: 'Psikolojide nişanlanmak, "Bağlılık" (Commitment) kavramının sembolüdür. Rüyada nişanlanmaktan korkan veya kaçan biri, uyanık hayatta sadece romantik ilişkilerde değil, iş veya kariyer gibi konularda da bağlanma korkusu (commitment issue) yaşıyordur. Öte yandan, rüyada sürekli nişanlandığını görmek, kişinin yalnız kalma korkusunu, sevilme, onaylanma ve "seçilen kişi" (chosen one) olma arzusunu yoğun bir şekilde yaşadığını gösterir.',
      faqs: [
        {
          question: 'Rüyada nişan elbisesi (tuvalet) giymek nedir?',
          answer: 'Eğer elbise temiz ve güzelse çok büyük bir sevince, murada ermeye; yırtık veya çirkinse beklentilerin karşılanmamasına ve dedikoduya yorulur.'
        },
        {
          question: 'Evliyim ama rüyamda tekrar kendi eşimle nişanlanıyorum, bu ne anlama gelir?',
          answer: 'Harika bir rüyadır. Eşinizle aranızdaki aşkın tazeleneceğine, ilişkinizin ilk günkü heyecanına döneceğine veya aileye katılacak yeni bir berekete işarettir.'
        },
        {
          question: 'Rüyada arkadaşının nişanına gitmek ne demektir?',
          answer: 'O arkadaşınızdan (veya o çevreden) çok müjdeli, güzel bir haber alacağınıza ve onların mutluluğuna (başarısına) ortak olacağınıza delalet eder.'
        }
      ],
      relatedSymbols: ['yuzuk', 'dugun', 'gelinlik']
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
