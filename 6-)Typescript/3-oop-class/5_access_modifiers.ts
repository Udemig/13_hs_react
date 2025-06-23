/*
 ! Erişim Belirteçleri
 * Class elemanları ile veri tutucağımız zaman bu bilgilerin class'ın dışarısından erişilebilir olup olmam durumunu belirlemizi sağlar.
 * Erişim belirteçleri:
    * public: class'ın dışarısından erişilebilir.
    * protected: class'ın içinden veya alt sınıflardan erişilebilir.
    * private: class'ın içinden erişilebilir.
*/

// Oluşturduğumuz Class
class House {
  public address: string = "İstanbul";
  protected price: number = 1000000;
  private owner: string = "Ahmet";
  public color: string = "Kırmızı";
  public type: string = "Köşk";
  public rooms: number = 4;

  tanim() {
    console.log(
      `Adres: ${this.address}, Fiyat: ${this.price}, Renk: ${this.color}, Tip: ${this.type}, Oda Sayısı: ${this.rooms}, Sahip: ${this.owner}`
    );
  }
}

// Miras Alan Sınıf
class Villa extends House {
  pool: boolean = true;
  garden: boolean = true;

  tanim() {
    super.tanim();
    console.log(`Havuz: ${this.pool}, Bahçe: ${this.garden}`);
    console.log(this.address); // public olduğu için sıkıntı yok
    console.log(this.price); // protected olduğu için sıkıntı yok
    // console.log(this.owner); //! private olduğu için miras alan sınıftan erişilemez
  }
}

// Class'ın Örneği (Dışarısı)
const villa = new Villa();
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
