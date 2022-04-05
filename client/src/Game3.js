import React, { useState, useEffect } from 'react'
import WordContainer from  './WordContainer.js';


function Game3() {
    const [user, setUser] =useState("")
    const [words, setWords] =useState([])



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
    .then((data) => setWords(data.words))
    console.log("words", words)
}, 
    [user])

    return(
        <>
        <div>
       hi
         </div> 
        </>
        
        )}
        
        
        export default Game3;
        