import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/OffersCarousel.css'; 

const OffersCarousel = ({ offers }) => {  // Aquí recibes las ofertas como prop
  return (
    <section className="offers-carousel mb-5">
      <div className="container">
        <h2 className="text-center mb-4">Special Offers</h2>
        <Carousel indicators={false} interval={3000}>
          {offers.map((offer) => (
            <Carousel.Item key={offer.id}>
              <div className="offer-slide">
                <img
                  className="d-block w-100"
                  src={offer.image}
                  alt={offer.title}
                />
                <Carousel.Caption>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <a href={offer.link} className="btn btn-primary">Shop Now</a>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default OffersCarousel;