
import './App.css';
import Login  from './Login.js';
import { useState, useEffect } from 'react';
import Signup from './Signup';
import Logout from './Logout.js';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import fairy from "./fairy.png"
import Fairy from './Fairy.js';
import Leprechaun from './Leprechaun.js';
// import Game1 from  './Game1.js';
import Witch from './Witch.js';
import Goblin from './Goblin.js';
import Map from './Map.js';
import Warlock from './Warlock.js';
import NavBar from './NavBar.js'
import Home from './Home.js'


function App() {
  const [user, setUser] = useState(null);
  const [textBoxes, setTextBoxes] = useState(0)
  // const history = useHistory();
  const [riddles, setRiddles] = useState([])
  const [task, setTask] = useState("")


  // const handleReroute = () => {
  //   console.log("Reroute!")
  //   history.push("/");
  //   }



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);


 


  function login (username, password){
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((data) => (user.username ? setUser(data) : null))
  }


  function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
        }).then(() => setUser())
      }


      useEffect(() => {
        fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => setTask(data))}, 
    [])


  


  return (
    <div>
       <NavBar user={user}/>
      {user ? null : <Signup onLogin={setUser} login={login} /> }
      <nav className="nav-container">
      {user ? <Logout handleLogout={handleLogout}/> : <Login onLogin={setUser}/> }
       </nav> 
    {user? <h2> Welcome to Kingdom Quest, {user.username}! </h2> :<h2> Welcome to Kingdom Quest!</h2>}
      {/* {task.task1 === 1 ? null : <Fairy /> } */}
      {user ? <Home/> : null}
      
      <Switch>
      <Route exact path="/fairy">
      <Fairy user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/leprechaun">
        <Leprechaun user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/witch">
      <Witch user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/goblin">
      <Goblin user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/map">
      <Map user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/warlock">
      <Warlock/>
      </Route>
      <Route exact path="/">
      <Home user={user} setUser={setUser}/>
      </Route>
      </Switch>

  </div>
  )}

export default App;





