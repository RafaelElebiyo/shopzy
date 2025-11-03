import React from 'react';
import { Link } from 'react-router-dom';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderReview from './OrderReview';

const CheckoutForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  cartItems 
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <ShippingForm formData={formData} handleChange={handleChange} />
      <PaymentForm formData={formData} handleChange={handleChange} />
      <OrderReview cartItems={cartItems} />
      
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" htmlFor="agreeTerms">
          I agree to the <Link to="/terms">Terms and Conditions</Link>
        </label>
      </div>

      <div className="d-flex justify-content-between">
        <Link to="/cart" className="btn btn-outline-primary">
          Back to Cart
        </Link>
        <Link to="/thank-you" type="submit" className="btn btn-primary">
          Place Order
        </Link>
      </div>
    </form>
  );
};

export default CheckoutForm;