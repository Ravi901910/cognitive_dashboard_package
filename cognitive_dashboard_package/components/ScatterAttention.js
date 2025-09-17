import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function ScatterAttention({ students }) {
  if (!students.length) return null;
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold mb-2">Attention vs Performance</h2>
      <ScatterChart width={400} height={250}>
        <CartesianGrid />
        <XAxis dataKey="attention" name="Attention" />
        <YAxis dataKey="assessment_score" name="Score" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={students} fill="#8884d8" />
      </ScatterChart>
    </div>
  );
}