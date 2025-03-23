import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UseEffect = () => {
  const [users, setUsers] = useState("");
  // Sayfa yüklendiği anda api isteği at
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users.splice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Use Effect Example</h1>

      <div className="user-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
