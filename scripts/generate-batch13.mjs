import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'namaz-kilmak',
    title: 'Rüyada Namaz Kılmak',
    category: 'din',
    shortDescription: 'Rüyada namaz kılmak; duaların kabulüne, günahlardan arınmaya, verilen sözlerin tutulmasına, yüksek bir mertebeye ulaşmaya ve mutlak huzura delalet eder.',
    content: {
      introduction: 'İslam dininin direği olan namaz, kulun Yaratıcı ile kurduğu en doğrudan ve en saf iletişim yoludur. Rüyalarda namaz kılmak, rüya sahibinin manevi dünyasının temizliğine, vicdanının sesini dinlediğine ve ilahi bir koruma altında olduğuna işaret eder. Namaz rüyaları, görülen rüyalar arasında "sadık rüya" (gerçek rüya) olmaya en yakın ve en müjdeli sembollerden biridir. Namazın nerede kılındığı (camide, evde, Kabe\'de), hangi vaktin kılındığı (sabah, cuma, bayram) ve namazın tam olarak bitirilip bitirilmediği tabirin seyrini değiştiren temel unsurlardır.',
      generalMeaning: 'Rüya tabircilerine göre rüyada farz namazı kıldığını görmek, kişinin çok büyük bir sıkıntıdan kurtulacağına, dini vecibelerini yerine getiren temiz ahlaklı bir insan olduğuna ve uzun süredir dilediği bir duanın nihayet Allah katında kabul göreceğine delalet eder. Rüyada cemaatle birlikte (camide) namaz kılmak, birlik ve beraberliğe, rüya sahibinin toplum içinde çok sevilip sayılacağına, sözü dinlenen adil bir yönetici (veya lider) konumuna yükseleceğine işarettir. Rüyada namazı eksiksiz kılıp selam verdiğini gören kişi, içini kemiren tüm endişelerden (borç, hastalık, korku) tamamen arınarak feraha çıkar. Ancak namazı yarıda kesmek veya yanlış yöne (kıble dışına) doğru namaz kılmak, inançta zafiyete, yoldan sapmaya, nefsine yenik düşmeye veya haram bir işe niyetlenmeye dair çok güçlü bir uyarıdır.',
      variations: [
        {
          title: 'Rüyada Cuma Namazı Kılmak',
          content: 'Cuma namazı, toplanma ve kutlamadır. Rüyada cuma namazı kıldığını görmek, kişinin çok büyük bir kalabalıkla birlikte hayırlı bir iş (düğün, zafer kutlaması) yaşayacağına ve günahlarının affına yorulur.'
        },
        {
          title: 'Rüyada Cenaze Namazı Kılmak',
          content: 'Şehitliğe, ömrün uzunluğuna, vefat eden kişi için bol bol dua etmeye veya bazen dini zayıf, münafık bir insana bilmeden aracılık/şefaat etmeye işarettir.'
        },
        {
          title: 'Rüyada Namazı Gözyaşlarıyla (Ağlayarak) Kılmak',
          content: 'Manevi mertebenin çok yükseldiğine, kişinin tam bir teslimiyet içinde olduğuna ve mevcut dertlerinin ardından tarifsiz bir mutluluk (ilahi hediye) alacağına delalet eder.'
        },
        {
          title: 'Rüyada Abdestsiz Namaz Kıldığını Görmek',
          content: 'Çok büyük bir hataya, sermayesi (altyapısı) olmadan büyük bir işe girişmeye, dini konularda riyakarlığa veya kişinin taşıyamayacağı bir sorumluluk altına girmesine yorulur.'
        },
        {
          title: 'Rüyada Kabe\'de Namaz Kılmak',
          content: 'Hacca veya umreye gitme niyetine, duaların doğrudan kabulüne, kişinin devlet büyüklerinden büyük bir ihsan (iyilik) göreceğine ve düşmanlarının şerrinden emin olacağına işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin (r.a) şöyle der: "Rüyada farz namaz kıldığını gören kimse hacca gider, kötü huylarını terk eder ve emaneti sahibine verir. Sünnet veya nafile namaz kıldığını gören, peygamberin yolundan ayrılmaz, yetime ve yoksula yardım eder." Nablusi\'ye göre, rüyada doğuya doğru (kıbleyi arkaya alarak) namaz kılmak bidate (dinde olmayan şeylere inanmaya); sırtını kıbleye dönmek ise İslam\'dan uzaklaşmaya yorulur. Rüyada namaz kılarken rüku ve secdeyi tam yapmak, kişinin Allah\'ın emirlerine boyun eğdiğine ve dünyevi kibirden arındığına işarettir.',
      psychologicalMeaning: 'Psikolojide ibadet eylemleri (özellikle namaz gibi rasyonel kuralları olan ritüeller), kişinin zihnini disipline etme, içsel huzuru (meditasyon) bulma ve kaostan kaçarak güvenli bir alana (ruhani merkeze) sığınma ihtiyacını simgeler. Rüyada namaz kılmak, kişinin uyanık hayatta kontrol edemediği olaylar karşısında teslim bayrağını çektiğini (kaderine rıza gösterdiğini) ve bu kabulleniş sayesinde derin bir ruhsal rahatlama yaşadığını gösterir.',
      faqs: [
        {
          question: 'Rüyada namaz kılarken gülmek ne anlama gelir?',
          answer: 'Dünya heveslerine çok fazla daldığınıza, ciddi bir işi hafife aldığınıza ve ahlaki konularda daha dikkatli (saygılı) olmanız gerektiğine dair bir ihtardır.'
        },
        {
          question: 'Rüyada namazı şaşırıp yanlış rekat kılmak nedir?',
          answer: 'Gerçek hayatta aldığınız veya alacağınız çok önemli bir kararda ikileme düştüğünüze, zihninizin çok karışık olduğuna yorulur.'
        },
        {
          question: 'Kadın birinin rüyada cemaate imamlık yaptığını görmesi kötü müdür?',
          answer: 'Geleneksel tabirlere göre olağandışı bir durum olduğu için, o bölgede çıkacak bir kargaşaya, yeniliğe (bidate) veya toplum yapısını değiştirecek bir olaya işaret eder.'
        }
      ],
      relatedSymbols: ['kabe', 'aglamak', 'su']
    }
  },
  {
    slug: 'kurt',
    title: 'Rüyada Kurt Görmek',
    category: 'hayvanlar',
    shortDescription: 'Rüyada kurt görmek; asalete, cesarete, güce, zalim ve hilekar bir düşmana, hırsızlığa ve kişinin içindeki evcilleştirilmemiş vahşi doğaya işaret eder.',
    content: {
      introduction: 'Kurt, Türk kültüründe asaletin, özgürlüğün, bağımsızlığın ve rehberliğin (Bozkurt) sembolüyken; bazı İslami ve klasik rüya tabirlerinde tehlikenin, yırtıcılığın ve zalim düşmanların simgesidir. Rüyada kurt görmek, rüya sahibinin kültürel kodlarına göre çok farklı şekillerde yorumlanabilen, son derece güçlü ve karizmatik bir semboldür. Kurt, yalnız başına da olsa hayatta kalmayı başaran, zeki ve korkusuz bir hayvandır. Rüyada kurdun size saldırması, uluması veya sizin kurdu evcilleştirmeniz rüyanın size fısıldadığı şifrelerdir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada kurt görmek, genellikle gaddar, zalim, sözünde durmayan ve tehlikeli bir düşmana (veya zalim bir yöneticiye) işaret eder. Rüyasında evine bir kurt girdiğini gören kişinin hanesine hırsız girebilir veya kendisine çok yakın (dost görünen) sinsi bir insandan zarar görebilir. Rüyada bir kurtla boğuştuğunu ve onu yendiğini görmek, gerçek hayatta çok acımasız ve güçlü bir düşmana karşı verilecek büyük bir savaşa ve kesin bir galibiyete delalet eder. Rüyada kurdun ısırması veya yaralaması, haksızlığa uğramaya ve maddi zarara yorulur. Ancak rüyada bir kurt sürüsüne liderlik ettiğini (veya bir kurtla dost olduğunu) görmek; rüya sahibinin inanılmaz bir cesarete sahip olduğuna, gözü pek karakteri sayesinde toplumda çok yüksek, erişilmez ve korkulan bir makama (askeri bir liderliğe) yükseleceğine işarettir.',
      variations: [
        {
          title: 'Rüyada Kurt Uluması Duymak',
          content: 'Gizli kalmış bir tehlikenin yaklaştığına, arkadan çevrilen işlere veya rüya sahibinin çok önemli ve sarsıcı bir sırrı öğreneceğine (uyarı çanlarına) delalet eder.'
        },
        {
          title: 'Rüyada Beyaz Kurt Görmek',
          content: 'Genellikle çok nadir ve hayırlı bir rüyadır. Kişinin hayatına girecek bilge bir rehbere, asil bir dosta ve zor zamanlarda gelecek ilahi bir yardıma (yol göstericiye) yorulur.'
        },
        {
          title: 'Rüyada Kurda Dönüşmek',
          content: 'Kişinin uyanık hayatta merhametini bir kenara bırakarak daha sert, daha acımasız ve daha yırtıcı bir karaktere büründüğüne (hayatta kalma moduna geçtiğine) işarettir.'
        },
        {
          title: 'Rüyada Kurt Yavrusu (Enik) Görmek',
          content: 'Zalim ve hilekar birinin çocuğunu büyütmeye (veya ona yardım etmeye), evde beslenen sinsi bir düşmana veya henüz büyümemiş bir soruna delalet eder.'
        },
        {
          title: 'Rüyada Kurdun Koyun Kaptığını Görmek',
          content: 'Zalim bir yöneticinin (veya patronun) haklı ve masum insanlara eziyet edeceğine, rüya sahibinin gözü önünde yaşanacak büyük bir adaletsizliğe yorulur.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre kurt, zalim kral, yalancı bir hırsız veya gaddar bir düşmandır. Hz. Yusuf kıssasından yola çıkarak (kardeşlerinin Yusuf\'u kurdun yediğini iddia etmesi üzerine), rüyada kurt görmek aynı zamanda yalana, iftiraya ve kardeş (veya çok yakın dost) ihanetine de delalet eder. Rüyada kurdun eti haram kazanca, sütü ise düşmandan korkmaya ve hastalığa (veya güce) yorulur. Kirmani\'ye göre, evine kurt giren kimse, devlet büyüklerinden veya askerlerden korkuya düşer.',
      psychologicalMeaning: 'Psikolojide kurt, "Yalnız Kurt" (Lone Wolf) arketipini temsil eder. Rüya sahibi kendini toplumdan soyutlanmış, anlaşılmayan ama kendi kurallarıyla ayakta duran biri olarak hissediyor olabilir. Ayrıca kurt, Carl Jung\'un "Gölge" (Shadow) kavramındaki vahşi, ehlileştirilemeyen ilkel içgüdüleri simgeler. Rüyada kurttan korkup kaçmak, kişinin kendi içindeki agresyondan, cinsellikten veya rekabetçi vahşi doğasından (özgürlüğünden) korkup kaçması anlamına gelir.',
      faqs: [
        {
          question: 'Rüyada kurt köpeği görmek kurtla aynı mıdır?',
          answer: 'Hayır, kurt köpeği sadakati (köpek) ve gücü (kurt) birleştirdiği için, size çok bağlı, çok yetenekli ama düşmanlarınıza karşı acımasız bir korumaya/dosta işaret eder.'
        },
        {
          question: 'Rüyada kurt tarafından kovalanmak nedir?',
          answer: 'Uyanık hayatta güçlü rakiplerin nefesini ensenizde hissettiğinize, bir borcun veya büyük bir sorumluluğun peşinizi bırakmadığına yorulur.'
        },
        {
          question: 'Rüyada kurdun yüzünüze doğru hırlaması ne anlama gelir?',
          answer: 'Çok açık ve net bir tehdit alacağınıza, yüzleşmeniz gereken tehlikeli ve kaba bir insanın (veya rakibin) size meydan okuduğuna işarettir.'
        }
      ],
      relatedSymbols: ['kopek', 'ayi', 'aslan']
    }
  },
  {
    slug: 'uzum',
    title: 'Rüyada Üzüm Görmek',
    category: 'doga',
    shortDescription: 'Rüyada üzüm görmek; ağız tadına, helal rızka, toplu paraya, sürekli olan menfaate, dostlukların güzelliğine ve dünya nimetlerine işaret eden harika bir semboldür.',
    content: {
      introduction: 'Üzüm, tarih boyunca bereketi, doğurganlığı, kutlamayı ve Tanrı\'nın lütfunu sembolize eden en asil meyvelerden biridir. Salkımlar halinde büyümesi, birliğin, ailenin ve çoğalan servetin simgesidir. Rüyalarda üzüm görmek (özellikle mevsiminde görülmüşse), rüya tabircileri tarafından istisnasız olarak en hayırlı, en tatlı ve en bereketli rüyalardan biri kabul edilir. Üzümün rengi (siyah, beyaz, yeşil), tadı ve rüyanın mevsiminde görülüp görülmediği, tabirin inceliklerini ortaya çıkarır.',
      generalMeaning: 'Rüya tabircilerinin büyük bir kısmına göre rüyada mevsiminde taze, tatlı ve sulu bir üzüm yediğini görmek, kişinin eline geçecek çok büyük, helal ve "salkım salkım" (arka arkaya gelen) bir servete, geniş rızka delalet eder. Rüyada salkımından üzüm koparıp yemek, bir kadından (eğer bekarsa evlenerek, evliyse eşinden veya annesinden) gelecek büyük bir menfaate ve mutluluğa yorulur. Beyaz (sarı) üzüm görmek, şifaya, saf bir sevgiye ve uzun ömre; siyah (kara) üzüm görmek ise, kışın görülürse bazen hastalığa ancak mevsiminde görülürse çok büyük bir güce, devlete ve kalıcı mala işarettir. Rüyada asma (üzüm bağı) görmek, rüya sahibinin ömrü boyunca bolluk içinde yaşayacağı bir düzen (iş veya aile) kuracağına, dost meclislerinin aranan, cömert ve neşeli ismi olacağına delalet eder.',
      variations: [
        {
          title: 'Rüyada Kuru Üzüm Görmek',
          content: 'Zahmetle biriktirilmiş, çok sağlam ve garantili bir birikime (paraya), sabrın sonunda elde edilecek uzun vadeli büyük bir yatırıma yorulur.'
        },
        {
          title: 'Rüyada Üzüm Suyu (Şıra) Sıkmak',
          content: 'Makamca çok yükselmeye, liderliğe, yöneticiliğe ve (Yusuf Suresi\'ndeki tabire dayanarak) hapislikten veya sıkıntıdan kurtulup devlet kapısında büyük bir güce erişmeye işarettir.'
        },
        {
          title: 'Rüyada Mevsimsiz (Kışın) Üzüm Görmek',
          content: 'Eğer üzüm tatlıysa zamanından önce (erken) gelecek bir başarıya; ancak çürük veya ekşiyse aceleyle alınmış kararlar yüzünden yaşanacak sağlık sorunlarına (veya dedikoduya) yorulur.'
        },
        {
          title: 'Rüyada Üzüm Bağı (Asma) Budamak',
          content: 'Kişinin hayatındaki gereksiz insanları, masrafları ve zararlı alışkanlıkları kesip atacağına, bu sayede çok daha güçlü ve verimli bir hayata kavuşacağına delalet eder.'
        },
        {
          title: 'Rüyada Ekşi (Koruk) Üzüm Yemek',
          content: 'Henüz olgunlaşmamış (aceleye getirilmiş) bir işten elde edilecek haram kazanca, dilde ekşilik (acı söz) işitmeye veya midede (bedende) ufak bir rahatsızlığa işarettir.'
        }
      ],
      religiousMeaning: 'İbn Şirin\'e göre üzüm; güzel bir kadın, bereketli bir mal ve şifadır. Hz. Nuh\'un tufandan sonra ektiği ilk meyvelerden biri olduğu için yenilenme ve hayatta kalma sembolüdür. Rüyada beyaz üzüm yediğini gören kimse, dinde samimiyete erer. Kur\'an-ı Kerim\'de cennet nimetleri arasında üzüm (enab) sayılmıştır; bu nedenle rüyada üzüm, salih amellerin ahiretteki karşılığına, dünyada da refah dolu, lüks ve rahat bir hayata delalet eder.',
      psychologicalMeaning: 'Psikolojide salkım halindeki üzüm, "Ağ" (Network), sosyal bağlar ve doğurganlık (bereket) arketipidir. Rüyasında iştahla üzüm yiyen biri, uyanık hayatında sosyal çevresinden, arkadaşlarından ve ailesinden büyük bir duygusal destek alıyor demektir. Üzüm aynı zamanda Dionysos (Bacchus) mitolojisindeki gibi kutlamayı, keyfi, zevki ve hayatın "şarabını" (coşkusunu) temsil eder. Kişinin hayattan haz alma isteğinin bir tezahürüdür.',
      faqs: [
        {
          question: 'Rüyada üzüm çekirdeği görmek veya yutmak nedir?',
          answer: 'Sağlam temellere dayanan bir başlangıca (tohum ekmeye), ancak yutulursa çözülmesi zor (boğazda kalan) küçük ama inatçı bir soruna yorulur.'
        },
        {
          question: 'Rüyada ölüye üzüm vermek ne anlama gelir?',
          answer: 'Çok büyük bir hayır işleyeceğinize, ölen kişi adına sadaka vereceğinize ve dualarınızın (sevapların) ruhuna ulaştığına işarettir.'
        },
        {
          question: 'Rüyada üzüm yaprağı (asma yaprağı) görmek iyi midir?',
          answer: 'Evet, genellikle sır saklayan, evi derleyip toplayan hamarat bir kadına veya aile sırlarının güzelce muhafaza edildiğine delalet eder.'
        }
      ],
      relatedSymbols: ['agac', 'su', 'yemek-yemek']
    }
  },
  {
    slug: 'umreye-gitmek',
    title: 'Rüyada Umreye Gitmek',
    category: 'din',
    shortDescription: 'Rüyada umreye gitmek; günahlardan arınmaya, manevi bir yolculuğa, ömrün bereketlenmesine, verilen sözlerin tutulmasına ve iç huzuruna kavuşmaya işaret eder.',
    content: {
      introduction: 'İslam dininde umre, Kabe\'yi ziyaret etmek, ruhsal bir temizlik yaşamak ve Allah\'a (c.c) daha yakın olmak için yapılan kutsal bir yolculuktur. Rüyalarda umreye (veya hacca) gittiğini görmek, rüya sahibinin manevi dünyasında yaşadığı büyük bir değişimin, uyanışın ve tövbe arzusunun en net sembolüdür. Bu rüya, sadece dini bütün insanlar tarafından değil, hayatında büyük bir bunalım veya günah çıkmazı içinde olan kişiler tarafından da sıklıkla görülür. Rüya, kişiye yepyeni, tertemiz bir sayfa açma fırsatı verildiğini müjdeler.',
      generalMeaning: 'Rüya tabircilerinin tamamına göre rüyada umreye gitmek için yola çıkmak veya umre yapmak, mutlak hayır, sevap, uzun ömür ve hastalıklardan şifa bulmaktır. Rüyasında ihrama girip umre yaptığını gören kişi, gerçek hayatta işlediği bir günahtan (veya kötü bir alışkanlıktan) kesin bir tövbeyle vazgeçer ve kalbi nurla dolar. Borçlu bir kimse umreye gittiğini görürse, Allah ona borçlarını ödeme kolaylığı sağlar; korku içindeki kişi emniyete kavuşur. Rüyada umre yolculuğunda Kabe\'yi görmek, kişinin toplum içinde itibarının çok yükseleceğine, zalimlerin şerrinden emin olacağına ve dünyevi dertlerin (geçim sıkıntısının vb.) sona ereceğine delalet eder. Rüyada umreye gitmek için hazırlandığını görmek ise, çok hayırlı bir iş (evlilik, büyük bir ticaret vb.) için niyetlenmeye yorulur.',
      variations: [
        {
          title: 'Rüyada Umreye Gidememek (Engellenmek)',
          content: 'Niyetlenilen çok hayırlı bir işin son anda ertelenmesine, kişinin tövbe etmesine engel olan nefsi arzularına (veya kötü arkadaş çevresine) yorulan ciddi bir uyarıdır.'
        },
        {
          title: 'Rüyada Aileyle Birlikte Umreye Gitmek',
          content: 'Aile içindeki küslüklerin, anlaşmazlıkların ve huzursuzlukların tamamen biteceğine, hane halkının çok büyük bir manevi mertebeye ve bolluğa ereceğine işarettir.'
        },
        {
          title: 'Rüyada Ölmüş Biriyle Umreye Gitmek',
          content: 'Vefat eden kişinin ahirette çok güzel bir makamda olduğuna, rüya sahibinin ise o kişinin (güzel ahlakının veya duasının) izinden giderek her işinde başarılı olacağına delalet eder.'
        },
        {
          title: 'Rüyada İhramsız Umre Yapmak',
          content: 'Dini görevlerde veya iş hayatındaki kurallara uymamadan (kestirmeden) başarı arandığına, dış görünüşün dine uygun, ancak için ihlassız (samimiyetsiz) olabileceğine yorulur.'
        },
        {
          title: 'Rüyada Umrede Ağlamak',
          content: 'Çok ama çok hayırlıdır. Kalbin tamamen pasından arındığına, dökülen her damla yaşın dünyevi bir sıkıntıyı alıp götürdüğüne ve mutluluktan ağlanacak gelişmelere işaret eder.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin ve Nablusi) hac ve umre rüyaları; emniyet, sıhhat, borçların ödenmesi ve emanetin sahibine teslim edilmesi anlamına gelir. Rüyasında umre veya tavaf yaptığını gören kimse, üzerine farz olan bir borcu (maddi veya manevi adak) öder. Hastanın umreye gittiğini görmesi, ecelinin gecikmesine (ömrünün uzamasına) ve şifaya; yolcunun görmesi ise sağ salim memleketine döneceğine işarettir. Rüyada Hacer-ül Esved\'e yüz sürmek veya Kabe örtüsüne tutunmak, makamı çok yüksek birinden koruma veya ihsan görmektir.',
      psychologicalMeaning: 'Psikolojide (özellikle Jungyen analizde) Kabe ve umre/hac gibi "Kutsal Merkez\'e Yolculuk" (Pilgrimage) temaları, kişinin "Bireyleşme" (Individuation) sürecini simgeler. Kişi hayatın karmaşasından, dış dünyanın maskelerinden (ihrama girerek statülerden arınmak) yorulmuş ve asıl özünü (Self), ruhunun merkezini bulmak için içsel bir yolculuğa çıkmıştır. Bu rüya, derin bir öz-keşif (self-discovery) ve arınma (katarsis) sürecinin dışa vurumudur.',
      faqs: [
        {
          question: 'Rüyada umrede kaybolmak ne anlama gelir?',
          answer: 'Doğruyu ararken zihninizin dış dünyadaki vesveselere (şüphelere) çok fazla kapıldığına, manevi rehberliğe ihtiyaç duyduğunuza işarettir.'
        },
        {
          question: 'Rüyada umreye uçakla uçarak gitmek nedir?',
          answer: 'İstediğiniz manevi huzura veya uyanık hayattaki hedefinize çok hızlı, hiç zahmet çekmeden ve güvenli bir yoldan ulaşacağınıza delalet eder.'
        },
        {
          question: 'Rüyada umreden döndüğünü (geldiğini) görmek ne demek?',
          answer: 'Çok başarılı ve tertemiz bir şekilde işlerinizi halledip "zaferle" yuvanıza (veya eski yaşamınıza yeni bir karakterle) döneceğinize yorulur.'
        }
      ],
      relatedSymbols: ['kabe', 'namaz-kilmak', 'ucmak']
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
