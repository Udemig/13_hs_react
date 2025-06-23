/*
 ! OOP (Object Oriented Programming)
 * Nesne yönelimili programlama, yazılım geliştirme sürecinde kullanılan vir tekniktir.
 * Bı yaklaşım, yazılımı nesneler ve bu nesneler arasındaki etkileşimler arasında yapmaya çalışır.
  
 * OOP'nin temel kavramlar:
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface
 * Polymorphism
 * Encapsulation
 * Abstraction

 * Sınıf: Nesnelerin oluşturulması için kullanılan şablonlardır.
 * Nesne: Sınıfın bir örneğidir.
 * Kalıtım: Bir sınıfın başka bir sınıftan özelliklerini almasıdır.
 * Interface: Bir sınıfın veya nesnenin özelliklerini tanımlar.
 * Polymorphism: Aynı isimdeki fonksiyonların farklı şekillerde davranmasıdır.
 * Encapsulation: Verilerin dışarıdan doğrudan erişilmesini engellemek ve kontrollü bir şekilde erişim sağlamak.
 * Abstraction: Gereksiz detayları gizleyip, önemli bilgileri ve davranışları ön plana çıkarma.
 
 * OOP'nin temel amacı, kodu daha anlaşılabilir, yönetilebilir ve yeniden kullanılabilir olmasını sağlamaktır. Bu yaklaşım büyü projelerde olduka fazla fayda sağlar.
 */

/*
 ! Class (Sınıf)
 * Sınıflar, nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için veri ve fonksiyonları tanımlar.
 * Örneğin: "Araba" sınıfı bir arabanın sahip olucağı özellikleri (renk,marka,model) ve davranışları (hızlanma, frenleme, vites değiştirme) tanımlar.
 */

class EskiTelefon {
  // Properties (Özellikler)
  marka: string = "Samsung";
  telefonTipi: string = "entegre";
  tusTakimi: string = "çevirmeli";

  // Methods (Metotlar)
  ahizeAc(): void {
    console.log("Ahize açılıyor...");
  }
  numaraCevir(telefonNumarasi: string): void {
    console.log(telefonNumarasi + " çalıyor....");
  }
}

/*
 ! Class Kullanımı
 * Class'ı tanımlamaka tek başına bir anlam ifade etmez.
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımlandıktan sonra çalıştırırz ve görevini yapar
 * Class'larda da durum aynıdır class'ı new ile çağırırız ve bize bir nesne oluşturur
 * Class'ın oluşturduğu bu nesneye "instance" (örnek) denir.
*/

const telefon = new EskiTelefon();
const telefon2 = new EskiTelefon();

telefon2.marka = "Nokia";
telefon2.telefonTipi = "entegre";
telefon2.tusTakimi = "çevirmeli";

console.log(telefon);
console.log(telefon2);

telefon.ahizeAc();

telefon.numaraCevir("0532 123 45 67");
