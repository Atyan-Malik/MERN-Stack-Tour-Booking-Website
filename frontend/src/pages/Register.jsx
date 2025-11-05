import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import "../styles/register.css";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";
import RegisterThank from "./RegisterThank";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Register = () => {
  const [credential, setcredential] = useState({
    username: "undefined",
    email: "undefined",
    password: "undefined",
  });

  const handleChange = (e) => {
    setcredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const { registerUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await registerUser(credential);
    if (res.success) {
      navigate("/RegisterThank");
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
          <h1>Register</h1>

          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            id="email"
            required
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="UserName"
            id="username"
            required
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            id="password"
            required
          />

          <button type="submitt">Create Account</button>

          <p>
            already have an account ?
            <Link to="/login">
              {" "}
              <span className="link">Login</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
