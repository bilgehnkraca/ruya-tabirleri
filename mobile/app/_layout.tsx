import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import Purchases from 'react-native-purchases';
import 'react-native-reanimated';
import TrackPlayer, { Capability, AppKilledPlaybackBehavior } from 'react-native-track-player';
import { playbackService } from '../utils/playbackService';

TrackPlayer.registerPlaybackService(() => playbackService);

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      (async () => {
        if (Platform.OS === 'ios') {
          try {
            await requestTrackingPermissionsAsync();
          } catch (e) {
            console.log("Error requesting tracking permissions:", e);
          }
        }
        SplashScreen.hideAsync();
      })();
    }
  }, [loaded]);

  // RevenueCat (Ödeme Sistemi) Başlatıcı (Initializer)
  // FIX #2: Placeholder fallback kaldırıldı — key yoksa configure edilmez
  useEffect(() => {
    const API_KEY_APPLE = process.env.EXPO_PUBLIC_REVENUECAT_APPLE;
    const API_KEY_GOOGLE = process.env.EXPO_PUBLIC_REVENUECAT_GOOGLE;

    // Key yoksa sessizce atla (development ortamı)
    if (Platform.OS === 'ios' && !API_KEY_APPLE) {
      console.warn('RevenueCat Apple Key eksik. .env.local dosyasına EXPO_PUBLIC_REVENUECAT_APPLE ekleyin.');
      return;
    }
    if (Platform.OS === 'android' && !API_KEY_GOOGLE) {
      console.warn('RevenueCat Google Key eksik. .env.local dosyasına EXPO_PUBLIC_REVENUECAT_GOOGLE ekleyin.');
      return;
    }

    try {
      if (Platform.OS === 'ios' && API_KEY_APPLE) {
        Purchases.configure({ apiKey: API_KEY_APPLE });
      } else if (Platform.OS === 'android' && API_KEY_GOOGLE) {
        Purchases.configure({ apiKey: API_KEY_GOOGLE });
      }
    } catch (error) {
      console.warn("RevenueCat Native Modülü bulunamadı. Ödeme testleri için 'npx expo run:ios' ile Native Build almanız gerekir.");
    }
  }, []);

  useEffect(() => {
    async function setupTrackPlayer() {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          android: {
            appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
          },
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext],
        });
      } catch (e) {
        console.log("TrackPlayer setup error or already setup:", e);
      }
    }
    setupTrackPlayer();
  }, []);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="prayer-mode" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="premium" options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="ai-assistant" options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
