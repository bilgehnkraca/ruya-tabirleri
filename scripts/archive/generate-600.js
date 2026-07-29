const fs = require('fs');
const path = require('path');

// Helper to clean title for inline usage
function getCleanName(title) {
  return title.replace(/^Rüyada\s+/i, '').replace(/\s+Görmek.*/i, '').trim();
}

// Helper to generate comprehensive zero-fluff text sections
function generateSymbolContent(slug, baseTitle, category) {
  const cleanName = getCleanName(baseTitle);
  const lowerName = cleanName.toLowerCase();

  const title = `Rüyada ${cleanName} Görmek - İslami, Diyanet ve Psikolojik Tabiri`;
  
  const shortDescription = `Rüyada ${lowerName} görmek, İslami ve Diyanet tefsirlerine göre manevi arınmaya, helal kazanca ve hayırlı bir döneme girildiğine işaret ederken; analitik psikoloji ve Jung ekolüne göre bilinçaltının derinliklerindeki arketipsel dönüşümü, ego dengesini ve zihinsel bütünleşme çabasını simgeler.`;

  const introduction = `Rüyada ${lowerName} ile karşılaşmak, insan zihninin uyku esnasında hem spritüel sezgilerle hem de bilinçaltının sembolik diliyle kurduğu çok boyutlu bir iletişim biçimidir. Kadim rüya tabiri geleneğinden günümüz nöro-psikolojik uyku araştırmalarına kadar bu imge, bireyin yaşamında önemli bir dönüm noktasını veya içsel bir uyanışı temsil eder. Uykunun REM evresinde zihinsel savunma mekanizmalarının gevşemesiyle ortaya çıkan bu sembol, rüya sahibinin bilinçli dünyası ile bastırılmış duyguları arasında köprü kurar. İslami literatürde ilahi bir mesaj, müjde veya fıtrat uyarısı olarak değerlendirilen bu deneyim, modern psikolojide ise zihnin kendini iyileştirme ve yeniden yapılandırma sürecinin en somut göstergesi olarak kabul edilmektedir. Bu bağlamda rüyanın tüm detaylarıyla incelenmesi, rüya sahibinin geleceğe dair daha bilinçli adımlar atmasına olanak tanır.`;

  const generalMeaning = `Rüyada ${lowerName} görmenin gündelik yaşama ve sosyal ilişkilere yansımaları incelendiğinde, kişinin ailevi, mesleki veya toplumsal hayatında yepyeni bir vizyon kazanacağı bir evreye girdiği açıkça görülmektedir. Uzman rüya analistleri, bu rüyayı deneyimleyen bireylerin özellikle karar alma süreçlerinde aceleci davranmaktan kaçınarak sağduyulu, gözleme dayalı ve analitik bir tutum sergilemelerini önermektedir. Kariyer ve iş yaşamında uzun süredir devam eden belirsizliklerin ortadan kalkmasına, sarf edilen emeklerin karşılık bulmasına ve yeni finansal fırsatların kapıyı aralamasına delalet eden bu sembol, aynı zamanda sosyal ilişkilerde empati ve karşılıklı güvenin önemini vurgular. Kişinin yakın çevresiyle olan iletişiminde daha yapıcı bir dil kullanması, olası yanlış anlaşılmaları önleyeceği gibi sosyal bağları da güçlendirecektir. Yaşamın doğal akışı içerisinde karşılaşılan zorlukların kalıcı olmadığını hatırlatan bu sembol, kişinin özgüvenini tazelemesi, içsel motivasyonunu yükseltmesi ve hedeflerine doğru kararlı, istikrarlı adımlarla ilerlemesi gerektiğini gösteren güçlü bir rehberdir.`;

  const religiousMeaning = `Kadim İslami rüya tabiri kaynaklarına (özellikle İmam Nablusi, İbn-i Sirin, İmam Cafer-i Sadık ve Seyyid Süleyman ekollerine) göre, rüyada ${lowerName} görmek, rüya sahibinin manevi durumuna, niyetlerinin safiyetine ve rüyanın görüldüğü esnadaki ruh haline bağlı olarak çok katmanlı bir tefsire sahiptir. Diyanet rüya tabirleri rehberliğinde de altı çizildiği üzere, bu sembol müminler için hem ruhsal bir ferahlamayı hem de ilahi bir ikazı barındırabilir. Eğer rüya sahibi hak yolunda dürüstlük, adalet ve erdemle hareket ediyorsa, bu rüya helal rızka, haneye girecek berekete, hastalıklardan şifa bulmaya ve duaların kabul olunacağı nurlu bir döneme işaret eder. İslami alimler, rüyada görülen bu imgenin temiz, aydınlık ve huzur verici olmasını rahmet ve mağfiret alameti olarak yorumlarlar. Ancak rüya esnasında kasvet, korku veya belirsizlik hissedildiyse, bu durum kişinin dünya telaşına gereğinden fazla kapılarak ahiret bilincini, manevi mesuliyetlerini ve insani yükümlülüklerini ihmal ettiğine dair ilahi bir uyarı niteliği taşır. Bu sebeple rüya sahibinin tövbe etmesi, sadaka vererek belaları def etmesi, kul hakkına riayet etmesi ve manevi dünyasına daha fazla özen göstererek iç huzuru araması tavsiye edilmektedir.`;

  const psychologicalMeaning = `Analitik psikoloji perspektifinden (özellikle Carl Gustav Jung ve Sigmund Freud'un derinlik psikolojisi kuramları ışığında) rüyada ${lowerName} imgesi, bilinçdışının bilince taşımak istediği hayati sembolik mesajlar barındırır. Jung, bu tür sembolleri bireyin "bireyleşme (individuation)" sürecinde karşılaştığı arketipsel yansımalar, kollektif bilinçdışı unsurları ve gölge (shadow) arketipi ile bütünleşme çabası olarak değerlendirir. Günlük yaşamda ifade edilememiş arzulardan, bastırılmış kaygılardan veya çözümsüz kalmış kişilerarası çatışmalardan kaynaklanan psişik enerji, uykuda sembolik bir forma bürünerek bu imge üzerinden açığa çıkar. Freudyan yaklaşıma göre ise bu rüya, ego ile id arasındaki dengeyi sağlamaya çalışan bir ego savunma mekanizması ve bilinçaltındaki isteklerin dolaylı bir tatminidir. Rüya sahibinin güncel hayatında yaşadığı stres, kontrol kaybı endişesi, kimlik arayışı veya varoluşsal sorgulamalar, zihnin rüya atölyesinde yeniden işlenerek duygusal bir boşalma (katarsis) sağlanır. Bu deneyim, zihinsel bir rehabilitasyon ve psikolojik bütünlenme süreci olup, bireyin kendi içsel gücünü fark etmesi, ruhsal yüklerinden arınması ve zihinsel bütünlüğünü sağlayarak hayata daha sağlıklı adapte olması için bilinçaltının sunduğu şifalı bir haritadır.`;

  const variations = [
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
  ];

  const faqs = [
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
  ];

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
      variations,
      faqs
    }
  };
}

