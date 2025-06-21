/*
 ! String Literal Types
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabileceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlaması yapabiliyoruz.
 
 * Örn: Bir kullanıcı nesneninin tipini tanımlamak istiyoruz.
 * Kullanıcnın rolüne string yazmak yerine sadece alabileceği 3-4 farklı değer ifade edersek daha katı bir kısıtlama yapmış oluruz.
*/

type User = {
  id: number;
  name: string;
  account_type: "admin" | "user" | "guest";
  gender: "male" | "female";
};

const newUser: User = {
  id: 1,
  name: "Ali",
  account_type: "admin",
  gender: "male",
};

// Örnek
// Bir araba kiralama sitesi için api'dan gelen araç verisinin tipini tanımlayalım
type Car = {
  make: string;
  model: string;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik";
  year: number;
  owner: any;
};

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2020,
  owner: "Ali",
};
