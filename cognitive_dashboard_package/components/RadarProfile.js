import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

export default function RadarProfile({ students }) {
  if (!students.length) return null;
  const s = students[0]; // first student for demo
  const data = [
    {skill:"Comprehension", value:s.comprehension},
    {skill:"Attention", value:s.attention},
    {skill:"Focus", value:s.focus},
    {skill:"Retention", value:s.retention}
  ];
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold mb-2">Student Profile (Example)</h2>
      <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis />
        <Radar name="Skills" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}