attempted show up score 

unction WinIncrement() {

    if (userPlay === "rock" && warlockPlay === "scissors"){
           return <p>Warlock Wins:{setWWins(wwins+1)}</p>}
  
  
  else if(userPlay === "scissors" && warlockPlay === "rock"){
     return <p>Warlock Wins:{setWWins(wwins+1)}</p>}
  
  
  
  else if(userPlay === "rock" && warlockPlay === "paper"){
    return <p>Warlock Wins:{setWWins(wwins+1)}</p>}
  
  else if(userPlay === "scissors" && warlockPlay === "paper"){
      return <p>User Wins:{setUWins(uwins+1)}</p>}
    
  
  
  else if(userPlay === "paper" && warlockPlay === "rock"){
    return <p>User Wins:{setUWins(uwins+1)}</p>}
  
    
    
  
  else if(userPlay === "paper" && warlockPlay === "scissors"){
  return <p>User Wins:{setUWins(uwins+1)}</p>}
  
  }
  
 
    
