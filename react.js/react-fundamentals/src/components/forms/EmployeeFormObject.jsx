import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
  });

  function handleEmployeeNameChange(event) {
    setFormData({
      ...formData,
      employeeName: event.target.value,
    });
  }

  function handleEmployeeIdChange(event) {
    setFormData({
      ...formData,
      employeeId: event.target.value,
    });
  }

  function handleDepartmentChange(event) {
    setFormData({
      ...formData,
      department: event.target.value,
    });
  }

  return (
    <>
      <input
        type="text"
        name="employeeName"
        placeholder="Enter Employee Name"
        value={formData.employeeName}
        onChange={handleEmployeeNameChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="employeeId"
        placeholder="Enter Employee ID"
        value={formData.employeeId}
        onChange={handleEmployeeIdChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="department"
        placeholder="Enter Department"
        value={formData.department}
        onChange={handleDepartmentChange}
      />

      <hr />

      <h3>Employee Details</h3>

      <p>Employee Name: {formData.employeeName}</p>
      <p>Employee ID: {formData.employeeId}</p>
      <p>Department: {formData.department}</p>
    </>
  );
}

export default EmployeeForm;