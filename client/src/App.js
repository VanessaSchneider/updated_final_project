
import './App.css';
import Login  from './Login.js';
import { useState, useEffect } from 'react';
import Signup from './Signup';
import Logout from './Logout.js';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import fairy from "./fairy.png"
import Fairy from './Fairy.js';
import Leprechaun from './Leprechaun.js';
 import Game1 from  './Game1.js';
import Witch from './Witch.js';
import Goblin from './Goblin.js';
import Map from './Map.js';
import Warlock from './Warlock.js';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Welcome from './welcome.png'
import Profile from './Profile.js'


function App() {
  const [user, setUser] = useState(null);
  const [textBoxes, setTextBoxes] = useState(0)
  const history = useHistory();
  const [riddles, setRiddles] = useState([])
  const [tasks, setTask] = useState("")
  const [taskCompleted, setTaskCompleted] = useState(false)



  const handleReroute = () => {
    console.log("Reroute!")
    history.push("/");
    }




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

   handleReroute()
  

  }


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser())
      .then(()=> history.push("/"))
  }


  useEffect(() => {
    fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => setTask(data))
  }, [])


  return (
    <div>
      {user ? <Logout handleLogout={handleLogout}/> : <Login onLogin={setUser}/> }
      {user ? null : <Signup onLogin={setUser} login={login} /> }
       {user? null  :<h1> Welcome to Kingdom Quest!</h1>}
      <NavBar taskCompleted = {taskCompleted} setTaskCompleted={setTaskCompleted} user={user}/>
      {user ? null : <img src = {Welcome} className = "size"></img>}
   
      
      
      <Switch>
      <Route exact path="/fairy">
      <Fairy user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/leprechaun">
        <Leprechaun taskCompleted={taskCompleted} setTaskCompleted={setTaskCompleted} user={user} setUser={setUser}/>
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
      <Warlock user={user}/>
      </Route>
      <Route exact path="/">
      <Home user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/profile">
      <Profile/>
      </Route>
      </Switch>

  </div>
  )}

export default App;





