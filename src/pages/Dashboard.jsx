import style from "../styles/Dashboard.module.css";
import MonthlySpending from "../components/MonthlySpending.jsx";
import MonthlyIncome from "../components/MonthlyIncome.jsx";

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <h1 className={style.heading}>Welcome Back, User</h1>
      <div className={style.widgets}>
        <MonthlySpending />
        <MonthlyIncome />
        {/* Add more widgets as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
