import { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <>
      <h1>User List</h1>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default FetchUsers;