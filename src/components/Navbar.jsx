import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbarText}>
        <Link to="/" className={styles.navbarText}>
          Personal Finance
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
