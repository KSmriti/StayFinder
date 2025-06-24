import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/propertyDetail.css';

function PropertyDetail() {
  const { id } = useParams(); // property_id
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

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

  async function handleBooking() {
  if (!checkInDate || !checkOutDate) {
    alert('Please select both check-in and check-out dates.');
    return;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  console.log("Current user:", user);
  const user_id = user?._id;

  if (!user_id) {
    alert("You must be logged in to book.");
    return;
  }

  try {
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        property_id: id,
        user_id: user_id,
        check_in: checkInDate,
        check_out: checkOutDate
      }),
    });

    const data = await response.json();

    if (!response.ok) {
       console.error("Backend error:", data);
      alert(data.message || "Booking failed.");
      return;
    }

    // Success: update local state
    setProperty((prev) => ({
      ...prev,
      booked_status: true,
      check_in: checkInDate,
      check_out: checkOutDate
    }));

    alert('Booking confirmed!');
  } catch (err) {
    console.error('Booking failed:', err);
    alert('Something went wrong while booking.');
  }
}


  if (loading) return <p>Loading property...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="property-detail-container">
      <h2>{property.property_name}</h2>
      <img src={property.image} alt={property.property_name} className="property-detail-image" />

      <div className="property-detail-info">
        <p><strong>Location:</strong> {property.property_location}</p>
        <p><strong>Price:</strong> Rs.{property.price} / night</p>
        <p><strong>Status:</strong> {property.booked_status ? 'Booked' : 'Available'}</p>

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

        <div className="date-picker-container">
          <div>
            <label>Check-in:</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label>Check-out:</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate}
            />
          </div>
        </div>

        {!property.booked_status ? (
          <button onClick={handleBooking} className="book-now-button">
            Book Now
          </button>
        ) : (
          <button disabled className="booked-button">
            Already Booked
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertyDetail;
