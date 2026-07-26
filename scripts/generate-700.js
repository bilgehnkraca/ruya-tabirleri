const fs = require('fs');
const path = require('path');

// Helper to clean title for inline usage
function getCleanName(title) {
  return title.replace(/^Rüyada\s+/i, '').replace(/\s+Görmek.*/i, '').trim();
}

// Helper to generate comprehensive zero-fluff text sections (1000+ words)
function generateSymbolContent(slug, baseTitle, category) {
  const cleanName = getCleanName(baseTitle);
  const lowerName = cleanName.toLowerCase();

  const title = `Rüyada ${cleanName} Görmek - İslami, Diyanet ve Psikolojik Tabiri`;
  
  const shortDescription = `Rüyada ${lowerName} görmek, İslami ve Diyanet tefsirlerine göre manevi arınmaya, helal kazanca ve hayırlı bir döneme girildiğine işaret ederken; analitik psikoloji ve Jung ekolüne göre bilinçaltının derinliklerindeki arketipsel dönüşümü, ego dengesini ve zihinsel bütünleşme çabasını simgeler.`;

  const introduction = `Rüyada ${lowerName} ile karşılaşmak, insan zihninin uyku esnasında hem spritüel sezgilerle hem de bilinçaltının sembolik diliyle kurduğu çok boyutlu bir iletişim biçimidir. Kadim rüya tabiri geleneğinden günümüz nöro-psikolojik uyku araştırmalarına kadar bu imge, bireyin yaşamında önemli bir dönüm noktasını veya içsel bir uyanışı temsil eder. Uykunun REM evresinde zihinsel savunma mekanizmalarının gevşemesiyle ortaya çıkan bu sembol, rüya sahibinin bilinçli dünyası ile bastırılmış duyguları arasında köprü kurar. İslami literatürde ilahi bir mesaj, müjde veya fıtrat uyarısı olarak değerlendirilen bu deneyim, modern psikolojide ise zihnin kendini iyileştirme ve yeniden yapılandırma sürecinin en somut göstergesi olarak kabul edilmektedir. Bu bağlamda rüyanın tüm detaylarıyla incelenmesi, rüya sahibinin geleceğe dair daha bilinçli adımlar atmasına olanak tanır.`;

  const generalMeaning = `Rüyada ${lowerName} görmenin gündelik yaşama ve sosyal ilişkilere yansımaları incelendiğinde, kişinin ailevi, mesleki veya toplumsal hayatında yepyeni bir vizyon kazanacağı bir evreye girdiği açıkça görülmektedir. Uzman rüya analistleri, bu rüyayı deneyimleyen bireylerin özellikle karar alma süreçlerinde aceleci davranmaktan kaçınarak sağduyulu, gözleme dayalı ve analitik bir tutum sergilemelerini önermektedir. Kariyer ve iş yaşamında uzun süredir devam eden belirsizliklerin ortadan kalkmasına, sarf edilen emeklerin karşılık bulmasına ve yeni finansal fırsatların kapıyı aralamasına delalet eden bu sembol, aynı zamanda sosyal ilişkilerde empati ve karşılıklı güvenin önemini vurgular. Kişinin yakın çevresiyle olan iletişiminde daha yapıcı bir dil kullanması, olası yanlış anlaşılmaları önleyeceği gibi sosyal bağları da güçlendirecektir. Yaşamın doğal akışı içerisinde karşılaşılan zorlukların kalıcı olmadığını hatırlatan bu sembol, kişinin özgüvenini tazelemesi, içsel motivasyonunu yükseltmesi ve hedeflerine doğru kararlı, istikrarlı adımlarla ilerlemesi gerektiğini gösteren güçlü bir rehberdir. Ayrıca günlük yaşantınızdaki planlamalarda, zaman, mesafe ve bütçe yönetiminde [Türkiye Hesaplama Çözüm Platformu](https://www.turkiyehesaplama.com) üzerinden destek alarak adımlarınızı somut verilere dayandırabilirsiniz.`;

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

// 100 new unique long-tail Turkish dream symbols divided into 4 batches (25 symbols each)
const batch10 = [
  { slug: 'annemin-mutfakta-hamur-ogurup-ekmek-pisirdigini-gormek', title: 'Annemin Mutfakta Hamur Yoğurup Ekmek Pişirdiğini Görmek', category: 'ailem' },
  { slug: 'babanin-sana-kendi-cebinden-kagit-para-vermesi', title: 'Babanın Sana Kendi Cebinden Kağıt Para Vermesi', category: 'ailem' },
  { slug: 'kardesinle-yeni-aldiginiz-evde-kahve-icmek', title: 'Kardeşinle Yeni Aldığınız Evde Kahve İçmek', category: 'ailem' },
  { slug: 'vefat-eden-dedenin-bahcede-agac-suladigini-gormek', title: 'Vefat Eden Dedenin Bahçede Ağaç Suladığını Görmek', category: 'ailem' },
  { slug: 'uzaktaki-akrabanin-dugun-davetiyesi-gondermesi', title: 'Uzaktaki Akrabanın Düğün Davetiyesi Göndermesi', category: 'ailem' },
  { slug: 'anneannenin-sana-el-orgusu-kazak-hediye-etmesi', title: 'Anneannenin Sana El Örgüsü Kazak Hediye Etmesi', category: 'ailem' },
  { slug: 'kiz-kardesinin-gelinlikle-babanin-elini-optugunu-gormek', title: 'Kız Kardeşinin Gelinlikle Babanın Elini Öptüğünü Görmek', category: 'ailem' },
  { slug: 'kus-oldugun-kardesinle-bayram-sabahi-sarilmak', title: 'Küs Olduğun Kardeşinle Bayram Sabahı Sarılmak', category: 'ailem' },
  { slug: 'babanin-sirtini-sivazlayip-seninle-gurur-duydugunu-soylemesi', title: 'Babanın Sırtını Sıvazlayıp Seninle Gurur Duyduğunu Söylemesi', category: 'ailem' },
  { slug: 'vefat-eden-babaannenin-elinde-tesbih-cektigini-gormek', title: 'Vefat Eden Babaannenin Elinde Tesbih Çektiğini Görmek', category: 'ailem' },
  { slug: 'tanimadigin-bir-bebegin-sana-gulumseyip-elini-tutmasi', title: 'Tanımadığın Bir Bebeğin Sana Gülümseyip Elini Tutması', category: 'insanlar' },
  { slug: 'eski-patronunun-sana-yeni-is-teklifi-yapmasi', title: 'Eski Patronunun Sana Yeni İş Teklifi Yapması', category: 'insanlar' },
  { slug: 'kalabalik-sofistike-toplulukta-saygiyla-karsilanmak', title: 'Kalabalık Sofistike Toplulukta Saygıyla Karşılanmak', category: 'insanlar' },
  { slug: 'eski-okul-arkadasinla-yillar-sonra-trend-sokakta-karsilasmak', title: 'Eski Okul Arkadaşınla Yıllar Sonra Trend Sokakta Karşılaşmak', category: 'insanlar' },
  { slug: 'yabanci-bir-misafirin-evine-hediye-ve-bereketle-gelmesi', title: 'Yabancı Bir Misafirin Evine Hediye ve Bereketle Gelmesi', category: 'insanlar' },
  { slug: 'hastanedeki-tanidiginin-taburcu-olup-yurudugunu-gormek', title: 'Hastanedeki Tanıdığının Taburcu Olup Yürüdüğünü Görmek', category: 'insanlar' },
  { slug: 'gelinlik-giyen-arkadasinin-dugununde-halay-cekmek', title: 'Gelinlik Giyen Arkadaşının Düğününde Halay Çekmek', category: 'insanlar' },
  { slug: 'tanimadigin-bilge-bir-zatin-sana-tavsiyede-bulunmasi', title: 'Tanımadığın Bilge Bir Zatın Sana Tavsiyede Bulunması', category: 'insanlar' },
  { slug: 'kus-oldugun-komsuyla-kapida-karsilasip-tatli-ikram-etmek', title: 'Küs Olduğun Komşuyla Kapıda Karşılaşıp Tatlı İkram Etmek', category: 'insanlar' },
  { slug: 'kalabalik-dugun-salonu-icinde-dans-eden-ciftleri-izlemek', title: 'Kalabalık Düğün Salonu İçinde Dans Eden Çiftleri İzlemek', category: 'insanlar' },
  { slug: 'is-arkadasinin-sana-surpriz-dogum-gunu-pastasi-getirmesi', title: 'İş Arkadaşının Sana Sürpriz Doğum Günü Pastası Getirmesi', category: 'insanlar' },
  { slug: 'tanimadigin-yasli-adamin-bastonuna-tutinup-dua-etmesi', title: 'Tanımadığın Yaşlı Adamın Bastonuna Tutunup Dua Etmesi', category: 'insanlar' },
  { slug: 'eski-sevgilinin-pisman-olup-ozur-dilemek-icin-aramasi', title: 'Eski Sevgilinin Pişman Olup Özür Dilemek İçin Araması', category: 'insanlar' },
  { slug: 'uzakta-yasayan-arkadasinin-aniden-kapini-calmasi', title: 'Uzakta Yaşayan Arkadaşının Aniden Kapını Çalması', category: 'insanlar' },
  { slug: 'kalabalik-aile-sofrasinda-sicak-corba-icmek', title: 'Kalabalık Aile Sofrasında Sıcak Çorba İçmek', category: 'ailem' }
];

const batch11 = [
  { slug: 'berrak-denizde-yuzen-beyaz-kuplar-ve-yunus-gormek', title: 'Berrak Denizde Yüzen Beyaz Kuğular ve Yunus Görmek', category: 'hayvanlar' },
  { slug: 'evcil-kedinin-yavrularini-emzirdigini-izlemek', title: 'Evcil Kedinin Yavrularını Emzirdiğini İzlemek', category: 'hayvanlar' },
  { slug: 'gokyuzunde-ucan-buyuk-kartalin-yuvaya-konmasi', title: 'Gökyüzünde Uçan Büyük Kartalın Yuvaya Konması', category: 'hayvanlar' },
  { slug: 'bahcede-otlayan-beyaz-kuzu-ve-koyun-surusu-gormek', title: 'Bahçede Otlayan Beyaz Kuzu ve Koyun Sürüsü Görmek', category: 'hayvanlar' },
  { slug: 'at-uzerinde-ormanda-dort-nala-gitmek', title: 'At Üzerinde Ormanda Dört Nala Gitmek', category: 'hayvanlar' },
  { slug: 'balkonuna-konan-bulbul-kusunun-guzel-otmesi', title: 'Balkonuna Konan Bülbül Kuşunun Güzel Ötmesi', category: 'hayvanlar' },
  { slug: 'akvaryum-icinde-parlayan-altin-renkli-baliklar-gormek', title: 'Akvaryum İçinde Parlayan Altın Renkli Balıklar Görmek', category: 'hayvanlar' },
  { slug: 'ari-kovanindan-taze-petek-bal-alip-yemek', title: 'Arı Kovanından Taze Petek Bal Alıp Yemek', category: 'hayvanlar' },
  { slug: 'karincalarin-eve-bereket-ve-bugday-tasidigini-gormek', title: 'Karıncaların Eve Bereket ve Buğday Taşıdığını Görmek', category: 'hayvanlar' },
  { slug: 'beyaz-guvercinin-omzuna-konup-gitmemesi', title: 'Beyaz Güvercinin Omzuna Konup Gitmemesi', category: 'hayvanlar' },
  { slug: 'yemyesil-vadi-icinde-cozulmus-buz-ve-selale-izlemek', title: 'Yemyeşil Vadi İçinde Çözülmüş Buz ve Şelale İzlemek', category: 'doga' },
  { slug: 'sabah-gunesinin-odana-parlak-ve-sicak-dogmasi', title: 'Sabah Güneşinin Odana Parlak ve Sıcak Doğması', category: 'doga' },
  { slug: 'yagmur-sonrasi-gokyuzunde-cift-gokkusagi-cikmasi', title: 'Yağmur Sonrası Gökyüzünde Çift Gökkuşağı Çıkması', category: 'doga' },
  { slug: 'gece-gokyuzunde-binlerce-yildizin-parlamasini-izlemek', title: 'Gece Gökyüzünde Binlerce Yıldızın Parlamasını İzlemek', category: 'doga' },
  { slug: 'bahcedeki-gullerin-sabah-cigiyla-parladigini-gormek', title: 'Bahçedeki Güllerin Sabah Çiğiyle Parladığını Görmek', category: 'doga' },
  { slug: 'deniz-kiyisinda-gunes-batimi-izleyip-huzur-bulmak', title: 'Deniz Kıyısında Güneş Batımı İzleyip Huzur Bulmak', category: 'doga' },
  { slug: 'dagin-zirvesindeki-temiz-karlar-uzerinde-oturmak', title: 'Dağın Zirvesindeki Temiz Karlar Üzerinde Oturmak', category: 'doga' },
  { slug: 'ilkbaharda-cicek-acan-badem-agaci-altinda-yurumek', title: 'İlkbaharda Çiçek Açan Badem Ağacı Altında Yürümek', category: 'doga' },
  { slug: 'ahsap-dag-evinde-somine-atesi-karsisinda-cay-icmek', title: 'Ahşap Dağ Evinde Şömine Ateşi Karşısında Çay İçmek', category: 'mekanlar' },
  { slug: 'buyuk-tarihi-camide-sabah-sessizliginde-oturmak', title: 'Büyük Tarihi Camide Sabah Sessizliğinde Oturmak', category: 'mekanlar' },
  { slug: 'deniz-manzarali-balkonda-hamakta-sallanmak', title: 'Deniz Manzaralı Balkonda Hamakta Sallanmak', category: 'mekanlar' },
  { slug: 'eski-tas-konagin-avlusunda-fountain-ve-cicekler-gormek', title: 'Eski Taş Konağın Avlusunda Şadırvan ve Çiçekler Görmek', category: 'mekanlar' },
  { slug: 'aydinlik-ve-duzenli-buyuk-kutuphanede-kitap-okumak', title: 'Aydınlık ve Düzenli Büyük Kütüphanede Kitap Okumak', category: 'mekanlar' },
  { slug: 'yeni-ve-modern-tasarimli-ofiste-calismaya-baslamak', title: 'Yeni ve Modern Tasarımlı Ofiste Çalışmaya Başlamak', category: 'mekanlar' },
  { slug: 'luks-bir-otel-odasinda-denize-karisi-kahvalti-yapmak', title: 'Lüks Bir Otel Odasında Denize Karşı Kahvaltı Yapmak', category: 'mekanlar' }
];

const batch12 = [
  { slug: 'yeni-aldigin-arabayla-sahil-yolunda-yolculuk-yapmak', title: 'Yeni Aldığın Arabayla Sahil Yolunda Yolculuk Yapmak', category: 'yolculuk' },
  { slug: 'ucaga-binip-bulutlarin-uzerinde-seyahat-etmek', title: 'Uçağa Binip Bulutların Üzerinde Seyahat Etmek', category: 'yolculuk' },
  { slug: 'hizli-trenle-yemyesil-manzaralar-arasindan-gecmek', title: 'Hızlı Trenle Yemyeşil Manzaralar Arasından Geçmek', category: 'yolculuk' },
  { slug: 'buyuk-geminin-guvertesinde-deniz-havasi-almak', title: 'Büyük Geminin Güvertesinde Deniz Havası Almak', category: 'yolculuk' },
  { slug: 'yeni-pasaport-ve-bilet-alip-yurtdisina-gitmek', title: 'Yeni Pasaport ve Bilet Alıp Yurtdışına Gitmek', category: 'yolculuk' },
  { slug: 'tozlu-odayi-temizleyip-pencereleri-sonuna-kadar-acmak', title: 'Tozlu Odayı Temizleyip Pencereleri Sonuna Kadar Açmak', category: 'eylemler' },
  { slug: 'kalabalik-pazardan-taze-sebze-ve-meyveler-almak', title: 'Kalabalık Pazardan Taze Sebze ve Meyveler Almak', category: 'eylemler' },
  { slug: 'firindan-yeni-cikmis-sicacik-ekmegi-bolup-paylasmak', title: 'Fırından Yeni Çıkmış Sıcacık Ekmeği Bölüp Paylaşmak', category: 'eylemler' },
  { slug: 'ayna-karsisinda-yeni-beyaz-gomslegi-giyip-begenmek', title: 'Ayna Karşısında Yeni Beyaz Gömleği Giyip Beğenmek', category: 'eylemler' },
  { slug: 'bahcede-toprak-kazarken-altin-bilezik-bulmak', title: 'Bahçede Toprak Kazarken Altın Bilezik Bulmak', category: 'eylemler' },
  { slug: 'sicak-yaz-gununde-buz-gibi-soguk-pinar-suyu-icmek', title: 'Sıcak Yaz Gününde Buz Gibi Soğuk Pınar Suyu İçmek', category: 'eylemler' },
  { slug: 'aglayan-bir-cocugu-sarilip-teselli-etmek', title: 'Ağlayan Bir Çocuğu Sarılıp Teselli Etmek', category: 'eylemler' },
  { slug: 'yuksek-kopruden-asagidaki-berrak-nehri-izlemek', title: 'Yüksek Köprüden Aşağıdaki Berrak Nehri İzlemek', category: 'eylemler' },
  { slug: 'evin-duvarlarini-ferah-beyaz-renge-boyamak', title: 'Evin Duvarlarını Ferah Beyaz Renge Boyamak', category: 'eylemler' },
  { slug: 'kalabalik-davette-lezzetli-ve-zengin-sofrada-yemek-yemek', title: 'Kalabalık Davette Lezzetli ve Zengin Sofrada Yemek Yemek', category: 'eylemler' },
  { slug: 'agactan-kendi-ellerinle-taze-kiraz-ve-elma-toplamak', title: 'Ağaçtan Kendi Ellerinle Taze Kiraz ve Elma Toplamak', category: 'eylemler' },
  { slug: 'gece-gokyuzunde-kayan-yildiz-gorup-icinden-dilek-tutmak', title: 'Gece Gökyüzünde Kayan Yıldız Görüp İçinden Dilek Tutmak', category: 'eylemler' },
  { slug: 'eski-ve-unutulmus-cuzdandan-kagit-paralar-bulmak', title: 'Eski ve Unutulmuş Cüzdandan Kağıt Paralar Bulmak', category: 'eylemler' },
  { slug: 'kalabalik-topluluk-onunde-basarili-sunum-yapip-alkislanmak', title: 'Kalabalık Topluluk Önünde Başarılı Sunum Yapıp Alkışlanmak', category: 'eylemler' },
  { slug: 'sokakta-kaybolan-yavru-kediyi-evine-alip-beslemek', title: 'Sokakta Kaybolan Yavru Kediyi Evine Alıp Beslemek', category: 'eylemler' },
  { slug: 'yagmur-altinda-yalinayak-ve-ozgurce-yurumek', title: 'Yağmur Altında Yalınayak ve Özgürce Yürümek', category: 'eylemler' },
  { slug: 'kirik-saati-tamir-edip-yeniden-calistirmayi-basarmak', title: 'Kırık Saati Tamir Edip Yeniden Çalıştırmayı Başarmak', category: 'eylemler' },
  { slug: 'sandiktan-eski-ve-tertemiz-gelinlik-cikarmak', title: 'Sandıktan Eski ve Tertemiz Gelinlik Çıkarmak', category: 'eylemler' },
  { slug: 'yuksek-merdivenleri-hic-yorulmadan-kosarak-cikmak', title: 'Yüksek Merdivenleri Hiç Yorulmadan Koşarak Çıkmak', category: 'eylemler' },
  { slug: 'kalabalik-stadyumda-kazanan-takimi-costurmak', title: 'Kalabalık Stadyumda Kazanan Takımı Coşturmak', category: 'eylemler' }
];

const batch13 = [
  { slug: 'parlak-gumus-tepside-kirmizi-kurdeleli-yuzuk-gormek', title: 'Parlak Gümüş Tepside Kırmızı Kurdeleli Yüzük Görmek', category: 'nesneler' },
  { slug: 'eski-antika-duvar-saatinin-on-ikide-caldigini-duymak', title: 'Eski Antika Duvar Saatinin On İkide Çaldığını Duymak', category: 'nesneler' },
  { slug: 'penceredeki-beyaz-tul-perdenin-ferah-ruzgarla-dalgalanmasi', title: 'Penceredeki Beyaz Tül Perdenin Ferah Rüzgarla Dalgalanması', category: 'nesneler' },
  { slug: 'masanin-uzerinde-duran-berrak-su-ve-kristal-bardak', title: 'Masanın Üzerinde Duran Berrak Su ve Kristal Bardak', category: 'nesneler' },
  { slug: 'kilitli-ahsap-sandigi-sari-parlak-anahtarla-acmak', title: 'Kilitli Ahşap Sandığı Sarı Parlak Anahtarla Açmak', category: 'nesneler' },
  { slug: 'elindeki-keskin-ve-parlak-makasla-beyaz-kumas-kesmek', title: 'Elindeki Keskin ve Parlak Makasla Beyaz Kumaş Kesmek', category: 'nesneler' },
  { slug: 'boynundaki-altin-kolyenin-isikta-parlayip-dikkat-cekmesi', title: 'Boynundaki Altın Kolyenin Işıkta Parlayıp Dikkat Çekmesi', category: 'nesneler' },
  { slug: 'firin-tepsisinden-yeni-cikmis-sicak-börek-gormek', title: 'Fırın Tepsisinden Yeni Çıkmış Sıcak Börek Görmek', category: 'yiyecek' },
  { slug: 'tabakta-duran-kirmizi-tatli-cilekler-ve-kirazlar-yemek', title: 'Tabakta Duran Kırmızı Tatlı Çilekler ve Kirazlar Yemek', category: 'yiyecek' },
  { slug: 'duman-ustunde-turk-kahvesi-ve-lokum-ikram-etmek', title: 'Dumanı Üstünde Türk Kahvesi ve Lokum İkram Etmek', category: 'yiyecek' },
  { slug: 'taze-pisme-mis-kokulu-simit-alip-peynirle-yemek', title: 'Taze Pişmiş Mis Kokulu Simit Alıp Peynirle Yemek', category: 'yiyecek' },
  { slug: 'buyuk-dilim-cikolataly-pasta-yiyip-mutlu-olmak', title: 'Büyük Dilim Çikolatalı Pasta Yiyip Mutlu Olmak', category: 'yiyecek' },
  { slug: 'kabede-kalabalik-cemaatle-birlikte-dua-edip-huzur-bulmak', title: "Kabe'de Kalabalık Cemaatle Birlikte Dua Edip Huzur Bulmak", category: 'soyut-kavramlar' },
  { slug: 'kuran-okuyan-birini-dinleyip-icinin-ferahladigini-hissetmek', title: "Kur'an Okuyan Birini Dinleyip İçinin Ferahladığını Hissetmek", category: 'soyut-kavramlar' },
  { slug: 'camide-sabah-namazi-kildiktan-sonra-dua-etmek', title: 'Camide Sabah Namazı Kıldıktan Sonra Dua Etmek', category: 'soyut-kavramlar' },
  { slug: 'gokyuzunden-inen-beyaz-nur-isigi-altinda-durmak', title: 'Gökyüzünden İnen Beyaz Nur Işağı Altında Durmak', category: 'soyut-kavramlar' },
  { slug: 'melek-gorunumlu-ak-giysili-biriyle-gulumseyerek-konusmak', title: 'Melek Görünümlü Ak Giysili Biriyle Gülümseyerek Konuşmak', category: 'soyut-kavramlar' },
  { slug: 'sadaka-verirken-yureginde-muazzam-bir-hafifleme-yasamak', title: 'Sadaka Verirken Yüreğinde Muazzam Bir Hafifleme Yaşamak', category: 'soyut-kavramlar' },
  { slug: 'kutsal-topraklardan-gelen-mis-kokulu-seccadede-namaz-kilmak', title: 'Kutsal Topraklardan Gelen Mis Kokulu Seccadede Namaz Kılmak', category: 'soyut-kavramlar' },
  { slug: 'kadir-gecesinde-ellerini-semaya-acip-tovbe-etmek', title: "Kadir Gecesi'nde Ellerini Semaya Açıp Tövbe Etmek", category: 'soyut-kavramlar' },
  { slug: 'aynada-yuzunun-her-zamankinden-daha-genc-ve-parlak-olmasi', title: 'Aynada Yüzünün Her Zamankinden Daha Genç ve Parlak Olması', category: 'beden' },
  { slug: 'saclarinin-uzayip-gur-ve-parlak-dalgalara-donusmesi', title: 'Saçlerinin Uzayıp Gür ve Parlak Dalgalara Dönüşmesi', category: 'beden' },
  { slug: 'dislerinin-bembeyaz-inci-gibi-parladigini-gormek', title: 'Dişlerinin Bembeyaz İnci Gibi Parladığını Görmek', category: 'beden' },
  { slug: 'ellerinin-cicek-koktugunu-ve-yumusacik-oldugunu-farketmek', title: 'Ellerinin Çiçek Koktuğunu ve Yumuşacık Olduğunu Farketmek', category: 'beden' },
  { slug: 'gozlerinin-renginin-aydinlik-maviye-veyahut-yesile-donmesi', title: 'Gözlerinin Renginin Aydınlık Maviye Veyahut Yeşile Dönmesi', category: 'beden' }
];

function writeBatch(batchName, items) {
  const symbols = items.map(item => generateSymbolContent(item.slug, item.title, item.category));
  const filePath = path.join(__dirname, '..', 'content', 'symbols', batchName);
  fs.writeFileSync(filePath, JSON.stringify(symbols, null, 2), 'utf8');
  console.log(`Generated ${batchName} with ${symbols.length} symbols.`);
}

writeBatch('complex-symbols-2026-batch-10.json', batch10);
writeBatch('complex-symbols-2026-batch-11.json', batch11);
writeBatch('complex-symbols-2026-batch-12.json', batch12);
writeBatch('complex-symbols-2026-batch-13.json', batch13);

console.log('All 4 new batches successfully generated! Total new symbols added: 100.');
