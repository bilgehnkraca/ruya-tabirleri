# Vercel Deployment Notes

Bu proje Vercel üzerine entegre edilmiş olup, CI/CD (Sürekli Entegrasyon ve Dağıtım) süreçleri tam otomatiktir.

## Otomatik Deploy (Yayınlama) Nasıl Çalışır?

1. **GitHub Entegrasyonu**: Proje, `bilgehnkraca/ruya-tabirleri` deposuna (repository) bağlıdır.
2. **Push ile Tetikleme**: `main` dalına (branch) yapılan her `git push` işlemi Vercel'i otomatik olarak tetikler.
3. **Build Süreci**: Vercel arka planda `npm run build` komutunu çalıştırır, sayfaları statik olarak oluşturur ve yeni sürümü yayına alır.
4. **Manuel Müdahale**: Vercel paneline girip manuel olarak "Deploy" butonuna basmanıza **gerek yoktur**.

*Not: Eğer Vercel'de bir derleme (build) hatası alırsanız, GitHub son işleme onay işareti yerine "X" koyacaktır. Bu durumda yerel makinenizde (bilgisayarınızda) `npm run build` komutunu çalıştırarak hatayı tespit edebilirsiniz.*
