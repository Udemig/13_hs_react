import React, { useContext } from "react";
import { FaStar, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { BasketContext } from "../../context/basketContext";

const BasketCard = ({ item }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div className="d-flex rounded align-items-center gap-3 bg-body text-black rounded-md mt-3 px-3 py-2">
      {/* Image */}
      <div>
        <img
          src={item.image}
          height={80}
          className="rounded object-fit-contain"
          width={80}
          alt=""
        />
      </div>
      {/* Info */}
      <div className="d-flex flex-wrap gap-3 w-100 justify-content-between align-items-center">
        {/* Title & Rating & Price */}
        <div>
          <h5 className="text-truncate">{item.title.slice(0, 35) + "..."}</h5>
          <p className="d-flex align-items-center gap-1">
            <FaStar className="text-warning" />
            <span className="fw-bold">{item.rating.rate} </span>
          </p>
          <p className="fs-5">
            Price: <span className="fw-bold">{item.price} $</span>
          </p>
        </div>
        {/* Price & Controller */}
        <div className="d-flex align-items-center  gap-4 ">
          <div className="d-flex align-items-center gap-3">
            <span className="fs-5 fw-bold text-nowrap">
              Amount: {item.amount}
            </span>
            <button
              onClick={() => decreaseAmount(item.id)}
              className="btn btn-danger"
            >
              <FaMinus />
            </button>
            <button
              onClick={() => addToBasket(item)}
              className="btn btn-success"
            >
              <FaPlus />
            </button>

            <button
              onClick={() => removeFromBasket(item.id)}
              className="btn btn-secondary"
            >
              <FaTrash />
            </button>
          </div>

          <p className="pt-3 text-nowrap">
            Total: <span className="fw-bold">{item.price * item.amount} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
