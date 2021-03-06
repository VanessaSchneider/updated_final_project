import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import trumpet from "./trumpet.mp3";

function NavBar({ setTaskCompleted, taskCompleted, user}) {
  const [task, setTask] = useState("");

  const [play] = useSound(trumpet);

  useEffect(() => {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);


  return (
    <div>
        {user ? <NavLink to="/profile" exact>
          <button type="button" className="myprofile">
            My Profile
          </button>
        </NavLink> : null }
      {task.task2 === 1 || taskCompleted === true ? (
        <NavLink to="/map" exact>
          <button type="button" className="sidebuttons">
            Map
          </button>
        </NavLink>
      ) : null}
    </div>
  );
}

export default NavBar;
