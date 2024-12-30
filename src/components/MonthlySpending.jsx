import style from "../styles/Widget.module.css";

function MonthlySpending() {
  return (
    <div className={style.widget}>
      <h2>Monthly Spending</h2>
      <p>$3,200</p>
    </div>
  );
}

export default MonthlySpending;
