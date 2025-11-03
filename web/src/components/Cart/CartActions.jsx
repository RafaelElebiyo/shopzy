import React from 'react';
import { Link } from 'react-router-dom';

const CartActions = ({ onClearCart }) => {
  return (
    <div className="d-flex justify-content-between mb-4">
      <Link to="/products" className="btn btn-outline-primary">
        Continue Shopping
      </Link>
      <button className="btn btn-outline-danger" onClick={onClearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartActions;