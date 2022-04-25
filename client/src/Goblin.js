import React, { useState, useEffect } from "react";
import goblin from "./goblin.png";
import { NavLink } from "react-router-dom";
import Game3 from "./Game3.js";
import goblinhead from "./goblinhead.png";
import warlock from "./warlock.wav";
import useSound from "use-sound";

function Goblin({ user }) {
  const [playGame, setPlayGame] = useState(false);
  const [gtalks, setGTalks] = useState(0);
  const [task, setTask] = useState("");
  const [play] = useSound(warlock);

  function handlePlayGame() {
    setPlayGame((playGame) => !playGame);
  }

  function increment() {
    setGTalks((wtalks) => (wtalks += 1));
  }

  useEffect(() => {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);

  return (
    <div>
      <h2>
        Welcome to Goblin Crossing! {user ? <>, {user.username}</> : null}!
      </h2>
      {playGame === false ? (
        <img src={goblin} className="size" alt="image"></img>
      ) : (
        <img src={goblinhead} className="watch" alt="image"></img>
      )}
      {playGame === false ? null : <Game3 />}
      {gtalks === 0 && task.task4 === 0 ? (
        <div>
          {" "}
          <h3 className="riddle-correct">
            {" "}
            Stop right there! I don't let anyone cross this bridge.{" "}
          </h3>
          <button className="the-button" onClick={increment}>
            {" "}
            Say, "May, I please cross?"
          </button>{" "}
        </div>
      ) : null}
      {gtalks === 1 && playGame === false ? (
        <h3 className="riddle-correct">
          Okay, I will make you a deal. If you can guess my name. I will let you
          go across
        </h3>
      ) : null}
      {playGame === false && gtalks === 1 ? (
        <button className="the-button" onClick={handlePlayGame}>
          Guess my name game
        </button>
      ) : null}
      {task.task4 === 1 ? (
        <div className="riddle-correct">
          {" "}
          <h4>
            Pringle, great name, right? I still am shocked you guessed it!
          </h4>
          <NavLink to="/warlock">
            <button onClick={(e) => play()} className="buttons">
              Warlock's Castle
            </button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default Goblin;
