/*
 ! Intersection Type - Kesişim / Birleşmiş Tipler
 * Typscript'de kesişim türler iki veya daha fazla türü birleştirmek için kullanılır
*/
type AType = { key1: string };
type BType = { key2: number };

// Intersection Type: Her ki nesne tipinin bütün özelliklerini birleştirelim
type ABType = AType & BType & { key3: boolean };

let foo: ABType = { key1: "merhaba", key2: 99, key3: true };

// Union Type: Belirtilen türlerden en az birinin bütün özelliklerini tanımlamalıyız
type AorBType = AType | BType;

let bar: AorBType = { key1: "merhaba" };
let baz: AorBType = { key2: 99 };
let bam: AorBType = { key1: "merhaba", key2: 99 };

// Örnek
type Person = {
  id: string;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = {
  department: string;
  salary: number;
};

type Customer = {
  credit: number;
  isActive: number;
};

type Staff = Person & Contact & Employee;
type Client = Person & Contact & Customer;

const staff: Staff = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  department: "IT",
  salary: 50000,
};

const client: Client = {
  id: "2",
  name: "Jane Smith",
  email: "jane.smith@example.com",
  phone: "0987654321",
  credit: 100000,
  isActive: 1,
};

/*
 ! Challange
 * Intersection Types kullanarak birden fazla türü birleştirin
 * Ortaya çıkan yeni türü nesne tipi tanımında kullanın
*/

// Cevap
type Kitap = {
  baslik: string;
  sayfaSayisi: number;
  yayinyili: number;
};

type Yazar = {
  ad: string;
  soyad: string;
};

type KitapYazar = Kitap & Yazar;

const ornekKitapYazar: KitapYazar = {
  baslik: "Savaş ve Barış",
  sayfaSayisi: 1000,
  yayinyili: 1900,
  ad: "Lev",
  soyad: "Tolstoy",
};

// Cevap - 2
type Kitap2 = {
  id: number;
  adi: string;
};

type SatilikKitap = {
  yayinlamaTarihi: string;
  fiyatTL: number;
};

type oduncKitap = {
  alinanTarih: string;
  teslimTarihi: string;
  alanmushderiismi: string;
};

type Satilik = Kitap2 & SatilikKitap;

type Odunch = Kitap2 & oduncKitap;

const satilik: Satilik = {
  id: 1,
  adi: "Tom Sawyer",
  yayinlamaTarihi: "2025-01-01",
  fiyatTL: 100,
};
const odunch: Odunch = {
  id: 2,
  adi: "Harry Potter",
  alinanTarih: "2025-01-01",
  teslimTarihi: "2025-01-02",
  alanmushderiismi: "Ahmet Yılmaz",
};

// Cevap - 3
type KonaklamaBilgisi = {
  konaklamaTuru: "Otel" | "Bungalov" | "Çadır" | "Karavan";
  gunlukUcret: number;
  kahvaltiDahilMi: boolean;
};

type AktiviteBilgisi = {
  gidilecekYer: string;
  planlananAktiviteler: string[];
  kisiSayisi: number;
};

type TatilPlani = KonaklamaBilgisi & AktiviteBilgisi;

const yazTatili: TatilPlani = {
  konaklamaTuru: "Bungalov",
  gunlukUcret: 1500,
  kahvaltiDahilMi: true,
  gidilecekYer: "Fethiye",
  planlananAktiviteler: ["Tekne turu", "Dalış", "Yürüyüş"],
  kisiSayisi: 2,
};
