import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";




function WordContainer({words, letters}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongtLetters] = useState([])
    const [finalCorrect, setFinalCorrect] = useState([])
    const [finalWrong, setFinalWrong] = useState([])





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

            let guess = `${userGuess}`.toUpperCase()
            let formArray = []
            formArray.push(`${userGuess}`)

            let guessLetterArray =[]
             guessLetterArray = guess.split("")
            console.log("guessletterarray", guessLetterArray)

            console.log("formarray", formArray)
         


            let lettersArr= [] 
            lettersArr = cardLetters.map(letter=>
        letter.letter)



       
      if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
        console.log("correctletters", correctLetters)
        guessLetterArray.shift()}
    else {wrongLetters.push(guessLetterArray[0])
        console.log("wrongletters", wrongLetters)
        guessLetterArray.shift()}
        if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
            console.log("correctletters", correctLetters)
            guessLetterArray.shift()}
        else {wrongLetters.push(guessLetterArray[0])
            console.log("wrongletters", wrongLetters)
            guessLetterArray.shift()}
            if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
                console.log("correctletters", correctLetters)
                guessLetterArray.shift()}
            else {wrongLetters.push(guessLetterArray[0])
                console.log("wrongletters", wrongLetters)
                guessLetterArray.shift()}
                if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
                    console.log("correctletters", correctLetters)
                    guessLetterArray.shift()}
                else {wrongLetters.push(guessLetterArray[0])
                    console.log("wrongletters", wrongLetters)
                    guessLetterArray.shift()}
                    if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
                        console.log("correctletters", correctLetters)
                        guessLetterArray.shift()}
                    else {wrongLetters.push(guessLetterArray[0])
                        console.log("wrongletters", wrongLetters)
                        guessLetterArray.shift()}
                        if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[2])){ correctLetters.push(guessLetterArray[0])
                            console.log("correctletters", correctLetters)
                            guessLetterArray.shift()}
                        else {wrongLetters.push(guessLetterArray[3])
                            console.log("wrongletters", wrongLetters)
                            guessLetterArray.shift()}
                            if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[4])){ correctLetters.push(guessLetterArray[0])
                                console.log("correctletters", correctLetters)
                                guessLetterArray.shift()}
                            else {wrongLetters.push(guessLetterArray[5])
                                console.log("wrongletters", wrongLetters)
                                guessLetterArray.shift()}
                                if (guessLetterArray.length !== 0 && lettersArr.includes(guessLetterArray[0])){ correctLetters.push(guessLetterArray[0])
                                    console.log("correctletters", correctLetters)
                                    guessLetterArray.shift()}
                                else {wrongLetters.push(guessLetterArray[0])
                                    console.log("wrongletters", wrongLetters)
                                    guessLetterArray.shift()}


                                   let filteredWrong = []
                                  filteredWrong = wrongLetters.filter((x) => x !== undefined)
                                   console.log(filteredWrong)
                                   let filteredWrongMore = []
                                   filteredWrongMore = [...new Set(filteredWrong)]
                                   console.log(filteredWrongMore)


                                   let filteredCorrect = []
                                   filteredCorrect = [...new Set (correctLetters)]
                                   console.log("filteredcorrect", filteredCorrect)
                                       
                                let correctShow = []
                                correctShow = correctLetters.map((letter)=>(<li>letter)</li>))
                                console.log(correctShow)


                                if (filteredCorrect && filteredCorrect.length !==0) { const displayCorrect = filteredCorrect.map((correct) => (
                                    <li>{correct}</li>))}
                                
                                
                                setFinalCorrect((finalCorrect)=>[...filteredCorrect])
                                setFinalWrong((finalWrong)=>[...filteredWrongMore])
                                console.log("finalwrong", finalWrong)
                                console.log("finalcorrect", finalCorrect)

                                let index = []
                            
                                
                               index= cardLetters.filter(f=>finalCorrect.includes(f.letter))

                           
                               console.log("index", index)
                        
                                         
                            


                                }
                    
                
           
          

     



    return (

        <div>



       <div className = "catTile" className = "hidden">
       {lettersToShow} 
       </div>

       <div>
       <form onSubmit={handleSubmit}>
            <input type="text"
            className="textpost"
             placeholder="Guess letter" onChange={handleGuess} value={userGuess} />
            <button className="button" type="submit">Submit</button> </form>
            </div>
            <div>
                Correct Letters Guessed
           {finalCorrect.map((c)=>(<li> {c} </li>))}

           Incorrect Letters Guessed
           {finalWrong.map((c)=>(<li> {c} </li>))}
  
        </div>
        </div>
    )}

    export default WordContainer;