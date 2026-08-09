import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function QuranScreen() {
  const router = useRouter();
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => {
        if (data.code === 200) {
          setSurahs(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Kuran listesi alınamadı", err);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Kur\'an-ı Kerim', headerStyle: { backgroundColor: BLACK }, headerTintColor: GOLD }} />
      
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={GOLD} />
          <Text style={{color: GOLD, marginTop: 10}}>Sureler Yükleniyor...</Text>
        </View>
      ) : (
        <FlatList
          data={surahs}
          keyExtractor={(item) => item.number.toString()}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card} 
              activeOpacity={0.7}
              onPress={() => router.push(`/surah/${item.number}`)}
            >
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{item.number}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.englishName} ({item.name})</Text>
                <Text style={styles.subtitle}>
                  {item.revelationType === 'Meccan' ? 'Mekki' : 'Medeni'} • {item.numberOfAyahs} Ayet
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="book-reader" size={20} color={EMERALD} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_GRAY,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  numberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#064e3b',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  number: {
    color: GOLD,
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 12,
  },
  iconContainer: {
    paddingLeft: 16,
  }
});
