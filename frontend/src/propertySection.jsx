import React from 'react';
import './styles/propertySection.css';  

function PropertySection({ title, properties }) {
  return (
    <div className="property-section">
      <h2>{title}</h2>
      <div className="property-list">
        {Array.isArray(properties) && properties.map((property) => (
          <div key={property._id} className="property-card">
            <img src={property.image} alt={property.property_name} className="property-img" />
            <h4>{property.property_name}</h4>
            <p>{property.property_location}</p>
            <p><strong>Price:</strong> Rs.{property.price}/Night</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertySection;