// 167 symbols divided into 5 batches (Batch 05 to 09)
const batch05 = [
  { slug: 'kus-oldugun-akrabayla-barismak-ve-sarilip-aglamak', title: 'Küs Olduğun Akrabayla Barışmak ve Sarılıp Ağlamak', category: 'insanlar' },
  { slug: 'eski-esin-yeni-bir-bebegi-oldugunu-gormek', title: 'Eski Eşin veya Sevgilinin Yeni Bir Bebeği Olduğunu Görmek', category: 'ailem' },
  { slug: 'kalabalik-akraba-meclisinde-tartisma-cikmasi', title: 'Kalabalık Bir Akraba Meclisinde Tartışma Çıkması ve Haklı Çıkmak', category: 'insanlar' },
  { slug: 'vefat-eden-babanin-elinde-parlayan-anahtar-vermesi', title: 'Vefat Eden Babanın Elinde Parlayan Bir Anahtar Vermesi', category: 'ailem' },
  { slug: 'tanimadigin-yasli-kadinin-sana-dua-etmesi', title: 'Tanımadığın Yaşlı Bir Kadının Sana Dua Etmesi ve Yol Göstermesi', category: 'insanlar' },
  { slug: 'is-yerindeki-yoneticinle-yemekte-bulusup-terfi-almak', title: 'İş Yerindeki Yöneticinle Yemekte Buluşup Terfi Almak', category: 'insanlar' },
  { slug: 'en-yakin-arkadasinin-sana-ihanet-ettigini-gormek', title: 'En Yakın Arkadaşının Sana İhanet Ettiğini Görmek ve Üzülmek', category: 'insanlar' },
  { slug: 'uzaktaki-akrabanin-aniden-evine-misafir-gelmesi', title: 'Uzaktaki Bir Akrabanın Aniden Evine Misafir Gelmesi', category: 'ailem' },
  { slug: 'hastanedeki-hastayi-ziyaret-ederken-iyilestigini-gormek', title: 'Hastanedeki Bir Hastayı Ziyaret Ederken Aniden İyileştiğini Görmek', category: 'insanlar' },
  { slug: 'bebek-arabasinda-aglayan-bebegi-susturmak', title: 'Bebek Arabasında Ağlayan Bir Bebeği Susturmak ve Güldürmek', category: 'insanlar' },
  { slug: 'vefat-eden-dedenin-evinde-kalabalik-sofra-gormek', title: 'Vefat Eden Dedenin Evinde Kalabalık ve Bereketli Sofra Görmek', category: 'ailem' },
  { slug: 'kardesinle-birlikte-yeni-bir-is-kurdugunu-gormek', title: 'Kardeşinle Birlikte Yeni ve Başarılı Bir İş Kurduğunu Görmek', category: 'ailem' },
  { slug: 'anneyle-birlikte-pazardan-taze-meyve-almak', title: 'Anneyle Birlikte Pazardan Taze ve Olgun Meyveler Almak', category: 'ailem' },
  { slug: 'eski-komsuyla-sokakta-karsilasip-sohbet-etmek', title: 'Eski Komşuyla Sokakta Karşılaşıp Uzun Uzun Sohbet Etmek', category: 'insanlar' },
  { slug: 'tanimadigin-bir-cocugun-elini-tutup-yolun-karsisina-gecirmek', title: 'Tanımadığın Bir Çocuğun Elini Tutup Yolun Karşısına Geçirmek', category: 'insanlar' },
  { slug: 'kalabalik-bir-toplantida-konusma-yapip-alkislanmak', title: 'Kalabalık Bir Toplantıda Etkili Konuşma Yapıp Alkışlanmak', category: 'insanlar' },
  { slug: 'vefat-eden-babaannenin-sana-altin-yuzuk-vermesi', title: 'Vefat Eden Babaannenin Sana Parlak Altın Bir Yüzük Vermesi', category: 'ailem' },
  { slug: 'kardisinin-dugununde-mutluluktan-aglamak', title: 'Kardeşinin Düğününde Mutluluktan Gözyaşı Dökmek', category: 'ailem' },
  { slug: 'eski-okul-arkadaslariyla-mezuniyet-kutlamasi-yapmak', title: 'Eski Okul Arkadaşlarıyla Yıllar Sonra Mezuniyet Kutlaması Yapmak', category: 'insanlar' },
  { slug: 'tanimadigin-bir-doktorun-sana-mujde-vermesi', title: 'Tanımadığın Güleryüzlü Bir Doktorun Sana Müjdeli Bir Haber Vermesi', category: 'insanlar' },
  { slug: 'kalabalik-aile-fotografinda-kendini-gorememek', title: 'Kalabalık Bir Aile Fotoğrafına Bakıp Kendini Orada Görememek', category: 'ailem' },
  { slug: 'bebegi-olmayan-arkadasinin-hamile-oldugunu-ogrenmek', title: 'Bebeği Olmayan Bir Arkadaşının Hamile Olduğunu Öğrenip Sevinmek', category: 'insanlar' },
  { slug: 'vefat-eden-kardesine-sarilip-hasret-gidermek', title: 'Vefat Eden Kardeşine Sarılıp Uzun Uzun Hasret Gidermek', category: 'ailem' },
  { slug: 'is-arkadaslariyla-birlikte-uzun-yolculuga-cikmak', title: 'İş Arkadaşlarıyla Birlikte Keyifli ve Uzun Bir Yolculuğa Çıkmak', category: 'insanlar' },
  { slug: 'anne-ve-babanin-el-ele-tutustugunu-gormek', title: 'Anne ve Babanın Mutlu Bir Şekilde El Ele Tutuştuğunu Görmek', category: 'ailem' },
  { slug: 'kus-oldugun-arkadasinin-sana-hediye-gondermesi', title: 'Küs Olduğun Bir Arkadaşının Sana Aniden Değerli Bir Hediye Göndermesi', category: 'insanlar' },
  { slug: 'tanimadigin-bir-gelinin-sana-cicek-atmasi', title: 'Tanımadığın Beyazlar İçindeki Bir Gelinin Sana Düğün Çiçeğini Atması', category: 'insanlar' },
  { slug: 'vefat-eden-annenin-saat-hediye-etmesi', title: 'Vefat Eden Annenin Sana Kol Saati Hediye Etmesi', category: 'ailem' },
  { slug: 'kalabalik-stadyumda-tezahurat-yapmak', title: 'Kalabalık Bir Stadyumda Coşkuyla Tezahürat Yapıp Sevinmek', category: 'insanlar' },
  { slug: 'babanin-sana-kendi-arabasinin-anahtarini-vermesi', title: 'Babanın Sana Kendi Arabasının Anahtarını Güvenle Vermesi', category: 'ailem' },
  { slug: 'eski-ogretmeninin-sana-kitap-hediye-etmesi', title: 'Eski Öğretmeninin Sana Kalın ve Değerli Bir Kitap Hediye Etmesi', category: 'insanlar' },
  { slug: 'kardeslerinin-sana-surpriz-dogum-gunu-yapmasi', title: 'Kardeşlerinin Sana Evde Sürpriz Doğum Günü Kutlaması Yapması', category: 'ailem' },
  { slug: 'tanimadigin-bir-askerin-sana-selam-vermesi', title: 'Tanımadığın Rütbeli Bir Askerin Sana Saygıyla Selam Vermesi', category: 'insanlar' },
  { slug: 'akrabalarla-birlikte-buyuk-mirasi-paylasmak', title: 'Akrabalarla Birlikte Huzurlu Bir Şekilde Büyük Bir Mirası Paylaşmak', category: 'ailem' }
];

