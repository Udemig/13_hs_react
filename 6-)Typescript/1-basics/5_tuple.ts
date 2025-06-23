/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemalarının sırası sabit olan dizilerin tipinin tanımlanması için kullanılır.
 * Genelde as sayıda eleman içeren dizilerde kullanılır.
*/

// Örnek - 1

// x yanlış yol (union type)
const ders1: (string | number)[] = [5, "metematik", "3", "ali"];

// y doğru yol (tuple)
const ders2: [string, number] = ["veriatananı tasarımı", 2];

// Örnek - 2
// Bir css gradient verisi api'dan dizi içerisinde [doğrultu, renk1, renk2] şeklinde geliyor.
const gradient: [string, string, string] = ["to-right", "#32423", "#ffffff"];

// Örnek - 3
// Bir css rgb/rgba verisi api'dan dizi içerisinde [red, green, blue, alpha] şeklinde geliyor.
// Bu seneryoda alpha değeri isteğe bağlıdır.
let color: [number, number, number, number?];

color = [123, 46, 67];
color = [123, 46, 67, 0.1];

// Örnek - 4
// Birden fazla opsiyonel değer içeren tuple tipi tanımladığımız seneryoda:
// Bir opsiyonel ardından zorunlu değer gelemez
// Opsiyonel değerler her zaman dizinin sonunda olmalıdır.

let date: [number, number?, number?];

date = [10, 1, 1980];
date = [10, 1];
date = [10];
date = [10, , 1980];
