import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import Hero from '../components/Hero/Hero';

import "../styles/HomePage.css";

function HomePage() {
  const sampleProducts = [
    {
      name: "Adidas Chaussure",
      price: 478,
      oldPrice: 710,
      image: "https://dummyimage.com/450x300/000/fff.png&text=Product+1",
    },
    {
      name: "Birkenstock Madrid",
      price: 450,
      oldPrice: 1124,
      image: "https://dummyimage.com/450x300/444/fff.png&text=Product+2",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
    {
      name: "Adidas Chaussure Forta",
      price: 311,
      oldPrice: 500,
      image: "https://dummyimage.com/450x300/333/fff.png&text=Product+3",
    },
  ];

  return (
    <>
      <Hero
        title=""
        subtitle=""
        backgroundImage="https://ma.jumia.is/cms/000_2025/000011_Novembre/CPR/OffreduJour/MLP_CPR.gif"
      />
      <div>
        <ProductCarousel
          title="Recommandé pour vous"
          products={sampleProducts}
        />
      </div>
      <div>
        <ProductCarousel
          title="Profitez des nos Nouvotés"
          products={sampleProducts}
        />
      </div>
      <div>
        <ProductCarousel
          title="Profitez des meilleurs deals"
          products={sampleProducts}
        />
      </div>
      <div>
        <ProductCarousel title="Plus vendu" products={sampleProducts} />
      </div>
      <div>
        <ProductCarousel title="Vus récemment" products={sampleProducts} />
      </div>
    </>
  );
}

export default HomePage;
