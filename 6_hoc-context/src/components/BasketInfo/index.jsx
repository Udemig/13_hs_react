import React from "react";
import { Link } from "react-router-dom";
const BasketInfo = () => {
  return (
    <div className="text-center shadow px-3 py-5 rounded fs-2">
      <p>First,add to products to basket</p>
      <Link className="btn btn-primary fw-bold" to="/">
        Go to products
      </Link>
    </div>
  );
};

export default BasketInfo;
