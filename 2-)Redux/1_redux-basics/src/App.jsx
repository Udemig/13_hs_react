import React, { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import api from "./utils";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/actions/todoActions";

const App = () => {
  // Dispatch kurulumu
  const dispatch = useDispatch();
  useEffect(() => {
    //     api
    //     .get("/todos")
    //     .then((res) => dispatch({ type: "GET_TODO", payload: res.data }))
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    api
      .get("/todos")
      .then((res) => dispatch(getTodos(res.data)))
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
