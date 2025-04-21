import React, { useReducer, useState } from "react";
import Modal from "../Modal";
import todoReducer from "../../reducer/todoReducer";
import { toast } from "react-toastify";

const Todo = () => {
  // Modal'ı kontrol etmek için state
  const [isShow, setIsShow] = useState(false);
  // Güncelleme yapılacak elemanın bilgileri için state
  const [updateItem, setUpdateItem] = useState(null);

  const initialState = {
    todos: [],
    isAdmin: true,
    studentName: "Doğukan",
  };
  // Reducer Kurulumu
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();

    // Input'un değerine eriş
    const text = e.target[0].value;

    // Reducer'a haber gönder
    dispatch({ type: "ADD", payload: text });

    // Formu resetle
    e.target.reset();

    // Bildirim Gönder
    toast.success("Todo başarıyla eklendi");
  };
  // Silme işlemi yapacak fonksiyon
  const handleDelete = (id) => {
    // Kullanıcıdan silme işlemi için onay al
    const res = confirm("Silme işlemini onaylıyormusunuz ?");
    // Eğer silme işlemi için onay verildiyse todo elemanını silsin
    if (res) {
      dispatch({ type: "DELETE", payload: id });
    }
    // Kullanıcıya bildirim göndersin
    toast.error("Todo elemanı silindi");
  };

  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="d-flex gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo giriniz ..."
        />
        <button className="btn btn-primary">Ekle</button>
      </form>

      {/* Todo List */}
      <ul className="my-5 list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center rounded mb-4"
          >
            <span className="fw-bold fs-5">{item.text} </span>

            <div className="d-flex gap-3">
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-danger fw-bold"
              >
                Sil
              </button>
              <button
                onClick={() => {
                  setIsShow(true);
                  setUpdateItem(item);
                }}
                className="btn btn-warning fw-bold"
              >
                Düzenle
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isShow && (
        <Modal
          updateItem={updateItem}
          dispatch={dispatch}
          setIsShow={setIsShow}
        />
      )}
    </div>
  );
};

export default Todo;
