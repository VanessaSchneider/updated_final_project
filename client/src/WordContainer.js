import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";



function WordContainer({words, letters, updateLetter, setFinalCorrect, finalCorrect}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongtLetters] = useState([])
    const [finalWrong, setFinalWrong] = useState([])
    const [numberShow, setNumberShow] = useState([])


    letters.sort((a, b) => parseFloat(a.id)-parseFloat(b.id))


let card = []
if (words && words.length!==0){
    card = words[0]}
    console.log(card.letters)
  let cardLetters = []
  if (words && words.length !==0){
      cardLetters = card.letters
      cardLetters.sort((a, b) => parseFloat(a.id)-parseFloat(b.id))
  }

    let lettersToShow = cardLetters.map(letter=> <div> 
        
        {letter.letter} 
    </div>)


let blanksToShow = cardLetters.map(letter=> <div className = "catTile" key = {letter.id}>
{letter.letter2}
  </div>)



    function handleGuess(event) {
        setUserGuess(event.target.value);
      }
      




    async function handleSubmit(e) {
        e.preventDefault();

            let guess = userGuess.toUpperCase()
            let formArray = []
            formArray.push(userGuess)

            let guessLetterArray =[]
             guessLetterArray = guess.split("")
            console.log("guessletterarray", guessLetterArray)

            console.log("formarray", formArray)
         


            let lettersArr= [] 
            lettersArr = cardLetters.map(letter=>
        letter.letter)



       
      if (guess && lettersArr.includes(guess)){ correctLetters.push(guess)
        console.log("correctletters", correctLetters)}
    else {wrongLetters.push(guess)
        console.log("wrongletters", wrongLetters)
       }
   

                    


                                   let filteredCorrect = []
                                   filteredCorrect = [...new Set (correctLetters)]
                                   console.log("filteredcorrect", filteredCorrect)
                                       
                                
                                
                                setFinalCorrect((finalCorrect)=>[...filteredCorrect])
                                setFinalWrong((finalWrong)=>[...wrongLetters])
      

                               
                                
                               let index= await cardLetters.filter(f=>finalCorrect.includes(f.letter))

                           
                               console.log("index", index)





                    
                                
                                        fetch(`/words/${card.id}`, {
                                          method: "PATCH",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            letters :index
                                          }),
                                        })
                                        .then((r) => r.json())
                                        .then((updatedItem) => updateLetter(updatedItem));

                                        console.log(index)
                                         }
                                


                                   
                                
                    
                
           
          

     



    return (

        <div>



       <div className = "catTile"
       
       className = {(lettersToShow.filter(f=>numberShow.includes(f)))? "" : "hidden"}
       >

       {blanksToShow} 
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


          <button>Go to Warlock's Castle</button>
  
        </div>
        </div>
    )}

    export default WordContainer;