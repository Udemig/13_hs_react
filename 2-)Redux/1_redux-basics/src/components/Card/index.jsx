import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../Modal";

const Card = ({ todo }) => {
  // Todo içerisindeki createdAt değerini formatla
  const date = new Date(todo.createdAt).toLocaleDateString("tr", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const [isShow, setIsShow] = useState(false);

  // Dispatch kurulumu
  const dispatch = useDispatch();
  // Silme işlemi yapacak fonksiyon
  const handleDelete = () => {
    // Kullanıcıdan onay al
    const res = confirm("Silme işlemini onaylıyormusunuz ?");

    // Eğer silme işlemi kullanıcı tarafından onaylanırsa
    if (res) {
      //Silinecek elemanın id'sini reducer'a ilet
      dispatch({ type: "DELETE_TODO", payload: todo.id });

      // Kullanıcıya bildirim gönder
      toast.error("Eleman silindi");
    }
  };

  // Status değiştiren fonksiyon
  const handleStatus = () => {
    // Reducer'a status değeri değişecek elemanı iletsin
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  // Düzenleme yapan fonksiyon

  return (
    <>
      <div className="border rounded p-4 my-5 shadow-lg d-flex align-items-center justify-content-between ">
        <div className="d-flex flex-column gap-2">
          <h3>{todo.text}</h3>
          <h6>{date}</h6>
          <h5 className={todo.is_done ? "text-success" : "text-danger"}>
            {todo.is_done ? "Tamamlandı" : "Devam Ediyor"}
          </h5>
        </div>

        <div className="d-flex gap-4">
          <button onClick={() => setIsShow(true)} className="btn btn-warning">
            Düzenle
          </button>
          <button
            onClick={handleStatus}
            className={`btn ${todo.is_done ? "btn-secondary" : "btn-success"}`}
          >
            {todo.is_done ? "Geri Al" : "Tamamlandı"}
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Sil
          </button>
        </div>
      </div>

      {isShow && (
        <Modal
          dispatch={dispatch}
          todo={todo}
          onClose={() => setIsShow(false)}
        />
      )}
    </>
  );
};

export default Card;
