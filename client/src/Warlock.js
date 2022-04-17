 import React, { useState, useEffect } from 'react'
 import RockContainer from  './RockContainer.js';
 import { NavLink } from "react-router-dom";
 import warlock from "./warlock.png"

function Warlock() {

  const [user, setUser] = useState("")
  const [userWins, setUserWins] =useState(0)
  const [wTalks, setWTalks] = useState(0)


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    }, []);
    
        
return(
<div>

<h2>Welcome to the Warlock's Castle {user? <>, {user.username}</> : null}!</h2>


{userWins > 4 ?<img src = {warlock} className = "size" alt = "image"></img> :<RockContainer userWins={userWins} setUserWins={setUserWins} />}
{userWins > 4 && wTalks ===0  ? <p> I can't believe you were able to win 5 games. I surrender. I will give King Chicken the crown and change out of my scary robe and take out my red contacts.</p>: null}
</div>

)}


export default Warlock;