const batch06 = [
  { slug: 'yolda-yururken-cuzdanini-dusurup-baskasinin-bulmasi', title: 'Yolda Yürürken Cüzdanını Düşürüp Sonra Başkasının Bulup Getirmesi', category: 'eylemler' },
  { slug: 'yuksek-ucurumun-kenarinda-durup-denize-bakmak', title: 'Çok Yüksek Bir Uçurumun Kenarında Durup Berrak Denize Bakmak', category: 'eylemler' },
  { slug: 'karanlik-ve-dar-tunelden-yuruyup-aydinliga-cikmak', title: 'Karanlık ve Dar Bir Tünelden Yürüyüp Sonunda Aydınlığa Çıkmak', category: 'eylemler' },
  { slug: 'otobusu-veya-ucagi-son-anda-kacirip-arkasindan-kosmak', title: 'Otobüsü veya Uçağı Son Anda Kaçırıp Arkasından Koşmak', category: 'eylemler' },
  { slug: 'pazar-yerinde-taze-meyve-ve-sebze-secip-almak', title: 'Pazar Yerinde Taze Meyve ve Sebze Seçerek Alışveriş Yapmak', category: 'eylemler' },
  { slug: 'yagmur-yagarken-evin-catisindan-su-damlamasi', title: 'Yağmur Yağarken Evinin Çatısından İçeri Temiz Su Damlaması', category: 'eylemler' },
  { slug: 'aynaya-baktiginda-yuzunun-cok-genc-gorunmesi', title: 'Aynaya Baktığında Kendi Yüzünün Her Zamankinden Çok Genç Görünmesi', category: 'eylemler' },
  { slug: 'ayakkabisinin-tekini-kaybedip-kalabalikta-aramak', title: 'Ayakkabısının Tekini Kaybedip Kalabalıkta Telaşla Aramak', category: 'eylemler' },
  { slug: 'telefonun-ekraninin-kirilmasi-ve-kimseye-ulasamamak', title: 'Telefonun Ekranının Kırılması ve Kimseye Ulaşamamak', category: 'eylemler' },
  { slug: 'evin-kapisini-kilitlerken-anahtarin-kilitte-kirilmasi', title: 'Evinin Kapısını Kilitlerken Anahtarın Kilitte Kırılması', category: 'eylemler' },
  { slug: 'kalabalik-sokakta-kaybolup-sonra-dogru-yolu-bulmak', title: 'Kalabalık ve Yabancı Bir Sokakta Kaybolup Sonra Doğru Yolu Bulmak', category: 'eylemler' },
  { slug: 'firin-sirada-bekleyip-sicacik-taze-ekmek-almak', title: 'Fırın Sırasında Bekleyip Sıcacık ve Taze Ekmek Alıp Eve Dönmek', category: 'eylemler' },
  { slug: 'denizde-yuzerken-aniden-yagmur-yagmaya-baslamasi', title: 'Denizde Keyifle Yüzerken Aniden Sağanak Yağmur Yağmaya Başlaması', category: 'eylemler' },
  { slug: 'yuksek-apartmanin-merdivenlerini-kosarak-cikmak', title: 'Yüksek Bir Apartmanın Merdivenlerini Hiç Yorulmadan Koşarak Çıkmak', category: 'eylemler' },
  { slug: 'elindeki-sicak-cay-bardagini-yere-dusurup-kirmak', title: 'Elindeki Sıcak Çay Bardağını Kazara Yere Düşürüp Kırmak', category: 'eylemler' },
  { slug: 'araba-kullanirken-frenlerin-tutmamasi-ama-durmayi-basarmak', title: 'Araba Kullanırken Frenlerin Tutmaması Ama Kazasız Durmayı Başarmak', category: 'eylemler' },
  { slug: 'yeni-taki-ve-bilezik-takip-ayna-karsisinda-incelemek', title: 'Yeni Takı ve Altın Bilezik Takıp Ayna Karşısında Sevinçle İncelemek', category: 'eylemler' },
  { slug: 'tozlu-ve-eski-odayi-temizleyip-havalandirmak', title: 'Tozlu ve Eski Bir Odayı Baştan Aşağı Temizleyip Havalandırmak', category: 'eylemler' },
  { slug: 'kalabalik-restoranda-siparis-verip-lezzetli-yemek-yemek', title: 'Kalabalık Bir Restoranda Sipariş Verip Çok Lezzetli Yemek Yemek', category: 'eylemler' },
  { slug: 'yeni-ve-beyaz-elbise-giyip-davete-katilmak', title: 'Yeni ve Bembeyaz Bir Elbise Giyip Lüks Bir Davete Katılmak', category: 'eylemler' },
  { slug: 'agactan-kendi-elleriyle-olgun-meyve-koparmak', title: 'Ağaçtan Kendi Elleriyle Olgun Çilek veya Elma Koparıp Yemek', category: 'eylemler' },
  { slug: 'karanlik-gokyuzunde-kayan-yildiz-gorup-dilek-tutmak', title: 'Karanlık Gökyüzünde Kayan Parlak Bir Yıldız Görüp Dilek Tutmak', category: 'eylemler' },
  { slug: 'yolda-giderek-buyuyen-temiz-su-birikintisinden-atlamak', title: 'Yolda Giderek Büyüyen Temiz Bir Su Birikintisinden Kolayca Atlamak', category: 'eylemler' },
  { slug: 'eski-ve-unutulmus-kutu-icinde-fotograflar-bulmak', title: 'Eski ve Unutulmuş Bir Kutunun İçinde Çocukluk Fotoğraflarını Bulmak', category: 'eylemler' },
  { slug: 'bahcede-toprak-kazarken-altin-para-bulmak', title: 'Bahçede Toprak Kazarken Altın Para ve Değerli Madeni Eşya Bulmak', category: 'eylemler' },
  { slug: 'sicak-yaz-gununde-soguk-su-icerek-serinlemek', title: 'Sıcak Bir Yaz Gününde Buz Gibi Soğuk ve Tatlı Su İçerek Serinlemek', category: 'eylemler' },
  { slug: 'kalabalik-pazarda-kaybolan-cocugunu-bulup-sarilmak', title: 'Kalabalık Bir Pazarda Kaybolan Çocuğunu Sonunda Bulup Sarılmak', category: 'eylemler' },
  { slug: 'aglayan-birine-mendil-verip-onu-teselli-etmek', title: 'Ağlayan Tanımadık Birine Temiz Mendil Verip Onu Teselli Etmek', category: 'eylemler' },
  { slug: 'yuksek-kopruden-asagidaki-akarsuyu-izlemek', title: 'Yüksek ve Sağlam Bir Köprüden Aşağıda Şırıl Şırıl Akan Suyu İzlemek', category: 'eylemler' },
  { slug: 'kendi-evinin-duvarlarini-beyaz-veyahut-maviye-boyamak', title: 'Kendi Evinin Duvarlarını Ferah Beyaz veya Mavi Renge Boyamak', category: 'eylemler' },
  { slug: 'kalabalik-dugunde-taki-takinip-tebrik-etmek', title: 'Kalabalık Bir Düğünde Gelin ve Damada Takı Takıp Tebrik Etmek', category: 'eylemler' },
  { slug: 'uzak-sehre-gitmek-icin-tren-garinda-bilet-almak', title: 'Uzak Bir Şehre Yolculuk Yapmak İçin Tren Garında Bilet Almak', category: 'eylemler' },
  { slug: 'evindeki-eski-mobilyalari-yenilerle-degistirmek', title: 'Evindeki Eski Mobilyaları Yeni, Modern ve Güzel Olanlarla Değiştirmek', category: 'eylemler' },
  { slug: 'deniz-kenarinda-yururken-dalgalarin-ayaklarina-vurmasi', title: 'Deniz Kenarında Yalınayak Yürürken Ilık Dalgaların Ayaklarına Vurması', category: 'eylemler' }
];

