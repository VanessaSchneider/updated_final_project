import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
 import RockContainer from  './RockContainer.js';
 import warlock from "./warlock.png"



function Warlock() {

    const [user, setUser] = useState("")
 

    

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);
    

    
    
        

return(
<>


<img src = {warlock} className = "size" alt = "image"></img>
<RockContainer/>

</>

)}


export default Warlock;
