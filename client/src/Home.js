import map from "./mappy.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import door from "./door.png";
import "./App.css";
import useSound from "use-sound";
import trumpet from "./trumpet.mp3";
import Welcome from "./welcome.png";

function Home() {
  const [user, setUser] = useState("");
  const [click, setClick] = useState(true);
  const [task, setTask] = useState("");
  const [play] = useSound(trumpet);

  useEffect(() => {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  function handleClick() {
    setClick((click) => !click);
    play();
  }

  return (
    <div>
      {user && task.task1 !== 1 && click ? (
        <div>
          <div id="door" className="door">
            <img src={door} className="doorSize" alt="image"></img>
          </div>
          <NavLink to="/fairy">
            <button onClick={handleClick}>
              Go inside the mysterious door!
            </button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
