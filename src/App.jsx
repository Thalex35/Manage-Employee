import "./App.css";
import { Data } from "./Data/EmployeeData";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
function App() {
  return (
    <div className="page">
      <div className="emp">
        <EmployeeList employees={Data} />
      </div>
      <div className="form">
        <div className="sidebar">
          <h1>Team Hub</h1>
          <p>Gestion des employés</p>
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
}

export default App;