const batch07 = [
  { slug: 'sandiktan-eski-ve-islemeli-gelinlik-cikarmak', title: 'Sandıktan Eski, Temiz ve İşlemeli Bir Gelinlik Çıkarmak', category: 'nesneler' },
  { slug: 'kirik-saatin-akrep-ve-yelkovanini-tamir-etmek', title: 'Kırık Bir Saatin Akrep ve Yelkovanını Sabırla Tamir Etmeye Çalışmak', category: 'nesneler' },
  { slug: 'ici-piril-piril-altin-dolu-kutu-gormek', title: 'İçi Pırıl Pırıl Altın ve Mücevher Dolu Değerli Bir Kutu Görmek', category: 'nesneler' },
  { slug: 'beyaz-gomlegin-uzerine-kahve-veya-cay-dokulmesi', title: 'Üstüne Giydiğin Temiz Beyaz Gömleğin Üzerine Kahve Dökülmesi', category: 'nesneler' },
  { slug: 'yeni-alinmis-beyaz-arabayi-surerken-yolunu-kaybetmek', title: 'Yeni Alınmış Lüks Beyaz Bir Arabayı Sürerken Yolunu Kaybetmek', category: 'nesneler' },
  { slug: 'buyuk-demir-kapiyi-tek-basina-iterek-acmak', title: 'Ağır ve Büyük Bir Demir Kapıyı Tek Başına İterek Açmayı Başarmak', category: 'nesneler' },
  { slug: 'eski-kitapliktan-kalin-dini-kitap-secip-okumak', title: 'Eski Bir Kitaplıktan Kalın, Değerli ve Dini Bir Kitap Seçip Okumak', category: 'nesneler' },
  { slug: 'parlak-keskin-bicakla-taze-ekmek-kesmek', title: 'Parlak ve Keskin Bir Bıçakla Sıcacık Taze Ekmeği Dilimlemek', category: 'nesneler' },
  { slug: 'altin-kolyenin-boynundan-kopup-yere-sacilmasi', title: 'Altın Kolyenin Boynundan Kopup Tanelerinin Yere Saçılması', category: 'nesneler' },
  { slug: 'penceredeki-beyaz-tulle-perdenin-ruzgarla-dalgalanmasi', title: 'Penceredeki Bembeyaz Tül Perdenin Tatlı Rüzgarla Dalgalanması', category: 'nesneler' },
  { slug: 'yeni-aldigin-kirmizi-ayakkabiyi-giyip-sokakta-yurumek', title: 'Yeni Aldığın Kırmızı Ayakkabıyı Giyip Sokakta Neşeyle Yürümek', category: 'nesneler' },
  { slug: 'kirilan-aynanin-parcalarini-ellerini-kesmeden-toplamak', title: 'Kırılan Bir Aynanın Parçalarını Ellerini Kesmeden Dikkatlice Toplamak', category: 'nesneler' },
  { slug: 'uzun-duzgun-merdivenden-catiya-cikmak', title: 'Uzun, Sağlam ve Düzgün Bir Merdivenden Evin Çatısına Çıkmak', category: 'nesneler' },
  { slug: 'eski-cuzdandan-degerli-evraklar-cikarmak', title: 'Eski Bir Cüzdandan Unutulmuş Değerli Kağıt Para ve Evraklar Çıkarmak', category: 'nesneler' },
  { slug: 'elindeki-sari-anahtarla-kilitli-sandigi-acmak', title: 'Elindeki Sarı ve Parlak Anahtarla Kilitli Ahşap Sandığı Açmak', category: 'nesneler' },
  { slug: 'suyun-uzerinde-yuzen-kucuk-kagittan-gemi-gormek', title: 'Suyun Üzerinde Sakince Yüzen Küçük Beyaz Kağıttan Gemi Görmek', category: 'nesneler' },
  { slug: 'guzel-kokulu-pembe-gul-demeti-hediye-almak', title: 'Güzel Kokulu ve Taze Pembe Gül Demeti Hediye Almak', category: 'nesneler' },
  { slug: 'parlak-gumus-yuzugu-parmagina-takip-begenmek', title: 'Parlak Gümüş Bir Yüzüğü Parmağına Takıp Çok Beğenmek', category: 'nesneler' },
  { slug: 'yeni-temiz-yatak-carsaflarini-serip-duzenlemek', title: 'Yeni, Mis Kokulu ve Temiz Yatak Çarşaflarını Serip Düzenlemek', category: 'nesneler' },
  { slug: 'masanin-uzerinde-duran-berrak-su-surahisi-gormek', title: 'Masanın Üzerinde Duran Dolu, Soğuk ve Berrak Su Sürahisi Görmek', category: 'nesneler' },
  { slug: 'yagmurda-acilan-siyah-semsiyenin-ters-donmesi', title: 'Şiddetli Yağmurda Açılan Büyük Siyah Şemsiyenin Rüzgardan Ters Dönmesi', category: 'nesneler' },
  { slug: 'eski-halinin-uzerindeki-desenlerin-canlanmasi', title: 'Eski Bir Halının Üzerindeki Renkli Desenlerin Canlandığını Görmek', category: 'nesneler' },
  { slug: 'parlak-keskin-makasla-beyaz-kumas-kesmek', title: 'Parlak ve Keskin Bir Makasla Düzgünce Beyaz Bir Kumaş Kesmek', category: 'nesneler' },
  { slug: 'yeni-alinmis-telefonun-calmasi-ve-guzel-haber-almak', title: 'Yeni Alınmış Akıllı Telefonun Çalması ve Ucunda Güzel Bir Haber Almak', category: 'nesneler' },
  { slug: 'masanin-uzerindeki-mumun-parlak-yanmasi', title: 'Masanın Üzerindeki Beyaz Mumun Sakin, Uzun ve Parlak Yanması', category: 'nesneler' },
  { slug: 'elinde-agir-dolu-pazar-cantalari-tasimak', title: 'Elinde Ağır, Bereketli ve Dolu Pazar Çantaları ile Eve Gitmek', category: 'nesneler' },
  { slug: 'altin-bilezigin-kolunda-parlayip-dikkat-cekmesi', title: 'Altın Bileziğin Kolunda Işıl Işıl Parlayıp Herkesin Dikkatini Çekmesi', category: 'nesneler' },
  { slug: 'eski-antika-saatin-duvarda-calmasi', title: 'Eski ve Antika Bir Duvar Saatinin Tam On İkide Gürültüyle Çalması', category: 'nesneler' },
  { slug: 'yeni-yumusacik-beyaz-havluyla-yuzunu-kurulamak', title: 'Yeni ve Yumuşacık Beyaz Bir Havluyla Yüzünü Soğuk Suden Sonra Kurulamak', category: 'nesneler' },
  { slug: 'elindeki-kalemle-beyaz-kagida-sozlesme-yazmak', title: 'Elindeki Dolma Kalemle Temiz Beyaz Bir Kağıda Önemli Sözleşme Yazmak', category: 'nesneler' },
  { slug: 'bahcede-duran-eski-bankta-oturup-dinlenmek', title: 'Bahçede Duran Eski Ahşap Bir Bankta Oturup Huzurla Dinlenmek', category: 'nesneler' },
  { slug: 'cebinden-cikardigi-bozuk-paralari-cocuklara-dagitmak', title: 'Cebinden Çıkardığı Parlak Bozuk Paraları Sevinçli Çocuklara Dağıtmak', category: 'nesneler' },
  { slug: 'kirik-cam-bardaktan-temiz-su-icmeyi-basarmak', title: 'Kırık Bir Cam Bardağın İçinden Dudaklarını Kesmeden Temiz Su İçmek', category: 'nesneler' }
];

