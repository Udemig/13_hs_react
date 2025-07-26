"use client";

import { useEffect, useState } from "react";

const UsersClient = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          {user.firstName}
          {user.lastName}
        </div>
      ))}
    </div>
  );
};

export default UsersClient;
