import React from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const mainImage = product.images && product.images.length > 0 
    ? product.images[0].url 
    : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg";

  const renderStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <div key={i} className={`bi-star-fill ${i < Math.floor(rating) ? 'text-warning' : 'text-muted'}`}></div>
      );
    }
    return <div className="d-flex justify-content-center small text-warning mb-2">{stars}</div>;
  };

  const getBadge = (product) => {
    const now = new Date();
    const createdAt = new Date(product.createdAt);
    const daysSinceCreation = (now - createdAt) / (1000 * 60 * 60 * 24);

    if (product.stockQuantity === 0) {
      return { text: 'Out of Stock', color: 'bg-danger' };
    }
    if (daysSinceCreation <= 7) {
      return { text: 'New', color: 'bg-success' };
    }
    if (product.averageRating >= 4) {
      return { text: 'Popular', color: 'bg-primary' };
    }
    if (product.stockQuantity < 10) {
      return { text: 'Low Stock', color: 'bg-warning text-dark' };
    }
    if (product.price < 500) {
      return { text: 'Sale', color: 'bg-dark' };
    }
    return null;
  };

  const badge = getBadge(product);

  return (
    <div className="col mb-5">
      <div className="card h-100 position-relative">
        {badge && (
          <div 
            className={`badge ${badge.color} position-absolute`} 
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            {badge.text}
          </div>
        )}
        <img 
          className="card-img-top" 
          src={mainImage} 
          alt={product.name || "Product image"} 
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body p-4">
          <div className="text-center">
            {product.brand && (
              <div className="small text-muted mb-1">{product.brand.name}</div>
            )}
            <h5 className="fw-bolder">{product.name}</h5>
            {renderStars(product.averageRating)}
            <div className="fs-5 mb-2">
              <span className="fw-bold text-primary">${product.price}</span>
            </div>
            {product.shortDescription && (
              <p className="small text-muted">{product.shortDescription}</p>
            )}
            <div className="small text-muted">
              {product.stockQuantity > 0 ? 
                `${product.stockQuantity} in stock` : 
                'Out of stock'
              }
            </div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button 
              className={`btn ${product.stockQuantity > 0 ? 'btn-outline-dark' : 'btn-secondary'}`}
              onClick={() => onAddToCart && onAddToCart(product)}
              disabled={product.stockQuantity === 0}
            >
              {product.stockQuantity > 0 ? "Add to cart" : "Out of stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
