import { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Character Counter</h1>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="5"
        cols="30"
      />

      <p>Character Count: {text.length}</p>

      {text.length > 20 && (
        <p style={{ color: "red" }}>
          ⚠️ Too many characters!
        </p>
      )}
    </div>
  );
}

export default CharacterCounter;