import React from 'react';

const OrderActions = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h4 className="mb-0">Order Actions</h4>
      </div>
      <div className="card-body">
        <button className="btn btn-outline-danger w-100 mb-2">
          Return Items
        </button>
        <button className="btn btn-outline-secondary w-100 mb-2">
          Download Invoice
        </button>
        <button className="btn btn-outline-primary w-100">
          Reorder Items
        </button>
      </div>
    </div>
  );
};

export default OrderActions;