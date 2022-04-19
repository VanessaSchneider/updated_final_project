
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import useSound from 'use-sound';
import trumpet from "./trumpet.mp3"



function NavBar ({ user, setTaskCompleted, taskCompleted}){
    const [task, setTask] = useState("")

    
    const [play] = useSound(trumpet);

    useEffect(() => {
        fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => setTask(data))}, 
    [])




    return (


        <div> 
      
      {task.task2 === 1 || taskCompleted === true ? 
         <NavLink
          to="/profile"
         exact
         >
        <button onClick={(e)=>play()} type="button" className="myprofile">My Profile</button>
        </NavLink> : null}

        {task.task2 === 1 || taskCompleted === true ? <NavLink
        to="/map" 
        exact
        >
            <button onClick={(e)=>play()} type="button" className="sidebuttons">Map</button>
        </NavLink>: null}
      
      
    </div>
    )
}

export default NavBar;