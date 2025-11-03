import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <ul className="navbar-nav d-flex flex-row align-items-center gap-3 ms-auto">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/about-us">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/products">
          All Products
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-white"
          id="navbarDropdown"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/products/popular">
              Populars
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/products/popular">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/products/new">
              New Arrivals
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/profile/1">
          <i className="bi bi-person"></i> My Account
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/cart/3">
          <i className="bi bi-cart-fill"></i> ({cartCount})
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
