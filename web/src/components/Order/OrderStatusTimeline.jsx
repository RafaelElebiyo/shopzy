import React from 'react';
import { CheckCircle, Clock } from 'react-bootstrap-icons';

const OrderStatusTimeline = ({ statusHistory, trackingNumber }) => {
  return (
    <div className="mb-5">
      <h5 className="mb-4">Order Status</h5>
      <div className="timeline">
        {statusHistory.map((step, index) => (
          <div key={index} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
            <div className="timeline-icon">
              {step.completed ? (
                <CheckCircle className="text-success" />
              ) : (
                <Clock className="text-muted" />
              )}
            </div>
            <div className="timeline-content">
              <h6 className={`mb-1 ${step.completed ? 'text-dark' : 'text-muted'}`}>
                {step.status}
              </h6>
              <p className="small text-muted mb-0">
                {step.date} {step.time && `at ${step.time}`}
              </p>
              {index === 2 && trackingNumber && (
                <div className="mt-2">
                  <p className="small mb-1">Tracking Number:</p>
                  <p className="fw-bold">{trackingNumber}</p>
                  <button className="btn btn-sm btn-outline-primary">
                    Track Package
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusTimeline;