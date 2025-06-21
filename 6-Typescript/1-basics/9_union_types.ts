/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin alabilceği birden fazla farklı türde veri varsa kullanılır.
  
 * Örn: Bir şehir değişkeni var ama şehir ismi(string) mi yoksa şehir plakası(number) mı bellli değil.
 * Bu tarz durumlarda tipinin hem string hemde number olabilceğini söylemeliyiz
 */

let city: number | string;

city = "İzmir";

city = 35;

// Örnek - 2
type IOS = {
  ios_version: string;
  airdrop_status: boolean;
  model: string;
};

type Android = {
  android_version: string;
  google_play_version: string;
  model: string;
};

// Değişkenin tipini IOS veya android olarak belirledik.
let phone: IOS | Android;

phone = {
  ios_version: "15.0",
  airdrop_status: true,
  model: "iPhone 13",
};

phone = {
  android_version: "13.0",
  google_play_version: "13.0",
  model: "Samsung Galaxy S22",
};

// Union Types'ı nesneler ile kullandığımızda:
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// Değişken ya A ya da B tipinde olabilir.
let example: AType | BType;

// hata vermemesi için ya a tipinin bütün özelliklerini tanımlamalıyız:
example = { key1: "x", key2: "y" };

// ya b tipinin bütün özelliklerini tanımlamalıyız:
example = { key3: 1, key4: 2 };

// yada her iki tipininde bütün özelliklerini tanımlamalıyız:
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
