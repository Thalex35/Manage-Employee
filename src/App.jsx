import "./App.css";
import { Data } from "./Data/EmployeeData";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <EmployeeList employees={Data} />
    </>
  );
}

export default App;
