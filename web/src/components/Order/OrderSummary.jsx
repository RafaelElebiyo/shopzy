import React from 'react';

const OrderSummary = ({ order }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-white">
        <h4 className="mb-0">Order Summary</h4>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <span>Subtotal:</span>
          <span>${order.subtotal.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Shipping:</span>
          <span className="text-success">${order.shipping.cost.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Tax:</span>
          <span>${order.tax.toFixed(2)}</span>
        </div>
        {order.discount > 0 && (
          <div className="d-flex justify-content-between mb-2">
            <span>Discount:</span>
            <span className="text-danger">-${order.discount.toFixed(2)}</span>
          </div>
        )}
        <hr />
        <div className="d-flex justify-content-between fw-bold fs-5">
          <span>Total:</span>
          <span>${order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;