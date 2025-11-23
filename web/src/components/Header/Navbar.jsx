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

      {/* CART WITH COUNTER BADGE */}
      <li className="nav-item position-relative">
        <Link className="nav-link text-white position-relative" to="/cart/3">
          <i className="bi bi-cart-fill fs-4"></i>
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
