import { useState } from "react";

function UserProfile() {
  const [text, setText] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setText(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={text}
        onChange={handleNameChange}
      />

      <br />
      <br />

      <label>
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={handleGenderChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={handleGenderChange}
        />
        Female
      </label>

      <br />
      <br />

      <select value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
      </select>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Accept Terms and Conditions
      </label>

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <>
          <hr />

          <h3>Preview</h3>

          <p>Name: {text}</p>
          <p>Gender: {gender}</p>
          <p>Country: {country}</p>
          <p>Accepted Terms: {isChecked ? "Yes" : "No"}</p>
        </>
      )}
    </>
  );
}

export default UserProfile;