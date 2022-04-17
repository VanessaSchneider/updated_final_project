import React, { useState, useEffect } from 'react'
import fairy from "./fairy.png"
import { NavLink } from "react-router-dom";


function Fairy() {
    // const [correctAnswers, setCorrectAnswers] = useState(0)
    const [mimiTalk, setMimiTalk] = useState(0)
    const [user, setUser] = useState(null)

    

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data));

          }
        });
      }, []);


     
  

    function textToShow(){
        if (mimiTalk === 0){return <div> Welcome to Fairyland, we are so glad you are here. I am Mimi. I would love to be a better host and offer you tea and crumpets. But we urgently need your help {user? <>, {user.username}</> : null}!
         <br></br>
         <br></br>
          <button className = "buttons" onClick={handleHearMore}>Click to hear more</button>
        </div>}
        else if (mimiTalk ===1){return <div> An evil warlock has taken over our kingdom, he has put goblins and witches in place to try to stop you from reaching him. This is King Chicken. He will go with you, as the warlock is living in his castle atop the purple snow mountains. You will fist need to go to Leprechaun landing to get a map, then make it to the castle to defeat the warlock. You are our only hope {user? <>, {user.username}</> : null}!
        </div>}}

    
        function handleHearMore(){
            setMimiTalk((mimiTalk)=>mimiTalk += 1)
        }


        if (mimiTalk ===1){
            fetch(`/tasks/${user.task.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify( 
                    {
                        "task1": 1
                  }),
              })
                .then((r) => r.json())
                .then((data) => console.log(data))
             

              
      }

        


    

  
return(

<div>
  <h3>Welcome to FairyLand {user? <>, {user.username}</> : null}!</h3>
{mimiTalk === 2 ? null : <img className = "borderpretty" src = {fairy} className = "size" alt = "image"></img>}
    {textToShow()}
    {(mimiTalk ===1) ? 
    <div> 
      <br></br>
    <NavLink to="/leprechaun">
    <button className = "buttons" onClick={handleHearMore}>Go to Leprechaun Landing</button>
    </NavLink> </div> : null}

</div>

)}


export default Fairy;