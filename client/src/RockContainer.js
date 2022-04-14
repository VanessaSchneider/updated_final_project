import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import paper1 from "./paper.png"
import rock1 from "./rock.png"
import scissors1 from "./scissors.png"



function RockContainer({setWins, wins}) {
    const [userPlay, setUserPlay] =useState("")
    const [userWins, setUserWins] =useState([])
    const [warlockPlay, setWarlockPlay] =useState(null)
    const [warlockWins, setWarlockWins] =useState([])
    const [wtalks, setWTalks] = useState(0)
    const [submitted, setSubmitted] = useState(false)



const warlockArray = ["rock", "paper", "scissors"]


const getRandomPlay = () => 
  warlockArray[Math.floor(Math.random() * warlockArray.length)]

  function increment()
  {setWTalks((wtalks)=>wtalks +=1) }





 function handleClick(e){
 setWarlockPlay(getRandomPlay())
console.log("warlockplay", warlockPlay)
console.log("userPlay", e.target.value)
setUserPlay(e.target.value)


 if (userPlay === "rock" && warlockPlay === "scissors")
{ setWins(<p>"You Win!"</p>)
  setUserWins([...userWins, e.target.value])}


else if(userPlay === "sissors" && warlockPlay === "rock")
{ setWins(<p>"Warlock Won!"</p>)
setWarlockWins([...warlockWins, e.target.value])}


else if(userPlay === "rock" && warlockPlay === "paper")
{ setWins(<p>"Warlock Won!"</p>)
  setWarlockWins([...warlockWins, e.target.value])}

else if(userPlay === "scissors" && warlockPlay === "paper")
{ setWins(<p>"You Win!"</p>)
  setUserWins([...userWins, e.target.value])
 }

else if(userPlay === "paper" && warlockPlay === "rock")
 { setWins("You Win!")
   setUserWins([...userWins, e.target.value])
 }

else if(userPlay === "paper" && warlockPlay === "scissors")
{ setWins(<p>"Warlock Won!"</p>)
  setWarlockWins([...warlockWins, e.target.value])}

  else if(userPlay ===  warlockPlay)
{ setWins(<p>"A tie!"</p>)}
setSubmitted((submitted)=>!submitted)

 }


  function Submitted(){
    setSubmitted((submitted)=>!submitted)
    setWins("")

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
  

return (


<div>
{wtalks === 0 ?<div> <p>Well, well, well. You finally made it to my castle. I see you got past my friends guarding the trail to get to me. I also suppose that chicken with you wants to take back his Kingdom? </p>
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
{wins}
<button onClick = {Submitted}>Next Question</button>
</div>
:null}
</div>

)}


export default RockContainer;