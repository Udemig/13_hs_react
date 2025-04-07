import React, { useContext, useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import api from "../../utils/api";
import { ProductContext } from "../../context/productContext";
const Header = () => {
  const [categories, setCategories] = useState([]);
  const { setSelectedCategory } = useContext(ProductContext);

  useEffect(() => {
    api.get("/products/categories").then((res) => setCategories(res.data));
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <FaBagShopping className="fs-3" />
            <span className="fs-3">Context Store</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-dark fw-bold" to="/">
                  Home Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link text-dark fw-bold" to="/basket">
                  Basket Page
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="dropdown-item"
                    >
                      All Products
                    </button>
                    {categories.map((category, key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(category)}
                        className="dropdown-item text-capitalize"
                      >
                        {category}
                      </button>
                    ))}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
