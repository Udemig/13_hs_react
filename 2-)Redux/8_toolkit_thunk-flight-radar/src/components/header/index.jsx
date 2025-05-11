import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Uçuş Radarı</h2>
      </Link>

      <nav>
        <NavLink to="/">
          <button>Harita</button>
        </NavLink>

        <NavLink to="/list">
          <button>Liste</button>
        </NavLink>
      </nav>

      <h3>276 Uçuş Bulundu</h3>
    </header>
  );
};

export default Header;
