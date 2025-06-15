import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaIceCream,
  FaPlus,
  FaRegSnowflake,
  FaShoppingBasket,
} from "react-icons/fa";

import { fetchProducts } from "./productsSlice";
import ProductCard from "../../components/ProductCard";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;

  if (productStatus === "loading") {
    content = <p>Yükleniyor...</p>;
  } else if (productStatus === "succeeded") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else if (productStatus === "failed") {
    content = <p>{error}</p>;
  }

  const categoryIcons = [
    { id: 1, icon: <FaRegSnowflake />, label: "icon-1" },
    { id: 2, icon: <FaShoppingBasket />, label: "icon-2" },
    { id: 3, icon: <FaIceCream />, label: "icon-3" },
    { id: 4, icon: <FaPlus />, label: "icon-4" },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Kategori Seçiniz</h2>
        <div className="flex gap-4">
          {categoryIcons.map((item) => (
            <button
              key={item.id}
              aria-label={item.label}
              className="w-12 h-12 flex items-center justify-center bg-gray-700 bg-opacity-20 rounded-xl text-2xl text-white hover:bg-opacity-30 transition"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
      {content}
    </div>
  );
};

export default ProductsList;
