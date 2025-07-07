import { useState, type FC } from "react";
import type { Car } from "../../types";
import { getPrice } from "../../utils/getPrice";
import Info from "./info";
import Button from "../button";
import { motion } from "framer-motion";
import Modal from "../modal";
import getImage from "../../utils/getImage";

interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* Card */}
      <div className="car-card group">
        {/* Araba İsmi */}
        <h2 className="car-card-content-title">{car.model}</h2>

        {/* Araba Fiyatı */}
        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car)}</span>
          <span className="font-semibold self-end">/gün</span>
        </div>

        {/* Araç Resmi */}
        <div>
          <img src={getImage(car)} className="w-full h-full object-contain min-h-[200px]" alt={car.model} />
        </div>

        {/* Araç Detayları */}
        <div className="w-full">
          <div className="group-hover:hidden">
            <Info car={car} />
          </div>

          <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className="hidden group-hover:block">
            <Button
              text="Daha Fazla"
              name="daha fazla"
              designs="w-full text-white mt-[0.5px]"
              fn={() => setIsOpen(true)}
            />
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Modal car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Card;
