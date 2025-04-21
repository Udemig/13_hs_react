import React from "react";

const Info = ({ title, value }) => {
  return (
    <p>
      <span className="badge bg-danger fs-6 me-3 px-3  py-2 fw-bold">
        {title} :
      </span>
      <span className="fw-bold">{value} </span>
    </p>
  );
};

export default Info;
