## Haftalık Kontrol Listesi (5 dakika)
- [ ] Google Search Console → Kapsam hatası var mı?
- [ ] GA4 → Bu haftaki ziyaretçi sayısı geçen haftaya kıyasla nasıl?
- [ ] Vercel dashboard → Son deploy başarılı mı?
- [ ] AdSense / Yandex → Reklam gösterimi aktif mi?

## Aylık Kontrol (15 dakika)
- [ ] Search Console → En çok tıklanan sayfalar değişti mi?
- [ ] Yeni eklenecek sembol var mı? (Google Trends'e bak)

## Acil Müdahale Gerektiren Durumlar
- Vercel deploy hatası → GitHub Actions / Vercel loguna bak
- Trafik %50+ düştü → Search Console'da "Manuel İşlem" cezası var mı kontrol et
- AdSense devre dışı bırakıldı → AdSense panelinde uyarıyı oku, içerik politikası ihlali olabilir

## 🆕 Yeni Sembol Ekleme Akışı (ZORUNLU)

Yeni rüya tabiri içerikleri eklendikten sonra aşağıdaki 3 adım **sırasıyla** çalıştırılmalıdır.
`valid-slugs.ts` güncellenmezse yeni sembol sayfaları Middleware tarafından 404 ile engellenebilir!

```bash
# 1. İçerikler eklendikten sonra slug index'i yenile
node scripts/generate-slug-index.js

# 2. Middleware listesini otomatik güncelle (ISR saldırı koruması)
node scripts/update-valid-slugs.js

# 3. GitHub'a gönder (Vercel otomatik deploy başlatır)
git add . && git commit -m "feat: yeni semboller eklendi" && git push
```

