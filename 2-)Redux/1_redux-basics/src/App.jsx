import React from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  return (
    <div className="vh-100">
      <div className="container p-5">
        {/* Title */}
        <h1 className="text-center fs-1 fw-bold">
          <span className="text-warning">Redux</span> CRUD
        </h1>
        {/* Form */}
        <Form />

        {/* List */}
        <List />
      </div>
    </div>
  );
};

export default App;
