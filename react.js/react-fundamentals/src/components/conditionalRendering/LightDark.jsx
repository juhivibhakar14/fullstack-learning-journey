import { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  function handleClick() {
    setDark(!dark);
  }

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>{dark ? "🌙 Dark Mode" : "🌞 Light Mode"}</h2>

      <p>
        {dark
          ? "Dark theme is enabled."
          : "Light theme is enabled."}
      </p>

      <button onClick={handleClick}>
        {dark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default Theme;