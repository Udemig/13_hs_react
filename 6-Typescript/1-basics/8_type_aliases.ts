/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'de var olan tiplerin yanı sıra birkaç ts tipini kullandık
 * Gerçej projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihityaç duyabiliyoruz.
 * Bunları tanımlak için type anahtar kelimesini kullanıyoruz.
  
 * Neden ihtiyaç duyuyoruz?
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde birden çok noktada kullanmamız gerekebiliyoruz.
 * * Bu noktada keni type'ımızı oluşturup onu export edip ihtiyç duyulan her noktada kullanabiliriz.
*/

// Örnek- 1
// kendi özel metin ismindeki tipimizi oluşturalım
type metin = string;

// kendi oluşturduğumuz tipi kullanabiliriz.
let kullanici_adi: metin = "Ali";

// Örnek - 2
// Uçuş projesinde sıkça kullandığımız enlem boylam değerleri var
const xflightCoords: [number, number] = [34.54654, 45.2342342];
const yflightCoords: [number, number] = [12.23423, 26.2131233];
const zflightCoords: [number, number] = [12.23423, 26.2131233];

const flightHistory: [number, number][] = [
  [34.54654, 45.2342342],
  [12.23423, 26.2131233],
  [12.23423, 26.2131233],
];

// Sıklıkla aynı tipteki değeri kullandığımız yerde kod tekrarını önlemek için type alias kullanabiliriz.
type Coords = [number, number];

const aFlightCoords: Coords = [34.54654, 45.2342342];
const bFlightCoords: Coords = [12.23423, 26.2131233];
const cFlightCoords: Coords = [12.23423, 26.2131233];

const flightHistory2: Coords[] = [
  [34.54654, 45.2342342],
  [12.23423, 26.2131233],
  [12.23423, 26.2131233],
];

// TODO: Daha fazla örnek
