/**
 * Author: Elijah Atta-Konadu
 * Date: 03/13/2021
 * description: This is a react application that allows users to enter their location and submit it.
 * Following tutorial then editing afterwards.
 * https://www.youtube.com/watch?v=HslRpRQcH5M&t=230s&ab_channel=CodingShiksha
 */
import placesAutocomplete from 'react-places-autocomplete';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './location.css';


function Location() {
    const [address, setAddress] = useState("");
    const [place, setPlace] = useState(null);
    const handleChange = (address) => {
        setAddress(address);
    }
const handleSelect = async (selectedAddress) => {
        setAddress(selectedAddress);
        try{
            const results = await geocodeByAddress(selectedAddress);
            const placeDetails = {
                name: results[0].name,
                address: results[0].formatted_address,
                place_id: results[0].place_id,
            };
            setPlace(placeDetails);
            console.log(placeDetails);
        }catch(error) {
            console.error('Error', error);
        }
    }

    
    return (
        <div className= "autocompolete-container">
            <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({ placeholder: "Enter your location" })} />
                        <div>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            
            </PlacesAutocomplete>
            </dev>
       );
    }
