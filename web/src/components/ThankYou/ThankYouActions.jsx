import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouActions = ({ orderId }) => {
  return (
    <div className="mt-4">
      <Link to="/products" className="btn btn-outline-primary me-3">
        Continue Shopping
      </Link>
      <Link to={`/profile/orders/${orderId}`} className="btn btn-primary">
        View Order Details
      </Link>
    </div>
  );
};

export default ThankYouActions;