import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const ProductGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-gallery">
      <div className="main-image-container">
        <button className="nav-button prev" onClick={prevImage}>
          <ArrowLeft size={24} />
        </button>
        
        <img 
          src={images[currentImageIndex]} 
          alt={`Product view ${currentImageIndex + 1}`} 
          className="main-image"
        />
        
        <button className="nav-button next" onClick={nextImage}>
          <ArrowRight size={24} />
        </button>
      </div>
      
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;