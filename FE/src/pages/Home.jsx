// FILE: Home.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-05
// DESCRIPTION: 
import React from 'react';
import { Link } from 'react-router-dom';
import './Homestyle.css'; 

const Home = () => {
  return (
    <div className="home">
      <div className="flex-grow h-1"></div>
      <section className="welcome-section">
        <h1>Welcome to Healthy Choices!</h1>
        <p>
          We are here to help track your meals, find restaurants, and make better, healthier food choices.
        </p>
      </section>
    </div>
  );
};

export default Home;
