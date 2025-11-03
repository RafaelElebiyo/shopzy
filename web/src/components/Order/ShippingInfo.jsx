import React from 'react';
import { Truck } from 'react-bootstrap-icons';

const ShippingInfo = ({ shipping, trackingNumber }) => {
  return (
    <div className="mb-5">
      <h5 className="mb-4">
        <Truck className="me-2" />
        Shipping Information
      </h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-header bg-light">
              <h6 className="mb-0">Shipping Address</h6>
            </div>
            <div className="card-body">
              <address>
                <strong>{shipping.name}</strong><br />
                {shipping.address}<br />
                {shipping.city}, {shipping.state} {shipping.zip}<br />
                {shipping.country}
              </address>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header bg-light">
              <h6 className="mb-0">Shipping Method</h6>
            </div>
            <div className="card-body">
              <p className="mb-1">
                <strong>{shipping.method}</strong>
              </p>
              <p className="text-muted small mb-1">
                Estimated delivery: {shipping.estimatedDelivery}
              </p>
              {trackingNumber && (
                <div className="mt-3">
                  <p className="small mb-1">Tracking Number:</p>
                  <p className="fw-bold">{trackingNumber}</p>
                  <button className="btn btn-sm btn-outline-primary">
                    Track Package
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;