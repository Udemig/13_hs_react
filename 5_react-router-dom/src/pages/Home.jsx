import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center justify-content-around gap-5">
      <h1>Hoş Geldiniz</h1>

      <img
        src="/welcome.webp"
        alt="banner-image"
        className="img-fluid rounded image"
      />

      <p className="fw-bold">Kitaplara ürünler sayfasından ulaşabilirsiniz.</p>
    </div>
  );
};

export default Home;
