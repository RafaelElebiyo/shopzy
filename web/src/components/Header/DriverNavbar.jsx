import React from 'react';
import { Bell, PersonCircle, GeoAlt, BoxArrowInRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const DriverNavbar = ({ driverName, deliveriesToday }) => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  return (
    <div className="driver-header bg-primary text-white p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <GeoAlt className="fs-4 me-2" />
        <h5 className="mb-0">Repartidor Dashboard</h5>
      </div>
      <div className="d-flex align-items-center">
        <span className="badge bg-warning text-dark me-3">
          {deliveriesToday} entregas hoy
        </span>
        <Bell className="fs-5 me-3" />
        <div className="d-flex align-items-center">
          <PersonCircle className="fs-4 me-2" />
          <span className="me-3">{driverName}</span>
          <button 
            className="btn btn-outline-light btn-sm" 
            onClick={handleLogout}
          >
            <BoxArrowInRight className="me-1" />
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverNavbar;