import React from 'react';

const getStatusBadge = (status) => {
  switch(status) {
    case 'Completado':
      return 'bg-success';
    case 'Enviado':
      return 'bg-primary';
    case 'Procesando':
      return 'bg-warning text-dark';
    case 'Pendiente':
      return 'bg-secondary';
    default:
      return 'bg-light text-dark';
  }
};

const RecentOrders = ({ orders }) => {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Pedidos Recientes</h5>
        <button className="btn btn-sm btn-outline-primary">Ver todos</button>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Monto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={`badge ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>${order.amount.toFixed(2)}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-info">
                      <i className="bi bi-eye"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;