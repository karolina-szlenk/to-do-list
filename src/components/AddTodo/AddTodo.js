import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "semantic-ui-react";
import { ACTION_ADD_TODO_TO_BASE } from "../../modules/actions";
import "./AddTodo.css";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAddTodoToBase(inputValue);
    setInputValue("");
  };

  const dispatch = useDispatch();

  const actionAddTodoToBase = (todo) => dispatch(ACTION_ADD_TODO_TO_BASE(todo))

  return (
    <form className="addTodo__form" onSubmit={handleSubmit}>
      <Input
        action={{ icon: "plus" , color: 'yellow' }}
        placeholder="Enter new task..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}

export default AddTodo;
