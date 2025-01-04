// src/components/IncomeGraph.jsx
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlyData } from "../data/mockData"; // Ensure the correct data is imported

function SpendingGraph() {
  return (
    <div style={{ width: "100%", height: "200px", marginTop: "20px" }}>
      <ResponsiveContainer>
        <LineChart
          data={monthlyData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="spending"
            stroke="#4caf50"
            strokeWidth={2}
          />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingGraph;
