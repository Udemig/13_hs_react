const Error = ({ message }) => {
  return (
    <div>
      <div className="bg-red-100 my-32 p-10 rounded-md text-lg text-center">
        <p>Üzgünüz bir sorun oluştu</p>
        <p className="font-semibold mt-5">{message}</p>
      </div>
    </div>
  );
};

export default Error;
