
import { NavLink, useHistory } from "react-router-dom";

function Logout ({ handleLogout }){
    // const history = useHistory();
    
    // const handleRedirect = () => {
    //   history.push("/")
    // }
    
    
    
    
    return(
        <header className = "logout-container">
          <button type="button" className="buttons" onClick={handleLogout}>Logout</button>
        </header>
    
    )}
    
    
    
    export default Logout;
    