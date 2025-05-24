import { useState } from "react";
import AuthToggle from "./auth-toggle";
import EmailInput from "./email-input";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";
import ForgotPassword from "./forgot-password";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isModeLogin, setIsModeLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputalardaki verileri al
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      if (isModeLogin) {
        // giriş yapma modundaysak:
        const res = await signInWithEmailAndPassword(auth, email, password);

        // mailini doğrulamamış ise bildirim gönder
        if (!res.user.emailVerified) {
          return toast.info("Lütfen mailinizi doğrulayın");
        }

        // maili doğrulanmış ise: ansayfaya yöneldndir ve bildirim gönder
        navigate("/feed");
        toast.success("Hesaba giriş yapıldı");
      } else {
        // kaydolma modundaysak:
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş yapma moduna geç
        setIsModeLogin(true);

        // bildirim gönder
        toast.info("Mailinize doğrulama epostası gönderildi");
      }

      e.target.reset();
    } catch (error) {
      // hatayı bildirm olarak gönder
      toast.error("Hata:" + error.code);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isModeLogin={isModeLogin} />

      <SubmitButton isModeLogin={isModeLogin} />

      <AuthToggle setIsModeLogin={setIsModeLogin} isModeLogin={isModeLogin} />
    </form>
  );
};

export default LoginForm;
