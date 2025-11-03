import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-products">
      <h3>You may also like</h3>
      <div className="related-products-grid">
        {products.map(product => (
          <div key={product.id} className="related-product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;