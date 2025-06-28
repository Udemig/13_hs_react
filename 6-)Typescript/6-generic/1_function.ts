/*
 ! Generic
 * Bir fonksiyon'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesini sağlar.
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabiliyoruz
*/

// Yazıcağımız fonksiyon:
// 1) Number dizisi gelirse rastgele bir sayı döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli

// Union type kullanarak yapmaya çalışırsak:
const getRandomElement = (array: number[] | string[]): number | string => {
  const i = Math.round(Math.random() * array.length);

  return "sabit string döndürmeme rağmen union types kullandığım için hata almıyorum";
};

const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement(["a", "b", "c", "d", "e"]));

// Generic yardımıyla yapmaya çalışırsak:
const getRandomElement2 = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

// Generic değer alan bir fonksiyonu kullanırken generic tipi belirtmek için <> içerisinde tipi gönderiyoruz
const x1 = getRandomElement2<number>([1, 2, 3, 4, 5]);
const y1 = getRandomElement2<string>(["a", "b", "c", "d", "e"]);

console.log(x1);
console.log(y1);

/*
 * React projesinde:
 * useState<number>(99)
 * axios.get<Person[]>("api/users")
 */
