import React from "react";

const Modal = ({ updateItem, dispatch }) => {
  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();
    // Input'un içeriğine eriş
    const text = e.target[0].value;

    // Reducer'a haber gönder

    dispatch({ type: "UPDATE", payload: { id: updateItem.id, text } });
  };
  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="modal-title m-0 text-black">Todo Güncelle</h5>
          <button className="btn-close"></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Todo giriniz ..."
              defaultValue={updateItem.text}
              className="form-control"
              id="name"
              required
            />
          </div>

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
