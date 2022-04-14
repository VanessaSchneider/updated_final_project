
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react'



function NavBar ({ user}){
    const [task, setTask] = useState("")


    useEffect(() => {
        fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => setTask(data))}, 
    [])




    return (


        <div> 
        <div id="nav">
       {user && task.task2 ===1 ? <div>
         <NavLink
          to="/home"
         exact
         >
        <button type="button" className="btn btn-outline-light">Home Page</button>
        </NavLink>  </div> : null }


        {task.task2 === 1 ? <NavLink
        to="/map" 
        exact
        >
            <button type="button" className="btn btn-outline-light">Map</button>
        </NavLink>: null}
      
        </div>
    </div>
    )
}

export default NavBar;