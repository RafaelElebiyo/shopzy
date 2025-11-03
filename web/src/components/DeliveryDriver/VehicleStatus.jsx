import React from 'react';
import { Speedometer, FuelPump, Tools } from 'react-bootstrap-icons';

const VehicleStatus = ({ vehicle }) => {
  return (
    <div className="vehicle-status card mb-4">
      <div className="card-header bg-white">
        <h5 className="mb-0">Estado del vehículo</h5>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <Speedometer className="text-primary fs-4 me-3" />
          <div>
            <h6 className="mb-1">Kilometraje</h6>
            <p className="mb-0">{vehicle.mileage} km</p>
          </div>
        </div>
        
        <div className="d-flex align-items-center mb-3">
          <FuelPump className="text-warning fs-4 me-3" />
          <div>
            <h6 className="mb-1">Combustible</h6>
            <div className="progress" style={{ height: '8px' }}>
              <div 
                className="progress-bar bg-warning" 
                role="progressbar" 
                style={{ width: `${vehicle.fuelLevel}%` }}
              ></div>
            </div>
            <p className="small mb-0 mt-1">{vehicle.fuelLevel}% restante</p>
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <Tools className="text-danger fs-4 me-3" />
          <div>
            <h6 className="mb-1">Mantenimiento</h6>
            <p className={`mb-0 ${vehicle.maintenanceDue ? 'text-danger' : 'text-success'}`}>
              {vehicle.maintenanceDue ? 'Necesita mantenimiento' : 'Todo en orden'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleStatus;