import { useState } from "react";

function NotificationCount() {
  const [notificationCount, setNotificationCount] = useState(5);

  function handleClick() {
    if (notificationCount > 0) {
      setNotificationCount(0);
    } else {
      setNotificationCount(5);
    }
  }

  return (
    <>
      <h2>Notifications</h2>

      {notificationCount > 0 && (
        <p>🔔 You have {notificationCount} notifications</p>
      )}

      <button onClick={handleClick}>
        {notificationCount > 0
          ? "Clear Notifications"
          : "Add Notifications"}
      </button>
    </>
  );
}

export default NotificationCount;