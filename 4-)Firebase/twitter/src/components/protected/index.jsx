import { onAuthStateChanged } from "firebase/auth";
import { use, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import Loader from "../loader";
import { toast } from "react-toastify";

const Protected = () => {
  // oturumu açık kullanıcnın state'i
  const [user, setUser] = useState(undefined);

  // kullanıcı oturum verisine eriş
  useEffect(() => {
    // oturum verisine abone ol
    const unsub = onAuthStateChanged(auth, (active_user) => setUser(active_user));

    // component ekrandan ayrılınca aboneliği durdur
    return () => unsub();
  }, []);

  // oturum verileri gelene kadar ekrana loader bas
  if (user === undefined) return <Loader />;

  // kullanıcının oturumu kapalıysa logine yönlendir
  if (user === null || user?.emailVerified == false) {
    if (user?.emailVerified === false) toast.info("Mailinizi doğrulayın");

    // Navigate: sayfanın yüklenme anında yapılan yönlendirmelerde useNavigate yerine kullanılır
    return <Navigate to="/" replace />;
  }

  // kullanıncın oturumu açıksa sayfayı göster
  // Outlet: Kapsayıcı route içerisinde alt route'un elementini ekrana basmaya yarar
  return <Outlet />;
};

export default Protected;
