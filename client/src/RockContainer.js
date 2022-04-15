import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import paper1 from "./paper.png"
import rock1 from "./rock.png"
import scissors1 from "./scissors.png"
import warlock from "./warlock.png"



function RockContainer({userWins, setUserWins}) {
    const [userPlay, setUserPlay] =useState("")
    const [warlockPlay, setWarlockPlay] =useState(null)
    const [warlockWins, setWarlockWins] =useState(0)
    const [wtalks, setWTalks] = useState(0)
    const [submitted, setSubmitted] = useState(false)



const warlockArray = ["rock", "paper", "scissors"]


const getRandomPlay = () => 
  warlockArray[Math.floor(Math.random() * warlockArray.length)]

  function increment()
  {setWTalks((wtalks)=>wtalks +=1) }


let recap = null


 function handleClick(e){
 setWarlockPlay(getRandomPlay())
console.log("warlockplay", warlockPlay)
console.log("userPlay", e.target.value)
setUserPlay(e.target.value)


 if (userPlay === "rock" && warlockPlay === "scissors")
  {setUserWins((userWins)=>userWins + 1)}


else if(userPlay === "scissors" && warlockPlay === "rock")
{setWarlockWins((warlockWins)=>warlockWins + 1)}


else if(userPlay === "rock" && warlockPlay === "paper")
{setWarlockWins((warlockWins)=>warlockWins + 1)}

else if(userPlay === "scissors" && warlockPlay === "paper")
{setUserWins((userWins)=>userWins + 1)}

else if(userPlay === "paper" && warlockPlay === "rock")
{setUserWins((userWins)=>userWins + 1)}

else if(userPlay === "paper" && warlockPlay === "scissors")
{setWarlockWins((warlockWins)=>warlockWins + 1)}

setSubmitted((submitted)=>!submitted)

 }


  function Submitted(){
    setSubmitted((submitted)=>!submitted)

  }

  function Display()
  {if (userPlay === "rock")
  {return <img src = {rock1} className = "rockButton"></img> }
  else if (userPlay ==="scissors")
  {return <img src = {scissors1} className = "rockButton"></img> }
  else if (userPlay === "paper")
  {return <img src = {paper1} className = "rockButton"></img> }
  }


  function Display2()
  {if (warlockPlay === "rock")
  {return <img src = {rock1} className = "rockButton"></img> }
  if (warlockPlay ==="scissors")
  {return <img src = {scissors1} className = "rockButton"></img> }
  if (warlockPlay === "paper")
  {return <img src = {paper1} className = "rockButton"></img> }
  }



  function Wins() {

  if (userPlay === "rock" && warlockPlay === "scissors"){

    return <h3> You Win! User wins!</h3>
  }


else if(userPlay === "scissors" && warlockPlay === "rock"){
return <h3> Warlock Wins! </h3>
}


else if(userPlay === "rock" && warlockPlay === "paper"){
  return <h3> Warlock Wins! </h3>

}

else if(userPlay === "scissors" && warlockPlay === "paper"){
  return <h3> You Win! </h3>
  }


else if(userPlay === "paper" && warlockPlay === "rock"){
  return <h3> You Win! </h3>

  }
  

else if(userPlay === "paper" && warlockPlay === "scissors"){
return <h3> Warlock Wins! </h3>

}

else if(userPlay === warlockPlay)
{return <h3> You Tied! </h3>

}
  }
  
   


return (


<div>
{submitted===false && wtalks === 2 ? <div> Your Wins: {userWins} Warlock Wins: {warlockWins} </div>: null}
{wtalks !== 2 ?<img src = {warlock} className = "size" alt = "image"></img> : null}
{wtalks === 0 ?<div> <p>Well, well, well. You finally made it to my castle. I see you got past my friends guarding the path. I also suppose that chicken with you wants to take back his Kingdom? </p>
<button onClick = {increment} >Say, "Yes"</button> </div> : null}
{wtalks ===1 ? <div> <p>There is only one fair way to solve this... and it's Rock, Paper, Scissors</p>
<button onClick = {increment} >Play Rock, Paper, Scissors</button> </div> : null}
{wtalks ===2 && submitted ==false ? 
<div>
<div>
<button value = "rock" onClick= {handleClick}>Rock</button>
</div>
<div>
<button value = "paper" onClick= {handleClick}>Paper</button>
</div>
<div>
<button value = "scissors" onClick= {handleClick}>Scissors</button>
</div></div>  : null }
<br></br>

{warlockPlay !==null && submitted === true ?
<div>
Warlock played {Display2()}
<br></br>
You played {Display()}
<br></br>
{Wins()}
<button onClick = {Submitted}>Next Round</button>
</div>
:null}
</div>

)}


export default RockContainer;