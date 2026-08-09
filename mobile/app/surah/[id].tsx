import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import TrackPlayer, { 
  Event, 
  State, 
  useTrackPlayerEvents, 
  usePlaybackState,
  Track
} from 'react-native-track-player';

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

interface Ayah {
  number: number;
  numberInSurah: number;
  arabicText: string;
  turkishText: string;
  audioUrl: string;
}

export default function SurahDetailScreen() {
  const { id } = useLocalSearchParams();
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState(true);
  const [surahName, setSurahName] = useState('Yükleniyor...');
  
  const [playingIndex, setPlayingIndex] = useState(0);
  
  const flatListRef = useRef<FlatList>(null);
  
  // TrackPlayer state
  const playbackState = usePlaybackState();
  const isPlaying = playbackState.state === State.Playing || playbackState.state === State.Buffering;

  // Fetch Surah Data
  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const [arabicResponse, turkishResponse, audioResponse] = await Promise.all([
          fetch(`https://api.alquran.cloud/v1/surah/${id}/quran-uthmani`),
          fetch(`https://api.alquran.cloud/v1/surah/${id}/tr.diyanet`),
          fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
        ]);
        
        const arabicData = await arabicResponse.json();
        const turkishData = await turkishResponse.json();
        const audioData = await audioResponse.json();
        
        if (arabicData.code === 200) {
          const sName = turkishData.data.englishName;
          setSurahName(sName);
          const combinedAyahs = arabicData.data.ayahs.map((ayah: any, index: number) => ({
            number: ayah.number,
            numberInSurah: ayah.numberInSurah,
            arabicText: ayah.text,
            turkishText: turkishData.data.ayahs[index].text,
            audioUrl: audioData.data.ayahs[index].audio
          }));
          setAyahs(combinedAyahs);
          
          await setupPlaylist(combinedAyahs, sName);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
    
    return () => {
      TrackPlayer.reset();
    }
  }, [id]);

  const setupPlaylist = async (ayahList: Ayah[], name: string) => {
    await TrackPlayer.reset();
    const tracks: Track[] = ayahList.map((ayah, idx) => ({
      id: idx.toString(),
      url: ayah.audioUrl,
      title: `${name} - Ayet ${ayah.numberInSurah}`,
      artist: 'Mishary Alafasy',
      artwork: 'https://images.unsplash.com/photo-1597933924707-1b3ef1d1bb95?auto=format&fit=crop&q=80&w=300' 
    }));
    await TrackPlayer.add(tracks);
  };

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async (event) => {
    if (event.type === Event.PlaybackActiveTrackChanged && event.index != null) {
      setPlayingIndex(event.index);
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: event.index,
          animated: true,
          viewPosition: 0.5
        });
      }
    }
  });

  const togglePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const handleNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const handlePrev = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const selectAyah = async (index: number) => {
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: surahName, 
          headerStyle: { backgroundColor: BLACK }, 
          headerTintColor: GOLD,
        }} 
      />
      
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={GOLD} />
          <Text style={{ color: GOLD, marginTop: 10 }}>Ayetler İndiriliyor...</Text>
        </View>
      ) : (
        <>
          <FlatList
            ref={flatListRef}
            data={ayahs}
            keyExtractor={(item) => item.number.toString()}
            contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
            onScrollToIndexFailed={(info) => {
              const wait = new Promise(resolve => setTimeout(resolve, 500));
              wait.then(() => {
                flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
              });
            }}
            renderItem={({ item, index }) => {
              const isHighlight = playingIndex === index;
              return (
                <TouchableOpacity 
                  activeOpacity={0.8}
                  onPress={() => selectAyah(index)}
                  style={[styles.ayahContainer, isHighlight && styles.ayahHighlight]}
                >
                  <View style={styles.ayahHeader}>
                    <View style={styles.ayahBadge}>
                      <Text style={styles.ayahBadgeText}>{item.numberInSurah}</Text>
                    </View>
                  </View>
                  <Text style={styles.arabicText}>{item.arabicText}</Text>
                  <Text style={styles.turkishText}>{item.turkishText}</Text>
                </TouchableOpacity>
              );
            }}
          />

          {/* Spotify-style Player Bar */}
          <View style={styles.playerContainer}>
            <View style={styles.playerInfo}>
              <Text style={styles.playerTitle} numberOfLines={1}>{surahName}</Text>
              <Text style={styles.playerSubtitle}>Ayet {playingIndex + 1} / {ayahs.length}</Text>
            </View>
            
            <View style={styles.playerControls}>
              <TouchableOpacity onPress={handlePrev} style={styles.controlBtn}>
                <FontAwesome5 name="step-backward" size={20} color="#fff" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={togglePlayPause} style={styles.playPauseBtn}>
                <FontAwesome5 
                  name={isPlaying ? "pause" : "play"} 
                  size={20} 
                  color={BLACK} 
                  style={isPlaying ? {} : {marginLeft: 4}} 
                />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleNext} style={styles.controlBtn}>
                <FontAwesome5 name="step-forward" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ayahContainer: {
    backgroundColor: DARK_GRAY,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  ayahHighlight: {
    borderColor: EMERALD,
    borderWidth: 2,
    backgroundColor: '#064e3b20',
  },
  ayahHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  ayahBadge: {
    backgroundColor: '#064e3b',
    borderRadius: 16,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: EMERALD,
  },
  ayahBadgeText: {
    color: GOLD,
    fontWeight: 'bold',
    fontSize: 12,
  },
  arabicText: {
    color: GOLD,
    fontSize: 26,
    lineHeight: 44,
    textAlign: 'right',
    marginBottom: 12,
    fontFamily: 'System',
  },
  turkishText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
  },
  playerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(20, 20, 20, 0.95)',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: EMERALD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  playerInfo: {
    flex: 1,
    marginRight: 16,
  },
  playerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  playerSubtitle: {
    color: GOLD,
    fontSize: 12,
  },
  playerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  controlBtn: {
    padding: 8,
  },
  playPauseBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: GOLD,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
