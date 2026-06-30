import { useState } from "react";

function MarksCalculator() {
  const [marks, setMarks] = useState(0);

  function handleChange(event) {
    setMarks(Number(event.target.value));
  }

  function getGrade() {
    if (marks >= 90) {
      return "A";
    } else if (marks >= 80) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  return (
    <>
      <input
        type="number"
        value={marks}
        onChange={handleChange}
      />

      <p>Marks: {marks}</p>
      <p>Grade: {getGrade()}</p>
    </>
  );
}

export default MarksCalculator;