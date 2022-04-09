import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";




function WordContainer({words, letters}) {
    const [userGuess, setUserGuess] = useState("")




let card = []
if (words && words.length!==0){
    card = words[0]}
    console.log(card.letters)
  let cardLetters = []
  if (words && words.length !==0){
      cardLetters = card.letters
  }

    let lettersToShow = cardLetters.map(letter=> <div> 
        
        {letter.letter} 
    </div>)

    function handleGuess(event) {
        setUserGuess(event.target.value);
      }




    function handleSubmit(e) {
        e.preventDefault();

            let guess = `${userGuess}`
            let formArray = []
            formArray.push(`${userGuess}`)

            let guessLetterArray =[]
             guessLetterArray = guess.split("")
            console.log("guessletterarray", guessLetterArray)

            console.log("formarray", formArray)
         


            let lettersArr= [] 
            lettersArr = cardLetters.map(letter=>
        letter.letter)



        let correctLetters = []
        let wrongLetters = []
           
      if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
        console.log("correctletters", correctLetters)
        guessLetterArray.shift()}
    else {wrongLetters.push(guessLetterArray[0])
        console.log("wrongletters", wrongLetters)
        guessLetterArray.shift()}
    
    
    }
          

     



    return (

        <div>



       <div className = "catTile">
       {lettersToShow} 
       <form onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Guess letter" onChange={handleGuess} value={userGuess} />
            <button className="button" type="submit">Submit</button> </form>
        </div>
        </div>
    )}

    export default WordContainer;