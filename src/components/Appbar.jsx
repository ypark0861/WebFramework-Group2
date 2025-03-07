// https://www.youtube.com/watch?v=aZGzwEjZrXc

import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const Appbar = () => {
    return (
    <section className="nav-bar text-slate-950">
      <nav className="px-3 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-btween sm:items-stretch sm:justify-start">
          <div className="flex items-center cursor-pointer">
            <img className="mr-3 h5 sm:h-6" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="logo" />
            <h2>HEALTHY CHOICES</h2>
          </div>
          <div className="inline-flex items-center hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link to="/">
              <div className="rounded-md bg-teal-400 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-300 hover:text-white" aria-current="page">Home</div>
              </Link>
              <Link to="/myfood">
              <div className="rounded-md bg-teal-400 px-3 py-2 text-sm font-medium text-slate-950 hover:bg-slate-300 hover:text-white">My Food</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Appbar;