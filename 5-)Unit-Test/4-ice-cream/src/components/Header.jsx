import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <img src="/images/logo.svg" alt="logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">Drop Cream</h1>
      </div>
      <nav className="hidden md:flex gap-8">
        <a href="#" className="hover:text-red-500">
          Anasayfa
        </a>
        <a href="#" className="hover:text-red-500">
          Hakkımızda
        </a>
        <a href="#" className="hover:text-red-500">
          Yakındakiler
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-2xl">
          <CiSearch />
        </button>
        <button className="text-2xl md:hidden">
          <HiOutlineMenuAlt3 />
        </button>
      </div>
    </header>
  );
};

export default Header;
