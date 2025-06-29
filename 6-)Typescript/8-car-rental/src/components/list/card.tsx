import type { FC } from "react";
import type { Car } from "../../types";
import { getPrice } from "../../utils/getPrice";

interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  return (
    <div className="car-card group">
      {/* Araba İsmi */}
      <h2 className="car-card-content-title">{car.model}</h2>

      {/* Araba Fiyatı */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">{getPrice(car)}</span>
        <span className="font-semibold self-end">/gün</span>
      </div>
    </div>
  );
};

export default Card;
