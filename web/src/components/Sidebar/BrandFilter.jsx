import React from 'react';

const BrandFilter = ({ brands = [], selectedBrands = [], onBrandChange }) => {
  return (
    <div className="brand-filter">
      {brands.map((brand) => (
        <div key={brand} className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id={`brand-${brand}`}
            checked={selectedBrands.includes(brand)}
            onChange={(e) => onBrandChange && onBrandChange(brand, e.target.checked)}
          />
          <label className="form-check-label" htmlFor={`brand-${brand}`}>
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandFilter;