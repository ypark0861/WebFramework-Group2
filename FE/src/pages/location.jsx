/**
 * Author: Elijah Atta-Konadu
 * Date: 03/13/2025
 * Description: Grab the usr Search query and display each resturant with a link to the website
 */

import React, { useEffect, useState } from 'react';
import './location.css';

import SearchBar from './SearchBar'; 

const App = () => {
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
            const restaurants = [];

        
            for (let i = 0; i < data.results.length; i++) {
                const item = data.results[i];
                const detailsResponse = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0`
                );
                const detailsData = await detailsResponse.json();

                
                restaurants.push({
                    name: item.name,
                    address: item.formatted_address,
                    rating: item.rating,
                    website: detailsData.result.website || 'No website available',
                });
            }

            setRestaurant(restaurants);
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
                            {item.website !== 'No website available' && (
                                <p><a href={item.website} target="_blank" rel="noopener noreferrer"
                                >Visit Website</a>
                                </p>
                            )}
                            {item.website === 'No website available' && (
                                <p>No website available</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default location;
