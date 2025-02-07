import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import sprout from "../assets/img/sprout.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbarText}>
        <Link to="/" className={styles.navbarText}>
          <img src={sprout} className={styles.logo}></img>
        </Link>
      </nav>
      <div className={styles.authLinks}>
        <Link to="/login" className={styles.navbarText}>
          Login
        </Link>
        <Link to="/signup" className={styles.signupText}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
