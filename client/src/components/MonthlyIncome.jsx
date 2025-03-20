import style from "../styles/Widget.module.css";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import IncomeGraph from "./incomeGraph";
import PropTypes from "prop-types";

function MonthlyIncome({ monthlyData, setMonthlyData }) {
  const [newIncome, setNewIncome] = useState("");

  const handleIncomeUpdate = (month) => {
    setMonthlyData((prevData) =>
      prevData.map((data) =>
        data.month === month ? { ...data, income: parseFloat(newIncome) } : data
      )
    );
    setNewIncome("");
  };

  return (
    <div className={style.widget}>
      <h2>
        <FaArrowUp
          style={{ color: "green", fontSize: "20px", marginRight: "8px" }}
        />
        Income Overview
      </h2>
      <IncomeGraph data={monthlyData} />
      {monthlyData.map((data) => (
        <div key={data.month}>
          {/* <p>
            {data.month}: ${data.income}
          </p> */}
          {/* <input
            type="number"
            placeholder="Update Income"
            value={newIncome}
            onChange={(e) => setNewIncome(e.target.value)}
          />
          <button onClick={() => handleIncomeUpdate(data.month)}>Update</button> */}
        </div>
      ))}
    </div>
  );
}

MonthlyIncome.propTypes = {
  monthlyData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      income: PropTypes.number.isRequired,
      spending: PropTypes.number.isRequired,
    })
  ).isRequired,
  setMonthlyData: PropTypes.func.isRequired,
};

export default MonthlyIncome;
