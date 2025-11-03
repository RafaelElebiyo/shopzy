import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  ExclamationTriangle 
} from 'react-bootstrap-icons';

const DeliveryStats = ({ stats }) => {
  return (
    <div className="delivery-stats card mb-4">
      <div className="card-header bg-white">
        <h5 className="mb-0">Resumen de Entregas</h5>
      </div>
      <div className="card-body p-2">
        <div className="d-flex justify-content-around text-center flex-wrap">
          <StatItem 
            value={stats.completed} 
            label="Completadas" 
            icon={<CheckCircle />} 
            color="success" 
          />
          <StatItem 
            value={stats.pending} 
            label="Pendientes" 
            icon={<Clock />} 
            color="warning" 
          />
          <StatItem 
            value={stats.inProgress} 
            label="En curso" 
            icon={<Truck />} 
            color="primary" 
          />
          <StatItem 
            value={stats.issues} 
            label="Problemas" 
            icon={<ExclamationTriangle />} 
            color="danger" 
          />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ value, label, icon, color }) => (
  <div className="px-2 py-3 stat-item">
    <div className={`icon-container text-${color} mb-2`}>
      {React.cloneElement(icon, { className: `text-${color} fs-3` })}
    </div>
    <h3 className={`text-${color} mb-1`}>{value}</h3>
    <small className="text-muted text-uppercase fw-bold">{label}</small>
    
    <style jsx>{`
      .stat-item {
        min-width: 100px;
        transition: transform 0.2s;
      }
      .stat-item:hover {
        transform: translateY(-3px);
      }
      .icon-container {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(var(--bs-${color}-rgb), 0.1);
        border-radius: 50%;
      }
      @media (max-width: 768px) {
        .stat-item {
          min-width: 80px;
          padding: 0.5rem;
        }
        h3 {
          font-size: 1.25rem;
        }
      }
    `}</style>
  </div>
);

export default DeliveryStats;