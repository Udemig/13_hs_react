import React from "react";
import { BsBasket } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          ThunkSepeti
        </Link>

        <div className="flex gap-5">
          <Link to="/" className="flex items-center gap-1 hover:underline">
            Yakınınızda 13 <IoRestaurant className="text-red-500" />{" "}
            <span className="max-md:hidden">Restoran var</span>
          </Link>

          <button className="button">Giriş Yap</button>
          <button className="button">Kayıt Ol</button>

          <Link className="basket-button">
            <BsBasket />
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
