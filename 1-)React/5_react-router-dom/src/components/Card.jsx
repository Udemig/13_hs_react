import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow h-100 d-flex flex-column overflow-hidden">
      {/* Image */}
      <div className="card-image-wrapper">
        <img className="card-img-top rounded-top" src={book.image} alt="" />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column p-3">
        <h4 className="card-title mb-2 text-truncate">{book.title}</h4>
        <h4 className="card-subtitle text-secondary fs-5 mb-3 text-truncate">
          {book.author}
        </h4>
      </div>

      {/* Card Footer */}
      <div className="card-footer  border-0 p-3">
        <Link
          to={`/detay/${book.id}`}
          className="btn btn-primary w-100 fw-bold"
        >
          Detay'a Git
        </Link>
      </div>
    </div>
  );
};

export default Card;
