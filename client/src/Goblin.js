import React, { useState, useEffect } from 'react'
import goblin from "./goblin.png"
import { NavLink } from "react-router-dom";
import Game3 from  './Game3.js';
import goblinhead from "./goblinhead.png"


function Goblin({user}) {
    const [playGame, setPlayGame] = useState(false)
   
    function handlePlayGame()
    {setPlayGame((playGame)=>!playGame)}
      
   
    

  
  
return(

<div>
<h2>Welcome to Goblin Crossing! {user? <>, {user.username}</> : null}!</h2>


{(playGame === false ) ?  <button className = "buttons" onClick={handlePlayGame}>Guess My Name Game</button> : null}
{(playGame === false ) ?  <img src = {goblin} className = "size" alt = "image"></img> :<img src = {goblinhead} className = "watch" alt = "image"></img> }
{playGame ===false ? null :<Game3/>}



</div>

)}


export default Goblin;