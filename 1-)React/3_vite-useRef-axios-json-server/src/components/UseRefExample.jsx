import React, { useRef, useState } from "react";

const UseRefExample = () => {
  // todo: Email ve şifre inputlarının boş olmamam durumun kontrol eden ve eğer boşsa hata veren bir örnek oluşturunuz.

  // Email ve şifre hatası için birer state oluştur
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  // Email ve şifre inputları için birer referans oluştur
  const emailRef = useRef();
  const passwordRef = useRef();

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemeyi engelle
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Email yoksa bir hata oluştur
    if (!email) {
      setEmailError("Email alanı doldurulmalıdır !");
      return;
    } else {
      setEmailError(null);
    }

    // Password yoksa bir hata oluştur
    if (!password) {
      setPasswordError("Şifre alanı doldurulmalıdır !");
      return;
    } else {
      setPasswordError(null);
    }

    // Eğer email ve şifre boş değilse formu gönder

    alert("Form başarıyla gönderildi");

    // Formu resetle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className=" my-5  border rounded p-3">
      <h1 className="text-center mb-4">Use Ref Form</h1>
      <div className="mb-4">
        <input
          type="email"
          placeholder="emailinizi giriniz ..."
          className="form-control"
          ref={emailRef}
        />
        {/* Eğer email hatası varsa bunu renderla */}
        {emailError && (
          <p className="bg-danger mt-2 p-1 rounded">{emailError}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="şifrenizi giriniz ..."
          className="form-control"
          ref={passwordRef}
        />
        {passwordError && (
          <p className="bg-danger mt-2 p-1 rounded">{passwordError}</p>
        )}
      </div>

      <div className="d-flex aling-items-center justify-content-center">
        <button className="btn btn-primary px-4 fw-bold">Send</button>
      </div>
    </form>
  );
};

export default UseRefExample;
