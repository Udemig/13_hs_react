import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
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
    api.get("/books", { params }).then((res) => setState(res.data));
  }, [searchParams]);

  return (
    <div className="container my-5">
      {/* Results */}
      <h2>{books.length} kitap bulundu</h2>

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
