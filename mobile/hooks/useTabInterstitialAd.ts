import { useEffect, useState, useCallback } from 'react';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useFocusEffect } from 'expo-router';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : (process.env.EXPO_PUBLIC_ADMOB_INTERSTITIAL_ID || '');

// Create a singleton ad instance to avoid reloading issues across tabs
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export function useTabInterstitialAd() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    const unsubscribeClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      setLoaded(false);
      // Reklam kapandığında bir sonrakine hazırlık için yenisini yükle
      interstitial.load();
    });

    const unsubscribeError = interstitial.addAdEventListener(AdEventType.ERROR, (error) => {
      console.log('AdMob Interstitial Error:', error);
      setLoaded(false);
    });

    // İlk yüklemeyi başlat
    if (!interstitial.loaded) {
      interstitial.load();
    } else {
      setLoaded(true);
    }

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeError();
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Sekme her odaklandığında, reklam hazırsa (loaded) SADECE BİR KERE göster.
      // Dependency array boş olduğu için arkada state değişince bu kod tekrar çalışmaz.
      if (interstitial.loaded) {
        interstitial.show().catch(e => console.log('Ad show error:', e));
      }
    }, []) 
  );
}
