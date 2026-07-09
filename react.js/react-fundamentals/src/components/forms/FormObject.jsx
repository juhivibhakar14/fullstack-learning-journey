import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "Juhi",
    age: 21,
    city: "Ahmedabad",
  });

  function handleNameChange() {
    setFormData({
      ...formData,
      name: "Mili",
    });
  }

  function handleAgeChange() {
    setFormData({
      ...formData,
      age: 23,
    });
  }

  function handleCityChange() {
    setFormData({
      ...formData,
      city: "Surat",
    });
  }

  return (
    <>
      <button onClick={handleNameChange}>Change Name</button>

      <br />
      <br />

      <button onClick={handleAgeChange}>Change Age</button>

      <br />
      <br />

      <button onClick={handleCityChange}>Change City</button>

      <hr />

      <h2>Student Details</h2>

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>City: {formData.city}</p>
    </>
  );
}

export default StudentForm;