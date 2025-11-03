import React, { useState } from 'react';

const ProductTabs = ({ description, features, reviews }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="product-tabs">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviews})
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'description' && (
          <div className="description-content">
            <p>{description}</p>
          </div>
        )}
        
        {activeTab === 'features' && (
          <ul className="features-content">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        
        {activeTab === 'reviews' && (
          <div className="reviews-content">
            <p>Customer reviews will be displayed here.</p>
            <button className="leave-review">Leave a Review</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;