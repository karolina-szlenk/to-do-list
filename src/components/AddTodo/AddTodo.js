import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { Input } from 'semantic-ui-react';
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
      <Input action={{ icon: 'plus' }} placeholder='Enter new task' value={inputValue} onChange={handleChange}/>
    </form>
  );
}

export default AddTodo;
