import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const Noval = () => {
  const { books } = useOutletContext();

  const noval = books.filter((book) => book.category === "Roman");

  return (
    <div>
      {/* Title */}
      <h2>Roman Kitapları</h2>

      <div className="row row-cols-1 row-cols-md-2 ">
        {noval.map((book) => (
          <div className="my-2">
            <Card key={book.id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noval;
