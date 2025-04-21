import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  // useNavigate Kurulumu
  const navigate = useNavigate();
  // * State Kurulumu
  const [books, setState] = useState([]);

  // * useSearchParams kurulumu
  const [searchParams] = useSearchParams();

  // ! Eğer url'e parametreler geçildiyse bunları al ve api'a gönder

  const params = {
    q: searchParams.get("search"),
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
  };

  // Bileşen ekrana geldiğinde ve searchParams her değiştiğinde api isteği at
  useEffect(() => {
    api.get("/books", { params }).then((res) => {
      if (res.data.length === 0) {
        // Eğer kitap yoksa notFound sayfasına yönlendir
        navigate("/notfound");
      }
      // Eğer kitap'ların uzunluğu sıfırdan farklıysa kitapları setState ile state'e aktar
      setState(res.data);
    });
  }, [searchParams]);

  return (
    <div className="container my-5">
      {/* Results */}

      {books.length === 0 ? (
        <h2>Kitap Bulunamadı</h2>
      ) : (
        <h2>{books.length} kitap bulundu</h2>
      )}

      {/* Filter */}
      <Filter />

      {/* Cards */}
      <div className="books-container">
        {books.map((book) => (
          <Card book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
