/*
 ! Static
 * Static anahtar kelimesi özellike veya methodun sunufun örneğini oluşturmaya gerek kalmadan erişilebilir olmasını sağlar.
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz.
 */
// Static Method
var Mathematic = /** @class */ (function () {
    function Mathematic() {
        this.x = 10;
    }
    Mathematic.prototype.add = function (y) {
        console.log(this.x + y);
    };
    Mathematic.multiply = function (a, b) {
        console.log(a * b);
    };
    return Mathematic;
}());
// static olmayan add methoduna erişelim
// normal methodlara sadece class'tan alınan örnekler üzerinden erişilebilir.
var math = new Mathematic();
math.add(10);
// static methoda erişelim
// doğrudan class ismi üzerinden örnek almadan erişilebilir.
Mathematic.multiply(10, 20);
// static olmayan method (class'ın örneği üzerinden tarih verisine erişmesi gerekir)
new Date("10-01-20205").toLocaleDateString();
// static method (class'ın örneği üzerinden tarih verisine erişmesi gerekmez)
Date.now();
// Static Property
// Doğrudan class üzerinden erişebileceğimiz değişkenler
var Ogrenci = /** @class */ (function () {
    function Ogrenci(new_isim) {
        this.isim = new_isim;
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
new Ogrenci("Ahmet");
new Ogrenci("Mehmet");
new Ogrenci("Ayşe");
new Ogrenci("Zeynep");
new Ogrenci("ali");
console.log(Ogrenci.ogrenciSayisi);
