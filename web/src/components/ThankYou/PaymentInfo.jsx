import React from 'react';

const PaymentInfo = ({ method, lastFour }) => {
  return (
    <div className="card h-100">
      <div className="card-header bg-white">
        <h6 className="mb-0">Payment Method</h6>
      </div>
      <div className="card-body">
        <p className="mb-0">
          {method} ending in {lastFour}
        </p>
      </div>
    </div>
  );
};

export default PaymentInfo;