import { useState } from "react";

function JobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    city: "",
    experience: "",
    about: "",
    acceptTerms: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name === "") {
      alert("Name is required");
      return;
    }

    if (formData.email === "") {
      alert("Email is required");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Invalid Email");
      return;
    }

    if (formData.phoneNumber === "") {
      alert("Phone Number is required");
      return;
    }

    if (formData.age === "") {
      alert("Age is required");
      return;
    }

    if (Number(formData.age) < 18) {
      alert("Age must be 18 or above");
      return;
    }

    if (formData.gender === "") {
      alert("Gender is required");
      return;
    }

    if (formData.city === "") {
      alert("Please select a city");
      return;
    }

    if (formData.experience === "") {
      alert("Experience is required");
      return;
    }

    if (formData.about === "") {
      alert("Please write something about yourself");
      return;
    }

    if (!formData.acceptTerms) {
      alert("Please accept Terms and Conditions");
      return;
    }

    alert("Application Submitted Successfully!");

    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job Application Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />
      <br />

      <select
        name="city"
        value={formData.city}
        onChange={handleChange}
      >
        <option value="">Select City</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Vadodara">Vadodara</option>
        <option value="Surat">Surat</option>
      </select>

      <br />
      <br />

      <input
        type="number"
        name="experience"
        placeholder="Years of Experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <br />
      <br />

      <textarea
        name="about"
        placeholder="Tell us about yourself"
        value={formData.about}
        onChange={handleChange}
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
        Accept Terms and Conditions
      </label>

      <br />
      <br />

      <button type="submit">Submit</button>

      <hr />

      <h3>Preview</h3>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phoneNumber}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>City: {formData.city}</p>
      <p>Experience: {formData.experience}</p>
      <p>About: {formData.about}</p>
      <p>Accepted Terms: {formData.acceptTerms ? "Yes" : "No"}</p>
    </form>
  );
}

export default JobApplication;