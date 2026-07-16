import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <h1>Welcome to React</h1>
  );
}

export default App;