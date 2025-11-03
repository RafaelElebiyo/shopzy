import React from 'react';
import { CreditCard } from 'react-bootstrap-icons';

const PaymentForm = ({ formData, handleChange }) => {
  return (
    <div className="mb-5">
      <h5 className="mb-3">
        <CreditCard className="me-2" />
        Payment Method
      </h5>
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="credit"
            value="credit"
            checked={formData.paymentMethod === 'credit'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="credit">
            Credit Card
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="paymentMethod"
            id="paypal"
            value="paypal"
            checked={formData.paymentMethod === 'paypal'}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="paypal">
            PayPal
          </label>
        </div>
      </div>

      {formData.paymentMethod === 'credit' && (
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cardName" className="form-label">Name on Card</label>
            <input
              type="text"
              className="form-control"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="expiry" className="form-label">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;