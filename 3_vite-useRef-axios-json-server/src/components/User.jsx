import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const User = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(1);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {/* Top */}
      <div className="d-flex align-items-center justify-content-center gap-5">
        {/* disabled bir elemanın tıklanamaz olmasını sağlamak için kullanılır.disanbled=true yapılırsa ilgili elemanın tıkalanamaz olması sağlanır.Bizde burada eğer userId ise ise tıklanamaz olmasını sağladık.Çünkü eğer userId===1 olursa yani kullanıcı id'si 1 e eşitse (===) operatörü true döndürecek  */}
        <button
          disabled={userId === 1}
          onClick={() => setUserId(userId - 1)}
          className="btn btn-danger"
        >
          Önceki
        </button>
        <h1>Kullanıcı Id: {userId} </h1>
        <button
          onClick={() => setUserId(userId + 1)}
          className="btn btn-success"
        >
          Sonraki
        </button>
      </div>
      {/* Users */}

      <div className="container mt-5">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default User;
