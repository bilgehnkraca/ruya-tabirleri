import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content', 'symbols');
const symbolsPath = path.join(contentDir, 'symbols.json');
let symbols = JSON.parse(fs.readFileSync(symbolsPath, 'utf-8'));

const newSymbols = [
  {
    slug: 'olmus-biri',
    title: 'Rüyada Ölmüş Birini Görmek',
    category: 'insanlar',
    shortDescription: 'Rüyada ölmüş birini görmek; genellikle o kişinin sizden dua veya sadaka beklediğine, yarım kalan bir işe veya uzun bir ömre işaret eder.',
    relatedSymbols: ['olum', 'mezarlik', 'anne'],
    content: {
      introduction: 'Rüyalarda vefat etmiş bir yakını veya tanıdığı görmek, insan psikolojisinde çok derin ve sarsıcı bir etki bırakır. Hem İslami rüya tabirlerinde hem de psikolojik analizlerde ölü görmek, sanılanın aksine "kötü" bir anlama gelmez; tam tersine hayatı, uyanışı ve tamamlanmamış meseleleri temsil eder.',
      generalMeaning: 'Rüya tabircilerine göre rüyada ölmüş birini diri görmek, rüya sahibinin ömrünün uzun olacağına, hastaysa şifa bulacağına ve umudunu kestiği bir işin yeniden canlanacağına delalet eder. Rüyada ölünün size güzel bir şey (yemek, para, kıyafet) vermesi çok hayırlı bir rızka işarettir. Ancak ölünün sizden bir şey alıp götürmesi genellikle iyiye yorulmaz.',
      variations: [
        {
          title: 'Rüyada Ölmüş Birinin Güldüğünü Görmek',
          content: 'O kişinin ahiret hayatında rahat olduğuna ve rüya sahibinden razı olduğuna işarettir. Ayrıca rüya sahibinin iç huzurunu bulacağına yorulur.'
        },
        {
          title: 'Rüyada Ölmüş Biriyle Konuşmak',
          content: 'Eğer ölü size bir tavsiye veriyorsa, bunu dikkate almanız gerektiğine; zira ölülerin aleminde yalan olmadığına (hakkı söylediklerine) inanılır.'
        },
        {
          title: 'Rüyada Ölmüş Birinin Ağlaması',
          content: 'O kişinin dua, Kur\'an veya sadaka beklediğine işarettir. Bazen de rüya sahibinin hayatında yapacağı bir hataya üzüldüğünü temsil eder.'
        },
        {
          title: 'Rüyada Ölüye Sarılmak',
          content: 'Rüya sahibinin ömrünün çok uzun olacağına, sağlıklı yaşayacağına ve özlem duyduğu bir kişiye veya duruma kavuşacağına delalet eder.'
        },
        {
          title: 'Rüyada Ölmüş Birini Hasta Görmek',
          content: 'Ölünün ahirette bir borcu olduğuna veya rüya sahibinin dini görevlerini (ibadetlerini) ihmal ettiğine (manevi hastalığa) yorulur.'
        }
      ],
      religiousMeaning: 'İslam dininde ölüler alemi (berzah) hakikat yurdudur. İmam Nablusi\'ye göre rüyada ölü görmek haktır ve ölünün rüyada söylediği sözler çoğunlukla doğrudur. Bir kimse rüyasında ölmüş babasını veya annesini görse, bu çok hayırlıdır. Ölüden alınan güzel ve temiz bir eşya helal rızka, ölüye verilen şeyler ise (kötü eşyalar hariç) zarara veya eksilmeye delalet eder.',
      psychologicalMeaning: 'Psikolojide rüyada ölmüş birini görmek, "yas sürecinin" bir parçasıdır. Bilinçaltınız o kişiyle olan bağınızı koparmakta zorlanıyor veya ona karşı söylenmemiş sözler, "tamamlanmamış meseleler" barındırıyor olabilir. Ayrıca ölü kişi, kendi karakterinizde ölmeye (veya yeniden doğmaya) yüz tutmuş bir özelliği de simgeliyor olabilir.',
      faqs: [
        {
          question: 'Rüyada ölmüş birinin eve gelmesi ne anlama gelir?',
          answer: 'Evinize büyük bir huzurun, bereketin ve çok güzel bir haberin geleceğine işarettir.'
        },
        {
          question: 'Ölmüş biriyle rüyada yemek yemek nedir?',
          answer: 'Elinize beklemediğiniz, umudunuzu kestiğiniz bir yerden çok helal ve güzel bir kazanç (miras, iş) geçeceğine yorulur.'
        },
        {
          question: 'Rüyada ölünün dirilmesi ne demektir?',
          answer: 'Biten, iflas eden veya imkansız gözüken bir işin mucizevi bir şekilde yeniden hayata döneceğine (başarıya) delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'bebek-emzirmek',
    title: 'Rüyada Bebek Emzirmek',
    category: 'beden',
    shortDescription: 'Rüyada bebek emzirmek; şefkate, rızkın bollaşmasına, birine büyük bir iyilik yapmaya ve anne olma arzusuna (veya evlat sevgisine) işaret eder.',
    relatedSymbols: ['bebek', 'anne', 'su'],
    content: {
      introduction: 'Bebek emzirmek, insan doğasının en kutsal, en fedakar ve yaşam verici eylemlerinden biridir. Rüyada bir bebeği emzirdiğini görmek (rüya sahibi kadın veya erkek, bekar veya evli olsun) genellikle kişinin içindeki "besleyici, büyütücü" enerjiyi, etrafındaki insanlara (veya bir projeye) aktardığı emeği sembolize eder. Bu rüya yoğun bir şefkatin, merhametin ve maddi/manevi zenginleşmenin habercisidir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada kendi bebeğini emzirmek, çocuğun ileride çok hayırlı, makam sahibi ve anne-babasına itaatkar bir evlat olacağına yorulur. Bekar bir kadının bebek emzirdiğini görmesi, tez vakitte çok hayırlı bir kısmetle evlenip anne olacağına veya iş hayatında kendi çabasıyla büyüteceği çok başarılı bir projeye imza atacağına delalet eder. Rüyada başkasının bebeğini emzirmek, o bebeğin ailesine veya tanımadığınız birine yapacağınız çok büyük bir karşılıksız iyiliğe işarettir.',
      variations: [
        {
          title: 'Rüyada Memeden Süt Akması (Fışkırması)',
          content: 'Bereketin, rızkın ve paranın taşmasına, kişinin hiç beklemediği bir anda maddi olarak çok büyük bir zenginliğe kavuşmasına yorulur.'
        },
        {
          title: 'Rüyada Erkek Bebek Emzirmek',
          content: 'Müjdeli bir habere, kişinin güce ve kuvvete kavuşmasına, omuzlarındaki bir yükün kendi çabasıyla kalkmasına (aydınlığa) işarettir.'
        },
        {
          title: 'Rüyada Kız Bebek Emzirmek',
          content: 'Kız çocuk berekettir. Evin içine dolacak huzura, kişinin işlerinin çok kolay ve zarif bir şekilde yoluna girmesine delalet eder.'
        },
        {
          title: 'Rüyada Erkeğin Bebek Emzirmesi',
          content: 'Çok ilginç bir rüyadır; erkeğin üzerine alacağı büyük bir sorumluluğa, bir yetime veya muhtaca kol kanat gereceğine (annelik şefkati göstereceğine) yorulur.'
        },
        {
          title: 'Rüyada Hayvan Emzirmek',
          content: 'Kişinin merhametinin çok geniş olduğuna, ancak bazen sevgisini yanlış veya nankör (kıymet bilmeyen) kişilere harcadığına işarettir.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde (İbn Şirin, Nablusi) süt, İslam fıtratı, temiz ilim ve helal maldır. Bebek emzirmek ise bu helal malı veya ilmi başkalarına aktarmaktır. Hamile bir kadının bebek emzirmesi hamileliğinin sağlıklı geçeceğine işarettir. Rüyada süt emzirmek genel olarak hapiste olanın kurtulmasına, borçlunun borcunu ödemesine ve daralanın ferahlamasına yorulur; zira rızkın doğrudan kaynaktan (memeden) gelmesi Allah\'ın lütfudur.',
      psychologicalMeaning: 'Psikolojide bebek emzirmek, kişinin "verici" doğasını, başkalarına bakım verme (nurturing) ihtiyacını simgeler. Eğer rüya sahibi bir projeye, sanat eserine veya bir ilişkiye çok fazla emek veriyorsa, bilinçaltı bunu "bir bebeği emzirmek" (onu canınla kanınla beslemek) olarak kodlar. Aynı zamanda anne olma arzusunun veya kendi annesiyle ilgili şefkat eksikliğinin rüyaya yansımasıdır.',
      faqs: [
        {
          question: 'Rüyada sütünün yetmediğini (bebeğin doymadığını) görmek nedir?',
          answer: 'Maddi veya manevi olarak kendinizi yetersiz hissettiğinize, elinizdeki imkanların ailenizi veya projenizi beslemeye yetmediği kaygısına yorulur.'
        },
        {
          question: 'Bekar bir kızın bebek emzirmesi kötü müdür?',
          answer: 'Asla kötü değildir. Aksine, bekarlar için çok ahlaklı ve merhametli bir eşe, yuva kurmaya veya iş hayatında el atacağı bir işin çok büyüyeceğine işarettir.'
        },
        {
          question: 'Rüyada yetişkin birini emzirmek ne demek?',
          answer: 'Emzirdiğiniz kişinin (maddi veya manevi olarak) tamamen size bağımlı olduğuna, onun yükünü ve sıkıntılarını sizin sırtlandığınıza delalet eder.'
        }
      ]
    }
  },
  {
    slug: 'opusmek',
    title: 'Rüyada Öpüşmek',
    category: 'insanlar',
    shortDescription: 'Rüyada öpüşmek; barışmaya, anlaşma yapmaya, sevgiye, hasret gidermeye ve birinden alınacak destek veya menfaate işaret eder.',
    relatedSymbols: ['eski-sevgili', 'dugun', 'cinsellik'],
    content: {
      introduction: 'Öpüşmek, insanlık tarihi boyunca sevginin, tutkunun, saygının veya (bağlama göre) anlaşmanın, barışmanın en net fiziksel göstergesi olmuştur. Rüyalarda öpüşmek sadece cinsel veya romantik bir anlama gelmez; aynı zamanda fikir birliğine varmayı, birinin sözünü onaylamayı veya bir hevese (isteğe) kavuşmayı simgeler. Kiminle ve nasıl öpüşüldüğü, rüyanın tabirini tamamen değiştirir.',
      generalMeaning: 'Rüya tabircilerine göre rüyada öpüşmek genel olarak taraflar arasında sağlanacak bir uzlaşmaya, muhabbete ve işbirliğine (ortaklığa) delalet eder. Rüyasında sevdiği kişiyle öpüştüğünü gören kimse muradına erer. Tanımadığı genç ve güzel bir kadınla (veya erkekle) öpüştüğünü görmek, kişinin uyanık hayattaki şansının döneceğine, kısmetinin açılacağına yorulur. Düşmanıyla öpüştüğünü gören kişi o kişiyle barışır veya aralarındaki husumet son bulur. Rüyada şehvetle öpüşmek maddi bir menfaate veya bir ihtiyacın giderilmesine işaret ederken, şefkatle öpüşmek ruhi bir yardımlaşmaya yorulur.',
      variations: [
        {
          title: 'Rüyada Eski Sevgiliyle Öpüşmek',
          content: 'Geçmişe duyulan özleme, o dönemdeki hisleri tekrar yaşama arzusuna veya geçmişte kalan yarım bir meselenin tekrar gündeme gelmesine işarettir.'
        },
        {
          title: 'Rüyada Biriyle Dudaktan Öpüşmek',
          content: 'O kişiyle aranızda çok güçlü bir sır paylaşılacağına, bir söz (veya yemin) verileceğine ya da maddi/manevi çok sıkı bir bağ kurulacağına delalet eder.'
        },
        {
          title: 'Rüyada Birinin Elini Öpmek',
          content: 'Saygıya, tevazuya, o kişiden (veya makamından) fayda görmeye ve yaşlılar için hayır duası almaya yorulur.'
        },
        {
          title: 'Rüyada Aynı Cinsten Biriyle Öpüşmek',
          content: 'Eğer şehvet yoksa, o kişiyle çok büyük bir sırra ortak olmaya, iş yapmaya veya birbirine sonuna kadar destek olmaya işarettir.'
        },
        {
          title: 'Rüyada Ölüyle (Ölmüş Biriyle) Öpüşmek',
          content: 'Çok hayırlıdır; o ölünün (veya ailesinin) bıraktığı bir mirastan, ilimden veya güzel bir işten rüya sahibinin faydalanacağına (nasibini alacağına) yorulur.'
        }
      ],
      religiousMeaning: 'İslami tabirlerde rüyada öpmek ve öpüşmek "kabul etmek, yönelmek ve rızık" anlamındadır. İmam Nablusi\'ye göre rüyada birini şehvetle öpmek, rüya sahibinin o kişinin malından veya ilminden fayda sağlayacağına delalet eder. Alim bir kimseyi öpmek onun ilminden yararlanmaya, Kur\'an öpmek ise dini bütünlüğe ve hidayete işarettir. Rüyada hayvanı öpmek ise, kişinin fıtratına aykırı bir iş yapacağına veya değersiz bir insana gereğinden fazla değer vereceğine yorulur.',
      psychologicalMeaning: 'Psikolojide dudaklar iletişimi (sözü) temsil eder. Biriyle öpüşmek, ruhsal olarak o kişiyle (veya onun temsil ettiği bir fikirle, karakterle) "bütünleşme", onu kabul etme ve bir olma arzusudur. Yalnızlık çeken kişilerin rüyasında romantik bir şekilde öpüşmesi ise tamamen "telafi edici" (bilinçaltının uyanık hayattaki sevgi açlığını doyurma) bir rüyadır.',
      faqs: [
        {
          question: 'Rüyada zorla (istemeyerek) öpüşmek ne demek?',
          answer: 'Uyanık hayatta bir fikri, bir işi veya bir ortaklığı size zorla kabul ettirmeye çalıştıklarına, sınırlarınızın ihlal edildiğine işarettir.'
        },
        {
          question: 'Rüyada eşiyle (kocası/karısı) kalabalıkta öpüşmek nedir?',
          answer: 'Evliliğinizdeki mutluluğun ve uyumun çevrenizdeki herkes tarafından gıptayla izlendiğine (veya gösteriş yapma eğiliminize) yorulur.'
        },
        {
          question: 'Rüyada ünlü biriyle öpüşmek ne anlama gelir?',
          answer: 'Büyük bir başarıya imza atma, toplumda tanınma, takdir görme veya kendinizi çok özel hissedeceğiniz bir mevkiye gelme arzusudur.'
        }
      ]
    }
  },
  {
    slug: 'incir',
    title: 'Rüyada İncir Görmek',
    category: 'doga',
    shortDescription: 'Rüyada incir görmek; zenginliğe, çok kalabalık ve bereketli bir aileye (veya nesle), zahmetsiz kazanılan mala ve sağlığa işaret eder.',
    relatedSymbols: ['agac', 'yemek-yemek', 'cilek'],
    content: {
      introduction: 'İncir, binlerce yıldır bereketi, doğurganlığı, gizliliği (incir yaprağı) ve cenneti sembolize eden çok özel bir meyvedir. İçinde barındırdığı binlerce küçük çekirdek sebebiyle çoğalmanın ve zenginliğin evrensel bir simgesidir. Rüyalarda incir görmek, genellikle zahmetsiz (kolay yoldan) elde edilecek rızkın, çok kalabalık bir ailenin veya ticaret hayatında atılacak kazançlı adımların çok güçlü bir habercisidir.',
      generalMeaning: 'Rüya tabircilerine (özellikle İslam alimlerine) göre rüyada mevsiminde, tatlı ve olgun bir incir yediğini görmek, altın veya paraya (zahmetsiz zenginliğe) delalet eder. Rüyasında incir ağacı gören kişinin çok asil, faydalı ve zengin bir insanla dost olacağına veya kendisinin öyle birine dönüşeceğine yorulur. Rüyada birinden incir almak, o kişiden gelecek çok büyük bir maddi desteğe işarettir. Ancak incirin mevsimi dışında görülmesi veya içinin kurtlu çıkması, dedikoduya, kıskançlığa veya haksız (haram) bir kazanca işaret edebileceği için uyarıcıdır.',
      variations: [
        {
          title: 'Rüyada Kuru İncir Görmek',
          content: 'Kolay bozulmayan kuru incir, birikim yapmaya, geleceğe yönelik yatırıma ve kişinin ömrü boyunca rızkının kesilmeyeceğine (kalıcı zenginliğe) yorulur.'
        },
        {
          title: 'Rüyada Siyah (Kara) İncir Görmek',
          content: 'Siyah incir genellikle üzüntüye, gizli kalmış karanlık sırlara veya kazanılacak malın peşinden gelecek bazı dedikodulara (kıskançlıklara) işarettir.'
        },
        {
          title: 'Rüyada Beyaz (Sarı) İncir Görmek',
          content: 'Maddi kazancın çok helal olduğuna, rüya sahibinin niyetinin saflığına ve hastalık çekenler için hızlı bir şifa bulmaya (sağlığa) delalet eder.'
        },
        {
          title: 'Rüyada Ağaçtan İncir Toplamak',
          content: 'Kendi emeğinizle, tırnaklarınızla kazıyarak çok büyük bir servet veya başarı elde edeceğinize, zahmetin sonunda çok "tatlı" bir mükafat alacağınıza yorulur.'
        },
        {
          title: 'Rüyada Kurtlu (Çürük) İncir Görmek',
          content: 'Dışarıdan çok güzel ve kazançlı görünen bir işin veya insanın içinin bozuk olduğuna, elinize geçecek haram mala veya yaşanacak bir hayal kırıklığına işarettir.'
        }
      ],
      religiousMeaning: 'Kur\'an-ı Kerim\'de incire (ve zeytine) yemin edilmiş olması (Tin Suresi), inciri rüya tabirlerinde çok yüce ve mübarek bir konuma yerleştirir. İbn Şirin\'e göre rüyada incir yemek pişmanlık (Hz. Adem\'in cennette yediği yasak meyvenin incir olduğuna dair bazı rivayetler nedeniyle) veya kolay rızık olarak iki farklı şekilde tabir edilir. Nablusi ise inciri, "saf ve temiz rızık" olarak yorumlar; çünkü incir, çekirdeği dışarı atılmayan, bütünüyle yutulan tek meyvedir (yani firesiz tam kazançtır).',
      psychologicalMeaning: 'Psikolojide incir, içindeki çekirdek dokusu ve yapısı nedeniyle kadınlığı, doğurganlığı ve gizli arzuları sembolize eder (Freudyen yaklaşımlarda). Rüyada incir görmek, kişinin uyanık hayatta üremeye, bir şeyler "yaratmaya" (yeni bir proje, sanat eseri veya bebek) duyduğu yoğun isteği yansıtır. Aynı zamanda içinizde sakladığınız çok "tatlı" ama açığa çıkmasından çekindiğiniz sırları (veya potansiyeli) temsil eder.',
      faqs: [
        {
          question: 'Rüyada incir yaprağı görmek (veya örtünmek) nedir?',
          answer: 'Bir hatanızı, günahınızı veya sırrınızı insanlardan gizlemeye çalıştığınıza (utanma duygusuna) ve mahremiyete işarettir.'
        },
        {
          question: 'Hamile kadının rüyada incir görmesi ne anlama gelir?',
          answer: 'Çok hayırlıdır; çocuğun çok sağlıklı olacağına, ailenin rızkının artacağına ve o çocuğun gelecekte soyunun çok kalabalık (bereketli) olacağına yorulur.'
        },
        {
          question: 'Rüyada birine incir vermek kötü müdür?',
          answer: 'Hayır, çok iyidir. Kendi cebinizden, rızkınızdan veya ilminizden başka insanlara cömertçe fayda sağlayacağınıza (sadaka vereceğinize) delalet eder.'
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
