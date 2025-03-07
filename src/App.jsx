import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appbar from './components/Appbar'
import Home from './pages/Home'
import MyFood from './pages/MyFood'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="nav">
          <Appbar />
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myfood" element={<MyFood />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
