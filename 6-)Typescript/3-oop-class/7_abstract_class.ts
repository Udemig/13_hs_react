/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür.
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özelliklerini ve methodlarını belirtiriz.
 * Soyut sınıfıların doğrudan örnekleri oluşturulamazlar
 * Bundan dolayı soyut sınıflara normal sınıflar için tip tanımı diyebiliriz 
*/

// Soyut Sınıf
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // method: doğrudan miras alan sınıfa geçer
  takePhoto(): void {
    console.log("Fotoğraf çekiliyor...");
  }

  // soyut method: miras alan sınıfların kendi özelliklerine göre implemente etmesini sağlar
  abstract sharePhoto(): void;
}

// const photo = new TakePhoto("portrait", "black");  //! abstract class'ın doğrudan örneği oluşturulamaz

// Soyut sınıfın özelliklerini miras alan sınıf
// Soyut biri sınıfı miras alan sınıf mutlaka soyut sınıfın bütün soyut methodlarını implement etmeli
class Instagram extends TakePhoto {
  sharePhoto(): void {
    console.log("Fotoğraf instagramda paylaşılıyor");
  }
}

// Soyut sınıfın özelliklerini miras alan farklı sınıf
class Twitter extends TakePhoto {
  sharePhoto(): void {
    console.log("Fotoğraf twitterda paylaşılıyor");
  }
}

const photo = new Instagram("portrait", "black");
console.log(photo);
photo.takePhoto();
photo.sharePhoto();
