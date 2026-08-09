import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Alert } from 'react-native';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
import { registerForPushNotificationsAsync, schedulePrayerNotifications } from '../../utils/notifications';
import AdBanner from '../../components/AdBanner';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export default function ImsakiyeScreen() {
  useTabInterstitialAd();

  const [locationError, setLocationError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [times, setTimes] = useState<PrayerTimes | null>(null);
  const [city, setCity] = useState<string>('Konum Aranıyor...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationError('Namaz vakitleri için konum izni gereklidir.');
        setLoading(false);
        return;
      }

      try {
        let latitude = 41.0082; // Default Istanbul
        let longitude = 28.9784; // Default Istanbul
        
        try {
          let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
          latitude = location.coords.latitude;
          longitude = location.coords.longitude;
        } catch (locErr) {
          console.warn("Location fetch failed, using default (Istanbul):", locErr);
          setCity('İstanbul (Varsayılan)');
        }
        
        // Reverse geocoding for city name if not already set
        if (city === 'Konum Aranıyor...') {
          try {
            let address = await Location.reverseGeocodeAsync({ latitude, longitude });
            if (address.length > 0) {
              setCity(address[0].city || address[0].subregion || 'Bulunduğunuz Konum');
            }
          } catch (geoErr) {
            console.warn("Reverse geocode failed:", geoErr);
            setCity('Konum Bulunamadı');
          }
        }

        // Fetch prayer times from Aladhan API (removed timestamp to avoid 302 redirect)
        const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=13`); 
        const data = await res.json();
        
        if (data.code === 200) {
          setTimes(data.data.timings);
          
          // Bildirim iznini iste ve vakitleri zamanla
          const hasPushPermission = await registerForPushNotificationsAsync();
          if (hasPushPermission) {
            const prayerArray = [
              { name: 'İmsak', time: data.data.timings.Fajr },
              { name: 'Güneş', time: data.data.timings.Sunrise },
              { name: 'Öğle', time: data.data.timings.Dhuhr },
              { name: 'İkindi', time: data.data.timings.Asr },
              { name: 'Akşam', time: data.data.timings.Maghrib },
              { name: 'Yatsı', time: data.data.timings.Isha },
            ];
            await schedulePrayerNotifications(prayerArray);
          }
        }
      } catch (error: any) {
        console.error("Imsakiye Error:", error);
        setLocationError(`Hata: ${error.message || 'Bilinmeyen hata'}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={GOLD} />
        <Text style={styles.loadingText}>Vakitler Hesaplanıyor...</Text>
      </View>
    );
  }

  if (locationError) {
    return (
      <View style={[styles.container, styles.center]}>
        <FontAwesome5 name="map-marker-alt" size={48} color="#ef4444" />
        <Text style={styles.errorText}>{locationError}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="map-marker-alt" size={16} color={EMERALD} />
        <Text style={styles.cityText}>{city}</Text>
      </View>

      <View style={styles.timesContainer}>
        <TimeRow name="İmsak" time={times?.Fajr} icon="moon" />
        <TimeRow name="Güneş" time={times?.Sunrise} icon="sun" />
        <TimeRow name="Öğle" time={times?.Dhuhr} icon="sun" />
        <TimeRow name="İkindi" time={times?.Asr} icon="cloud-sun" />
        <TimeRow name="Akşam" time={times?.Maghrib} icon="cloud-moon" highlight />
        <TimeRow name="Yatsı" time={times?.Isha} icon="star" />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Vakitler T.C. Diyanet İşleri Başkanlığı hesaplama metodolojisi ile sunulmaktadır.</Text>
      </View>
      <AdBanner />
    </ScrollView>
  );
}

function TimeRow({ name, time, icon, highlight = false }: { name: string, time?: string, icon: string, highlight?: boolean }) {
  return (
    <View style={[styles.timeRow, highlight && styles.timeRowHighlight]}>
      <View style={styles.timeNameContainer}>
        <FontAwesome5 name={icon} size={20} color={highlight ? BLACK : EMERALD} />
        <Text style={[styles.timeName, highlight && styles.textHighlight]}>{name}</Text>
      </View>
      <Text style={[styles.timeValue, highlight && styles.textHighlight]}>{time || '--:--'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    padding: 16,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: GOLD,
    marginTop: 16,
    fontSize: 16,
  },
  errorText: {
    color: '#ef4444',
    marginTop: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
    marginTop: 10,
  },
  cityText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timesContainer: {
    backgroundColor: DARK_GRAY,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  timeRowHighlight: {
    backgroundColor: GOLD,
    marginHorizontal: -16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderBottomWidth: 0,
    marginVertical: 4,
  },
  timeNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  timeName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  timeValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  textHighlight: {
    color: BLACK,
  },
  infoBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#064e3b',
    borderRadius: 12,
  },
  infoText: {
    color: '#a7f3d0',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
  }
});
