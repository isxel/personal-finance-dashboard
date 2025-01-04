import style from "../styles/Dashboard.module.css";
import MonthlySpending from "../components/MonthlySpending.jsx";
import MonthlyIncome from "../components/MonthlyIncome.jsx";
import MoneySaved from "../components/MoneySaved.jsx";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <h1 className={style.heading}>Welcome Back, User</h1>
      <div className={style.widgets}>
        <MoneySaved />
        <MonthlySpending />
        <MonthlyIncome />
      </div>
    </div>
  );
}

export default Dashboard;
