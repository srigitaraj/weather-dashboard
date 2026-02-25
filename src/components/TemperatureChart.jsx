import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TemperatureChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <LineChart width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="high" stroke="#ef4444" />
      <Line type="monotone" dataKey="median" stroke="#3b82f6" />
      <Line type="monotone" dataKey="min" stroke="#10b981" />
    </LineChart>
  );
};

export default TemperatureChart;