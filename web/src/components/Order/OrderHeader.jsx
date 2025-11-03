import React from 'react';

const OrderHeader = ({ orderId, status }) => {
  return (
    <div className="card-header bg-white d-flex justify-content-between align-items-center">
      <h4 className="mb-0">Order #{orderId}</h4>
      <span className={`badge ${status === 'Shipped' ? 'bg-primary' : 
                       status === 'Delivered' ? 'bg-success' : 'bg-warning'}`}>
        {status}
      </span>
    </div>
  );
};

export default OrderHeader;