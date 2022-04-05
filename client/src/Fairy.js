import React, { useState, useEffect } from 'react'
import fairy from "./fairy.png"
import { NavLink } from "react-router-dom";


function Fairy(textBoxes, setTextBoxes, user, setUser) {
    // const [correctAnswers, setCorrectAnswers] = useState(0)
    const [mimiTalk, setMimiTalk] = useState(0)




  

    function textToShow(){
        if (mimiTalk === 0){return <div> Welcome to Fairyland, we are so glad you are here. I am Mimi. I would love to be a better host and offer you tea and crumpets. But we urgently need your help!
          <button onClick={handleHearMore}>Click to hear more</button>
        </div>}
        else if (mimiTalk ===1){return <div> An evil warlock has taken over all the kingdoms, he has put in place goblins, witches, and ghosts to try to stop you from reaching him. This is King Chicken. He will go with you on your journey, as the warlock is living in his castle atop the purple snow mountains. The only problem is a witch put a spell on him and he can only cockadoodle doo. Perhaps, if you find her, you could get her spell book and make him able to talk again. You will fist need to go to Leprechaun landing to get a map of the kingdoms and go on your way to defeat the warlock. You must stay on the path because there is dangerous quicksand outside of the confines of the path. Best of luck you are our only hope!
        </div>}}

    
        function handleHearMore(){
            setMimiTalk((mimiTalk)=>mimiTalk += 1)

        }
    

  
return(

<div>
{mimiTalk === 2 ? null :<img className = "borderpretty" src = {fairy} className = "size" alt = "image"></img>}
    {textToShow()}
    {(mimiTalk ===1) ? 
    <NavLink to="/leprechaun">
    <button onClick={handleHearMore}>Go to Leprechaun Landing</button>
    </NavLink> : null}

</div>

)}


export default Fairy;