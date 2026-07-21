import { useState, useEffect } from "react";

function AutoSaveNotes() {
  const [text, setText] = useState("");

  // Save whenever text changes
  useEffect(() => {
    localStorage.setItem("notes", text);
  }, [text]);

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Auto Save Notes</h1>

      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        cols="30"
      />

      <p>Typing is automatically saved.</p>
    </div>
  );
}

export default AutoSaveNotes;