import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './locationSearch.css'; // Import the CSS file

const locationSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="container">
      <h1 className="title">Search for Places</h1>
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchBar"
      />
      <button onClick={handleSearch} className="searchButton">
        Search
      </button>
    </div>
  );
};

export default locationSearch;
