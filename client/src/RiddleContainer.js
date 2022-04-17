import React, {
  useState,
  useEffect
} from 'react'
import {
  NavLink
} from "react-router-dom";




function RiddleContainer({
  riddle,
  updateRiddle,
  riddles,
  setRiddleTrue,
  riddleTrue,
  user,
  setUser
}) {
  const [userGuess, setUserGuess] = useState("")
  const [showForm, setShowForm] = useState(true)
  const [correctRiddle, setCorrectRiddle] = useState(0)








  function handleSubmit(e) {
    e.preventDefault();



    let formArray = []
    formArray.push(`${userGuess}`)

    console.log("formarray", formArray)

    if (riddle.answer1 === formArray[0] || riddle.answer2 === formArray[0] || riddle.answer3 === formArray[0]) {
      setCorrectRiddle((correctRiddle) => correctRiddle += 1)
    } else {
      console.log("wrong")
    }
    setShowForm((showForm) => !showForm)


    if (riddle.answer1 === formArray[0] || riddle.answer2 === formArray[0] || riddle.answer3 === formArray[0]) {



      fetch(`/riddles/${riddle.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            correct: true,
          }),
        })
        .then((r) => r.json())
        .then((updatedItem) => updateRiddle(updatedItem));
      console.log(riddle)
      console.log(riddles[0])

    }
  }




  function handleGuess(event) {
    setUserGuess(event.target.value);
  }



  console.log(correctRiddle)








  return ( <
    div >
    <
    div className = "lepTile" >
    <
    br >
    <
    /br> <
    br >
    <
    /br> <
    div > {
      riddle.riddle
    } <
    /div> <
    br > < /br> <
    br > < /br> {
      showForm ?
        <
        form className = "form"
      onSubmit = {
          handleSubmit
        } >
        <
        input type = "text"
      className = "textpost"
      placeholder = "Write your guess"
      onChange = {
        handleGuess
      }
      value = {
        userGuess
      }
      /> <
      button className = "buttons"
      type = "submit" > Submit < /button> <
        /form>  :(correctRiddle===1? "correct" : "incorrect") }



        <
        /div> <
        /div>

    )
  }


  export default RiddleContainer;