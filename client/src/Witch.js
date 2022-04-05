import React, { useState, useEffect } from 'react'
import witch from "./witch.png"
import { NavLink } from "react-router-dom";
import Game2 from  './Game2.js';


function Witch() {
    const [ridCorrect, setRidCorrect] = useState(0)
    const [playGame, setPlayGame] = useState(false)
   
    function handlePlayGame()
    {setPlayGame((playGame)=>!playGame)}
      
   
    

  
  
return(

<div>
<img src = {witch} className = "size" alt = "image"></img>
<NavLink to="/goblin">
    <button>Go to Goblin Crossing</button>
    </NavLink> 



</div>

)}


export default Witch;