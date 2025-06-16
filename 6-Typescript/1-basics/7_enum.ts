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
const color = {
  red: 0,
  yellow: 1,
  green: 2,
};

// Typescript'te enum yöntemi
enum Color {
  red,
  yellow,
  green,
}

// Enum kullandığımız seneryoda enum'ı bir tip olarak istediğimiz yerde kullanabiliriz.
let renk: Color;

// renk değişkenin tipi Color enum'ı olduğu için değer atarken sadece enum'ın içerisinde tanımlı olan değerleri kullanabiliriz.
renk = Color.red;
renk = Color.yellow;
renk = Color.green;
// renk = "Kırmızı"; // ! hata alırız

// Örnek - 2
enum Days {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let day1 = Days.monday;
let day2 = Days[5];

console.log(day1); // 0
console.log(day2); // saturday

// Örnek - 3
// Bir kargo sitesi yazıyoruz ve kullanıcılar sıklıkla kargo durumunu bildirmek gerekiyor.
// Bu durumda kargo aşamalarını js'te bir nesneye atar orda çağırırdık, ts'de ise enum kullanarak daha okunaklı ve anlaşılır kod yazabiliriz.

enum Status {
  pending = "Beklemede",
  processing = "İşleniyor",
  delivered = "Teslim Edildi",
  cancelled = "İptal Edildi",
}

// Artık ahmetin kargo durumuna değer atamak için sadece Status enum'ının içindeki değerleri kullanabiliriz.
let ahmetin_kargo_durumu: Status;

// ahmetin_kargo_durumu = "Teslim Ettik"; //! Hata alırız
ahmetin_kargo_durumu = Status.pending;
ahmetin_kargo_durumu = Status.processing;

console.log(ahmetin_kargo_durumu);
