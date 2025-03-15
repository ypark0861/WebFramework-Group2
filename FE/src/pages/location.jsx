/**
Author: Elijah Atta-Konadu
Date: 03-15-2025
Description: Display results from search query
**/




import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // To access the query parameter


const SearchPlaces = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('query') || 'Healthy Food Waterloo, Ontario, Canada';

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
            textQuery: query,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error); 
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
          return (
            <li key={index}>
              <h2>{place.displayName.text}</h2>
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

export default SearchPlaces;
