// FILE: counterSlice.jsx
// PROJECT: Advanced Web Frameworks - Group2
// PROGRAMMER: Yujung Park
// FIRST VERSION: 2025-03-05
// DESCRIPTION: Test purpose

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appbar from './components/Appbar'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Location from './pages/location'
import MyFood from './pages/MyFood'
import MyList from './pages/MyList'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="nav">
          {/* <Appbar /> */}
          <Navbar />
          
        </div>
        <div className="page">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Location />} />          
          <Route path="/myfood" element={<MyFood />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
