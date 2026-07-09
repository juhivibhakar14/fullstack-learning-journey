import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  function handleNameChange(event) {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  }

  function handleAgeChange(event) {
    setFormData({
      ...formData,
      age: event.target.value,
    });
  }

  function handleEmailChange(event) {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleNameChange}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleAgeChange}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleEmailChange}
      />

      <hr />

      <h3>Preview</h3>

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Email: {formData.email}</p>
    </>
  );
}

export default StudentForm;