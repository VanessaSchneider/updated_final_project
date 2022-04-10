import React, { useState, useEffect } from 'react'
import leprechaun from "./leprechaun.png"
import { NavLink } from "react-router-dom";
import WordContainer from  './WordContainer.js';


function Game3() {
    const [words, setWords] = useState([])
    const [user, setUser] = useState("")
    const [letters, setLetters] = useState([])
    const [wrong, setWrong] = useState([])
    const [finalCorrect, setFinalCorrect] = useState([])
    

    

    

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


useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data))
      }
    });
  }, [finalCorrect]);




  useEffect(() => {
    fetch("/getWords")
.then((res) => res.json())
.then((data) => setWords(data))}, 
[finalCorrect])








function updateLetter(updatedItem) {
    const updatedItems = letters.map((letter) => {
      if (letter.id === updatedItem.id) {
        return updatedItem;
      } else {
        return letter;
      }
    });
    setLetters(updatedItems);
    console.log("updateditems", updatedItems)
  }
                   

return(

<div>
<WordContainer  words={words} letters={letters} updateLetter={updateLetter} finalCorrect={finalCorrect} setFinalCorrect={setFinalCorrect} />)
</div>


)}


export default Game3;

