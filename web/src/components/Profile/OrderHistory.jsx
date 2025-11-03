import React from 'react';
import { Link } from 'react-router-dom';
import { Cart, Clock, CheckCircle, Truck, XCircle } from 'react-bootstrap-icons';
import db from '../../db/db.json';

const OrderHistory = () => {

  const orders = db.orders;


  const getStatusIcon = (status) => {
    switch(status) {
      case 'Delivered':
        return <CheckCircle className="text-success me-1" />;
      case 'Shipped':
        return <Truck className="text-primary me-1" />;
      case 'Cancelled':
        return <XCircle className="text-danger me-1" />;
      default:
        return <Clock className="text-warning me-1" />;
    }
  };

  return (
    <div className="order-history">
      <h3 className="mb-4">
        <Cart className="me-2" />
        Order History
      </h3>

      {orders.length === 0 ? (
        <div className="text-center py-5">
          <h5>You haven't placed any orders yet</h5>
          <p className="text-muted">Start shopping to see your orders here</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Items</th>
                <th className="text-end">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </td>
                  <td>
                    <ul className="list-unstyled mb-0">
                      {order.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity} × {item.name}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="text-end">${order.total.toFixed(2)}</td>
                  <td className="text-end">
                    <Link to={`/profile/orders/ORD-789456`} className="btn btn-primary">
                      View Order Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;