/*
 ! Type Guards
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır.
 * 2 farklı type guard vardır:
 * 1. typeof
 * 2. instanceof
*/
// 1) typeof ile type guard tekeniğini uygulayalım
function log(input) {
    console.log(input);
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else {
        console.log(input.toFixed(2));
    }
}
log("Selamlar");
log(567);
// Örnek - 1
function formatUserInput(input) {
    if (typeof input === "string") {
        // string ise boşlukları temizle ve büyük harfe çevir
        return input.trim().toUpperCase();
    }
    else {
        // number ise para formatına çevir
        return "".concat(input.toLocaleString(), " TL");
    }
}
console.log(formatUserInput("ahmet")); // AHMET
console.log(formatUserInput(965000)); // 965.000 TL
// Örnek - 2
function getUserAge(input) {
    if (typeof input === "string") {
        // input string ise parseInt ile sayıya çevir ve NaN kontrolü yap
        var age = parseInt(input);
        return isNaN(age) ? 0 : age;
    }
    else {
        // input sayı ise direkt yaşını döndür
        return input;
    }
}
console.log(getUserAge("99")); // 99
console.log(getUserAge(65)); // 65
console.log(getUserAge("selam")); // 0
// instanceof nedir?
// bir nesnenin hangi class'tan meydana gelediğini kontrol etmemizi sağlayan operatördür.
var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
var Rabbit = /** @class */ (function () {
    function Rabbit() {
    }
    return Rabbit;
}());
var tavsan = new Rabbit();
console.log("Tavşan nesnesi Bird class'ından oluşturulan bir örnek midir?", tavsan instanceof Bird);
console.log("Tavşan nesnesi Rabbit class'ından oluşturulan bir örnek midir?", tavsan instanceof Rabbit);
// instanceOf type guard tekniğini uygulayalım
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = "Tekir";
    }
    Cat.prototype.meow = function () {
        console.log("🐈🐈🐈 miyav miyav");
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = "Karabaş";
    }
    Dog.prototype.bark = function () {
        console.log("🐶🐶🐶 hav hav");
    };
    return Dog;
}());
function makeSound(animal) {
    console.log(animal.name);
    if (animal instanceof Cat) {
        // animal parametresi Cat class'ından oluşturlumuş bir örnekse:
        animal.meow();
    }
    else {
        // animal parametresi Dog class'ından oluşturlumuş bir örnekse:
        animal.bark();
    }
}
makeSound(new Cat());
makeSound(new Dog());
// Gerçek Proje Örneği - Error Handling
var NetworkError = /** @class */ (function () {
    function NetworkError(message) {
        this.name = "NetworkError";
        this.message = message;
    }
    return NetworkError;
}());
var ValidationError = /** @class */ (function () {
    function ValidationError(message) {
        this.name = "ValidationError";
        this.message = message;
    }
    return ValidationError;
}());
function handleError(error) {
    if (error instanceof NetworkError) {
        console.log("🛜 Ağ Hatası: ", error.message);
    }
    else if (error instanceof ValidationError) {
        console.log("⚠️ Doğrulama Hatası: ", error.message);
    }
    else {
        console.log("❌ Genel Hata: ", error.message);
    }
}
handleError(new NetworkError("Ağ bağlantısı kesildi"));
handleError(new ValidationError("Doğrulama hatası"));
handleError(new Error("Genel hata"));
