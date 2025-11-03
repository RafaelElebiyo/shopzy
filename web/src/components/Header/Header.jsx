import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-dark py-3 shadow-sm">
      <div className="container d-flex align-items-center justify-content-between flex-wrap gap-3">
        {/* Logo */}
        <Link to="/home" className="text-white text-decoration-none fs-3 fw-bold me-3">
          Ecommerce
        </Link>

        {/* Search bar */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <SearchBar />
        </div>

        {/* Navbar links */}
        <nav className="d-flex align-items-center">
          <Navbar cartCount={2} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
