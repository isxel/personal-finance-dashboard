import sharedStyles from "../styles/AuthForms.module.css";
import loginStyles from "../styles/Signup.module.css";
import { HiUserCircle } from "react-icons/hi2";

function Signup() {
  return (
    <div className={sharedStyles.authPage}>
      <div className={sharedStyles.formContainer}>
        <HiUserCircle className={sharedStyles.icon} />

        <h1 className={loginStyles.welcomeMessage}>Welcome!</h1>
        <form>
          <input
            className={sharedStyles.formField}
            type="email"
            placeholder="Email"
          />
          <input
            className={sharedStyles.formField}
            type="email"
            placeholder="Confirm Email"
          />
          <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Password"
          />
          <input
            className={sharedStyles.formField}
            type="password"
            placeholder="Confirm Password"
          />
          <button className={sharedStyles.formButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
