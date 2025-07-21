# Parallel Routes

- Paralleel routes, aynı anda birden fazla bağımsız sayfayı aynı layout içerisinde ekrana basmaya yarar
- Her sayfa kendi bağımsız yükleme mantığına sahiptir (loading,error)
- @Slot: `@` işareti ile tanımlanan ve parallel route olaraka ekrana basılacak sayfalara denir
- Slot olarak tanımlanan sayfalara layout'a prop olarak gider
- Layout üzerinden slot olarak tanımlı sayfaları aynı anda ekrana basabiliriz

## Neden Components yerine Paralel Routes?

- Biz parallel routes kullanmadan aynı arayüzü 2-3 normal component oluşturarak da elde edebiliriz.
- Ama normal component'lar yerine @slot safıları yani `page.jsx`'leri ekrana basarız.
- `page.jsx`'in normal bir component'a göre avantajları var.
- bu avantajlar: SSR, SSG, metadata, middleware, loading-error

# Intercepting Routes

- Önizlemeli Route
- Bir sayfaya yönlendiren linke tıkladığımızda bir modal açıp sayfanın detaylarını modal üzerinden göstererir. Kullanıcı sayfayı yenilerse bu sefer modal yerine sayfanın kendisi gösterili.
- Bu özellik genel olarak detay/auth sayfalarında karşımıza çıkar.
- Kullanıcı deneyimini bozmadan ve SEO'yu olmsuz etkilemeden sayfa içeriklerini hızlıca kullanıcıya sunmamızı sağlar

# Image

- NEXT.js resimler için bütün modern projelerde ihtiyaç duyulan bir optimizasyona sahiptir
- Resimleri ekrana basarken `<img/>` elementi yerine next'in `<Image />` component'ını kullanırız.
- Image'la resimleri ekrana basarken next resmi bir çok optimizasyondan geçririr.
- Resimleri modern tarayıcılar için daha uyumlu daha düşük boyutta daha kaliteli tutmaya yarayan `.webp` formatına çevirir
- Resimlerin `1920x1080` gibi çözünürlük değerlerini ekrana boyutuna göre optimize eder.
- Resimler için kalite optimiasyonu da yaprak resim boyutlarını büyük ölçüde düşür
- Bu sayede next projeleri daha performanlı ve daha iyi SEO'lu olur

# Server Side Rendering vs Client Side Rendering

- Client side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` ve `boş html` dosyası indiririz.
- İndirilen js kodu `kullanıcının cihazında` çalışır ve html'i doldurur

- Server side rendering yöntemi uygulanan bir sayfaya girdiğimizde `js kodu` `sunucuda` çalışır ve `html` kodu `sunucuda` oluşur.
- Sunucuda oluşan `dolu html` dosyasını client indirir ve ekrana basar

## SSR Faydaları

- JS kodu kullanıcının cihazında değilde sunucuda çalışması daha hızlı sonuç üretir bu daha kısa yüklenme süresi demek.
- SEO açısından dolu html dosyasını indirmek önemlidir, bu sayede google'ın robotları sayfa içeriğini boş zannedip kötü seo score'u vermez

## Nasıl SSR vey CSR Kullanırız

- NEXT.js'de iki farklı component türü vardır:
- Server Component: İçeriğini server'da render eder
- Client Component: İçeriğini client'da render eder

- Next.js biz aksini belirtmedikçe bütün componentları `server component` yapar
- Eğer bileşen dosyasının en üst kısmında `use client` yazarsak `client component` olur
- Next.js bizden olabilidiğince çok `server component` kullanmamızı ister (HIZ - SEO)
- Her component'ı server component yapamıyoruz. Kullanıcı etkileşimi gerektiren (onClick,onSubmit) veya react hooks (useState,useEffect) kullanan componentlar client component olmalı

- Not: Next.js bizden olabildiğince çok server component kullanmamızı istediği için bir sayfa içerisinde kullanıcı etkileşimi gerektiren bir yer olduğunda bütün sayfayı client component yapmak yerine sadece ilgili kısmı ayrı bir component yapıp ayrı component'ı client component yaparız

## Component'ların iç içe kullanımı

- server component içerisinde client component kullanırsak
- kapsayı component `server` alt component `client` olur

- client component içerisinde server component kullanırsak
- kapsayı component `client` alt component `client` olur

## todo örnek yap bununla alakalı
