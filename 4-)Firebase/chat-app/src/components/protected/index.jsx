import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../loader";

const Protected = () => {
  // aktif kullanıncının (oturumu açık olan) state'i
  const [user, setUser] = useState(undefined);

  // aktif kullanıcının (oturumu açık olan) verisini al
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
  }, []);

  // kullanıcı verisi yükleniyorsa loader bas
  if (user === undefined) return <Loader />;

  // kullancının oturumu kapalıysa login sayfasına yönlendir
  // <Navigate />: component'ın yüklenmesi sırasında yapılacak yönlendirmelerde useNavigate yerine kullanılır
  if (user === null) return <Navigate to="/" replace />;

  // kullancının oturumu açıksa ilgili sayfayı göster
  // Outlet: kapsayıcı route içerisinde alt route'un elementi ekrana basmaya yarar
  return <Outlet context={user} />;
};

export default Protected;
