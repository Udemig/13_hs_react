const Error = ({ message, refetch }) => {
  return (
    <div data-testid="error" className="col-span-3 my-20 flex flex-col justify-center text-center gap-10">
      <div className="bg-red-400 p-5 rounded-md text-white">
        <p>Üzgünüz bir sorun oluştu</p>
        <p>{message}</p>
      </div>

      <button onClick={refetch} className="border shadow mt-10 text-black p-2">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
