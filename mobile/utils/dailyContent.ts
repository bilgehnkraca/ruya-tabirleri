import dailyData from '../assets/data/daily.json';

export interface DailyItem {
  text: string;
  ref: string;
}

export interface DailyContent {
  id: number;
  ayah: DailyItem;
  hadith: DailyItem;
  dua: DailyItem;
}

/**
 * Yılın o gününe ait (modulo kullanarak) günlük içerikleri döndürür.
 * Böylece her gün farklı bir içerik görünür.
 */
export function getDailyContent(): DailyContent {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  const index = dayOfYear % dailyData.length;
  
  return dailyData[index] as DailyContent;
}
