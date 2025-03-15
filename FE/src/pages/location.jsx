/**
 * Author: Elijah Atta-Konadu
 * Date: 03/13/2025
 * Description: Find location of healthy food in certain location
 * Refrence: https://developers.google.com/maps/documentation/places/web-service/text-search?_gl=1*veum54*_up*MQ..*_ga*MjAwNzU3NDA0Ni4xNzQyMDcyOTI0*_ga_NRWSTWS78N*MTc0MjA3MjkyMy4xLjEuMTc0MjA3MzA2My4wLjAuMA..
 */

import React, { useEffect, useState } from 'react';

const SearchPlaces = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchPlaces = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': 'AIzaSyA1w4LdRs6oVyXamfYxCca70sRpBgkgWrc',
            'X-Goog-FieldMask': 'places.displayName',
          },
          body: JSON.stringify({
            textQuery: 'Healthy Food Waterloo, Ontario, Canada',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    searchPlaces();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  let content;
  if (results) {
    content = (
      <ul>
        {results.places.map((place, index) => {
          const displayName = place.displayName; 
          return (
            <li key={index}>
              <h2>{displayName}</h2>
            </li>
          );
        })}
      </ul>
    );
  } else {
    content = <p>No results found.</p>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      {content}
    </div>
  );
};

export default location;
