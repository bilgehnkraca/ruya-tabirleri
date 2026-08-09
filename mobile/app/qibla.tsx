import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const KAABA_LAT = 21.422487;
const KAABA_LNG = 39.826206;

export default function QiblaScreen() {
  const [qiblaBearing, setQiblaBearing] = useState<number | null>(null);
  const [heading, setHeading] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 1. Get Location & Calculate Qibla Bearing
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Pusula için konum izni gerekli.');
        return;
      }
      
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        const bearing = calculateQibla(latitude, longitude);
        setQiblaBearing(bearing);
      } catch (err) {
        setError('Konum alınamadı.');
      }
    })();

    // 2. Listen to Magnetometer
    let subscription: any;
    const startSensors = async () => {
      Magnetometer.setUpdateInterval(100);
      subscription = Magnetometer.addListener(result => {
        let angle = Math.atan2(result.y, result.x) * (180 / Math.PI);
        // Correcting for screen orientation (assuming portrait)
        angle = angle - 90;
        if (angle < 0) {
          angle = angle + 360;
        }
        setHeading(angle);
      });
    };
    
    startSensors();
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  // Calculate bearing from current location to Kaaba
  const calculateQibla = (lat: number, lng: number) => {
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const toDeg = (rad: number) => (rad * 180) / Math.PI;

    const latK = toRad(KAABA_LAT);
    const lngK = toRad(KAABA_LNG);
    const latU = toRad(lat);
    const lngU = toRad(lng);

    const y = Math.sin(lngK - lngU);
    const x = Math.cos(latU) * Math.tan(latK) - Math.sin(latU) * Math.cos(lngK - lngU);
    let bearing = toDeg(Math.atan2(y, x));
    return (bearing + 360) % 360;
  };

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (qiblaBearing === null) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={GOLD} />
        <Text style={{ color: GOLD, marginTop: 10 }}>Pusula Ayarlanıyor...</Text>
      </View>
    );
  }

  // Calculate compass rotation relative to Qibla
  let compassRotation = 360 - heading;
  let pointerRotation = qiblaBearing; // Absolute pointer direction

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Kıble Pusulası', headerStyle: { backgroundColor: BLACK }, headerTintColor: GOLD }} />
      
      <View style={styles.header}>
        <Text style={styles.title}>Mekke Yönü</Text>
        <Text style={styles.subtitle}>{qiblaBearing.toFixed(1)}°</Text>
      </View>

      <View style={styles.compassContainer}>
        {/* The compass dial rotates based on device heading */}
        <View style={[styles.compassDial, { transform: [{ rotate: `${compassRotation}deg` }] }]}>
          <Text style={[styles.directionText, styles.north]}>N</Text>
          <Text style={[styles.directionText, styles.east]}>E</Text>
          <Text style={[styles.directionText, styles.south]}>S</Text>
          <Text style={[styles.directionText, styles.west]}>W</Text>
          
          {/* The Kaaba pointer is fixed to the qibla bearing on the rotating dial */}
          <View style={[styles.qiblaPointerContainer, { transform: [{ rotate: `${pointerRotation}deg` }] }]}>
             <View style={styles.qiblaPointer} />
             <FontAwesome5 name="kaaba" size={32} color={EMERALD} style={{ marginTop: 20 }} />
          </View>
        </View>
      </View>
      
      <Text style={styles.footerText}>
        Lütfen cihazınızı yatay olarak düz bir zeminde tutun ve manyetik alanlardan (mıknatıs, bilgisayar vb.) uzaklaştırın.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  center: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    color: GOLD,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 8,
  },
  compassContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
  compassDial: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  directionText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  north: { top: 10, color: '#ef4444' },
  south: { bottom: 10 },
  east: { right: 10 },
  west: { left: 10 },
  qiblaPointerContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  qiblaPointer: {
    width: 4,
    height: 140,
    backgroundColor: EMERALD,
    marginTop: 10,
    borderRadius: 2,
  },
  footerText: {
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 12,
    lineHeight: 18,
  }
});
