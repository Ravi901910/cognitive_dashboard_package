import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function BarChartSkill({ students }) {
  if (!students.length) return null;
  const data = ["comprehension","attention","focus","retention"].map(skill => ({
    skill,
    avg: students.reduce((a,b)=>a+b[skill],0)/students.length
  }));
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold mb-2">Avg Skill vs Score</h2>
      <BarChart width={400} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="skill" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="avg" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}