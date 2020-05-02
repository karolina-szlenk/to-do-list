import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Segment, Button, Icon } from "semantic-ui-react";
import { ACTION_TOGGLE_TODO, ACTION_REMOVE_TODO } from "../../modules/actions";
import {
  selectVisibleTodos,
  selectSearchTodo,
  selectSearchTodoByName, 
} from "../../modules/selector";
import "./Todos.css";

function Todos() {
  const todosVisible = useSelector((state) => selectVisibleTodos(state));
  const searchTodo = useSelector((state) => selectSearchTodo(state));
  const searchTodoByName = useSelector((state) =>
    selectSearchTodoByName(state)
  );
  const dispatch = useDispatch();
  const actionToggleTodo = (id) => dispatch(ACTION_TOGGLE_TODO(id));
  const actionRemoveTodo = (id) => dispatch(ACTION_REMOVE_TODO(id));

  const handleClick = (element) => {
    actionToggleTodo(element);
  };

  const handleRemove = (element) => {
    actionRemoveTodo(element);
  };

  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <Segment
        key={todo.id}
        onClick={() => handleClick(todo.id)}
        className="todos__segment"
      >
        {todo.completed ? (
          <Icon name="check circle outline" size="large"></Icon>
        ) : (
          <Icon name="circle outline" size="large"></Icon>
        )}
        {todo.title}
        <Button icon="trash" onClick={() => handleRemove(todo.id)}></Button>
      </Segment>
    ));

  return (
    <div>
      <h2 className="header__app subtitle">MY TASKS</h2>
      {searchTodo ? renderTodos(searchTodoByName) : renderTodos(todosVisible)}
    </div>
  );
}

export default Todos;
