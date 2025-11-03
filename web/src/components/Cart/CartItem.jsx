import React from 'react';
import { XCircle, PlusCircle, DashCircle } from 'react-bootstrap-icons';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <tr>
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
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <button 
            className="btn btn-sm btn-link p-0"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          >
            <DashCircle size={20} />
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button 
            className="btn btn-sm btn-link p-0"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            <PlusCircle size={20} />
          </button>
        </div>
      </td>
      <td className="text-end">${item.price.toFixed(2)}</td>
      <td className="text-end">${(item.price * item.quantity).toFixed(2)}</td>
      <td className="text-end">
        <button 
          className="btn btn-sm btn-link text-danger p-0"
          onClick={() => onRemove(item.id)}
        >
          <XCircle size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;