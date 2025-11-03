import React from 'react';
import { Truck, Clock, Envelope } from 'react-bootstrap-icons';

const OrderStats = () => {
  const stats = [
    {
      icon: <Truck size={24} className="mb-2 text-primary" />,
      title: "Shipping",
      description: "Standard Shipping"
    },
    {
      icon: <Clock size={24} className="mb-2 text-primary" />,
      title: "Delivery",
      description: "3-5 business days"
    },
    {
      icon: <Envelope size={24} className="mb-2 text-primary" />,
      title: "Confirmation",
      description: "Sent to your email"
    }
  ];

  return (
    <div className="row mb-4">
      {stats.map((stat, index) => (
        <div key={index} className="col-md-4 mb-3 mb-md-0">
          <div className="p-3 bg-light rounded h-100">
            {stat.icon}
            <h5 className="mb-1">{stat.title}</h5>
            <p className="small mb-0">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;