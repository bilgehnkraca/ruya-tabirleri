import React, { useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import PartnerAd from '../../components/PartnerAd';

const BLACK = '#000000';
const GOLD = '#fbbf24';

export default function DictionaryScreen() {
  const webviewRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  if (Platform.OS === 'web') {
    const Iframe = 'iframe' as any;
    return (
      <View style={styles.container}>
        <View style={styles.adContainer}>
          <PartnerAd />
        </View>
        <Iframe 
          src="https://www.ruyasozlugunuz.com" 
          style={{ width: '100%', height: '100%', border: 'none' }} 
        />
      </View>
    );
  }

  // Bu JavaScript kodu web sitesi yüklenir yüklenmez çalışır.
  // Amaç: Sitenin kendi Header ve Footer'ını gizleyerek (Display: none) uygulamanın yerel bir sayfasıymış hissi vermek.
  const INJECTED_JAVASCRIPT = `
    (function() {
      // Örnek sınıf isimleri. Gerçek sitenizin header/footer class veya id'lerine göre güncelleyin.
      var header = document.querySelector('header');
      if(header) header.style.display = 'none';
      
      var footer = document.querySelector('footer');
      if(footer) footer.style.display = 'none';

      // Sitenizin varsa kendi mobil menüsünü de gizleyebilirsiniz
      var mobileMenu = document.querySelector('.mobile-menu');
      if(mobileMenu) mobileMenu.style.display = 'none';
      
      true; // Note: this is required, or you'll sometimes get silent failures
    })();
  `;

  return (
    <View style={styles.container}>
      {/* WebView'in üstüne çok şık bir Partner Reklamı Gömüyoruz */}
      <View style={styles.adContainer}>
        <PartnerAd />
      </View>

      {/* Web Sitesini Native Gibi Gösteren Kısım */}
      <WebView 
        ref={webviewRef}
        source={{ uri: 'https://www.ruyasozlugunuz.com' }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(event) => {}} // JS'den gelen mesajları dinlemek için
        onLoadEnd={() => setIsLoading(false)}
        style={styles.webview}
        bounces={false} // iOS'te sayfanın yaylanmasını kapatarak yerel hissi artırır
        showsVerticalScrollIndicator={false}
      />

      {/* Yüklenirken Gösterilecek Spinner */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={GOLD} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  adContainer: {
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Status Bar boşluğu için
    paddingBottom: 8,
    backgroundColor: '#111',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  webview: {
    flex: 1,
    backgroundColor: BLACK, // Arka planın sırıtmaması için
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  }
});
