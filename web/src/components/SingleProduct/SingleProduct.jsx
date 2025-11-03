import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';
import db from '../../db/db.json'
import '../../styles/styles.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const product = db.product;

  const relatedProducts = [
    { id: '2', name: 'Bluetooth Earbuds', price: 89.99, image: 'https://dummyimage.com/300x300/000/fff&text=Earbuds' },
    { id: '3', name: 'Portable Speaker', price: 129.99, image: 'https://dummyimage.com/300x300/000/fff&text=Speaker' },
    { id: '4', name: 'Audio Cable Set', price: 19.99, image: 'https://dummyimage.com/300x300/000/fff&text=Cables' }
  ];

  return (
    <div className="single-product-container">
      <div className="product-main-section">
        <ProductGallery images={product.gallery} />
        <ProductInfo 
          product={product} 
          quantity={selectedQuantity} 
          setQuantity={setSelectedQuantity} 
        />
      </div>
      
      <ProductTabs 
        description={product.description} 
        features={product.features} 
        reviews={product.reviews} 
      />
      
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default SingleProduct;