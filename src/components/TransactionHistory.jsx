import { useState } from "react";
import styles from "../styles/TransactionHistory.module.css";

const transactions = [
  {
    date: "2025-01-01",
    description: "Groceries",
    category: "Food",
    amount: -50,
  },
  {
    date: "2025-01-03",
    description: "Salary",
    category: "Income",
    amount: 2000,
  },
  {
    date: "2025-01-05",
    description: "Electricity Bill",
    category: "Utilities",
    amount: -100,
  },
  { date: "2025-01-06", description: "Dinner", category: "Food", amount: -30 },
  { date: "2025-01-07", description: "Bonus", category: "Income", amount: 500 },
  {
    date: "2025-01-08",
    description: "Internet Bill",
    category: "Utilities",
    amount: -70,
  },
  { date: "2025-01-09", description: "Coffee", category: "Food", amount: -5 },
  {
    date: "2025-01-10",
    description: "Car Repair",
    category: "Miscellaneous",
    amount: -200,
  },
  {
    date: "2025-01-11",
    description: "Freelance Payment",
    category: "Income",
    amount: 800,
  },
  {
    date: "2025-01-12",
    description: "Shopping",
    category: "Miscellaneous",
    amount: -120,
  },
  {
    date: "2025-01-12",
    description: "Coffee",
    category: "Food",
    amount: -6,
  },
  // Add more dummy transactions as needed
];

function TransactionHistory() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredTransactions = transactions
    .filter(
      (t) =>
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filter ? t.category === filter : true));

  const visibleTransactions = filteredTransactions.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const handleLoadLess = () => {
    setVisibleCount((prev) => Math.max(prev - 5, 5)); // Ensure at least 5 transactions are visible
  };

  return (
    <div className={styles.transactionHistory}>
      <h2>Transaction History</h2>

      {/* Search and Filter */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Income">Income</option>
          <option value="Utilities">Utilities</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>

      {/* Transaction List */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {visibleTransactions.map((t, index) => (
            <tr key={index}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{t.category}</td>
              <td className={t.amount >= 0 ? styles.income : styles.expense}>
                ${Math.abs(t.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Load More and Load Less Buttons */}
      <div className={styles.buttons}>
        {visibleTransactions.length < filteredTransactions.length && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Load More
          </button>
        )}
        {visibleCount > 5 && (
          <button onClick={handleLoadLess} className={styles.loadLessButton}>
            Load Less
          </button>
        )}
      </div>
    </div>
  );
}

export default TransactionHistory;
