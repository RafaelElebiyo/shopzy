import React from 'react';
import { ShieldCheck } from 'react-bootstrap-icons';

const CheckoutSummary = ({ subtotal, tax, total }) => {
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

        <div className="mt-4 text-center">
          <ShieldCheck size={24} className="text-success me-2" />
          <small className="text-muted">
            Secure checkout. Your information is protected.
          </small>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;