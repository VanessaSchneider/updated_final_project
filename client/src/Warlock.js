 import React, { useState, useEffect } from 'react'
 import RockContainer from  './RockContainer.js';
 import { NavLink } from "react-router-dom";
 import warlock from "./warlock.png"

function Warlock() {

  const [user, setUser] = useState("")
  const [userWins, setUserWins] =useState(0)


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    }, []);
    
        
return(
<div>


{userWins > 4 ?<img src = {warlock} className = "size" alt = "image"></img> :<RockContainer userWins={userWins} setUserWins={setUserWins} />}

</div>

)}


export default Warlock;
