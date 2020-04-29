import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../modules/selector";

function Todos() {
  const todos = useSelector((state) => selectTodos(state));
  console.log(todos);

  const renderTodos = todos.map((todo) => (
    <div key={todo.id}>
      {todo.completed ? "✔" : "-"}
      {todo.title}
    </div>
  ));

  return <div>{renderTodos}</div>;
}

export default Todos;
