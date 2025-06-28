/*
 * Partial
 * Typecript içerisinde varsayılan olarak bulunan bir type'dır
 * Generic olarak aldığı nesnenin tüm propertylerini optional yapar
 */

type User = {
  username: string;
  age: number;
  passsword: string;
};

const createUser = (user: User) => {
  // axios.post > kullanıcının bütün değerleri tanımlanmalı
};

//* Partial kullanmadan
const updateUser = (user: {
  username?: string;
  age?: number;
  password?: string;
}) => {
  // axios.patch() > sadece güncellenicek değerleri tanımla
};

//* Partial kullanarak
const updateUser2 = (user: Partial<User>) => {
  // axios.patch() > sadece güncellenicek değerleri tanımla
};

createUser({ username: "John Doe", age: 20, passsword: "123456" });

updateUser({ age: 22 });
updateUser2({ username: "Ali" });
