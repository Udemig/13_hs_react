import { signOut } from "firebase/auth";
import { auth } from "../../firebase/index";
import { toast } from "react-toastify";

const Feed = () => {
  console.log("Oturumu Açık Kullanıcı:", auth.currentUser);
  return (
    <div className="m-20 text-5xl text-center">
      <h1 className="mb-20">AKIŞ SAYFASI</h1>

      <button onClick={() => signOut(auth).then(() => toast.info("Çıkış Yapıldı"))}>Çıkış Yap</button>
    </div>
  );
};

export default Feed;
