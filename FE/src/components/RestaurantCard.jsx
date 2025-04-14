import React from 'react';
import Card from 'react-bootstrap/Card';
import './RestaurantCard.css'; // Ensure this file contains the necessary styles

const RestaurantCard = ({ name, image, rating, website }) => {
    return (
        <Card className="restaurant-card">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={image} alt={name} />
                <div className="card-details">
                    <p className="card-rating">Rating: {rating}</p>
                    <Card.Link
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        Link to Website
                    </Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RestaurantCard;
