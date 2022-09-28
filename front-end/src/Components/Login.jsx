import { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    const obj = {
      email: name,
      password: password
    };
    axios.post("http://localhost:5000/login", obj).then((res) => {
      if (res == "Login Succefull") {
        navigate("/UserData");
      } else {
        alert("wrong credentials!");
      }
    });
  };

  return (
    <div>
      <div className="login">
        <div className="welcome">Welcome to login page</div>
        <div>
          <input
            type="password"
            className="password"
            placeholder="Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <input
            className="userName"
            placeholder="Your email id"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <button className="submit" onClick={handleClick}>
            Login
          </button>
        </div>
        <div>
          <h3>Not Registered?</h3>
          <a href="/Register">Register</a>
        </div>
      </div>
    </div>
  );
};
