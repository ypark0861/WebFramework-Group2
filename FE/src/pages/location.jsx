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

function location() {
    const [address, setAddress] = useState("");
    
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(results, latLng);
    };
    
    return (
        <div className= "Container">
        <div calssName = "row">
            <div className = "col-md-6">
            <form className="form-inline">
                <input
                value={address}
                onChange={setAddress}
                placeholder="Enter your location"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <h1>React Application</h1>
        </div>
        </div>
    );
    }
