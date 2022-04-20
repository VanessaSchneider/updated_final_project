import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";




function TriviaContainer({trivia, handleDelete, updateTrivium,task}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctTrivia, setCorrectTrivia] = useState(0)
    const [user, setUser] = useState("")
    const [triviaCorrect, setTriviaCorrect] = useState(0)



    

    const triviaToShow = trivia.filter((triv)=>triv.guessed !== true )






let card = []
if (trivia && trivia.length!==0){
    card = triviaToShow[0]}

let updated = []

          
            function handleClick(event){
                setUserGuess(event.target.value)
                if (triviaToShow && (card.correct === userGuess)){
                        fetch(`/trivia/${card.id}`, {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            guessed :true
                          }),
                        })
                        .then((r) => r.json())
                        .then((updatedItem) => updateTrivium(updatedItem));
                       setUserGuess("")
      
                    }}



                    


                            let trivCorrect = []
          if (trivia.length !== 0){
      trivCorrect =trivia.filter((triv)=>triv.guessed === true)
      console.log("trivCorrect", trivCorrect)
    }




    

                      function toShow(){
                        if (userGuess === "") {return null}
                        else if (card.correct === userGuess) {return <p>Correct</p>}
                        else if (card.correct !== userGuess) {return <p>Sorry, Incorrect</p>}}
                 
    





                

                function handleButton(){if (triviaToShow && (card.correct === userGuess)){
                    fetch(`/trivia/${card.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        guessed :true
                      }),
                    })
                    .then((r) => r.json())
                    .then((updatedItem) => updateTrivium(updatedItem));
                   setUserGuess("")
  
                }}
                   
                 
                    

                
                   
                  


            
return(
<div>
<div></div>



{triviaToShow.length !==0 ?
 <div>
{card.question}
 <div> 
     <br></br>

  
    
        <button className = "buttons" value = "A" onClick = {handleClick}> {card.answer1} </button>
        <button className = "buttons" value = "B" onClick = {handleClick}> {card.answer2}</button>
        <button className = "buttons" value = "C" onClick = {handleClick}> {card.answer3} </button>
        <button className = "buttons" value = "D" onClick = {handleClick}>  {card.answer4} </button>
        <br></br>
     
        {toShow()}


        </div>
        {userGuess !== "" ? <button className = "buttons" onClick ={handleButton}>Next Question</button> : null}


</div>
: null}

{trivCorrect.length >2  || task.task2 ===1? <NavLink to="/goblin">
  <br></br>
    <button className = "buttons">Go to Goblin Crossing</button>
    </NavLink> : null } 


</div>

)}


export default TriviaContainer;