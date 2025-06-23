/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturlan nesnenin değerlerini dışarıdan almaya yarar
 * Constructor sayesine bir class'tan oluşturulan bütün nesneler birbibirin kopyası olmaz.
 * Fonksiyon new anahtar kelimesi ile class'ı çağırdımızda çalışan ilk koddur.
 * Constructor ile class'a gelene parametrelere erişlemez
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // Constructor (Yapıcı)
    function Person(new_name, new_surname, new_age) {
        this.name = new_name;
        this.surname = new_surname;
        this.age = new_age;
    }
    Person.prototype.speak = function () {
        console.log("Merhaba benim adım " + this.name);
    };
    return Person;
}());
var person1 = new Person("John", "Doe", 20);
var person2 = new Person("Jim", "Beam", 30);
console.log(person1);
console.log(person2);
/*
 ! Challange
 * Bir teknolojik / ev aleti için bir class oluşturun
 * Bu class'tan oluşturduğunuz nesneler değerlerini dışarıdan almalıdır.
 * Class en az 4 özellik ve 1 method içermelidir.
 * Bu class'tan bir örnek oluşturun. (new ile).
*/
// Cevap - 1
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine(brand, color, waterAmount, coffeeType) {
        this.brand = brand;
        this.color = color;
        this.waterAmount = waterAmount;
        this.coffeeType = coffeeType;
    }
    CoffeeMachine.prototype.makeCoffee = function () {
        console.log("".concat(this.coffeeType, " haz\u0131rlan\u0131yor..."));
    };
    return CoffeeMachine;
}());
var myMachine = new CoffeeMachine("Arzum", "beyaz", 1.0, "Türk kahvesi");
myMachine.makeCoffee();
console.log(myMachine);
// Cevap - 2
var Freezer = /** @class */ (function () {
    function Freezer(new_marka, new_kapasite, new_renk, new_dondurmaderecesi) {
        this.marka = new_marka;
        this.kapasite = new_kapasite;
        this.renk = new_renk;
        this.dondurmaderecesi = new_dondurmaderecesi;
    }
    Freezer.prototype.getMarka = function () {
        console.log("Klimanin markasi: " + this.marka);
    };
    return Freezer;
}());
var freezer1 = new Freezer("Samsung", 300, "Beyaz", -27);
console.log(freezer1);
freezer1.getMarka();
// Cevap - 3
var AkilliBuzdolabi = /** @class */ (function () {
    function AkilliBuzdolabi(new_marka, new_model, new_kapasiteLitre, new_sicaklikC) {
        this.marka = new_marka;
        this.model = new_model;
        this.kapasiteLitre = new_kapasiteLitre;
        this.sicaklikC = new_sicaklikC;
    }
    AkilliBuzdolabi.prototype.run = function () {
        console.log("Calisiyor");
    };
    return AkilliBuzdolabi;
}());
var akilliBuzdolabi1 = new AkilliBuzdolabi("Bosch", "KGN56XIDR", 505, 4);
console.log(akilliBuzdolabi1);
// Parent
var Arac = /** @class */ (function () {
    function Arac(new_marka, new_model) {
        this.marka = new_marka;
        this.model = new_model;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor...");
    };
    return Arac;
}());
// Derived
var Otomobil = /** @class */ (function (_super) {
    __extends(Otomobil, _super);
    function Otomobil(new_marka, new_model, new_renk, new_yakitTipi) {
        var _this = _super.call(this, new_marka, new_model) || this;
        _this.renk = new_renk;
        _this.yakitTipi = new_yakitTipi;
        return _this;
    }
    // yeni method ekle
    Otomobil.prototype.gazaBas = function () {
        console.log("Gaz açılıyor...");
    };
    // method override: miras olarak alınan methodu değiştirmek
    Otomobil.prototype.calistir = function () {
        _super.prototype.calistir.call(this); // üst sınıfıtaki orjinal methodu çağırır
        console.log("Otomobil calistirildi...");
    };
    return Otomobil;
}(Arac));
var bmw = new Otomobil("BMW", "X5", "Kırmızı", "Benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();
