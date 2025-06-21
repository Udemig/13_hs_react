/*
 ! Any Type
 * Bir değişkene any type atadığımız zaman typescript'in tip kontrolünü kapatır.
 * Any type atanmış bir değişkene her türlü tipte değer atayabiliriz.
 * Otomatik tamamlama ve editöre desteği, tür kısıtlaması devre dışı kalır.
 * Any type'ı kullanmak genelde kötü bir fikirdir.
 * Any type'ı ancak acileyeti olan durumlarda "geçici" olarak kullanılır.
*/

let foo: any;

foo = 10;

foo = "selam";

foo = true;

foo = {};

foo = [];

foo = () => {};

foo = new Date();
