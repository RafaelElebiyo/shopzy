import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import "../styles/HomePage.css";

function HomePage() {
  const sampleProducts = [
    {
      name: "Adidas Chaussure",
      price: 478,
      oldPrice: 710,
      image: "https://dummyimage.com/450x300/000/fff.png&text=Product+1"
    },
    {
      name: "Birkenstock Madrid",
      price: 450,
      oldPrice: 1124,
      image: "https://dummyimage.com/450x300/444/fff.png&text=Product+2"
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3"
    }
  ];

  return (
    <div>
      <ProductCarousel title="Recommandé pour vous" products={sampleProducts} />
    </div>
  );
}

export default HomePage;
