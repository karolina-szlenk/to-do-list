import React from 'react';
import { useSelector } from 'react-redux';
import { Segment, Button } from 'semantic-ui-react'
import { selectTodos } from '../../modules/selector';

function Todos() {
  const todos = useSelector(state => selectTodos(state));

  const renderTodos = todos.map((todo) => (
    <Segment key={todo.id}>
      {todo.completed ? <Button icon='circle'></Button> : <Button icon='circle outline'></Button>}
      {todo.title}
      <Button icon='close'></Button>
    </Segment>
  ));

  return <div>{renderTodos}</div>;
}

export default Todos;
