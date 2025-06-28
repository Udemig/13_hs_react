/*
 * Omit
 * Bir type'da istemediğimiz bir değer olduğunda bütün tipi baştan yazmak yerine istemediğimiz değeri çıkartıp yeni bir tip oluştumamıza olanak sağlar
 */

type Product = {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
};

// api'dan alanın ürünleri return eden fonksiyon
const getProducts = (): Product[] => {
  return [{ id: 1, name: "Apple", price: 10, isAvailable: true }];
};

// api'a yeni bir ürün ekleme fonksiyonu
// omit olmadan:
const createProduct1 = (newProduct: {
  name: string;
  price: number;
  isAvailable: boolean;
}) => {};

// omit kullanarak:
const createProduc2 = (newProduct: Omit<Product, "id" | "name">) => {};

createProduc2({
  price: 10,
  isAvailable: true,
});
