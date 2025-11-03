import React from 'react';
import { StarFill, StarHalf, Truck, ShieldCheck, Heart } from 'react-bootstrap-icons';

const ProductInfo = ({ product, quantity, setQuantity }) => {
  const renderRating = () => {
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    return (
      <div className="product-rating">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <StarFill key={i} className="star filled" />;
          } else if (i === fullStars && hasHalfStar) {
            return <StarHalf key={i} className="star half-filled" />;
          } else {
            return <StarFill key={i} className="star empty" />;
          }
        })}
        <span className="rating-count">({product.reviews} reviews)</span>
      </div>
    );
  };

  return (
    <div className="product-info">
      <h1 className="product-title">{product.name}</h1>
      
      {renderRating()}
      
      <div className="price-section">
        {product.originalPrice && (
          <span className="original-price">${product.originalPrice.toFixed(2)}</span>
        )}
        <span className="current-price">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="discount-badge">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>
      
      <p className="product-short-desc">
        {product.description.substring(0, 100)}...
      </p>
      
      <div className="product-colors">
        <h4>Color:</h4>
        <div className="color-options">
          {product.colors.map((color, index) => (
            <button 
              key={index} 
              className="color-option"
              style={{ backgroundColor: color.toLowerCase() }}
              aria-label={color}
            />
          ))}
        </div>
      </div>
      
      <div className="quantity-selector">
        <h4>Quantity:</h4>
        <div className="quantity-controls">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </div>
      
      <div className="product-actions">
        <button className="add-to-cart">
          Add to Cart - ${(product.price * quantity).toFixed(2)}
        </button>
        <button className="buy-now">Buy Now</button>
        <button className="wishlist">
          <Heart size={20} /> Wishlist
        </button>
      </div>
      
      <div className="product-meta">
        <div className="meta-item">
          <Truck size={20} />
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="meta-item">
          <ShieldCheck size={20} />
          <span>2-year warranty included</span>
        </div>
      </div>
      
      <div className="product-details">
        <p><strong>SKU:</strong> {product.sku}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
        <p><strong>Availability:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    </div>
  );
};

export default ProductInfo;