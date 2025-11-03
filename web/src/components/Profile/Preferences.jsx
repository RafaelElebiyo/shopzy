import React, { useState } from 'react';
import { Gear, Envelope, Bell } from 'react-bootstrap-icons';

const Preferences = () => {
  const [preferences, setPreferences] = useState({
    newsletter: true,
    promotions: false,
    orderNotifications: true,
    stockNotifications: true,
    language: 'en',
    currency: 'USD'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar las preferencias
    alert('Preferences saved successfully!');
  };

  return (
    <div className="preferences">
      <h3 className="mb-4">
        <Gear className="me-2" />
        Preferences
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="mb-0">
              <Envelope className="me-2" />
              Email Preferences
            </h5>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={preferences.newsletter}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="newsletter">
                Subscribe to newsletter
              </label>
              <p className="small text-muted mt-1">
                Receive our weekly newsletter with the latest products and offers
              </p>
            </div>
            
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="promotions"
                name="promotions"
                checked={preferences.promotions}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="promotions">
                Receive promotional emails
              </label>
              <p className="small text-muted mt-1">
                Get special offers and discounts directly to your inbox
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="mb-0">
              <Bell className="me-2" />
              Notification Preferences
            </h5>
          </div>
          <div className="card-body">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="orderNotifications"
                name="orderNotifications"
                checked={preferences.orderNotifications}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="orderNotifications">
                Order notifications
              </label>
              <p className="small text-muted mt-1">
                Get updates about your order status
              </p>
            </div>
            
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="stockNotifications"
                name="stockNotifications"
                checked={preferences.stockNotifications}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="stockNotifications">
                Back in stock notifications
              </label>
              <p className="small text-muted mt-1">
                Get notified when products on your wishlist are back in stock
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-light">
            <h5 className="mb-0">General Preferences</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="language" className="form-label">Language</label>
                <select
                  className="form-select"
                  id="language"
                  name="language"
                  value={preferences.language}
                  onChange={handleChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="currency" className="form-label">Currency</label>
                <select
                  className="form-select"
                  id="currency"
                  name="currency"
                  value={preferences.currency}
                  onChange={handleChange}
                >
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default Preferences;