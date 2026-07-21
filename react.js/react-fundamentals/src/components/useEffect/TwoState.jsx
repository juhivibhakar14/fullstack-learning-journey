import { useState, useEffect } from "react";

function TwoState() {
  const [theme, setTheme] = useState(false); // false = Light, true = Dark
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [theme]);

  function handleTheme() {
    setTheme(!theme);
  }

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div
      style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>{theme ? "🌙 Dark Mode" : "🌞 Light Mode"}</h2>

      <h1>Count: {count}</h1>

      <button onClick={handleCount}>
        Increment
      </button>

      <br />
      <br />

      <button onClick={handleTheme}>
        {theme ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}

export default TwoState;