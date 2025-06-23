/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine
 * custom type ile ayrı bir noktada tipi tanımlayarak kullanabiliriz.
 */
// 1. Yöntem: Fonksiyonu direkt olarak tanımlarken tipi belirtme
var func1 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func2 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func3 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func5 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func6 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func7 = function (par1, par2) {
    return "Fonksiyon çağrıldı" + par1 + par2;
};
var func = function (shehir, derece) {
    if (derece > 20) {
        return "Hava sicak";
    }
    else if (derece < 10) {
        return "Hava soguk";
    }
    else {
        return "Hava normal";
    }
};
var result9 = func("Ankara", 25);
console.log(result9);
