import map from "./mappy.png"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import door from "./door.png"
import './App.css';


function Home() {
    const [user, setUser] = useState("")
    const [click, setClick] = useState(true)
    const [task, setTask] = useState("")


    useEffect(() => {
        fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => setTask(data))}, 
    [])



    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);

      function handleClick(){
      setClick((click)=>!click)}

   



return(
<div>


{user && click ?
<div id= "door">
<img src = {door} className = "doorSize" alt = "image"></img>
</div> : null}



{user && click ? <NavLink to="/fairy">
    <button onClick = {handleClick}>Go inside the mysterious door!</button>
    </NavLink> 
    :null }

    {click === false && task.task1 ===1 ? <NavLink to="/fairy">
    <button onClick = {handleClick}>Go to FairyLand</button>
    </NavLink> : null }
</div>



)




}

export default Home;