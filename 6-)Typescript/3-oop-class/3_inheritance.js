/*
 ! Inheritance (Kalıtım / Miras)
 * Bir oop kavramıdır. Bir sınıfın farklıbir sınıfın özelliklerini ve methodlarını miras almasına izin verir.
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arasında gerçekleşir.
 * Alt sınıf (Derived Class), bir üst sınıftan (Parent Class) özelliklerini ve methodlarını alır.
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
// Parent Class (Ana Sınıf)
var GeometricShape = /** @class */ (function () {
    function GeometricShape(new_name) {
        this.name = new_name;
    }
    GeometricShape.prototype.tanim = function () {
        console.log("".concat(this.name, " isimli \u015Fekildir."));
    };
    return GeometricShape;
}());
// Derived Class (Alt Sınıf) - Constructor Yok
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sides = 4;
        _this.sideLength = 50;
        return _this;
    }
    return Square;
}(GeometricShape));
var newSquare = new Square("Kare");
console.log(newSquare);
newSquare.tanim();
// Derived Class (Alt Sınıf) - Constructor Var
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(new_name, new_radius) {
        var _this = _super.call(this, new_name) || this; // super anahtar kelimesi ile parent class'ın constructor'ını çağırır.
        _this.radius = new_radius;
        return _this;
    }
    return Circle;
}(GeometricShape));
var circle = new Circle("Daire", 10);
console.log(circle);
circle.tanim();
