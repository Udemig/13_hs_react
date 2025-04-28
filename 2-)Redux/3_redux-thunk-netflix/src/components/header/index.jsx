import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" alt="netflix" className="max-w-[150px]" />
      </Link>

      <Link to="/watch-list" className="flex gap-5 items-center hover:text-gray-300 transition">
        <div className="relative">
          <IoBookmark className="text-xl" />

          <span className="absolute right-[-13px] top-[-13px] bg-red-500 size-5 rounded-full grid place-items-center text-sm font-semibold">
            4
          </span>
        </div>
        <span>İzleme Listesi</span>
      </Link>
    </header>
  );
};

export default Header;
