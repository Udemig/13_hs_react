/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirtiriz.
 * Soyut sınıfıların doğrudan örnekleri oluşturulamazlar
 * Bundan dolayı soyut sınıflara normal sınıflar için tip tanımı diyebiliriz
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
// Soyut Sınıf
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // method: doğrudan miras alan sınıfa geçer
    TakePhoto.prototype.takePhoto = function () {
        console.log("Fotoğraf çekiliyor...");
    };
    return TakePhoto;
}());
// const photo = new TakePhoto("portrait", "black");  //! abstract class'ın doğrudan örneği oluşturulamaz
// Soyut sınıfın özelliklerini miras alan sınıf
// Soyut biri sınıfı miras alan sınıf mutlaka soyut sınıfın bütün soyut methodlarını implement etmeli
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.sharePhoto = function () {
        console.log("Fotoğraf instagramda paylaşılıyor");
    };
    return Instagram;
}(TakePhoto));
var photo = new Instagram("portrait", "black");
console.log(photo);
photo.takePhoto();
photo.sharePhoto();
