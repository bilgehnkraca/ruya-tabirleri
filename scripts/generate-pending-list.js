const fs = require('fs');
const path = require('path');

const adjectives = [
  'mavi', 'kırmızı', 'yeşil', 'sarı', 'mor', 'siyah', 'beyaz', 'pembe', 'turuncu', 'gri', 'altın', 'gümüş',
  'büyük', 'küçük', 'uçan', 'konuşan', 'eski', 'yeni', 'parlak', 'karanlık', 'dev', 'minik', 'kırık', 'yanan', 
  'donmuş', 'kayıp', 'gizli', 'sihirli', 'kristal', 'camdan', 'tahtadan', 'demirden', 'altından', 'gümüşten',
  'hasta', 'yaralı', 'mutlu', 'üzgün', 'kızgın', 'korkmuş', 'cesur', 'hızlı', 'yavaş', 'ağır', 'hafif', 'soğuk', 'sıcak',
  'vahşi', 'evcil', 'tehlikeli', 'zararsız', 'zehirli', 'şifalı', 'kutsal', 'lanetli', 'görünmez', 'devvasa', 'cüce',
  'üç gözlü', 'çift başlı', 'kanatlı', 'kuyruklu', 'boynuzlu', 'pullu', 'tüylü', 'çıplak', 'giyinik', 'silahlı', 'silahsız',
  'karanlıkta parlayan', 'su altında nefes alan', 'ateş püskürten', 'buz tutmuş', 'alev alev yanan', 'kana bulanmış', 'çamurlu',
  'tertemiz', 'pis', 'kokulu', 'sessiz', 'gürültülü', 'müzikal', 'ritmik', 'düzensiz', 'karmaşık', 'basit'
];

const nouns = [
  'kapı', 'anahtar', 'kitap', 'ayna', 'kutu', 'yüzük', 'saat', 'kılıç', 'kalkan', 'gemi', 'tren', 'uçak', 'araba', 'bisiklet',
  'ev', 'saray', 'kule', 'şato', 'kale', 'köprü', 'orman', 'dağ', 'deniz', 'okyanus', 'nehir', 'göl', 'şelale', 'çöl', 'mağara',
  'vadi', 'gökyüzü', 'bulut', 'yıldız', 'ay', 'güneş', 'gezegen', 'uzay',
  'aslan', 'kaplan', 'kurt', 'ayı', 'fil', 'zürafa', 'zebra', 'maymun', 'yılan', 'timsah', 'ejderha', 'anka kuşu', 'tekboynuz',
  'deniz kızı', 'peri', 'melek', 'şeytan', 'cin', 'hayalet', 'vampir', 'kurtadam', 'zombi', 'uzaylı', 'robot',
  'bilgisayar', 'telefon', 'televizyon', 'kamera', 'fotoğraf makinesi', 'gitar', 'piyano', 'keman', 'davul', 'flüt',
  'kalem', 'defter', 'silgi', 'çanta', 'cüzdan', 'para', 'altın', 'elmas', 'zümrüt', 'yakut', 'safir', 'inci', 'kolye', 'küpe', 'bilezik', 'taç',
  'kral', 'kraliçe', 'prens', 'prenses', 'şövalye', 'büyücü', 'cadı', 'doktor', 'öğretmen', 'polis', 'asker', 'itfaiyeci', 'aşçı', 'şoför', 'pilot', 'kaptan',
  'elma', 'armut', 'muz', 'çilek', 'karpuz', 'kavun', 'üzüm', 'kiraz', 'şeftali', 'kayısı', 'ekmek',
  'su', 'süt', 'çay', 'kahve', 'şarap', 'gözyaşı', 'kan', 'ter',
  'kuyu', 'mezar', 'tabut', 'kefen', 'karanlık oda', 'labirent', 'hapishane', 'hastane', 'okul', 'cami', 'kilise', 'tapınak',
  'bahçe', 'park', 'mezarlık', 'lunapark', 'pazar', 'çarşı', 'bakkal', 'süpermarket', 'avm', 'sinema', 'tiyatro', 'stadyum',
  'uçurum', 'şelale', 'yanardağ', 'buzul', 'orman yangını', 'deprem', 'sel', 'kasırga', 'hortum', 'tsunami', 'meteor'
];

const verbs = [
  'görmek', 'görmek', 'görmek', 'görmek', 'görmek', // Weighted heavily towards görmek
  'bulmak', 'kaybetmek', 'almak', 'vermek', 'çalmak', 'yapmak', 'kırmak', 'tamir etmek',
  'yemek', 'içmek', 'giymek', 'sürmek', 'uçurmak', 'yüzmek', 'koşmak', 'yürümek', 'atlamak', 'düşmek', 'uçmak', 'tırmanmak', 'kaçmak', 'saklanmak',
  'aramak', 'beklemek', 'uyumak', 'gülmek', 'ağlamak', 'bağırmak', 'sevmek', 'korkmak', 'öldürmek', 'kurtarmak', 'öpüşmek', 'sarılmak', 'kavga etmek'
];

const generateUnique = (count) => {
  const set = new Set();
  while (set.size < count) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const phrase = `rüyada ${adj} ${noun} ${verb}`;
    set.add(phrase);
  }
  return Array.from(set);
};

const generated = generateUnique(600);

const existingFile = path.join(__dirname, '../content/pending-symbols.txt');
const currentLines = fs.existsSync(existingFile) 
  ? fs.readFileSync(existingFile, 'utf8').split('\n').filter(l => l.trim().length > 0)
  : [];

const allUnique = Array.from(new Set([...currentLines, ...generated]));

fs.writeFileSync(existingFile, allUnique.join('\n'));
console.log(`Successfully generated and saved ${allUnique.length} symbols to pending-symbols.txt`);
