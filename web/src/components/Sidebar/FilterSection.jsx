import React from 'react';

const FilterSection = ({ title, children }) => {
  return (
    <div className="filter-section mb-4">
      <h6 className="filter-title fw-bold text-uppercase small">{title}</h6>
      {children}
    </div>
  );
};

export default FilterSection;