import React from 'react';

const OrderTotals = ({ subtotal, shippingCost, tax, total }) => {
  return (
    <div className="card mt-4">
      <div className="card-body text-end">
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Shipping:</span>
          <span className="text-success">${shippingCost.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderTotals;