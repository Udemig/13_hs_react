import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // Sepete Abone Ol
  const { isLoading, error, cart } = useSelector((store) => store.cartReducer);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
