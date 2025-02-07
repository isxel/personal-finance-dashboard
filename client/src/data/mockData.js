// src/data/mockData.js

export const defaultMonthlyData = [
  {
    month: "Jan",
    income: 400,
    spending: 200,
  },
  {
    month: "Feb",
    income: 350,
    spending: 250,
  },
  {
    month: "Mar",
    income: 450,
    spending: 150,
  },
  {
    month: "Apr",
    income: 500,
    spending: 300,
  },
  {
    month: "May",
    income: 480,
    spending: 280,
  },
  {
    month: "Jun",
    income: 550,
    spending: 200,
  },
  {
    month: "Jul",
    income: 450,
    spending: 350,
  },
  {
    month: "Aug",
    income: 500,
    spending: 300,
  },
  {
    month: "Sep",
    income: 450,
    spending: 350,
  },
  {
    month: "Oct",
    income: 400,
    spending: 400,
  },
  {
    month: "Nov",
    income: 500,
    spending: 450,
  },
  {
    month: "Dec",
    income: 550,
    spending: 400,
  },
];

export const defaultTransactions = [
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
];

// Utility functions for localStorage
export const loadFromLocalStorage = (key, defaultData) => {
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : defaultData;
};

export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Load data from localStorage or use default mock data
export const monthlyData = loadFromLocalStorage(
  "monthlyData",
  defaultMonthlyData
);
export const transactions = loadFromLocalStorage(
  "transactions",
  defaultTransactions
);

// Save initial data to localStorage (only for demo purposes)
saveToLocalStorage("monthlyData", monthlyData);
saveToLocalStorage("transactions", transactions);
