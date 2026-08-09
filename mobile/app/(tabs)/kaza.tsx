import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import AdBanner from '../../components/AdBanner';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';
const STORAGE_KEY = '@kaza_verileri';

type KazaTypes = 'Sabah' | 'Öğle' | 'İkindi' | 'Akşam' | 'Yatsı' | 'Vitir' | 'Oruç';

type KazaData = {
  [key in KazaTypes]: number;
};

const defaultData: KazaData = {
  Sabah: 0,
  Öğle: 0,
  İkindi: 0,
  Akşam: 0,
  Yatsı: 0,
  Vitir: 0,
  Oruç: 0,
};

export default function KazaScreen() {
  useTabInterstitialAd();
  const [data, setData] = useState<KazaData>(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setData(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Kaza verileri yüklenemedi', e);
    } finally {
      setLoading(false);
    }
  };

  const updateCount = async (type: KazaTypes, increment: boolean) => {
    const currentCount = data[type];
    const newCount = increment ? currentCount + 1 : Math.max(0, currentCount - 1);
    
    if (newCount === currentCount) return;

    const newData = { ...data, [type]: newCount };
    setData(newData);
    
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.error('Kaza verisi kaydedilemedi', e);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color={GOLD} />
      </View>
    );
  }

  const kazaItems: { type: KazaTypes; icon: string }[] = [
    { type: 'Sabah', icon: 'sun' },
    { type: 'Öğle', icon: 'sun' },
    { type: 'İkindi', icon: 'cloud-sun' },
    { type: 'Akşam', icon: 'cloud-moon' },
    { type: 'Yatsı', icon: 'star' },
    { type: 'Vitir', icon: 'moon' },
    { type: 'Oruç', icon: 'utensils' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kaza Takibi</Text>
        <Text style={styles.subtitle}>Kılmadığınız namazları ve tutmadığınız oruçları kaydedin.</Text>
      </View>

      <View style={styles.listContainer}>
        {kazaItems.map((item) => (
          <View key={item.type} style={styles.card}>
            <View style={styles.cardInfo}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name={item.icon} size={20} color={GOLD} />
              </View>
              <Text style={styles.cardTitle}>{item.type}</Text>
            </View>

            <View style={styles.counterContainer}>
              <TouchableOpacity 
                style={[styles.btn, styles.btnDecrease, data[item.type] === 0 && styles.btnDisabled]} 
                onPress={() => updateCount(item.type, false)}
                disabled={data[item.type] === 0}
              >
                <FontAwesome5 name="minus" size={14} color={data[item.type] === 0 ? '#555' : '#fff'} />
              </TouchableOpacity>
              
              <Text style={styles.countText}>{data[item.type]}</Text>
              
              <TouchableOpacity 
                style={[styles.btn, styles.btnIncrease]} 
                onPress={() => updateCount(item.type, true)}
              >
                <FontAwesome5 name="plus" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      
      <AdBanner />
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    backgroundColor: DARK_GRAY,
  },
  title: {
    color: GOLD,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 14,
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: DARK_GRAY,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3b2f0b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  btn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDecrease: {
    backgroundColor: '#374151',
  },
  btnIncrease: {
    backgroundColor: EMERALD,
  },
  btnDisabled: {
    backgroundColor: '#1f2937',
  },
  countText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    minWidth: 40,
    textAlign: 'center',
    fontVariant: ['tabular-nums'],
  }
});
