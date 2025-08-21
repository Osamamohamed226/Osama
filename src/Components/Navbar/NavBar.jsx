import React from 'react'
import './assets/css/NavBar.css'
import { useState } from 'react';

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
      
    </>
  )
}

export default NavBar