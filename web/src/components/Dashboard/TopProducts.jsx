import React from 'react';

const TopProducts = ({ products }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Productos Más Vendidos</h5>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {products.map(product => (
            <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">{product.name}</h6>
                <small className="text-muted">Stock: {product.stock}</small>
              </div>
              <div>
                <span className="badge bg-primary rounded-pill me-2">${product.price}</span>
                <span className="badge bg-success rounded-pill">{product.sales} ventas</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopProducts;