import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform, Dimensions, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Purchases from 'react-native-purchases';

const { width } = Dimensions.get('window');

const GOLD = '#fbbf24';
const BLACK = '#000000';
const ROYAL_PURPLE = '#7c3aed';
const DARK_GRAY = '#111111';

export default function PremiumScreen() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const features = [
    {
      icon: 'ban',
      title: 'Sıfır Reklam',
      desc: 'Hiçbir sayfada reklam görmeyin, uhreviyatınız bölünmesin.',
    },
    {
      icon: 'robot',
      title: 'Hızlı AI Erişimi (Günlük 10 Soru)',
      desc: 'Rüya tabiri ve dert ortağı için video izlemeyin, anında cevap alın.',
    },
    {
      icon: 'moon',
      title: 'Kilit Ekranı (Live Activities)',
      desc: 'Namaz vakitlerini ve hedeflerinizi kilit ekranınızda şık bir şekilde görün.',
    },
    {
      icon: 'mosque',
      title: 'Otomatik Cami Modu Asistanı',
      desc: 'Namaz vakitlerinde (Cuma dahil) telefonunuzu sessize almanızı otomatik hatırlatır.',
    },
  ];

  const handlePurchase = async () => {
    try {
      // FIX #11: Gerçek RevenueCat satın alma akışı aktif edildi
      // .env.local'da EXPO_PUBLIC_REVENUECAT_APPLE/GOOGLE key'leri tanımlı olmalıdır
      const productId = selectedPlan === 'yearly' ? 'pro_annual' : 'pro_monthly';
      
      const offerings = await Purchases.getOfferings();
      const currentOffering = offerings.current;
      
      if (!currentOffering) {
        Alert.alert(
          'Ürün Bulunamadı',
          'Satın alma paketleri yüklenemedi. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.'
        );
        return;
      }

      const package_ = selectedPlan === 'yearly'
        ? currentOffering.annual
        : currentOffering.monthly;

      if (!package_) {
        Alert.alert('Hata', 'Seçilen paket mevcut değil.');
        return;
      }

      const { customerInfo } = await Purchases.purchasePackage(package_);
      
      if (typeof customerInfo.entitlements.active['pro'] !== 'undefined') {
        Alert.alert('🎉 Hoş Geldiniz!', 'PRO üyeliğiniz aktif edildi. Artık tüm özellikleri sınırsız kullanabilirsiniz.');
        router.back();
      }
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('Hata', 'Ödeme işlemi sırasında bir hata oluştu: ' + e.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Glow */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <FontAwesome5 name="times" size={24} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <FontAwesome5 name="crown" size={48} color={GOLD} style={{ marginBottom: 16 }} />
          <Text style={styles.title}>PRO'YA GEÇ</Text>
          <Text style={styles.subtitle}>Sınırları Kaldırın, Tam Odaklanın</Text>
        </View>

        {/* Features List */}
        <View style={styles.featuresContainer}>
          {features.map((item, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name={item.icon} size={20} color={GOLD} />
              </View>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Pricing Cards */}
        <View style={styles.pricingContainer}>
          {/* Monthly */}
          <TouchableOpacity 
            style={[styles.priceCard, selectedPlan === 'monthly' && styles.priceCardSelected]}
            onPress={() => setSelectedPlan('monthly')}
            activeOpacity={0.8}
          >
            <Text style={styles.planName}>AYLIK</Text>
            <Text style={styles.planPrice}>₺99<Text style={styles.planDuration}>/ay</Text></Text>
            {selectedPlan === 'monthly' && (
              <View style={styles.checkCircle}>
                <FontAwesome5 name="check" size={10} color={BLACK} />
              </View>
            )}
          </TouchableOpacity>

          {/* Yearly */}
          <TouchableOpacity 
            style={[styles.priceCard, styles.priceCardYearly, selectedPlan === 'yearly' && styles.priceCardSelectedYearly]}
            onPress={() => setSelectedPlan('yearly')}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['rgba(251, 191, 36, 0.1)', 'rgba(251, 191, 36, 0.0)']}
              style={styles.yearlyGradient}
            />
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>%60 KAZANÇ</Text>
            </View>
            <Text style={styles.planNameYearly}>YILLIK (Önerilen)</Text>
            <Text style={styles.planPriceYearly}>₺499<Text style={styles.planDurationYearly}>/yıl</Text></Text>
            <Text style={styles.monthlyEquivalent}>Aylık sadece ₺41.5'a gelir</Text>
            {selectedPlan === 'yearly' && (
              <View style={styles.checkCircleYearly}>
                <FontAwesome5 name="check" size={10} color={BLACK} />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Purchase Button */}
        <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
          <Text style={styles.purchaseButtonText}>
            {selectedPlan === 'yearly' ? 'Yıllık Planla Başla' : 'Aylık Planla Başla'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          İstediğiniz zaman iptal edebilirsiniz. Satın alma işlemi iTunes/Google Play hesabınız üzerinden gerçekleşir.
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  glowTop: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: width,
    height: width,
    backgroundColor: ROYAL_PURPLE,
    opacity: 0.15,
    borderRadius: width,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -150,
    right: -100,
    width: width,
    height: width,
    backgroundColor: GOLD,
    opacity: 0.1,
    borderRadius: width,
  },
  scrollContent: {
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  closeButton: {
    padding: 8,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: GOLD,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    marginTop: 8,
  },
  featuresContainer: {
    marginBottom: 40,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  featureTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  featureDesc: {
    fontSize: 14,
    color: '#9ca3af',
    lineHeight: 20,
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  priceCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    position: 'relative',
  },
  priceCardSelected: {
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  priceCardYearly: {
    borderColor: 'rgba(251, 191, 36, 0.5)',
    backgroundColor: 'rgba(251, 191, 36, 0.05)',
  },
  priceCardSelectedYearly: {
    borderColor: GOLD,
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
  },
  yearlyGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 16,
  },
  discountBadge: {
    position: 'absolute',
    top: -12,
    backgroundColor: GOLD,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: BLACK,
  },
  planName: {
    fontSize: 14,
    color: '#9ca3af',
    fontWeight: '600',
    marginBottom: 8,
  },
  planNameYearly: {
    fontSize: 12,
    color: GOLD,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 12,
    textAlign: 'center',
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  planDuration: {
    fontSize: 14,
    color: '#9ca3af',
    fontWeight: 'normal',
  },
  planPriceYearly: {
    fontSize: 26,
    fontWeight: 'bold',
    color: GOLD,
  },
  planDurationYearly: {
    fontSize: 14,
    color: GOLD,
    fontWeight: 'normal',
  },
  monthlyEquivalent: {
    fontSize: 11,
    color: '#9ca3af',
    marginTop: 8,
    textAlign: 'center',
  },
  checkCircle: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleYearly: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
  },
  purchaseButton: {
    backgroundColor: GOLD,
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: GOLD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  purchaseButtonText: {
    color: BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  termsText: {
    fontSize: 11,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 16,
  }
});
