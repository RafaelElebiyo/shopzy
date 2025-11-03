import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar bg-light">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin" end>
            <i className="bi bi-speedometer2 me-2"></i>Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin/products">
            <i className="bi bi-box-seam me-2"></i>Productos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin/orders">
            <i className="bi bi-receipt me-2"></i>Pedidos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin/customers">
            <i className="bi bi-people me-2"></i>Clientes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin/promotions">
            <i className="bi bi-percent me-2"></i>Promociones
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard-admin/settings">
            <i className="bi bi-gear me-2"></i>Configuración
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;