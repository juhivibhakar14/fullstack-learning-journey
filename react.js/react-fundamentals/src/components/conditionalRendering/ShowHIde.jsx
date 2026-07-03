import { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={handleClick}>
        {show ? "Hide Password" : "Show Password"}
      </button>
    </>
  );
}

export default ShowHide;