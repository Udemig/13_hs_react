/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yere özel farklı bir tipte algılanmasını istiyorsak type casting kullanırız.
 * As operatörü ile kullanıldığı kod satırında değişkeninin tipini değiştirmeye yarar
 */
var product1 = {
    name: "Laptop",
    price: 45600.9999,
};
/*
 * Normalde price string veya number olabilceğinden
 * product.price number olmasına rağmen number'a özgü olan toFixed metodunu kullanamayız.
 * As kullabarak aşağıdaki kod satırına çzel price değişkenin tipini number olarak değiştirelim
 * Bu sayede number'a özgü olan toFixed metodunu kullanabiliriz.
 */
var x = product1.price.toFixed(2);
console.log(x);
