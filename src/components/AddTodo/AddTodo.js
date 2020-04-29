import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { Button, Input } from 'semantic-ui-react';
import { ACTION_ADD_TODO } from '../../modules/actions'
import './AddTodo.css'

function AddTodo() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actionAddTodo(inputValue);
    setInputValue('');
  };

  const dispatch = useDispatch();

  const actionAddTodo = (todo) => dispatch(ACTION_ADD_TODO(todo));

  return (
    <form className='addTodo__form' onSubmit={handleSubmit}>
      <Input placeholder='Add task' value={inputValue} onChange={handleChange}/>
      <Button type='submit' icon='plus'></Button>
    </form>
  );
}

export default AddTodo;
