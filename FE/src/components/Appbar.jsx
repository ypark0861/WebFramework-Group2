// FILE: Appbar.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-05
// DESCRIPTION:
// REFRENCES: https://www.youtube.com/watch?v=aZGzwEjZrXc
// https://flowbite.com/docs/components/navbar/

import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
    return (
    <section>
      <nav className="navbar">
        <h1>HEALTHY CHOICES</h1>
        <div className="links">
          <ul className="flex text-slate-950">
            <Link to="/" aria-current="page">
            <li>
              Home
            </li>
            </Link>
            <Link to="/myfood">
            <li>
              My Food
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Appbar;