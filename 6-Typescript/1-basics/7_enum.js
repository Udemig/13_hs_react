/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi.

 * Benzer kategoriedeki değerleri bir arada tutmak için kullanılır.

 * İsimlendirme:
 * İlk harfi büyük olur
 * Çoğul takısı kullanılmaz
 * Months X | Month ✔︎
*/
// Örnek - 1
// Trafiş ışığının aşamasının verilerini tutulaım
// Klasik js yöntemi
var color = {
    red: 0,
    yellow: 1,
    green: 2,
};
// Typescript'te enum yöntemi
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
// Enum kullandığımız seneryoda enum'ı bir tip olarak istediğimiz yerde kullanabiliriz.
var renk;
// renk değişkenin tipi Color enum'ı olduğu için değer atarken sadece enum'ın içerisinde tanımlı olan değerleri kullanabiliriz.
renk = Color.red;
renk = Color.yellow;
renk = Color.green;
// renk = "Kırmızı"; // ! hata alırız
// Örnek - 2
var Days;
(function (Days) {
    Days[Days["monday"] = 0] = "monday";
    Days[Days["tuesday"] = 1] = "tuesday";
    Days[Days["wednesday"] = 2] = "wednesday";
    Days[Days["thursday"] = 3] = "thursday";
    Days[Days["friday"] = 4] = "friday";
    Days[Days["saturday"] = 5] = "saturday";
    Days[Days["sunday"] = 6] = "sunday";
})(Days || (Days = {}));
var day1 = Days.monday;
var day2 = Days[5];
console.log(day1); // 0
console.log(day2); // saturday
// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılar sıklıkla kargo durumunu bildirmek gerekiyor.
// Bu durumda kargo aşamalarını js'te bir nesneye atar orda çağırırdık, ts'de ise enum kullanarak daha okunaklı ve anlaşılır kod yazabiliriz.
var Status;
(function (Status) {
    Status["pending"] = "Beklemede";
    Status["processing"] = "\u0130\u015Fleniyor";
    Status["delivered"] = "Teslim Edildi";
    Status["cancelled"] = "\u0130ptal Edildi";
})(Status || (Status = {}));
var ahmetin_kargo_durumu;
// ahmetin_kargo_durumu = "Teslim Ettik"; //! Hata alırız
ahmetin_kargo_durumu = Status.pending;
ahmetin_kargo_durumu = Status.processing;
console.log(ahmetin_kargo_durumu);
