import EmployeeCard from "./EmployeeCard";
import "./employeeList.css";

export default function EmployeeList({ employees }) {
  return (
    <div>
      <h1>Here is our employee list</h1>
      <div className="Emp-card">
        {employees.map((emp) => (
          <EmployeeCard
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
