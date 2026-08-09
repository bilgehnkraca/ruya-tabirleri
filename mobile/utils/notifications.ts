import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

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

export async function schedulePrayerNotifications(times: { name: string, time: string }[]) {
  // Önce eski zamanlanmış bildirimleri temizleyelim ki üst üste binmesin
  await Notifications.cancelAllScheduledNotificationsAsync();

  const now = new Date();

  for (const prayer of times) {
    if (!prayer.time) continue;
    
    // time format: "05:30"
    const [hours, minutes] = prayer.time.split(':').map(Number);
    const triggerDate = new Date();
    triggerDate.setHours(hours, minutes, 0, 0);

    // Eğer vakit geçmişse, yarına kur (Basit MVP mantığı)
    if (triggerDate.getTime() < now.getTime()) {
      triggerDate.setDate(triggerDate.getDate() + 1);
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${prayer.name} Vakti Geldi`,
        body: `Haydi namaza! ${prayer.name} vakti girdi.`,
        sound: true,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: triggerDate.getTime(),
        channelId: 'default'
      },
    });
  }
  
  console.log('Bildirimler başarıyla zamanlandı.');
}
