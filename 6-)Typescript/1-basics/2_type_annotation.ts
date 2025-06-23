/*
 ! Type Annotations
 * Javascript'te değişkenin türünü belirlme gibi bir özellik söz konusu değildir.
 * Fakat typescript'te tanımladığımız değişkenlerin tiplerinide biz belirtebiliriz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlaması dışarısına çıkamıyoruz.
 * Bu olay kodda oluşabilecek hataların daha erken tespit edilmesini sağlar.
*/

let foo: number = 35;

foo = 67;

/*
 * Javascript'te bulunan veri tipleri:
 * string
 * number
 * boolean
 * null
 * undefined
 * object
 * array
 * function
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

let value1: number = 35;
let value2: string = "udemig";
let value3: boolean = false;
let value4: null = null;
let value5: undefined;
let value6: undefined = undefined;
let value7: object = {};
let value8: Function = () => {};
// let value9: symbol = Symbol("Selam");
// let value10: bigint = BigInt(99782742367487236.0);

//* Type Inferance
//* Eğer bir değişkenin tipini belirtmezsek typescript kendisi değişkene atadığınız değere göre tipi belirler.
//* Bu özelliği mümkünse hiç kullanmazsak daha iyi. (Bazen olması gerekene nazaran yanlış tip tanımları yapabiliyor)

let value11 = 35;

/*
 * Javascript'te veri türleri ikiye ayrılır.

 * 1) Primitive Types
 * Değer üzerinde saklanır ve kopyalanır. Değerleri değiştirilemez ve bellekte doğrudan saklanır.
 * Hafızada sabit bir alan kpaplar.
 * Bellekte değişkenin kendisi saklanır.
 * Bir değişkene farklı bir değişkenin değeri atanırsa, kopyası alnır ve yeni değişkende değişklik yapmak orjinalini etkilemez.
 * string, number, boolean, null, undefined, symbol, bigint
*/

let x = 5;
let y = x; // x'in değerini y'ye kopyalar.
y = 20;

console.log(x); // 5

/*
 * 2) Non Primitive (Reference) Types
 * Referans üzerinden saklanır. Değerleri değiştirilebilir.
 * Bellekte değişkenin referansı tutulur.
 * Bir değişkene farklı bir değişkenin değeri atanırsa, referansını alır ve yeni değişkende değişklik yapmak orjinalini etkiler.
 * object, array, function, class, etc.
 */

let obj1 = { name: "Furkan" };
let obj2 = obj1;
obj2.name = "Mehmet";

console.log(obj1); // { name: "Mehmet" }
