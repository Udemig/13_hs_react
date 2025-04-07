import React, { createContext, useEffect, useState } from "react";
import api from "../utils/api.js";

// Context Kurulumu Yapan Metodu Çağır
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  // Ürünler için state oluştur
  const [products, setProducts] = useState([]);
  // Seçili kategori için  bir state oluştur.Başlangıç değeri 'all' olsun
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // ! Hangi endpoint'e istek atılacağını belirle
    // Seçili kategori all ise products endpoint'ine istek at değilse seçili kategorine istek at
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;
    // Api'dan ürün verilerini al
    //
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  return (
    // Bir HOC oluştur ve buna value olarak istenilen değerleri ver
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {/*  */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
