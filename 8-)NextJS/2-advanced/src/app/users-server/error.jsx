"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1>Bir hata oluştu</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Tekrar dene</button>
    </div>
  );
};

export default Error;
