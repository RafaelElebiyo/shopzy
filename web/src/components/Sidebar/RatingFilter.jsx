import React from 'react';

const RatingFilter = ({ ratings = [5, 4, 3, 2, 1], checkedRatings = [], onRatingChange }) => {
  return (
    <div className="rating-filter">
      {ratings.map((stars) => (
        <div key={stars} className="form-check mb-2">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id={`rating-${stars}`}
            checked={checkedRatings.includes(stars)}
            onChange={(e) => onRatingChange && onRatingChange(stars, e.target.checked)}
          />
          <label className="form-check-label d-flex align-items-center" htmlFor={`rating-${stars}`}>
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`bi bi-star${i < stars ? '-fill' : ''} ${i < stars ? 'text-warning' : 'text-muted'} me-1`}
              />
            ))}
            <span className="ms-1">& Up</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;