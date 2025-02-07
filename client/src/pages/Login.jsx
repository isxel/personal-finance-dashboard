import { useState } from "react";
import sharedStyles from "../styles/AuthForms.module.css";
import loginStyles from "../styles/Login.module.css";
import { HiUserCircle } from "react-icons/hi2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/login", { username, password })
      .then((result) => {
        console.log(result);
        setMessage("Login Successful.");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Invalid credentials, please try again");
      });
  };
  return (
    <div className={sharedStyles.authPage}>
      <div className={sharedStyles.formContainer}>
        <HiUserCircle className={sharedStyles.icon} />

        <h1 className={loginStyles.welcomeMessage}>Welcome Back!</h1>
        {message && (
          <div className={sharedStyles.successMessage}>{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            className={sharedStyles.formField}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={sharedStyles.formButton}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
