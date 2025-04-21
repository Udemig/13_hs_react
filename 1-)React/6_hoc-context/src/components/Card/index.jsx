import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="card py-2 d-flex flex-column gap-5">
      <div className="d-flex justify-content-center">
        <img src={product.image} height={120} alt="" />
      </div>

      <div className="card-body">
        <h4 className="text-truncate">{product.title} </h4>
        <h5 className="text-secondary">{product.category}</h5>
        <button
          onClick={() => addToBasket(product)}
          className="btn btn-primary w-100 mt-2"
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Card;
