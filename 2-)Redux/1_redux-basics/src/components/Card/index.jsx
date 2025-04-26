import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../Modal";
import api from "../../utils";
import actionTypes from "../../redux/actionTypes/actionTypes";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoActions";

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
      // api
      //   .delete(`/todos/${todo.id}`)
      //   .then(() => {
      //     //Silinecek elemanın id'sini reducer'a ilet
      //     dispatch({ type: actionTypes.delete, payload: todo.id });

      //     // Kullanıcıya bildirim gönder
      //     toast.success("Eleman silindi");
      //   })
      //   .catch((err) => {
      //     toast.error(`Eleman silinirken bir hata oluştu: ${err.message} `);
      //   });
      api
        .delete(`/todos/${todo.id}`)
        .then(() => {
          //Silinecek elemanın id'sini reducer'a ilet
          dispatch(deleteTodo(todo.id));

          // Kullanıcıya bildirim gönder
          toast.success("Eleman silindi");
        })
        .catch((err) => {
          toast.error(`Eleman silinirken bir hata oluştu: ${err.message} `);
        });
    }
  };

  // Status değiştiren fonksiyon
  const handleStatus = () => {
    // api
    //   .patch(`/todos/${todo.id}`, { is_done: !todo.is_done })
    //   .then(() => {
    //     // Reducer'a status değeri değişecek elemanı iletsin
    //     dispatch({ type: actionTypes.toggle, payload: todo.id });
    //   })
    //   .catch((err) => {
    //     toast.error(`Güncelleme sırasında bir hata oluştu:${err.message} `);
    //   });
    api
      .patch(`/todos/${todo.id}`, { is_done: !todo.is_done })
      .then(() => {
        // Reducer'a status değeri değişecek elemanı iletsin
        dispatch(toggleTodo(todo.id));
      })
      .catch((err) => {
        toast.error(`Güncelleme sırasında bir hata oluştu:${err.message} `);
      });
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
