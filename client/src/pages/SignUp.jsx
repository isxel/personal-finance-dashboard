import { useState } from "react";
import sharedStyles from "../styles/AuthForms.module.css";
import loginStyles from "../styles/Signup.module.css";
import { HiUserCircle } from "react-icons/hi2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/Users", { email, username, password })
      .then((result) => {
        console.log(result);
        setMessage("Signup successful! You can now log in.");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("An error occured during signup. Please try again.");
      });
  };

  return (
    <div className={sharedStyles.authPage}>
      <div className={sharedStyles.formContainer}>
        <HiUserCircle className={sharedStyles.icon} />
        <h1 className={loginStyles.welcomeMessage}>Welcome!</h1>
        {message && (
          <div className={sharedStyles.successMessage}>{message}</div>
        )}
        {/* Show success/error message */}
        <form onSubmit={handleSubmit}>
          <input
            className={sharedStyles.formField}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={sharedStyles.formField}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <input
            className={sharedStyles.formField}
            type="email"
            placeholder="Confirm Email"
          /> */}
          <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Confirm Password"
          /> */}
          <button className={sharedStyles.formButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
