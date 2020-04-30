import { TODOS_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  todos: [],
  showAll: true,
  showTodo: false,
  showDone: false,
};

let reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      return (state = {
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.value,
            completed: false,
          },
        ],
      });
    case TODOS_ACTION_TYPES.TOGGLE_TODO:
      const todosCopy = [...state.todos];
      todosCopy.map((todo) =>
        todo.id === action.id ? (todo.completed = !todo.completed) : null
      );
      return (state = {
        ...state,
        todos: todosCopy,
      });
    case TODOS_ACTION_TYPES.REMOVE_TODO:
      return (state = {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      });
    case TODOS_ACTION_TYPES.SHOW_ALL:
      return (state = {
        ...state,
        showAll: true,
        showTodo: false,
        showDone: false,
      });
    case TODOS_ACTION_TYPES.SHOW_TODO:
      return (state = {
        ...state,
        showAll: false,
        showTodo: true,
        showDone: false,
      });
    case TODOS_ACTION_TYPES.SHOW_DONE:
      return (state = {
        ...state,
        showAll: false,
        showTodo: false,
        showDone: true,
      });
    default:
      return state;
  }
};

export default reducer;
