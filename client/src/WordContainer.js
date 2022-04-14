import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";



function WordContainer({words, letters, updateLetter, setFinalCorrect, finalCorrect}) {
    const [userGuess, setUserGuess] = useState("")
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongtLetters] = useState([])
    const [finalWrong, setFinalWrong] = useState([])
    const [index, setIndex] = useState()
  




// let card = []
// if (words && words.length!==0){
//     card = words[0]}
//     console.log(card.letters)
//   let cardLetters = []
//   if (words && words.length !==0){
//       cardLetters = card.letters
      letters.sort((a, b) => parseFloat(a.id)-parseFloat(b.id))
  // }



let blanksToShow = letters.map(letter=> <div className = "catTile" key = {letter.id}>
{letter.letter2}
  </div>)



console.log("blankstoshow", blanksToShow)

    function handleGuess(event) {
        setUserGuess(event.target.value);




      }
      


    async function handleSubmit(e) {
        e.preventDefault();

            let guess = userGuess.toUpperCase()
  


            let lettersArr= [] 
            lettersArr = letters.map(letter=>
        letter.letter)



       
      if (guess && lettersArr.includes(guess)){ correctLetters.push(guess)
        console.log("correctletters", correctLetters)}
    else {wrongLetters.push(guess)
       }
   

                    


                                   let filteredCorrect = [...new Set(correctLetters)];
                                   console.log("filteredcorrect", filteredCorrect)
                                   let filteredWrong = [...new Set(wrongLetters)]
                                       
                                let correctShow = []
                                correctShow = correctLetters.map((letter)=>(<li>letter)</li>))
                                console.log(correctShow)


                                if (filteredCorrect && filteredCorrect.length !==0) { const displayCorrect = filteredCorrect.map((correct) => (
                                    <li>{correct}</li>))}
                                
                                
                                setFinalCorrect((finalCorrect)=>[...filteredCorrect])
                                setFinalWrong((finalWrong)=>[...filteredWrong])
      

                               
                                
                               let index= await letters.filter(f=>finalCorrect.includes(f.letter))

                           
                  
                            let newArray = letters.filter(f=>finalCorrect.includes(f.letter))
                                  newArray.forEach(letter => letter.letter2 = letter.letter )



                                
                                        fetch(`/words/${words.id}`, {
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



       <div>

      

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
                {/* Correct Letters Guessed
           {finalCorrect.map((c)=>(<li> {c} </li>))} */}

           Incorrect Letters Guessed
           {finalWrong.map((c)=>(<li> {c} </li>))}
  
        </div>
        <NavLink to="/warlock">
    <button>Warlock's Castle</button>
    </NavLink>
        </div>
    )}

    export default WordContainer;