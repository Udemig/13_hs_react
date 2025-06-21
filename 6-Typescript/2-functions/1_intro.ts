/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlarken kastımız fonksiyınun aldığı parametrelerin ve dönüş değerinin tipini tanımlarız
 */

// normal function
function add(a: number, b: number): string {
  return "Hesaplama Sonucu: " + (a + b);
}

const x = add(56, 123);

// arrow function
const add2 = (a: number, b: number): number => {
  return a + b;
};

const y = add2(56, 123);

add2(1290, 435643);

// Örnek 1
// Sayının pozitif olup olmadığını kontrol eden fonksiyon
const isPositive = (sayi: number): boolean => {
  return sayi > 0 ? true : false;
};

const result = isPositive(10);

console.log(result);

// Örnek 2
// Paramatere olarak aldığu sayıların ortalamasını hesaplayan fonksiyon
const average = (arr: number[]): number => {
  const toplam = arr.reduce((acc, sayi) => acc + sayi, 0);

  return toplam / arr.length;
};

const result2 = average([1, 2, 3, 4, 5]);

console.log(result2);
