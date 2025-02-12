import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import sprout from "../assets/img/sprout.png";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbarText}>
          <Link to="/" className={styles.navbarText}>
            <img src={sprout} className={styles.logo}></img>
          </Link>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
        </nav>
        <div className={styles.authLinks}>
          <Link to="/login" className={styles.navbarText}>
            Login
          </Link>
          <Link to="/signup" className={styles.signupText}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
