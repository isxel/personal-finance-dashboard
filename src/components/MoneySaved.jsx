import style from "../styles/Widget.module.css";
import { monthlyData } from "../data/mockData";
import { FaPiggyBank } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";

function MoneySaved() {
  // Calculate total savings for the latest month
  const latestMonth = monthlyData[monthlyData.length - 1];
  const savings = latestMonth.income - latestMonth.spending;

  // Optionally calculate cumulative savings
  const cumulativeSavings = monthlyData.reduce(
    (total, month) => total + (month.income - month.spending),
    0
  );

  return (
    <div className={style.widget}>
      <h2>
        <FaPiggyBank
          style={{
            color: savings > 0 ? "green" : "red",
            fontSize: "20px",
            marginRight: "8px",
          }}
        />
        Money Saved in {latestMonth.month}
      </h2>
      <p style={{ color: savings > 0 ? "green" : "red" }}>
        ${savings > 0 ? savings : `-${Math.abs(savings)}`} this month
      </p>

      <h2>
        <FaMoneyBill
          style={{
            color: "red",
            fontSize: "20px",
            marginRight: "8px",
          }}
        />
        Money Spent in {latestMonth.month}
      </h2>

      <p style={{ color: "red" }}>${latestMonth.spending} this month</p>

      <p style={{ marginTop: "10px", fontSize: "0.9em", color: "#555" }}>
        Total Savings Year-to-Date: ${cumulativeSavings}
      </p>
    </div>
  );
}

export default MoneySaved;
