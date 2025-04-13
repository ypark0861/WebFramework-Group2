/**
Name: Elijah Atta-Konadu
Date: 4/14/2025
Description: Locate the resturants within the same city as the user as well as link to the diffrent locations sites
*/

import React, { useEffect, useState } from 'react';
import './location.css';

import NavBar from './components/navBar.jsx';
import RestaurantCard from './RestuarantCard';
import SearchBar from './SearchBar';


const App = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSelect = async (city) => {
        setLoading(true);
        setSearchPerformed(true);
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

                if (item.photo && item.photo.length > 0) {
                    item.photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${item.place_id}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0`;
                } else {
                    item.photo = './download.jpg';
                }
                restaurants.push({
                    name: item.name,
                    image: item.photo,
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
                const response = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0');
                const data = await response.json();
                setRestaurant(data.restaurants || []);
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
            <NavBar />
            {!searchPerformed ? (
                <div className="homepage-container">
                    <h1 className="homepage-title">Restaurant Finder</h1>
                    <SearchBar onSearch={handleSelect} />
                </div>
            ) : (
                <div className="scroll-container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        restaurant.map((item, index) => (
                            <div key={index} style={{ display: 'inline-block' }}>
                                <RestaurantCard
                                    key={index}
                                    name={item.name}
                                    image={item.image}
                                    rating={item.rating}
                                    website={item.website}
                                />
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default App;
