import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import './AddTodo.css'

function AddTodo() {
  return (
    <form className="addTodo__form">
      <Input placeholder="Add task"/>
      <Button type="submit" icon="plus"></Button>
    </form>
  );
}

export default AddTodo;
