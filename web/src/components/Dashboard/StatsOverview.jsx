import React from 'react';

const StatsOverview = ({ stats }) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Ventas Totales</h5>
            <p className="card-text">${stats.totalSales.toFixed(2)}</p>
            <span className="text-success">
              <i className="bi bi-arrow-up"></i> 12.5%
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Pedidos</h5>
            <p className="card-text">{stats.totalOrders}</p>
            <span className="text-success">
              <i className="bi bi-arrow-up"></i> 8.3%
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Nuevos Clientes</h5>
            <p className="card-text">{stats.newCustomers}</p>
            <span className="text-success">
              <i className="bi bi-arrow-up"></i> 5.2%
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card stat-card">
          <div className="card-body">
            <h5 className="card-title">Productos Vendidos</h5>
            <p className="card-text">{stats.productsSold}</p>
            <span className="text-success">
              <i className="bi bi-arrow-up"></i> 10.7%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;