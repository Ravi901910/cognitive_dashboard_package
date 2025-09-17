import { useState } from "react";

export default function StudentTable({ students }) {
  const [query, setQuery] = useState("");
  const filtered = students.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="font-bold mb-2">Students</h2>
      <input 
        className="border p-2 mb-3 w-full"
        placeholder="Search by name"
        value={query}
        onChange={e=>setQuery(e.target.value)}
      />
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th><th>Name</th><th>Class</th><th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s,i)=>(
            <tr key={i} className="border-t">
              <td className="p-1">{s.student_id}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.assessment_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}