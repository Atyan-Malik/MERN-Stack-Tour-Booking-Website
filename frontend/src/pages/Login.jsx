import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import LoginThank from "./LoginThank";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [credential, setcredential] = useState({
    email: "undefined",
    password: "undefined",
  });

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setcredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const res = await loginUser(credential);
    if (res.success) {
      navigate("/");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-img">
        <img src="./tour-images/login.png" alt="" />
      </div>

      <div className="login-form">
        <div className="form-img">
          <img src="./tour-images/user.png" alt="" />
        </div>

        <form onSubmit={handleClick}>
          <h1>Login</h1>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Enter Your Email"
            id="email"
            required
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            id="password"
            required
          />

          <button type="submitt">Login</button>

          <p>
            don't have an account ?
            <Link to="/register">
              {" "}
              <span className="link">create</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
