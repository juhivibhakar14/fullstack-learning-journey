import { useState, useEffect } from "react";

function WelcomePopup() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <h1>Welcome Page</h1>

      {showMessage && <h2>👋 Welcome Juhi!</h2>}
    </>
  );
}

export default WelcomePopup;