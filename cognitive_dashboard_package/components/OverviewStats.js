export default function OverviewStats({ students }) {
  if (!students.length) return null;
  const avgScore = (students.reduce((a,b)=>a+b.assessment_score,0)/students.length).toFixed(1);
  const avgComp = (students.reduce((a,b)=>a+b.comprehension,0)/students.length).toFixed(1);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-blue-100 rounded-xl shadow">Average Score: {avgScore}</div>
      <div className="p-4 bg-green-100 rounded-xl shadow">Avg Comprehension: {avgComp}</div>
    </div>
  );
}