import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";




function WordContainer() {
    const [userGuess, setUserGuess] = useState("")
    const [correctSpot, setCorrectSpot] = useState("")
    const [letterIn, setLetterIn] = useState("")
    const [words, setWords] = useState([])
    const [user, setUser] = useState("")
    const [letters, setLetters] = useState([])
    const [wrong, setWrong] = useState([])
    

    
    

console.log("user", user)
 



useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data))
      }
    });
  }, []);

console.log(user)


  useEffect(() => {
    fetch("/getWords")
.then((res) => res.json())
.then((data) => setWords(data))}, 
[])



useEffect(() => {
    fetch("/getLetters")
.then((res) => res.json())
.then((data) => setLetters(data))}, 
[])

console.log(letters)
console.log(words)




// console.log(words)
// if (words && words.length !==0)
//  {const firstWord = words[0].id 
//  console.log("firstWord", firstWord)
//  console.log("letters", letters)
//  }

// const lettersToUse = letters.filter((l)=>l.word_id === firstWord)}

// console.log("letterstouse", lettersToUse)

//  const letterArray = lettersToUse.map((l)=>l.letter)
//  console.log("letterarray", letterArray)


//     function handleSubmit(e) {
//         e.preventDefault();

//             let guess = `${userGuess}`
//             let formArray = []
//             formArray.push(`${userGuess}`)

//             console.log("formarray", formArray)
//             console.log("letterletter", letter.letter)

//             let wrongAnswers = []
  
        
//             if (letter.letter === formArray[0]){
//                 setCorrectSpot((correctSpot)=>true)}


//           if (letterArray.includes(formArray[0])) 
//             {setLetterIn((letterIn)=>true)
//             console.log(letterIn)}
//                else { setWrong([...wrong, guess])
//                 console.log("guess", guess)
//                console.log("wrong", wrong)}
        


//         else {wrongAnswers.push(formArray[0])}
//         wrongAnswers = wrongAnswers.push(formArray[0]) &&
    
    


            // function handleGuess(event) {
            //     setUserGuess(event.target.value);
            //   }
        
       
  
return(
<div>
<div>
    hi
 {/* <div  className= {correctSpot ? "" : "hidden"}>
 {(words && letter.word_id ===firstWord) ? letter.letter : null}
 </div>


 {(words && letter.word_id ===firstWord) ? <form className = {correctSpot ? "hidden" : "input"} onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Guess letter" onChange={handleGuess} value={userGuess} />
            <button className="button" type="submit">Submit</button> </form> : null} */}
     </div>
</div>    


)}


export default WordContainer;