import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import Game1 from  './Game1.js';


function Leprechaun({textBoxes, setTextBoxes}) {
     const [ridCorrect, setRidCorrect] = useState(0)
     const [playGame, setPlayGame] = useState(false)

     function handlePlayGame()
     {setPlayGame((playGame)=>!playGame)}
   

  
  
return(

<div>
  



{(ridCorrect > 1) ? <NavLink to="/witch">
    <button>Go to Witch's Woods</button>
    </NavLink> : null}
    {(ridCorrect > 1) ? <NavLink to="/map">
    <button>Observe the Map</button>
    </NavLink> : null}
{(playGame === false ) ?  <button onClick={handlePlayGame}>Play My Riddle Game</button> : null}
{(playGame === true) ? <Game1 setRidCorrect = {setRidCorrect} ridCorrect = {ridCorrect}/> : <img src = {leprechaun} className = "mapsize" alt = "image"></img>}
{(ridCorrect ===0) ? <h2>I'll only give you the map if you can get 2 out of 4 riddles correct! I'm watching you, so no googling!</h2>: null}
{(ridCorrect > 1) ? <h2>I can't believe you got those riddles correct. Okay, I'll give the map!</h2>: null}

</div>

)}


export default Leprechaun;