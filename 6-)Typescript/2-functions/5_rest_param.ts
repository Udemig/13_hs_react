/*
 ! Rest Param
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri:
 * Bir parametreyi rest paraemtre yapmak için "..." operatörünü kullanırız
 * Bir rest parametrenin ardından herhangi bir farklı parametre yazılamaz
 * Sebebi ise res paramın kaç değer alıcağının belirli olamaması
 * Rest paramerenin aldığı deperler en son dizi haline getirilir
*/

// Örnek - Yoklama
const yoklama = (teacher: string, ...students: string[]) => {
  console.log(teacher + " öğretmen yoklamaya başladı");
  console.log("------------------------------------");
  students.forEach((student) => console.log(student + " burdaaaaa!"));
  console.log(students.length + " öğrenci var");
};

yoklama("Merve", "Ali", "Mehmet", "Ayşe", "Fatma", "Burak", "Mahmut");

/*
 ! Challenge
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * Parametre olarak aldığı ilk 2 sayıyı çarpsın
 * İlk 2 sayı dışında gelen sayıları toplasın
 * Toplam ve çarpımı bir nesne içersinde return etsin
 
 * hesapla(2,3,4,5,6) ==> {carpim:6, toplam:15} 
 * kopya: toplam için reduce kullanınız (sayilar.reduce((toplam,sayi)=>toplam+sayi,0))
*/

const hesaplama = (...numbers: number[]) => {
  // dizideki ilk 2 elemanı topla
  const carpim = numbers[0] * numbers[1];

  // ilk 2 eleman dışındaki elemanları topla
  const toplam = numbers.slice(2).reduce((toplam, sayi) => toplam + sayi, 0);

  // nesne içersinde return et
  return { carpim, toplam };
};

console.log(hesaplama(2, 3, 4, 5, 6));
