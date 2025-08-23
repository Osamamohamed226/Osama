import NavBar from "../Components/Navbar/NavBar";
import NavBar2 from "../Components/Navbar/NavBar2";

export default function HomePage()
{
    return(
        <>
            <NavBar/>
            <NavBar2/>
            <div className="content"></div>
        </>
    )
}