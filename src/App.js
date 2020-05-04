import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import AddTodo from "./components/AddTodo/AddTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import Todos from "./components/Todos/Todos";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="header__container">
        <h2 className="header__app title">TO DO LIST...</h2>
        <Icon className="header__icon" name="pencil" size="big"></Icon>
      </div>
      <div className="app_wrapper">
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <br></br>
              <AddTodo />
              <br></br>
              <FilterTodo />
              <Todos />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
