import map from "./mappy.png";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import useSound from "use-sound";
import leprechaun from "./leprechaun.wav";
import cackle from "./watch.wav";
import warlock from "./warlock.wav";

function Map() {
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");

  const [play] = useSound(cackle);
  const [play2] = useSound(leprechaun);
  const [play3] = useSound(warlock);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  return (
    <div>
      <h3>The Map</h3>
      <img src={map} className="mapsize" alt="image"></img>
      <div className="places">
        <h3>Places You Can Go:</h3>
        <NavLink to="/fairy">
          <button className="buttons">Fairyland</button>
        </NavLink>
        <NavLink to="/leprechaun">
          <button onClick={(e) => play2()} className="buttons">
            Leprechaun Landing
          </button>
        </NavLink>
        {task.task2 === 1 ? (
          <NavLink to="/witch">
            <button onClick={(e) => play()} className="buttons">
              Witch's Woods
            </button>
          </NavLink>
        ) : null}
        {task.task3 === 1 ? (
          <NavLink to="/goblin">
            <button className="buttons">Goblin Crossing</button>
          </NavLink>
        ) : null}
        {task.task4 === 1 ? (
          <NavLink to="/warlock">
            <button onClick={(e) => play3()} className="buttons">
              Warlock's Castle
            </button>
          </NavLink>
        ) : null}
      </div>
    </div>
  );
}

export default Map;
