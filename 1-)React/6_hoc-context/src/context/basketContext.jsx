import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

// Context yapısını oluşturur
const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  // Basket state'i
  const [basket, setBasket] = useState([]);

  // Sepete ürün eklemek için kullanılan fonksiyon
  const addToBasket = (product) => {
    // Sepete eklenecek ürün sepette var mı bunu kontrol et
    const founded = basket.find((i) => i.id === product.id);
    // Eğer sepette ürün varsa bunun miktarını güncelle
    if (founded) {
      // Ürünün miktarını 1 arttır
      const updated = { ...founded, amount: founded.amount + 1 };

      // Sepet'i dön ve güncellenen ürününün yeni halini eski haliyle değiştir
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));

      // Sepeti güncelle
      setBasket(newBasket);
      toast.success(`Product amount updated:${updated.amount} `);
    } else {
      // Eğer sepete ürün eklenecekse ürünün tüm değerlerini tut ve üzerine miktar değeri ekle
      setBasket(basket.concat({ ...product, amount: 1 }));
      toast.success(`Product added to basket`);
    }
  };

  // Sepetten bir ürünü kaldıran fonksiyon
  const removeFromBasket = (delete_id) => {
    // İd'si bilinen ürünü sepetten kaldır
    const filtred = basket.filter((i) => i.id != delete_id);

    // Sepeti güncelle
    setBasket(filtred);
    toast.error(`Product removed from basket`);
  };

  // Sepetten bir ürününün miktarını azaltan fonksiyon
  const decreaseAmount = (delete_id) => {
    // Miktarı azaltılacak ürünü sepette bul
    const found = basket.find((i) => i.id === delete_id);

    // Eğer ürünün miktarı 1'den farklıysa miktarını 1 azalt;eğer 1 ise ürünü sepetten kaldır
    if (found.amount > 1) {
      // Bulunan elemanın miktarını bir azalt
      const updated = { ...found, amount: found.amount - 1 };

      // Güncel değeri sepet dizisine aktar

      const newBasket = basket.map((i) => (i.id == updated.id ? updated : i));

      // Sepeti güncelle
      setBasket(newBasket);
    } else {
      // Ürünün miktarı 1 ise bunu sepetten kaldır
      removeFromBasket(delete_id);
    }
  };
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {/*  */}
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
