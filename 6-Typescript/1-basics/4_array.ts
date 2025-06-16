/*
 ! Array Type
 * Typescript'de dizilerin tipini tanımlarken sadece bu değişken bir dizi olsun demek yeterli değildir.
 * Dizinin içeriği ne olacak, dizinin elemanlarının tipi ne olacak gibi bilgileri de belirtmemiz gerekiyor.
*/

// Örnek - 1
const users: string[] = ["Furkan", "Mehmet", "Ahmet"];

// Örnek - 2
const numbers: number[] = [1, 2, 3, 4, 5];

// numbers.push("altı"); //! number dizisine string atamaya çalışırsak hata alırız

// Soru: Bir dizi içerisinde birden fazla farklı tipte değer bulunabilir mi?
// Cevap: Evet, birden fazla farklı tipte değer bulunabilir. Eğer Union Type kullanırsak bu durumda mümkün olur.

const mixed: (string | number)[] = ["Furkan", 1, "Mehmet", 2, "Ahmet", 3];

// Soru: Nesnelerden oluşan bir dizinin tipini nasıl belirleriz?
// Cevap: Nesnelerden oluşan bir dizinin tipini belirlerken önce nesnenin tipini belirleriz ve daha sonra dizinin tipini belirleriz.

const teachers: { name: string; age: number }[] = [
  { name: "Ahmet", age: 40 },
  { name: "Mehmet", age: 30 },
  { name: "Ayşe", age: 20 },
];

// Soru: Bir dizinin içerisinde dizi tipi değer bulunabilir mi?
// Cevap: Evet, bir dizinin içerisinde dizi tipi değer bulunabilir.

const x: string[][] = [
  ["selam", "merhaba"],
  ["selam", "merhaba"],
];
