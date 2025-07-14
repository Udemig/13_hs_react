import type { FC } from "react";
import { useUser } from "../../service/auth";
import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ children, allowedRoles }) => {
  // oturumu açık olan kullanıcnın verisini al
  const { user, isLoading } = useUser();

  // kullanıcı verisi yüklenene kadar loader göster
  if (isLoading) return <Loader />;

  // oturum açık değilse login sayfasına yönlendir
  if (!user) return <Navigate to="/login" replace />;

  // eğer rolü yetersiz ise login sayfasına yönlendir
  if (allowedRoles && !allowedRoles.includes(user?.role || ""))
    return <Navigate to="/" replace />;

  // oturumu açıksa ve rol yeterli ise sayfayı göster
  return children;
};

export default Protected;
