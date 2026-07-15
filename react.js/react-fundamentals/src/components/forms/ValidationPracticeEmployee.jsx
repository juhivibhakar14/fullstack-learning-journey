import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    salary: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.employeeName === "") {
      alert("Employee Name is required");
      return;
    }

    if (formData.employeeId === "") {
      alert("Employee ID is required");
      return;
    }

    if (formData.department === "") {
      alert("Department is required");
      return;
    }

    if (formData.salary === "") {
      alert("Salary is required");
      return;
    }

    alert("Employee Registered Successfully!");

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="employeeName"
        placeholder="Enter Employee Name"
        value={formData.employeeName}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="employeeId"
        placeholder="Enter Employee ID"
        value={formData.employeeId}
        onChange={handleChange}
      />

      <br />
      <br />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={formData.department}
          onChange={handleChange}
        />

      <br />
      <br />

      <input
        type="number"
        name="salary"
        placeholder="Enter Salary"
        value={formData.salary}
        onChange={handleChange}
      />

      <br />
      <br />

      <button type="submit">Submit</button>

      <hr />

      <h3>Employee Details</h3>

      <p>Employee Name: {formData.employeeName}</p>
      <p>Employee ID: {formData.employeeId}</p>
      <p>Department: {formData.department}</p>
      <p>Salary: {formData.salary}</p>
    </form>
  );
}

export default EmployeeForm;