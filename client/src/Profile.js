import React, { useState, useEffect } from 'react'
function Profile (){
    const [user, setUser] =useState("")

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((data) => setUser(data))
          }
        });
      }, []);

      

console.log("profuser", user)



    return (


        <div> 
     <h1>{user.username}'s Profile!</h1>
     <img src = {user.picture} className = "profile" alt = "image"></img> 

    </div>
    )
}

export default Profile;