import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/propertyDetail.css'; // Create this CSS file for styling

function PropertyDetail() {
  const { id } = useParams();  // Extract property ID from URL
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const res = await fetch(`/api/listings/${id}`);
        const data = await res.json();
        setProperty(data);
      } catch (error) {
        console.error('Failed to fetch property details:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="property-detail-container">
      <h2>{property.property_name}</h2>
      <img src={property.image} alt={property.property_name} className="property-detail-image" />

      <div className="property-detail-info">
        <p><strong>Location:</strong> {property.property_location}</p>
        <p><strong>Price:</strong> Rs.{property.price} / night</p>
        <p><strong>Status:</strong> {property.booked_status ? "Booked" : "Available"}</p>

        {property.amenities && (
          <div>
            <strong>Amenities:</strong>
            <ul>
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyDetail;
