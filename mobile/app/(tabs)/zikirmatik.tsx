import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { FontAwesome5 } from '@expo/vector-icons';
import AdBanner from '../../components/AdBanner';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

export default function ZikirmatikScreen() {
  useTabInterstitialAd();

  const [count, setCount] = useState(0);

  useEffect(() => {
    loadCount();
  }, []);

  const loadCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem('@zikir_count');
      if (savedCount !== null) {
        setCount(parseInt(savedCount, 10));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const saveCount = async (newCount: number) => {
    try {
      await AsyncStorage.setItem('@zikir_count', newCount.toString());
    } catch (e) {
      console.error(e);
    }
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    const newCount = count + 1;
    setCount(newCount);
    saveCount(newCount);
  };

  const handleReset = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    setCount(0);
    saveCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zikirmatik</Text>
        <Text style={styles.subtitle}>Sübhanallah, Elhamdülillah, Allahu Ekber</Text>
      </View>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <FontAwesome5 name="redo" size={20} color={BLACK} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainButton} onPress={handlePress} activeOpacity={0.7}>
          <View style={styles.mainButtonInner}>
             <FontAwesome5 name="fingerprint" size={60} color={BLACK} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <AdBanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: GOLD,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
  counterContainer: {
    backgroundColor: DARK_GRAY,
    width: '100%',
    paddingVertical: 40,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
    borderWidth: 1,
    borderColor: EMERALD,
  },
  counterText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 40,
  },
  resetButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mainButton: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: EMERALD,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: EMERALD,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  mainButtonInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: EMERALD,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  }
});
