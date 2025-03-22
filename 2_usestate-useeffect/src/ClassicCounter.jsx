const ClassicCounter = () => {
  let counter = 0;

  const increase = () => {
    // Counterın değerini bir arttır
    counter++;
  };

  const decrease = () => {
    // Counterın değerini bir azalt
    counter--;
  };

  return (
    <div className="border p-3 mb-4">
      <h1 className="text-center mb-4">Classic Counter</h1>
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button onClick={increase} className="btn btn-success btn-lg">
          +
        </button>
        <span className="fs-1">{counter} </span>
        <button onClick={decrease} className="btn btn-danger btn-lg">
          -
        </button>
      </div>
    </div>
  );
};

export default ClassicCounter;
