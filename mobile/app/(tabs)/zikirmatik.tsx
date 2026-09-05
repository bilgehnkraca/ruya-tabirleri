import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert, ScrollView, SafeAreaView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';
import { sendMessage, watchEvents } from 'react-native-watch-connectivity';

const GOLD = '#fbbf24';
const BLACK = '#000000';
const CHIP_BG = '#1a1a1a';
const CHIP_BORDER = '#333';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 0.7;

const safeSendMessage = (msg: any) => {
  try {
    sendMessage(msg, () => {}, (err: any) => console.log('Watch sync error:', err));
  } catch (err) {
    console.log('Watch sync error:', err);
  }
};

const ZIKIR_DATA = {
  serbest: { 
    label: 'Serbest Zikir', 
    target: null, 
    arabic: 'اللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ', 
    pronunciation: 'Allahümme salli alâ seyyidinâ Muhammed',
    turkish: "Allah'ım, Efendimiz Muhammed'e salât ve selâm eyle." 
  },
  subhanallah: { 
    label: 'Sübhanallah', 
    target: 33, 
    arabic: 'سُبْحَانَ ٱللَّٰهِ', 
    pronunciation: 'Sübhanallah',
    turkish: "Allah eksikliklerden münezzehtir." 
  },
  elhamdulillah: { 
    label: 'Elhamdülillah', 
    target: 33, 
    arabic: 'ٱلْحَمْدُ لِلَّٰهِ', 
    pronunciation: 'Elhamdülillah',
    turkish: "Hamd Allah'a mahsustur." 
  },
  allahu_ekber: {
    label: 'Allahu Ekber',
    target: 33,
    arabic: 'ٱللَّٰهُ أَكْبَرُ',
    pronunciation: 'Allahu Ekber',
    turkish: "Allah en büyüktür."
  },
  tevhid: {
    label: 'Kelime-i Tevhid',
    target: 100,
    arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ',
    pronunciation: 'Lâ ilâhe illallah',
    turkish: "Allah'tan başka ilah yoktur."
  },
  estagfirullah: {
    label: 'Estağfirullah',
    target: 100,
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    pronunciation: 'Estağfirullah',
    turkish: "Allah'tan bağışlanma dilerim."
  },
  lahavle: {
    label: 'La Havle',
    target: 100,
    arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    pronunciation: 'Lâ havle ve lâ kuvvete illâ billâh',
    turkish: "Güç ve kuvvet ancak Allah'a mahsustur."
  },
  hasbunallah: {
    label: 'Hasbünallah',
    target: 100,
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    pronunciation: 'Hasbünallahu ve ni’mel vekîl',
    turkish: "Allah bize yeter, O ne güzel vekildir."
  }
};

type ZikirType = keyof typeof ZIKIR_DATA;

