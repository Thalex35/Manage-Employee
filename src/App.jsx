import "./App.css";
import { useState } from "react";
import { Data } from "./Data/EmployeeData";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState(Data);

  const addEmployee = (emp) => {
    setEmployees((prev) => [...prev, emp]);
  };
  return <>
  <EmployeeList employees={employees} />
  <EmployeeForm addEmployee={addEmployee}/>
  </>;
}

export default App;

