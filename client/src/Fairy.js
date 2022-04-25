import React, { useState, useEffect } from "react";
import fairy from "./fairy.png";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import leprechaun from "./leprechaun.wav";

function Fairy() {
  const [mimiTalk, setMimiTalk] = useState(0);
  const [user, setUser] = useState(null);
  const [task, setTask] = useState("");
  const [play] = useSound(leprechaun);

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

  function Play() {
    setMimiTalk((mimiTalk) => (mimiTalk += 1));
    play();
  }

  function textToShow() {
    if (mimiTalk === 0 && task.task1 === 0) {
      return (
        <div className="riddle-correct">
          {" "}
          Welcome to Fairyland, we are so glad you are here. I am Mimi. I would
          love to be a better host and offer you tea and crumpets. But we
          urgently need your help!
          <br></br>
          <br></br>
          <button className="buttons" onClick={handleHearMore}>
            Click to hear more
          </button>
        </div>
      );
    } else if (mimiTalk === 1 && task.task1 === 0) {
      return (
        <div className="riddle-correct">
          {" "}
          An evil warlock has taken over our kingdom, he has put goblins and
          witches in place to try to stop you from reaching him. This is King
          Chicken. He will go with you on your journey, as the warlock is living
          in his castle atop the purple snow mountains. You will first need to
          go to Leprechaun landing to get a map, then make it to the castle to
          defeat the warlock. You are our only hope{" "}
          {user ? <>, {user.username}</> : null}!
        </div>
      );
    }
  }

  function handleHearMore() {
    setMimiTalk((mimiTalk) => (mimiTalk += 1));
  }

  if (mimiTalk === 1) {
    fetch(`/tasks/${user.task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task1: 1,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h3>Welcome to FairyLand {user ? <>, {user.username}</> : null}!</h3>
      {mimiTalk === 2 ? null : (
        <img
          className="borderpretty"
          src={fairy}
          className="size"
          alt="image"
        ></img>
      )}
      {textToShow()}
      {mimiTalk === 1 ? (
        <div className="the-button">
          <NavLink to="/leprechaun">
            <button className="buttons" onClick={Play}>
              Go to Leprechaun Landing
            </button>
          </NavLink>{" "}
        </div>
      ) : null}
      {task.task1 === 1 ? (
        <div className="the-button">
          <NavLink to="/leprechaun">
            <button className="buttons" onClick={Play}>
              Go to Leprechaun Landing
            </button>
          </NavLink>{" "}
        </div>
      ) : null}
    </div>
  );
}

export default Fairy;
