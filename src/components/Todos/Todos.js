import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Segment, Button, Message, Dimmer, Loader, Image } from "semantic-ui-react";
import { ACTION_TOGGLE_TODO, ACTION_REMOVE_TODO, ACTION_INIT_TODOS_FROM_BASE, ACTION_REMOVE_TODO_FROM_BASE,
ACTION_TOGGLE_TODO_TO_BASE } from "../../modules/actions";
import {
  selectVisibleTodos,
  selectSearchTodo,
  selectSearchTodoByName, 
  selectTodosLoading,
  selectTodosError
} from "../../modules/selector";
import "./Todos.css";

function Todos() {
  const todosVisible = useSelector((state) => selectVisibleTodos(state));
  const searchTodo = useSelector((state) => selectSearchTodo(state));
  const searchTodoByName = useSelector((state) =>
    selectSearchTodoByName(state)
  );
  const todosLoading = useSelector((state) => selectTodosLoading(state));
  const todosError = useSelector((state) => selectTodosError(state));
  const dispatch = useDispatch();
  const actionToggleTodo = (key) => dispatch(ACTION_TOGGLE_TODO(key));
  const actionRemoveTodo = (key) => dispatch(ACTION_REMOVE_TODO(key));
  const actionInitTodos = () => dispatch(ACTION_INIT_TODOS_FROM_BASE());
  const actionRemoveTodoFromBase = (key) =>
    dispatch(ACTION_REMOVE_TODO_FROM_BASE(key));
  const actionToggleTodoToBase = (key) => dispatch(ACTION_TOGGLE_TODO_TO_BASE(key));

  useEffect(() => {
    actionInitTodos();
  }, []);

  const handleClick = (element) => {
    actionToggleTodo(element);
    actionToggleTodoToBase(element)
  };

  const handleRemove = (element) => {
    actionRemoveTodo(element);
    actionRemoveTodoFromBase(element);
  };

  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <Segment
        key={todo.key}    
        className="todos__segment"
      >
        {todo.completed ? (
          <Button circular icon="check circle outline" size="large" color="pink" onClick={() => handleClick(todo)}></Button>
        ) : (
          <Button circular icon="circle outline" size="large" color="violet" onClick={() => handleClick(todo)}></Button>
        )}
        {todo.title}
        <Button
          icon="trash"
          color="grey"
          onClick={() => handleRemove(todo)}
        ></Button>
      </Segment>
    ));

  return (
    <div>
      <h2 className="header__app subtitle">MY TASKS</h2>
      {!todosError && !todosLoading && searchTodo
        ? (searchTodoByName.length > 0 ? renderTodos(searchTodoByName) : <Message negative header='No search results found!'/>)
        : renderTodos(todosVisible)}

      {todosError && (
        <Message negative header='
        data download error!'/>
      )}

      {todosLoading 
      && 
      (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Loading..." />
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      )
      }
    </div>
  );

  
}

export default Todos;
