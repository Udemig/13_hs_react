import type { FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Aradığını içerik bulunamadı</p>
      <Link to="/">Anasayfa'ya Dön</Link>
    </div>
  );
};

export default NotFound;
