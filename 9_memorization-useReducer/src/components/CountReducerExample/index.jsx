import React, { useReducer } from "react";
import counterReducer from "../../reducer/counterReducer";

const CountReducerExample = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const number = e.target[0].value;

    dispatch({ type: "DEĞERATA", payload: number });
  };
  return (
    <div className="d-flex flex-column align-items-center gap-5">
      <h1 className="fs-1 fw-bold">Count</h1>

      <div className="d-flex align-items-center gap-5">
        <button
          disabled={count == 0}
          onClick={() => dispatch({ type: "AZALT" })}
          className="btn btn-danger "
        >
          Azalt
        </button>
        <span className="fs-2 lead fw-bold">{count}</span>
        <button
          onClick={() => dispatch({ type: "ARTTIR" })}
          className="btn btn-success"
        >
          Arttır
        </button>
        <button
          onClick={() => dispatch({ type: "SIFIRLA" })}
          className="btn btn-secondary"
        >
          Sıfırla
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex align-items-center gap-4"
      >
        <input
          type="number"
          min={1}
          max={100}
          placeholder="Counter için değer giriniz ..."
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default CountReducerExample;
