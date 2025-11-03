import React from "react";

const SearchBar = ({ placeholder = "Search" }) => {
  return (
    <form className="d-flex align-items-center search-bar mx-3 flex-grow-1">
      <input
        className="form-control me-2 rounded-pill px-3"
        type="search"
        placeholder={placeholder}
        aria-label="Buscar"
        style={{ minWidth: "300px" }}
      />
      <button
        className="btn btn-warning rounded-pill"
        type="submit"
        style={{ minWidth: "80px" }}
      >
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
