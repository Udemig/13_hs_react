/*
 ! Void Type
 * Sadece fonksiyonların return tipi için kullanılabilir
 * Fonksiyonun herhangi bir veri return etmediği durumlarda kulllanılır
 * Void varsa return satırı sadece fonksiyonu durdurmak amacıyla kullanılabilir
*/
function selamla() {
    console.log("Selamlar");
    return; // fonksiyonu durdurmak için return kullanabiliyoruz
}
/*
 ! Never Type
 * Saddece fonksiyonların return tipi için kullanılabilir
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * "Fonksiyon hiçbir zaman görevini tamamlayamaz" durumunu ifade eder
*/
function log(message) {
    if (!message) {
        throw new Error("Fonksiyona mesaj sağlanmadı");
    }
    else {
        return "mesaj alındı";
    }
}
console.log(log("selam"));
log();
