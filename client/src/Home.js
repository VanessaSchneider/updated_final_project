import map from "./mappy.png"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';


function Home() {
    const [user, setUser] = useState("")
    const [click, setClick] = useState(true)

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);

      function handleClick(){
      setClick((click)=>!click)}
    
  
   



return(

<div>


{user && click? <NavLink to="/fairy">
    <button onClick = {handleClick}>Go To Fairyland!</button>
    </NavLink> : null}

</div>



)




}

export default Home;