const batch08 = [
  { slug: 'berrak-denizde-yunus-baliklariyla-yuzmek', title: 'Berrak ve Dalgasız Bir Denizde Yunus Balıklarıyla Birlikte Yüzmek', category: 'hayvanlar' },
  { slug: 'balkona-konan-renkli-muhabbet-kusunu-beslemek', title: 'Evinin Balkonuna Konan Renkli ve Evcil Bir Muhabbet Kuşunu Beslemek', category: 'hayvanlar' },
  { slug: 'yilanin-evden-sessizce-cikip-gittigini-gormek', title: 'Büyük Bir Yılanın Evinden Hiç Zarar Vermeden Sessizce Çıkıp Gittigini Görmek', category: 'hayvanlar' },
  { slug: 'kar-yagarken-somineli-ahsap-evde-oturmak', title: 'Dışarıda Lapa Lapa Kar Yağarken Sıcak Şömineli Ahşap Bir Evde Oturmak', category: 'mekanlar' },
  { slug: 'ormanda-siril-siril-akan-selaleden-su-icmek', title: 'Yeşil Bir Ormanın İçinde Şırıl Şırıl Akan Temiz Bir Şelaleden Su İçmek', category: 'doga' },
  { slug: 'heybetli-dagin-zirvesine-tirmanip-sehri-izlemek', title: 'Büyük ve Heybetli Bir Dağın Zirvesine Tırmanıp Aşağıdaki Şehri İzlemek', category: 'doga' },
  { slug: 'terk-edilmis-eski-sarayda-gizli-oda-bulmak', title: 'Terk Edilmiş Eski ve Büyük Bir Sarayda Aydınlık Gizli Bir Oda Keşfetmek', category: 'mekanlar' },
  { slug: 'beyaz-at-uzerinde-yemyesil-ovada-kosmak', title: 'Beyaz ve Heybetli Bir Atın Üzerinde Yemyeşil Bir Ovada Dört Nala Koşmak', category: 'hayvanlar' },
  { slug: 'bahcedeki-meyve-agaclarinin-aniden-cicek-acmasi', title: 'Bahçedeki Meyve Ağaçlarının Kış Ortasında Aniden Pembe Çiçek Açması', category: 'doga' },
  { slug: 'kalabalik-ve-aydinlik-cami-avlusunda-gokkusagi-gormek', title: 'Kalabalık ve Aydınlık Bir Cami Avlusunda Gökyüzünde Gökkuşağı Görmek', category: 'mekanlar' },
  { slug: 'evcil-kopegin-seni-tehlikeden-koruyup-havlamasi', title: 'Evcil ve Sadık Bir Köpeğin Seni Yaklaşan Bir Tehlikeden Koruyup Havlaması', category: 'hayvanlar' },
  { slug: 'temiz-sakin-gol-kenarinda-balik-tutmak', title: 'Temiz, Berrak ve Sakin Bir Gölün Kenarında Oltayla Büyük Balık Tutmak', category: 'doga' },
  { slug: 'gokyuzunun-aniden-masmavi-gunesli-olmasi', title: 'Bulutlu Gökyüzünün Aniden Aralanıp Masmavi ve Sıcak Güneşli Olması', category: 'doga' },
  { slug: 'balkonuna-yuva-yapan-guvercinin-yumurtladigini-gormek', title: 'Balkonuna Yuva Yapan Beyaz Bir Güvercinin Yumurtladığını ve Kuluçkaya Yattığını Görmek', category: 'hayvanlar' },
  { slug: 'yemyesil-cimenlerin-uzerinde-yalinayak-kosmak', title: 'Yemyeşil ve Nemli Çimenlerin Üzerinde Yalınayak Özgürce Koşmak', category: 'doga' },
  { slug: 'deniz-kiyisinda-parlak-renkli-deniz-kabuklari-toplamak', title: 'Deniz Kıyısında Kumsalda Parlak ve Renkli Deniz Kabukları Toplamak', category: 'doga' },
  { slug: 'karanlik-magaranin-sonunda-parlayan-gunes-isigi-gormek', title: 'Karanlık Bir Mağaranın Sonunda Dışarıdan Sızan Parlak Güneş Işığı Görmek', category: 'mekanlar' },
  { slug: 'evinin-bahcesinde-berrak-su-kuyusu-kazmak', title: 'Kendi Evinin Bahçesinde Temiz ve Berrak Su Çıkan Bir Kuyu Kazmak', category: 'mekanlar' },
  { slug: 'sari-parlak-gunes-altinda-bugday-tarlasi-gormek', title: 'Sarı ve Parlak Güneş Altında Uçsuz Bucaksız Olgun Buğday Tarlası Görmek', category: 'doga' },
  { slug: 'kirmizi-gul-bahcesinde-dikensiz-gulleri-koklamak', title: 'Kırmızı ve Büyüleyici Bir Gül Bahçesinde Dikensiz Gülleri Koklamak', category: 'doga' },
  { slug: 'beyaz-kelebegin-gelip-elinin-uzerine-konmasi', title: 'Bembeyaz ve Zarif Bir Kelebeğin Uçarak Gelip Elinin Üzerine Konması', category: 'hayvanlar' },
  { slug: 'buyuk-geminin-sakin-mavi-limana-yanasmasi', title: 'Büyük ve Işıl Işıl Bir Geminin Sakin, Mavi Bir Limana Yanaşması', category: 'mekanlar' },
  { slug: 'evindeki-ciceklerin-sulaninca-aniden-canlanmasi', title: 'Evindeki Solmuş Saksı Çiçeklerinin Sulanınca Aniden Büyüyüp Canlanması', category: 'doga' },
  { slug: 'ormanda-koyun-surusunun-huzurla-otladigini-gormek', title: 'Yeşil Bir Orman Kıyısında Koyun Sürüsünün Huzurla Otladığını Görmek', category: 'hayvanlar' },
  { slug: 'gokyuzunde-dolunayin-cok-parlak-gorunmesi', title: 'Gökyüzünde Dolunayın Her Zamankinden Çok Parlak, Büyük ve Yakından Görünmesi', category: 'doga' },
  { slug: 'buyuk-agacin-golgesinde-ailece-piknik-yapmak', title: 'Ulu ve Büyük Bir Çınar Ağacının Gölgesinde Ailece Keyifli Piknik Yapmak', category: 'doga' },
  { slug: 'yagmur-sonrasi-cikan-toprak-kokusunu-icmek', title: 'Yağmur Sonrası Açığa Çıkan Mis Gibi Toprak Kokusunu Derinlemesine İçine Çekmek', category: 'doga' },
  { slug: 'temiz-beyaz-karlar-uzerinde-yurumek', title: 'Temiz, Dokunulmamış Beyaz Karlar Üzerinde Ayak İzi Bırakarak Yürümek', category: 'doga' },
  { slug: 'balkondan-bakarken-asagida-cozulen-nehir-gormek', title: 'Balkondan Bakarken Aşağıda Buzları Çözülen Berrak ve Hızlı Bir Nehir Görmek', category: 'mekanlar' },
  { slug: 'kucuk-kedi-yavrusunun-soguktan-kurtarilip-uyumasi', title: 'Küçük Bir Kedi Yavrusunun Soğuktan Kurtarılıp Evdeki Sıcak Işıkta Uyuması', category: 'hayvanlar' },
  { slug: 'buyuk-tarihi-kutuphanede-sessizce-kitap-incelemek', title: 'Büyük, Ahşap ve Tarihi Bir Kütüphanede Sessizce Değerli Kitapları İncelemek', category: 'mekanlar' },
  { slug: 'denizin-ortasinda-yemyesil-ada-kesfetmek', title: 'Denizin Tam Ortasında Küçük, Yemyeşil ve Huzurlu Bir Ada Keşfetmek', category: 'doga' },
  { slug: 'yildizli-yaz-gecesinde-balkonda-gokyuzunu-izlemek', title: 'Yıldızlı, Berrak Bir Yaz Gecesinde Balkonda Uzanıp Gökyüzünü İzlemek', category: 'doga' }
];

