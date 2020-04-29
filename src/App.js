import React from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";
import "./components/AddTodo/AddTodo";
import AddTodo from "./components/AddTodo/AddTodo";
import Todos from './components/Todos'

function App() {
  return (
    <div>
      <Grid divided="vertically">
        <Grid.Row columns={1}>
          <Grid.Column>
            <h2 className="header__app title">TO DO APP</h2>
            <AddTodo />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
          <h2 className="header__app subtitle">TO DO</h2>
          <Todos />
          </Grid.Column>
          <Grid.Column>
          <h2 className="header__app subtitle">DONE</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
