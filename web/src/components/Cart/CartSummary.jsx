import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ subtotal, tax, total, cartItems }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="mb-0">Order Summary</h4>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Shipping:</span>
          <span className="text-success">FREE</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <Link 
          to="/checkout" 
          className={`btn btn-primary w-100 mt-3 ${cartItems.length === 0 ? 'disabled' : ''}`}
        >
          Proceed to Checkout
        </Link>
        
        <div className="mt-3 text-center">
          <small className="text-muted">
            <i className="bi bi-lock-fill me-1"></i>
            Secure checkout
          </small>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;