import { useState } from "react";

function ResultApp() {
  const [marks, setMarks] = useState(20);

  function handleClick() {
    if (marks < 35) {
      setMarks(80);
    } else {
      setMarks(20);
    }
  }

  return (
    <>
      <h2>Student Result</h2>

      <p>Marks: {marks}</p>

      <h3>{marks >= 35 ? "✅ Pass" : "❌ Fail"}</h3>

      <button onClick={handleClick}>
        {marks >= 35 ? "Set Fail Marks" : "Set Pass Marks"}
      </button>
    </>
  );
}

export default ResultApp;