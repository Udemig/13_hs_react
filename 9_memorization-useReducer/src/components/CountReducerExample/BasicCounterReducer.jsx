import React, { useReducer } from "react";

const CountReducerExample = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "ARTTIR":
        return state + 1;
      case "AZALT":
        return state - 1;
      case "SIFIRLA":
        return 0;
      default:
        return state;
    }
  }, 0);
  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <h1 className="fs-1 fw-bold">Count</h1>

      <div className="d-flex align-items-center gap-5">
        <button onClick={() => dispatch("AZALT")} className="btn btn-danger ">
          Azalt
        </button>
        <span className="fs-2 lead fw-bold">{count}</span>
        <button onClick={() => dispatch("ARTTIR")} className="btn btn-success">
          Arttır
        </button>
        <button
          onClick={() => dispatch("SIFIRLA")}
          className="btn btn-secondary"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default CountReducerExample;
