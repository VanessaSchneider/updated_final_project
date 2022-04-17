import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import Game1 from  './Game1.js';
import leprechaunhead from "./leprechaunhead.png"


function Leprechaun({user}) {
     const [ridCorrect, setRidCorrect] = useState(0)
     const [playGame, setPlayGame] = useState(false)

     function handlePlayGame()
     {setPlayGame((playGame)=>!playGame)}
   

  
  
return(

<div>

  
 <h2>Welcome to Leprechaun Landing {user? <>, {user.username}</> : null}!</h2>
 {playGame === true?  <div><img src = {leprechaunhead} className = "watch" alt = "image"></img></div>: null}

{(playGame === true) ? <Game1 setRidCorrect = {setRidCorrect} ridCorrect = {ridCorrect}/> : <img src = {leprechaun} className = "size" alt = "image"></img>}

<div>
    <br>
    </br>
    <br></br>
{(ridCorrect ===0 && playGame === false) ? <p>I'll only give you the map if you can get 2 out of 4 riddles correct!</p>: null}
{(ridCorrect > 1) ? <p>I can't believe you got those riddles correct. Okay, I'll give the map!</p>: null}
{(playGame === false ) ?  <button className = "buttons" onClick={handlePlayGame}>Play My Riddle Game</button> : null}
</div>
{(ridCorrect > 1) ? <NavLink to="/witch">
    <button className = "buttons">Go to Witch's Woods</button>
    </NavLink> : null}
    {(ridCorrect > 1) ? <NavLink to="/map">
    <button className = "buttons">Observe the Map</button>
    </NavLink> : null}
</div>

)}


export default Leprechaun;