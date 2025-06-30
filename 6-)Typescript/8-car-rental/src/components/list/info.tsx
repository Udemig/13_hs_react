import type { FC } from "react";
import type { Car } from "../../types";
import { motion } from "framer-motion";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car?.trany || "Bilinmiyor",
    },
    {
      icon: "/tire.svg",
      text: car?.drive || "Bilinmiyor",
    },
    {
      icon: "/calendar.svg",
      text: car?.year || "Bilinmiyor",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 },
    }),
  };

  return (
    <div className="flex-between">
      {arr.map((item, key) => (
        <motion.div
          custom={key} // index
          variants={variants}
          initial="hidden"
          key={key}
          whileInView="visible"
          className="flex-center flex-col"
        >
          <img src={item.icon} alt={item.text} width={25} height={25} />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