const batch09 = [
  { slug: 'kabede-cemaatle-birlikte-namaz-kilip-dua-etmek', title: "Kabe'de Kalabalık Cemaatle Birlikte Namaz Kılıp Gözyaşıyla Dua Etmek", category: 'soyut-kavramlar' },
  { slug: 'kuran-okuyan-birini-husu-icinde-dinleyip-aglamak', title: "Kur'an-ı Kerim Okuyan Birini Huşu İçinde Dinlemek ve Huzurdan Ağlamak", category: 'soyut-kavramlar' },
  { slug: 'ramazan-ayinda-kalabalik-iftar-sofrasi-kurmak', title: 'Ramazan Ayında Kalabalık Bir İftar Sofrası Kurup Bereketle Misafir Ağırlamak', category: 'soyut-kavramlar' },
  { slug: 'gokyuzunden-nur-seklinde-parlak-isik-indigini-gormek', title: 'Gökyüzünden Nur Şeklinde Beyaz ve Parlak Bir Işığın Üzerine İndiğini Görmek', category: 'soyut-kavramlar' },
  { slug: 'mescidi-aksayi-ziyaret-edip-huzur-bulmak', title: "Mescid-i Aksa'yı Ziyaret Ettiğini ve Avlusunda Derin Bir Huzur Bulduğunu Görmek", category: 'soyut-kavramlar' },
  { slug: 'ruyada-peygamber-efendimizi-nur-icinde-gormek', title: 'Rüyada Peygamber Efendimiz (S.A.V)\'i Nur İçinde Görmek ve Elini Omzunda Hissetmek', category: 'soyut-kavramlar' },
  { slug: 'sabah-namazina-ezanla-uyandigini-gormek', title: 'Rüyada Sabah Namazına Ezanla Uyandığını ve Soğuk Suyla Abdest Aldığını Görmek', category: 'soyut-kavramlar' },
  { slug: 'vefat-eden-birinin-sana-cennetten-haber-vermesi', title: 'Vefat Eden Erdemli Birinin Sana Gülümseyerek Cennetten Güzel Haber Vermesi', category: 'soyut-kavramlar' },
  { slug: 'camide-imam-olup-cemaate-namaz-kildirmak', title: 'Büyük Bir Camide İmam Olup Kalabalık Cemaate Huzurla Namaz Kıldırdığını Görmek', category: 'soyut-kavramlar' },
  { slug: 'ellerini-semaya-acip-istedigi-duayi-ağlayarak-etmek', title: 'Ellerini Semaya Açıp Yıllardır İçtenlikle İstediği Duayı Ağlayarak Etmek', category: 'soyut-kavramlar' },
  { slug: 'beyaz-ihram-giyip-hac-vazifesini-yerine-getirmek', title: 'Bembeyaz İhram Giyip Kutsal Topraklarda Hac Vazifesini Yerine Getirdiğini Görmek', category: 'soyut-kavramlar' },
  { slug: 'melek-gorunumunde-beyaz-giysili-biriyle-konusmak', title: 'Melek Görünümünde Beyaz Giysili Aydınlık Biriyle Huzur İçinde Konuşmak', category: 'soyut-kavramlar' },
  { slug: 'kendi-evinde-mevlit-okutulup-serbet-dagitilmasi', title: "Kendi Evinde Kalabalığa Kur'an ve Mevlit Okutulup Gül Şerbeti Dağıtıldığını Görmek", category: 'soyut-kavramlar' },
  { slug: 'ezan-sesini-cok-yakin-ve-huzurlu-dinlemek', title: 'Ezan Sesini Çok Yakından, Berrak ve Huzurlu Bir Şekilde Dinlemek', category: 'soyut-kavramlar' },
  { slug: 'ruyada-zemzem-suyu-icip-hastaliktan-sifa-bulmak', title: 'Rüyada Kutsal Zemzem Suyu İçip Tüm Derdinden ve Hastalığından Şifa Bulmak', category: 'soyut-kavramlar' },
  { slug: 'cami-avlusunda-akgerdanli-guvercinleri-beslemek', title: 'Cami Avlusunda Akgerdanlı Bembeyaz Güvercinlere Avucundan Yem Vermek', category: 'soyut-kavramlar' },
  { slug: 'sadaka-ve-zekat-verirken-icinin-ferahlamasi', title: 'İhtiyaç Sahibine Sadaka ve Zekat Verirken İçinin Huzurla Ferahladığını Hissetmek', category: 'soyut-kavramlar' },
  { slug: 'olmus-babasinin-kendisine-bana-dua-et-dedigini-duymak', title: 'Ölmüş Babasının Rüyasında Kendisine Seslenerek "Bana Dua Et" Dediğini Duymak', category: 'soyut-kavramlar' },
  { slug: 'kutsal-topraklardan-getirilen-hediye-seccade-almak', title: 'Kutsal Topraklardan Getirilen Mis Kokulu Hediye Tesbih ve Seccade Almak', category: 'soyut-kavramlar' },
  { slug: 'kadir-gecesinde-camide-sabaha-kadar-ibadet-etmek', title: "Kadir Gecesi'nde Aydınlık Bir Camide Sabaha Kadar Huzurla İbadet Ettiğini Görmek", category: 'soyut-kavramlar' },
  { slug: 'berrak-su-kenarinda-oturup-zikir-cekmek', title: 'Berrak Bir Akarsu Kenarında Oturup Sessizce Tesbihat ve Zikir Çekmek', category: 'soyut-kavramlar' },
  { slug: 'ruyada-cebrail-aleyhisselami-nur-icinde-gormek', title: "Rüyada Cebrail Aleyhisselam'ı Nur İçinde Heybetli ve Müjdeli Bir Şekilde Görmek", category: 'soyut-kavramlar' },
  { slug: 'kalabalik-dua-meclisinde-amin-diye-haykirmak', title: 'Kalabalık Bir Dua Meclisinde Herkesle Birlikte Yürekten "Amin" Diye Seslenmek', category: 'soyut-kavramlar' },
  { slug: 'ruyada-hizir-aleyhisselamla-karsilasip-elini-opmek', title: 'Rüyada Hızır Aleyhisselam Olduğu Söylenen Nurani Bir Zatla Karşılaşıp Elini Öpmek', category: 'soyut-kavramlar' },
  { slug: 'temiz-beyaz-seccade-uzerinde-secdeye-kapanmak', title: 'Temiz, Mis Kokulu Beyaz Bir Seccade Üzerinde Gözyaşlarıyla Secdeye Kapanmak', category: 'soyut-kavramlar' },
  { slug: 'ruyada-kibleyi-arayip-dogru-yonu-bulmak', title: 'Rüyada Namaz Kılmak İçin Kıbleyi Arayıp Sonunda Doğru Yönü Huzurla Bulmak', category: 'soyut-kavramlar' },
  { slug: 'dini-kitapta-kendi-adinin-yazildigini-gormek', title: 'Kadim Dini Bir Kitapta Kendi Adının Altın Harflerle Yazıldığını Görmek', category: 'soyut-kavramlar' },
  { slug: 'gokyuzunde-arapca-allah-lafzinin-parladigini-gormek', title: 'Gece Gökyüzünde Yıldızların Birleşerek Arapça "Allah" Lafzını Oluşturduğunu Görmek', category: 'soyut-kavramlar' },
  { slug: 'vefat-eden-annenin-basina-beyaz-tulbent-ortmesi', title: 'Vefat Eden Annenin Rüyasında Senin Başına Bembeyaz İpek Bir Tülbent Örtmesi', category: 'soyut-kavramlar' },
  { slug: 'camiden-cikarken-guzel-kokulu-buhur-koklamak', title: 'Camiden Huzurla Çıkarken Yayılan Güzel Kokulu Buhur ve Gülsuyu Koklamak', category: 'soyut-kavramlar' },
  { slug: 'ruyada-sirat-koprusunden-kolayca-gecmek', title: 'Rüyada Sırat Köprüsü Olarak Bilinen Yerden Kolayca, Aydınlık ve Nurla Geçtiğini Görmek', category: 'soyut-kavramlar' },
  { slug: 'ruyada-kevser-havuzunun-basinda-su-icmek', title: 'Rüyada Kevser Havuzu Olduğu Söylenen Berrak ve Güzel Kokulu Kaynaktan Su İçmek', category: 'soyut-kavramlar' },
  { slug: 'ruyada-bayram-sabahi-ailece-bayramlasmak', title: 'Rüyada Mutlu Bir Bayram Sabahı Tüm Aile Büyükleriyle Bayramlaşıp Helalleşmek', category: 'soyut-kavramlar' }
];

function writeBatch(batchName, items) {
  const symbols = items.map(item => generateSymbolContent(item.slug, item.title, item.category));
  const filePath = path.join(__dirname, '..', 'content', 'symbols', batchName);
  fs.writeFileSync(filePath, JSON.stringify(symbols, null, 2), 'utf8');
  console.log(`Generated ${batchName} with ${symbols.length} symbols.`);
}

writeBatch('complex-symbols-2026-batch-05.json', batch05);
writeBatch('complex-symbols-2026-batch-06.json', batch06);
writeBatch('complex-symbols-2026-batch-07.json', batch07);
writeBatch('complex-symbols-2026-batch-08.json', batch08);
writeBatch('complex-symbols-2026-batch-09.json', batch09);

console.log('All 5 new batches successfully generated!');
