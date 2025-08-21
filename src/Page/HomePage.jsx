import NavBar from "../Components/Navbar/NavBar";

export default function HomePage()
{
    return(
        <>
            <NavBar/>
            <div className='first-content'>
                <img className='image' src="/img/The Pyramids4.jpg" alt="pyramids" />
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