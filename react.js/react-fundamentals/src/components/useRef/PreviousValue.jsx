import { useRef, useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    setPreviousCount(previousCountRef.current);
    previousCountRef.current = count;
  }, [count]);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {previousCount}</h2>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Counter;