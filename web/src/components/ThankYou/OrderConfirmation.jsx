import React from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons';

const OrderConfirmation = ({ orderId }) => {
  return (
    <div className="text-center mb-4">
      <CheckCircleFill size={48} className="text-success mb-3" />
      <h2 className="mb-3">Thank You for Your Order!</h2>
      <p className="lead">
        Your order <strong>#{orderId}</strong> has been received and is being processed.
      </p>
    </div>
  );
};

export default OrderConfirmation;