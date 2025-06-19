import { useEffect, useState } from 'react';
import React from 'react';
import Header from './header';
import PropertySection from './propertySection';

function Homepage() {
  //SECTION:1
  const [recentProperties, setRecentProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings/recent')
      .then(res => res.json())
      .then(data => setRecentProperties(data))
      .catch(err => console.error('Failed to fetch recent properties:', err));
  }, []);

  //SECTION:2
  const [cheapestProps, setCheapestProps] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings/cheapest')
      .then(res => res.json())
      .then(data => setCheapestProps(data))
      .catch(err => console.error('Error fetching cheapest listings:', err));
  }, []);

  //SECTION:3
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings')
      .then(res => res.json())
      .then(data => setAllProperties(data))
      .catch(err => console.error('Error fetching listings:', err));
  }, []);

  return (
    <div>
      <Header />

      <PropertySection 
        title="Recently Added Properties"
        properties={recentProperties}
      />

      <PropertySection 
        title="Cheapeast Properties"
        properties={cheapestProps}
      />

      <PropertySection 
        title="All Properties"
        properties={allProperties}
      />
    </div>
  );
}

export default Homepage;
