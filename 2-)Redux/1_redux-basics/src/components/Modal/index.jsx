import React from "react";
import { toast } from "react-toastify";
import api from "../../utils";
import actionTypes from "../../redux/actionTypes/actionTypes";
import { updateTodo } from "../../redux/actions/todoActions";

const Modal = ({ onClose, todo, dispatch }) => {
  const handleSubmit = (e) => {
    // Sayfa yenilmesini engelle
    e.preventDefault();
    // Input içerisindeki değerer eriş
    const newText = e.target[0].value;

    // Güncelenecek eleman içerisindeki text değerini güncelle
    const updatedTodo = {
      ...todo,
      text: newText,
    };
    // api
    //   .put(`/todos/${todo.id}`, updatedTodo)
    //   .then(() => {
    //     // Reducer'a güncellencek veriyi ilet
    //     dispatch({ type: actionTypes.update, payload: updatedTodo });
    //     // Bildirim gönder
    //     toast.success("Eleman başarıyla güncellendi");
    //   })
    //   .catch((err) => {
    //     // Bildirim gönder
    //     toast.success(
    //       `Eleman güncelleneriken bir hata oluştu:  ${err.message}`
    //     );
    //   });
    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => {
        // Reducer'a güncellencek veriyi ilet
        dispatch(updateTodo(updatedTodo));
        // Bildirim gönder
        toast.success("Eleman başarıyla güncellendi");
      })
      .catch((err) => {
        // Bildirim gönder
        toast.success(
          `Eleman güncelleneriken bir hata oluştu:  ${err.message}`
        );
      });

    // Modal'ı kapat
    onClose();
  };
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
      <div
        className="bg-white rounded shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h5 className="mb-0 text-dark">Todo Güncelle</h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="mb-5 d-flex gap-3">
          <input
            type="text"
            className="form-control"
            defaultValue={todo.text}
            placeholder="Bir şeyler yazınız..."
          />
          <button className="btn btn-primary">Kaydet</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
