import { useRef, useEffect } from "react";

function AutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  );
}

export default AutoFocus;