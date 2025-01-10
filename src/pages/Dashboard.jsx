import React, { useState, useEffect } from "react";
import style from "../styles/Dashboard.module.css";
import MonthlySpending from "../components/MonthlySpending.jsx";
import MonthlyIncome from "../components/MonthlyIncome.jsx";
import MoneySaved from "../components/MoneySaved.jsx";
import TransactionHistory from "../components/TransactionHistory.jsx";

function Dashboard() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning!");
    } else if (hour < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  }, []);
  return (
    <div className={style.dashboard}>
      <h1 className={style.heading}>{greeting}</h1>
      <div className={style.widgets}>
        <MoneySaved />
        <MonthlySpending />
        <MonthlyIncome />
      </div>
      <div className={style.transactionHistory}>
        <TransactionHistory />
      </div>
    </div>
  );
}

export default Dashboard;
