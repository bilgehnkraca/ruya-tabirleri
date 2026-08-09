import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

const GOLD = '#fbbf24';
const BLACK = '#000000';
const ROYAL_PURPLE = '#7c3aed';

export default function PartnerAd() {
  const handlePress = () => {
    Linking.openURL('https://www.turkiyehesaplama.com/');
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8} style={styles.container}>
      <LinearGradient
        colors={['rgba(124, 58, 237, 0.2)', 'rgba(251, 191, 36, 0.1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="calculator" size={24} color={GOLD} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Türkiye Hesaplama</Text>
            <Text style={styles.subtitle}>Günlük hayatınızdaki tüm hesaplamalar için en güvenilir araç seti.</Text>
          </View>
          <View style={styles.actionIcon}>
            <FontAwesome5 name="external-link-alt" size={14} color="#9ca3af" />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 4,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    shadowColor: ROYAL_PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  gradient: {
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GOLD,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: GOLD,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#d1d5db',
    fontSize: 12,
    lineHeight: 18,
  },
  actionIcon: {
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
