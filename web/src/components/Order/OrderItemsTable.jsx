import React from 'react';

const OrderItemsTable = ({ items }) => {
  return (
    <div className="mb-5">
      <h5 className="mb-4">Order Items</h5>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{width: '100px'}}>Product</th>
              <th scope="col">Details</th>
              <th scope="col" className="text-center">Quantity</th>
              <th scope="col" className="text-end">Price</th>
              <th scope="col" className="text-end">Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="img-fluid rounded"
                    style={{width: '80px', height: '60px', objectFit: 'cover'}}
                  />
                </td>
                <td>
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="text-muted">SKU: {item.id}</small>
                </td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-end">${item.price.toFixed(2)}</td>
                <td className="text-end">
                  <span className={`badge ${item.status === 'Shipped' ? 'bg-primary' : 
                                 item.status === 'Delivered' ? 'bg-success' : 'bg-warning'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItemsTable;