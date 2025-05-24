import { useRef } from "react";
import Modal from ".";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/index";
import { toast } from "react-toastify";

const ResetModal = ({ isOpen, close }) => {
  const inputRef = useRef();

  const handleClick = () => {
    // inputtaki mail adresine eriş
    const email = inputRef.current.value;

    // mail yazılmadıysa fonksiyonu durdur
    if (!email.trim()) return;

    // şifre sıfırlama maili gönder
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Mailinize şifre sıfırlama bağlantısı gönderildi");
        close();
      })
      .catch(() => {
        toast.error("Mail gönderilemedi");
      });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col mx-auto gap-3 max-w-[350px]">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>

        <p className="text-zinc-400">Email adresine bir şifre sıfırlama bağlantısı göndericez</p>

        <input type="email" className="input mt-10" ref={inputRef} />

        <button
          type="button"
          onClick={handleClick}
          className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1 cursor-pointer"
        >
          Şifre sıfırlama maili gönder
        </button>

        <button
          type="button"
          onClick={close}
          className="bg-zinc-400 hover:bg-zinc-500 transition text-black rounded-full mt-3 py-1 cursor-pointer"
        >
          İptal
        </button>
      </div>
    </Modal>
  );
};

export default ResetModal;
