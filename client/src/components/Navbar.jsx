import styles from "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import sprout from "../assets/img/sprout.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbarText}>
        <Link to="/" className={styles.navbarText}>
          <img src={sprout} className={styles.logo} alt="Sprout Logo" />
        </Link>
      </nav>

      <div className={styles.authLinks}>
        {user ? (
          // If the user is logged in, show Logout button
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          // If no user is logged in, show Login and Sign Up links
          <>
            <Link to="/login" className={styles.navbarText}>
              Login
            </Link>
            <Link to="/signup" className={styles.signupText}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
