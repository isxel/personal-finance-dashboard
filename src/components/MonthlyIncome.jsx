import style from "../styles/Widget.module.css";
import { monthlyData } from "../data/mockData";
import { FaArrowUp } from "react-icons/fa";
import IncomeGraph from "./incomeGraph";

function MonthlyIncome() {
  const latestMonth = monthlyData[monthlyData.length - 1];

  return (
    <div className={style.widget}>
      <h2>
        <FaArrowUp
          style={{ color: "green", fontSize: "20px", marginRight: "8px" }}
        ></FaArrowUp>
        Income for {latestMonth.month}
      </h2>
      <p>${latestMonth.income}</p>
      <IncomeGraph />
    </div>
  );
}

export default MonthlyIncome;
