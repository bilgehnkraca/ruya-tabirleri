import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';
const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  const handleAccept = async () => {
    await AsyncStorage.setItem('@has_seen_onboarding', 'true');
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="shield-alt" size={64} color={GOLD} />
        </View>
        
        <Text style={styles.title}>Mahremiyet Yemini</Text>
        <Text style={styles.subtitle}>Premium İslami Yaşam Uygulaması</Text>
        
        <View style={styles.card}>
          <View style={styles.featureRow}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="user-shield" size={20} color={EMERALD} />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>%100 Veri Gizliliği</Text>
              <Text style={styles.featureDesc}>Konumunuz ve ibadet verileriniz asla cihazınızdan dışarı çıkmaz ve hiçbir 3. partiyle paylaşılmaz.</Text>
            </View>
          </View>
          
          <View style={styles.featureRow}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="ban" size={20} color={GOLD} />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>İbadet Anında Sıfır Reklam</Text>
              <Text style={styles.featureDesc}>Kur'an-ı Kerim, Esmaül Hüsna ve Kıble Pusulası sayfaları tamamen reklamsız ve temiz kalacaktır. Dikkatiniz asla dağılmaz.</Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.featureIcon}>
              <FontAwesome5 name="heart" size={20} color={EMERALD} />
            </View>
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Dini Hassasiyet</Text>
              <Text style={styles.featureDesc}>Temel ibadet araçları (Kıble, İmsakiye, Kuran) hiçbir zaman ödeme duvarı (paywall) arkasına gizlenmez.</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleAccept} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Kabul Et ve Başla</Text>
          <FontAwesome5 name="arrow-right" size={16} color={BLACK} style={{ marginLeft: 8 }} />
        </TouchableOpacity>
        <Text style={styles.footerText}>Devam ederek gizlilik politikamızı onaylamış olursunuz.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
    justifyContent: 'space-between',
  },
  glowTop: {
    position: 'absolute',
    top: -100,
    left: -50,
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: EMERALD,
    opacity: 0.15,
    borderRadius: width,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -100,
    right: -50,
    width: width * 0.8,
    height: width * 0.8,
    backgroundColor: GOLD,
    opacity: 0.1,
    borderRadius: width,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(17, 17, 17, 0.8)',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
  },
  featureRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    paddingBottom: 48,
  },
  button: {
    backgroundColor: GOLD,
    flexDirection: 'row',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: BLACK,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12,
  }
});
