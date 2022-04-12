
import { NavLink } from "react-router-dom";


function NavBar ({ user}){

    return (


        <div> 
        <div id="nav">
       {user ? <div>
         <NavLink
          to="/home"
         exact
         >
            <button type="button" className="btn btn-outline-light">Home Page</button>
        </NavLink>
        <NavLink
        to="/map" 
        exact
        >
            <button type="button" className="btn btn-outline-light">Map</button>
        </NavLink>
        </div> : null }
        </div>
    </div>
    )
}

export default NavBar;