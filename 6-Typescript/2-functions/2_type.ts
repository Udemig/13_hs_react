/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine
 * custom type ile ayrı bir noktada tipi tanımlayarak kullanabiliriz.
 */

// 1. Yöntem: Fonksiyonu direkt olarak tanımlarken tipi belirtme
let func1 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func2 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};
let func3 = (par1: string, par2: number): string => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

// 2.Yöntem: Custom Type ile fonksiyon tipi tanımlama
type FuncType = (par1: string, par2: number) => string;

let func5: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

let func6: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

let func7: FuncType = (par1, par2) => {
  return "Fonksiyon çağrıldı" + par1 + par2;
};

/*
 ! Challange:
 * Yukarıdaki 2.yöntemde olduğu gibi bir fonksiyon tipi tanımlayınız.

 * Fonksiyonun görevi
 * * Parametre olarak kişinin bulunduğu şehri ve havanın derecesini alsın.
 * * Eğer hava derecesi 20 dereceden büyükse "Hava sıcak" yazsın.
 * * Eğer hava derecesi 20 dereceden küçükse "Hava soğuk" yazsın.
 * * Eğer hava derecesi 20 derece ise "Hava normal" yazsın.
  
 * Hem fonksiyonun tipini hemde fonksiyonu tanımlayın.
 * Fonksiyonu 1 kez çağırın
*/

type HavaFunc = (shehir: string, derece: number) => string;

let func: HavaFunc = (shehir, derece) => {
  if (derece > 20) {
    return "Hava sicak";
  } else if (derece < 10) {
    return "Hava soguk";
  } else {
    return "Hava normal";
  }
};

let result9 = func("Ankara", 25);
console.log(result9);
