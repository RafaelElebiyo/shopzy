import React from 'react';
import { GeoAlt, Clock, Person, Box } from 'react-bootstrap-icons';

const DeliveryCard = ({ delivery }) => {
  return (
    <div className="delivery-card card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h6 className="mb-0">Orden #{delivery.orderId}</h6>
          <span className={`badge ${getStatusBadgeClass(delivery.status)}`}>
            {delivery.status}
          </span>
        </div>
        
        <div className="delivery-info mt-3">
          <div className="info-item mb-2">
            <GeoAlt className="me-2 text-primary" />
            <span>{delivery.address}</span>
          </div>
          <div className="info-item mb-2">
            <Person className="me-2 text-secondary" />
            <span>{delivery.customerName}</span>
          </div>
          <div className="info-item mb-2">
            <Box className="me-2 text-success" />
            <span>{delivery.packageCount} paquetes</span>
          </div>
          <div className="info-item">
            <Clock className="me-2 text-warning" />
            <span>Hora límite: {delivery.deadline}</span>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-sm btn-outline-primary me-2">
            Ver detalles
          </button>
          <button className="btn btn-sm btn-primary">
            Iniciar entrega
          </button>
        </div>
      </div>
    </div>
  );
};

const getStatusBadgeClass = (status) => {
  switch(status) {
    case 'Pendiente': return 'bg-warning text-dark';
    case 'En camino': return 'bg-primary';
    case 'Entregado': return 'bg-success';
    case 'Retrasado': return 'bg-danger';
    default: return 'bg-secondary';
  }
};

export default DeliveryCard;