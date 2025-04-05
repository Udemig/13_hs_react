import React from "react";
import { Link, Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div></div>

      <Link to="roman">Roman</Link>
      <Link to="hikaye">Hikaye</Link>

      <Outlet />
    </div>
  );
};

export default Category;
