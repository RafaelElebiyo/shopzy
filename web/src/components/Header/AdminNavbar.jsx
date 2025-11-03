import React from 'react';
import { Link } from 'react-router-dom';
import { BoxArrowInRight } from 'react-bootstrap-icons';

const AdminNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg admin-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard-admin">Admin E-commerce</Link>
        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-light me-2" to="/">
            Ver Tienda
          </Link>
          <button 
            className="btn btn-outline-danger" 
            onClick={handleLogout}
          >
            <BoxArrowInRight className="me-1" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;