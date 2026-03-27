import "./App.css";
import { Data } from "./Data/EmployeeData";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
function App() {
  const [employees, setEmployees] = useState(Data);

  const addEmployee = (emp) => {
    setEmployees((prev) => [...prev, emp]);
  };
  return (
    <div className="page">
      <div className="emp">
        <EmployeeList employees={employees} />
      </div>
      <div className="form">
        <div className="sidebar">
          <h1>Team Hub</h1>
          <p>Gestion des employés</p>
          <EmployeeForm addEmployee={addEmployee} />
        </div>
      </div>
    </div>
  );
}

export default App;
