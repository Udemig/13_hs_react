import { useState } from "react";
import ResetModal from "../modal/reset-modal";

const ForgotPassword = ({ isModeLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  // eğer login modunda değilsek butonun yerini doldurucak boş div bas
  if (!isModeLogin) return <div className="h-[28px] w-1" />;

  return (
    <>
      <button
        type="button"
        className="text-end text-sm text-gray-500 hover:text-gray-400 mt-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Şifreni mi unuttun
      </button>

      <ResetModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default ForgotPassword;
