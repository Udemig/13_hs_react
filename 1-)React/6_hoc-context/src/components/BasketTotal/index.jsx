import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";

const BasketTotal = () => {
  const { basket } = useContext(BasketContext);
  // Sepetteki toplam ürün miktarını bul
  const totalAmount = basket.reduce((amount, item) => amount + item.amount, 0);

  // Sepetteki toplam ürün fiyatını bul
  const totalPrice = basket.reduce(
    (price, item) => price + item.price * item.amount,
    0
  );

  return (
    <div className="p-4 rounded my-5 shadow d-flex flex-column justify-content-between">
      <div className="fs-3">
        <p>
          Sepette <span className="text-warning">{totalAmount} </span> ürün var
        </p>
        <p className="text-nowrap">
          Toplam fiyat:
          <span className="text-success text-nowrap">
            {totalPrice.toFixed(2)} $
          </span>
        </p>
      </div>

      <button className="btn btn-success px-3 py-2 fs-5 fw-bold">
        Sepeti Onayla
      </button>
    </div>
  );
};

export default BasketTotal;
