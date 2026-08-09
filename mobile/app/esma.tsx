import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import esmaData from '../assets/data/esma.json';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

export default function EsmaScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Esma\'ül Hüsna', headerStyle: { backgroundColor: BLACK }, headerTintColor: GOLD }} />
      
      <FlatList
        data={esmaData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => router.push(`/esma/${item.id}`)}
          >
            <View style={styles.headerRow}>
              <Text style={styles.number}>{item.id}.</Text>
              <Text style={styles.name}>{item.name}</Text>
              <View style={{flex: 1}} />
              <FontAwesome5 name="chevron-right" size={14} color={EMERALD} />
            </View>
            <Text style={styles.meaning}>{item.meaning}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  card: {
    backgroundColor: DARK_GRAY,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderLeftWidth: 4,
    borderLeftColor: EMERALD,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  number: {
    color: EMERALD,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  name: {
    color: GOLD,
    fontSize: 22,
    fontWeight: 'bold',
  },
  meaning: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    borderTopWidth: 1,
    borderTopColor: '#222',
    paddingTop: 12,
  },
  zikrLabel: {
    color: '#9ca3af',
    fontSize: 12,
    marginRight: 8,
  },
  zikrValue: {
    color: EMERALD,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
