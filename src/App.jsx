import "./App.css";
import { Data } from "./Data/EmployeeData";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return <>
  <EmployeeList employees={Data} />
  <EmployeeForm />
  </>;
}

export default App;

