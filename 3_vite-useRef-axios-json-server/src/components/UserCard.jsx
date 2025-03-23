import React from "react";

const UserCard = ({ user }) => {
  // Props geçilen bileşende propsların kullanılırken uzun uzun (props.user.name,props.user.surname) yazmak yerine bileşen içerisinde obje dağıtma yöntemi kullanılarak yazım daha kolay hale getirilir.
  // !    const { user } = props; obje dağıtma uzun yol

  return (
    <div className="card">
      <img className="card-img-top" src={user?.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">
          <span>{user?.firstName} </span>
          <span>{user?.lastName} </span>
        </h5>
        <div className="card-text">
          <p>Phone:{user?.phone} </p>
          <p>Email:{user?.email} </p>
          <p>İd:{user?.id} </p>
        </div>
        <a href="#" className="btn btn-primary">
          Profile Bak
        </a>
      </div>
    </div>
  );
};

export default UserCard;
