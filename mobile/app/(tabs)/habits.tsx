import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import AdBanner from '../../components/AdBanner';
import { useTabInterstitialAd } from '../../hooks/useTabInterstitialAd';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

interface Habit {
  id: string;
  title: string;
  completed: boolean;
  streak: number;
}

const DEFAULT_HABITS: Habit[] = [
  { id: '1', title: '1 Sayfa Kuran Oku', completed: false, streak: 0 },
  { id: '2', title: 'Sabah ve Akşam Zikirlerini Yap', completed: false, streak: 0 },
  { id: '3', title: 'Kaza Namazı Kıl (1 Vakit)', completed: false, streak: 0 },
];

export default function HabitsScreen() {
  useTabInterstitialAd();

  const [habits, setHabits] = useState<Habit[]>([]);
  const [totalStreak, setTotalStreak] = useState(0);

  useEffect(() => {
    loadHabits();
  }, []);

  const getTodayDateKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  };

  const loadHabits = async () => {
    try {
      const stored = await AsyncStorage.getItem('@habits_data');
      const lastDate = await AsyncStorage.getItem('@habits_last_date');
      const today = getTodayDateKey();
      
      let loadedHabits = DEFAULT_HABITS;
      
      if (stored) {
        loadedHabits = JSON.parse(stored);
        
        // Eğer gün değiştiyse tamamlananları sıfırla, yapmayanların serisini boz
        if (lastDate !== today) {
          loadedHabits = loadedHabits.map((h: Habit) => ({
            ...h,
            streak: h.completed ? h.streak : 0,
            completed: false
          }));
          await AsyncStorage.setItem('@habits_last_date', today);
        }
      } else {
        await AsyncStorage.setItem('@habits_last_date', today);
      }
      
      setHabits(loadedHabits);
      calculateTotalStreak(loadedHabits);
    } catch (e) {
      console.log('Habit yükleme hatası', e);
    }
  };

  const calculateTotalStreak = (hList: Habit[]) => {
    const sum = hList.reduce((acc, curr) => acc + curr.streak, 0);
    setTotalStreak(sum);
  };

  const toggleHabit = async (id: string) => {
    const newHabits = habits.map(h => {
      if (h.id === id) {
        const isNowCompleted = !h.completed;
        return {
          ...h,
          completed: isNowCompleted,
          streak: isNowCompleted ? h.streak + 1 : Math.max(0, h.streak - 1)
        };
      }
      return h;
    });
    
    setHabits(newHabits);
    calculateTotalStreak(newHabits);
    await AsyncStorage.setItem('@habits_data', JSON.stringify(newHabits));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Premium Header Widget */}
      <View style={styles.headerWidget}>
        <View style={styles.widgetGlow} />
        <FontAwesome5 name="fire-alt" size={48} color={GOLD} />
        <Text style={styles.streakTitle}>Toplam Seri</Text>
        <Text style={styles.streakCount}>{totalStreak} Gün</Text>
        <Text style={styles.streakSubtitle}>Manevi alışkanlıklarını korumaya devam et!</Text>
      </View>

      <Text style={styles.sectionTitle}>Bugünün Görevleri</Text>
      
      {habits.map(habit => (
        <TouchableOpacity 
          key={habit.id} 
          style={[styles.habitCard, habit.completed && styles.habitCardCompleted]}
          onPress={() => toggleHabit(habit.id)}
          activeOpacity={0.7}
        >
          <View style={styles.habitIcon}>
            <FontAwesome5 name={habit.completed ? "check-circle" : "circle"} size={24} color={habit.completed ? EMERALD : '#6b7280'} />
          </View>
          <View style={styles.habitContent}>
            <Text style={[styles.habitTitle, habit.completed && styles.habitTitleCompleted]}>{habit.title}</Text>
            <View style={styles.streakBadge}>
              <FontAwesome5 name="fire" size={12} color={GOLD} />
              <Text style={styles.streakText}>{habit.streak} Seri</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <AdBanner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    padding: 16,
  },
  headerWidget: {
    backgroundColor: 'rgba(251, 191, 36, 0.05)',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  widgetGlow: {
    position: 'absolute',
    top: -30,
    width: 150,
    height: 150,
    backgroundColor: GOLD,
    opacity: 0.15,
    borderRadius: 75,
  },
  streakTitle: {
    color: GOLD,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  streakCount: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '900',
    marginVertical: 4,
  },
  streakSubtitle: {
    color: '#a7f3d0',
    fontSize: 13,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  habitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_GRAY,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  habitCardCompleted: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  habitIcon: {
    marginRight: 16,
  },
  habitContent: {
    flex: 1,
  },
  habitTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  habitTitleCompleted: {
    color: '#a7f3d0',
    textDecorationLine: 'line-through',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  streakText: {
    color: GOLD,
    fontSize: 12,
    fontWeight: 'bold',
  }
});
