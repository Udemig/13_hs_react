import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";

const CounterExample = () => {
  // Store içerisindeki counterReducer'a abone ol
  const { count } = useSelector((store) => store.counterReducer);
  // Dispatch kurulumu
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column gap-4 text-center">
      <h1>Counter</h1>

      <div className="d-flex  gap-4 align-items-center justify-content-center">
        <button
          onClick={() => dispatch({ type: "AZALT" })}
          className="btn btn-danger"
        >
          -
        </button>
        <span className="fs-1 fw-bold">{count}</span>
        <button
          onClick={() => dispatch({ type: "ARTTIR" })}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "SIFIRLA" })}
          className="btn btn-secondary"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default CounterExample;
