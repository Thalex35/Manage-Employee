import { useState } from "react";
import "./employeeForm.css";

export default function EmployeeForm({ addEmployee }) {
  const [form_data, setFormData] = useState({
    name: "",
    position: "",
    department: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...form_data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form_data.name || !form_data.position || !form_data.department) {
    alert("Champs vide!");
    return;
  }


    const newEmployee = {
      ...form_data,
      id: Date.now(),
      status: "Actif",
    };

    addEmployee(newEmployee);

    setFormData({
      name: "",
      position: "",
      department: "",
    });
  };

  return (
    <>
    <h2>Employee Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="InputLabel">
          <label htmlFor="nom">NOM COMPLET</label>
          <input
            id="nom"
            type="text"
            name="name"
            placeholder="John Doe..."
            value={form_data.name}
            onChange={handleChange}
          />
        </div>
        <div className="InputLabel">
          <label htmlFor="poste">POSITION</label>
          <input
            id="poste"
            type="text"
            name="position"
            placeholder="HR Manager..."
            value={form_data.position}
            onChange={handleChange}
          />
        </div>
        <div className="InputLabel">
          <label htmlFor="department">DEPARTMENT</label>
          <input
            id="department"
            type="text"
            name="department"
            placeholder="Human Ressources"
            value={form_data.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">+ Ajouter l'employé</button>
        </div>
      </div>
    </form>
    </>
  );
}
