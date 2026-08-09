import { Tabs, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: GOLD,
        tabBarInactiveTintColor: '#4b5563', // gray-600
        tabBarShowLabel: false, // Daha temiz bir görünüm için yazıları kapatabiliriz, veya açık kalabilir. Şimdilik açık kalsın.
        tabBarStyle: {
          backgroundColor: DARK_GRAY,
          borderTopColor: '#333',
          paddingBottom: 5,
          height: 60,
          position: 'absolute', // Merkez butonun taşabilmesi için
        },
        headerStyle: {
          backgroundColor: BLACK,
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTintColor: GOLD,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarBackground: () => (
          <View style={{ flex: 1, backgroundColor: DARK_GRAY }} />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: 'Sözlük',
          tabBarIcon: ({ color }) => <FontAwesome5 name="book-open" size={24} color={color} />,
        }}
      />
      
      {/* MERKEZ (SIRDAŞ) BUTONU */}
      <Tabs.Screen
        name="sirdas"
        options={{
          title: '',
          tabBarIcon: () => (
            <View style={styles.centerButtonContainer}>
              <LinearGradient
                colors={['#7c3aed', '#fbbf24']}
                style={styles.centerButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <FontAwesome5 name="hand-holding-heart" size={24} color={BLACK} />
              </LinearGradient>
              <Text style={styles.centerButtonLabel}>Sırdaş</Text>
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            // Tab'ın kendi sayfasına gitmesini engelle
            e.preventDefault();
            // Direkt Modal'ı (ai-assistant) aç
            router.push('/ai-assistant');
          },
        })}
      />

      <Tabs.Screen
        name="zikirmatik"
        options={{
          title: 'Zikirmatik',
          tabBarIcon: ({ color }) => <FontAwesome5 name="fingerprint" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="imsakiye"
        options={{
          title: 'İmsakiye',
          tabBarIcon: ({ color }) => <FontAwesome5 name="clock" size={24} color={color} />,
        }}
      />

      {/* KULLANILMAYAN SEKMELERİ GİZLEMEK İÇİN (Hata vermemesi için href: null yaparız) */}
      <Tabs.Screen name="habits" options={{ href: null }} />
      <Tabs.Screen name="kaza" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButtonContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    shadowColor: '#7c3aed',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  centerButton: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: GOLD,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: DARK_GRAY,
  },
  centerButtonLabel: {
    color: GOLD,
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
    width: 100,
  }
});
