import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import TriviaContainer from  './TriviaContainer.js';
import witch from "./witch.png";
import witchhead from "./witchhead.png";
import WitchSound from './WitchSound.js';



function Witch() {
    const [trivia, setTrivia] = useState([])
    const [user, setUser] = useState("")
    const [triviaCorrect, setTriviaCorrect] = useState(0)
    const [playGame, setPlayGame] = useState(false)
    const [wtalks, setWTalks] = useState(0)
    

    

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

    function handlePlayGame()
    {setPlayGame((playGame)=>!playGame)}

    
    
    function increment()
    {setWTalks((wtalks)=>wtalks +=1) }
  

    
        

return(
<>

<div>
<h2>Welcome to Witch's Woods! {user? <>, {user.username}</> : null}!</h2>


{playGame ===false? <img src = {witch} className = "size" alt = "image"></img>  :<img src = {witchhead} className = "watch" alt = "image"></img> }

{wtalks === 0 ?<div> <p> {user? <>{user.username},</> : null} is it? Well, you aren't getting past me. I will get you and your little chicken too! </p>
<button className = "buttons" onClick = {increment}> Say, "I will get past you!"</button> </div>: null}
{wtalks ===1 && playGame ===false ? <p>I have gotten really into trivia lately.If you can answer 3 questions correctly, I will let you go.</p>: null}


{playGame === false  && wtalks ===1 ? <button className = "buttons" onClick={handlePlayGame}>Play My Trivia Game</button> : null}
{trivia && playGame ===true ?<TriviaContainer trivia={trivia} updateTrivium= {updateTrivium} /> :null}


</div>

</>

)}


export default Witch;

