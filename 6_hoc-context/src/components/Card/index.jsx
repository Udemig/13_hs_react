import React from "react";

const Card = () => {
  return (
    <div className="card py-2">
      <div className="d-flex justify-content-center">
        <img
          src="https://picsum.photos/200"
          className="img-fluid rounded object-fit-contain"
          alt=""
        />
      </div>

      <div className="card-body">
        <h4>Title</h4>
        <h5>Category</h5>
        <button>Add to basket</button>
      </div>
    </div>
  );
};

export default Card;
