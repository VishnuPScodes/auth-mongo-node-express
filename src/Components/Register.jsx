import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    console.log(name, password);
    const obj = {
      email: name,
      password: password
    };
    axios
      .post("http://localhost:5000/reg", obj)
      .then((res) => {
        alert("Registration completed");
      })
      .then(() => {
        navigate("/Login");
      });
  };
  return (
    <div>
      <div className="login">
        <div className="welcome">Welcome to Registration page</div>
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
            type="email"
            className="userName"
            placeholder="Your eamil id"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <button className="submit" onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
