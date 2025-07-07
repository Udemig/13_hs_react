import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-card/90 shadow-sm z-10 backdrop-blur-md">
      <div className="container py-4 px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo ve Site Başlığı */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <h1 className="text-xl font-semibold text-text-primary">NotApp</h1>
          </Link>

          {/* Navigasyon Menüsü */}
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 px-3 rounded-full transition-all ${
                  isActive
                    ? "bg-primary text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              Notlar
            </NavLink>

            <NavLink
              to="/create"
              className={({ isActive }) =>
                `py-2 px-3 rounded-full transition-all ${
                  isActive
                    ? "bg-primary text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`
              }
            >
              Yeni Not
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
