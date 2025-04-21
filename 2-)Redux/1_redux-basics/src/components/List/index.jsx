import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";

const List = () => {
  // Store içerisindeki todoReducer içerisinde yer alan todos dizisine eriş
  const { todos } = useSelector((store) => store.todoReducer);

  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
