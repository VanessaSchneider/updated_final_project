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
<h3>The Map</h3>
<img src = {map} className = "mapsize" alt = "image"></img>
<div className ="places">
<h3>Places You Can Go:</h3>
<NavLink to="/fairy">
    <button className = "buttons">Fairyland</button>
    </NavLink>
<NavLink to="/leprechaun">
    <button className = "buttons">Leprechaun Landing</button>
    </NavLink>
{task.task2 ===1 ? <NavLink to="/witch">
    <button className = "buttons">Witch's Woods</button>
    </NavLink>: null}
{task.task3 ===1 ?<NavLink to="/goblin">
    <button className = "buttons">Goblin Crossing</button>
    </NavLink>: null}
{task.task4 ===1 ?<NavLink to="/warlock">
    <button className = "buttons">Warlock's Castle</button>
    </NavLink>: null}
    </div>





</div>



)




}

export default Map;