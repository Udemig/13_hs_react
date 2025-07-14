import type { FC } from "react";
import Header from "../header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
