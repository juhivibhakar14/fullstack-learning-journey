import { useState } from "react";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <h2>{isLoggedIn ? "Welcome Juhi!" : "Please Login"}</h2>

      <button onClick={handleClick}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default LoginLogout;