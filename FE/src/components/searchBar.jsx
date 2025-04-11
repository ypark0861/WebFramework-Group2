/**
Elijah Atta-Konadu
*/
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={{ margin: '20px' }}>
            <input
                type="text"
                placeholder="Search for Resturants..."
                value={query}
                onChange={handleInputChange}
                style={{ padding: '8px', width: '200px' }}
            />
            <button onClick={handleSearch} style={{ padding: '8px 12px', marginLeft: '10px' }}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
