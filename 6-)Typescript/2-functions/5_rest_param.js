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
var yoklama = function (teacher) {
    var students = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        students[_i - 1] = arguments[_i];
    }
    console.log(teacher + " öğretmen yoklamaya başladı");
    console.log("------------------------------------");
    students.forEach(function (student) { return console.log(student + " burdaaaaa!"); });
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
var hesaplama = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var carpim = numbers[0] * numbers[1];
    var toplam = numbers.slice(2).reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
    return { carpim: carpim, toplam: toplam };
};
console.log(hesaplama(2, 3, 4, 5, 6));
