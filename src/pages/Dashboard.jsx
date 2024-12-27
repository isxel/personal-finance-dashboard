import style from "../styles/Dashboard.module.css";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <h1 className={style.welcomeText}>Master Your Money, </h1>
      <h1 className={style.welcomeText}>Effortlessly</h1>

      <h2 className={style.subText}>
        Track your spending, analyze your income, and stay on top of your
        savings.
      </h2>
      <button className={style.getStartedButton}>Get Started</button>
    </div>
  );
}

export default Dashboard;
