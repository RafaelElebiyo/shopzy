import React from 'react';

const OrderItems = ({ items }) => {
  return (
    <div className="card border-0 bg-light mb-4">
      <div className="card-body">
        <h5 className="mb-3">Order Details</h5>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col" className="text-end">Price</th>
                <th scope="col" className="text-center">Qty</th>
                <th scope="col" className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="img-fluid rounded me-3"
                        style={{width: '50px', height: '50px', objectFit: 'cover'}}
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="text-end">${item.price.toFixed(2)}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-end">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;