import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import TriviaContainer from  './TriviaContainer.js';
import witch from "./witch.png"


function Witch() {
    const [trivia, setTrivia] = useState([])
    const [TriviaTrue, setTriviaTrue] = useState(false)
    const [user, setUser] = useState("")
    const [triviaCorrect, setTriviaCorrect] = useState(0)
    

    

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);
    
    console.log(user)
    
    
      useEffect(() => {
        fetch("/getTrivia")
    .then((res) => res.json())
    .then((data) => setTrivia(data))}, 
    [])
  console.log("trivia", trivia)



    function updateTrivium(updatedItem) {
      const updatedItems = trivia.map((riddle) => {
        if (riddle.id === updatedItem.id) {
          return updatedItem;
        } else {
          return riddle;
        }
      });
      setTrivia(updatedItems);
      setTriviaCorrect((triviaCorrect)=>triviaCorrect +=1)
      console.log("updateditems", updatedItems)
    }


    
    
    

    
        

return(
<>

<div>
<h2>Welcome to Witch's Woods! {user? <>, {user.username}</> : null}!</h2>
<img src = {witch} className = "size" alt = "image"></img>
<div>
{trivia ?<TriviaContainer trivia={trivia} updateTrivium= {updateTrivium} /> :null}
</div>
</div>
</>

)}


export default Witch;

