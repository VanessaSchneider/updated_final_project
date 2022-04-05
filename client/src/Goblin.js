import React, { useState, useEffect } from 'react'
import goblin from "./goblin.png"
import { NavLink } from "react-router-dom";
import Game3 from  './Game3.js';


function Goblin() {
    const [playGame, setPlayGame] = useState(false)
   
    function handlePlayGame()
    {setPlayGame((playGame)=>!playGame)}
      
   
    

  
  
return(

<div>
<img src = {goblin} className = "size" alt = "image"></img>
<Game3/>



</div>

)}


export default Goblin;