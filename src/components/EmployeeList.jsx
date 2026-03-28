import EmployeeCard from "./EmployeeCard";
import "./employeeList.css";

export default function EmployeeList({ employees }) {
  return (
    <div className="team-section">
      <h1>Équipe de travail</h1>
      <div className="Emp-card">
        {employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            position={emp.position}
            department={emp.department}
            status={emp.status}
          />
        ))}
      </div>
    </div>
  );
}
