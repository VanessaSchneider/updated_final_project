import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import paper from "./paper.png"
import rock from "./rock.png"
import scissors from "./scissors.png"



function RockContainer() {
    const [userPlay, setUserPlay] =useState("")
    const [userWins, setUserWins] =useState(0)
    const [warlockPlay, setWarlockPlay] =useState(null)
    const [warlockWins, setWarlockWins] =useState(0)
    const [reportToUser, setReportToUser] = useState("")



const warlockArray = ["rock", "paper", "scissors"]


const getRandomPlay = () => 
  warlockArray[Math.floor(Math.random() * warlockArray.length)]

 

function handleClick(e){
   setReportToUser(e.target.value)
setUserPlay(e.target.value)
setWarlockPlay(getRandomPlay())
console.log("warlockplay", warlockPlay)
console.log("userPlay", userPlay)

 if (userPlay === "rock" && warlockPlay === "scissors")
{setUserWins((userWins) => userWins +1)}
else if  (userPlay === "sissors" && warlockPlay === "rock")
{setWarlockWins((warlockWins) => warlockWins +1)}
else if  (userPlay === "rock" && warlockPlay === "paper")
{setWarlockWins((warlockWins) => warlockWins +1)} 
else if  (userPlay === "scissors" && warlockPlay === "paper")
{setUserWins((userWins) => userWins +1) }
 else if (userPlay === "paper" && warlockPlay === "rock")
{setUserWins((userWins) => userWins +1)}
else if (userPlay === "paper" && warlockPlay === "scissors")
{setWarlockWins((warlockWins) => warlockWins +1)}
else if (userPlay === warlockPlay){
    return "You Tied!"
}



}
return (


<div>
<div>
<img src = {rock} className = "button" alt = "image"></img>
<button value = "rock" onClick= {handleClick}>Rock</button>
</div>
<div>
<img src = {paper} className = "button" alt = "image"></img>
<button value = "paper" onClick= {handleClick}>Paper</button>
</div>
<div>
<img src = {scissors} className = "button"></img>
<button value = "scissors" onClick= {handleClick}>Scissors</button>
</div>
<br></br>

{warlockPlay !==null ?
<div>
Warlock played {warlockPlay}
<br></br>
You played {userPlay}
<br></br>
Your Wins: {userWins}
<br></br>
Warlock Wins: {warlockWins}
</div>
:null}
</div>

)}


export default RockContainer;