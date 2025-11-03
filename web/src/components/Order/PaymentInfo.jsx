import React from 'react';
import { CreditCard } from 'react-bootstrap-icons';

const PaymentInfo = ({ payment }) => {
  return (
    <div className="mb-4">
      <h5 className="mb-4">
        <CreditCard className="me-2" />
        Payment Information
      </h5>
      <div className="card">
        <div className="card-header bg-light">
          <h6 className="mb-0">Payment Method</h6>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <p className="mb-1">
                <strong>{payment.method}</strong>
              </p>
              <p className="text-muted small mb-0">
                {payment.cardType} ending in {payment.lastFour}
              </p>
            </div>
            <div className="text-end">
              <p className="mb-0 fw-bold">${payment.total.toFixed(2)}</p>
              <p className="text-muted small mb-0">Total charged</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;