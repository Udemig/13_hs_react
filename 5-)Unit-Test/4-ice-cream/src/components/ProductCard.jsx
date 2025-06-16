import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [selectedFormat, setSelectedFormat] = useState(null);
  const dispatch = useDispatch();
  const { id, name, price, image } = product;

  const handleAddToCart = () => {
    if (!selectedFormat) return;

    dispatch(addToCart({ id, name, price, image, format: selectedFormat }));
    setSelectedFormat(null);
    toast.success("Ürün sepete eklendi!");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="flex justify-center items-center h-48 mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        {/* Product Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-lg font-semibold text-green-600">₺{price} / top</p>
        </div>

        {/* Format Selection */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 mb-3 text-center">
            Sipariş Tipi Seçin
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() =>
                setSelectedFormat(selectedFormat === "külah" ? null : "külah")
              }
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedFormat === "külah"
                  ? "bg-red-500 text-white shadow-md transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
              }`}
            >
              Külah
            </button>
            <button
              onClick={() =>
                setSelectedFormat(selectedFormat === "bardak" ? null : "bardak")
              }
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedFormat === "bardak"
                  ? "bg-red-500 text-white shadow-md transform scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
              }`}
            >
              Bardakta
            </button>
          </div>
        </div>

        {/* Add to Cart Button Container - Fixed Height to Prevent Layout Shift */}
        <div className="mt-auto h-12 flex items-center">
          {selectedFormat && (
            <button
              onClick={handleAddToCart}
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              Sepete Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
