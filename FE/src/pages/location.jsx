/**
Name: Elijah Atta-Konadu
Date: 4/14/2025
Description: Locate the resturants within the same city as the user as well as link to the diffrent locations sites
*/

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './mainScreen.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import picture from './download.jpg';

import NavBar from '../components/navBar.jsx';
import RestaurantCard from '../components/RestaurantCard.jsx';
import SearchBar from '../components/SearchBar.jsx';

/**
 * Location 
 * This component fetches and displays a list of restaurants based on the user's 
 * selected city and cuisine.
 * It uses the Google Places API to retrieve restaurant data and displays it in a carousel format.
 * The user can filter the results by cuisine type.
 * @returns 
 */
const Location = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [city, setCity] = useState('');
    const [selectedCuisine, setSelectedCuisine] = useState('');

    const handleFilter = async (cuisine, city) => {
        setLoading(true);
        setSearchPerformed(true);
        setCity(city);
        try {
            let query = '';
            if (cuisine) {
                query = `${cuisine}+restaurants+in+${city}`;
            } else {
                query = `restaurants+in+${city}`;
            }
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyAPn8OGmsNM2Z849m-Q_BWGLhxPJbmt6J0`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Check if the response is valid
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
                    item.photo = picture;
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
                    item.photo = picture;
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

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
    };

    return (
        <div>
            <NavBar />
            {!searchPerformed ? (
                <div className="homepage-container">
                    <h1 className="homepage-title">Restaurant Finder</h1>
                    <SearchBar onSearch={handleSelect} />
                </div>
            ) : (
                <div className="carousel-container">
                    <div style={{ margin: '20px 0' }}>
                        <label htmlFor="cuisine-select" style={{ marginRight: 8 }}>Filter by Cuisine:</label>
                        <select
                            id="cuisine-select"
                            value={selectedCuisine}
                            onChange={e => {
                                setSelectedCuisine(e.target.value);
                                handleFilter(e.target.value, city);
                            }}
                        >
                            <option value="">All</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <Slider {...sliderSettings}>
                            {restaurant.map((item, index) => (
                                <div key={index}>
                                    <RestaurantCard
                                        name={item.name}
                                        image={item.image}
                                        rating={item.rating}
                                        website={item.website}
                                    />
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            )}
        </div>
    );
};
export default Location;
