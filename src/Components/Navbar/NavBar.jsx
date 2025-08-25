import { Link } from "react-router-dom";
import { useState } from "react";
import "./assets/css/NavBar.css";

export default function NavBar() {
  const languages = [
    "English",
    "العربية",
    "Français",
    "Deutsch",
    "Español",
    "中文",
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="d-flex  justify-content-between p-2 navv"
      style={{ backgroundColor: "#f0e6c9" }}
    >
      <div>
        <h1 className="logo">
          <i class="text-orange fa-solid fa-ankh"></i>EgyptGuide
        </h1>
      </div>
      <div>
        <ul
          className="d-flex  gap-4 justify-content-center align-items-center"
          style={{ listStyle: "None" }}
        >
          <li>
            <Link>Destenation</Link>
          </li>
          <li>
            <Link>Experincess</Link>
          </li>
          <li>
            <Link>Plan Your Trip</Link>
          </li>
          <li>
            <Link>About Egypt</Link>
          </li>
          <li>
            <div className="language">
              <button
                className="dropdown-togglee"
                onClick={() => setOpen(!open)}
              >
                <span>🌐</span> English{" "}
                <span className="arrow">{open ? "▲" : "▼"}</span>
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
          </li>
          <Link to="/" className="buttton">
            My Itinerary
          </Link>
        </ul>
      </div>
    </nav>
  );
}
