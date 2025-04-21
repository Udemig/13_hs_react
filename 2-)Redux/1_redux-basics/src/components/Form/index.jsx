import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const Form = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input'daki verilere eriş
    const text = e.target[0].value;

    console.log(text);

    // Reducer'a iletilecek veriyi oluştur
    const newTodo = {
      id: v4(),
      text,
      is_done: false,
      createdAt: new Date().getTime(),
    };
    // Oluşturulan veriyi reducer'a ilet
    dispatch({ type: "ADD_TODO", payload: newTodo });

    // Formu resetle
    e.target.reset();

    // Kullanıcıya bildirim gönder
    toast.success("Eleman başarıyla eklendi");
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Birşeyler yazınız ... Ör:React Öğren"
      />
      <button type="submit" className="btn btn-warning">
        Ekle
      </button>
    </form>
  );
};

export default Form;
