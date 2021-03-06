import { useState } from "react";
import eye from "./eye.png";

function Login({ onLogin }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((user) => (user.username ? onLogin(user) : alert(user.error)));
    setUserName("");
    setPassword("");
  }

  const loginBox = (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="login-signup"></div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
            ></input>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              ></input>
            </div>
            <input type="submit" className="btn btn-outline-light"></input>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="login-container">
      <button
        type="button"
        className="login-signup"
        onClick={() => setLogin(!login)}
      >
        Login
      </button>
      {login ? loginBox : null}
    </div>
  );
}

export default Login;
