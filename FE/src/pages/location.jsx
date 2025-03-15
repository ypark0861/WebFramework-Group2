/**
 * Author: Elijah Atta-Konadu
 * Date: 03/13/2025
 * Description: Skeleton Complete
 */

import React, { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import './location.css';

const Location = () => {
    const [address, setAddress] = useState("");
    const [place, setPlace] = useState(null);

    const handleChange = (address) => {
        setAddress(address);
    };

    const handleSelect = async (selectedAddress) => {
        setAddress(selectedAddress);
        try {
            const results = await geocodeByAddress(selectedAddress);
            const placeDetails = {
                name: results[0].name,
                address: results[0].formatted_address,
                place_id: results[0].place_id,
                geometry: results[0].geometry
            };
            setPlace(placeDetails);
            console.log(placeDetails);
        } catch (error) {
            console.error('Error', error);
        }
    };

    return (
        <div className="autocomplete-container">
            <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: "Enter your location",
                                className: "autocomplete-input"
                            })}
                        />
                        <div className="autocomplete-dropdown">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion.placeId}
                                    {...getSuggestionItemProps(suggestion)}
                                    className="suggestion-item"
                                >
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
            {place && (
                <div className="place-info">
                    <h2>Address Details</h2>
                    <p>
                        <strong>Name:</strong> {place.name}
                    </p>
                    <p>
                        <strong>Formatted Address:</strong> {place.address}
                    </p>
                    <p>
                        <strong>Place ID:</strong> {place.place_id}
                    </p>
                    <p>
                        <strong>Latitude:</strong> {place.geometry.location.lat()}
                    </p>
                    <p>
                        <strong>Longitude:</strong> {place.geometry.location.lng()}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Location;
