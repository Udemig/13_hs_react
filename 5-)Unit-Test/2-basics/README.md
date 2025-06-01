# Yazılım Neden Test Edilmeli ?

- Çünkü hatalı çalışan bir yazılım, kullanıcıya, şi5kete , geliştiriciye, zaman, para ve itibar kaybettir.
- Testler ise bu tarz hataların son kullanıcıya ulaşmasını büyük oranda engeller ve:

1. Hataları erken yakalarız
2. Yazılımın kalitesini arttır
3. Refactor Güvencisi
4. Otomasyon Süreci

Bu yüzden sektördeki neredeyse bütün projeler çeşitli test yöntemleri ile test edilir.

# Unit Test Kütüphaneleri

- react-testing-library
- jest

# Unit Test Temel Kavramlar

## Selectors - Seçici Methodlar

- Screen nesnesi aracılığıyla erişlen metholardır.
- Test içerisinde renderlanan jsx elementlerini çağırmaya yarar.
- https://testing-library.com/docs/queries/about/
- İlk tercihimiz getByRole, olmazsa diğerlerini kullanırız

### HTML Element Rolleri

- Çoğu html elemetinin görevini temsil eden bir rolü vardır.
- Bazen etiket ismi ile aynı bazen farklı olabilir.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

## Matchers - Kontrol Methodları

- Matcherlar expect ile birlikte kullanılan bir element veya değişkeni kontrol etmek için kullanılır

- İki çeşit matcher vardır:
- DOM (Element): https://github.com/testing-library/jest-dom
- Değişken: https://jestjs.io/docs/using-matchers

# Testi Ne Zaman Yazarız

## TDD

- Test Driven Development
- Koddan önce testin yazılması
- red to green test
- Zaten yalıcak component'ın algoritması belli olduğu için kodundan önce testini yazabiliriz

## Diğer Yöntem

- Önce kodu ardından testi yazdığımız yöntem
