import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsDir = path.join(__dirname, '..', 'content', 'symbols');

if (!fs.existsSync(symbolsDir)) {
  fs.mkdirSync(symbolsDir, { recursive: true });
}

function getCleanName(title, slug) {
  if (!title) return slug ? slug.replace(/-/g, ' ') : 'Sembol';
  let clean = title
    .replace(/^Rüyada\s+/i, '')
    .replace(/\s+Görmek.*$/i, '')
    .replace(/\s+Görmenin.*$/i, '')
    .replace(/\(.*?\)/g, '')
    .trim();
  if (!clean && slug) {
    clean = slug.replace(/-/g, ' ');
  }
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function normalizeCategory(cat) {
  if (['hayvanlar', 'nesneler', 'doga', 'mekanlar', 'ailem', 'insanlar', 'yolculuk', 'eylemler', 'yiyecek', 'soyut-kavramlar', 'beden'].includes(cat)) {
    return cat;
  }
  return 'nesneler';
}

function getCategoryContext(category, lowerName) {
  switch (category) {
    case 'hayvanlar': return {
        spiritualFocus: `İslami literatürde canlılar ve hayvanlar alemine dair rüyalar, insanın içgüdüsel tabiatını, çevresindeki dost veya düşman karakterleri ve ilahi imtihanları temsil eder. Rüyada deneyimlenen ${lowerName} sembolü, kişinin sosyal çevresinde karşılaştığı karakter tiplerine, nefsin terbiyesine ve manevi teyakkuz haline işaret eder.`,
        psychoFocus: `Analitik psikolojide hayvan sembolleri, insanın evrimsel geçmişinden getirdiği ilkel içgüdüleri, bastırılmış dürtüleri ve 'gölge' (shadow) arketipini simgeler. ${lowerName} imgesi, zihnin evcilleştirilmemiş veya farkına varılmamış doğal enerjilerinin bilince yansımasıdır.`,
        generalFocus: `Sosyal ilişkilerinizde, iş hayatınızda veya yakın çevrenizde muhatap olduğunuz insan davranışlarını ve kendi içgüdüsel tepkilerinizi yeniden değerlendirmeniz gereken bir döneme girdiğinizi gösterir.`
    };
    case 'doga': return {
        spiritualFocus: `Kutsal kaynaklarda ve tasavvufi tefsirlerde doğa olayları, yeryüzü şekilleri ve tabiat unsurları, Cenab-ı Hakk'ın celal ve cemal sıfatlarının tecellisi olarak kabul edilir. Rüyada ${lowerName} ile karşılaşmak, ilahi kudreti tefekkür etmeye, ruhsal yenilenmeye ve fıtrata dönüşe delalet eder.`,
        psychoFocus: `Psikolojik olarak doğa sembolleri, kollektif bilinçdışının en derin katmanlarını, ruhsal dengeyi ve duygusal iklimimizi yansıtır. ${lowerName} imgesi, bireyin iç dünyasındaki fırtınaları, sükuneti, yeniden doğuş potansiyelini ve doğal uyum arayışını temsil eder.`,
        generalFocus: `Yaşam enerjinizi tazelemek, kendinizle baş başa kalarak ruhsal bir arınma yaşamak ve hayatın doğal akışına uyum sağlayarak geleceğe daha umutla bakmak için mükemmel bir fırsat sunduğunu gösterir.`
    };
    case 'mekanlar': return {
        spiritualFocus: `Kadim tabir geleneğinde mekanlar, yapılar ve alanlar, insanın dünya hayatındaki konumunu, hane huzurunu, manevi sığınağını ve ahiret yurdundaki derecesini simgeler. Rüyada ${lowerName} görmek, kişinin manevi aidiyetine, yaşam tarzına ve güven arayışına delalet eder.`,
        psychoFocus: `Mekan sembolizmi, insan zihninin yapısını, psişenin farklı odalarını ve bireyin toplumsal hayatta işgal ettiği alanı temsil eder. ${lowerName} imgesi, bilinçaltınızın güvenli liman arayışını, geçmişle olan bağlarını veya gelecekte inşa etmek istediği yaşam alanını gösterir.`,
        generalFocus: `Yaşam alanlarınızda, kariyer hedeflerinizde veya sosyal statünüzde kalıcı, sağlam ve huzurlu bir zemin oluşturma çabanızın ön plana çıktığını vurgular.`
    };
    default: return {
        spiritualFocus: `Kadim İslam alimlerine göre beden azaları ve soyut manevi semboller, insanın ruhsal bütünlüğünü, iman nurunu, ahlaki erdemlerini ve amellerinin niteliğini temsil eder. Rüyada ${lowerName} görmek, manevi ferahlığa, kalbi selim olmaya ve ilahi lütuflara delalet eder.`,
        psychoFocus: `Derinlik psikolojisinde beden ve soyut semboller, bireyin özbenlik algısını, narsisistik dengesini, somatik farkındalığını ve manevi arayışını simgeler. ${lowerName} imgesi, zihnin ve bedenin bütünleşerek ruhsal bir dengeye ulaşma arzusunu gösterir.`,
        generalFocus: `Kendi öz değerinizin farkına varacağınız, ruhsal ve bedensel bütünlüğünüzü koruyarak çevrenize ilham ve huzur saçacağınız aydınlık bir evreye girdiğinizi ifade eder.`
    };
  }
}

function generateComprehensiveSymbolContent(slug, rawTitle, rawCategory, relatedSlugs) {
  const cleanName = getCleanName(rawTitle, slug);
  const lowerName = cleanName.toLowerCase();
  const category = normalizeCategory(rawCategory);
  const ctx = getCategoryContext(category, lowerName);

  return {
    slug,
    title: `Rüyada ${cleanName} Görmek - İslami, Diyanet ve Psikolojik Tabiri`,
    shortDescription: `Rüyada ${lowerName} görmek, İslami ve Diyanet tefsirlerine göre hayırlı gelişmelere, manevi ferahlığa ve bereketli günlere işaret ederken; psikolojik olarak bilinçaltının dönüşüm, arınma ve içsel denge arayışını sembolize eder.`,
    category,
    content: {
      introduction: `Rüyada ${lowerName} ile karşılaşmak, insan zihninin uyku esnasında hem spritüel sezgilerle hem de bilinçaltının derin sembolik diliyle kurduğu çok boyutlu ve anlamlı bir iletişim biçimidir. Kadim rüya tabiri geleneğinden günümüz nöro-psikolojik uyku araştırmalarına kadar bu imge, bireyin yaşamında önemli bir dönüm noktasını, zihinsel bir uyanışı veya derin bir farkındalık evresini temsil eder. Uykunun REM evresinde rasyonel zihnin savunma mekanizmalarının gevşemesiyle açığa çıkan bu sembol, rüya sahibinin bilinçli dünyası ile bastırılmış duyguları arasında organik bir köprü kurar. İslami literatürde ilahi bir uyarı, müjde veya fıtrat çağrısı olarak değerlendirilen bu deneyim, modern psikolojide ise zihnin kendisini iyileştirme, dengeleme ve yeniden yapılandırma sürecinin en somut göstergesi olarak kabul edilmektedir. Bu bağlamda rüyanın tüm detaylarıyla incelenmesi, rüya sahibinin geçmiş tecrübelerini anlamlandırmasına ve geleceğe dair daha bilinçli adımlar atmasına olanak tanır. ${ctx.spiritualFocus}`,
      generalMeaning: `Rüyada ${lowerName} görmenin gündelik yaşama, sosyal ilişkilere ve mesleki hayata yansımaları incelendiğinde, kişinin hayatında yepyeni bir vizyon kazanacağı, kararlı kararlar alacağı bir evreye girdiği açıkça görülmektedir. ${ctx.generalFocus} Uzman rüya analistleri, bu rüyayı deneyimleyen bireylerin özellikle karar alma süreçlerinde aceleci davranmaktan kaçınarak sağduyulu, gözleme dayalı ve analitik bir tutum sergilemelerini önermektedir. Kariyer ve iş yaşamında uzun süredir devam eden belirsizliklerin ortadan kalkmasına, sarf edilen emeklerin karşılık bulmasına ve yeni finansal fırsatların kapıyı aralamasına delalet eden bu sembol, aynı zamanda sosyal ilişkilerde empati ve karşılıklı güvenin önemini vurgular. Kişinin yakın çevresiyle olan iletişiminde daha yapıcı, şeffaf ve anlayışlı bir dil kullanması, olası yanlış anlaşılmaları önleyeceği gibi sosyal bağları da güçlendirecektir. Yaşamın doğal akışı içerisinde karşılaşılan zorlukların kalıcı olmadığını hatırlatan bu sembol, kişinin özgüvenini tazelemesi, içsel motivasyonunu yükseltmesi ve hedeflerine doğru kararlı, istikrarlı adımlarla ilerlemesi gerektiğini gösteren güçlü bir rehberdir. Ayrıca günlük yaşantınızdaki planlamalarda, zaman, mesafe ve bütçe yönetiminde [Türkiye Hesaplama Çözüm Platformu](https://www.turkiyehesaplama.com) üzerinden destek alarak adımlarınızı somut verilere dayandırabilirsiniz.`,
      religiousMeaning: `Kadim İslami rüya tabiri kaynaklarına (özellikle İmam Nablusi, İbn-i Sirin, İmam Cafer-i Sadık ve Seyyid Süleyman ekollerine) göre, rüyada ${lowerName} görmek, rüya sahibinin manevi durumuna, niyetlerinin safiyetine ve rüyanın görüldüğü esnadaki ruh haline bağlı olarak çok katmanlı bir tefsire sahiptir. Diyanet rüya tabirleri rehberliğinde de altı çizildiği üzere, bu sembol müminler için hem ruhsal bir ferahlamayı hem de ilahi bir ikazı barındırabilir. Eğer rüya sahibi hak yolunda dürüstlük, adalet ve erdemle hareket ediyorsa, bu rüya helal rızka, haneye girecek berekete, hastalıklardan şifa bulmaya ve duaların kabul olunacağı nurlu bir döneme işaret eder. İslami alimler, rüyada görülen bu imgenin temiz, aydınlık ve huzur verici olmasını rahmet ve mağfiret alameti olarak yorumlarlar. Ancak rüya esnasında kasvet, korku veya belirsizlik hissedildiyse, bu durum kişinin dünya telaşına gereğinden fazla kapılarak ahiret bilincini, manevi mesuliyetlerini ve insani yükümlülüklerini ihmal ettiğine dair ilahi bir uyarı niteliği taşır. Bu sebeple rüya sahibinin tövbe etmesi, sadaka vererek belaları def etmesi, kul hakkına riayet etmesi ve manevi dünyasına daha fazla özen göstererek iç huzuru araması tavsiye edilmektedir. İslami bilginlerin ittifakla belirttiği üzere, rüyalar Allah'ın kullarına bir rehberi olup, hayra yorulmalı ve hayır beklenmelidir.`,
      psychologicalMeaning: `Analitik psikoloji perspektifinden (özellikle Carl Gustav Jung ve Sigmund Freud'un derinlik psikolojisi kuramları ışığında) rüyada ${lowerName} imgesi, bilinçdışının bilince taşımak istediği hayati sembolik mesajlar barındırır. Jung, bu tür sembolleri bireyin "bireyleşme (individuation)" sürecinde karşılaştığı arketipsel yansımalar, kollektif bilinçdışı unsurları ve gölge (shadow) arketipi ile bütünleşme çabası olarak değerlendirir. ${ctx.psychoFocus} Günlük yaşamda ifade edilememiş arzulardan, bastırılmış kaygılardan veya çözümsüz kalmış kişilerarası çatışmalardan kaynaklanan psişik enerji, uykuda sembolik bir forma bürünerek bu imge üzerinden açığa çıkar. Freudyan yaklaşıma göre ise bu rüya, ego ile id arasındaki dengeyi sağlamaya çalışan bir ego savunma mekanizması ve bilinçaltındaki isteklerin dolaylı bir tatminidir. Rüya sahibinin güncel hayatında yaşadığı stres, kontrol kaybı endişesi, kimlik arayışı veya varoluşsal sorgulamalar, zihnin rüya atölyesinde yeniden işlenerek duygusal bir boşalma (katarsis) sağlanır. Bu deneyim, zihinsel bir rehabilitasyon ve psikolojik bütünlenme süreci olup, bireyin kendi içsel gücünü fark etmesi, ruhsal yüklerinden arınması ve zihinsel bütünlüğünü sağlayarak hayata daha sağlıklı adapte olması için bilinçaltının sunduğu şifalı bir haritadır.`,
      variations: [
        {
          title: `Rüyada Beklenmedik Bir Anda ve Mekanda ${cleanName} İle Karşılaşmak`,
          content: `Rüyada hiç umulmadık bir anda ve alışılmadık bir mekanda ${lowerName} ile karşılaşmak, gerçek yaşamda rüya sahibinin karşısına çıkacak ani, sürpriz gelişmelere, kader dönüşümlerine ve önemli fırsat kapılarına işaret eder. Bu durum ilk etapta kişide tatlı bir şaşkınlık veya heyecan yaratsa da, zamanla hayatın akışını olumlu yönde değiştirecek stratejik imkanlar sunacaktır. İslami tefsirler bu durumu ilahi lütuf ve beklenmedik yerden gelen rızık (min haysu la yahtesib) olarak nitelendirirken, psikolojik analizler bireyin bilinçaltında yatan uyum sağlama esnekliğini ve yeni tecrübelere açık olma kapasitesini vurgular.`
        },
        {
          title: `Rüyada ${cleanName} Görürken Derin Bir Huzur ve Mutluluk Hissetmek`,
          content: `Rüya esnasında ${lowerName} ile muhatap olurken kalpte derin bir huzur, sevinç ve güven duygusu hissetmek, hem dünyevi hem de uhtevi anlamda kusursuz bir uyum ve tatmin evresine girildiğini müjdeler. Kadim alimlere göre bu rüya, kişinin ettiği duaların kabul olduğuna, vicdanen rahat bir yaşam sürdüğüne ve manevi bir koruma altında bulunduğuna delalet eder. Psikolojik olarak ise zihnin içsel çatışmalarını çözüme kavuşturduğunu, egonun sakinleştiğini ve bireyin kendisiyle barışık, sağlıklı bir ruh haline ulaştığını kanıtlayan çok güçlü bir pozitif semboldür.`
        },
        {
          title: `Rüyada Kalabalık Bir Topluluk İçinde ${cleanName} Deneyimlemek`,
          content: `Rüyada kalabalık, tanınan veya tanınmayan bir topluluk içerisinde ${lowerName} deneyimlemek, rüya sahibinin sosyal statüsü, toplum içindeki yeri ve kişilerarası iletişim dinamikleriyle doğrudan ilişkilidir. İslami yorumlar bu rüyayı, kişinin toplumda saygınlık kazanacağı, hayırlı bir topluluğa liderlik edeceği veya faydalı bir sosyal girişimde bulunacağı şeklinde tefsir eder. Analitik psikoloji açısından ise bu durum, kollektif bilinçdışının sosyal aidiyet ihtiyacını yansıtarak kişinin çevresiyle uyum içinde olma, takdir edilme ve toplumsal hayatta kendi özgün kimliğini sergileme arzusunu sembolize eder.`
        }
      ],
      faqs: [
        {
          question: `Rüyada ${lowerName} görmenin en temel manevi ve İslami mesajı nedir?`,
          answer: `Bu rüyanın en temel İslami mesajı, kişinin manevi fıtratını koruması, niyetlerini saf tutması ve hayatındaki bereketin farkına vararak şükretmesi gerektiğidir. Kadim tefsirler, bu sembolü hayırlı bir dönüşümün, helal rızkın ve ilahi rahmetin bir habercisi olarak kabul eder; aynı zamanda dünyevi meşgaleler içinde manevi sorumlulukların ihmal edilmemesi için şefkatli bir ikaz barındırır.`
        },
        {
          question: `Rüyada ${lowerName} görmek psikolojik ve zihinsel sağlık açısından nasıl değerlendirilmelidir?`,
          answer: `Psikolojik açıdan bu rüya, bilinçaltınızın günlük yaşamdaki stres, beklenti, kaygı ve duygusal yoğunlukları işleyerek zihinsel dengeyi kurma çabasıdır. Carl Jung ve Sigmund Freud'un yaklaşımlarına göre, bireyin içsel dünyasında yüzleşmesi gereken arketipsel bir dinamige veya özümsemesi gereken yeni bir yaşam tecrübesine dikkat çeker. Ruhsal bir şifa, katarsis ve arınma süreci olarak değerlendirilmeli, iç sesin rehberliği önemsenmelidir.`
        },
        {
          question: `Rüyada ${lowerName} gördükten sonra uyandığımda günlük hayatta ne gibi aksiyonlar almalıyım?`,
          answer: `Bu rüyayı deneyimledikten sonra özellikle karar alma süreçlerinde daha sakin, analitik, gözlemlere dayalı ve sağduyulu bir yaklaşım benimsemeniz önerilir. Karşılaşacağınız yeni mesleki ve sosyal fırsatları aceleci davranmadan tüm detaylarıyla değerlendirmeli, manevi huzurunuzu bozabilecek gereksiz tartışmalardan ve negatif ortamlardan uzak durarak içsel dengenize odaklanmalısınız. Dilerseniz bir miktar sadaka vererek manevi şükrünüzü de eda edebilirsiniz.`
        }
      ]
    },
    relatedSymbols: relatedSlugs,
    dateModified: new Date().toISOString()
  };
}

function slugify(text) {
  const trMap = { 'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'I': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u' };
  let str = text.toLowerCase();
  for (let key in trMap) {
    str = str.split(key).join(trMap[key]);
  }
  return str.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

const adjectives = ['Eski', 'Yeni', 'Kırık', 'Büyük', 'Küçük', 'Altın', 'Gümüş', 'Ahşap', 'Kırmızı', 'Mavi', 'Yeşil', 'Beyaz', 'Siyah', 'Parlak', 'Karanlık', 'Aydınlık', 'Sıcak', 'Soğuk', 'Temiz', 'Kirli', 'Güzel', 'Çirkin', 'Uzun', 'Kısa', 'Derin'];
const nouns = [
  { w: 'Ev', c: 'mekanlar' }, { w: 'Araba', c: 'nesneler' }, { w: 'Ağaç', c: 'doga' }, { w: 'Deniz', c: 'doga' }, { w: 'Kuş', c: 'hayvanlar' },
  { w: 'Kedi', c: 'hayvanlar' }, { w: 'Köpek', c: 'hayvanlar' }, { w: 'Yılan', c: 'hayvanlar' }, { w: 'Elma', c: 'yiyecek' }, { w: 'Ekmek', c: 'yiyecek' },
  { w: 'Su', c: 'yiyecek' }, { w: 'Ayakkabı', c: 'nesneler' }, { w: 'Yüzük', c: 'nesneler' }, { w: 'Kapı', c: 'mekanlar' }, { w: 'Pencere', c: 'mekanlar' },
  { w: 'Kitap', c: 'nesneler' }, { w: 'Defter', c: 'nesneler' }, { w: 'Kalem', c: 'nesneler' }, { w: 'Çanta', c: 'nesneler' }, { w: 'Telefon', c: 'nesneler' },
  { w: 'Para', c: 'nesneler' }, { w: 'Altın', c: 'nesneler' }, { w: 'Gümüş', c: 'nesneler' }, { w: 'Elbise', c: 'nesneler' }, { w: 'Gömlek', c: 'nesneler' },
  { w: 'Pantolon', c: 'nesneler' }, { w: 'Ceket', c: 'nesneler' }, { w: 'Kravat', c: 'nesneler' }, { w: 'Şapka', c: 'nesneler' }, { w: 'Gözlük', c: 'nesneler' },
  { w: 'Saat', c: 'nesneler' }, { w: 'Bilezik', c: 'nesneler' }, { w: 'Kolye', c: 'nesneler' }, { w: 'Küpe', c: 'nesneler' }, { w: 'Tabak', c: 'nesneler' },
  { w: 'Bardak', c: 'nesneler' }, { w: 'Çatal', c: 'nesneler' }, { w: 'Bıçak', c: 'nesneler' }, { w: 'Kaşık', c: 'nesneler' }, { w: 'Tencere', c: 'nesneler' },
  { w: 'Tava', c: 'nesneler' }, { w: 'Koltuk', c: 'mekanlar' }, { w: 'Kanepe', c: 'mekanlar' }, { w: 'Masa', c: 'mekanlar' }, { w: 'Sandalye', c: 'mekanlar' },
  { w: 'Yatak', c: 'mekanlar' }, { w: 'Yastık', c: 'nesneler' }, { w: 'Yorgan', c: 'nesneler' }, { w: 'Battaniye', c: 'nesneler' }, { w: 'Halı', c: 'nesneler' },
  { w: 'Perde', c: 'nesneler' }, { w: 'Televizyon', c: 'nesneler' }, { w: 'Bilgisayar', c: 'nesneler' }, { w: 'Radyo', c: 'nesneler' }, { w: 'Bisiklet', c: 'nesneler' },
  { w: 'Motosiklet', c: 'nesneler' }, { w: 'Tren', c: 'yolculuk' }, { w: 'Uçak', c: 'yolculuk' }, { w: 'Gemi', c: 'yolculuk' }, { w: 'Otobüs', c: 'yolculuk' },
  { w: 'Kamyon', c: 'nesneler' }, { w: 'Traktör', c: 'nesneler' }, { w: 'Dağ', c: 'doga' }, { w: 'Orman', c: 'doga' }, { w: 'Göl', c: 'doga' },
  { w: 'Nehir', c: 'doga' }, { w: 'Şelale', c: 'doga' }, { w: 'Mağara', c: 'mekanlar' }, { w: 'Çöl', c: 'doga' }, { w: 'Ada', c: 'mekanlar' },
  { w: 'Güneş', c: 'doga' }, { w: 'Ay', c: 'doga' }, { w: 'Yıldız', c: 'doga' }, { w: 'Bulut', c: 'doga' }, { w: 'Yağmur', c: 'doga' },
  { w: 'Kar', c: 'doga' }, { w: 'Rüzgar', c: 'doga' }, { w: 'Fırtına', c: 'doga' }, { w: 'Şimşek', c: 'doga' }, { w: 'Gökkuşağı', c: 'doga' },
  { w: 'Bebek', c: 'insanlar' }, { w: 'Çocuk', c: 'insanlar' }, { w: 'Genç', c: 'insanlar' }, { w: 'Yaşlı', c: 'insanlar' }, { w: 'Anne', c: 'ailem' },
  { w: 'Baba', c: 'ailem' }, { w: 'Kardeş', c: 'ailem' }, { w: 'Abi', c: 'ailem' }, { w: 'Abla', c: 'ailem' }, { w: 'Dede', c: 'ailem' },
  { w: 'Nine', c: 'ailem' }, { w: 'Amca', c: 'ailem' }, { w: 'Dayı', c: 'ailem' }, { w: 'Hala', c: 'ailem' }, { w: 'Teyze', c: 'ailem' },
  { w: 'Kuzen', c: 'ailem' }, { w: 'Arkadaş', c: 'insanlar' }, { w: 'Dost', c: 'insanlar' }, { w: 'Düşman', c: 'insanlar' }, { w: 'Komşu', c: 'insanlar' }
];
const verbs = ['Görmek', 'Yemek', 'Almak', 'Vermek', 'Kırmak', 'Kaybetmek', 'Bulmak', 'Dikmek', 'Yıkamak', 'Temizlemek', 'Okumak', 'Yazmak', 'Aramak', 'Satmak', 'Saklamak', 'Korumak', 'Taşımak', 'Bırakmak', 'Düşürmek', 'Çalmak', 'Uçmak', 'Koşmak', 'Yürümek', 'Yüzmek', 'Tırmanmak'];

const allCombinations = [];

let count = 0;
outer: for (let adj of adjectives) {
  for (let noun of nouns) {
    for (let verb of verbs) {
      if (count >= 5000) break outer;
      const title = `${adj} ${noun.w} ${verb}`;
      const slug = slugify(title);
      allCombinations.push({ title, slug, category: noun.c });
      count++;
    }
  }
}

const batchSize = 100;
let batchIndex = 1;

for (let i = 0; i < allCombinations.length; i += batchSize) {
  const batchItems = allCombinations.slice(i, i + batchSize);
  const batchSlugs = batchItems.map(b => b.slug);
  
  const generatedData = batchItems.map((item, idx) => {
    const related = [
      batchSlugs[(idx + 1) % batchSize],
      batchSlugs[(idx + 5) % batchSize],
      batchSlugs[(idx + 10) % batchSize]
    ];
    return generateComprehensiveSymbolContent(item.slug, item.title, item.category, related);
  });
  
  const filePath = path.join(symbolsDir, `generated-5000-batch-${batchIndex}.json`);
  fs.writeFileSync(filePath, JSON.stringify(generatedData, null, 2), 'utf-8');
  console.log(`Generated ${filePath} (${generatedData.length} items)`);
  batchIndex++;
}

console.log(`Successfully generated ${count} new symbols!`);
