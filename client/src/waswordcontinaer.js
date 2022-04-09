import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";




function WordContainer({words, letters}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctSpot, setCorrectSpot] = useState("")
    const [letterIn, setLetterIn] = useState("")
    const [user, setUser] = useState("")
    const [wrong, setWrong] = useState([])
    


console.log(letters)
console.log(words)



if (words && words.length !==0)
 {const firstWord = words[0].id 
 console.log("firstWord", firstWord)
 console.log("letters", letters)
 }

if (letters.length !== 0) {const lettersToUse = letters.filter((l)=>l.word_id === firstWord)}

console.log("letterstouse", lettersToUse)

 const letterArray = lettersToUse.map((l)=>l.letter)
 console.log("letterarray", letterArray)


    function handleSubmit(e) {
        e.preventDefault();

            let guess = `${userGuess}`
            let formArray = []
            formArray.push(`${userGuess}`)

            console.log("formarray", formArray)
            console.log("letterletter", letter.letter)

            let wrongAnswers = []
  
        
            if (letter.letter === formArray[0]){
                setCorrectSpot((correctSpot)=>true)}


          if (letterArray.includes(formArray[0])) 
            {setLetterIn((letterIn)=>true)
            console.log(letterIn)}
             else { setWrong([...wrong, guess])
                console.log("guess", guess)
               console.log("wrong", wrong)}}
        


        // else if {wrongAnswers.push(formArray[0])}
        // wrongAnswers = wrongAnswers.push(formArray[0]) &&
    
    


            function handleGuess(event) {
                setUserGuess(event.target.value);
              }
        
       
  
return(
<div>
{(words.length !==0 && letter.length !==0 && firstWord && correctSpot && userGuess)? 
<div>
  <div  className= {correctSpot ? "" : "hidden"}>
 {(letter.word_id ===firstWord) ? letter.letter : null}
 </div>


 {(letter.word_id ===firstWord) ? <form className = {correctSpot ? "hidden" : "input"} onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Guess letter" onChange={handleGuess} value={userGuess} />
            <button className="button" type="submit">Submit</button> </form> : null} 
     </div>
     : null}



</div>    


)}


export default WordContainer;