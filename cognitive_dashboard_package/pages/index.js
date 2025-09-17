import { useState, useEffect } from "react";
import OverviewStats from "../components/OverviewStats";
import BarChartSkill from "../components/BarChartSkill";
import ScatterAttention from "../components/ScatterAttention";
import RadarProfile from "../components/RadarProfile";
import StudentTable from "../components/StudentTable";

export default function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/students.csv")
      .then(res => res.text())
      .then(text => {
        const rows = text.split("\n").slice(1);
        const parsed = rows.map(r => {
          const [id,name,cls,comp,att,focus,ret,engage,score,cluster] = r.split(",");
          return {
            student_id: id,
            name,
            class: cls,
            comprehension: +comp,
            attention: +att,
            focus: +focus,
            retention: +ret,
            engagement_time: +engage,
            assessment_score: +score,
            cluster
          };
        });
        setStudents(parsed.filter(s => s.student_id));
      });
  }, []);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Cognitive Skills & Student Performance Dashboard</h1>
      <OverviewStats students={students} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartSkill students={students} />
        <ScatterAttention students={students} />
      </div>
      <RadarProfile students={students} />
      <StudentTable students={students} />
    </div>
  );
}