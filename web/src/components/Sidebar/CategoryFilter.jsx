import React from 'react';

const CategoryFilter = ({ categories = [], selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <div key={category} className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="radio" 
            name="category"
            id={`category-${category}`}
            checked={selectedCategory === category}
            onChange={() => onCategoryChange && onCategoryChange(category)}
          />
          <label className="form-check-label" htmlFor={`category-${category}`}>
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;