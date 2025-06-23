/*
 * Typescript, javascripti'in bazı önemli açıklarını düzeltmek için microsoft tarafından geliştirilmiş bir programlama dilidir.
 
 * Neden Typescript ?
 * * JS'de koddaki hataları ancak runtime'da görürüz.
 * * TS'de koddaki hataları kod editöründe görürüz.
  
 * * JS'de tanımladığımız değişkene daha sonra farklı türde değer ataması yapabiliriz.
 * * TS'de tanımladığımız değişkenin türünü belirtmek zorundayız ve farklı türde değer ataması yapamayız.
  
 * * JS'de çok kısıtlı bir otomatik tamamlama desteği bulunur.
 * * TS'de çok daha geniş kapsamlı otomatik tamamlama desteği bulunur.
  
 * * Not
 * * Typescript kodları tarayıcı tarafından doğrudan çalıştıramazlar.
 * * Bundan dolayı complier (tsc) ile ts kodunu js koduna çevirmeden çalıştıramıyoruz.
 * * Burdan anlayacağımız ts'in bütün tip tanımlama özellikleri sadece geliştirme sürecinde işimize yarar projeyi derleyip js'e çevirdiğimizde bütün ts kodları yok olur 
*/

let username: string = "Furkan";

username = "Mehmet";

const say = () => {};

console.log(username);
