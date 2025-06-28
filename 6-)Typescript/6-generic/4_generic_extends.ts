// Generic Özellik:
// Tipi generic olarak tanımladığımızda  her türlü tipte değer alabilmesinin önünü açarız
// Bundan dolayı bazı durumlarda alabileceği tipte kısıtlamalar getirmek isteyebiliriz
// Extends ile T generic tipi dışarıdan sadce string veya number tipi alabilecek şekilde kısıtlayabiliriz

type Container<T extends string | number> = {};

const x: Container<string> = {};
const y: Container<number> = {};
// const z: Container<boolean> = {}; //!hata
// const a: Container<object> = {}; //!hata

// ====  Örnek =====
class AppConfig<T extends string | number | boolean> {
  constructor(private key: string, private value: T) {}

  getKey(): string {
    return this.key;
  }

  getValue(): T {
    return this.value;
  }

  updateValue(newValue: T): void {
    this.value = newValue;
  }
}

const appName = new AppConfig<string>("APP_NAME", "My App");
const port = new AppConfig<number>("PORT", 3000);
const appVersion = new AppConfig<string>("APP_VERSION", "1.0.0");

/*
 ! Challange
 * En az 1 generic tip alan bir type/interface/fonksiyon/class yazınız
 * Tanımladığınız yapıyı en az 1 kez kullanının
 * Bonus: extends kullanın
*/

// Cevap - 1
type User<T extends number | string, K, Z> = {
  id: K;
  name: Z;
  email: Z;
  extraData: T;
};

const User1: User<number, number, string> = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  extraData: 100,
};

// cevap-2
type AdvancedUser<T extends object> = {
  id: number;
  name: string;
  email: string;
  extraData: T;
};

const User4: AdvancedUser<{ age: number; role: string }> = {
  id: 4,
  name: "Bob",
  email: "bob@example.com",
  extraData: {
    age: 30,
    role: "developer",
  },
};
