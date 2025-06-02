# Gerekli kütüphaneler

- @testing-library/jest-dom
- @testing-library/react
- axios
- millify
- react-simple-maps
- react-router-dom
- react-icons
- tailwindcss
- @reduxjs/toolkit
- react-redux
- redux-thunk

# Kaynaklar

- Detay Verileri İçin API:
  https://rapidapi.com/api-sports/api/covid-193

- Toplam Verileri İçin API:
  https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/

- Harita Dosyası:
  https://github.com/topojson/world-atlas

# Describe

```js
// describe: aynı olayla alakalı birden fazla test olduğu durumlarda bu testleri gruplandırmamıza yarar ve beforeEach, afterEach gibi özellikleri kullanmamızı sağlar
describe("statics component testleri", () => {
  // her testin öncesinde çalışır
  beforeEach(() => {
    console.log("-----beforeEach çalıştı------");
  });

  // her testin sonrasında çalışır
  afterEach(() => {
    console.log("-----afterEach çalıştı------");
  });

  // bütün testlerin öncesinde bir kez çalışır
  beforeAll(() => {
    console.log("-----beforeAll çalıştı------");
  });

  // bütün testlerin sonrasında bir kez çalışır
  afterAll(() => {
    console.log("-----afterAll çalıştı------");
  });

  test("bileşen renderlandığında ekrana loader gelir", () => {
    console.log("test 1 çalıştı");
  });

  test("api'dan hata gelirse ekrana hata mesajı gelir", () => {
    console.log("test 2 çalıştı");
  });

  test("api'dan veri gelirse ekrana veriler gelir", () => {
    console.log("test 3 çalıştı");
  });
});
```

# Mock

- Test yazarken sürekli olarak karşınızıa çıkıcak bir terim.
- Bir değişkenin veya fonksiyonun sahte bir versiyonun oluşturur. Yani orjinal fonksiyonu taklit eder diyebiliriz.
- Mock fonksiyonlarının bize sağladıkları:
- - çağrıldığında hangi değeri döndürüceğini biz belirleyebiliryruz
- - fonksiyon çağrıldı mı kontrolü yapabiliyoruz
- - fonksiyon doğru parametreleri aldı mı kontrolü yapabiliyoruz
- - fonksiyon doğru değeri return ettimi kontrolü yapabiliyorusz

# Yazı İçiriğni Kontrol Etme

1. önce elementi seçip ardından yazı içierği ekranda var mı diye kontrol edilebilir

2. elementi seçerken yazısına göre seçersek zaten element ekranda olmayınca hata vericeği için expecte gerek kalmaz

```js
// 1-Yol) ülke ismi ekranda mı
const h1 = screen.getByRole("heading");
expect(h1).toHaveTextContent(mockDetailData.country);

// 2-Yol) ülke ismi ekranda mı
screen.getByRole("heading", { name: mockDetailData.country });
```

# Selector Anatomisi

- Selector, ekrandaki elementleri almak için kullandığımız methodlardır.
- Seçiciler 3 ana parçadan oluşur.

1. Yöntem:

- Get: Ekradaki elementi alamazsa hata fırlatır
  Bir elementin ekranda olduğunu kontrol etmek istediğimiz zaman get kullanrız.
- Query: Ekrandaki elementi alamazsa hata vermez sadece null döndürür
  Bir elementin ekranda olmadığını kontrol etmek istediğimiz zaman query kullanrız.
- Find: Ekrana asenkron olarak basılan elementleri seçemek için kullanılır
  Eğer api isteğini mock'lamadıysak, api isteği sonrasında ekrana basılan elementleri seçmek için kullanırız.

2. All İfadesi:

- Eğerki ekrandan aynı koşula uyan birden fazla element almak istiyorsak kullandığımız yöntemin devamına ekleriz.
- All ifadesi kullanrsak dönen cevap her zaman dizi içerisinde olur
- getAllBy | queryAllBy | findAllBy
- - örn: ekrandaki bütün butonları almak isteidğimiz seneryoda `getAllByRole("button")` kullanbiliriz

3. Sorgu Methodu:

- Hangi yöntemle elementi seçiceğimi belirleynm method:
- ByRole
- ByLabelText
- ByText
- ByDisplayValue
- ByAltText
- ByTitle
- ByTestId
