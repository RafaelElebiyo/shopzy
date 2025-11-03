import React from 'react';
import { Envelope, Telephone } from 'react-bootstrap-icons';

const CustomerSupport = () => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-white">
        <h4 className="mb-0">Customer Support</h4>
      </div>
      <div className="card-body">
        <p className="mb-3">
          Need help with your order? Contact our customer support team.
        </p>
        <button className="btn btn-outline-primary w-100 mb-2">
          <Envelope className="me-2" />
          Email Support
        </button>
        <button className="btn btn-outline-secondary w-100">
          <Telephone className="me-2" />
          Call Support
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;