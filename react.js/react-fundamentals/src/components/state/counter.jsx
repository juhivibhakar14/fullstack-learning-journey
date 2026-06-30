import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function countAdd() {
    setCount(count + 1);
  }

  function countSub() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={countAdd}>+</button>

      <button onClick={countSub}>-</button>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;