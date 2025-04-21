import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container py-5 mx-auto min-vh-100  w-100">{children}</div>
  );
};

export default Container;
