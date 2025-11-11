import React from "react";
import "../styles/ProductCardHome.css";

function ProductCardHome({ product }) {
  const price = product.price;
  const oldPrice = product.oldPrice;
  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

  return (
    <div className="product-card-home">
      {discount && <span className="discount-badge">-{discount}%</span>}

      <img src={product.image} alt={product.name} className="product-img" />

      <div className="product-info">
        <p className="product-name">{product.name}</p>

        <p className="product-price">
          {price} Dhs
          {oldPrice && <span className="old-price">{oldPrice} Dhs</span>}
        </p>
      </div>
    </div>
  );
}

export default ProductCardHome;
