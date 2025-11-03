import React from 'react';

const OrderReview = ({ cartItems }) => {
  return (
    <div className="mb-4">
      <h5 className="mb-3">Order Review</h5>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col" className="text-end">Price</th>
              <th scope="col" className="text-center">Qty</th>
              <th scope="col" className="text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="text-end">${item.price.toFixed(2)}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-end">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderReview;