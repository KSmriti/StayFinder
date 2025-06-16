import React from 'react';
import Header from './header';
import PropertySection from './propertySection';

function Homepage() {
  return (
    <div>
      <Header />

      <PropertySection 
        title="Recently Added Properties"
        properties={[
          { id: 1, name: "Sky View Apartment", image: "/images/villa1.jpg",location: "Mumbai" },
          { id: 2, name: "Palm Residency", image: "/images/villa2.jpg",location: "Delhi" }
        ]}
      />

      <PropertySection 
        title="Top Rated Properties"
        properties={[
          { id: 3, name: "Ocean Breeze Villa", image: "/images/villa3.jpg",location: "Goa" },
          { id: 4, name: "Lakeview House", image: "/images/villa4.jpg", location: "Bangalore" }
        ]}
      />

      <PropertySection 
        title="All Properties"
        properties={[
          { id: 5, name: "Meadow Homes", image: "/images/villa5.jpg",  location: "Pune" },
          { id: 6, name: "Elite Heights", image: "/images/villa1.jpg" ,location: "Chennai" }
        ]}
      />
    </div>
  );
}

export default Homepage;
