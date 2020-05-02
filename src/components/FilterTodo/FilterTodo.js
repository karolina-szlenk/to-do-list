import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Icon } from "semantic-ui-react";
import { ACTION_SET_VISIBILITY_FILTER, ACTION_SEARCH_TODO } from "../../modules/actions";
import { filters } from "../../modules/actions";

function FilterTodo() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actionSearchTodo(inputValue);
    setInputValue("");
  };

  const dispatch = useDispatch();
  const actionSetVisibilityFilter = (filter) =>
    dispatch(ACTION_SET_VISIBILITY_FILTER(filter));
  const actionSearchTodo = (inputValue) =>
    dispatch(ACTION_SEARCH_TODO(inputValue));

  const buttons = [{title: "Show All", icon: "tasks" }, {title: "Show Todo", icon: "circle outline" }, {title: "Show Done", icon: "check circle outline" }]

  const renderButtons = filters.map((filter, i) => (
    <Button
      animated="vertical"
      onClick={() => actionSetVisibilityFilter(filter)}
      key={`filter-${i}`}
    >
      <Button.Content hidden>{buttons[i].title}</Button.Content>
      <Button.Content visible>
        <Icon name={buttons[i].icon} />
      </Button.Content>
    </Button>
  ));

  return (
    <div>
      <form className="addTodo__form" onSubmit={handleSubmit}>
        <Input
          action={{ icon: "search" }}
          placeholder="Search task..."
          value={inputValue}
          onChange={handleChange}
        />{" "}
        <br></br>
        <Button.Group>
          {renderButtons}
        </Button.Group>
      </form>
    </div>
  );
}

export default FilterTodo;
