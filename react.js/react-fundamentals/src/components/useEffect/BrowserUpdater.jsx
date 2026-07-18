import { useState, useEffect } from "react";

function BrowserTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={handleClick}>
        Increment
      </button>
    </>
  );
}

export default BrowserTitleUpdater;