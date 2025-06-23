/*
 ! Erişim Belirteçleri
 * Class elemanları ile veri tutucağımız zaman bu bilgilerin class'ın dışarısından erişilebilir olup olmam durumunu belirlemizi sağlar.
 * Erişim belirteçleri:
    * public: class'ın dışarısından erişilebilir.
    * protected: class'ın içinden veya alt sınıflardan erişilebilir.
    * private: class'ın içinden erişilebilir.
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
// Oluşturduğumuz Class
var House = /** @class */ (function () {
    function House() {
        this.address = "İstanbul";
        this.price = 1000000;
        this.owner = "Ahmet";
        this.color = "Kırmızı";
        this.type = "Köşk";
        this.rooms = 4;
    }
    House.prototype.tanim = function () {
        console.log("Adres: ".concat(this.address, ", Fiyat: ").concat(this.price, ", Renk: ").concat(this.color, ", Tip: ").concat(this.type, ", Oda Say\u0131s\u0131: ").concat(this.rooms, ", Sahip: ").concat(this.owner));
    };
    return House;
}());
// Miras Alan Sınıf
var Villa = /** @class */ (function (_super) {
    __extends(Villa, _super);
    function Villa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pool = true;
        _this.garden = true;
        return _this;
    }
    Villa.prototype.tanim = function () {
        _super.prototype.tanim.call(this);
        console.log("Havuz: ".concat(this.pool, ", Bah\u00E7e: ").concat(this.garden));
        console.log(this.address); // public olduğu için sıkıntı yok
        console.log(this.price); // protected olduğu için sıkıntı yok
        // console.log(this.owner); //! private olduğu için miras alan sınıftan erişilemez
    };
    return Villa;
}(House));
// Class'ın Örneği (Dışarısı)
var villa = new Villa();
villa.tanim();
console.log(villa.address);
// console.log(villa.price); //! protected olduğu için dışırıdan erişilemez
// console.log(villa.owner); //! private olduğu için dışırıdan erişilemez
/*
 * Not: Erişim belirteçleri ts'in bütün özelliklerinde olduğu gibi kodu js'e derlediğimizde ortadan kaybolur.
 * Yani sadece geliştirme aşamasında kullanılır.
  
  
 * Erişim          Tanımlandığı Sınıf            Miras Alan Sınıf              Dışarıdan

 * public          Evet                           Evet                           Evet

 * protected       Evet                           Evet                           Hayır

 * private         Evet                           Hayır                          Hayır
 */
