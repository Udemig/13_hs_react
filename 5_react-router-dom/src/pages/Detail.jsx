import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Info from "../components/Info";

const Details = () => {
  // State kurulumu
  const [book, setBook] = useState(null);
  // Url'den id değerine eriş
  const { id } = useParams();

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, []);

  return (
    <div className="row container my-5 mx-auto">
      {/* Image */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          src={book?.image}
          className="rounded img-fluid shadow"
          alt={book?.title}
        />
      </div>

      {/* Info */}

      <div className="col-md-6 d-flex flex-column my-3 justify-content-center align-items-center">
        <h1 className="text-center text-nowrap">{book?.title} </h1>

        <div>
          <Info title="Yazar" value={book?.author} />
          <Info title="Yıl" value={book?.year} />
          <Info title="Sayfa Sayısı" value={book?.page} />
          <Info title="Fiyat" value={book?.price} />
          <Info title="Açıklama" value={book?.description} />
        </div>
      </div>
    </div>
  );
};

export default Details;
