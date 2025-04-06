import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const Story = () => {
  const { books } = useOutletContext();

  const stories = books.filter((book) => book.category === "Hikaye");

  console.log(stories);

  return (
    <div>
      {/* Title */}
      <h2>Hikaye Kitapları</h2>

      <div className="row row-cols-1 row-cols-md-2 ">
        {stories.map((book) => (
          <div className="my-2">
            <Card key={book.id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
