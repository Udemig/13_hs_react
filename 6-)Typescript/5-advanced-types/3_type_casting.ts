/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yere özel farklı bir tipte algılanmasını istiyorsak type casting kullanırız.
 * As operatörü ile kullanıldığı kod satırında değişkeninin tipini değiştirmeye yarar 
 */

type Product = {
  name: string;
  price: number | string;
};

let product1: Product = {
  name: "Laptop",
  price: 45600.9999,
};

/*
 * Normalde price string veya number olabilceğinden
 * product.price number olmasına rağmen number'a özgü olan toFixed metodunu kullanamayız.
 * As kullabarak aşağıdaki kod satırına çzel price değişkenin tipini number olarak değiştirelim
 * Bu sayede number'a özgü olan toFixed metodunu kullanabiliriz.
 */

const x = (product1.price as number).toFixed(2);
console.log(x);

// Örnek - 2
// Bu kisi verisi bize firebase'den gelmiş olsun (type'ıda firebase belirlemiş olsun)
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 Main St",
};

// kişi nesnenin tipi unknown olduğu için name özelliğine erişemeyiz
// kisi.name; //! Hata verir

// nesne için bir tip oluşturalım
interface IPerson {
  name: string;
  age: number;
  adress: string;
}

// kişi nesnenin name değerine erişebilmek için tip dönüşümü yapalım
const kisi2 = kisi as IPerson;

kisi2.name;
kisi2.age;
kisi2.adress;

// Örnek - 3: API gelen verinin tipini değiştirmek
interface IUser {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

// api'dan gelen veriler any tipininde olur
async function fetchUser(userId: number): Promise<IUser> {
  const res = await fetch(`/api/users/${userId}`);
  const userData = await res.json(); // bu data any tipinde olur

  return userData as IUser; // return tipini any tipinden IUser tipine çevirdik
}

fetchUser(9);
