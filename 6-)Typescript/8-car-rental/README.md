# Kütüphaneler

- motion
- react-paginate
- react-router-dom
- react-select
- tailwindcss

# API Kaynakları

- **Araç Verileri**
- [Open Data Soft](https://public.opendatasoft.com/explore/dataset/all-vehicles-model/table/?sort=modifiedon)

- **Araç Görselleri**
- [Imagin Studios](https://docs.imagin.studio/)

# Proje Yayınlama Adımları

1. Projenizi Hazırlayın
2. Projeyi Githuba Yükleyin
3. Hosting Platformu Seç ve Deploy Et (127.657.212314.8797.214324)
4. Alan Adı Domain (Satın Al) ve DNS Ayarlarını Yap (www.aracınıbul.com)
5. SEO kontrolü / iyileştirilmesi

# Build (Derleme)

- Projenin dağıtıma hazır hale getirme işlemidir
- `npm run build` optimize edilmiş JS ve CSS'i oluştururuz

# Hosting (Barındırma)

- Frontend projesinin dosylarının (html,css,js) internet üzerinden erişilebilir hale gelmesi için barındırıldığı sunucu

## Hosting Seçenekler

1. Modern Çözümler

- Projeyi github reposu üzerinden tek tıkla yayınlayabiliyoruz.
- Otomatik SSL sertifikası
- Otomatik CDN
- Otomatik CI/CD (Sürekli Dağıtım)

- Vercel \*
- Netlify
- Firebase
- AWS
- Azure

2. Klasik Çözümler

- Kendi sunucumuzu kiralayıp, her şeyi linux komutları kendimiz kurup yöneteriz.
- VPS (Virtual Private Server)

- IBM
- Digital Ocean
- Contabo

# Deploy (Yayınlama)

- Projenin geliştirme ortamından canlı (production) ortamına katarma süreci.
- Örnek: Github'daki kodun vercel sunucularına yüklenmesi

# Domain (Alan Adı)

- Kullanıcıların, web sitesine ulaşmak için tarayıcıya yazdığı isimdir.
- Projeyi deploy edip bir hosting sunucuna yüklediğimizde, projeye bir ip adresi (192.168.1.0) üzerinden erişleibilir.
- Bu ip adresi akılda kalıcı olmadığından ve insanlar aratamıyacağından dolayı daha akılda kalıca ve kelimelerden oluşan adresleri tercih ederiz.
- Bu kontada kendimize bir domain adresi (alan adı) kiralamız gerekiz.

- Godaddy
- Namecheap
- İsimtescil
- Natro

# DNS (Domain Name System)

- Domain adresinin doğru ip adreisne yönlendirilmesini sağlayan sistemdir
- aracinibul.com ====> 977.1243.87.34

# Index

- Proje ilk yayınladığında sadece url üzerinden erişlebilir ama site ismini aratan kullanıcalar erişemez
- Google aramalarında sitenin çıkması için google tarafından indexlenmesi gerekir.
- Bu süreç 1 haftaya kadar sürebilir

# SEO

- Search Engine Optimization (Arama Motoru Optimizasyonu)
- Site içeriğini arama motorlarına ugyun hale getirip sitenin seo'sunu arttırarak üst sıralarda çıkmasını sağlayabiliriz.
- SEO etki eden bir çok faktör vardır:

1. Site İçeriği
   \*\* bundan dolayı tek sayfalık olucak çoğu sitede içeirik zenginliği için blog sayfaları görürüz
   \*\* resimlerin alt niteliği ✔︎
   \*\* butonların isimleri (name) değerleri ✔︎
   \*\* inputların htmlfor değerleri ✔︎
   \*\* h1,p,b,semantik etiketler ✔︎
   \*\* anahtar kelimler ✔︎

2. Zengin bir title içeriği ✔︎
3. Meta Etiketleri (keywords,descriptipn,author,robots) ✔︎
4. Sitemap.xml + robots.txt dosyalarını oluştur ✔︎
5. 404 Sayfası oluştur ✔︎
6. Url'leri seo'ya uygun yap ✔︎
   \*\* `www.furkanevin.com/car/123` yerine
   \*\* `www.furkanevin.com/car/bmw-m3-123` tercih edilmeli

7. Sosyal medya hesapları oluşturup ve opengraph etiketleri bağlı ✔︎
8. Backlink: Farklı sitelerden kendi sitenize bağlantı
