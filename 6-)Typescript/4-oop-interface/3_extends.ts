/*
 ! Interface Extends
 * Interface type'larda olduğu gibi farklı bir/birkaç interface'i miras alabilir.
 * Miras alma extends anahtar kelimesi ile gerçekleşir.
 * Sınıflarda farklı olarak istersek birden fazla interface'i miras alabiliriz.
*/

// bir interface oluşturalım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
  marka: string;
}

// yeni bir interface oluşturalım ve öncekini miras alalım
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const masa: IMobilya = {
  isim: "masa",
  fiyat: 100,
  marka: "IKEA",
  renk: "kahverengi",
};
// farklı bir interface daha oluşturalım
interface IElektronik {
  garantiSuresi: number;
  şarjSuresi: number;
  batarya: string;
}

// birden fazla interface'i miras alalım
interface IUrun extends IElektronik, IMobilya {
  id: string;
}

// interface'i bir nesne tipi tanımında kullanalım
const bilgisayar: IUrun = {
  id: "1",
  garantiSuresi: 1,
  şarjSuresi: 1,
  batarya: "1000mAh",
  isim: "bilgisayar",
  fiyat: 1000,
  marka: "Apple",
  renk: "siyah",
};

/*
 ! Challange
 * İlk olarak iki farklı interface oluşturalım.
 * Ardından 3. bir interface oluşturup ilk 2 interface'i miras olarak alıp genişletelim.
 * Son olarak bu 3. interface'i bir nesne tipi tanımında kullanalım.
*/

// Cevap - 1
interface TabanBilgisi {
  tabanTuru: "kek" | "bisküvi" | "pandispanya";
  kacKatli: number;
}

interface KremaBilgisi {
  kremaTuru: "çikolatalı" | "meyveli" | "vanilyalı";
  sutluMu: boolean;
}

interface Pasta extends TabanBilgisi, KremaBilgisi {
  isim: string;
  fiyat: number;
}

const ornekPasta: Pasta = {
  isim: "Çikolatalı Rüya",
  tabanTuru: "kek",
  kacKatli: 3,
  kremaTuru: "çikolatalı",
  sutluMu: true,
  fiyat: 150,
};

// Cevap - 2
interface ITakim {
  takimId: number;
  takimAdi: string;
  ulke: string;
}

interface IOyuncu {
  oyuncuId: number;
  oyuncuAdi: string;
  formaNumarasi: number;
}

interface ITakimKaptani extends ITakim, IOyuncu {
  macSayisi: number;
}

const fenerbahceKaptani: ITakimKaptani = {
  takimId: 1907,
  takimAdi: "Fenerbahçe SK",
  ulke: "Türkiye",
  oyuncuId: 10,
  oyuncuAdi: "Dusan Tadic",
  formaNumarasi: 10,
  macSayisi: 100,
};

// Cevap - 3
interface IClothes {
  brand: string;
}

interface IShoes {
  size: number;
}

interface IProducts extends IClothes, IShoes {
  name: string;
  price: number;
  id: string;
}

const Product1: IProducts = {
  name: "T-shirt",
  price: 300,
  id: "1",
  brand: "Nike",
  size: 42,
};
