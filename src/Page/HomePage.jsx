import NavBar from "../Components/Navbar/NavBar";
import '../Page/HomePage.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="content">
        <div className="header">
          <div className="image"></div>
          <div className="head-content">
            <h1>Discover the Timeless Wonders of Egypt</h1>
            <p>
              Explore ancient temples, cruise the majestic Nile, and immerse
              yourself in thousands of years of history and culture.
            </p>
            <div className="buttons">
              <Link to="#" className="btn1">
                Plan Your Adventure
              </Link>
              <Link to="#" className="btn2">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
