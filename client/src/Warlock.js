 import React, { useState, useEffect } from 'react'
 import RockContainer from  './RockContainer.js';
 import { NavLink } from "react-router-dom";
 import warlock from "./warlock.png"
 import teddy from "./teddybear.png"
 import useSound from 'use-sound';
import success from "./won.mp3"

function Warlock() {

  const [user, setUser] = useState("")
  const [userWins, setUserWins] =useState(0)
  const [wTalks2, setWTalks2] = useState(0)
  const [wTalks, setWTalks] = useState(0)
  const [task, setTask] = useState("")


  const [play] = useSound(success);

  function UserWins()
  {
    console.log("userwinsgotcalled")
    setUserWins((userWins)=>userWins + 1)}


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((data) => setUser(data));
        }
      });
    }, []);


    useEffect(() => {
      fetch("/getTasks")
  .then((res) => res.json())
  .then((data) => setTask(data))}, 
  []);


    function increment()
    {setWTalks2((wTalks2)=>wTalks2 +1) }

    function Play(){
      if (userWins > 4)
      {play()}


    }
  
        
return(
<div>

<h2>Welcome to the Warlock's Castle {user? <>, {user.username}</> : null}!</h2>
{Play()}
{userWins > 4 && task.task5 ===1 ? null :<RockContainer task={task} userWins={userWins} setUserWins={setUserWins} user={user} UserWins={UserWins} />}
{userWins > 4  && wTalks2 === 0 ? <img src = {warlock} className = "size" alt = "image"></img> : null}
{userWins > 4 && wTalks2 ===0  ? <div> <p> I can't believe you were able to win 5 games. I surrender. I will give King Chicken the crown and change out of my scary robe and take out my red contacts.</p>
<button className = "buttons" onClick = {increment} >Say, "Yes"</button> </div> : null}
{userWins > 4 && wTalks2 ===1  ? <div> <img src = {teddy} className = "size" alt = "image"></img>
<p> Yes, I really was just a teddy bear in a scary cloak. But now we can all live happily ever after!</p>
<h2> The End!</h2></div>: null}
{task.task5 ===1 ? <div> <img src = {teddy} className = "size" alt = "image"></img> <div className = "riddle-correct">
<p> Yes, I really was just a teddy bear in a scary cloak. But now we can all live happily ever after!</p>
<h2> The End!</h2></div></div>: null}

</div>

)}


export default Warlock;
