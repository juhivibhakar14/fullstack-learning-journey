import { useState } from "react";

function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);

  function handleClick() {
    setIsAdmin(!isAdmin);
  }

  return (
    <>
      <h1>{isAdmin ? "Hello Admin" : "Hello User"}</h1>

      {isAdmin ? (
        <ul>
          <li>📊 Dashboard</li>
          <li>👥 Users</li>
          <li>⚙️ Settings</li>
        </ul>
      ) : (
        <ul>
          <li>🏠 Home</li>
          <li>👤 Profile</li>
        </ul>
      )}

      <button onClick={handleClick}>
        {isAdmin ? "Switch to User" : "Switch to Admin"}
      </button>
    </>
  );
}

export default AdminPanel;