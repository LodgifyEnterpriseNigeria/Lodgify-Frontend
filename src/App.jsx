import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Earn from './pages/Earn'
import Feature from './pages/Features'
import Waitlist from './pages/Waitlist'



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Earn />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </Router>
    
  )
}

export default App