import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 ">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Shopzy</p>
        <p className="mb-0">
          <a href="/about-us" className="text-warning text-decoration-none">
            About Us
          </a>{" "}
          |{" "}
          <a href="/contact" className="text-warning text-decoration-none">
            Contact
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
