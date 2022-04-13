 import React, { useState, useEffect } from 'react'
 import RockContainer from  './RockContainer.js';
 import warlock from "./warlock.png"
 import { NavLink } from "react-router-dom";

function Warlock() {

  const [user, setUser] = useState("")


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    }, []);
    
        
return(
<div>


<img src = {warlock} className = "size"> </img>
<RockContainer/>

</div>

)}


export default Warlock;
