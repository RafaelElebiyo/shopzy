import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartTable = ({ cartItems, onRemove, onUpdateQuantity }) => {
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-4">
        <h5>Your cart is empty</h5>
        <Link to="/products" className="btn btn-primary mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{width: '120px'}}>Product</th>
            <th scope="col">Details</th>
            <th scope="col" className="text-center">Quantity</th>
            <th scope="col" className="text-end">Price</th>
            <th scope="col" className="text-end">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              onRemove={onRemove}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;