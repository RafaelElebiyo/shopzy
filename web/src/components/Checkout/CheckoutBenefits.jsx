import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';

const CheckoutBenefits = () => {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h5 className="mb-3">
          <CheckCircle className="me-2 text-success" />
          Benefits
        </h5>
        <ul className="list-unstyled">
          <li className="mb-2">• Free shipping on all orders</li>
          <li className="mb-2">• Easy returns within 30 days</li>
          <li className="mb-2">• 24/7 customer support</li>
          <li>• Secure payment processing</li>
        </ul>
      </div>
    </div>
  );
};

export default CheckoutBenefits;