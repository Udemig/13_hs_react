import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductsList from "../features/products/ProductsList";
import { useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#c22020] min-h-screen text-white">
      <div className="container mx-auto p-4">
        <Header />
        <Hero />
        <div className="flex justify-center my-8">
          <button
            onClick={() => dispatch(toggleCart())}
            className="bg-yellow-400 text-black px-8 py-2 rounded-full font-bold"
          >
            Sepet
          </button>
        </div>
        <div className="bg-white text-black rounded-lg p-4 md:p-8">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
