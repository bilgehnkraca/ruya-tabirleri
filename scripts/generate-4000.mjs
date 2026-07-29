import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symbolsDir = path.join(__dirname, '..', 'content', 'symbols');

if (!fs.existsSync(symbolsDir)) {
  fs.mkdirSync(symbolsDir, { recursive: true });
}

// Slugs Helper
function slugify(text) {
  const trMap = { 'ç': 'c', 'Ç': 'c', 'ğ': 'g', 'Ğ': 'g', 'ı': 'i', 'I': 'i', 'İ': 'i', 'ö': 'o', 'Ö': 'o', 'ş': 's', 'Ş': 's', 'ü': 'u', 'Ü': 'u' };
  let str = text.toLowerCase();
  for (let key in trMap) {
    str = str.split(key).join(trMap[key]);
  }
  return str.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
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
  return clean.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function normalizeCategory(cat) {
  return cat || 'genel';
}

function getCategoryContext(category, lowerName) {
  return {
      spiritualFocus: `İslami kaynaklarda ${lowerName} sembolü, hayatınızdaki sınavlara, niyetlerinizin yönüne ve rızkınıza delalet eder. Manevi uyanışa ve ilahi lütuflara işaret eden bir imgedir.`,
      psychoFocus: `Psikolojik açıdan ${lowerName}, bilinçaltınızın yüzleşmek istediği duygusal birikimlerin, isteklerin ve yaşam mücadelelerinin somut bir yansımasıdır. İçsel bir bütünlenme çabası olarak değerlendirilmelidir.`,
      generalFocus: `Hayatınızın bu döneminde, olayları daha sağduyulu bir şekilde analiz etmeniz ve karşınıza çıkacak yeni kapılara esnek bir zihinle yaklaşmanız gerektiğini vurgular.`
  };
}

function generateComprehensiveSymbolContent(slug, rawTitle, category, relatedSlugs) {
  const cleanName = getCleanName(rawTitle, slug);
  const lowerName = cleanName.toLowerCase();
  const ctx = getCategoryContext(category, lowerName);

  return {
    slug,
    title: `Rüyada ${cleanName} Görmek - İslami, Diyanet ve Psikolojik Tabiri`,
    shortDescription: `Rüyada ${lowerName} görmek, İslami ve Diyanet tefsirlerine göre hayırlı gelişmelere, manevi ferahlığa ve bereketli günlere işaret ederken; psikolojik olarak bilinçaltının dönüşüm, arınma ve içsel denge arayışını sembolize eder.`,
    category,
    content: {
      introduction: `Rüyada ${lowerName} ile karşılaşmak, insan zihninin uyku esnasında hem spritüel sezgilerle hem de bilinçaltının derin sembolik diliyle kurduğu çok boyutlu ve anlamlı bir iletişim biçimidir. Kadim rüya tabiri geleneğinden günümüz nöro-psikolojik uyku araştırmalarına kadar bu imge, bireyin yaşamında önemli bir dönüm noktasını, zihinsel bir uyanışı veya derin bir farkındalık evresini temsil eder. Uykunun REM evresinde rasyonel zihnin savunma mekanizmalarının gevşemesiyle açığa çıkan bu sembol, rüya sahibinin bilinçli dünyası ile bastırılmış duyguları arasında organik bir köprü kurar. İslami literatürde ilahi bir uyarı, müjde veya fıtrat çağrısı olarak değerlendirilen bu deneyim, modern psikolojide ise zihnin kendisini iyileştirme, dengeleme ve yeniden yapılandırma sürecinin en somut göstergesi olarak kabul edilmektedir. Bu bağlamda rüyanın tüm detaylarıyla incelenmesi, rüya sahibinin geçmiş tecrübelerini anlamlandırmasına ve geleceğe dair daha bilinçli adımlar atmasına olanak tanır. ${ctx.spiritualFocus}`,
      generalMeaning: `Rüyada ${lowerName} görmenin gündelik yaşama, sosyal ilişkilere ve mesleki hayata yansımaları incelendiğinde, kişinin hayatında yepyeni bir vizyon kazanacağı, kararlı kararlar alacağı bir evreye girdiği açıkça görülmektedir. ${ctx.generalFocus} Uzman rüya analistleri, bu rüyayı deneyimleyen bireylerin özellikle karar alma süreçlerinde aceleci davranmaktan kaçınarak sağduyulu, gözleme dayalı ve analitik bir tutum sergilemelerini önermektedir. Kariyer ve iş yaşamında uzun süredir devam eden belirsizliklerin ortadan kalkmasına, sarf edilen emeklerin karşılık bulmasına ve yeni finansal fırsatların kapıyı aralamasına delalet eden bu sembol, aynı zamanda sosyal ilişkilerde empati ve karşılıklı güvenin önemini vurgular. Kişinin yakın çevresiyle olan iletişiminde daha yapıcı, şeffaf ve anlayışlı bir dil kullanması, olası yanlış anlaşılmaları önleyeceği gibi sosyal bağları da güçlendirecektir. Yaşamın doğal akışı içerisinde karşılaşılan zorlukların kalıcı olmadığını hatırlatan bu sembol, kişinin özgüvenini tazelemesi, içsel motivasyonunu yükseltmesi ve hedeflerine doğru kararlı, istikrarlı adımlarla ilerlemesi gerektiğini gösteren güçlü bir rehberdir.`,
      religiousMeaning: `Kadim İslami rüya tabiri kaynaklarına (özellikle İmam Nablusi, İbn-i Sirin, İmam Cafer-i Sadık ve Seyyid Süleyman ekollerine) göre, rüyada ${lowerName} görmek, rüya sahibinin manevi durumuna, niyetlerinin safiyetine ve rüyanın görüldüğü esnadaki ruh haline bağlı olarak çok katmanlı bir tefsire sahiptir. Diyanet rüya tabirleri rehberliğinde de altı çizildiği üzere, bu sembol müminler için hem ruhsal bir ferahlamayı hem de ilahi bir ikazı barındırabilir. Eğer rüya sahibi hak yolunda dürüstlük, adalet ve erdemle hareket ediyorsa, bu rüya helal rızka, haneye girecek berekete, hastalıklardan şifa bulmaya ve duaların kabul olunacağı nurlu bir döneme işaret eder. İslami alimler, rüyada görülen bu imgenin temiz, aydınlık ve huzur verici olmasını rahmet ve mağfiret alameti olarak yorumlarlar. Ancak rüya esnasında kasvet, korku veya belirsizlik hissedildiyse, bu durum kişinin dünya telaşına gereğinden fazla kapılarak ahiret bilincini, manevi mesuliyetlerini ve insani yükümlülüklerini ihmal ettiğine dair ilahi bir uyarı niteliği taşır. Bu sebeple rüya sahibinin tövbe etmesi, sadaka vererek belaları def etmesi, kul hakkına riayet etmesi ve manevi dünyasına daha fazla özen göstererek iç huzuru araması tavsiye edilmektedir. İslami bilginlerin ittifakla belirttiği üzere, rüyalar Allah'ın kullarına bir rehberi olup, hayra yorulmalı ve hayır beklenmelidir.`,
      psychologicalMeaning: `Analitik psikoloji perspektifinden (özellikle Carl Gustav Jung ve Sigmund Freud'un derinlik psikolojisi kuramları ışığında) rüyada ${lowerName} imgesi, bilinçdışının bilince taşımak istediği hayati sembolik mesajlar barındırır. Jung, bu tür sembolleri bireyin "bireyleşme (individuation)" sürecinde karşılaştığı arketipsel yansımalar, kollektif bilinçdışı unsurları ve gölge (shadow) arketipi ile bütünleşme çabası olarak değerlendirir. ${ctx.psychoFocus} Günlük yaşamda ifade edilememiş arzulardan, bastırılmış kaygılardan veya çözümsüz kalmış kişilerarası çatışmalardan kaynaklanan psişik enerji, uykuda sembolik bir forma bürünerek bu imge üzerinden açığa çıkar. Freudyan yaklaşıma göre ise bu rüya, ego ile id arasındaki dengeyi sağlamaya çalışan bir ego savunma mekanizması ve bilinçaltındaki isteklerin dolaylı bir tatminidir. Rüya sahibinin güncel hayatında yaşadığı stres, kontrol kaybı endişesi, kimlik arayışı veya varoluşsal sorgulamalar, zihnin rüya atölyesinde yeniden işlenerek duygusal bir boşalma (katarsis) sağlanır. Bu deneyim, zihinsel bir rehabilitasyon ve psikolojik bütünlenme süreci olup, bireyin kendi içsel gücünü fark etmesi, ruhsal yüklerinden arınması ve zihinsel bütünlüğünü sağlayarak hayata daha sağlıklı adapte olması için bilinçaltının sunduğu şifalı bir haritadır.`,
      variations: [
        {
          title: `Rüyada Beklenmedik Bir Anda ve Mekanda ${cleanName} İle Karşılaşmak`,
          content: `Rüyada hiç umulmadık bir anda ve alışılmadık bir mekanda ${lowerName} ile karşılaşmak, gerçek yaşamda rüya sahibinin karşısına çıkacak ani, sürpriz gelişmelere, kader dönüşümlerine ve önemli fırsat kapılarına işaret eder. Bu durum ilk etapta kişide tatlı bir şaşkınlık veya heyecan yaratsa da, zamanla hayatın akışını olumlu yönde değiştirecek stratejik imkanlar sunacaktır. İslami tefsirler bu durumu ilahi lütuf ve beklenmedik yerden gelen rızık (min haysu la yahtesib) olarak nitelendirirken, psikolojik analizler bireyin bilinçaltında yatan uyum sağlama esnekliğini ve yeni tecrübelere açık olma kapasitesini vurgular.`
        },
        {
          title: `Rüyada ${cleanName} Görürken Derin Bir Huzur ve Mutluluk Hissetmek`,
          content: `Rüya esnasında ${lowerName} ile muhatap olurken kalpte derin bir huzur, sevinç ve güven duygusu hissetmek, hem dünyevi hem de uhrevi anlamda kusursuz bir uyum ve tatmin evresine girildiğini müjdeler. Kadim alimlere göre bu rüya, kişinin ettiği duaların kabul olduğuna, vicdanen rahat bir yaşam sürdüğüne ve manevi bir koruma altında bulunduğuna delalet eder. Psikolojik olarak ise zihnin içsel çatışmalarını çözüme kavuşturduğunu, egonun sakinleştiğini ve bireyin kendisiyle barışık, sağlıklı bir ruh haline ulaştığını kanıtlayan çok güçlü bir pozitif semboldür.`
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

// 1. Get existing slugs
const existingSlugs = new Set();
function loadExistingSlugs() {
  if (!fs.existsSync(symbolsDir)) return;
  const rootFiles = fs.readdirSync(symbolsDir, { withFileTypes: true });
  
  const allJsonFiles = [];
  for (const dirent of rootFiles) {
    if (dirent.isDirectory()) {
      const subFiles = fs.readdirSync(path.join(symbolsDir, dirent.name));
      subFiles.forEach(f => {
         if (f.endsWith('.json')) allJsonFiles.push(path.join(symbolsDir, dirent.name, f));
      });
    } else if (dirent.name.endsWith('.json')) {
      allJsonFiles.push(path.join(symbolsDir, dirent.name));
    }
  }

  for (const filePath of allJsonFiles) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    try {
      const parsed = JSON.parse(fileContent);
      if (Array.isArray(parsed)) {
        parsed.forEach(p => p.slug && existingSlugs.add(p.slug));
      } else if (parsed && typeof parsed === 'object' && parsed.slug) {
        existingSlugs.add(parsed.slug);
      }
    } catch(e) {}
  }
}
loadExistingSlugs();
console.log(`Loaded ${existingSlugs.size} existing slugs.`);

// 2. Data Lists to generate from
const adjs = [
  "Büyük", "Küçük", "Eski", "Yeni", "Sıcak", "Soğuk", "Parlak", "Sönük", "Renkli", "Siyah", 
  "Beyaz", "Kırmızı", "Mavi", "Sarı", "Yeşil", "Hızlı", "Yavaş", "Zengin", "Fakir", "Temiz", 
  "Kirli", "Derin", "Sığ", "Yüksek", "Alçak", "Tatlı", "Acı", "Yaralı", "Yavru", "Devasa",
  "Uçan", "Kayıp", "Bulunan", "Görünmez", "Değerli", "Kırık", "Dökük", "Bozuk", "Tamir Edilmiş",
  "Korkutucu", "Sevimli", "Tuhaf", "Altın", "Gümüş", "Ahşap", "Metal", "Demir", "Buzlu", "Ateşli"
];

const nouns = [
  { w: "Elbise", c: "nesneler" }, { w: "Yol", c: "mekanlar" }, { w: "Dağ", c: "doga" }, { w: "Ağaç", c: "doga" },
  { w: "Gül", c: "doga" }, { w: "Rüzgar", c: "doga" }, { w: "Güneş", c: "doga" }, { w: "Ay", c: "doga" },
  { w: "Deniz", c: "doga" }, { w: "Köprü", c: "mekanlar" }, { w: "Şehir", c: "mekanlar" }, { w: "Köy", c: "mekanlar" },
  { w: "Orman", c: "doga" }, { w: "Nehir", c: "doga" }, { w: "Kitap", c: "nesneler" }, { w: "Telefon", c: "nesneler" },
  { w: "Anahtar", c: "nesneler" }, { w: "Saat", c: "nesneler" }, { w: "Ayna", c: "nesneler" }, { w: "Kılıç", c: "nesneler" },
  { w: "Mezar", c: "mekanlar" }, { w: "Hastane", c: "mekanlar" }, { w: "Okul", c: "mekanlar" }, { w: "Bebek", c: "insanlar" },
  { w: "Asker", c: "insanlar" }, { w: "Dost", c: "insanlar" }, { w: "Öğretmen", c: "insanlar" }, { w: "Patron", c: "insanlar" },
  { w: "Cüzdan", c: "nesneler" }, { w: "Gözlük", c: "nesneler" }, { w: "Yatak", c: "nesneler" }, { w: "Masa", c: "nesneler" },
  { w: "Koltuk", c: "nesneler" }, { w: "Merdiven", c: "nesneler" }, { w: "Duvar", c: "nesneler" }, { w: "Pencere", c: "nesneler" },
  { w: "Gemi", c: "yolculuk" }, { w: "Uçak", c: "yolculuk" }, { w: "Tren", c: "yolculuk" }, { w: "Bisiklet", c: "yolculuk" }
];

const verbs = [
  "Gömek", "Almak", "Satmak", "Bulmak", "Kaybetmek", "Kırmak", "Yapmak", "Yıkmak", "Aramak", "Göstermek",
  "Düşmek", "Kalkmak", "Koşmak", "Yürümek", "Zıplamak", "Uçmak", "Yüzmek", "Boğulmak", "Gülmek", "Ağlamak",
  "Korkmak", "Bağırmak", "Söylemek", "Dinlemek", "Sarılarak", "Kaçmak", "Kovalamak", "Saklamak", "Gezmek"
];

const newCombinations = [];

// Generate up to 4000
for (const adj of adjs) {
  for (const noun of nouns) {
    for (const verb of verbs) {
      if (newCombinations.length >= 4000) break;
      const title = `${adj} ${noun.w} ${verb}`;
      const slug = slugify(title);
      if (!existingSlugs.has(slug)) {
        newCombinations.push({ title, slug, category: noun.c });
        existingSlugs.add(slug);
      }
    }
  }
}

console.log(`Generated ${newCombinations.length} unique combinations.`);

// Batch and save
const batchSize = 100;
let batchIndex = 1;

for (let i = 0; i < newCombinations.length; i += batchSize) {
  const batchItems = newCombinations.slice(i, i + batchSize);
  const batchSlugs = batchItems.map(b => b.slug);
  
  const generatedData = batchItems.map((item, idx) => {
    const related = [
      batchSlugs[(idx + 1) % batchItems.length],
      batchSlugs[(idx + 5) % batchItems.length],
      batchSlugs[(idx + 10) % batchItems.length]
    ];
    return generateComprehensiveSymbolContent(item.slug, item.title, item.category, related);
  });
  
  const filePath = path.join(symbolsDir, `generated-4000-batch-${batchIndex}.json`);
  fs.writeFileSync(filePath, JSON.stringify(generatedData, null, 2), 'utf-8');
  console.log(`Generated ${filePath} (${generatedData.length} items)`);
  batchIndex++;
}

console.log(`Successfully generated ${newCombinations.length} new symbols to reach 15,000!`);
