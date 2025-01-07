import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.contact}>
          <h3>Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: support@personalfinance.com</p>
          <p>Address: 123 Finance Street, Austin, TX 78701</p>
        </div>
        <div className={style.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <h3>Follow Us</h3>
          <p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className={style.copy}>
        <footer>Copyright &copy; Isael 2025</footer>
      </div>
    </div>
  );
}

export default Footer;
