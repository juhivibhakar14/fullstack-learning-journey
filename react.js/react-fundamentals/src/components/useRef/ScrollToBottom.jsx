import { useRef } from "react";

function ScrollExample() {
  const bottomRef = useRef(null);

  function handleScroll() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div>
      <button onClick={handleScroll}>Go to Bottom</button>

      <div style={{ height: "1000px" }}>
        <h2>Top of Page</h2>
      </div>

      <h2 ref={bottomRef}>🎉 Bottom of Page</h2>
    </div>
  );
}

export default ScrollExample;