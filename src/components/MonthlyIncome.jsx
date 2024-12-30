import style from "../styles/Widget.module.css";

function MonthlyIncome() {
  return (
    <div className={style.widget}>
      <h2>Monthly Income</h2>
      <p>$4,000</p>
    </div>
  );
}

export default MonthlyIncome;
