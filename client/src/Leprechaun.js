
import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import Game1 from  './Game1.js';
import leprechaunhead from "./leprechaunhead.png"
import useSound from 'use-sound';
import cackle from "./watch.wav"


function Leprechaun({user, taskCompleted, setTaskCompleted}) {
     const [ridCorrect, setRidCorrect] = useState(0)
     const [playGame, setPlayGame] = useState(false)
     const [task, setTask] = useState("")

     function handlePlayGame()
     {setPlayGame((playGame)=>!playGame)}

     const [play] = useSound(cackle);

     useEffect(() => {
          fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => setTask(data))}, 
      [])
      


function Play(){
play()

}
  
  
return(

<div>

  
 <h2>Welcome to Leprechaun Landing {user? <>, {user.username}</> : null}!</h2>
 {playGame === true?  <div><img src = {leprechaunhead} className = "watch" alt = "image"></img></div>: null}

{(playGame === true) ? <Game1 setRidCorrect = {setRidCorrect} ridCorrect = {ridCorrect} taskCompleted={taskCompleted} setTaskCompleted={setTaskCompleted}/> : <img src = {leprechaun} className = "size" alt = "image"></img>}

{(ridCorrect ===0) && playGame ===false && task.task2 !==1 ?  <p className = "riddle-correct">I'll only give you the map if you can get 2 out of 4 riddles correct!</p>: null}
{(playGame === false && task.task2 ===0 ) ?  <button className = "the-button" onClick={handlePlayGame}>Play My Riddle Game</button> : null}
<br>
</br>
<br></br>
<div className = "middle-section">
{ (ridCorrect > 1 || task.task2 ===1) ? <div className = "lep-correct"><br></br> <h3>I can't believe you got those riddles correct. Okay, I'll give the map!</h3></div>: null}
{(ridCorrect > 1 || task.task2 ===1) ? <div className = "button-correct"><NavLink to="/witch">
    <button onClick={Play} className = "the-witches">Witch's Woods</button>
    </NavLink></div> : null}
    <br></br>
    {(ridCorrect > 1) ?<div className = "button-correct"> <NavLink to="/map">
    <button className = "the-button2">Observe the Map</button>
    </NavLink></div> : null}
   </div>
</div>

)}


export default Leprechaun;