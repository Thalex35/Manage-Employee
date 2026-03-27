import "./employeeCard.css";
import { User } from "lucide-react";

export default function EmployeeCard({ name, position, department, status }) {
  return (
    <div className="card">
      <User className="icon" size={30} color="#2ec4a0" strokeWidth={1.9} />
      <h3 className="name">{name}</h3>
      <p className="posi">{position}</p>
      <div className="destas">
        <p className="desta">{department}</p>
        <p className="desta">{status}</p>
      </div>
    </div>
  );
}
