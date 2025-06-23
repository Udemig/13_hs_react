/*
 ! Generic
 * Bir fonksiton'un, type'ın, class'ın, interface'in içerisindeki bazı tipleri dinamik olarak dışarıdan gelen değere bağlı değişmesini sağlar.
 * Bu durumda generic özelliğini kullanarak dışarıdan parametre olarak tip alabiliyoruz
*/
// Yazıcağımız fonksiyon:
// 1) Number dizisi gelirse rastgele bir sayı döndürmeli
// 2) String dizisi gelirse rastgele bir string döndürmeli
// Union type kullanarak yapmaya çalışırsak:
var getRandomElement = function (array) {
    var i = Math.round(Math.random() * array.length);
    return "selam";
};
console.log(getRandomElement([1, 2, 3, 4, 5]));
console.log(getRandomElement(["a", "b", "c", "d", "e"]));
