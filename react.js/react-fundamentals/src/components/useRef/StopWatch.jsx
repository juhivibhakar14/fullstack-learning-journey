import { useRef } from "react";

function StopWatch() {
  const intervalRef = useRef(null);

  function handleStart() {
    intervalRef.current = setInterval(() => {
      console.log("Running...");
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default StopWatch;