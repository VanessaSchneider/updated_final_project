import React, { useState, useEffect } from 'react'
import goblin from "./goblin.png"
import { NavLink } from "react-router-dom";
import Game3 from  './Game3.js';
import goblinhead from "./goblinhead.png"


function Goblin({user}) {
    const [playGame, setPlayGame] = useState(false)
    const [gtalks, setGTalks] = useState(0)
   
    function handlePlayGame()
    {setPlayGame((playGame)=>!playGame)}
      
      
    function increment()
    {setGTalks((wtalks)=>wtalks +=1) }
   
    

  
  
return(

<div>
<h2>Welcome to Goblin Crossing! {user? <>, {user.username}</> : null}!</h2>

{


(playGame === false ) ?  <img src = {goblin} className = "size" alt = "image"></img> :<img src = {goblinhead} className = "watch" alt = "image"></img> }
{playGame ===false ? null :<Game3/>}
{gtalks === 0 ?<div> <p> Stop right there! I don't let anyone cross this bridge. </p>
<button className = "buttons" onClick = {increment}> Say, "May, I please cross the bridge?"</button> </div> : null}
{gtalks ===1 && playGame === false ? <p>Okay, I will make you a deal. If you can guess my name. I will let you go across</p>: null}
{playGame === false  && gtalks ===1 ? <button className = "buttons" onClick={handlePlayGame}>Guess my name game</button> : null}



</div>

)}


export default Goblin;