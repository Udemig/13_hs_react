/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'de var olan tiplerin yanı sıra birkaç ts tipini kullandık.
 * Gerçek projelerde o anki yaptığımız işe özel spesifik veri tiplerine ihtiyaç duyabiliyoruz.
 * Bunları tanımlamak için type anahtar kelimesini kullanıyoruz.
  
 * Neden ihtiyaç duyuyoruz?
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde birden çok noktada kullanmamız gerekebiliyoruz.
 * * Bu noktada kendi type'ımızı oluşturup onu export edip ihtiyç duyulan her noktada kullanabiliriz.
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

//! Örnek - Aynı nesne tipini birden fazla kullanmamız gereken bir durum olsun:
let user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "Ayşe",
  age: 23,
};

let users: { id: number; name: string; age: number }[] = [user1, user2];

//! Type aliases ile tekrara düşen tipi ayrıca tanımlayıp kod tekarını önleyebiliriz
type User = { id: number; name: string; age: number };

let user3: User = {
  id: 1,
  name: "Ali",
  age: 20,
};

let user4: User = {
  id: 2,
  name: "Ayşe",
  age: 23,
};

let users2: User[] = [user3, user4];

//! E-Ticaret Sitesi İçin Örnek
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: string;
  inStock: boolean;
};

let product1: Product = {
  id: 1,
  name: "Kırmızı Elbise",
  price: 100,
  category: "Elbise",
  size: "M",
  inStock: true,
};

let product2: Product = {
  id: 2,
  name: "Mavi Elbise",
  price: 150,
  category: "Elbise",
  size: "L",
  inStock: false,
};

let products: Product[] = [product1, product2];
