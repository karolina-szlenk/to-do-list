import React, { useState } from "react";
import { Input, Button, Icon } from "semantic-ui-react";

function SearchTodo() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <form className="addTodo__form" onSubmit={handleSubmit}>
      <Input
        action={{ icon: "search" }}
        placeholder="Search task..."
        value={inputValue}
        onChange={handleChange}
      />{" "}
      <br></br>
      <Button.Group>
        <Button animated="vertical">
          <Button.Content hidden>Show All</Button.Content>
          <Button.Content visible>
            <Icon name="tasks" />
          </Button.Content>
        </Button>
        <Button animated="vertical">
          <Button.Content hidden>Show To Do</Button.Content>
          <Button.Content visible>
            <Icon name="circle outline" />
          </Button.Content>
        </Button>
        <Button animated="vertical">
          <Button.Content hidden>Show Done</Button.Content>
          <Button.Content visible>
            <Icon name='check circle outline' />
          </Button.Content>
        </Button>
      </Button.Group>
    </form>
  );
}

export default SearchTodo;
