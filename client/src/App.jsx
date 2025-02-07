import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Hero from "./components/Hero.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import EditData from "./pages/EditData.jsx";
import { monthlyData as mockData } from "./data/mockData.js";
import { useState, useEffect } from "react";

function App() {
  const [monthlyData, setMonthlyData] = useState(mockData);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Banner />
              <Features />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={<Dashboard monthlyData={monthlyData} />}
        />
        <Route
          path="/edit-data"
          element={
            <EditData
              monthlyData={monthlyData}
              setMonthlyData={setMonthlyData}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
