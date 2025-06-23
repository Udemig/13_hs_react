/*
 ! Readonly
 * readonly anahtar kelimesi class'ın / nesnenin özelliklerine sadece okunabilir olmasını sağlar.

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıflarda sadece constructor içinde atanabilir.
 * * Nesnelerde ise sadece oluşturulurken atanabilir.
*/
var person = {
    name: "Ahmet",
    soyad: "Yılmaz",
    tcNo: "11111111111",
};
person.name = "Mehmet";
person.soyad = "Kaya";
// person.tcNo = "123142342345"; //! readonly olduğu için değiştirilemez
// Classlardaki Kullanımı
var Book = /** @class */ (function () {
    function Book(title, author, pageCount) {
        this.author = "Orhan Pamuk"; // tanımlarken değer atanabilir
        this.title = title;
        this.author = author; // constructor içinde değer atanabilir
        this.pageCount = pageCount;
    }
    return Book;
}());
var book = new Book("Kuyucaklı Yusuf", "Sabahattin Ali", 100);
book.title = "Kuyucaklı Yusuf 2";
book.pageCount = 200;
// book.author = "Sabahattin Ali 2"; //! readonly olduğu için değiştirilemez
/*
 ! Challange
 * Bir class tanımlayın ve class'tan örnek oluşturun.
 * Bu class en az 4 özelliğe sahip olsun
 * En az 1 özelliği readonly olsun
 * Erişim belirteçlerini efektif kullanın
*/
var Ilac = /** @class */ (function () {
    function Ilac(ad, etkinMadde, receteliMi, form) {
        this.ad = ad;
        this.etkinMadde = etkinMadde;
        this.receteliMi = receteliMi;
        this.form = form;
    }
    Ilac.prototype.bilgiVer = function () {
        console.log("".concat(this.ad, " adl\u0131 ila\u00E7 bir ").concat(this.form, " formundad\u0131r."));
    };
    return Ilac;
}());
var parol = new Ilac("Parol", "Parasetamol", false, "tablet");
console.log(parol);
