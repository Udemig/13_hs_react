import React, { createContext, useEffect, useState } from "react";
import api from "../utils/api.js";

// Context Kurulumu Yapan Metodu Çağır
const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  // State kurulumu
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Api'dan ürün verilerini al
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    // Bir HOC oluştur ve buna value olarak istenilen değerleri ver
    <ProductContext.Provider value={{ products }}>
      {/*  */}
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
