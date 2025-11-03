import React from 'react';
import DeliveryCard from './DeliveryCard';

const ActiveDeliveries = ({ deliveries }) => {
  return (
    <div className="active-deliveries card mb-4">
      <div className="card-header bg-white">
        <h5 className="mb-0">Entregas Activas</h5>
      </div>
      <div className="card-body">
        {deliveries.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted">No hay entregas activas en este momento</p>
          </div>
        ) : (
          <div className="delivery-list">
            {deliveries.map((delivery, index) => (
              <DeliveryCard key={index} delivery={delivery} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveDeliveries;