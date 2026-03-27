import "./App.css";
import { Data } from "./Data/EmployeeData";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <div>
      <EmployeeList employees={Data} />
      <h1>Form</h1>
      <EmployeeForm />
    </div>
  );
}

export default App;
