import React, { useState } from "react";

const Count = ({ giveAlert }) => {
  const [count, setCount] = useState(0);

  console.log("💯 Count Bileşeninden Selamlar");

  return (
    <div className="d-flex flex-column gap-5">
      <h1 className="text-center">Count</h1>

      <div className="d-flex align-items-center gap-4">
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">
          -
        </button>
        <span className="fs-3 fw-bold">{count} </span>
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          +
        </button>
        <button onClick={() => setCount(0)} className="btn btn-secondary">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default React.memo(Count);
