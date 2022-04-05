import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import RiddleContainer from  './RiddleContainer.js';


function Game1({ridCorrect, setRidCorrect}) {
    const [riddles, setRiddles] = useState([])
    const [riddleTrue, setRiddleTrue] = useState(false)
    const [user, setUser] = useState("")
    

    

console.log("user", user)
 



useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data))
      }
    });
  }, []);




    useEffect(() => {
        fetch(`/users/${user.id}`)
    .then((res) => res.json())
    .then((data) => setRiddles(data.riddles))
    console.log("riddles", riddles)
}, 
    [user])





      let riddleCards = []
  
      if (riddles.length !== 0){
      riddleCards = riddles.map((riddle) => <RiddleContainer user={user} key={riddle.id} riddle={riddle} updateRiddle={updateRiddle} riddles={riddles} setRiddleTrue={setRiddleTrue} riddleTrue={riddleTrue} />)
    }



    function updateRiddle(updatedItem) {
        const updatedItems = riddles.map((riddle) => {
          if (riddle.id === updatedItem.id) {
            return updatedItem;
          } else {
            return riddle;
          }
        });
        setRiddles(updatedItems);
        setRidCorrect((ridCorrect)=>ridCorrect +=1)
        console.log("updateditems", updatedItems)
      }



      let riddleCorrect = []
      if (riddles.length !== 0){
  riddleCorrect = riddles.filter((riddle)=>riddle.correct === true)
  console.log("riddleCorrect", riddleCorrect)
  
}



     
    
                   

return(
<>
<div>
{(riddleCorrect && (riddleCorrect.length > 1)) ? null : null}
{riddleCards}
</div>
</>

)}


export default Game1;

