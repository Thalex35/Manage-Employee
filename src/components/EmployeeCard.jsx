import "./employeeCard.css";

export default function EmployeeCard({ name, position, department, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{department}</p>
      <p>{status}</p>
    </div>
  );
}
