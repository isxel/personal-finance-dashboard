import PropTypes from "prop-types";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function IncomeGraph({ data }) {
  return (
    <div style={{ width: "100%", height: "200px", marginTop: "20px" }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="income"
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

IncomeGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      income: PropTypes.number.isRequired,
      spending: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default IncomeGraph;