export default function ZikirmatikScreen() {
  useTabInterstitialAd();

  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedType, setSelectedType] = useState<ZikirType>('serbest');

  const loadTotalCount = async () => {
    try {
      const savedTotal = await AsyncStorage.getItem('@zikir_total_count');
      if (savedTotal !== null) setTotalCount(parseInt(savedTotal, 10));
    } catch (e) {
      console.error(e);
    }
  };

  const loadZikirData = async (type: ZikirType) => {
    try {
      const savedCount = await AsyncStorage.getItem(`@zikir_count_${type}`);
      const parsedCount = savedCount ? parseInt(savedCount, 10) : 0;
      setCount(parsedCount);
      safeSendMessage({ count: parsedCount, selectedZikir: type });
    } catch (error) {
      console.error('Veri yüklenirken hata oluştu:', error);
    }
  };

  const saveData = async (newCount: number, newTotal: number) => {
    try {
      await AsyncStorage.setItem(`@zikir_count_${selectedType}`, newCount.toString());
      await AsyncStorage.setItem('@zikir_total_count', newTotal.toString());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadZikirData(selectedType);
    loadTotalCount();
  }, []);

  useEffect(() => {
    const handleWatchEvent = (message: any) => {
      console.log('WATCH_SYNC [RN]: Received message from watch ->', message);
      if (message.type === 'INCREMENT') {
        console.log('WATCH_SYNC [RN]: Processing INCREMENT', message.count);
        setCount(message.count);
        setTotalCount((prev) => {
          const newTotal = prev + 1;
          saveData(message.count, newTotal);
          return newTotal;
        });
        if (message.selectedZikir && message.selectedZikir !== selectedType) {
          setSelectedType(message.selectedZikir as ZikirType);
        }
      } else if (message.type === 'RESET') {
        setCount(0);
        setTotalCount((prev) => {
          saveData(0, prev);
          return prev;
        });
        if (message.selectedZikir && message.selectedZikir !== selectedType) {
          setSelectedType(message.selectedZikir as ZikirType);
        }
      } else if (message.type === 'CHANGE_ZIKIR') {
        if (message.selectedZikir && message.selectedZikir !== selectedType) {
          setSelectedType(message.selectedZikir as ZikirType);
          loadZikirData(message.selectedZikir as ZikirType); 
        }
      }
    };

    const messageListener = watchEvents.addListener('message', handleWatchEvent);

    return () => {
      if (typeof messageListener === 'function') {
        messageListener();
      } else if (messageListener && typeof (messageListener as any).remove === 'function') {
        (messageListener as any).remove();
      }
    };
  }, [selectedType]);

  const handleTypeChange = async (type: ZikirType) => {
    setSelectedType(type);
    loadZikirData(type);
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    let newCount = count + 1;
    const currentTarget = ZIKIR_DATA[selectedType].target;
    
    if (currentTarget !== null && newCount > currentTarget) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      newCount = 1;
    }

    const newTotal = totalCount + 1;
    setCount(newCount);
    setTotalCount(newTotal);
    saveData(newCount, newTotal);
    
    safeSendMessage({ count: newCount, selectedZikir: selectedType });
  };

  const handleReset = () => {
    Alert.alert(
      'Sıfırla',
      `${ZIKIR_DATA[selectedType].label} sayacını sıfırlamak istediğinizden emin misiniz?`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Evet, Sıfırla',
          style: 'destructive',
          onPress: () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            setCount(0);
            saveData(0, totalCount);
            safeSendMessage({ count: 0, selectedZikir: selectedType });
          },
        },
      ]
    );
  };

  const currentData = ZIKIR_DATA[selectedType];
  const fillPercentage = currentData.target ? Math.min(100, (count / currentData.target) * 100) : 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Akıllı Zikirmatik</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeIcon}>🏆</Text>
            <Text style={styles.totalBadgeText}>{totalCount} Toplam</Text>
          </View>
        </View>

        {/* Chips */}
        <View style={styles.chipsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsScroll}>
            {(Object.keys(ZIKIR_DATA) as ZikirType[]).map((key) => {
              const isActive = selectedType === key;
              return (
                <TouchableOpacity
                  key={key}
                  style={[styles.chip, isActive && styles.chipActive]}
                  onPress={() => handleTypeChange(key)}
                >
                  <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                    {ZIKIR_DATA[key].label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Text Area */}
        <View style={styles.textArea}>
          <Text style={styles.arabicText}>{currentData.arabic}</Text>
          <Text style={styles.pronunciationText}>{currentData.pronunciation}</Text>
          <Text style={styles.turkishText}>{currentData.turkish}</Text>
        </View>

        {/* Big Circle Button */}
        <View style={styles.centerArea}>
          <Pressable style={styles.circleContainer} onPress={handlePress}>
            {/* Water Fill Effect */}
            <View style={[styles.circleFill, { height: `${fillPercentage}%` }]} />
            
            {/* Texts Inside Circle */}
            <View style={styles.circleContent}>
              <Text style={styles.countText}>{count}</Text>
              {currentData.target !== null && (
                <Text style={styles.targetText}>/ {currentData.target}</Text>
              )}
            </View>
          </Pressable>
          <Text style={styles.instructionText}>SAYMAK İÇİN EKRANA DOKUNUN</Text>
        </View>

        {/* Reset Button (Moved up to avoid Tab Bar) */}
        <View style={styles.bottomArea}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Sıfırla</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  container: {
    flex: 1,
    backgroundColor: BLACK,
    paddingBottom: 110, // Tab bar overlap protection
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GOLD,
  },
  totalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  totalBadgeIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  totalBadgeText: {
    color: GOLD,
    fontWeight: 'bold',
    fontSize: 12,
  },
  chipsContainer: {
    height: 60,
    marginBottom: 10,
  },
  chipsScroll: {
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: CHIP_BG,
    borderWidth: 1,
    borderColor: CHIP_BORDER,
  },
  chipActive: {
    borderColor: '#555',
    backgroundColor: '#222',
  },
  chipText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#ddd',
  },
  textArea: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 15,
    minHeight: 110,
  },
  arabicText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 8,
  },
  pronunciationText: {
    color: GOLD,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 6,
  },
  turkishText: {
    color: '#9ca3af',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 10,
  },
  centerArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 2,
    borderColor: '#333',
    backgroundColor: '#111',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  circleFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3b2f15', // Dark gold/brownish fill from screenshot
  },
  circleContent: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  countText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
  },
  targetText: {
    fontSize: 20,
    color: '#666',
    marginTop: -5,
  },
  instructionText: {
    color: '#444',
    fontSize: 12,
    letterSpacing: 1.5,
    fontWeight: '600',
  },
  bottomArea: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  resetButton: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
  },
  resetButtonText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '600',
  },
});

