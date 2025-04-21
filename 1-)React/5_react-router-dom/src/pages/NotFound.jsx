import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="container py-5 d-flex flex-column align-items-center justify-content-center gap-3
     "
    >
      <h1 className="text-nowrap">Aradığınız Ürün Bulunamadı</h1>
      <img src="/notFound.gif" className="img-fluid image " alt="" />
      <Link className="text-white fs-4" to="/kitaplar">
        Kitaplar Sayfasına Git
      </Link>
    </div>
  );
};

export default NotFound;
