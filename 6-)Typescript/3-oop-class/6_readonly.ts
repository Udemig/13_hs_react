/*
 ! Readonly
 * readonly anahtar kelimesi class'ın / nesnenin özelliklerine sadece okunabilir olmasını sağlar.

 * Readonly ile tanımladığımız özelliklere değer ataması:
 * * Sınıflarda sadece constructor içinde atanabilir.
 * * Nesnelerde ise sadece oluşturulurken atanabilir.
*/

// Nesnelerdeki Kullanımı
type Person = {
  name: string;
  soyad: string;
  readonly tcNo: string;
};

const person: Person = {
  name: "Ahmet",
  soyad: "Yılmaz",
  tcNo: "11111111111",
};

person.name = "Mehmet";
person.soyad = "Kaya";
// person.tcNo = "123142342345"; //! readonly olduğu için değiştirilemez

// Classlardaki Kullanımı
class Book {
  public title: string;
  public pageCount: number;
  public readonly author: string = "Orhan Pamuk"; // tanımlarken değer atanabilir

  constructor(title: string, author: string, pageCount: number) {
    this.title = title;
    this.author = author; // constructor içinde değer atanabilir
    this.pageCount = pageCount;
  }
}

const book = new Book("Kuyucaklı Yusuf", "Sabahattin Ali", 100);

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

class Ilac {
  public readonly ad: string;
  private etkinMadde: string;
  protected receteliMi: boolean;
  public form: string;

  constructor(
    ad: string,
    etkinMadde: string,
    receteliMi: boolean,
    form: string
  ) {
    this.ad = ad;
    this.etkinMadde = etkinMadde;
    this.receteliMi = receteliMi;
    this.form = form;
  }

  public bilgiVer() {
    console.log(`${this.ad} adlı ilaç bir ${this.form} formundadır.`);
  }
}

const parol = new Ilac("Parol", "Parasetamol", false, "tablet");
console.log(parol);
