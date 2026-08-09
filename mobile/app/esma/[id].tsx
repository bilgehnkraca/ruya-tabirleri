import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import esmaData from '../../assets/data/esma.json';
import * as Haptics from 'expo-haptics';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

export default function EsmaDetailScreen() {
  const { id } = useLocalSearchParams();
  const esma = esmaData.find(e => e.id === id);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const playAudio = async () => {
    if (isPlaying) {
      Speech.stop();
      setIsPlaying(false);
      return;
    }
    
    setIsPlaying(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (!esma) return;

    // 1. Arapça Oku
    Speech.speak(esma.arabic, {
      language: 'ar-SA',
      rate: 0.8,
      pitch: 0.9,
    });

    // Küçük bir bekleme süresi, ancak Speech asenkron olduğu için Promise sarmalayıcısı gerekir
    // Basitlik adına burada direkt Türkçe anlamını ardından okuması için kuyruğa ekliyoruz.
    Speech.speak(esma.name, {
      language: 'tr-TR',
      rate: 0.85,
    });

    Speech.speak(esma.meaning, {
      language: 'tr-TR',
      rate: 0.9,
      onDone: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
      onStopped: () => setIsPlaying(false),
    });
  };

  if (!esma) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={{ color: '#fff' }}>İsim bulunamadı.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: esma.name, 
          headerStyle: { backgroundColor: BLACK }, 
          headerTintColor: GOLD
        }} 
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cam Efektli Üst Kart */}
        <View style={styles.glassCard}>
          <Text style={styles.arabicText}>{esma.arabic}</Text>
          <Text style={styles.titleText}>{esma.name}</Text>
          <Text style={styles.meaningText}>{esma.meaning}</Text>
          
          <TouchableOpacity 
            style={[styles.playButton, isPlaying && styles.stopButton]} 
            onPress={playAudio}
            activeOpacity={0.8}
          >
            <FontAwesome5 name={isPlaying ? "stop" : "play"} size={16} color={isPlaying ? '#fff' : BLACK} />
            <Text style={[styles.playButtonText, isPlaying && { color: '#fff' }]}>
              {isPlaying ? 'Durdur' : 'Sesli Dinle'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="book-reader" size={16} color={EMERALD} />
            <Text style={styles.sectionTitle}>Sırrı ve Hikmeti</Text>
          </View>
          <Text style={styles.detailedMeaning}>{esma.detailedMeaning}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  glassCard: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)', // Yarı saydam Emerald
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
    marginBottom: 24,
    shadowColor: EMERALD,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  arabicText: {
    fontSize: 64,
    color: GOLD,
    fontFamily: 'System',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  meaningText: {
    fontSize: 16,
    color: '#d1d5db',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    gap: 8,
  },
  stopButton: {
    backgroundColor: '#ef4444',
  },
  playButtonText: {
    color: BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailsContainer: {
    backgroundColor: DARK_GRAY,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#222',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    color: EMERALD,
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailedMeaning: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 20,
  },
  virtueText: {
    color: '#e5e7eb',
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  zikrBadge: {
    backgroundColor: '#064e3b',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: EMERALD,
  },
  zikrBadgeLabel: {
    color: '#a7f3d0',
    fontSize: 14,
    fontWeight: '500',
  },
  zikrBadgeValue: {
    color: GOLD,
    fontSize: 24,
    fontWeight: 'bold',
  }
});
