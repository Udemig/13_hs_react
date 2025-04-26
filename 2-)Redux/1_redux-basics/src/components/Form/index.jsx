import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import api from "../../utils";
import actionTypes from "../../redux/actionTypes/actionTypes";
import { addTodo } from "../../redux/actions/todoActions";

const Form = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input'daki verilere eriş
    const text = e.target[0].value;

    // Reducer'a iletilecek veriyi oluştur
    const newTodo = {
      id: v4(),
      text,
      is_done: false,
      createdAt: new Date().getTime(),
    };

    // Oluşturulan todo verisini api'a gönder
    // api
    //   .post("/todos", newTodo)
    //   .then(() => {
    //     // Eğer api isteği başarılı olursa reducer'a haber gönder ve kullanıcıya bildirim gönder
    //     dispatch({ type: actionTypes.add, payload: newTodo });
    //     // Kullanıcıya bildirim gönder
    //     toast.success("Eleman başarıyla eklendi");
    //   })
    //   .catch((err) => {
    //     // Eğer api isteği başarısız olursa hata ver
    //     toast.error(`Todo eklenirken bir hata oluştu:${err.message} `);
    //   });
    api
      .post("/todos", newTodo)
      .then(() => {
        // Eğer api isteği başarılı olursa reducer'a haber gönder ve kullanıcıya bildirim gönder
        dispatch(addTodo(newTodo));
        // Kullanıcıya bildirim gönder
        toast.success("Eleman başarıyla eklendi");
      })
      .catch((err) => {
        // Eğer api isteği başarısız olursa hata ver
        toast.error(`Todo eklenirken bir hata oluştu:${err.message} `);
      });

    // Formu resetle
    e.target.reset();
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
