import React from 'react'
import './assets/css/NavBar.css'
import { useState } from 'react';
import pyramids from './assets/img/The Pyramids4.jpg'

const languages = [
  'English',
  'العربية',
  'Français',
  'Deutsch',
  'Español',
  '中文',
];



function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='navbar'>
          <h1 className='logo'>EgyptGuide</h1>
          <p>Destinations</p>
          <p>Experiences</p>
          <p>Plan Your Trip</p>
          <p>About Egypt</p>
          <div className="language">
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        🌐 English <span className="arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul className="dropdown-menu">
          {languages.map((lang, index) => (
            <li key={index} className="dropdown-item">
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
          <button className='itinerary'>My Itinerary</button>
      </div>
      <div className='first-content'>
        <img className='image' src={pyramids} alt="pyramids" />
        <p className='header'>Discover the Timeless <br /> Wonders of Egypt</p>
        <p className='description'>Explore ancient temples, cruise the majestic Nile, and immerse <br /> yourself in thousands of years of history and culture.</p>
        <div className='buttons'>
          <button className='btn1'>Plan Your Adventure</button>
          <button className='btn2'>Explore Destinations</button>
        </div>
      </div>
    </>
  )
}

export default NavBar