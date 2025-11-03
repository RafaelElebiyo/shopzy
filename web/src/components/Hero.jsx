import React from 'react';

const Hero = ({ title = "Shop in Modern Style", subtitle = "Discover our curated collection of premium products" }) => {
  return (
    <header className="bg-primary bg-gradient py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bold">{title}</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;