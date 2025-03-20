import { useState, useEffect } from "react";
import styles from "../styles/TransactionHistory.module.css";

function TransactionHistory() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const transactionWithId = {
      ...newTransaction,
      id: Date.now(),
      amount: parseFloat(newTransaction.amount),
    };
    setTransactions((prev) => [transactionWithId, ...prev]);
    setNewTransaction({ date: "", description: "", category: "", amount: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
  };

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
    setVisibleCount((prev) => Math.max(prev - 5, 5));
  };

  return (
    <div className={styles.transactionHistory}>
      <h2>Transaction History</h2>

      {/* Add Transaction Form */}
      <form
        onSubmit={handleAddTransaction}
        className={styles.addTransactionForm}
      >
        <h3>Add New Transaction</h3>
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          required
          placeholder="date"
        />
        <input
          type="text"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          required
          placeholder="description"
        />
        <select
          name="category"
          value={newTransaction.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Income">Income</option>
          <option value="Utilities">Utilities</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input
          type="number"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          required
          placeholder="Amount (e.g., -50 or 200)"
        />
        <button type="submit" className={styles.addTransactionButton}>
          Add Transaction
        </button>
      </form>

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
              <td className={styles.deleteField}>
                <button
                  onClick={() => handleDeleteTransaction(t.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
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
