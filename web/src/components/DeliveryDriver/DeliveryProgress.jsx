import React from 'react';

const DeliveryProgress = ({ progress }) => {
  return (
    <div className="delivery-progress card mb-4">
      <div className="card-header bg-white">
        <h5 className="mb-0">Progreso de entrega actual</h5>
      </div>
      <div className="card-body">
        <div className="progress mb-3" style={{ height: '10px' }}>
          <div 
            className="progress-bar bg-success" 
            role="progressbar" 
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between">
          <span className="small text-muted">Recogido</span>
          <span className="small text-muted">En tránsito</span>
          <span className="small text-muted">Entregado</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProgress;