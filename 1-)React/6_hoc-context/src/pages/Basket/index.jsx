import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import BasketCard from "../../components/BasketCard";
import BasketTotal from "../../components/BasketTotal";
import BasketInfo from "../../components/BasketInfo";

const Basket = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="container mt-5">
      <h1>Basket</h1>

      <div className="row">
        {/* Basket Items */}
        <div className="col-lg-8 px-3 ">
          {basket.length === 0 ? (
            <BasketInfo />
          ) : (
            basket.map((item) => <BasketCard item={item} key={item.id} />)
          )}
        </div>

        {/* Basket Total */}
        <div className="col-lg-4">{basket.length != 0 && <BasketTotal />}</div>
      </div>
    </div>
  );
};

export default Basket;
