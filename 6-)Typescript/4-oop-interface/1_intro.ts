/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar.
 * Nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder.
  
 ! Custom Type | Abstract Class | Interface
 
 ? Abstract Class vs Interface
 * Abstract class'lar aynı anda sadece bir class'ı miras alabilir.
 * Interface'ler tek seferde birden fazla interface'in özelliklerini alabilir.
 
 ? Type vs Interface
 * ***Nesne tipi tanımlama noktasında*** aralarında hiçbir fark yoktur 
 * Type'ların kullanımı daha esnektir sadece nesne değil fonksiyon array tuple literal gibi farklı tiperi tanımlayabiliriz.
 * Inteface'ler ise sadece nesne tipi tanımlamak için kullanılır.
*/

// Type
type User = {
  name: string;
  age: number;
  email: string;
};

// Interface
interface IUser {
  name: string;
  age: number;
  email: string;
}

const kisi: IUser = {
  name: "John",
  age: 20,
  email: "john@example.com",
};

// Typelar sadece nesne tipi tanımlamaya hizmet etmezz farklı türlerde tnaımlanabilir

type Dizi = number[];
type Fonksiyon = (a: number, b: number) => number;
type Literal = "a" | "b" | "c";
interface IDizi {}
