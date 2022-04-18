import React, { useState, useEffect } from 'react'
import leprechaunhead from "./leprechaunhead.png"
import witchhead from "./witchhead.png"
import goblinhead from "./goblinhead.png"
import warlockhead from "./warlockhead.png"

function Profile (){
    const [user, setUser] =useState("")
    const [task, setTask] = useState("")




    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);


    useEffect(() => {
      fetch("/getTasks")
  .then((res) => res.json())
  .then((data) => setTask(data))}, 
  []);


      

console.log("profrask", task)



    return (


        <div> 
     <h1>{user.username}'s Profile!</h1>
     {user.picture ? <img src = {user.picture} className = "profile" alt = "image"></img> : null}
      <h2>Villains you have defeated!</h2>
      <br></br>
      <br>
      </br>
      {task.task2 === 1 ? <img src = {leprechaunhead} className = "watch" alt = "image"></img> : null }
      {task.task3 === 1 ? <img src = {witchhead} className = "watch" alt = "image"></img> : null }
      {task.task4 === 1 ? <img src = {goblinhead} className = "watch" alt = "image"></img> : null }
      {task.task5 === 1 ? <img src = {warlockhead} className = "watch" alt = "image"></img> : null }
      {task.task5 === 1 ? <h2> You saved the Kingdom! </h2> : null }

    </div>


    )
}

export default Profile;