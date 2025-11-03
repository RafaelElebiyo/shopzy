import React from 'react';

const FilterList = ({ items, activeItem }) => {
  return (
    <ul className="filter-list">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#!" className={item === activeItem ? 'active' : ''}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;