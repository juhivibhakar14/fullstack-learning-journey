import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(0);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (  
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;