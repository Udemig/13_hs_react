/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturlan nesnenin değerlerini dışarıdan almaya yarar
 * Constructor sayesine bir class'tan oluşturulan bütün nesneler birbibirin kopyası olmaz.
 * Fonksiyon new anahtar kelimesi ile class'ı çağırdımızda çalışan ilk koddur.
 * Constructor ile class'a gelene parametrelere erişlemez
*/

class Person {
  // Properties (Özellikler)
  name: string;
  surname: string;
  age: number;

  // Constructor (Yapıcı)
  constructor(new_name: string, new_surname: string, new_age: number) {
    this.name = new_name;
    this.surname = new_surname;
    this.age = new_age;
  }

  speak() {
    console.log("Merhaba benim adım " + this.name);
  }
}
const person1 = new Person("John", "Doe", 20);
const person2 = new Person("Jim", "Beam", 30);
console.log(person1);
console.log(person2);

/*
 ! Challange
 * Bir teknolojik / ev aleti için bir class oluşturun
 * Bu class'tan oluşturduğunuz nesneler değerlerini dışarıdan almalıdır.
 * Class en az 4 özellik ve 1 method içermelidir.
 * Bu class'tan bir örnek oluşturun. (new ile).
*/

// Cevap - 1
class CoffeeMachine {
  brand: string;
  color: string;
  waterAmount: number;
  coffeeType: string;

  constructor(
    brand: string,
    color: string,
    waterAmount: number,
    coffeeType: string
  ) {
    this.brand = brand;
    this.color = color;
    this.waterAmount = waterAmount;
    this.coffeeType = coffeeType;
  }

  makeCoffee() {
    console.log(`${this.coffeeType} hazırlanıyor...`);
  }
}

const myMachine = new CoffeeMachine("Arzum", "beyaz", 1.0, "Türk kahvesi");

myMachine.makeCoffee();

console.log(myMachine);

// Cevap - 2
class Freezer {
  marka: string;
  kapasite: number;
  renk: string;
  dondurmaderecesi: number;

  constructor(
    new_marka: string,
    new_kapasite: number,
    new_renk: string,
    new_dondurmaderecesi: number
  ) {
    this.marka = new_marka;
    this.kapasite = new_kapasite;
    this.renk = new_renk;
    this.dondurmaderecesi = new_dondurmaderecesi;
  }
  getMarka() {
    console.log("Klimanin markasi: " + this.marka);
  }
}

const freezer1 = new Freezer("Samsung", 300, "Beyaz", -27);
console.log(freezer1);
freezer1.getMarka();

// Cevap - 3
class AkilliBuzdolabi {
  marka: string;
  model: string;
  kapasiteLitre: number;
  sicaklikC: number;

  constructor(
    new_marka: string,
    new_model: string,
    new_kapasiteLitre: number,
    new_sicaklikC: number
  ) {
    this.marka = new_marka;
    this.model = new_model;
    this.kapasiteLitre = new_kapasiteLitre;
    this.sicaklikC = new_sicaklikC;
  }
  run() {
    console.log("Calisiyor");
  }
}

const akilliBuzdolabi1 = new AkilliBuzdolabi("Bosch", "KGN56XIDR", 505, 4);
console.log(akilliBuzdolabi1);
