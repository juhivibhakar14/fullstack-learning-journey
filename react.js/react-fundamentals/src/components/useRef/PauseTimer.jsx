import { useRef, useState } from "react";

function PauseTimer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function handleStart() {
    // Prevent multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function handleResume() {
    // Prevent multiple intervals
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  }

  return (
    <div>
      <h2>Time: {seconds} sec</h2>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleResume}>Resume</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default PauseTimer;