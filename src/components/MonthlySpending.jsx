import style from "../styles/Widget.module.css";
// import { monthlyData } from "../data/mockData";
import { FaArrowDown } from "react-icons/fa";
import SpendingGraph from "./SpendingGraph";
import { monthlyData } from "../data/mockData";

function MonthlySpending() {
  // const latestMonth = monthlyData[monthlyData.length - 1];

  return (
    <div className={style.widget}>
      <h2>
        <FaArrowDown
          style={{ color: "red", fontSize: "20px", marginRight: "8px" }}
        >
          {" "}
        </FaArrowDown>
        Spending Overview
      </h2>
      {/* <p>${latestMonth.spending}</p> */}
      <SpendingGraph data={monthlyData} />
    </div>
  );
}

export default MonthlySpending;
