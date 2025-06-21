/*
 ! Optional Params
 * Normal şartlarda fonksiyonu çağırabilememiz için parametrelerinin tamamına değer göndermemiz gerekir.
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz.
 * Tanım:
 * (a:string,b?:number) => bu kullanımda a parametresi zorunlu b parametresi ise isteğe bağlıdır.
 * Eğer opsiyonel parametreye değer göndermezsek undefined olarak kabul eder.
 * Opsiyonel olan bir parametrenin ardından zorunlu bir parametre gelemez
*/

// Fonksiyonlarda opsiyonel parametre
function exaFunc(par1: number, par2?: string, par3?: boolean) {
  console.log("1.parametre", par1);
  console.log("2.parametre", par2);
  console.log("3.parametre", par3);
}

exaFunc(1, "selam", true);
exaFunc(1, "selam");
exaFunc(1);
exaFunc(1, undefined, true);

// Kullanım Örneği
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman} ${isim}`;
  }

  return `Merhaba ${isim}`;
};

console.log(karsilama("Ahmet", "Akşamlar"));

console.log(karsilama("Ali"));

// Opsiyonel değerin nesnelerde kullanımı
type User = {
  name: string;
  surname: string;
  age?: number;
};

const user: User = {
  name: "Ahmet",
  surname: "Yılmaz",
  age: 20,
};

const user2: User = {
  name: "Ali",
  surname: "Veli",
};
