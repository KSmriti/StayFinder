import React from 'react';
import './styles/propertySection.css';  // Create this CSS file

function PropertySection({ title, properties }) {
  return (
    <div className="property-section">
      <h2>{title}</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.name} className="property-img" />
            <h4>{property.name}</h4>
            <p>{property.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertySection;
