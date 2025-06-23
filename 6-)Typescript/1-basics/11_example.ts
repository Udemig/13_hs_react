/* 
 ! Challenge:
 * Herkes içerisinde en az 1 tane:
 * string
 * number
 * boolean
 * array / object / tuple
 * string literal / union type
 * any
 * tiplerine sahip bir nesne tipi tanımlayın
 * ve oluşturduğumuz tipi kullanarak bir değişken oluşturun
 * tip herhangi bir nesne hakkında olabilir: Araba, Kullanıcı, Ürün, Bilgisayar, Film, Kitap, vb....
*/

type Car = {
  make: string;
};

const car: Car = {
  make: "Toyota",
};

// Cevap - 1
type Movie = {
  title: string;
  releaseYear: number;
  genres: string[];
  director: { name: string };
  language: "English" | "Turkish ";
};

const movie: Movie = {
  title: "Inception",
  releaseYear: 2010,
  genres: ["Sci-Fi", "Thriller"],
  director: { name: "Christopher Nolan" },
  language: "English",
};

// Cevap - 2
type satilikEv = {
  odaSayisi: string;
  metrekare: number;
  binayashi: "yeni bina" | "eski bina" | "ikinci el";
  katdurumu: "çatı katı" | "bodrum katı" | "zemin katı";
  fiyat: number;
  adres: string;
  il: string;
  ilce: string;
  mahalle: string;
  cadde: string;
  no: string;
};

const satilik: satilikEv = {
  odaSayisi: "3+1",
  metrekare: 100,
  binayashi: "yeni bina",
  katdurumu: "çatı katı",
  fiyat: 100000,
  adres: "123 sokak",
  il: "Ankara",
  ilce: "Çankaya",
  mahalle: "Kızılcahamam",
  cadde: "123 sokak",
  no: "25/A ",
};
