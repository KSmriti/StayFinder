import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/propertySection.css'; 

function Search() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch(`/api/listings/search?query=${query}`);
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  return (
  <div className="search-results">
    <h2>&nbsp;Search Results for: "{query}"</h2>

    {loading && <p>Loading...</p>}

    {!loading && results.length === 0 && <p>No result found.</p>}

    {!loading && results.length > 0 && (
      <ul>
        {results.map(({ _id, property_name, property_location, price, image }) => (
          <li key={_id} className="property-card">
            <img src={image} alt={property_name} className="property-img" />
            <div className="listing-info">
                <h3>{property_name}</h3>
                <p>{property_location}</p>
                <p>Rs.{price}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

}

export default Search;
