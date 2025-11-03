import React from 'react';

const Sidebar = ({ title, children }) => {
  return (
    <div className="filters-sidebar card p-4 shadow-sm">
      <h5 className="mb-4">{title}</h5>
      {children}
    </div>
  );
};

export default Sidebar;