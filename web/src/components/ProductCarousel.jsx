import React from "react";
import ProductCardHome from "./ProductCardHome";
import "../styles/ProductCarousel.css";

function ProductCarousel({ products, title }) {
  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h3>{title}</h3>
        <a href="/products" className="view-more">Voir plus →</a>
      </div>

      <div className="carousel">
        {products.map((product, index) => (
          <ProductCardHome key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
