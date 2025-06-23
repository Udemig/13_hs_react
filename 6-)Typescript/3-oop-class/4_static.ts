/*
 ! Static
 * Static anahtar kelimesi özellike veya methodun sunufun örneğini oluşturmaya gerek kalmadan erişilebilir olmasını sağlar.
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz.
 */

// Static Method
class Mathematic {
  x: number = 10;

  add(y: number) {
    console.log(this.x + y);
  }

  static multiply(a: number, b: number) {
    console.log(a * b);
  }
}

// static olmayan add methoduna erişelim
// normal methodlara sadece class'tan alınan örnekler üzerinden erişilebilir.
const math = new Mathematic();
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

class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(new_isim: string) {
    this.isim = new_isim;
    Ogrenci.ogrenciSayisi++;
  }
}

new Ogrenci("Ahmet");
new Ogrenci("Mehmet");
new Ogrenci("Ayşe");
new Ogrenci("Zeynep");
new Ogrenci("ali");

console.log(Ogrenci.ogrenciSayisi);
