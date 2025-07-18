/*
 ! Default Params (Varsayılan Parametreler)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varasyılan bir değere sahip olmasını istersek bunu ullanırız
*/
// Örnek
function selamVer(isim) {
    if (isim === void 0) { isim = "Dünya"; }
    console.log("Merhaba ".concat(isim));
}
selamVer("Furkan"); // Merhaba Furkan
selamVer(); // Merhaba Dünya
/*
 ! Challange
 * Ürünün kdv eklemiş fiyatını hesaplayan fonksiyon yazınız
 * Fonksiyon 2 parametre alsın: ürün fiyatı ve kdv oranı
 * 2. parametreye değer gönderilmediğinde kdv 18% den hesaplansın
 
 * hesapla(200,35) ===> 270
 * hesapla(200) ===> 236
 * // kopya: fiyat + (kdv / 100) * fiyat
*/
function hesap(fiyat, kdv) {
    if (kdv === void 0) { kdv = 18; }
    return fiyat + (kdv / 100) * fiyat;
}
console.log(hesap(200, 35));
console.log(hesap(200));
