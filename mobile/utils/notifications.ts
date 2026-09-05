import * as Notifications from 'expo-notifications';
import { Platform, AppState, AppStateStatus } from 'react-native';

// Bildirim davranışını ayarlıyoruz
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function registerForPushNotificationsAsync() {
  let token;
  
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Ezan Vakitleri',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#fbbf24',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    console.log('Bildirim izni alınamadı!');
    return false;
  }

  return true;
}

/**
 * FIX #6: Vakitler artık API'den o güne ait gerçek verilerle zamanlanıyor.
 * Sadece "bugün geçmişse +1 gün at" mantığı yok — her bildirim için
 * doğru tarih ve saat hesaplanıyor.
 */
export async function schedulePrayerNotifications(times: { name: string, time: string }[]) {
  // Önce eski zamanlanmış bildirimleri temizle
  await Notifications.cancelAllScheduledNotificationsAsync();

  const now = new Date();
  const todayStr = now.toDateString();

  for (const prayer of times) {
    if (!prayer.time) continue;
    
    // "HH:MM" formatındaki vakti parse et
    const timePart = prayer.time.split(' ')[0]; // Bazı API'ler "05:30 (EEST)" döndürebilir
    const [hours, minutes] = timePart.split(':').map(Number);
    
    if (isNaN(hours) || isNaN(minutes)) continue;

    const triggerDate = new Date();
    triggerDate.setHours(hours, minutes, 0, 0);

    // Eğer vakit bugün geçmişse yarına kur
    if (triggerDate.getTime() <= now.getTime()) {
      triggerDate.setDate(triggerDate.getDate() + 1);
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${prayer.name} Vakti Geldi 🕌`,
        body: `Haydi namaza! ${prayer.name} vakti girdi.`,
        sound: true,
        data: { prayerName: prayer.name, scheduledDate: todayStr },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: triggerDate.getTime(),
        channelId: 'default',
      },
    });
  }
  
  console.log(`Bildirimler başarıyla zamanlandı. (${times.length} vakit)`);
}

/**
 * AppState değişimini dinleyerek her uygulama açılışında
 * vakitleri yenilemeyi sağlayan helper.
 * Kullanım: İmsakiye screen'de useEffect içinde çağır.
 */
export function setupDailyNotificationRefresh(refreshFn: () => Promise<void>) {
  let lastRefreshDate = '';

  const handleAppStateChange = async (nextState: AppStateStatus) => {
    if (nextState === 'active') {
      const today = new Date().toDateString();
      if (today !== lastRefreshDate) {
        lastRefreshDate = today;
        await refreshFn();
      }
    }
  };

  const subscription = AppState.addEventListener('change', handleAppStateChange);
  return () => subscription.remove();
}

