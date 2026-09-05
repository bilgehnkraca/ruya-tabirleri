import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDailyContent } from '../../utils/dailyContent';
import AdBanner from '../../components/AdBanner';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';
import PartnerAd from '../../components/PartnerAd';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';
const { width } = Dimensions.get('window');

const prayerOrder = [
  { key: 'Fajr', name: 'İMSAK' },
  { key: 'Sunrise', name: 'GÜNEŞ' },
  { key: 'Dhuhr', name: 'ÖĞLE' },
  { key: 'Asr', name: 'İKİNDİ' },
  { key: 'Maghrib', name: 'AKŞAM' },
  { key: 'Isha', name: 'YATSI' }
];

export default function DashboardScreen() {
  const router = useRouter();
  
  useTabInterstitialAd();

  const daily = getDailyContent();
  const [timeLeft, setTimeLeft] = useState<string>('--:--:--');
  const [nextPrayerName, setNextPrayerName] = useState<string>('Hesaplanıyor...');
  const [locationName, setLocationName] = useState<string>('Konum Aranıyor...');
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  
  useEffect(() => {
    const checkOnboarding = async () => {
      const hasSeen = await AsyncStorage.getItem('@has_seen_onboarding');
      if (!hasSeen) {
        router.replace('/welcome');
      }
    };
    checkOnboarding();

    const initPrayerTimes = async () => {
      // FIX #8: AsyncStorage cache — aynı gün tekrar API çağrısı yapılmasın
      const today = new Date().toDateString();
      const CACHE_KEY = '@prayer_times_cache';
      try {
        const cached = await AsyncStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.date === today) {
            // Cache geçerli — API'ye gitme
            setLocationName(parsed.city || 'İstanbul');
            const { timingsToday, timingsTomorrow, lat, lon } = parsed;
            processTimings(timingsToday, timingsTomorrow);
            return;
          }
        }
      } catch (e) {
        console.warn('Cache okuma hatası:', e);
      }
      let lat = 41.0082;
      let lon = 28.9784;
      let city = 'İstanbul';

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        try {
          const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
          lat = loc.coords.latitude;
          lon = loc.coords.longitude;
          const geocode = await Location.reverseGeocodeAsync({ latitude: lat, longitude: lon });
          if (geocode.length > 0) {
            city = geocode[0].city || geocode[0].region || geocode[0].subregion || 'Bulunduğunuz Konum';
          }
        } catch (e) {
          console.log("Konum alınamadı, İstanbul kullanılacak.");
        }
      }
      setLocationName(city);

      try {
        const today = new Date().toDateString();
        const CACHE_KEY = '@prayer_times_cache';
        const todayStr = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = `${tomorrow.getDate()}-${tomorrow.getMonth() + 1}-${tomorrow.getFullYear()}`;

        const [resToday, resTomorrow] = await Promise.all([
          fetch(`https://api.aladhan.com/v1/timings/${todayStr}?latitude=${lat}&longitude=${lon}&method=13`),
          fetch(`https://api.aladhan.com/v1/timings/${tomorrowStr}?latitude=${lat}&longitude=${lon}&method=13`)
        ]);

        const dataToday = await resToday.json();
        const dataTomorrow = await resTomorrow.json();
        
        const timingsToday = dataToday.data.timings;
        const timingsTomorrow = dataTomorrow.data.timings;

        // Cache'e kaydet
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify({
          date: today,
          city,
          timingsToday,
          timingsTomorrow,
          lat,
          lon,
        }));

        processTimings(timingsToday, timingsTomorrow);

      } catch (error) {
        console.error("Vakitler çekilemedi:", error);
      }
    };

    // FIX #8: Vaktleri işle (hem cache hem canlı API için ortak fonksiyon)
    const processTimings = (timingsToday: Record<string, string>, timingsTomorrow: Record<string, string>) => {
      const now = new Date();
      let nextPName = '';
      let nextPTime = new Date();
      let found = false;

      for (const prayer of prayerOrder) {
        const timeStr = timingsToday[prayer.key];
        const [h, m] = timeStr.split(':').map(Number);
        const pDate = new Date();
        pDate.setHours(h, m, 0, 0);

        if (pDate.getTime() > now.getTime()) {
          nextPName = prayer.name;
          nextPTime = pDate;
          found = true;
          break;
        }
      }

      if (!found) {
        const fajrStr = timingsTomorrow['Fajr'];
        const [h, m] = fajrStr.split(':').map(Number);
        nextPTime = new Date();
        nextPTime.setDate(nextPTime.getDate() + 1);
        nextPTime.setHours(h, m, 0, 0);
        nextPName = 'İMSAK';
      }

      setNextPrayerName(nextPName);
      setTargetDate(nextPTime);
    };

    initPrayerTimes();
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft('00:00:00');
      } else {
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(
          `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <FontAwesome5 name="map-marker-alt" size={14} color={GOLD} />
          <Text style={styles.locationText}>{locationName}</Text>
        </View>
        <TouchableOpacity 
          style={styles.proButton}
          onPress={() => router.push('/premium')}
        >
          <FontAwesome5 name="crown" size={12} color={BLACK} style={{ marginRight: 4 }} />
          <Text style={styles.proButtonText}>PRO</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.widgetContainer}>
        <View style={styles.widgetGlow} />
        <Text style={styles.widgetTitle}>Sıradaki Vakit: {nextPrayerName}</Text>
        <Text style={styles.widgetTime}>{timeLeft}</Text>
        <View style={styles.locationBadge}>
          <FontAwesome5 name="map-marker-alt" size={10} color="#a7f3d0" />
          <Text style={styles.widgetSubtitle}>{locationName} için ezan vaktine kalan süre</Text>
        </View>

        <TouchableOpacity 
          style={styles.prayerModeButton} 
          onPress={() => router.push('/prayer-mode')}
          activeOpacity={0.7}
        >
          <FontAwesome5 name="moon" size={14} color="#000" />
          <Text style={styles.prayerModeText}>Cami Moduna Geç</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ayahContainer}>
        <Text style={styles.ayahTitle}>Günün Ayeti</Text>
        <Text style={styles.ayahText}>"{daily.ayah.text}"</Text>
        <Text style={styles.ayahRef}>- {daily.ayah.ref}</Text>
      </View>
      
      <View style={[styles.ayahContainer, { borderColor: GOLD, backgroundColor: 'rgba(251, 191, 36, 0.05)' }]}>
        <Text style={[styles.ayahTitle, { color: EMERALD }]}>Günün Hadisi</Text>
        <Text style={styles.ayahText}>"{daily.hadith.text}"</Text>
        <Text style={[styles.ayahRef, { color: '#9ca3af' }]}>- {daily.hadith.ref}</Text>
      </View>

      <Text style={styles.sectionTitle}>Uygulamalar</Text>
      
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/dictionary')} activeOpacity={0.7}>
          <FontAwesome5 name="book-open" size={32} color={EMERALD} />
          <Text style={styles.cardText}>Rüya Sözlüğü</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.card} onPress={() => router.push('/zikirmatik')} activeOpacity={0.7}>
          <FontAwesome5 name="fingerprint" size={32} color={GOLD} />
          <Text style={styles.cardText}>Zikirmatik</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/imsakiye')} activeOpacity={0.7}>
          <FontAwesome5 name="clock" size={32} color={EMERALD} />
          <Text style={styles.cardText}>İmsakiye</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/qibla')} activeOpacity={0.7}>
          <FontAwesome5 name="compass" size={32} color={GOLD} />
          <Text style={styles.cardText}>Kıble Pusulası</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/esma')} activeOpacity={0.7}>
          <FontAwesome5 name="heart" size={32} color={EMERALD} />
          <Text style={styles.cardText}>Esma'ül Hüsna</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/quran')} activeOpacity={0.7}>
          <FontAwesome5 name="quran" size={32} color={GOLD} />
          <Text style={styles.cardText}>Kur'an-ı Kerim</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/habits')} activeOpacity={0.7}>
          <FontAwesome5 name="fire" size={32} color={EMERALD} />
          <Text style={styles.cardText}>Görevler</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => router.push('/kaza')} activeOpacity={0.7}>
          <FontAwesome5 name="clipboard-list" size={32} color={GOLD} />
          <Text style={styles.cardText}>Kaza Takibi</Text>
        </TouchableOpacity>
      </View>

      {/* Partner Reklam (Native Görünümlü) */}
      <PartnerAd />

      <View style={{ marginTop: 20 }}>
        <AdBanner />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  proButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  proButtonText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  widgetContainer: {
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
    shadowColor: EMERALD,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  widgetGlow: {
    position: 'absolute',
    top: -50,
    width: 200,
    height: 100,
    backgroundColor: EMERALD,
    opacity: 0.1,
    borderRadius: 100,
    transform: [{ scaleX: 2 }],
  },
  widgetTitle: {
    color: EMERALD,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 1,
  },
  widgetTime: {
    color: GOLD,
    fontSize: 54,
    fontWeight: '900',
    marginBottom: 16,
    fontVariant: ['tabular-nums'],
    textShadowColor: 'rgba(251, 191, 36, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
    marginBottom: 20,
  },
  prayerModeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  prayerModeText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  widgetSubtitle: {
    color: '#a7f3d0',
    fontSize: 12,
    fontWeight: '500',
  },
  ayahContainer: {
    backgroundColor: '#064e3b', 
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: EMERALD,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  ayahTitle: {
    color: GOLD,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  ayahText: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 26,
    marginBottom: 16,
  },
  ayahRef: {
    color: '#a7f3d0',
    fontSize: 13,
    textAlign: 'right',
    fontWeight: '500',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  card: {
    width: (width - 48) / 2,
    backgroundColor: 'rgba(17, 17, 17, 0.8)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#222',
  },
  cardText: {
    color: '#fff',
    marginTop: 14,
    fontWeight: '600',
  }
});
