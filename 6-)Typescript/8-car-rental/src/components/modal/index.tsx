import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Images from "./images";
import Info from "./info";
import type { Car } from "../../types";

interface Props {
  car: Car;
  isOpen: boolean;
  close: () => void;
}

const Modal: FC<Props> = ({ isOpen, close, car }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md grid place-items-center z-50 p-4">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
              y: 50,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.1,
              opacity: 0,
              y: 50,
            }}
            transition={{
              duration: 0.2,
            }}
            className="car-details-dialog-panel w-[95%] sm:min-w-[600px] min-h-[70vh]"
          >
            <button name="modal'ı kapat" onClick={close} className="car-details-close-btn cursor-pointer">
              X
            </button>

            <Images car={car} />

            <Info car={car} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
