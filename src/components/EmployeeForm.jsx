import { useState } from "react";

export default function EmployeeForm({ addEmployee }) {

  const [form_data, setFormData] = useState({
    name: "",
    position: "",
    department: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...form_data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      ...form_data,
      id: Date.now(),
      status: "Actif"
    };

    addEmployee(newEmployee);

    setFormData({
      name: "",
      position: "",
      department: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={form_data.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Poste"
        value={form_data.position}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Département"
        value={form_data.department}
        onChange={handleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}