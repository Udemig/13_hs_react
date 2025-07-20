# Next.js Routing

- Bir next.js projesinde routing için 2 farklı yöntem vardır.
- App Router (modern yöntem): v14 ile beraber geldi
- Pages Router (eski yöntem) - v13 öncesi için kullanıyor

## App Router

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar /src/app klasörü altında olmalıdır.
- `/app` klasörü içerisinde tanımlanan ve `page.jsx` dosyasına sahip klasörler oto. bir sayfa olarak tanımlanır
- `page.jsx` dosyası içerisinde bir react component'ı export edilir.
- `page.jsx` dosyasını kapsayan klasörün adı sayfanın url'deki pathi olur
- Next.js bu sayfayı tespit edip otomatik olarak kendi router'ına ekler

## Nested Routes - İç İçe Yollar

- örn:
- /profile > profilini görüntüle
- /profile/friends > arkadaşlarını görüntüle
- /profile/edit > profilini düzenle

## Dynamic Routes - Dinamik Yollar

- Url'deki parametreye göre sayfa içeriğinin değiştiği detay sayfalarında kullanırız
- `/products/10` `/videos/sdgh34` `/cars/tesla`
- Bir dinamik sayfa tanımlamak için klasör oluştururken [] içerisine parametrenin adını yazarız.
- Component ise bu parametreye proplar aracılığıyla erişir
- `/products/[id]`

## Link - Yönlendirme

- Kullanıcıyı yöndlendirmek için kullanırız.
- `href` propu ile yönlendirilecek sayfayı belirleriz.
- `href` değerini `.` yaparsak bir önceki path yönlendirir

## Catch All Segments

- Birden fazla parametreye erişme yöntemi
- Bu yöntemde parametre sayısı belirsiz olduğu için parametreler bir dizi içerisinde gelir.

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-17
- `/docs/[...slug]`

## Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durumunu belirlemek için kullandığımız bileşendir.

- Bir sayfa grubunun veya projedeki bütün sayfların ortak kullancığı bileşenleri layout'da tanımlayarak kod tekrarını önleriz

- Layout klasörünü oluşturduğumuz konuma bağlı olarak etkileyiceği sayfalar değişir:
- - Eğer app klasörü içerisinde oluşturursak bütün sayfaları etkiler
- - Eğer layout dosyasını bir route grubu içierisinde oluşturursak sadece o route grubundaki sayfalara etki eder

## Template

- Layout ile aynı görevi yapar
- Layput'dan tek farkı sayfa değişince tuttuğu state sıfırlanır

## Not Found - 404 Sayfası

- Next'in varsayılan bir 404 sayfası vardır.
- Bu 404 sayfasına özelleştirmek istersek `not-found.jsx` dosyası oluşturmamız yeterli

## Metadata

- Next.js'de react'dan farklı olarak he sayfaya özgü ayrı bir metadata tanımlayabiliyoruz
- Bu sayede next.js projeler SEO açısınadn çok daha iyi olur
- Bir sayfanın metadatasını tanımlamak istiyorsak o sayfada `metadata` isminde bir nesne export etmeliyiz
- Dinamik sayfalarda metadayıda dinamik yapmak isterkse `generateMetadata()` fonksiyonunu kullanabiliriz
- generateMetadata component'ın aldığı propları parametre olarak alır ve return ettiği nesne sayfanın metadatası olur

# Özel Dosyalar

- `page.jsx` > sayfa tanımlar
- `layout.jsx` > sayfa düzeni tanımlar
- `template.jsx` > sayfa düzeni tanımlar
- `not-found.jsx` > 404 sayfası tanımlar

- `loading.jsx`
- - bir bileşen await ile promise'i beklediği süre boyunca otmatik olarak ekrana gelir
- - loading dosyasunı oluşturduğunuz klasöre göre etki ettiği sayfalar değişir
- - oluştrduğunuz klasörde layout component'ı varsa children nerde render edilirse loader oraya gelir

- `error.jsx`
- - bir bileşenden hata tetiklenirse otomatik olarak ekrana gelir
- - örneğin bir api isteği başarısız olduğund veya throw new Error() ile hata fırlatılırsa devreye girer
- - loading gibi oluşturulduğu klasöre bağlı sayfaları etkiler
- - `use client` kullanmak zorunlu
- - `hata verisini` ve `api isteğini tekrar atıcak fonksiyonu` prop olarak alır
