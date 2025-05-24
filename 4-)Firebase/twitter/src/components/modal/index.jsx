// HOC: Higher Order Component

import { IoMdClose } from "react-icons/io";

// Farklı componentları / elementleri kapsayan ve kapsadığı elementlere children propu ile erişen componentlar
const Modal = ({ children, isOpen, close }) => {
  return (
    isOpen && (
      <div className="fixed bg-zinc-800/50 inset-0 backdrop-blur-md z-[999999] grid place-items-center">
        <div className="bg-black py-10 px-8 w-3/4 max-w-[500px] rounded-md">
          <div className="flex justify-end">
            <button type="button" className="cursor-pointer" onClick={close}>
              <IoMdClose className="text-3xl transition hover:text-gray-500" />
            </button>
          </div>

          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
