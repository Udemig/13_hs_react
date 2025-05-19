import { useNavigate, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Room = () => {
  const user = useOutletContext();
  const navigate = useNavigate();

  // odaya gir
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki girdiyi al
    const room = e.target[0].value.toLowerCase().replaceAll(" ", "-");

    // kullanıcıyı sohbet odasına yönlendir
    navigate(`/chat/${room}`);
  };

  // oturumu kapat
  const handleLogout = async () => {
    await signOut(auth);
    toast.info("Oturum Kapandı");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="box rounded-[10px] flex flex-col gap-10 text-center">
        <h1 className="text-4xl">Chat Odası</h1>
        <p className="text-zinc-500">
          Selam, {user?.displayName} <br /> Hangi odaya gireceksin ?
        </p>

        <input
          type="text"
          className="border border-gray-300 rounded-md shadow-lg p-2 px-4"
          placeholder="örn:haftasonu"
        />

        <button type="submit" className="btn bg-zinc-700 text-white">
          Odaya Gir
        </button>
        <button onClick={handleLogout} type="button" className="btn bg-red-500 text-white">
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default Room;
