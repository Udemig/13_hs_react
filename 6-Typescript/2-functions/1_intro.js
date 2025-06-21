/*
 * Function Type
 * Typescript'de fonksiyonların tipini tanımlarken kastımız fonksiyınun aldığı parametrelerin ve dönüş değerinin tipini tanımlarız
 */
// normal function
function add(a, b) {
    return "Hesaplama Sonucu: " + (a + b);
}
var x = add(56, 123);
// arrow function
var add2 = function (a, b) {
    return a + b;
};
var y = add2(56, 123);
add2(1290, 435643);
// Örnek 1
// Sayının pozitif olup olmadığını kontrol eden fonksiyon
var isPositive = function (sayi) {
    return sayi > 0 ? true : false;
};
var result = isPositive(10);
console.log(result);
// Örnek 2
// Paramatere olarak aldığu sayıların ortalamasını hesaplayan fonksiyon
var average = function (arr) {
    var toplam = arr.reduce(function (acc, sayi) { return acc + sayi; }, 0);
    return toplam / arr.length;
};
var result2 = average([1, 2, 3, 4, 5]);
console.log(result2);
