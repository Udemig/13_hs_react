const Error = ({ message }) => {
  return (
    <div className="wrapper">
      <div className="error">
        <p>Uçuş Verileri alınamadı</p>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
