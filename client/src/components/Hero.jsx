import style from "../styles/Hero.module.css";
import heroImg from "../assets/img/hero-image-finance.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.leftSide}>
        <h1 className={style.welcomeText}>Master Your Money, </h1>
        <h1 className={style.welcomeText}>Effortlessly</h1>

        <h2 className={style.subText}>
          Track your spending, analyze your income, and stay on top of your
          savings.
        </h2>
        <button className={style.getStartedButton}>
          <Link to="/dashboard" className={style.getStartedButton}>
            Get Started
          </Link>
        </button>
      </div>
      <div className={style.rightSide}>
        <img
          src={heroImg}
          alt="Financial management illustration"
          className={style.heroImage}
        />
      </div>
    </div>
  );
}

export default Hero;
