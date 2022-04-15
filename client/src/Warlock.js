 import React, { useState, useEffect } from 'react'
 import RockContainer from  './RockContainer.js';
 import { NavLink } from "react-router-dom";

function Warlock() {

  const [user, setUser] = useState("")
  const [wins, setWins] = useState("")


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    }, []);
    
        
return(
<div>

<RockContainer />

</div>

)}


export default Warlock;
