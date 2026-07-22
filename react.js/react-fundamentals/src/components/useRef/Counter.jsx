import { useRef } from "react";

function Counter() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current++;
    console.log(countRef.current);
  }

  return (
    <>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default Counter;