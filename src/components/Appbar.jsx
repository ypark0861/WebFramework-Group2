// https://www.youtube.com/watch?v=aZGzwEjZrXc

import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <nav className="navbar">
      <h1>Healthy Food Choice</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/myfood" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>MyFood</Link>
    </div>
  </nav>
  )
}

export default Appbar;