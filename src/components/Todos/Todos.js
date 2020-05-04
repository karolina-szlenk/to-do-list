import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Segment, Button, Icon, Message, Dimmer, Loader, Image } from "semantic-ui-react";
import { ACTION_TOGGLE_TODO, ACTION_REMOVE_TODO, ACTION_INIT_TODOS_FROM_BASE, ACTION_REMOVE_TODO_FROM_BASE} from "../../modules/actions";
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

  useEffect(() => {
    actionInitTodos();
  }, []);

  const handleClick = (element) => {
    actionToggleTodo(element);
  };

  const handleRemove = (element) => {
    actionRemoveTodo(element);
    actionRemoveTodoFromBase(element);
  };

  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <Segment
        key={todo.id}
        onClick={() => handleClick(todo.key)}
        className="todos__segment"
      >
        {todo.completed ? (
          <Icon name="check circle outline" size="large" color="pink"></Icon>
        ) : (
          <Icon name="circle outline" size="large" color="violet"></Icon>
        )}
        {todo.title}
        <Button
          icon="trash"
          color="grey"
          onClick={() => handleRemove(todo.key)}
        ></Button>
      </Segment>
    ));

  return (
    <div>
      <h2 className="header__app subtitle">MY TASKS</h2>
      {!todosError && !todosLoading && searchTodo
        ? renderTodos(searchTodoByName)
        : renderTodos(todosVisible)}

      {todosError && (
        <Message negative header='Błąd pobierania danych!'/>
      )}

      {todosLoading && (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Ładowanie..." />
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      )}
    </div>
  );
}

export default Todos;
