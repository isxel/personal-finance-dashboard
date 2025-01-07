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
      <Link to="/dashboard" className={styles.navbarText}>
        Sign Up Now
      </Link>
    </header>
  );
}

export default Navbar;
