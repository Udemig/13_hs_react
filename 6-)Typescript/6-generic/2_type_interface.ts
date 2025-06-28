/*
 * Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir type ve interface'ler oluşturmak içinde kullanabiliriz.
 */

type ArrayType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const array1: ArrayType<string> = {
  items: ["a", "b", "c", "d", "e"],
  addItem: (newItem) => {
    array1.items.push(newItem);
  },
  getItem: (index) => {
    return array1.items[index];
  },
};

const array2: ArrayType<number> = {
  items: [1, 2, 3, 4, 5],
  addItem: (newItem) => {
    array2.items.push(newItem);
  },
  getItem: (index) => {
    return array2.items[index];
  },
};

// İsimlendirme ve Interface
// Generic isimlendiriken tek harf kullanılır.
// T: Type
// K: Key
// V: Value
// E: Element
// R: Return
// S: State

interface IPerson<T, K> {
  name: T;
  age: K;
  id: K;
  father: T;
  mother: T;
}

const foo: IPerson<string, number> = {
  name: "John",
  age: 20,
  id: 1,
  father: "John",
  mother: "Jane",
};

// foo bar baz

// Gerçek Bir Projede Interface'lerde generic kullanımı:
// api'dan 2 farklı cevap geldi ve bu cevapların tiplerini tanımlalamak zorundayız
const apiResponse1 = {
  data: [
    {
      id: 1,
      name: "John",
      age: 20,
    }, // ...
  ],
  total: 50,
  skip: 0,
  limit: 30,
};

const apiResponse2 = {
  data: [
    {
      title: "Margarita Pizza",
      price: 100,
      cuisine: "Italian",
    }, // ...
  ],
  total: 50,
  skip: 0,
  limit: 30,
};

//* generic kullanmadan tanımla:
interface IUser {
  id: number;
  name: string;
  age: number;
}

interface IRecipe {
  title: string;
  price: number;
  cuisine: string;
}

// Bu kullanımda iki ayrı nesne tipi tanımlamak zorundayız
interface IUsersResponse {
  data: IUser[];
  total: number;
  skip: number;
  limit: number;
}

interface IRecipesResponse {
  data: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}

const usersResponse1: IUsersResponse = apiResponse1;
const recipesResponse1: IRecipesResponse = apiResponse2;

//* Generic kullanarak tanımla:
// Bu kullanımda ise dianmik olan datanın tipini generic olarak tanımlarız bu sayede 2.tipe gerek klamaz
interface IApiResponse<T> {
  data: T[];
  total: number;
  skip: number;
  limit: number;
}

const usersResponse2: IApiResponse<IUser> = apiResponse1;
const recipesResponse2: IApiResponse<IRecipe> = apiResponse2;
