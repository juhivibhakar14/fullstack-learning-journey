import { useState } from "react";

function NameChanger() {
  const [name, setName] = useState("John Doe");

  function handleClick() {
    setName("Juhi Vibhakar");
  }

  return (
    <>
      <h1>{name}</h1>

      <button onClick={handleClick}>
        Change Name
      </button>
    </>
  );
}

export default NameChanger;