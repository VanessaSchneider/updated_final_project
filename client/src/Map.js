import map from "./mappy.png"
import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function Map() {
    const [user, setUser] = useState("")
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
[])






return(

<div>


<img src = {map} className = "size" alt = "image"></img>
<h2>Places You Can Go:</h2>
<NavLink to="/fairy">
    <button>Fairyland</button>
    </NavLink>
<NavLink to="/leprechaun">
    <button>Leprechaun Landing</button>
    </NavLink>
{task.task2 ===1 ? <NavLink to="/witch">
    <button>Witch's Woods</button>
    </NavLink>: null}
{task.task3 ===1 ?<NavLink to="/goblin">
    <button>Goblin Crossing</button>
    </NavLink>: null}
{task.task4 ===1 ?<NavLink to="/warlock">
    <button>Warlock's Castle</button>
    </NavLink>: null}





</div>



)




}

export default Map;