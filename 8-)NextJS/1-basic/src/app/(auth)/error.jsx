"use client";

// error ve reset propları otomatik olarak gelir
const Error = ({ error, reset }) => {
  return (
    <div className="m-10 border border-red-500 p-3 flex-col gap-10">
      <h1>Bir hata oluştu</h1>
      <p className="text-red-500">{error.message}</p>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
