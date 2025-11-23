import React, { useRef } from "react";
import "../styles/HomePage.css";

function ProductCarousel({ title, products }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth / 2; // desplazamiento a la mitad del carrusel
      carouselRef.current.scrollBy({ left: direction === "left" ? -width : width, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="product-carousel" ref={carouselRef}>
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <div>
                <span className="price">${product.price}</span>
                <span className="old-price">${product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones flotantes */}
      <div className="carousel-buttons">
        <button className="left" onClick={() => scroll("left")}>{"<"}</button>
        <button className="right" onClick={() => scroll("right")}>{">"}</button>
      </div>
    </div>
  );
}

export default ProductCarousel;
