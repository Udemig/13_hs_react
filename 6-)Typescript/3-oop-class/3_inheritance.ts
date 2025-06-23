/*
 ! Inheritance (Kalıtım / Miras)
 * Bir oop kavramıdır. Bir sınıfın farklıbir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arasında gerçekleşir.
 * Alt sınıf (Derived Class), bir üst sınıftan (Parent Class) özelliklerini ve methodlarını alır.
*/

// Parent Class (Ana Sınıf)
class GeometricShape {
  name: string;

  constructor(new_name: string) {
    this.name = new_name;
  }

  tanim() {
    console.log(`${this.name} isimli şekildir.`);
  }
}

// Derived Class (Alt Sınıf) - Constructor Yok
class Square extends GeometricShape {
  sides: number = 4;
  sideLength: number = 50;
}

const newSquare = new Square("Kare");
console.log(newSquare);
newSquare.tanim();

// Derived Class (Alt Sınıf) - Constructor Var
class Circle extends GeometricShape {
  radius: number;

  constructor(new_name: string, new_radius: number) {
    super(new_name); // super anahtar kelimesi ile parent class'ın constructor'ını çağırır.
    this.radius = new_radius;
  }
}

const circle = new Circle("Daire", 10);
console.log(circle);
circle.tanim();

// Parent
class Arac {
  marka: string;
  model: string;

  constructor(new_marka: string, new_model: string) {
    this.marka = new_marka;
    this.model = new_model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor...");
  }
}

// Derived
class Otomobil extends Arac {
  renk: string;
  yakitTipi: string;

  constructor(
    new_marka: string,
    new_model: string,
    new_renk: string,
    new_yakitTipi: string
  ) {
    super(new_marka, new_model);
    this.renk = new_renk;
    this.yakitTipi = new_yakitTipi;
  }

  // yeni method ekle
  gazaBas() {
    console.log("Gaz açılıyor...");
  }

  // method override: miras olarak alınan methodu değiştirmek
  calistir(): void {
    super.calistir(); // üst sınıfıtaki orjinal methodu çağırır
    console.log("Otomobil calistirildi...");
  }
}

const bmw = new Otomobil("BMW", "X5", "Kırmızı", "Benzin");

console.log(bmw);
bmw.calistir();
bmw.gazaBas();

// Bir class aynı anda birden fazla farklı class'ı miras alaamaz
// Ama miras alma olayı birden fazla kez gerçekleşebilir.
class Human {
  eye_color: string = "";
}

class Father extends Human {
  eye_color: string = "Kahverengi";
}

class Mother extends Human {
  eye_color: string = "Mavi";
}

class Child extends Father {}
