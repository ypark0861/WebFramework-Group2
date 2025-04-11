/**
 * Author: Elijah Atta-Konadu
 * Date: 04/01/2025
 * Description: v2
 */

import React, { useEffect, useState } from 'react';
import './App.css';

import SearchBar from './SearchBar'; // Import the SearchBar component

const location = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleSelect = async (city) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0`
            );
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            // Extract restaurant details from the API response
            const restaurants = data.results.map((item) => ({
                name: item.name,
                address: item.formatted_address,
                rating: item.rating,
            }));
    
            setRestaurant(restaurants); // Update the state with the list of restaurants
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data: ", error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0'); // Replace with your actual API endpoint
                const data = await response.json();
                setRestaurant(data.restaurants || []); // Adjust based on API response structure
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Restaurant Finder</h1>
            <SearchBar onSearch={handleSelect} /> {/* Pass handleSelect to SearchBar */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {restaurant.map((item, index) => (
                        <li key={index}>
                            <h2>{item.name}</h2>
                            <p>{item.address}</p>
                            <p>Rating: {item.rating}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default location;
