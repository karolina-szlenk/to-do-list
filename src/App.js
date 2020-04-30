import React from 'react';
import './App.css';
import { Grid, Icon } from 'semantic-ui-react';
import './components/AddTodo/AddTodo';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos'

function App() {
  return (
    <div>
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className='header'>
              <h2 className='header__app title'>TO DO APP...</h2>
              <Icon className='header__icon' name='pencil' size='big'></Icon>
            </div>
            <AddTodo />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Todos />
    </div>
  );
}

export default App;
