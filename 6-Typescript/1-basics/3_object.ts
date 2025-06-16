/*
 ! Object Type
 * Normal şartlarda ts'de bir object type'ı mevcuttur.
 * Ama object type'ı ucu çok açık bir type olduğu için kullanılmasnı pek tercih etmeyiz
 * Biz genelede daha sepesifik bir şekilde özellikleri ve tipi belirli olan nesnelerle çalışır.
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;

data = {};
data = [];
data = () => {};
data = new Date();

// nense tipi tanımlamanın doğru yolu
let student: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated: boolean;
};

// belirlediğimiz tipe göre nesnenin değerlerini atamamız gerekiyor.
student = {
  id: 1,
  firstname: "Furkan",
  lastname: "Kılıç",
  isGraduated: false,
};
