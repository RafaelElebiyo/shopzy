import React, { useState } from 'react';

const PriceRangeFilter = ({ min = 0, max = 1000, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState(max);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
    onPriceChange && onPriceChange([min, value]);
  };

  return (
    <div className="price-range">
      <input 
        type="range" 
        className="form-range" 
        min={min} 
        max={max} 
        step="10" 
        value={priceRange}
        onChange={handleChange}
      />
      <div className="d-flex justify-content-between mt-2">
        <span className="small">${min}</span>
        <span className="small fw-bold">${priceRange}</span>
        <span className="small">${max}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;