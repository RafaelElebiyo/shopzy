import React from 'react';

const ShippingInfo = ({ name, address }) => {
  return (
    <div className="card h-100">
      <div className="card-header bg-white">
        <h6 className="mb-0">Shipping Information</h6>
      </div>
      <div className="card-body">
        <address className="mb-0">
          <strong>{name}</strong><br />
          {address}
        </address>
      </div>
    </div>
  );
};

export default ShippingInfo;