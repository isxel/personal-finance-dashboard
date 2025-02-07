import sharedStyles from "../styles/AuthForms.module.css";
import loginStyles from "../styles/Login.module.css";
import { HiUserCircle } from "react-icons/hi2";

function Login() {
  return (
    <div className={sharedStyles.authPage}>
      <div className={sharedStyles.formContainer}>
        <HiUserCircle className={sharedStyles.icon} />

        <h1 className={loginStyles.welcomeMessage}>Welcome Back!</h1>
        <form>
          <input
            className={sharedStyles.formField}
            type="email"
            placeholder="Email"
          />
          <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Password"
          />
          <button className={sharedStyles.formButton}>Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
