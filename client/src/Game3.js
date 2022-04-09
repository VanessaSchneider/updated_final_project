import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import WordContainer from  './WordContainer.js';


function Game3() {
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
console.log(wrong)





//     let wordCards = []
  
//     if (letters.length !== 0){
//     wordCards= letters.map((letter) => <WordContainer letter={letter} words={words} letters={letters} setWrong={setWrong} wrong={wrong} />)
//   }


                   

return(

<div>
<WordContainer />
</div>


)}


export default Game3;

