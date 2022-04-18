
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react'



function NavBar ({ user, setTaskCompleted, taskCompleted}){
    const [task, setTask] = useState("")


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
        <button type="button" className="myprofile">My Profile</button>
        </NavLink> : null}

        {task.task2 === 1 || taskCompleted === true ? <NavLink
        to="/map" 
        exact
        >
            <button type="button" className="sidebuttons">Map</button>
        </NavLink>: null}
      
      
    </div>
    )
}

export default NavBar;