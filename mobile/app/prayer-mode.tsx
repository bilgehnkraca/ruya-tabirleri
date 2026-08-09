import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch, Dimensions, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

export default function PrayerModeScreen() {
  const router = useRouter();
  const [isManualActive, setIsManualActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes in seconds
  const [pulseAnim] = useState(new Animated.Value(1));
  const audioRef = useRef<Audio.Sound | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isManualActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsManualActive(false);
      setTimeLeft(45 * 60);
    }
    return () => clearInterval(timer);
  }, [isManualActive, timeLeft]);

  const toggleProSwitch = () => {
    // Ücretsiz kullanıcı şalteri açmaya çalıştığında anında Paywall'a gönderilir.
    router.push('/premium');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(16, 185, 129, 0.1)', 'transparent']}
        style={styles.backgroundGradient}
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cami Modu</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.content}>
        <FontAwesome5 name="mosque" size={64} color={EMERALD} style={styles.icon} />
        <Text style={styles.title}>Sessizlik Kalkanı</Text>
        <Text style={styles.description}>
          Cemaatle namaz kılarken telefonunuzun çalıp utanç verici bir duruma düşmemeniz için 
          uygulamayı ve bildirimleri sessize alır.
        </Text>

        {/* Manuel Mod (Ücretsiz) */}
        <View style={styles.manualContainer}>
          <Text style={styles.sectionTitle}>Geçici Sessizlik (Ücretsiz)</Text>
          <TouchableOpacity 
            style={[styles.bigButton, isManualActive && styles.bigButtonActive]} 
            onPress={() => setIsManualActive(!isManualActive)}
            activeOpacity={0.8}
          >
            <View style={[styles.pulseCircle, isManualActive && styles.pulseCircleActive]} />
            <FontAwesome5 name={isManualActive ? "volume-mute" : "volume-up"} size={32} color={isManualActive ? "#fff" : EMERALD} />
            <Text style={[styles.bigButtonText, isManualActive && { color: '#fff' }]}>
              {isManualActive ? formatTime(timeLeft) : "Manuel Başlat (45 Dk)"}
            </Text>
          </TouchableOpacity>
          {isManualActive && (
            <Text style={styles.activeWarning}>
              Lütfen telefonunuzun yanındaki sessize alma mandalını indirdiğinizden emin olun.
            </Text>
          )}
        </View>

        <View style={styles.divider} />

        {/* Otomatik Cami Modu (PRO Paywall) */}
        <View style={styles.proContainer}>
          <View style={styles.proHeader}>
            <FontAwesome5 name="crown" size={16} color={GOLD} />
            <Text style={styles.proTitle}>Akıllı Cami Asistanı (PRO)</Text>
          </View>
          <Text style={styles.proDescription}>
            Cuma namazlarında ve 5 vakit ezan okunduğunda telefonunuzu otomatik olarak sessize almanızı hatırlatır ve titreşimi keser.
          </Text>
          
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Namaz Vakitlerinde Otomatik Sessizlik</Text>
            <Switch 
              value={false} 
              onValueChange={toggleProSwitch} 
              trackColor={{ false: '#333', true: GOLD }}
              thumbColor="#fff"
            />
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: 20,
  },
  icon: {
    marginBottom: 20,
    textShadowColor: EMERALD,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    color: '#9ca3af',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  manualContainer: {
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  bigButton: {
    width: width - 48,
    height: 120,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(16, 185, 129, 0.5)',
    overflow: 'hidden',
  },
  bigButtonActive: {
    backgroundColor: EMERALD,
    borderColor: EMERALD,
  },
  pulseCircle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: EMERALD,
    opacity: 0.1,
  },
  pulseCircleActive: {
    opacity: 0, // Animasyon eklenebilir
  },
  bigButtonText: {
    color: EMERALD,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  activeWarning: {
    color: GOLD,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#333',
    marginVertical: 30,
  },
  proContainer: {
    width: '100%',
    backgroundColor: 'rgba(251, 191, 36, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    borderRadius: 20,
    padding: 20,
  },
  proHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  proTitle: {
    color: GOLD,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  proDescription: {
    color: '#e5e7eb',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
    paddingRight: 10,
  }
});
