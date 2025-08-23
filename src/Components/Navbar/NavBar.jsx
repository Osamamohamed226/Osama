import React from "react";
import "./assets/css/NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const languages = [
  "English",
  "العربية",
  "Français",
  "Deutsch",
  "Español",
  "中文",
];

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbarr">
        <div className="logo">
          <h1>
            <i class="text-orange fa-solid fa-ankh"></i>EgyptGuide
          </h1>
        </div>
        <div className="right">
          <div className="links">
            <Link to="#">Destinations</Link>
            <Link to="#">Experiences</Link>
            <Link to="#">Plan Your Trip</Link>
            <Link to="#">About Egypt</Link>
          </div>
          <div className="language">
            <button className="dropdown-togglee" onClick={() => setOpen(!open)}>
              🌐 English <span className="arrow">{open ? "▲" : "▼"}</span>
            </button>
            {open && (
              <ul className="dropdown-menuu">
                {languages.map((lang, index) => (
                  <li key={index} className="dropdown-item">
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a Link="#">
            <button>My Itinerary</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
