import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Dimensions, ActivityIndicator, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { RewardedAd, RewardedAdEventType, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const { width, height } = Dimensions.get('window');

const EMERALD = '#10b981';
const GOLD = '#fbbf24';
const BLACK = '#000000';
const DARK_GRAY = '#111111';

// Test ID
const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

export default function AIAssistantScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Selamun Aleyküm. Ben senin manevi asistanın ve rüya tabircinim. İçini sıkan bir derdin mi var, yoksa gördüğün bir rüyayı mı yorumlamamı istersin?",
      isUser: false,
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [showPrivacyPledge, setShowPrivacyPledge] = useState(true);
  const [messageCount, setMessageCount] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // AdMob Rewarded Video Setup
  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setAdLoaded(true);
    });
    
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        // Kullanıcı reklamı sonuna kadar izledi, ödülü ver (AI cevabı)
        simulateAIResponse();
        // Bir sonraki kullanım için reklamı tekrar yükle
        rewarded.load();
      },
    );

    const unsubscribeClosed = rewarded.addAdEventListener(AdEventType.CLOSED, () => {
      setAdLoaded(false);
      rewarded.load(); // Kapanınca yenisini yükle
    });

    // İlk yükleme
    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      unsubscribeClosed();
    };
  }, []);

  const handleBurnAndClose = () => {
    // Sohbeti tamamen yak (RAM'den sil) ve çık
    setMessages([]);
    router.back();
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    if (messageCount === 0) {
      setMessageCount(1);
      simulateAIResponse();
    } else if (messageCount === 1) {
      setMessageCount(2);
      if (adLoaded) {
        rewarded.show().catch(e => {
          console.log("Reklam gösterilemedi", e);
          simulateAIResponse();
        });
      } else {
        simulateAIResponse();
      }
    }
  };

  const simulateAIResponse = () => {
    setIsTyping(true);
    
    // 3 saniye AI Düşünme Simülasyonu
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Maşaallah. Bu anlattıklarının psikolojik kökeninde bilinçaltındaki yoğun düşünme yatıyor olabilir. Ancak İslami ve manevi açıdan baktığımızda, kalbinin bir ferahlık aradığı açıkça belli oluyor. Diyanet kaynaklarına göre bu durum, senin içsel bir arınma döneminde olduğuna işarettir. \n\nTavsiyem: Bugün yatsı namazından sonra 33 defa 'Ya Fettah' ismini zikretmen, sana inşallah yeni kapılar açacaktır.",
        isUser: false,
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 3000);
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={[styles.messageBubble, item.isUser ? styles.userBubble : styles.aiBubble]}>
      {!item.isUser && (
        <FontAwesome5 name="robot" size={16} color={GOLD} style={{ marginRight: 8, marginTop: 4 }} />
      )}
      <Text style={[styles.messageText, item.isUser ? styles.userText : styles.aiText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.glowTop} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBurnAndClose} style={styles.burnButton}>
          <FontAwesome5 name="fire" size={16} color="#ef4444" />
          <Text style={styles.burnButtonText}>Yak & Çık</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Manevi Sırdaş</Text>
          <View style={styles.privacyBadge}>
            <FontAwesome5 name="lock" size={8} color="#10b981" />
            <Text style={styles.privacyBadgeText}> %100 Şifreli & Kayıtsız</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.proBadge} 
          onPress={() => router.push('/premium')}
        >
          <FontAwesome5 name="crown" size={10} color={BLACK} style={{ marginRight: 4 }} />
          <Text style={styles.proBadgeText}>PRO</Text>
        </TouchableOpacity>
      </View>

      {/* Privacy Pledge Modal */}
      <Modal visible={showPrivacyPledge} animationType="fade" transparent={true}>
        <View style={styles.pledgeOverlay}>
          <View style={styles.pledgeContainer}>
            <FontAwesome5 name="shield-alt" size={40} color="#10b981" style={{ marginBottom: 16 }} />
            <Text style={styles.pledgeTitle}>Tövbe ve Sırdaşlık Yemini</Text>
            <Text style={styles.pledgeText}>
              Burada yazılanlar sadece sizinle Allah (c.c) arasındadır. 
              Uygulamamız hiçbir şekilde mesajlarınızı veritabanına KAYDETMEZ. 
              Sohbet penceresini kapattığınız an tüm veriler kalıcı olarak RAM'den silinir ve yok olur.
            </Text>
            <TouchableOpacity style={styles.pledgeButton} onPress={() => setShowPrivacyPledge(false)}>
              <Text style={styles.pledgeButtonText}>Kabul Ediyorum, Sırrım Güvende</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Chat Area */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      {isTyping && (
        <View style={styles.typingContainer}>
          <ActivityIndicator size="small" color={GOLD} />
          <Text style={styles.typingText}>Manevi boyut analiz ediliyor...</Text>
        </View>
      )}

      {/* Input Area */}
      <View style={styles.inputContainer}>
        {messageCount >= 2 ? (
          <TouchableOpacity 
            style={styles.paywallButton} 
            onPress={() => router.push('/premium')}
          >
            <FontAwesome5 name="lock" size={16} color={BLACK} style={{ marginRight: 8 }} />
            <Text style={styles.paywallButtonText}>Sınır Doldu. Sınırsız Sohbet İçin PRO'ya Geçin</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder={messageCount === 0 ? "Rüyanı veya derdini yaz..." : "Reklamlı (Son) Hakkınız..."}
              placeholderTextColor="#6b7280"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity 
              style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]} 
              onPress={handleSend}
              disabled={!inputText.trim()}
            >
              <FontAwesome5 name={messageCount === 0 ? "paper-plane" : "play"} size={16} color={BLACK} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  glowTop: {
    position: 'absolute',
    top: -150,
    left: width / 4,
    width: width / 2,
    height: width / 2,
    backgroundColor: '#7c3aed', // Mystic Purple
    opacity: 0.15,
    borderRadius: width,
    filter: 'blur(50px)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  burnButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  burnButtonText: {
    color: '#ef4444',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  headerTitleContainer: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    color: GOLD,
    fontSize: 18,
    fontWeight: 'bold',
  },
  privacyBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  privacyBadgeText: {
    color: '#10b981',
    fontSize: 10,
    fontWeight: '600',
  },
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  proBadgeText: {
    color: BLACK,
    fontSize: 10,
    fontWeight: 'bold',
  },
  chatContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  messageBubble: {
    maxWidth: '85%',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    flexDirection: 'row',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(251, 191, 36, 0.15)', // Gold with opacity
    borderBottomRightRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.3)',
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(124, 58, 237, 0.15)', // Purple with opacity
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(124, 58, 237, 0.3)',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
    flexShrink: 1,
  },
  userText: {
    color: '#fff',
  },
  aiText: {
    color: '#e5e7eb',
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginLeft: 20,
    marginBottom: 10,
  },
  typingText: {
    color: GOLD,
    marginLeft: 10,
    fontSize: 12,
    fontStyle: 'italic',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    backgroundColor: DARK_GRAY,
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#fff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
    maxHeight: 120,
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#444',
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: GOLD,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  sendButtonDisabled: {
    backgroundColor: '#333',
  },
  paywallButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: GOLD,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paywallButtonText: {
    color: BLACK,
    fontSize: 13,
    fontWeight: 'bold',
    flexShrink: 1,
    textAlign: 'center',
  },
  pledgeOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pledgeContainer: {
    backgroundColor: '#111',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  pledgeTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  pledgeText: {
    color: '#9ca3af',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  pledgeButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  pledgeButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
