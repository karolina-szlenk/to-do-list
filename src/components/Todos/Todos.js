import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Segment, Button, Grid , Icon } from 'semantic-ui-react'
import { ACTION_TOGGLE_TODO, ACTION_REMOVE_TODO } from '../../modules/actions'
import {
  selectTodosCompleted,
  selectTodosIncompleted,
} from '../../modules/selector'
import './Todos.css'

function Todos() {

  const todosCompleted = useSelector((state) => selectTodosCompleted(state));
  const todosIncompleted = useSelector((state) => selectTodosIncompleted(state));

  const dispatch = useDispatch();
  const actionToggleTodo = (id) => dispatch(ACTION_TOGGLE_TODO(id));
  const actionRemoveTodo = (id) => dispatch(ACTION_REMOVE_TODO(id));

  const handleClick = (element) => {
    actionToggleTodo(element)
  };

  const handleRemove = (element) => {
    actionRemoveTodo(element)
  }

  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <Segment key={todo.id} onClick={() => handleClick(todo.id)} className='todos__segment'>
        {todo.completed ? (
          <Icon name='check circle outline' size='large'></Icon>
        ) : (
            <Icon name='circle outline' size='large'></Icon>
          )}
        {todo.title}
        <Button icon='trash' onClick={() => handleRemove(todo.id)}></Button>
      </Segment>
    ));

  return (
    <div>
      <Grid stackable dividied='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h2 className='header__app subtitle'>TO DO</h2>
            {renderTodos(todosIncompleted)}
          </Grid.Column>
          <Grid.Column>
            <h2 className='header__app subtitle'>DONE</h2>
            {renderTodos(todosCompleted)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Todos;
