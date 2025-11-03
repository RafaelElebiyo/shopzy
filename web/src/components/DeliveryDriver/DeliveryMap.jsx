import React from 'react';

const DeliveryMap = ({ currentLocation, deliveries }) => {
  // En una implementación real, integrarías con Google Maps o Mapbox
  return (
    <div className="delivery-map card mb-4">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Ruta de entrega</h5>
        <button className="btn btn-sm btn-outline-secondary">
          Actualizar ubicación
        </button>
      </div>
      <div className="card-body p-0">
        <div className="map-placeholder bg-light" style={{ height: '300px' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-center">
              <p className="text-muted">Mapa interactivo de entregas</p>
              <p className="small">Ubicación actual: {currentLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;