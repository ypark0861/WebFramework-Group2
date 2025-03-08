// https://www.youtube.com/watch?v=aZGzwEjZrXc
// https://flowbite.com/docs/components/navbar/

import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
    return (
    <section>
      <nav className="navbar">
        <h1>HEALTHY CHOICES</h1>
        <div className="links">
          <ul className="flex">
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

// <Link to="/">
//               <div className="rounded-md bg-teal-400 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-300 hover:text-white" aria-current="page">Home</div>
//               </Link>
//               <Link to="/myfood">
//               <div className="rounded-md bg-teal-400 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-300 hover:text-white">My Food</div>
//               </Link>