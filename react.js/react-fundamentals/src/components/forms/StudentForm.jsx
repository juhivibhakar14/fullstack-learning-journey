import { useState } from "react";

function StudentForm() {
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");

  function handleNameChange(event) {
    setText(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleAreaChange(event) {
    setArea(event.target.value);
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

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={handleAgeChange}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <br />
      <br />

      <textarea
        placeholder="About Yourself"
        value={area}
        onChange={handleAreaChange}
      />

      <hr />

      <h3>Preview</h3>
      <p>Name: {text}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>About: {area}</p>
    </>
  );
}

export default StudentForm;